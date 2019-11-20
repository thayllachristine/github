import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import getUser from '../../resources/getUser.js';

const StUsr = styled.div`
  height: 400px;
  margin: 12.5px;
  padding: 10px;
  width: 275px;
`;

const Image = styled.img`
  border: 1px solid #ccc;
  border-radius: 2.5px;
  height: 250px;
  margin: 0 0 7.5px 0;
  width: 250px;
`;

const Name = styled.p`
  font-size: 26px;
  font-weight: 700;
`;

const Bio = styled.p`
  color: #666;
  line-height: 26px;
`;

const User = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    getUser('thayllachristine')
      .then(r => {
        console.log(r.data)
        setAvatar(r.data.avatar_url);
        setName(r.data.name);
        setBio(r.data.bio);
    });
  });

  return (
    <StUsr>
      <Image src={avatar} alt='User avatar' />
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
    </StUsr>
  );
};

export default User;
