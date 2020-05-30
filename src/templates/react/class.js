const template = `
import React, { Component } from 'react';
import PropTypes from 'prop-type';

class Template extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  getSnapshotBeforeUpdate() {}

  componentDidUpdate() {}

  render() {
    return <div>Template Content</div>;
  }
}

Template.defaultProps = {};

Template.propTypes = {};

`;

module.exports = function (component) {
  return template.replace(/Template/g, component);
};
