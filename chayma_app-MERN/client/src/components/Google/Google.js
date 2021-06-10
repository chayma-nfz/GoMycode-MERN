import React from 'react';
import GoogleLogin from 'react-google-login';
import { googleLogin } from '../../helpers/authFetch';

const Google = ({ informParent = func => func }) => {
  const responseGoogle = response => {
    
    googleLogin({ idToken: response.tokenId })
      .then(res => {
     
        informParent(res);
      })
      .catch(error => {
     
      });
  };
  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default Google;
