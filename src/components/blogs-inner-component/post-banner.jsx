import React from "react";
import bgimage from '../../assets/img/slider/1.jpg';
import icon from '../../assets/img/team/5.jpg';

const PostBanner = ({post}) => {
  return (
    <div
      className="banner-header section-padding valign bg-img bg-fixed"
      style={{
        backgroundImage: `url(${post.banner_image})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-left caption mt-90">
            <h5>
              <a href="/">News</a> / {post.name}
            </h5>
            <h1>{post.name}</h1>
            <div className="post">              
              <div className="date-comment">
                <i className="ti-calendar"></i> {post.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;