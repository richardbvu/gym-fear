import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Download() {
  return (
    <div className='download'>
      <div className='download__container'>
        <div className='download__text'>
          <h1>FREE FOR EVERYONE</h1>
          <p>DOWNLOAD THE GYM FEAR APP</p>
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
