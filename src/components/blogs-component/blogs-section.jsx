import { useState } from "react";

import blogimg1 from "../../assets/img/restaurant/01.jpg";
import blogimg2 from "../../assets/img/restaurant/Gold.jpg";
import blogimg3 from "../../assets/img/restaurant/Home Loan.jpg";
import blogimg4 from "../../assets/img/restaurant/E-Stamping.jpg";
import blogimg5 from "../../assets/img/restaurant/Transperent Documentaion.jpg";
import blogimg6 from "../../assets/img/restaurant/entilation & Natural Light.jpg";
import blogimg7 from "../../assets/img/restaurant/dtcpBlog3.jpeg";
import blogimg8 from "../../assets/img/restaurant/considerBlog2.jpeg";
import blogimg9 from "../../assets/img/restaurant/blog5-3.jpeg";
import blogimg10 from "../../assets/img/restaurant/blog6-1.jpeg";
import blogimg11 from "../../assets/img/restaurant/blog8-1.jpeg";
import blogimg12 from "../../assets/img/restaurant/blog7-3.jpeg";


import { Link } from "react-router-dom";

const BlogSection = () => {
  const postsPerPage = 2; // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1);  

  const posts = [
    {
      img: blogimg1,
      date: "02",
      month: "Dec",
      title: "Why Invest in a Plot with GP Homes?",
      desc: "When it comes to real estate investments, buying a plot is often overlooked in favor of ready-to-move-in homes. However, investing in land offers unique advantages that can benefit both short- and long-term goals. Here’s why you should consider investing in a plot with GP Homes.",
      slug: "why-invest-in-a-plot-with-gp-homes",
    },
    {
      img: blogimg2,
      date: "04",
      month: "Dec",
      title: "Gold vs. Land: Which is the Best Long-Term Investment?",
      desc: "When it comes to long-term investments, two options often stand out: Gold and land. Both have been considered reliable forms of wealth storage for centuries, but each offers distinct benefits and risks. So, which is the better investment? Let’s explore the advantages of investing in land and why choosing a plot with GP Homes could be your smartest move for the future.",
      slug: "gold-vs-land-which-is-the-best-long-term-investment",
    },
    {
      img: blogimg3,
      date: "06",
      month: "Dec",
      title: "How to Get a Home Loan with the Best Interest Rates?",
      desc: "Buying a home is a dream for many, and securing a home loan is often the first step in making that dream a reality. However, getting the best interest rate on your home loan can significantly impact your financial planning. A lower interest rate means lower EMIs (Equated Monthly Instalments) and less burden on your finances in the long run.",
      slug: "how-to-get-a-home-loan-with-the-best-interest-rates",
    },
    {
      img: blogimg4,
      date: "06",
      month: "Dec",
      title:
        "Stamp Duty & Registration Charges in Chennai: What You Need to Know?",
      desc: "Buying a home or a plot is a significant milestone, but beyond the property price, there are additional costs you need to consider—Stamp Duty and Registration Charges. These charges are mandatory for legally registering your property under your name and ensuring a hassle-free ownership experience.",
      slug: "stamp-duty-registration-charges-in-chennai-what-you-need-to-know",
    },
    {
      img: blogimg5,
      date: "06",
      month: "Dec",
      title: "5 Mistakes to Avoid When Buying Property in Chennai",
      desc: "Buying property is a significant milestone, whether for personal use or investment. Chennai, a rapidly growing metropolitan city, offers a variety of real estate options—from residential plots to luxury apartments. However, a lack of due diligence can lead to costly mistakes. To ensure a smooth and hassle-free property purchase, avoid these five common mistakes when buying property in Chennai.",
      slug: "5-mistakes-to-avoid-when-buying-property-in-chennai",
    },
    {
      img: blogimg6,
      date: "06",
      month: "Dec",
      title: "Why Vastu Shastra Matters in Real Estate & Home Buying",
      desc: "Buying a home is one of the most significant decisions in life. While factors like location, budget, and amenities play a crucial role, many homebuyers in India also consider Vastu Shastra, an ancient architectural science that promotes harmony and well-being. But why does Vastu matter in real estate, and how can it influence your home’s energy, prosperity, and overall happiness? Let’s explore.",
      slug: "why-vastu-shastra-matters-in-real-estate-home-buying",
    },
    {
      img: blogimg7,
      date: "08",
      month: "Dec",
      title: "DTCP vs CMDA Approval: What Every Property Buyer Should Know",
      desc: "When purchasing a plot in Tamil Nadu, one of the most important factors to check is whether the property has DTCP or CMDA approval. These approvals ensure that the layout follows government regulations and that the land is safe for residential development. Understanding the difference between DTCP and CMDA approval can help buyers avoid legal issues and make a secure investment in real estate.",
      slug: "dtcp-vs-cmda-approval-what-every-property-buyer-should-know",
    },
    {
      img: blogimg8,
      date: "10",
      month: "Dec",
      title: "7 Things to Check Before Buying a Plot in Chennai",
      desc: "Buying a plot is one of the safest real estate investments, but it requires careful verification. From legal documents and approvals to location advantages and infrastructure development, several factors influence the value and security of your investment. Here are seven important things every buyer should check before purchasing a plot in Chennai to ensure a safe and profitable investment.",
      slug: "7-things-to-check-before-buying-a-plot-in-chennai",
    },
    {
      img: blogimg9,
      date: "15",
      month: "apr",
      title:
        "Plots vs Apartments vs Villas: Which is Best for Buying in Chennai?",
      desc: "Choosing between plots, apartments, and villas depends on your budget, lifestyle, and investment goals. Plots offer higher long-term appreciation and flexibility, apartments provide convenience and affordability, while villas deliver luxury and privacy. Understanding the advantages of each option can help you make the right real estate decision in Chennai.",
      slug: "plots-vs-apartments-vs-villas-which-is-best-for-buying-in-chennai",
    },
    {
      img: blogimg10,
      date: "15",
      month: "apr",
      title:
        "Top Upcoming Residential Areas in Chennai for Real Estate Investment in 2026",
      desc: "Chennai’s real estate market is rapidly expanding, with several emerging locations offering great investment potential. Areas like Poonamallee, Thiruninravur, OMR, and Pattabiram are gaining attention due to improved connectivity, infrastructure development, and affordability. These locations are ideal for both residential living and long-term investment, making them some of the top choices for property buyers in 2026.",
      slug: "top-upcoming-residential-areas-in-chennai-for-real-estate-investment-2026",
    },
    {
      img: blogimg12,
      date: "12",
      month: "may",
      title: "Plots Near Chennai Metro: Why Connectivity Boosts Property Value",
      desc: "Connectivity plays a key role in real estate growth, especially in areas close to metro stations. Locations around Poonamallee are gaining strong attention due to the Chennai Metro expansion. Our Project GP Cressida Park benefits from its proximity to the Poonamallee metro, offering easier commuting, better accessibility, and strong future appreciation.. This makes plots in such locations a smart choice for both homebuyers and investors.",
      slug: "plots-near-chennai-metro-why-connectivity-boosts-property-value",
    },
    {
      img: blogimg11,
      date: "12",
      month: "may",
      title: "Chennai Growth Corridors: Where to Invest in Real Estate in 2026",
      desc: "Chennai’s growth corridors are driving the city’s real estate boom, with areas like Pattabiram emerging as strong investment destinations due to improved connectivity, railway access, and upcoming infrastructure developments. As these regions continue to grow, residential demand and property values are steadily increasing. Projects like GP Ponbhoomi in Pattabiram are well-positioned within this growth corridor, offering a great opportunity for buyers looking to invest early in a fast-developing location with promising future returns.",
      slug: "chennai-growth-corridors-where-to-invest-in-real-estate-2026",
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
              {/* <div className="col-md-12">
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
              </div> */}
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
              {/* <div className="col-md-12">
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
              </div> */}
              {/* <div className="col-md-12">
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
              </div> */}
              {/* <div className="col-md-12">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
