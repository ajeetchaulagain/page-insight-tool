import React from "react";
import styled from "styled-components";
import axios from "axios";

import Loading from "./Loading";
import speedIcon from "../images/speed.png";

const FormWrapper = styled.div`
  width: 100%;
  font-size: 1rem;

  form {
    margin-top: 1.5rem;
  }

  input[type="text"] {
    padding: 1rem;
    width: 500px;
    border-radius: 5px;
    font-size: inherit;
    border: 1px solid #fff;
    background-color: transparent;
    color: #f8f7f9;
    font-family: inherit;

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
    background-color: #86c430;
    font-size: inherit;
    font-family: inherit;
    color: #2f2f30;
    border: none;
    transition: background-color 0.5s ease;
    text-transform: uppercase;

    :hover {
      background-color: #99d83f;
      cursor: pointer;
    }
  }
`;

const tag = "UserInputForm Component";

class UserInputForm extends React.Component {
  state = {
    url: "",
    placeHolderText: "Insert site URL here",
    loading: false
  };

  isUrlValid = string => {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(string)) {
      return true;
    } else {
      return false;
    }
  };

  getUrlForRequest = url => {
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = "http://" + url;
    }
    return url;
  };

  // handler for button click
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });

    const url = this.state.url;
    console.log("is urlvalid:", this.isUrlValid(url));

    const urlFinal = this.isUrlValid(url) ? this.getUrlForRequest(url) : null;

    const { data } = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlFinal}`
    );

    this.setState({ loading: false });

    this.props.onStartTest(data);
  };

  // handler for input change
  handleChange = event => {
    this.setState({ url: event.currentTarget.value });
  };

  render() {
    return (
      <FormWrapper>
        {!this.state.loading ? (
          <React.Fragment>
            <img src={speedIcon} />
            <h2>Monitor your site speed</h2>
            <p>Enter a URL of your site to analyse the performance.</p>
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
          </React.Fragment>
        ) : (
          <Loading />
        )}
      </FormWrapper>
    );
  }
}
export default UserInputForm;
