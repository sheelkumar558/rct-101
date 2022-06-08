import React from 'react';
import './App.css';
import Main from './route';
import { Link } from 'react-router-dom'

import { Layout, Header, Navigation, Content } from 'react-mdl';


const App = () => (
  < div className="demo-big-content" >
    <Layout>
      <Header className="header-color" title={<Link to="/" style={{textColor:'white'}}>Ritesh Firodiya </Link>} scroll>
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
        </Navigation>
      </Header>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </Layout>
  </div >
)

export default App;
