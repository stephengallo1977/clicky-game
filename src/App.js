import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.matches to the matches json array
  state = {
    matches,
    correctGuesses: 0,
    bestScore: 0,
    clickMessage:
      "Click on any Sopranos image to earn points and I dare you to click on any of them more than once!"
  };

  setClicked = id => {
    const newMatches = this.state.matches.map(match => {
      if (match.id === id) {
        if (!match.clicked) {
          this.setState(
            state => ({
              correctGuesses: state.correctGuesses + 1
            }),
            () => {
              console.log(this.state);
              if (this.state.correctGuesses > this.state.bestScore) {
                this.setState({ bestScore: this.state.correctGuesses });
              }
            }
          );
          match.clicked = true;
        } else {
          this.setState({
            matches,
            correctGuesses: 0
          });
        }
      }
      return match;
    });
    this.setState({
      matches: newMatches
    });
  };

 

  render() {
    return (
      <Wrapper>
        <Title> FUGETABOUTIT! </Title>
        <h3 className="scoreSummary"> {this.state.clickMessage} </h3>
        <h3 className="scoreSummary">
          Correct Guesses: {this.state.correctGuesses} <br />
          Best Score: {this.state.bestScore}{" "}
        </h3>
        {this.state.matches.map(match => (
          <MatchCard
            setClicked={this.setClicked}
            id={match.id}
            key={match.id + "-matchCard"}
            image={match.image}
          />
        ))}{" "}
      </Wrapper>
    );
  }
}

export default App;
