import { Component, React } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      area: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      playing: false,
      position: 0,
      duration: 0,
    };
  }
  render() {
    return <div className="Player">Hello World</div>;
  }
}
export default Player;
