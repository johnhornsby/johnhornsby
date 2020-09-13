import React from 'react';

import withApollo from '../lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import ProjectGrid from '../components/organism/ProjectGrid';

const Index = () => {
  return (
    <>
      <ProjectGrid />
    </>
  );
};

export default withApollo(Index, { getDataFromTree });
