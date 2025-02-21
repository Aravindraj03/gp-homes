import { useState } from "react";

import blogimg1 from "../../assets/img/restaurant/2.jpg";
import blogimg2 from "../../assets/img/spa/3.jpg";
import blogimg3 from "../../assets/img/slider/7.jpg";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const postsPerPage = 2; // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1);  

  const posts = [
    {
      img: blogimg1,
      date: "02",
      month: "Dec",
      tag: "Restaurant",
      title: "Why Invest in a Plot with GP Homes?",
      desc: "When it comes to real estate investments, buying a plot is often overlooked in favor of ready-to-move-in homes. However, investing in land offers unique advantages that can benefit both short- and long-term goals. Here’s why you should consider investing in a plot with GP Homes.",
      slug: "why-invest-in-a-plot-with-gp-homes",
    },
    {
      img: blogimg2,
      date: "04",
      month: "Dec",
      tag: "Spa Center",
      title: "Gold vs. Land: Which is the Best Long-Term Investment?",
      desc: "When it comes to long-term investments, two options often stand out: gold and land. Both have been considered reliable forms of wealth storage for centuries, but each offers distinct benefits and risks. So, which is the better investment? Let’s explore the advantages of investing in land and why choosing a plot with GP Homes could be your smartest move for the future.",
      slug: "gold-vs-land-which-is-the-best-long-term-investment",
    },
    {
      img: blogimg3,
      date: "06",
      month: "Dec",
      tag: "Hotel Design",
      title: "How to Get a Home Loan with the Best Interest Rates?",
      desc: "Buying a home is a dream for many, and securing a home loan is often the first step in making that dream a reality. However, getting the best interest rate on your home loan can significantly impact your financial planning. A lower interest rate means lower EMIs (Equated Monthly Instalments) and less burden on your finances in the long run.",
      slug: "how-to-get-a-home-loan-with-the-best-interest-rates",
    },
    {
      img: blogimg1,
      date: "06",
      month: "Dec",
      tag: "Hotel Design",
      title:
        "Stamp Duty & Registration Charges in Chennai: What You Need to Know?",
      desc: "Buying a home or a plot is a significant milestone, but beyond the property price, there are additional costs you need to consider—Stamp Duty and Registration Charges. These charges are mandatory for legally registering your property under your name and ensuring a hassle-free ownership experience.",
      slug: "stamp-duty-registration-charges-in-chennai-what-you-need-to-know",
    },
    {
      img: blogimg2,
      date: "06",
      month: "Dec",
      tag: "Hotel Design",
      title: "5 Mistakes to Avoid When Buying Property in Chennai",
      desc: "Buying property is a significant milestone, whether for personal use or investment. Chennai, a rapidly growing metropolitan city, offers a variety of real estate options—from residential plots to luxury apartments. However, a lack of due diligence can lead to costly mistakes. To ensure a smooth and hassle-free property purchase, avoid these five common mistakes when buying property in Chennai.",
      slug: "5-mistakes-to-avoid-when-buying-property-in-chennai",
    },
    {
      img: blogimg3,
      date: "06",
      month: "Dec",
      tag: "Hotel Design",
      title: "Why Vastu Shastra Matters in Real Estate & Home Buying",
      desc: "Buying a home is one of the most significant decisions in life. While factors like location, budget, and amenities play a crucial role, many homebuyers in India also consider Vastu Shastra, an ancient architectural science that promotes harmony and well-being. But why does Vastu matter in real estate, and how can it influence your home’s energy, prosperity, and overall happiness? Let’s explore.",
      slug: "why-vastu-shastra-matters-in-real-estate-home-buying",
    },
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate posts to display for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="news2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
            {currentPosts.map((post, index) => (
                <div className="col-md-12" key={index}>
                  <div className="item">
                    <div className="post-img">
                      <Link to={`/post/${post.slug}`}>
                        {" "}
                        <img src={post.img} alt="" className="img-fluid" />{" "}
                      </Link>
                      <div className="date">
                        <Link to={`/post/${post.slug}`}>
                          {" "}
                          <span>{post.month}</span> <i>{post.date}</i>{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="post-cont">
                      <Link to={`/post/${post.slug}`}>
                        <span className="tag">{post.tag}</span>
                      </Link>
                      <h5>
                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                      </h5>
                      <p>{post.desc}</p>
                      <div className="butn-dark">
                        {" "}
                        <Link to={`/post/${post.slug}`}>
                          <span>Read More</span>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-md-12">
                <ul className="news-pagination-wrap align-center mb-30 mt-30">                 

                  <li>
                    <a
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="ti-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <li key={page}>
                      <a
                        className={currentPage === page ? "active" : ""}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <i className="ti-angle-right"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="news2-sidebar row">
              <div className="col-md-12">
                <div className="widget search">
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
                </div>
              </div>
              <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Recent Posts</h6>
                  </div>
                  <ul className="recent">
                  {currentPosts.map((post, index) => (
                      <li key={index}>
                        <div className="thum">
                          {" "}
                          <img
                            src={post.img}
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </div>
                        <Link to={`/post/${post.slug}`}> {post.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Archives</h6>
                  </div>
                  <ul>
                    {["December 2024", "November 2024", "October 2024"].map(
                      (month, index) => (
                        <li key={index}>
                          <a href="#">{month}</a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Categories</h6>
                  </div>
                  <ul>
                    {["Restaurant", "Hotel Design", "Spa Center"].map(
                      (category, index) => (
                        <li key={index}>
                          <a href="/post">
                            <i className="ti-angle-right"></i>
                            {category}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="widget">
                  <div className="widget-title">
                    <h6>Tags</h6>
                  </div>
                  <ul className="tags">
                    {[
                      "Restaurant",
                      "Hotel",
                      "Spa",
                      "Health Club",
                      "Luxury Hotel",
                    ].map((tag, index) => (
                      <li key={index}>
                        <a href="/post">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
