import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tour";
import tourData from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData // store tourData.js in a state
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state; // to assess this array

    return (
      <section className="tourList">
        {tours.map(tour => (
          <Tour key={tour.id} item={tour} removeTour={this.removeTour} /> //take each tour and render separately
        ))}
      </section>
    );
  }
}
