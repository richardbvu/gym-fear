import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FitnessProps = (props) => {
  const { img, id, title, time, background } = props;
  return (
    <div className='fitness__cards' key={id}>
      <div
        className='fitness__blur-load'
        style={{ backgroundImage: `url( ${background} )` }}
      >
        <LazyLoadImage className='fitness__images' src={img} alt='Fitness' />
      </div>
      <div className='fitness__text'>
        <h1>{title}</h1>
        <div className='fitness__bar'></div>
        <h2>
          <FontAwesomeIcon className='fitness__text-icon' icon={faClock} />
          {time}
        </h2>
        <Link className='fitness__link' to='/contact'>
          JOIN NOW
          <FontAwesomeIcon className='fitness__link-icon' icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};
export default FitnessProps;
