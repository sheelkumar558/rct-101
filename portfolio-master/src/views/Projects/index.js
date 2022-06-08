import React, { useState } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import RFCard from "../../components/RFCard";
import "./style.css";

const projects = {
  React: [
    {
      style: { minWidth: "450", margin: "auto" },
      cardTitle: {
        style: {
          color: "#fff",
          height: "176px",
          background:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQWR1h2Dzvwrwd4Fmb39hAp1HrgDVz8SPGn0TBaQxgmiIE4jM) center/ cover",
        },
        body: "My Portfolio Site",
      },
      cardText: {
        body: "A portfolio project created in react.",
      },
      acctionButtons: ["Github"],
      cardMenu: {
        style: { color: "#fff" },
      },
    },
  ],
  AngularJS: [],
  NodeJS: [],
  JavaScript: [],
};

function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  function toggleCategories() {
    if (activeTab === 0) {
      return (
        <>
          {projects["React"].map((projectCard) => (
            <div className="projects-grid">
              <RFCard card={projectCard} />
            </div>
          ))}
        </>
      );
    } else if (activeTab === 1) {
      return (
        <>
          {projects["JavaScript"].map((projectCard) => (
            <div className="projects-grid">
              <RFCard card={projectCard} />
            </div>
          ))}
        </>
      );
    } else if (activeTab === 2) {
      return (
        <>
          {projects["NodeJS"].map((projectCard) => (
            <div className="projects-grid">
              <RFCard card={projectCard} />
            </div>
          ))}
        </>
      );
    } else if (activeTab === 3) {
      return (
        <>
          {projects["AngularJS"].map((projectCard) => (
            <div className="projects-grid">
              <RFCard card={projectCard} />
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {projects["React"].map((projectCard) => (
            <div className="projects-grid">
              <RFCard card={projectCard} />
            </div>
          ))}
        </>
      );
    }
  }

  return (
    <div className="catagory-tabs">
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple
      >
        <Tab>React</Tab>
        <Tab>JavaScript</Tab>
        <Tab>NodeJS</Tab>
        <Tab>AngularJS</Tab>
      </Tabs>
      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories()}</div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Projects;
