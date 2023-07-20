import React from "react";
import "./allpages.css";
import Casestudy from "./Casestudy";
import Patner from "./Patner";
import Faq from "./Faq";
import About from "./About";
import Chooseus from "./Chooseus";
// import About from "./About";
const Allpages = () => {
  return (
    <>
      <div id="main">
        <div className="page1">
          <div className="p1overlay">
            <div className="p1center">
              <h3>WELCOME TO GAUDIT</h3>
              <h1>The Most Trusted Accountants on The Planet</h1>
              <p>
                Puisque ullamcorper molestie lacus praesent id posuere diam quis
                ultrices tellus liquam. Semamet luctus vivamus tincidunt nulla
                et mauris mollis a iaculis risu.
              </p>
              <button>
                DISCOVER MORE <i className="ri-arrow-right-up-line"></i>
              </button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="p1chotu mt-20">
            <div className=" p1div1">
            <i className="ri-bar-chart-grouped-line"></i>
                <div className="p1chtxt">
                    <h1>Time-Saving</h1>
                    <p>Aliquam tincidunt mi vitae odio mixue molestie.</p>
                </div>
            </div>
            <div className="p1div1">
            <i className="ri-hand-coin-line"></i>
                <div className="p1chtxt">
                    <h1>Cost-Effective</h1>
                    <p>Aliquam tincidunt mi vitae odio mixue molestie.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="page2 h-full mt-10">
          <h4>OUR SERVICES</h4>
          <h1>Real Accounting Services for You</h1>
          <p>
            Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut
            suspendisse pharetra. Finibus condimentum aenean lacinia sem metus
            Integer.
          </p>
          <div className='bookkeeping'>
        <div className='keeping '>
        <i className="ri-book-open-line fs-1"></i>
        <h3>Bookkeeping</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
        <div className='keeping'>
        <i className="ri-git-repository-fill fs-1"></i>
        <h3>Payroll Services</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
        <div className='keeping'>
        <i className="ri-calculator-line fs-1"></i>
        <h3>Tax Planning</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
        <div className='keeping'>
        <i className="ri-sticky-note-fill fs-1"></i>
        <h3>Audit & Assurance</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
        <div className='keeping'>
        <i className="ri-bar-chart-2-line fs-1"></i>
        <h3>Financial Statement</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
        <div className='keeping'>
        <i className="ri-book-open-line fs-1"></i>
        <h3>Tech Consulting</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
        <div className='keeping'>
        <i className="ri-mac-line fs-1"></i>
        <h3>Business Advisory</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
        <div className='keeping'>
        <i className="ri-sticky-note-2-fill fs-1"></i>
        <h3>Outsourced CFO</h3>
        <p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p>
        <span>READ MORE<i className="ri-arrow-right-line fs-1"></i></span>
        </div>
     </div>
     <div className='text3'>
        <h3>Having Trouble Managing Your Finances?</h3>
        <p>Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse. Pharetra finibus condimentum aenean lacinia sem metus Integer dapibus diam justo.</p>
        <button>CONTACT US NOW</button>
     </div>
     <div className='text4'>
        <div className='text4-up'>
            <h3>PRICING PLAN</h3>
            <h1>The Best Price For You</h1>
        </div>
        <div className='text4-down'>
            <p>Proin laoreet nisi vitae pharetra mattis. Etiam luctus suscipit velit vitae mixue ultricies. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo donec tempus.</p>
        </div>
     </div>
        </div>
        <Patner/>
        <About/>
        <Chooseus/>
        <Casestudy/>
        <Faq/>
        <div className="page6">
            <h4>OUR BLOG</h4>
            <h1>Latest Blog & News for You</h1>
            <p>Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse pharetra. Finibus condimentum aenean lacinia sem metus Integer.</p>
            <div className="p6center">
                <div className="p6div">
                    <div className="p6divimg">
                        <img src="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/preparing-annual-accounts-with-coworkers-RJNW5P4.jpg" alt="" />
                    </div>
                    <div className="p6divtxt">
                        <h2>How to Structure Your Accounting for Decision</h2>
                        <h3><i className="ri-calendar-line"></i> March 27,2023 <i className="ri-message-2-line"></i> 0</h3>
                        <p className="text-xs">Lorem ipsum dolor sit amet elit. Maecenas eget augue nulla. Proin pellentesque interdum nisi id porttitor. Etiam ultrices accumsan augue,…</p>
                        <h1>Read More<i className="ri-arrow-right-line"></i></h1>
                    </div>
                </div>
                <div className="p6div">
                    <div className="p6divimg">
                        <img src="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/marketing-financial-accounting-planning-business-t-L336CRE.jpg" alt="" />
                    </div>
                    <div className="p6divtxt">
                        <h2>Innovation Accounting and Portfolio Management</h2>
                        <h3><i className="ri-calendar-line"></i> March 27,2023 <i className="ri-message-2-line"></i> 0</h3>
                        <p className="text-xs">Lorem ipsum dolor sit amet elit. Maecenas eget augue nulla. Proin pellentesque interdum nisi id porttitor. Etiam ultrices accumsan augue,…</p>
                        <h1>Read More<i className="ri-arrow-right-line"></i></h1>
                    </div>
                </div>
                <div className="p6div">
                    <div className="p6divimg">
                        <img src="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/business-people-accounting-working-with-analysis-i-6BEKTNYa.jpg" alt="" />
                    </div>
                    <div className="p6divtxt">
                        <h2 className="">Double Entry Accounting in a Relational Database</h2>
                        <h3 className=""><i className="ri-calendar-line"></i> March 27,2023 <i className="ri-message-2-line"></i> 0</h3>
                        <p className="text-xs">Lorem ipsum dolor sit amet elit. Maecenas eget augue nulla. Proin pellentesque interdum nisi id porttitor. Etiam ultrices accumsan augue,…</p>
                        <h1>Read More<i className="ri-arrow-right-line"></i></h1>
                    </div>
                </div>
               
            </div>
        </div>
        {/* <About/> */}
      </div>
    </>
  );
};

export default Allpages;
