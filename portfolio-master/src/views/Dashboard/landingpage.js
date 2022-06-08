import React from "react";
import "./style.css";
import { Grid, Cell } from "react-mdl";

// constants
import constant from "../../constant";

const LandingPage = () => (
  <div style={{ width: "100%", margin: "auto" }}>
    <Grid className="landing-grid">
      <Cell col={3}>
        <img
          src={constant.dashboard.avatar}
          alt="img-avatar"
          className="img-avatar"
        />
      </Cell>
      <Cell col={9}>
        <div className="banner-text">
          <h1>{constant.dashboard.banner}</h1>
          <hr />
          <p>{constant.dashboard.skills.toString()}</p>
          <div className="social-links">
            {constant.dashboard.socialAccounts.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Cell>
    </Grid>
  </div>
);

export default LandingPage;
