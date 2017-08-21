import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name: '',
    email: '',
    message: '',
    emailList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const emailListing = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    this.setState({ emailList: [...this.state.emailList, emailListing] });

    event.preventDefault();
  }
render() {
return (
<div className="App">
    <h2 className="bottom">Send Message!</h2>
        <form  onSubmit={this.handleSubmit}  className="bottom">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address:</label>
                <input type="email"  onChange= {this.handleChange} value = {this.state.email} className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div classNameName="form-group">
                <label for="exampleInputPassword1">Name:</label>
                <input type="text"  onChange= {this.handleChange}  value={this.state.name} className="form-control" name="name" id="exampleInputPassword1" placeholder="Name" />
            </div>


            <div className="form-group">
                <label for="exampleTextarea">Message:</label>
                <textarea  name="message" onChange= {this.handleChange} value={this.state.message} className="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>

            <button type="submit" value="submit" className="btn btn-primary"> <i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
        </form>
</div>
    );
  }
}

export default App;
