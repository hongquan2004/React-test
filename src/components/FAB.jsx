import React from 'react';
import './FAB.css';

const FAB = () => (
  <div className="fab-container">
    <a
      href="https://www.instagram.com/"
      className="fab fab-instagram"
      target="_blank"
      rel="noopener noreferrer"
      title="Instagram"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
    </a>
    <a
      href="https://www.facebook.com/"
      className="fab fab-facebook"
      target="_blank"
      rel="noopener noreferrer"
      title="Facebook"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
    </a>
    <a
      href="https://www.tiktok.com/"
      className="fab fab-tiktok"
      target="_blank"
      rel="noopener noreferrer"
      title="TikTok"
    >
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" alt="TikTok" style={{background:'#fff',borderRadius:'50%',padding:'3px'}} />
    </a>
  </div>
);

export default FAB;