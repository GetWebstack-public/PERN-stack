import React from 'react';
import './Footer.css';

function GWSLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 670 160" className="footer-gws-logo" aria-label="GetWebstack">
      <g strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M 12 132 L 40 148 L 68 132" stroke="#00c3eb" fill="none"/>
        <path d="M 77 132 L 105 148 L 133 132" stroke="#0083f2" fill="none"/>
        <path d="M 142 132 L 170 148 L 198 132" stroke="#002ebb" fill="none"/>
        <path d="M 40 100 L 68 116 L 40 132 L 12 116 Z" stroke="#00c3eb" fill="none"/>
        <path d="M 77 116 L 105 132 L 133 116" stroke="#0083f2" fill="none"/>
        <path d="M 142 116 L 170 132 L 198 116" stroke="#002ebb" fill="none"/>
        <path d="M 105 84 L 133 100 L 105 116 L 77 100 Z" stroke="#0083f2" fill="none"/>
        <path d="M 170 52 L 198 68 L 170 84 L 142 68 Z" stroke="#002ebb" fill="none"/>
        <path d="M 142 84 L 170 100 L 198 84" stroke="#002ebb" fill="none"/>
        <path d="M 142 100 L 170 116 L 198 100" stroke="#002ebb" fill="none"/>
      </g>
      <g transform="translate(220, 120)">
        <text fontFamily="'Montserrat', sans-serif" fontWeight="800" fontSize="56" fill="#002ebb">GET</text>
        <text x="120" fontFamily="'Montserrat', sans-serif" fontWeight="800" fontSize="56" fill="#00c3eb">WEBSTACK</text>
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-label">Powered by</span>
        <GWSLogo />
      </div>
    </footer>
  );
}
