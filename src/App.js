import React, { Component } from 'react';
import GridModel from "./components/GridModel";
import PaperModel from "./components/PaperModel";
import PlayerCard from "./components/PlayerCard";
import Score from "./components/Score";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Navbottom from "./components/Navbottom";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters: characters,
    pickedChars: [],
    topScore: 0,
    alertMessage: "Click any image to begin, but don't click the same image twice!"
  }

  handlePicked = event => {

    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCharacters()
    this.checkGuess(name, this.updateTopScore)
  }

  shuffleCharacters = () => {

    this.setState(this.state.characters = this.shuffleArray(this.state.characters))
  }

  shuffleArray = (a) => {

    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  checkGuess = (name, cb) => {

    const newState = { ...this.state };
    if (newState.pickedChars.includes(name)) {
      newState.alertMessage = `Ooops, you already picked  "${name.toUpperCase()}"!`
      newState.pickedChars = []
      this.setState(this.state = newState)
    } else {
      newState.pickedChars.push(name)
      newState.alertMessage = `Excellent Selection!`
      this.setState(this.state = newState)
    }
    cb(newState, this.alertWinner)
  }

  updateTopScore = (newState, cb) => {

    if (newState.pickedChars.length > newState.topScore) {
      newState.topScore++
      this.setState(this.state = newState)
    }
    cb(newState)
  }

  alertWinner = (newState) => {

    if (newState.pickedChars.length === 12) {
      newState.alertMessage = "YOU WON!!";
      newState.pickedChars = [];
      this.setState(this.state = newState)
    }
  }

  render() {
    return (
      
      <div>
        <Navbar style={{ background: "#313133", marginBottom: "5px" }} />

        <GridModel container direction="column" style={{ margin: "0 auto", maxWidth: 945 }}>

          <GridModel item lg={12}>

            <PaperModel>
              {this.state.alertMessage === "Excellent Selection!!" ? (
                <Alert message={this.state.alertMessage} style={{ color: "green" }} />
              ) : (
                  <Alert message={this.state.alertMessage} style={{ color: "red" }} />
                )}
            </PaperModel>

          </GridModel>

          <GridModel container justify="space-between">

            <GridModel item lg={6} md={6} sm={12} xs={12}>

              <PaperModel>
                <Score type="Score" score={this.state.pickedChars.length} />
              </PaperModel>

            </GridModel>

            <GridModel item lg={6} md={6} sm={12} xs={12}>

              <PaperModel>
                <Score type="Top Score" score={this.state.topScore} />
              </PaperModel>

            </GridModel>
          </GridModel>
        </GridModel>

        <GridModel container spacing={24} justify="center" style={{ maxWidth: 945, margin: "0 auto" }}>
          {this.state.characters.map(char => (
            <GridModel item lg={3} md={3} sm={4} xs={6}>
            <PlayerCard
              id={char.id}
              name={char.name}
              image={char.image}
              key={char.id}
              handlePicked={this.handlePicked}
            />
            </GridModel>
          ))}
        </GridModel>

        <Navbottom style={{ background: "#313133", marginTop: "17.5px", paddingTop: "15px", borderTop: "2.5px solid slategray" }}>
          <a href="https://github.com/mboslin/ClickyGame" target="_blank" className="link" alt="the-clicky-game"><i className="fa fa-github fa-2x"></i></a>
        </Navbottom>

      </div>
    )
  }
}

export default App;
