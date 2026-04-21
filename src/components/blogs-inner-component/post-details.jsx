import React from "react";
import PostImg from "../../assets/img/restaurant/2.jpg";
import PostImg1 from "../../assets/img/restaurant/1.jpg";
import PostImg2 from "../../assets/img/restaurant/3.jpg";
import AuthorIcon from "../../assets/img/team/3.jpg";

import thumb1 from "../../assets/img/restaurant/Gold.jpg";
import thumb2 from "../../assets/img/spa/3.jpg";
import thumb3 from "../../assets/img/slider/7.jpg";

const Post = ({ post }) => {
  
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img src={post.blog_image} className="mb-30 img-fluid" alt="" />
            <h2>{post.name}</h2>

            <div className="description">
              {post.description.map((desc, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>

            <div className="row">
              {post.images.map((img, index) => (
                <div key={index} className="col-md-6">
                  <img
                    src={img}
                    className="mb-30 img-fluid"
                    alt={`Post Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <h6 className="mt-15">{post.conclusion_title}</h6>
            <div className="description">
              {post.conclusion_desc.map((con_desc, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: con_desc }}
                />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="news2-sidebar row">
              <div className="col-md-12">
                {/* <div className="widget search">
                  <form>
                    <input
                      type="text"
                      name="search"
                      placeholder="Type here ..."
                    />
                    <button type="submit">
                      <i className="ti-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div> */}
              </div>
              <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Recent Posts</h6>
                  </div>
                  <ul className="recent">
                    <li>
                      <div className="thum">
                        {" "}
                        <img src={thumb1} alt="" className="img-fluid" />{" "}
                      </div>{" "}
                      <a href="../post/gold-vs-land-which-is-the-best-long-term-investment">Gold vs Land: Which is the Best Long-Term Investment?</a>
                    </li>
                    <li>
                      <div className="thum">
                        {" "}
                        <img src={thumb2} alt="" className="img-fluid" />{" "}
                      </div>{" "}
                      <a href="">How to Get a Home Loan with the Best Interest Rates?</a>
                    </li>
                    <li>
                      <div className="thum">
                        {" "}
                        <img src={thumb3} alt="" className="img-fluid" />{" "}
                      </div>{" "}
                      <a href="">
                      Stamp Duty & Registration Charges in Chennai: What You Need to Know?
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Archives</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="#">December 2024</a>
                    </li>
                    <li>
                      <a href="#">November 2024</a>
                    </li>
                    <li>
                      <a href="#">October 2024</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Categories</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="">
                        <i className="ti-angle-right"></i>Restaurant
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ti-angle-right"></i>Hotel Design
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ti-angle-right"></i>Spa Center
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Tags</h6>
                  </div>
                  <ul className="tags">
                    <li>
                      <a href="#">Restaurant</a>
                    </li>
                    <li>
                      <a href="#">Hotel</a>
                    </li>
                    <li>
                      <a href="#">Spa</a>
                    </li>
                    <li>
                      <a href="#">Health Club</a>
                    </li>
                    <li>
                      <a href="#">Luxury Hotel</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Post;
