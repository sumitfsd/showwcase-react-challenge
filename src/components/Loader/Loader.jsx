import React from 'react';
import { DotWrapper, Dot } from './Loader.styled';

const LoadingDots = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};

export default LoadingDots;
