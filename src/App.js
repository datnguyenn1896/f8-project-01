import "./App.css";
import logo from "./assets/img/Logo.svg";
import Hero from "./assets/img/house illustration.svg";
import Start from "./assets/img/Vector.svg";
import Logo1 from "./assets/img/logo (1).svg";
import Logo2 from "./assets/img/logo (2).svg";
import Logo3 from "./assets/img/logo (3).svg";
import Logo4 from "./assets/img/logo (4).svg";
import Logo5 from "./assets/img/logo (5).svg";
import Icon from "./assets/img/icon.svg";
import Icon1 from "./assets/img/icon (1).svg";
import Icon2 from "./assets/img/icon (2).svg";
import Arrow from "./assets/img/Vector (1).svg";
import Image from "./assets/img/image.png";
import Image1 from "./assets/img/image (1).png";
import Image2 from "./assets/img/image (2).png";
import Icon4 from "./assets/img/Group 457.svg";
import Icon5 from "./assets/img/Group 458.svg";
import Icon6 from "./assets/img/Subtract.svg";
import Stats from "./assets/img/stats.jpg";
import ArrowTrendUp from "./assets/img/Vector 120.svg";
import Avatar1 from "./assets/img/avatar-1.jpeg";
import Avatar2 from "./assets/img/avatar-2.jpeg";
import Avatar3 from "./assets/img/avatar-3.jpeg";
import Avatar4 from "./assets/img/avatar-4.jpeg";
import Avatar5 from "./assets/img/avatar-5.jpeg";
import Home from "./assets/img/home.svg";
import Socal2 from "./assets/img/Facebook icon.svg";
import Socal3 from "./assets/img/twitter icon.svg";
import Socal4 from "./assets/img/lindedin icon.svg";

