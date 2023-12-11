import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleRoof,
  faPeopleGroup,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

function History() {
  return (
    <div className='history'>
      <div className='history__container'>
        <div className='history__grid'>
          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faPeopleRoof} />
            </div>
            <h1>Our Goal</h1>
            <p>
              At GYM FEAR, we help you achieve the body of your dreams. Our
              professional trainers will work with you to create a personalized
              fitness and nutrition plan to accomplish your goals.
            </p>
          </div>
          <div className='history__img-1'></div>
          <div className='history__img-2'></div>
          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faPeopleGroup} />
            </div>
            <h1>Our Team</h1>
            <p>
              We have an expert team of coaches that will help you succeed in
              your fitness goals, with personalized guidance and motivation.
            </p>
          </div>
          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faDumbbell} />
            </div>
            <h1>Our Equipment</h1>
            <p>
              You'll have everything you need at GYM FEAR to get that dream body
              you deserve.
            </p>
          </div>
          <div className='history__img-3'></div>
          <div className='history__img-4'></div>

          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faPeopleRoof} />
            </div>
            <h1>Our Classes</h1>
            <p>
              At GYM FEAR, we help you achieve the body of your dreams. Our
              classes will work with you to create a fun fitness experience to
              accomplish your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default History;
