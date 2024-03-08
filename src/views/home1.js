import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - Medica template</title>
        <meta property="og:title" content="Home1 - Medica template" />
      </Helmet>
      <div data-modal="practices" className="home1-modal">
        <div className="home1-practices">
          <div className="home1-heading">
            <span className="home1-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home1-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home1-grid">
            <div className="home1-section">
              <div className="home1-heading1">
                <span className="home1-header01">Cardiology</span>
                <span className="home1-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home1-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1-image"
                />
              </div>
            </div>
            <div className="home1-section1">
              <div className="home1-heading2">
                <span className="home1-header02">Orthopedics</span>
                <span className="home1-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home1-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1-image01"
                />
              </div>
            </div>
            <div className="home1-section2">
              <div className="home1-heading3">
                <span className="home1-header03">Ophtalmology</span>
                <span className="home1-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home1-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1-image02"
                />
              </div>
            </div>
            <div className="home1-section3">
              <div className="home1-heading4">
                <span className="home1-header04">Pediatrics</span>
                <span className="home1-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home1-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1-image03"
                />
              </div>
            </div>
            <div className="home1-section4">
              <div className="home1-heading5">
                <span className="home1-header05">Nutrition</span>
                <span className="home1-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home1-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1-image04"
                />
              </div>
            </div>
            <div className="home1-section5">
              <div className="home1-heading6">
                <span className="home1-header06">General</span>
                <span className="home1-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home1-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home1-hero">
        <header data-thq="thq-navbar" className="home1-navbar">
          <div className="home1-left">
            <Link to="/" className="home1-navlink">
              <img
                alt="image"
                src="/LOGO/smile-dental-logo-design-vector-600nw-18694604501-200h.png"
                className="home1-logo"
              />
            </Link>
            <nav className="home1-links">
              <span className="home1-link">Features</span>
              <a href="#how-it-works" className="home1-link01">
                How it works
              </a>
              <span className="home1-link02">Prices</span>
              <span className="home1-link03">Contact</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home1-right">
            <button className="home1-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home1-image06"
              />
              <span className="home1-text06">+0 123-456-789</span>
            </button>
            <button className="home1-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home1-image07"
              />
              <span className="home1-text07">Book an appointment</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home1-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home1-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home1-nav"
            >
              <div className="home1-container1">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home1-image08"
                />
                <div data-thq="thq-close-menu" className="home1-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home1-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home1-nav1"
              >
                <span className="home1-text08">Features</span>
                <span className="home1-text09">How it works</span>
                <span className="home1-text10">Prices</span>
                <span className="home1-text11">Contact</span>
                <button className="home1-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home1-image09"
                  />
                  <span className="home1-text12">Book an appointment</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </section>
      <section id="how-it-works" className="home1-why">
        <span className="home1-text13">This page will be updated soon!</span>
      </section>
      <div className="home1-footer">
        <div className="home1-left1">
          <div className="home1-brand">
            <Link to="/" className="home1-navlink1">
              <img
                alt="image"
                src="/LOGO/image-200h.png"
                className="home1-image10"
              />
            </Link>
            <p className="home1-text14">
              Get ready to smile at Smile Again Dental Clinic! Your go-to place
              for friendly, expert dental care. Let&apos;s make your smile
              shine!
            </p>
          </div>
          <div className="home1-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home1-image11"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home1-image12"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home1-image13"
              />
            </div>
          </div>
          <div className="home1-legal">
            <span className="home1-copyright">
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home1-right1">
          <div className="home1-list">
            <span className="home1-header07">Menu</span>
            <div className="home1-links1">
              <Link to="/" className="home1-link04">
                Home
              </Link>
              <span className="home1-link05">About</span>
              <span className="home1-link06">Services</span>
              <span className="home1-link07">Support</span>
            </div>
          </div>
          <div className="home1-list1">
            <span className="home1-header08">Resources</span>
            <div className="home1-links2">
              <a href="#reviews" className="home1-link08">
                <span>Reviews</span>
                <br></br>
              </a>
              <Link to="/" className="home1-link09">
                Doctors
              </Link>
              <span className="home1-link10">Hygiene</span>
            </div>
          </div>
          <div className="home1-list2">
            <span className="home1-header09">Contact</span>
            <div className="home1-links3">
              <span className="home1-link11">
                24 Street Name, City FI 01234, RO
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home1-link12"
              >
                contact@template.new
              </a>
              <a href="tel:(004) 234 - 5678" className="home1-link13">
                (004) 234 - 5678
              </a>
            </div>
          </div>
          <div className="home1-legal1">
            <div className="home1-row">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
            <span className="home1-copyright5">
              © 2024 Smile Again Dental Clinic. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="home1-container3">
          <Script
            html={`<script>

</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home1-container5">
          <Script
            html={`<script>

</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home1-container7">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}


</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home1