function App() {
  return (
    <main>
      <header className="header">
        <div className="content">
          <nav className="navbar">
            <img src={logo} alt="logo"></img>
            <ul className="list-heading">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Fratures</a>
              </li>
              <li>
                <a href="#!">Service</a>
              </li>
              <li>
                <a href="#!">Listen</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
            <div className="action">
              <button className="signup">Sign in</button>
              <button className="register">Sign up</button>
            </div>
          </nav>
          <div className="hero">
            <div className="info">
              <p className="sub-title">Welcome to Besnik Agency</p>
              <h1 className="title">Discover a place you'll love to live.</h1>
              <p className="desc">
                Get the best real estate deals first, before they hit the mass
                market! hot foreclosure deals with one simple search.
              </p>
              <a href="#!" className="btn">
                More About Us
              </a>
            </div>
            <img src={Hero} alt="hero"></img>
          </div>
        </div>
      </header>
      <div className="clients">
        <div className="content">
          <div className="row">
            <img src={logo} alt="logo"></img>
            <div className="start">
              <img src={Start} alt="start"></img>
              <img src={Start} alt="start"></img>
              <img src={Start} alt="start"></img>
              <img src={Start} alt="start"></img>
              <img src={Start} alt="start"></img>
            </div>
          </div>
          <div className="row row-desc">
            <p className="desc">More than 45,000+ companies trust besnik</p>
            <p className="desc">5 Star Ratings (2k+ Review)</p>
          </div>
          <div className="row">
            <img src={Logo1} alt="logo"></img>
            <img src={Logo2} alt="logo"></img>
            <img src={Logo3} alt="logo"></img>
            <img src={Logo4} alt="logo"></img>
            <img src={Logo5} alt="logo"></img>
          </div>
        </div>
        <div className="guides">
          <div className="content">
            <h2 className="sub-title">How its works?</h2>
            <p class="desc">
              Everything you need to know when you're looking to buy, rent, or
              sell - all in one place.
            </p>
            <div className="list-guide">
              <div className="guide-item">
                <img className="icon" src={Icon} alt=""></img>
                <h2 className="title">Buyer Guides</h2>
                <a href="#!" className="link">
                  <span>How to buy</span>
                  <img src={Arrow} alt="arrow" className="arrow"></img>
                </a>
              </div>
              <div className="guide-item">
                <img className="icon" src={Icon1} alt=""></img>
                <h2 className="title">Renter Guides</h2>
                <a href="#!" className="link">
                  <span>How to rent</span>
                  <img src={Arrow} alt="arrow" className="arrow"></img>
                </a>
              </div>
              <div className="guide-item">
                <img className="icon" src={Icon2} alt=""></img>
                <h2 className="title">Seller Guides</h2>
                <a href="#!" className="link">
                  <span>How to sell</span>
                  <img src={Arrow} alt="arrow" className="arrow"></img>
                </a>
              </div>
            </div>
            <div className="btn-guide">
              <a href="#!" className="btn-sell">
                Sell Full Guidelines
              </a>
            </div>
          </div>
        </div>
        {/* <=== featured ===> */}
        <div className="featured">
          <div className="content">
            <h2 className="sub-title">Featured Properties</h2>
            <div className="row">
              <p className="desc">
                Everything you need to know when you're looking
              </p>
              <a href="#!" className="link">
                <span>View All Properties</span>
                <img src={Arrow} alt="arrow" className="arrow"></img>
              </a>
            </div>
            <div className="list-featured">
              <div className="featured-item">
                <img src={Image} alt="image"></img>
                <div className="featured-title">
                  <h3 className="title">Nikko Apartments</h3>
                  <p className="desc">
                    8502 Preston Rd. Inglewood, Maine 98280
                  </p>
                  <div className="col">
                    <div className="col">
                      <img src={Icon4} alt=""></img>
                      <p className="value">5 Beds</p>
                    </div>
                    <div className="col">
                      <img src={Icon5} alt=""></img>
                      <p className="value">2 both</p>
                    </div>
                    <div className="col">
                      <img src={Icon6} alt=""></img>
                      <p className="value">2000 Sqft</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-item">
                <img src={Image1} alt="image"></img>
                <div className="featured-title">
                  <h3 className="title">CouCou Homestead</h3>
                  <p className="desc">
                    8502 Preston Rd. Inglewood, Maine 98280
                  </p>
                  <div className="col">
                    <div className="col">
                      <img src={Icon4} alt=""></img>
                      <p className="value">5 Beds</p>
                    </div>
                    <div className="col">
                      <img src={Icon5} alt=""></img>
                      <p className="value">2 both</p>
                    </div>
                    <div className="col">
                      <img src={Icon6} alt=""></img>
                      <p className="value">2000 Sqft</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-item">
                <img src={Image2} alt="image"></img>
                <div className="featured-title">
                  <h3 className="title">Lavis 18 Residence</h3>
                  <p className="desc">
                    8502 Preston Rd. Inglewood, Maine 98280
                  </p>
                  <div className="col">
                    <div className="col">
                      <img src={Icon4} alt=""></img>
                      <p className="value">5 Beds</p>
                    </div>
                    <div className="col">
                      <img src={Icon5} alt=""></img>
                      <p className="value">2 both</p>
                    </div>
                    <div className="col">
                      <img src={Icon6} alt=""></img>
                      <p className="value">2000 Sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <=== stats ===> */}
        <div className="stats">
          <div className="content">
            <div className="row">
              <div className="img-block">
                <img className="image" src={Stats} alt=""></img>
                <div className="stats-trend">
                  <div className="row">
                    <strong className="value">40,000+</strong>
                    <img src={ArrowTrendUp} alt=""></img>
                  </div>
                  <p className="desc">
                    By avarage for 2 bedroom apments in San Francisco, CA
                  </p>
                  <div className="separate"></div>
                  <div className="avatar-block">
                    <div className="avatar-group">
                      <img src={Avatar1} alt="" className="avatar"></img>
                      <img src={Avatar2} alt="" className="avatar"></img>
                    </div>
                    <div className="avatar-group">
                      <img src={Avatar2} alt="" className="avatar"></img>
                      <img src={Avatar3} alt="" className="avatar"></img>
                      <img src={Avatar4} alt="" className="avatar"></img>
                      <img src={Avatar5} alt="" className="avatar"></img>
                    </div>
                    <div className="avatar-group">
                      <img src={Avatar1} alt="" className="avatar"></img>
                      <img src={Avatar3} alt="" className="avatar"></img>
                      <img src={Avatar5} alt="" className="avatar"></img>
                    </div>
                    <div className="avatar-group">
                      <img src={Avatar1} alt="" className="avatar"></img>
                      <img src={Avatar2} alt="" className="avatar"></img>
                      <img src={Avatar3} alt="" className="avatar"></img>
                      <img src={Avatar4} alt="" className="avatar"></img>
                    </div>
                    <div className="avatar-group">
                      <img src={Avatar4} alt="" className="avatar"></img>
                      <img src={Avatar5} alt="" className="avatar"></img>
                    </div>
                    <div className="avatar-group">
                      <img src={Avatar1} alt="" className="avatar"></img>
                      <img src={Avatar5} alt="" className="avatar"></img>
                    </div>
                    <div className="avatar-group">
                      <img src={Avatar3} alt="" className="avatar"></img>
                      <img src={Avatar4} alt="" className="avatar"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info">
                <h2 className="sub-title">
                  You’ve found a neighborhood you love.
                </h2>
                <p className="desc">
                  When you own a home, you’re committing to living in one
                  location for a while. In a recent Trulia survey, we found that
                  five out of six respondents said finding the right
                  neighborhood{" "}
                </p>
              </div>
            </div>
            <div className="row row-qty">
              <div className="qty-item">
                <strong className="qty">2,500</strong>
                <p className="qty-desc">Homes For Sale</p>
              </div>
              <div className="qty-item">
                <strong className="qty">5,000+</strong>
                <p className="qty-desc">Homes Recently Sold</p>
              </div>
              <div className="qty-item">
                <strong className="qty">170+</strong>
                <p className="qty-desc">Price Reduced</p>
              </div>
            </div>
          </div>
        </div>
        <div className="subcription">
          <div className="content">
            <div className="body">
              <div className="info">
                <h2 className="sub-title">Subscribe to our Newsletter!</h2>
                <p className="desc">
                  Subscribe to our newsletter and stay updated.
                </p>
                <a href="#!" className="btn-subcribe">
                  Subscribe
                </a>
              </div>
              <img src={Home} alt="home"></img>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="content">
            <div className="row">
              <div className="column">
                <h3 className="heading">Product</h3>
                <ul className="list">
                  <li className="item">
                    <a href="#!">Listing</a>
                  </li>
                  <li className="item">
                    <a href="#!">Property</a>
                  </li>
                  <li className="item">
                    <a href="#!">Agents</a>
                  </li>
                  <li className="item">
                    <a href="#!">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h3 className="heading">Resources</h3>
                <ul className="list">
                  <li className="item">
                    <a href="#!">Our Homes</a>
                  </li>
                  <li className="item">
                    <a href="#!">Member Stories</a>
                  </li>
                  <li className="item">
                    <a href="#!">Video</a>
                  </li>
                  <li className="item">
                    <a href="#!">Free trial</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h3 className="heading">Company</h3>
                <ul className="list">
                  <li className="item">
                    <a href="#!">Patnerships</a>
                  </li>
                  <li className="item">
                    <a href="#!">Terms of use</a>
                  </li>
                  <li className="item">
                    <a href="#!">Privacy</a>
                  </li>
                  <li className="item">
                    <a href="#!">Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h3 className="heading">Get in touch</h3>
                <ul className="list">
                  <li className="item">
                    <p href="#!">
                      You’ll find your next home, in any style you prefer.
                    </p>
                  </li>
                  <div className="socal">
                    <a className="socal-link" href="!#">
                      <img src={Socal2} alt="socal-link"></img>
                    </a>
                    <a className="socal-link" href="!#">
                      <img src={Socal3} alt="socal-link"></img>
                    </a>
                    <a className="socal-link" href="!#">
                      <img src={Socal4} alt="socal-link"></img>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
            <div className="row">
              <img src={logo} alt="logo"></img>
              <p className="copyright">
                Copyright 2020.com, All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
