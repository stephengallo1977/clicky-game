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
      "Click on an image to earn points, but don't click on any of them more than once!"
  };

  // componentDidMount(){
  //   var ben = new Person("Benson, Ben", 31);
  //   console.log(ben)
  //   ben.setState({name: "Alex", age: 25})
  //   console.log(ben)
  // }

  setClicked = id => {
    // const newArr = [];
    // for(var i = 0; i < this.state.matches.length; i++){
    //   let match = this.state.matches[i];

    //   //
    //   //
    //   //
    //   //
    //   newArr.push(match)
    // }

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

  // setClicked = id => {
  //   // Make a copy of the state matches array to work with
  //   const matches = this.state.matches;

  //   // Filter for the clicked match
  //   const clickedMatch = this.state.matches.filter(match => match.id === id);

  //   // If the matched image's clicked value is already true,
  //   // do the game over actions
  //   if (clickedMatch[0].clicked) {
  //     console.log("Correct Guesses: " + this.state.correctGuesses);
  //     console.log("Best Score: " + this.state.bestScore);

  //     // correctGuesses = 0;
  //     // clickMessage =
  //     //   "Dang! You already clicked on that one! Now you have to start over!";

  //     for (let i = 0; i < this.state.matches.length; i++) {
  //       // matches[i].clicked = false;
  //     }

  //     // this.setState({ clickMessage });
  //     // this.setState({ correctGuesses });
  //     // this.setState({ matches });

  //     // Otherwise, if clicked = false, and the user hasn't finished
  //   } else if (correctGuesses < 11) {
  //     // Set its value to true
  //     clickedMatch[0].clicked = true;

  //     // increment the appropriate counter
  //     correctGuesses++;

  //     clickMessage = "Great! You haven't click on that one yet! Keep going!";

  //     if (correctGuesses > bestScore) {
  //       bestScore = correctGuesses;
  //       this.setState({ bestScore });
  //     }

  //     // Shuffle the array to be rendered in a random order
  //     matches.sort(function(a, b) {
  //       return 0.5 - Math.random();
  //     });

  //     // Set this.state.matches equal to the new matches array
  //     this.setState({ matches });
  //     this.setState({ correctGuesses });
  //     this.setState({ clickMessage });
  //   } else {
  //     // Set its value to true
  //     clickedMatch[0].clicked = true;

  //     // restart the guess counter
  //     correctGuesses = 0;

  //     // Egg on the user to play again
  //     clickMessage =
  //       "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
  //     bestScore = 12;
  //     this.setState({ bestScore });

  //     for (let i = 0; i < matches.length; i++) {
  //       matches[i].clicked = false;
  //     }

  //     // Shuffle the array to be rendered in a random order
  //     matches.sort(function(a, b) {
  //       return 0.5 - Math.random();
  //     });

  //     // Set this.state.matches equal to the new matches array
  //     this.setState({ matches });
  //     this.setState({ correctGuesses });
  //     this.setState({ clickMessage });
  //   }
  // };

  render() {
    return (
      <Wrapper>
        <Title> To boldly click where no one has clicked before! </Title>
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
