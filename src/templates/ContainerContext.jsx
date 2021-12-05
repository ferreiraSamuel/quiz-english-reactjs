import { Container } from '@material-ui/core';
import React from 'react';

const ContainerContext = (props) => {
  return <Container maxWidth="md">{props.children}</Container>;
};

export default ContainerContext;
