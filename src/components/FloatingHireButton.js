import React, { Component } from "react";

class FloatingHireButton extends Component {
  goToContact() {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }

  render() {
    return (
      <button
        className="floating-hire-button"
        onClick={this.goToContact}
        aria-label="Hire Me"
      >
        Hire Me!
      </button>
    );
  }
}

export default FloatingHireButton;

