import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post(`/api/users/register`, newUser)
      .then(res => this.props.history.push("/login"))
      .catch(err => {
        this.setState(
          {
            errors: err.response.data
          },
          () => {
            console.log("au", this.state.errors.msg);
          }
        );
      });
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row ">
            <div className="col-md-6 m-auto shadow-lg p-5  bg-body rounded">
              <h2 className="text-center mb-0 ">Register</h2>
              <p className="text-center text-lead">Create your account here</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    className={
                      errors.type === "email"
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    placeholder="Enter your email"
                  />
                  <span className="invalid-feedback">{errors.msg}</span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    className={
                      errors.type === "password"
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    placeholder="Enter your password"
                  />
                  <span className="invalid-feedback">{errors.msg}</span>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary justify-content-center d-flex w-100"
                  value="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;