import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings, ForgotPassword  } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';
import CustomForgotPassword from './Components/Login/CustomForgotPassword';


function App() {
  console.log(AuthState)
  return (
      <Authenticator hide={
          [
              ForgotPassword
          ]
      }>
        <CustomForgotPassword override={'ForgotPassword'}/>
      </Authenticator>

  );
}

export default App
