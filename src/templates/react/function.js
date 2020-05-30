const template = `
import React from 'react';
import PropTypes from 'prop-type';

function Template({ }) {
    return (<div>Template Content</div>);
}

Template.defaultProps = {}

Template.propTypes = {}
`;

module.exports = function (component) {
  return template.replace(/Template/g, component);
};
