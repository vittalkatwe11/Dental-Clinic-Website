import React, { useEffect } from 'react';
import './lightbox.css';

const Lightbox = ({ onClose }) => {
    useEffect(() => {
      // Lock scrolling when the Lightbox component mounts
      document.body.classList.add('body-scroll-lock');
  
      // Unlock scrolling when the Lightbox component unmounts
      return () => {
        document.body.classList.remove('body-scroll-lock');
      };
    }, []);


  return (
    <div className="lightbox">
      <div className="lightbox-content">
        <span className="lightbox-close" onClick={onClose}>&times;</span>
        <p>
          Congratulations on taking the first step towards a healthier, happier smile! Your appointment is confirmed. Our team at Smile Again Dental Clinic is eager to welcome you and provide the outstanding care you deserve. Get ready to smile with confidence!
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
