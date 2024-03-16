function Membership() {
  return (
    <div className='membership'>
      <div className='membership__container'>
        <div className='membership__title'>
          <h2>MEMBERSHIPS</h2>
          <p>
            We offer the Fear Premium Card Membership and Fear Classic
            Membership.
          </p>
          <p>Both gets you access to GYM FEAR.</p>
        </div>
        <div className='membership__cards'>
          <div className='membership__card'>
            <div className='membership__card-info' id='card-premium'>
              <h1>
                FEAR Premium <span>Best Value</span>
              </h1>
              <h2>Starting at</h2>
              <h3>
                <span>$24.99</span> /mo
              </h3>
              <h4>Plus taxes and fees</h4>
              <p>
                Access to any club, bring a guest. Premium digital workouts and
                much more!
              </p>
              <div className='membership__card-links'>
                <a href='/'>Learn More</a>
                <a href=''>Join Now</a>
              </div>
            </div>
          </div>
          <div className='membership__card'>
            <div className='membership__card-info' id='card-classic'>
              <h1>FEAR Classic</h1>
              <h2>Starting at</h2>
              <h3>
                <span>$10</span> /mo
              </h3>
              <h4>Plus taxes and fees</h4>
              <p>Our standard membership with unlimited access.</p>
              <div className='membership__card-links'>
                <a href='/'>Learn More</a>
                <a href=''>Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Membership;
