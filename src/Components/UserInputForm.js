import React from "react";
import styled from "styled-components";
import axios from "axios";

const FormWrapper = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  /* margin-top:5rem; */

  input[type="text"] {
    padding: 1rem;
    width: 500px;
    border-radius: 5px;
    font-size: inherit;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;

    ::placeholder {
      color: #98e7ff;
    }
  }
  button {
    padding: 1rem 3rem;
    border-radius: 5px;
    margin-left: 0.5rem;
    background-color: #5c73f2;
    font-size: inherit;
    color: #fff;
    border: none;
    :hover {
      background-color: #3e38f2;
      cursor: pointer;
    }
  }
`;

const tag = "UserInputForm Component";

class UserInputForm extends React.Component {
  handleClick = async event => {
    event.preventDefault();

    const resp = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com`
    );

    console.log(resp);

    // axios
    //   .post("https://gtmetrix.com/api/0.1/test", {
    //     data: {
    //       url: "https://ajeetchaulagain.com",

    //     },
    //     auth: {
    //       username: "chaulagainajeet@gmail.com",
    //       password: "f785c52e64671d6bfd5ee0ee38ffad38"
    //     }
    //   })
    //   .then(resp => {
    //     console.log(resp.status);
    //   })
    //   .catch(err => {
    //     console.log(`error ${err}`);
    //   });

    console.log("User Input Form - Component");
  };

  handleChange = event => {
    event.preventDefault();
    // console.log(tag, event);
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Insert your site url here"
          />
          <button>Start Testing</button>
        </form>
      </FormWrapper>
    );
  }
}
export default UserInputForm;
