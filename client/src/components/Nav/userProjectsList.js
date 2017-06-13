import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {

    let projects =  this.props.projects;
    let listProjects = projects.map((project, index) =>
      <div key={index}>
        <div>{`${project.project_name} | ${project.email} | ${project.time_stamp}`}</div>
      </div>
    );

    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
        <div>
          {listProjects}
        </div>
        </Popover>
      </div>
    );
  }
}

export default PopoverExampleSimple;

{/*<Menu>*/}
  {/*<MenuItem primaryText="Refresh" />*/}
  {/*<MenuItem primaryText="Help &amp; feedback" />*/}
  {/*<MenuItem primaryText="Settings" />*/}
  {/*<MenuItem primaryText="Sign out" />*/}
{/*</Menu>*/}
