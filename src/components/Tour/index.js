import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  showInfo = e => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const {id, city, img, alt, name, info } = this.props.item;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={alt} />
          <span className="close-btn">
            <i className="fas fa-window-close" onClick={()=>removeTour(id)} />
          </span>
        </div>
        <div className="tour-info">
          <h4>{city}</h4>
          <h5>{name}</h5>
          <h6>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down" onClick={this.showInfo} />
            </span>
          </h6>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
