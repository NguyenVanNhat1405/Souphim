import React from 'react';
import Style from './Footer.module.css';

function SocialIcons() {
  return (
    <div className={Style.footer}>
      <ul className={Style.example_2}>
      <li className={Style.icon_content}>
        <a href="https://www.spotify.com/" aria-label="Spotify" data-social="spotify">
          <div className={Style.filled}></div>
          <svg version="1.1" viewBox="0 0 100 100">
            <path d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z" fill="currentColor"></path>
          </svg>
        </a>
        <div className={Style.tooltip}>Spotify</div>
      </li>
      <li className={Style.icon_content}>
        <a href="https://www.youtube.com/channel/UCuNqGicbfjDmTFCy5xRJ3jw" aria-label="YouTube" data-social="youtube">
          <div className={Style.filled}></div>
          <svg viewBox="0 0 24 24">
            <path d="M10,15L15,12L10,9V15Z" fill="currentColor"></path>
            <path d="M21.8,8S21.4,6.8,20.6,6C19.6,5,18.1,5,17.5,4.9C14.8,4.8,12,4.8,12,4.8H12C12,4.8,9.2,4.8,6.5,4.9C6,5,4.5,5,3.5,6C2.7,6.8,2.3,8,2.3,8S2,9.5,2,11.1V12.8C2,14.5,2.3,15.9,2.3,15.9S2.7,17,3.5,17.8C4.5,18.8,6,18.8,6.5,18.9C9.2,19,12,19,12,19C12,19,14.8,19,17.5,18.9C18.1,18.8,19.6,18.8,20.6,17.8C21.4,17,21.8,15.9,21.8,15.9S22,14.5,22,12.8V11.1C22,9.5,21.8,8,21.8,8Z" fill="currentColor"></path>
          </svg>
        </a>
        <div className={Style.tooltip}>YouTube</div>
      </li>
      <li className={Style.icon_content}>
        <a href="https://www.facebook.com/kwannhat" aria-label="Facebook" data-social="facebook">
          <div className={Style.filled}></div>
          <svg viewBox="0 0 24 24">
            <path d="M12,2C6.5,2,2,6.5,2,12C2,17,5.6,21.1,10.3,22V14.9H7.4V12H10.3V9.7C10.3,6.8,11.9,5.4,14.5,5.4C15.7,5.4,16.9,5.6,16.9,5.6V8.5H15.5C14.1,8.5,13.7,9.3,13.7,10.2V12H16.8L16.3,14.9H13.7V22C18.4,21.1,22,17,22,12C22,6.5,17.5,2,12,2Z" fill="currentColor"></path>
          </svg>
        </a>
        <div className={Style.tooltip}>Facebook</div>
      </li>
      <li className={Style.icon_content}>
        <a href="https://www.tiktok.com/@tahn_naw" aria-label="TikTok" data-social="tiktok">
          <div className={Style.filled}></div>
          <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M236.4 87.9c-5.7 0-11.4-.6-16.9-1.8-2.3-.5-4.6-1.2-6.8-2-14.4-5-24.8-17.6-27.6-32.7-1.3-6.8-1-13.8-.8-20.7V28h-33.3v129.5c0 15.2-7.8 29.4-20.7 37.2-12 7.4-28.2 8-40.8 1.6-11.5-6-18.9-17.6-19.8-30.4-1.1-16.6 10.7-32 27.2-34.1 2.1-.3 4.2-.3 6.3-.1V91.4c-2.3-.2-4.6-.3-6.9-.2-30.2.4-57.3 21.2-63.3 51.1-6.1 30.6 11.7 62 41.6 70.7 20.5 5.7 43.4 2.2 60.8-9.1 17-11.4 28.2-30.4 31.1-50.9.8-5.4 1.1-10.8 1-16.2v-52.8c5.5 3.3 11.3 6.1 17.3 8.1 8.4 2.9 17.4 4.4 26.5 4.3v-33.5z" fill="currentColor"/>
          </svg>
        </a>
        <div className={Style.tooltip}>TikTok</div>
      </li>
      <li className={Style.icon_content}>
        <a href="https://www.instagram.com/naw_tahn/" aria-label="Instagram" data-social="instagram">
          <div className={Style.filled}></div>
          <svg viewBox="0 0 24 24">
            <path d="M12,2.2c3.6,0,4,0,5.4,0.1c1.2,0.1,2,0.2,2.7,0.4c0.7,0.2,1.3,0.5,1.9,1c0.6,0.5,1,1.1,1.3,1.9c0.2,0.7,0.3,1.4,0.4,2.7C23.8,9.4,23.8,9.8,23.8,12c0,2.2,0,2.6-0.1,3.9c-0.1,1.2-0.2,2-0.4,2.7c-0.2,0.7-0.5,1.3-1,1.9c-0.5,0.6-1.1,1-1.9,1.3c-0.7,0.2-1.4,0.3-2.7,0.4c-1.4,0.1-1.8,0.1-5.4,0.1s-4,0-5.4-0.1c-1.2-0.1-2-0.2-2.7-0.4c-0.7-0.2-1.3-0.5-1.9-1c-0.6-0.5-1-1.1-1.3-1.9c-0.2-0.7-0.3-1.4-0.4-2.7C2.2,14.6,2.2,14.2,2.2,12s0-2.6,0.1-3.9c0.1-1.2,0.2-2,0.4-2.7c0.2-0.7,0.5-1.3,1-1.9c0.5-0.6,1.1-1,1.9-1.3c0.7-0.2,1.4-0.3,2.7-0.4C8,2.2,8.4,2.2,12,2.2z M12,0C8.7,0,8.3,0,7,0.1C5.8,0.2,4.8,0.3,4,0.6C3.1,0.8,2.4,1.2,1.6,1.9c-0.7,0.7-1.2,1.5-1.5,2.4c-0.3,0.8-0.5,1.8-0.6,3C0,8.3,0,8.7,0,12s0,3.7,0.1,5c0.1,1.2,0.3,2.2,0.6,3c0.3,0.9,0.8,1.7,1.5,2.4c0.7,0.7,1.5,1.2,2.4,1.5c0.8,0.3,1.8,0.5,3,0.6C8.3,24,8.7,24,12,24s3.7,0,5-0.1c1.2-0.1,2.2-0.3,3-0.6c0.9-0.3,1.7-0.8,2.4-1.5c0.7-0.7,1.2-1.5,1.5-2.4c0.3-0.8,0.5-1.8,0.6-3C24,15.7,24,15.3,24,12s0-3.7-0.1-5c-0.1-1.2-0.3-2.2-0.6-3c-0.3-0.9-0.8-1.7-1.5-2.4c-0.7-0.7-1.5-1.2-2.4-1.5c-0.8-0.3-1.8-0.5-3-0.6C15.7,0,15.3,0,12,0L12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8L12,5.8z M12,15.6c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6S14,15.6,12,15.6L12,15.6z M18.4,4.4c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4S19.2,4.4,18.4,4.4L18.4,4.4z" fill="currentColor"></path>
          </svg>
        </a>
        <div className={Style.tooltip}>Instagram</div>
      </li>
    </ul>
    </div>
  );
}

export default SocialIcons;
