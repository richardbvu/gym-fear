import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Download() {
  return (
    <div className='download'>
      <div className='download__container'>
        <div className='download__text'>
          <h5>FREE FOR EVERYONE</h5>
          <h1>DOWNLOAD THE GYM FEAR APP</h1>
          {/* <p>
            The Gym FEAR app has what you need - pick the best time to visit
            your favorite club with live crowd updates. Access digital workouts,
            classes and more! Are you ready?
          </p> */}
          <a href='/' className='download__link'>
            <div className='download__icon'>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </div>
            <div>Learn More & Download the app</div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Download;
