import React, { Component } from "react";

const getRandomNumber = (options) => {
  return Math.floor(Math.random() * options.length);
};

class ShowQuestion extends Component {
  state = {
    answer: getRandomNumber(this.props.options),
  };

  generateRandomAnswer = () => {
    this.setState({ answer: getRandomNumber(this.props.options) });
  };

  render() {
    const { answer } = this.state;
    const { question, options } = this.props;

    return (
      <div>
        <div>
          <h2 className="blue-text text-darken-2">{question}</h2>
          <ul>
            {options.map(({ index, text }, i) => {
              const className = i === answer ? "active" : "";
              return <li className={className}>{`${index}: ${text}`}</li>;
            })}
          </ul>
        </div>
        <div className="row">
          <h4
            className="waves-effect green btn-large m6 s3"
            onClick={this.props.handleTogglePage}
          >
            Ask Again
          </h4>
          <h4
            className="waves-effect green btn-large  m6 s4"
            onClick={this.generateRandomAnswer}
          >
            get another random answer
          </h4>
        </div>
      </div>
    );
  }
}

export default ShowQuestion;
