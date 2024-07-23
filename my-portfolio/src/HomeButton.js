import React from 'react';
import './HomeButton.css';

function HomeButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="home-button" onClick={scrollToTop}>
      TW
    </button>
  );
}

export default HomeButton;
