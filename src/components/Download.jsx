import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Download() {
  return (
    <div className='download'>
      <div className='download__container'>
        <div className='download__text'>
          <h5>FREE FOR EVERYONE</h5>
          <h1>DOWNLOAD THE GYM FEAR APP</h1>
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
