import React, { Component } from "react";
import Header from "../header/Header";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      companyname: "",
      password: "",
      email: "",
      mobilenumber: 0,
      mobilealternate:0,
      address:'',
      city:"",
      state:"",
      zip:0,
      
    //   history: this.props.history,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  //------- handling submit--------//



  async handleSubmit(e) {
    const { username, password, email,
         companyname ,mobilenumber,mobilealternate,
         address,city,state,zip} = this.state;


    let item = { username, password, email,
         companyname ,mobilenumber,mobilealternate,
         address,city,state,zip};

    e.preventDefault();
    console.warn(username, password, email,
         companyname ,mobilenumber,mobilealternate,
         address,city,state,zip);

    const result = await axios.post('http://192.168.1.77:30/user/newregister', {
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZjZTAzYWRhNTdmODExZjkwZDI2OTg4In0sImlhdCI6MTYxNDk0NjY1MH0.423nKl2ydGOw55G9BfJlHP-qNxOwt2xzOvqeu0Zjk2k"
        
      },
    });

    result = await result.json;
    console.log("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    this.state.history.push("/login");
  }


    //------- handling change--------//

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { username, password, email,
         companyname ,mobilenumber,mobilealternate,
         address,city,state,zip} = this.state;
  
         return (
      <div>
        <Header />
        <div className="col-sm-6 offset-sm-3">
          <form onSubmit={this.handleSubmit}>
            <h1 className="text-center my-3 ">Register New User</h1>

            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              value={username}
              id="username"
              name="username"
              onChange={this.handleChange}
              className="form-control mb-3"
              placeholder="username"
            />

            <label htmlFor="companyname">Company Name</label>
            <input
              type="text"
              className="form-control mb-2"
              id="companyname"
              value={companyname}
              onChange={this.handleChange}
              name="companyname"
            />
            <small id="userNamelHelp" className="form-text text-muted mb-3">
              Enter your legal company name.
            </small>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              id="password"
              name="password"
              onChange={this.handleChange}
              className="form-control mb-3"
              placeholder="password"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              id="email"
              name="email"
              onChange={this.handleChange}
              className="form-control mb-3"
              placeholder="email"
            />

            <label htmlFor="mobilenumber">Mobile Number</label>
            <input
              type="number"
              className="form-control mb-2"
              value={mobilenumber}
              onChange={this.handleChange}
              id="mobilenumber"
              name="mobilenumber"
            />

            <label htmlFor="mobilealternate">Alternate Mobile Number</label>
            <input
              type="number"
              className="form-control mb-2"
              value={mobilealternate}
              onChange={this.handleChange}
              id="mobilealternate"
              name="mobilealternate"
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control mb-2"
              value={address}
              onChange={this.handleChange}
              id="address"
              name="address"
            />
            
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control mb-2"
              value={city}
              onChange={this.handleChange}
              id="city"
              name="city"
            />

            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control mb-2"
              value={state}
              onChange={this.handleChange}
              id="state"
              name="state"
            />

            <label htmlFor="zip">Pin Code</label>
            <input type="number"
             className="form-control mb-2"
             value={zip}
             onChange={this.handleChange}
             id="zip" name="zip" />

            <button
              className="btn btn-primary mt-2"
              style={{ marginLeft: "41%" }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
