import React, { type CSSProperties } from "react";
import img from '../../assets/bgs.png';
import Frame from '../../assets/Group.png';

const Loading: React.FC = () => {
  const styles: CSSProperties = {
    backgroundImage: `url(${img})`,
    height: '100vh',
    width: '100%',
    zIndex: 100,
  };

  return (
    <div className="bg-cover bg-center bg-gradient-to-b from-[#D5D0FF] to-[#ffffff] bg-blend-overlay w-[430px] m-auto min-h-screen">
      <div
        style={{ ...styles }}
        className="flex flex-col justify-between items-center h-full"
      >
        <div className="flex-1 flex items-center justify-center">
          <img src={Frame} alt="Loading Frame" className="w-[256px] h-[256px]" />
        </div>
        <div className="mb-6">
          <div className="w-6 h-6 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
