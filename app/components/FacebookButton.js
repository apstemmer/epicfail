import React from 'react';
import '../styles/FacebookButton.scss';


class FacebookButton extends React.Component{
  constructor(){
    super();
  }
  facebookLogin() {
    let FB = window.FB;
    let scopes = 'email';

    FB.login(function(response) {
      if (response.status === 'connected') {
        console.log('The user has logged in!' + response.authResponse.accessToken);
        this.setState()
        FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      }
    }, { scope: scopes });
  }

  facebookLogout(){
    let FB = window.FB;
    FB.logout(function(response){
      console.log(response);
    });
  }

  render(){
    return (<div className="FacebookButton">
              <div className="fb-login-button" data-width="200" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true">
              </div>
            </div>
            );
  }
}

export default FacebookButton;
