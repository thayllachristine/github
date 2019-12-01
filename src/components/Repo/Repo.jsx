import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getRepoList from './../../resources/getRepoList.js';
import Octicon, { GitBranch, PrimitiveDot, Star } from '@primer/octicons-react';

const Repos = styled.div`
  margin: 12.5px 0;
  padding: 10px 30px;
  width: 945px;
`;

const RepoList = styled.ul`
  color: red;
  list-style-type: none;
`;

const RepoListItems = styled.li`
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
`;

const Name = styled.p`
  color: #0366d6;
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.p`
  color: #666;
  font-size: 12px;
  line-height: 16px;
  padding: 7.5px 0;
`;

const Details = styled.div`
  padding: 1.25px 0 7.5px 0;
  span {
    color: #666;
    font-size: 10px;
    margin-right: 15px;
    svg {
      margin-bottom: -1px;
      width: 12px;
    }
  }
`;

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRepoList('thayllachristine')
      .then(r => {
        setIsLoading(true);
        setRepos(r.data);
        setIsLoading(false);
      });
    }, [repos.length]);
    
  return (
    <Repos>
      {isLoading 
        ? (<p>Loading...</p>) 
        : (<RepoList>
          {repos.map((repo, k) => 
            <RepoListItems key={k}>
              <Name>{repo.name}</Name>
              <Description>{repo.description}</Description>
              <Details>
                <span>
                  <Octicon icon={PrimitiveDot} />{' '}{repo.language}
                </span>
                {!!repo.stargazers_count
                  ? <span><Octicon icon={Star} />{' '}{repo.stargazers_count}</span> : ''
                }
                {!!repo.forks_count
                  ? <span><Octicon icon={GitBranch} />{' '}{repo.forks_count}</span> : ''
                }
              </Details>
            </RepoListItems>
          )}
        </RepoList>)
      }
    </Repos>
  ) 
};

export default Repo;
