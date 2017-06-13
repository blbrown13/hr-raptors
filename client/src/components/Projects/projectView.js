import React from 'react';
import { connect } from "react-redux"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { updateTree } from '../../actions/codeActions';

import Tree from '../../dataStructure/tree.js'


const dummyProjectData = [{
  email: '1234',
  time_stamp: 'June 12th 2017, 5:20pm',
  project_name: 'Brandon',
  object: '{}' },
  {
    email: '1234',
    time_stamp: 'June 12th 2017, 5:41pm',
    project_name: 'Alexi',
    object: '{}' },
  {
    email: '1234',
    time_stamp: 'June 12th 2017, 5:41pm',
    project_name: 'JT',
    object: '{}' },
  {
    email: '1234',
    time_stamp: 'June 12th 2017, 5:42pm',
    project_name: 'Colby',
    object: '{}' },
  {
    email: '1234',
    time_stamp: 'June 12th 2017, 5:42pm',
    project_name: 'Fred',
    object: '{}' } ];


var buttonTree = {button: <a className="waves-effect waves-light btn-large">Button</a>};


// action: select project
// dispatch: update tree

@connect((store) => {
  return {
    projectData: store.code.projects,
    tree: store.code.tree,
  };
})

class ProjectView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      array: dummyProjectData,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(objectTree) {
    var newTree = new Tree(
      buttonTree.button
    )
    console.log('CLICK! trying to select a project');
    this.props.dispatch(updateTree(newTree));
  }

  render() {

    return (
      <div className="center-content">
        <h1>Project View</h1>
        <div className="row">
          {
            this.state.array.map((project, index) =>
              <div className="col s4" key={index}>
                <Card>
                  <CardTitle title={project.project_name} subtitle={project.time_stamp} />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Load Project" onClick={this.handleClick.bind(this, project.object)}/>
                  </CardActions>
                </Card>
              </div>
            )
          }
        </div>
      </div>

    );
  }
}

export default ProjectView;

