import React from "react";
import styled from "styled-components";
import axios from "axios";

const FormWrapper = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2.5rem;
  /* margin-top:5rem; */

  input[type="text"] {
    padding: 1rem;
    width: 500px;
    border-radius: 5px;
    font-size: inherit;
    border: 1px solid #fff;
    background-color: transparent;
    color: #e5e4e6;
    font-family: inherit;
    /* border:none; */

    ::placeholder {
      color: #e5e4e6;
    }

    :focus {
      outline: none;
      box-shadow: 0 0px 5px #b1c244;
    }
  }
  button {
    padding: 1.1rem 3rem;
    border-radius: 5px;
    margin-left: 0.3rem;
    font-weight: 700;
    background-color: #d3e65a;
    font-size: inherit;
    font-family: inherit;
    color: #2f2f30;
    border: none;
    transition: background-color 0.5s ease;
    /* text-transform: uppercase; */

    :hover {
      background-color: #b1c244;
      cursor: pointer;
    }
  }
`;

const tag = "UserInputForm Component";

class UserInputForm extends React.Component {
  state = {
    url: "",
    placeHolderText: "Insert site URL here"
  };

  // handler for button click
  handleSubmit = event => {
    event.preventDefault();
    const url = this.state.url;
    this.props.onStartTest(url);
    console.log("UserInputForm - url:", url);
  };

  // handler for input change
  handleChange = event => {
    event.preventDefault();
    this.setState({ url: event.currentTarget.value });
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder={this.state.placeHolderText}
            value={this.state.websiteUrl}
            onFocus={() => this.setState({ placeHolderText: "" })}
          />
          <button>Start Test</button>
        </form>
      </FormWrapper>
    );
  }
}
export default UserInputForm;
