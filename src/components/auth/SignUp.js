import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    secondName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="white-text">Sign Up</h5>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <label htmlFor="secondName">Last Name</label>
            <input type="text" id="secondName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1">Sign Up</button>
            {authError && <div className="red-text center">{authError}</div>}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signUp
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
