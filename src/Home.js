import { FormGroup, FormControl, Col } from "react-bootstrap";
import React, { Component } from "react";
import icon from "./Octocat.png";
import "./Home.css";
class Home extends Component {
  state = {
    user: ""
  };
  handleChange = e => {
    this.setState({ user: e.target.value });
  };
  render() {
    console.log(this.props);
    return (
      <Col xs={12} sm={8} md={4} className="Col">
        <img src={icon} alt="logo" width="200px" />
        <p>Display all pull requests you sent on GitHub!</p>
        <form action={"/" + this.state.user} method="GET">
          <FormGroup>
            <FormControl
              className="Input"
              type="text"
              value={this.state.user}
              onChange={this.handleChange}
              placeholder="Enter Github username"
            />
          </FormGroup>
          <button type="submit" hidden />
        </form>
      </Col>
    );
  }
}

export default Home;
