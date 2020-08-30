import React, { Component } from "react";
import ShowQuestion from "./ShowQuestions";

class AddQuestion extends Component {
  state = {
    question: "",
    options: [
      { index: "A", text: "" },
      { index: "B", text: "" },
      { index: "C", text: "" },
    ],
    showQuestion: false,
  };

  handleQuestionChange = (e) => {
    this.setState({ question: e.target.value });
  };

  handleOptionChange = (e, index) => {
    const updatedOptions = this.state.options.map((option) => {
      if (option.index === index) {
        return {
          ...option,
          text: e.target.value,
        };
      }

      return option;
    });

    this.setState({ options: updatedOptions });
  };

  handleTogglePage = () => {
    this.setState({
      showQuestion: false,
      question: "",
      options: [
        { index: "A", text: "" },
        { index: "B", text: "" },
        { index: "C", text: "" },
      ],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.question === "") return;
    for (let option of this.state.options) {
      if (option.text === "") return;
    }
    this.setState({ showQuestion: true });
  };

  render() {
    const { question, options, showQuestion } = this.state;

    if (showQuestion) {
      return (
        <ShowQuestion
          {...this.state}
          handleTogglePage={this.handleTogglePage}
        />
      );
    }
    return (
      <div className="row ">
        <form className="col s12 center-align" onSubmit={this.handleSubmit}>
          <h3> Ask A Question </h3>
          <p>Please feel free to populate this form with your desired questions and answers</p>
          <div className="input-field col offset-s4 s4">
            <input
              type="text"
              id="question"
              placeholder="Enter your question"
              value={question}
              onChange={this.handleQuestionChange}
            />

            {options.map(({ index, text }) => (
              <input
                type="text"
                id="option"
                placeholder={`${index}: Enter your answer`}
                value={text}
                onChange={(e) => this.handleOptionChange(e, index)}
              />
            ))}

            <button
              className="btn waves-effect green"
              type="submit"
              name="action"
            >
              <i className="center">View Answer</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddQuestion;
