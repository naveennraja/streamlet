import React, {Component} from 'react';
import {connect} from "react-redux";
import {signIn,signOut} from "../actions";

class GoogleAuth extends Component {
     componentDidMount() {
          window.gapi.load('client:auth2', () => {
               window.gapi.client.init({
                    clientId:'680287125199-mm5pgv61gss026e0rnte7bpngftqd9io.apps.googleusercontent.com',
                    scope:'email'
               }).then( () => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange)
               });
          });
     }
     onAuthChange = isSignedIn => {
          if(isSignedIn) {
               this.props.signIn(this.auth.currentUser.get().getId())
          } else {
               this.props.signOut()
          }
     }
     onClickSignIn = () => {
          this.auth.signIn();
     }
     onClickSignOut = () => {
          this.auth.signOut();
     }
     renderAuthButton() {
          switch(this.props.isSignedIn){
               case true : return (<button className="ui red google button" onClick={this.onClickSignOut}><i className="google icon"/> Sign Out</button>)
               case false : return (<button className="ui red google button" onClick={this.onClickSignIn}><i className="google icon"/> Sign In with google</button>)
               default : return null
          }
     }
     render() { 
          return ( <div>{this.renderAuthButton()}</div>);
     }
}
const mapStateToProps = (state) => {
     return {isSignedIn : state.auth.isSignedIn}
};
export default connect(mapStateToProps,{
     signIn,
     signOut
})(GoogleAuth);