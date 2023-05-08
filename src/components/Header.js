import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import SkillsAnimation from "./SkillsAnimation";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false, currentSkillIndex: 0 };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  goToContact() {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ inline: "start" });
    }
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );
    return (
      <header
        id="home"
        style={{ display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <SkillsAnimation sharedSkills={this.props.sharedSkills}/>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <div className="hire-container">
                <div className="container">
                  <button className="btn-hireme" onClick={this.goToContact}>
                    {" "}
                    Hire Me!
                  </button>
                </div>
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
