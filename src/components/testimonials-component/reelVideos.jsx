import React, { useRef, useState } from "react";
import video1 from "../../assets/videos/testi01.mov"
// import video2 from "../../assets/videos/testi02.mov"
import video3 from "../../assets/videos/testi03.mov"

const ReelVideos = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });

    const selectedVideo = videoRefs.current[index];

    if (selectedVideo.paused) {
      selectedVideo.play();
      setPlayingIndex(index);
    } else {
      selectedVideo.pause();
      setPlayingIndex(null);
    }
  };

  const videos = [video1, video3];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">

          {videos.map((video, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              
              <div className="reel-card" onClick={() => handlePlay(index)}>
                
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video}
                  className="reel-video"
                  playsInline
                />

                {/* Play Button */}
                {playingIndex !== index && (
                  <div className="play-overlay">
                    ▶
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ReelVideos;