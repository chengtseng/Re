import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.determineBadgeClass()}>
          {this.handleClickEvent()}
        </span>
        <button
          onClick={this.handleClickEvent}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <ul>
          {this.state.tags.map(function(tag) {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      </div>
    );
    //'class' is a key word in javascript, in JSX syntax we use class name when we want to apply a css class to an element
  }

  handleClickEvent() {
    console.log("clicked");
    console.log(this.state.count);
  }

  determineBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //or use object destructuring
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
