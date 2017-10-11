import React from 'react';

const LoadingIndicator = () => (
  <div className={`container`}>
    <div className={`load-wrapp`}>
          <div className={`load-5`}>
              <div className={`ring-2`}>
                  <div className={`ball-holder`}>
                      <div className={`ball`}></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

export default LoadingIndicator;
