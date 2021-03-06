import React from 'react';

import Box from './Box';

const Row = React.createClass({
  propTypes: {
    type: React.PropTypes.number.isRequired,
    boxes: React.PropTypes.array.isRequired,
    onBoxMouseOver: React.PropTypes.func.isRequired,
    onBoxMouseOut: React.PropTypes.func.isRequired,
    onBoxDelete: React.PropTypes.func.isRequired,
    onBoxClick: React.PropTypes.func.isRequired
  },

  render() {
    let renderedBoxes = [];
    let {
      'type': type,
      'boxes': boxes
    } = this.props;

    for (let i = 0; i < boxes.length; i++) {
      renderedBoxes.push(this.renderBox(i, boxes));
    }

    return (
      <div className={`Row Row--${type}`}>
        {renderedBoxes}
      </div>
    );
  },

  renderBox(rowIndex, neighbours) {
    return (
      <Box localIndex={rowIndex}
            neighbours={neighbours}
            model={neighbours[rowIndex]}
            key={neighbours[rowIndex].name}
            onMouseOver={this.props.onBoxMouseOver}
            onMouseOut={this.props.onBoxMouseOut}
            onDelete={this.props.onBoxDelete}
            onClick={this.props.onBoxClick}/>
    );
  }
});

export default Row;