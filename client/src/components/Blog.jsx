import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);
  const Fetch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4500/api/admin/getBlogs"
      );
      setData(response.data);
      //   console.log("my data", response.data);
    } catch (error) {
      console.log("Something Error in Axios and URL --->", error);
    }
  };

  useEffect(() => {
    Fetch();
    // console.log("my data", data);
  }, []);

  return (
    <div>
      <div className="blog1">
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/259823492/original/2eb36fdff968cef820f40e78a2faf8339350d0ea/listen-to-your-problems.jpg"
          alt=""
          className="image1"
        />
        <div className="blog2 mt-5">
          <h1>Our Blog</h1>
          <p>
            <span>Home</span>/Blog
          </p>
        </div>
      </div>
      <div className="blog3">
        <h4>OUR BLOG</h4>
        <h2>Latest Blog & News for You</h2>
        <p>
          Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut
          suspendisse pharetra. Finibus condimentum aenean lacinia sem metus
          Integer.{" "}
        </p>
      </div>
      <div className="financialss ">
        {data.map((item, index) => (
          <div key={index} className="financess" data-aos="fade-right">
            <div className="imgbox">
              <img
                src={`http://localhost:4500/api/uploads/${item.image}`}
                alt={item.image}
              />
            </div>
            <h3>{item.title}</h3>
            <div className="icon">
              <i className="ri-calendar-line"></i>
              <span>{item.data}</span>
              <i className="ri-chat-4-line"></i>
              <span>0</span>
            </div>
            <p>{item.description}</p>
            <span>
              READ MORE<i className="ri-arrow-right-line fs-1"></i>
            </span>
          </div>
        ))}
      </div>
      <div className="blog4">
        <h3>Having Trouble Managing Your Finances?</h3>
        <p>
          Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut
          suspendisse. Pharetra finibus condimentum aenean lacinia sem metus
          Integer dapibus diam justo.
        </p>
        <button>CONTACT US NOW</button>
      </div>
    </div>
  );
};

export default Blog;
