import React from 'react';
import { connect } from "react-redux"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';

import { updateTree } from '../../actions/codeActions';

import Tree from '../../dataStructure/tree.js'


@connect((store) => {
  return {
    projects: store.code.projects,
    projectData: store.code.projects.query_rows,
    tree: store.code.tree,
  };
})

class ProjectView extends React.Component {

  constructor(props) {
    super(props);
    console.log('THIS.PROPS.PROJECTDATA*************************');
    console.log(this.props.projectData);
    console.log(Array.isArray((this.props.projectData)));
    console.log('PROJECTS: ', this.props.projects);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(objectTree) {

    // var newTree = new Tree(
    //   objectTree
    // )

    var someCode = JSON.parse(objectTree);

    // Object.prototype.someCode = Tree.traverseRendering;
    // someCode.prototype.constructor = Tree;

    console.log('OBJECT TREE: ', objectTree);
    console.log('TYPE OF objectTree', typeof objectTree);
    console.log('TYPE OF someCode', typeof someCode);
    console.log('AFTER PARSING: ', someCode);

    this.props.dispatch(updateTree(objectTree));
  }

  render() {
    var projects = this.props.projectData;

    return (
      <div className="center-content">
        <h1>Project View</h1>
        <div className="row">
          {
            _.map(projects, (project, index) =>
              <div className="col s4" id="project-card" key={index}>
                <Card>
                  <CardTitle title={project.project_name} subtitle={project.time_stamp} />
                  <CardText>
                    {project.description}
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

// const treeMap = _.map(treeArray, (node, index) => (

