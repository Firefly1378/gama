/*import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login'>
 <div className='login_background'>
    <img
     className="login_logo"
    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png'alt=""/>
    <button className='login_button'>
      Sign in
    </button>
    
    
    
    
     </div>
    </div>
  )
}

export default Login;*/
import React, {useState} from 'react'
import './Login.css'
import Signup from './Signup';

const Login = () => {
    const [singIn, setSingIn] = useState(false);

  return (
    <div className='login'>
        <div className="login__background">
            <img src="https://1000marche.net/wp-content/uploads/2020/03/Netflix-logo.png" alt="netflix" 
                className='login__logo'/>
            <button className='login__button' onClick={() => setSingIn(true)}>
                Sign In
            </button>

            <div className="login__gradient" />
        </div>

       <div className="login__body">
            {singIn ? ( 
                <Signup />
            ): (
                <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="login__input">
                    <form>
                        <input type='email' placeholder='Email address' />
                        <button className='login__getStarted' onClick={() => setSingIn(true)}>Get Started </button>
                    </form>
                </div>
                </>
            )}
            
        </div>
    </div>
  )
}

export default Login;