import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import roomImage1 from "../../assets/img/rooms/aboutus-gplogo.jpeg";
import '../../styles/PlotsVideo.css';

// Data for all videos
const videoData = [
  {
    src: 'https://www.youtube.com/embed/MjjKtnWObrs?si=IcFJxnVDnY4eq5qH&autoplay=1',
    thumbnail: roomImage1,
  },
  {
    src: 'https://www.youtube.com/embed/NNA005FLQJ4?si=gPm_iYwyxDd78_Pv&autoplay=1',
    thumbnail: roomImage1,
  },
  {
    src: 'https://www.youtube.com/embed/MjjKtnWObrs?si=IcFJxnVDnY4eq5qH&autoplay=1',
    thumbnail: roomImage1,
  },
  {
    src: 'https://www.youtube.com/embed/NNA005FLQJ4?si=gPm_iYwyxDd78_Pv&autoplay=1',
    thumbnail: roomImage1,
  },
];

const VideoCard = ({ src, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-wrapper rounded overflow-hidden position-relative">
      {isPlaying ? (
        <div className="custom-video-container">
          <iframe
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
      ) : (
        <div
          className="video-thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
          onClick={() => setIsPlaying(true)}
        >
          <div className="play-button">&#9658;</div>
        </div>
      )}
    </div>
  );
};


const PlotsVideo = () => {
  return (
    <Container className="my-5">
      <h3 className="mb-4 text-center">Project Videos</h3>
      <Row className="g-4">
        {videoData.map((video, index) => (
          <Col key={index} lg={3} md={4} sm={6} xs={12}>
            <VideoCard src={video.src} thumbnail={video.thumbnail} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlotsVideo;