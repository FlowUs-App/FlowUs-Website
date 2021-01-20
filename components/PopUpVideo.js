import React, { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";

function PopUpVideo({
  isThumb,
  thumb,
  watchText,
  iconStyleClass,
  channel,
  videoId,
  gradient,
  gradientClass,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <ModalVideo
        channel={channel}
        videoId={videoId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      {isThumb ? (
        <div className={`video-with-thumb text-center ${className}`}>
          <div className="thumb">
            <img src={thumb} alt="video thumb" />
          </div>
          <div className="video-btn position--center">
            <button className="play__btn" onClick={() => openModal()}>
              <div className={`video-icon ${iconStyleClass}`} />
            </button>
          </div>
        </div>
      ) : gradient ? (
        <div className={`video-btn-2 ${className}`}>
          <button className="play__btn" onClick={() => openModal()}>
            <div className={`icon-gradient ${gradientClass}`}>
              <div className={`video-icon ${iconStyleClass}`} />
            </div>
            {watchText && (
              <span className="watch-text mt--30 d-block">{watchText}</span>
            )}
          </button>
        </div>
      ) : (
        <div className={`video-btn ${className}`}>
          <button className="play__btn" onClick={() => openModal()}>
            <div className={`video-icon ${iconStyleClass}`} />
            {watchText && (
              <span className="watch-text mt--30 d-block">{watchText}</span>
            )}
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default PopUpVideo;
