import React from 'react';

import { BeatLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <BeatLoader color="#000" loading={true} size={20} />
    </div>
  );
};

export default LoadingScreen;