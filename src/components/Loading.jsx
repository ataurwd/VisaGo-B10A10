import Lottie from 'lottie-react';
import React from 'react';
import LoadingJson from "../../src/lottie/loading.json";

const Loading = () => {
    return (
        <div>
          <Lottie animationData={LoadingJson} loop={true} className="h-96" />
          </div>
    );
};

export default Loading;