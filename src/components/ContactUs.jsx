import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faSquareInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className='contact-us__container'>
        <div className='contact-us__grid'>
          <div className='contact-us__text'>
            <h2>GYM FEAR </h2>
            <h3>Where greatness beats fear</h3>
            <p>
              At GYM FEAR, we are dedicated to your mental and health goals. Our
              expert personal trainers will work with you to create a
              personalized plan. Our equipment is modern and always up to your
              standards.
            </p>
            <div className='contact-us__info'>
              <div>
                <h4>Los Angeles</h4>
                <div className='contact-us__bar'></div>
                <p>123 Main Street</p>
                <p>Los Angeles, CA 90210</p>
              </div>
              <div>
                <h4>Contacts</h4>
                <div className='contact-us__bar'></div>
                <p>
                  <div className='contact-us__contacts-icon'>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  (123) 456-7890
                </p>
                <p>
                  <div className='contact-us__contacts-icon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  GymFear@gymfear.com
                </p>
              </div>
              <div>
                <h4>Follow Us</h4>
                <div className='contact-us__bar'></div>
                <div className='contact-us__social-icons'>
                  <a href='/'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href='/'>
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>
                  <a href='/'>
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                  <a href='/'>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-us__form-container'>
            <form action='' className='contact-us__form'>
              <h3>Contact Us</h3>
              <div className='contact-us__bar'></div>
              <div className='contact-us__form-inputs'>
                <label htmlFor='contact-full-name'>Full Name</label>
                <input
                  type='text'
                  id='contact-full-name'
                  placeholder='ex. John Doe'
                />
                <label htmlFor='contact-email'>Email</label>
                <input
                  type='email'
                  id='contact-email'
                  placeholder='example@email.com'
                />
                <label htmlFor='contact-select'>Classes</label>
                <select type='text' id='contact-select'>
                  <option selected hidden value=''>
                    Select your class
                  </option>
                  <option value='Aerobics'>Aerobics</option>
                  <option value='Power Lifting'>Power Lifting</option>
                  <option value='Senior Fitness'>Senior Fitness</option>
                  <option value='Boxing'>Boxing</option>
                  <option value='Strength'>Strength</option>
                  <option value='Yoga'>Yoga</option>
                  <option value='Body Fear'>Body Fear</option>
                  <option value='Fear Fit'>Fear Fit</option>
                  <option value='Zumbey'>Zumbey</option>
                </select>
                <label htmlFor='contact-text-area'>Comments</label>
                <textarea
                  type='text'
                  id='contact-text-area'
                  placeholder='Enter additional information'
                />
                <button type='submit' className='contact-us__submit-button'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
