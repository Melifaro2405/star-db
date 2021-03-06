import React, {Component} from "react";
import {PlanetList, PlanetDetails} from "../sw-components";
import Row from "../row";


export default class PlanetPage extends Component {
  state = {
    selectedItem: 3
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem})
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem}/>} />
    );
  }
}