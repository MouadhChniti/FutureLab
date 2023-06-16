import React from 'react';
import '../styles/loadingScreen.css';
import { BeatLoader,ClockLoader,HashLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <HashLoader color="#7D4EF1" loading={true} size={50} />
    </div>
  );
};

export default LoadingScreen;