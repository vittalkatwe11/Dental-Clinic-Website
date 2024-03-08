import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Script from 'dangerous-html/react';
import { Helmet } from 'react-helmet';

import Doctor from '../components/doctor';
import Features from '../components/features';
import Lightbox from '../components/lightbox';
import Practice from '../components/practice';
import Testimonal from '../components/testimonal';
import './home.css';

import axios from 'axios'; // Import axios for making HTTP requests

import './home.css';

const Home = (props) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    practice: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Check if any required field is empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.timeSlot ||
      !formData.practice
    ) {
      console.log('Required fields are empty. Form submission halted.');
      return; // Exit function if any required field is empty
    }
  
    // Check if any validation errors exist
    if (
      formData.nameError ||
      formData.emailError ||
      formData.phoneError ||
      formData.dateError ||
      formData.timeSlotError ||
      formData.practiceError
    ) {
      console.log('Validation errors exist. Form submission halted.');
      return; // Exit function if there are validation errors
    }
  
    try {
      // Send a POST request to your backend server
      const response = await axios.post('http://localhost:3001/submit-form', formData);
      console.log(response.data); // Log the response from the server
  
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        timeSlot: '',
        practice: '',
        nameError: '', // Clear name error message
        emailError: '', // Clear email error message
        phoneError: '', // Clear phone error message
        dateError: '', // Clear date error message
        timeSlotError: '', // Clear time slot error message
        practiceError: '', // Clear practice error message
      });
  
      // Clear error messages
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(message => message.textContent = '');
  
      // Display the confirmation message
      setFormSubmitted(true);
      setLightboxOpen(true);
  
      // Ensure that the confirmation message is properly assigned
      const confirmationMessage = document.querySelector(".home-text30");
      if (confirmationMessage) {
        confirmationMessage.style.display = "block";
      } else {
        console.error("Element with class 'home-text30' not found.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  
  
  
  


  

  const getCurrentDate = () => {
    const today = new Date();
    let month = (today.getMonth() + 1).toString();
    let day = today.getDate().toString();
    const year = today.getFullYear().toString();
  
    if (month.length === 1) {
      month = '0' + month;
    }
  
    if (day.length === 1) {
      day = '0' + day;
    }
  
    return `${year}-${month}-${day}`;
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".home-form form");
    form.addEventListener("submit", handleSubmit);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errorMessage = '';
  
    // Handle Empty Inputs
    if (!value.trim()) {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }
  
    // Name Validation (Non-empty)
    if (name === 'name' && value.trim()) {
      // Reset error message if name is not empty
      errorMessage = '';
    }
  
    // Email Validation (Gmail)
    if (name === 'email' && value.trim()) {
      const isValidEmail = /\b[A-Za-z0-9._%+-]+@gmail.com\b/.test(value);
      if (!isValidEmail) {
        errorMessage = 'Please enter a valid Gmail address.';
      }
    }
  
    // Phone Number Validation (10 digits)
    if (name === 'phone' && value.trim()) {
      const isValidPhoneNumber = /^\d{10}$/.test(value);
      if (!isValidPhoneNumber) {
        errorMessage = 'Please enter a 10-digit phone number.';
      }
    }
  
    // Update the formData state for the specific input field that is being changed
    setFormData({ 
      ...formData, 
      [name]: value,
      // Store the error message for display
      [`${name}Error`]: errorMessage // Example: nameError, emailError, or phoneError
    });
  };
  
  
  




  return (
    <div className="home-container">
      <Helmet>
        <title>Medica template</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading">
            <span className="home-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section">
              <div className="home-heading01">
                <span className="home-header01">Cardiology</span>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-section1">
              <div className="home-heading02">
                <span className="home-header02">Orthopedics</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading03">
                <span className="home-header03">Ophtalmology</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading04">
                <span className="home-header04">Pediatrics</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading05">
                <span className="home-header05">Nutrition</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading06">
                <span className="home-header06">General</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <Link to="/" className="home-navlink">
              <img
                alt="image"
                src="/LOGO/smile-dental-logo-design-vector-600nw-18694604501-1500h.png"
                className="home-logo"
              />
            </Link>
            <nav className="home-links">
              <a href="#features" className="home-link">
                Features
              </a>
              <a href="#how-it-works" className="home-link01">
                How it works
              </a>
              <span className="home-link02">Prices</span>
              <a href="#footer" className="home-link03">
                Contact
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image06"
              />
              <span className="home-text06">+0 123-456-789</span>
            </button>
            <a href="#book" className="home-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image07"
              />
              <span className="home-text07">Book an appointment</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="/LOGO/smile-dental-logo-design-vector-600nw-18694604501-1500h.png"
                  className="home-image08"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text08">Features</span>
                <span className="home-text09">How it works</span>
                <span className="home-text10">Prices</span>
                <span className="home-text11">Contact</span>
                <a href="#book" className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image09"
                  />
                  <span className="home-text12">Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">
                <span className="home-text13">Smile Again Dental Clinic</span>
                <span>, Where Every Smile Finds a Home!</span>
              </h1>
              <p className="home-caption6">
                <span>
                  Discover your brightest smile at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text16">Smile Again Dental Clinic</span>
                <span>
                  , where compassionate care meets exceptional expertise. Let us
                  restore your confidence, one smile at a time!
                </span>
              </p>
            </div>
            <a href="#book" className="home-book2 button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image10"
              />
              <span>Book an appointment</span>
            </a>
          </div>
        </div>
        <div id="features" className="home-features">
          <div className="home-content1">
            <Features></Features>
            <Features title="Safety &amp; Hygiene"></Features>
            <Features title="Advanced Equipments"></Features>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section className="home-practices1">
        <div className="home-heading08">
          <h2 className="home-text19">
            <span className="home-text20">Our treatments</span>
            <br></br>
          </h2>
        </div>
        <div className="home-content2">
          <div className="home-grid1">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice title="Root Canal Treatment"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice title="Crown &amp; Bridges"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice title="Pediatric Dentistry"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice title="Pediatrics"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice title="Nutrition"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice title="General"></Practice>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading09">
          <h2 className="home-header08">Why choose us</h2>
          <p className="home-header09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-content3">
          <div className="home-video">
            <video
              src
              poster="/video-1500w.png"
              className="home-video1"
            ></video>
            <div className="home-play">
              <img alt="image" src="/Icons/play.svg" className="home-image11" />
            </div>
          </div>
          <div className="home-caption7">
            <h3 className="home-header10">
              Consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <p className="home-header11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </section>
      <section className="home-features1">
        <div className="home-section6">
          <div className="home-content4">
            <div className="home-header12">
              <h2 className="home-heading10">
                Dedicated doctors with the core mission to help.
              </h2>
              <p className="home-capton">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <a href="#doctors" className="home-link04">
              <div className="home-more6 read-more">
                <span className="home-text22">See our doctors</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image12"
                />
              </div>
            </a>
          </div>
          <img alt="image" src="/xray-1500w.png" className="home-image13" />
        </div>
        <div className="home-section7">
          <div className="home-content5">
            <div className="home-header13">
              <h2 className="home-heading11">
                Get access to specialty tests and breakthrough information.
              </h2>
              <p className="home-capton1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="read-more">
              <span className="home-text23">Find test</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="home-image14"
              />
            </div>
          </div>
          <img alt="image" src="/lab-1500w.png" className="home-image15" />
        </div>
        <div className="home-section8">
          <div className="home-content6">
            <div className="home-header14">
              <h2 className="home-heading12">
                Find out how we can help you help you.
              </h2>
              <p className="home-capton2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button button-main home-book3">
              <span>Book an appointment</span>
            </button>
          </div>
          <img
            alt="image"
            src="/examination-1500w.png"
            className="home-image16"
          />
        </div>
      </section>
      <section id="schedule" className="home-schedule">
        <div className="home-content7">
          <div className="home-header15">
            <h2 className="home-heading13">Schedule an appointment today</h2>
            <p className="home-caption8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="home-types">
            <a
              href="#book"
              className="home-book-person button button-main button-white"
            >
              <span>Book an appointment</span>
            </a>
          </div>
        </div>
      </section>
      <section id="book" className="home-book4">
        <div className="home-heading14">
          <h2 className="home-text26">Book an appointment</h2>
          <p className="home-text27">
            Ready to transform your smile? Book your appointment now with Smile
            Again Dental Clinic.
          </p>
        </div>
        <div className="home-form">
          <form onSubmit={handleSubmit}>
            <div className="home-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formData.nameError && <p className="error-message">{formData.nameError}</p>}

            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formData.emailError && <p className="error-message">{formData.emailError}</p>}

            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {formData.phoneError && <p className="error-message">{formData.phoneError}</p>}



              <div className="home-date">
              <input
                type="date"
                placeholder="Date"
                className="input book-input"
                name="date"
                value={formData.date}
                min={getCurrentDate()} // Set the minimum date to the current date
                onChange={handleChange}
              />
              <img
                alt="image"
                src="/Icons/calendar-2.svg"
                className="home-image17"
              />

              </div>
              <input
                type="text"
                placeholder="Time Slot"
                className="input book-input"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Practice"
                className="input book-input"
                name="practice"
                value={formData.practice}
                onChange={handleChange}
              />
              <div className="home-lower">
                <p className="home-text28">
                  Choose the services that suit you best, and let us help you
                  achieve the healthy, beautiful smile you deserve.
                </p>
                <div className="home-button">
                  <button type="submit" className="home-book5 button button-main">
                    <span>Book</span>
                  </button>
                  
                  {formSubmitted && (
                  <p className="home-text30">
                    Congratulations on taking the first step towards a healthier,
                    happier smile! Your appointment is confirmed. Our team at
                    Smile Again Dental Clinic is eager to welcome you and provide
                    the outstanding care you deserve. Get ready to smile with
                    confidence!
                  </p>
                )}
                {formSubmitted && lightboxOpen && <Lightbox onClose={handleLightboxClose} />}

                </div>
              
              </div>
            </div>
          </form>
        </div>
      </section>
      <section id="doctors" className="home-doctors">
        <div className="home-heading15">
          <h2 className="home-text31">Meet our doctors</h2>
          <p className="home-text32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-list">
          <div className="home-controls">
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="previous"
              className="arrow"
            />
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="next"
              className="home-forward arrow"
            />
          </div>
          <div data-teleport="doctors" className="home-doctors1">
            <Doctor></Doctor>
            <Doctor imageSrc="/Doctors/doctor-2-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-3-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-4-300w.png"></Doctor>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <section id="reviews" className="home-testimonals">
          <span className="home-text33">Testimonals</span>
          <span className="home-text34 title">
            <span className="home-text35">
              What people say about
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text36">Smile Again Dental Clinic</span>
            <br></br>
          </span>
          <div className="home-left1"></div>
          <div className="home-right1">
            <div className="home-column">
              <Testimonal
                quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
                avatarSrc="/external/image552912-e3yq-200h-200h.png"
              ></Testimonal>
              <Testimonal
                from="Social Club"
                name="Jessica Smith"
                quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
                avatarSrc="/external/image312912-mvsg-200h-200h.png"
              ></Testimonal>
              <Testimonal
                from="BeMe"
                name="Logan Boy"
                quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
                avatarSrc="/external/image502912-6wy-200h-200h.png"
              ></Testimonal>
              <Testimonal
                from="Hello W."
                name="Laraine Summers"
                quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
                avatarSrc="/external/image202912-zekh-200h-200h.png"
              ></Testimonal>
            </div>
            <div className="home-column1">
              <Testimonal
                from="Handsly"
                name="William McPau"
                quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                avatarSrc="/external/image572912-0d3-200h-200h.png"
              ></Testimonal>
              <Testimonal
                from="Share"
                name="Mariah Mae"
                quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                avatarSrc="/external/image632913-swij-200h-200h.png"
              ></Testimonal>
              <Testimonal
                from="Gather"
                name="John Finati"
                quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
                avatarSrc="/external/image102913-x4z8-200h-200h.png"
              ></Testimonal>
              <Testimonal
                from="Zigo"
                name="Mary Pau"
                quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
                avatarSrc="/external/image562913-ycff-200h-200h.png"
              ></Testimonal>
            </div>
          </div>
        </section>
      </section>
      <div className="home-download">
        <div className="home-main1">
          <div className="home-content8">
            <h2 className="home-text38">
              Download our mobile app and book your next appointment
            </h2>
            <div className="home-buttons">
              <Link to="/home1" className="home-android button button-main">
                <img
                  alt="image"
                  src="/Icons/android.svg"
                  className="home-image18"
                />
                <span>Download for Android</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="home-footer">
        <div className="home-left2">
          <div className="home-brand">
            <Link to="/" className="home-navlink7">
              <img
                alt="image"
                src="/LOGO/image-200h.png"
                className="home-image19"
              />
            </Link>
            <p className="home-text40">
              Get ready to smile at Smile Again Dental Clinic! Your go-to place
              for friendly, expert dental care. Let&apos;s make your smile
              shine!
            </p>
          </div>
          <div className="home-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home-image20"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image21"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image22"
              />
            </div>
          </div>
          <div className="home-legal">
            <span className="home-copyright">
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home-right2">
          <div className="home-list1">
            <span className="home-header16">Menu</span>
            <div className="home-links1">
              <Link to="/" className="home-link05">
                Home
              </Link>
              <span className="home-link06">About</span>
              <span className="home-link07">Services</span>
              <span className="home-link08">Support</span>
            </div>
          </div>
          <div className="home-list2">
            <span className="home-header17">Resources</span>
            <div className="home-links2">
              <a href="#reviews" className="home-link09">
                <span>Reviews</span>
                <br></br>
              </a>
              <a href="#doctors" className="home-link10">
                Doctors
              </a>
              <span className="home-link11">Hygiene</span>
            </div>
          </div>
          <div className="home-list3">
            <span className="home-header18">Contact</span>
            <div className="home-links3">
              <span className="home-link12">
                24 Street Name, City FI 01234, RO
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home-link13"
              >
                contact@template.new
              </a>
              <a href="tel:(004) 234 - 5678" className="home-link14">
                (004) 234 - 5678
              </a>
            </div>
          </div>
        </div>
        <div className="home-legal1">
          <div className="home-row">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright5">
            © 2024 Smile Again Dental Clinic. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
            const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
            const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};

</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container7">
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

export default Home
