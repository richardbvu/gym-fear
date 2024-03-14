import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faSquareInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__grid'>
          <div className='footer__socials'>
            <h1>GYM FEAR</h1>
            <p>
              Take your health and mind to the next level with us. Beat your
              fear and reach your goals.
            </p>
            <div className='footer__social-icons'>
              <a href='/' aria-label='Enter GYM FEAR twitter'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='/' aria-label='Enter GYM FEAR instagram'>
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a href='/' aria-label='Enter GYM FEAR tiktok'>
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href='/' aria-label='Enter GYM FEAR youtube'>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className='footer__links'>
            <div className='footer__links-title'>About Us</div>
            <ul className='footer__links-info'>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/schedule'>Schedule</Link>
              </li>
              <li>
                <Link to='/pricing'>Membership</Link>
              </li>
              <li>
                <Link to='/classes'>Classes</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
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
    </div>
  );
}
export default Footer;
