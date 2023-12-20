const MyAccount = () => {
  return (
    <div>
      <div className='page-title'>
        <h1 className='page-title__text'>Sign Up</h1>
      </div>
      <div className='my-account'>
        <div className='my-account__container'>
          <form action='' className='my-account__form'>
            <div className='my-account__email'>
              <label htmlFor='email'>Email</label>
              <div className='my-account__bar'></div>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='example@email.com'
                required
              />
            </div>
            <div className='my-account__password'>
              <label htmlFor='password'>Password</label>
              <div className='my-account__bar'></div>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='password'
                pattern='[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*'
                required
              />
            </div>
            <button type='submit' className='my-account__submit'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MyAccount;
