import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__container'>
        <p>This page isn't available</p>
        <p>Sorry about that</p>
        <Link to='/'>GYM FEAR</Link>
      </div>
    </div>
  );
};
export default NotFound;
