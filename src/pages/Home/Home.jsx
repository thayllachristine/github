import React from 'react';
import styled from 'styled-components';
import User from '../../components/User';
import Repo from '../../components/Repo';

const Grid = styled.div`
  display: flex;
`;

const Home = () => (
  <Grid>
    <User />
    <Repo />
  </Grid>
);

export default Home;
