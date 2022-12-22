import { MutatingDots } from 'react-loader-spinner';
import React from 'react';

const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#542468"
      secondaryColor="#542468"
      radius="12"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
      visible={true}
    />
  );
};

export default Loader;
