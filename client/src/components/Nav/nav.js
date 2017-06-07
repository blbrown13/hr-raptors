import React from 'react';
import Navbar from 'react-sidebar';
import NavTitlePanel from './navTitlePanel';
import SidebarContent from './sidebarContent';
import download from 'downloadjs';
import codeBoilerPlate from '../Code/codeBoilerPlate';



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
    this.logoutButtonClick = this.logoutButtonClick.bind(this);
  }

  menuButtonClick(ev) {
    // ev.preventDefault();
    this.setState({
      docked: !this.state.docked,
    });
  }

  saveButtonClick() {
    console.log('CLICKED SAVE BUTTON');
    var cbp = codeBoilerPlate();
    console.log(cbp);
    // To Do: save codeBoilerPlate render data only. Currently saves the page that is loaded.
    // console.log('document:', codeBoilerPlate().props.children.props.children)
    // console.log('document:', document.getElementsByTagName("code")[0].innerText);
    // download(codeBoilerPlate().props.children.props.children, "Material-GUI.html", "text/html"); // does not eval props.code
    // download(document.getElementsByTagName('code')[0].innerText, 'Material-GUI.html', 'text/html');
  }

  logoutButtonClick() {
    console.log('user is logging out!');
  }

  render() {
    const sidebar = <SidebarContent />;
    const contentHeader = (
      <div className="nav-wrapper">
        <div className="left">
        {!this.state.docked ?
        <a onClick={this.menuButtonClick} style={styles.contentHeaderMenuLink}><i className="fa fa-bars" aria-hidden="true" /></a> :
          <a onClick={this.menuButtonClick} style={styles.contentHeaderMenuLink}><i className="fa fa-times" aria-hidden="true" /></a>}
        <a onClick={this.props.toggleView} style={styles.contentHeaderMenuLink}><i className="fa fa-code" aria-hidden="true" /></a>
        <a onClick={this.saveButtonClick} style={styles.contentHeaderMenuLink}><i className="fa fa-download" aria-hidden="true" /></a>
          <a onClick={this.logoutButtonClick} href={"/login"} style={styles.contentHeaderMenuLink}><i className="fa fa-sign-out" aria-hidden="true" /></a>
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

    return (

      <Navbar {...sidebarProps}>
        <NavTitlePanel title={contentHeader} />
        <div style={styles.content}>
          {this.props.view}
        </div>
      </Navbar>
    );
  }
}

export default Nav;
