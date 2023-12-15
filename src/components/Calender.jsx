import Contact from "../pages/Contact";
import { Link } from "react-router-dom";

const Calender = () => {
  return (
    <div className='calender'>
      <div className='calender__container'>
        <div className='calender__days'>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
          <p>Sun</p>
        </div>
        <div className='calender__grid'>
          <div className='calender__classes'>
            <Link to='/contact'>
              <h5>10:00 AM</h5>
              <h4>Zumbey</h4>
              <p>Kacy</p>
            </Link>
            <Link to='/contact'>
              <h5>11:30 AM</h5>
              <h4>Senior Fitness</h4>
              <p>Ronny</p>
            </Link>
            <Link to='/contact'>
              <h5>6:00 PM</h5>
              <h4>BODY FEAR</h4>
              <p>Cindy</p>
            </Link>
            <Link to='/contact'>
              <h5>7:30 PM</h5>
              <h4>Zumbey</h4>
              <p>Anthony</p>
            </Link>
          </div>
          <div className='calender__classes'>
            <Link to='/contact'>
              <h5>5:00 PM</h5>
              <h4>BODY FEAR</h4>
              <p>Cindy</p>
            </Link>
            <Link to='/contact'>
              <h5>8:30 PM</h5>
              <h4>Zumbey</h4>
              <p>Anthony</p>
            </Link>
          </div>
          <div className='calender__classes'>
            <Link to='/contact'>
              <h5>10:00 AM</h5>
              <h4>Zumbey</h4>
              <p>Kaci</p>
            </Link>
            <Link to='/contact'>
              <h5>11:30 AM</h5>
              <h4>Senior Fitness</h4>
              <p>Ronny</p>
            </Link>
            <Link to='/contact'>
              <h5>6:00 PM</h5>
              <h4>BODY FEAR</h4>
              <p>Cindy</p>
            </Link>
          </div>
          <div className='calender__classes'>
            <Link to='/contact'>
              <h5>11:30 AM</h5>
              <h4>Senior Fitness</h4>
              <p>Ronny</p>
            </Link>
            <Link to='/contact'>
              <h5>6:00 PM</h5>
              <h4>BODY FEAR</h4>
              <p>Cindy</p>
            </Link>
            <Link to='/contact'>
              <h5>7:30 PM</h5>
              <h4>Zumbey</h4>
              <p>Anthony</p>
            </Link>
          </div>
          <div className='calender__classes'>
            <Link to='/contact'>
              <h5>11:30 AM</h5>
              <h4>Senior Fitness</h4>
              <p>Ronny</p>
            </Link>
            <Link to='/contact'>
              <h5>6:00 PM</h5>
              <h4>BODY FEAR</h4>
              <p>Cindy</p>
            </Link>
          </div>
          <div className='calender__classes'>
            <Link to='/contact'>
              <h5>10:00 AM</h5>
              <h4>Yoga</h4>
              <p>Kacy</p>
            </Link>
            <Link to='/contact'>
              <h5>11:30 AM</h5>
              <h4>Senior Fitness</h4>
              <p>Ronny</p>
            </Link>
            <Link to='/contact'>
              <h5>6:00 PM</h5>
              <h4>BODY FEAR</h4>
              <p>Cindy</p>
            </Link>
            <Link to='/contact'>
              <h5>7:30 PM</h5>
              <h4>Yoga</h4>
              <p>Anthony</p>
            </Link>
          </div>
          <div className='calender__classes'>
            <Link to='/contact'>
              <h5>11:30 AM</h5>
              <h4>Senior Fitness</h4>
              <p>Ronny</p>
            </Link>
            <Link to='/contact'>
              <h5>7:30 PM</h5>
              <h4>Circuit Training</h4>
              <p>Anthony</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calender;
