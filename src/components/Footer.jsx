import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faSquareInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__socials'>
          <h1>GYM FEAR</h1>
          <p>
            Take your health and mind to the next level with us. Beat your fear
            and reach your goals.
          </p>
          <div className='footer__social-icons'>
            <div className='footer__social-icon-1'>
              <a href='/'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className='footer__social-icon-2'></div>
            <a href='/'>
              {/* <FontAwesomeIcon icon={faInstagram} /> */}
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <div className='footer__social-icon-3'>
              <a href='/'>
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
            <div className='footer__social-icon-4'>
              <a href='/'>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className='footer__links'>
          <div className='footer__links-title'>About Us</div>
          <ul className='footer__links-info'>
            <li>
              <a href='/'>Gallery</a>
            </li>
            <li>
              <a href='/'>Schedule</a>
            </li>
            <li>
              <a href='/'>Membership</a>
            </li>
            <li>
              <a href='/'>Classes</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer__hours'>
          <div className='footer__hours-title'>Working Hours</div>
          <ul className='footer__hours-info'>
            <li>
              <span>Monday - Friday</span>5:00 AM - 11:00 PM
            </li>
            <li>
              <span>Saturday</span>5:00 AM - 10:00 PM
            </li>
            <li>
              <span>Sunday</span>5:00 AM - 9:00 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
