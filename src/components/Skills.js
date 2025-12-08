import React, { Component } from "react";
import {ReactSVG} from 'react-svg';

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return !skills.type ? (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        ) : (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className="svg-icon-wrapper">
                  <div className="svg-img" style={{ display: "inline-block", lineHeight: "1" }}>
                    <ReactSVG 
                      src={`${process.env.PUBLIC_URL}/assets/icons/${skills.uri}`}
                      beforeInjection={(svg) => {
                        svg.setAttribute('style', 'color: white;');
                        svg.querySelectorAll('path').forEach(path => {
                          path.setAttribute('fill', 'white');
                        });
                        svg.querySelectorAll('*').forEach(el => {
                          if (el.getAttribute('fill') === '#000000' || el.getAttribute('fill') === 'black') {
                            el.setAttribute('fill', 'white');
                          }
                        });
                      }}
                    />
                  </div>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
