import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home11.css'

const Home11 = (props) => {
  return (
    <div className="home11-container">
      <Helmet>
        <title>Home11 - Medica template</title>
        <meta property="og:title" content="Home11 - Medica template" />
      </Helmet>
      <div data-modal="practices" className="home11-modal">
        <div className="home11-practices">
          <div className="home11-heading">
            <span className="home11-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home11-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home11-grid">
            <div className="home11-section">
              <div className="home11-heading1">
                <span className="home11-header01">Cardiology</span>
                <span className="home11-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home11-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home11-image"
                />
              </div>
            </div>
            <div className="home11-section1">
              <div className="home11-heading2">
                <span className="home11-header02">Orthopedics</span>
                <span className="home11-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home11-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home11-image01"
                />
              </div>
            </div>
            <div className="home11-section2">
              <div className="home11-heading3">
                <span className="home11-header03">Ophtalmology</span>
                <span className="home11-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home11-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home11-image02"
                />
              </div>
            </div>
            <div className="home11-section3">
              <div className="home11-heading4">
                <span className="home11-header04">Pediatrics</span>
                <span className="home11-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home11-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home11-image03"
                />
              </div>
            </div>
            <div className="home11-section4">
              <div className="home11-heading5">
                <span className="home11-header05">Nutrition</span>
                <span className="home11-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home11-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home11-image04"
                />
              </div>
            </div>
            <div className="home11-section5">
              <div className="home11-heading6">
                <span className="home11-header06">General</span>
                <span className="home11-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home11-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home11-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home11-hero">
        <header data-thq="thq-navbar" className="home11-navbar">
          <div className="home11-left">
            <Link to="/" className="home11-navlink">
              <img
                alt="image"
                src="/LOGO/smile-dental-logo-design-vector-600nw-18694604501-200h.png"
                className="home11-logo"
              />
            </Link>
            <nav className="home11-links">
              <span className="home11-link">Features</span>
              <a href="#how-it-works" className="home11-link01">
                How it works
              </a>
              <span className="home11-link02">Prices</span>
              <span className="home11-link03">Contact</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home11-right">
            <button className="home11-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home11-image06"
              />
              <span className="home11-text06">+0 123-456-789</span>
            </button>
            <Link to="/" className="home11-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home11-image07"
              />
              <span className="home11-text07">Book an appointment</span>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="home11-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home11-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home11-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home11-nav"
            >
              <div className="home11-container1">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home11-image08"
                />
                <div data-thq="thq-close-menu" className="home11-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home11-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home11-nav1"
              >
                <span className="home11-text08">Features</span>
                <span className="home11-text09">How it works</span>
                <span className="home11-text10">Prices</span>
                <span className="home11-text11">Contact</span>
                <button className="home11-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home11-image09"
                  />
                  <span className="home11-text12">Book an appointment</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </section>
      <section id="how-it-works" className="home11-why">
        <Link to="/" className="home11-book2 button button-main">
          <span className="home11-text13">Admin Login</span>
        </Link>
      </section>
      <div className="home11-footer">
        <div className="home11-left1">
          <div className="home11-brand">
            <Link to="/" className="home11-navlink1">
              <img
                alt="image"
                src="/LOGO/image-200h.png"
                className="home11-image10"
              />
            </Link>
            <p className="home11-text14">
              Get ready to smile at Smile Again Dental Clinic! Your go-to place
              for friendly, expert dental care. Let&apos;s make your smile
              shine!
            </p>
          </div>
          <div className="home11-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home11-image11"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home11-image12"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home11-image13"
              />
            </div>
          </div>
          <div className="home11-legal">
            <span className="home11-copyright">
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home11-right1">
          <div className="home11-list">
            <span className="home11-header07">Menu</span>
            <div className="home11-links1">
              <Link to="/" className="home11-link04">
                Home
              </Link>
              <span className="home11-link05">About</span>
              <span className="home11-link06">Services</span>
              <span className="home11-link07">Support</span>
            </div>
          </div>
          <div className="home11-list1">
            <span className="home11-header08">Resources</span>
            <div className="home11-links2">
              <a href="#reviews" className="home11-link08">
                <span>Reviews</span>
                <br></br>
              </a>
              <Link to="/" className="home11-link09">
                Doctors
              </Link>
              <span className="home11-link10">Hygiene</span>
            </div>
          </div>
          <div className="home11-list2">
            <span className="home11-header09">Contact</span>
            <div className="home11-links3">
              <span className="home11-link11">
                24 Street Name, City FI 01234, RO
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home11-link12"
              >
                contact@template.new
              </a>
              <a href="tel:(004) 234 - 5678" className="home11-link13">
                (004) 234 - 5678
              </a>
            </div>
          </div>
          <div className="home11-legal1">
            <div className="home11-row">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
            <span className="home11-copyright5">
              © 2024 Smile Again Dental Clinic. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="home11-container3">
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
        <div className="home11-container5">
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
        <div className="home11-container7">
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

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home11
