import React, { Component } from "react";
import VehicleCard from "./components/VehicleCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import vehicles from "./vehicle.json";
import "./App.css";

function shuffleVehicles(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Set this.state
  state = {
    vehicles,
    currentScore: 0,
    topScore: 0,
    rightWrong: "Are you ready?",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledVehicles = shuffleVehicles(vehicles);
    this.setState({ vehicles: shuffledVehicles });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Try to click on each vehicle, but don't hit any duplicates, or we'll
          release the hounds!!!
        </Title>

        <Container>
          <Row>
            {this.state.vehicles.map(vehicle => (
              <Column size="md-3 sm-6">
                <VehicleCard
                  key={vehicle.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={vehicle.id}
                  image={vehicle.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
