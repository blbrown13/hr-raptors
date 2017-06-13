import React from 'react';
import Navbar from 'react-sidebar';
import NavTitlePanel from './navTitlePanel';
import SidebarContent from './sidebarContent';
import OptionBarContent from './optionBarContent'
import download from 'downloadjs';
import { saveProject } from "../../actions/codeActions"
import { loadProjects } from "../../actions/codeActions"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PopoverExampleSimple from './userProjectsList';

import View from '../View/view';
import Code from '../Code/code';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '2.5vh',
  },
};

@connect((store) => {
  return {
    tree: store.code.tree,
    userData: store.user.user,
  };
})

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      docked: true,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };

    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.saveButtonClick = this.saveButtonClick.bind(this);
    this.loadButtonClick = this.loadButtonClick.bind(this);
  }

  menuButtonClick(ev) {
    // ev.preventDefault();
    this.setState({
      docked: !this.state.docked,
    });
  }

  saveButtonClick() {
    console.log('saving tree to db.....', this.props.tree);
    this.props.dispatch(saveProject(this.props.tree, this.props.userData));
    download(document.getElementsByTagName('code')[0].innerText, 'Material-GUI.html', 'text/html');
  }

  loadButtonClick() {
    console.log('current user is:\n', this.props.userData);
    console.log('loading projects.....');
    this.props.dispatch(loadProjects(this.props.userData.name));
  }

  render() {
    const sidebar = <SidebarContent />;
    const contentHeader = (
      <div className="nav-wrapper">
        <div className="left">
          {!this.state.docked ?
            <a onClick={this.menuButtonClick} style={styles.contentHeaderMenuLink}><i className="fa fa-bars" aria-hidden="true" /></a> :
            <a onClick={this.menuButtonClick} style={styles.contentHeaderMenuLink}><i className="fa fa-times" aria-hidden="true" /></a>}
          <Link to="/"><a style={styles.contentHeaderMenuLink}><i className="fa fa-desktop" aria-hidden="true" /></a></Link>
          <Link to="/code"><a style={styles.contentHeaderMenuLink}><i className="fa fa-code" aria-hidden="true" /></a></Link>
          <a onClick={this.saveButtonClick} style={styles.contentHeaderMenuLink}><i className="fa fa-download" aria-hidden="true" /></a>
          <a onClick={this.loadButtonClick} style={styles.contentHeaderMenuLink}><i className="fa fa-user" aria-hidden="true"/></a>
          <a href={"/login"} style={styles.contentHeaderMenuLink}><i className="fa fa-sign-out" aria-hidden="true" /></a>
        </div>
      </div>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      styles: {
        sidebar: Object.assign({}, styles.sidebar, {position: 'fixed'})
      },
    };
    {if (this.props.showingOptionView){
      return (
        <Router>
          <Navbar {...sidebarProps}>
            <NavTitlePanel title={contentHeader} />
            <div style={styles.content}>
              <Route exact path="/" component={View}/>
              <Route path="/code" component={Code}/>
            </div>
            <div className ="nav-wrapper">
            <div className='right sidebar' >
           <OptionBarContent/>
            </div>
            </div>
          </Navbar>
        </Router>
    );
    } else {
      return(
        <Router>
          <Navbar {...sidebarProps}>
            <NavTitlePanel title={contentHeader} />
            <div style={styles.content}>
              <Route exact path="/" component={View}/>
              <Route path="/code" component={Code}/>
              < PopoverExampleSimple />
            </div>
          </Navbar>
        </Router>
    );}
    }
  }
}

export default Nav;
