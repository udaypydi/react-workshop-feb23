import React from 'react';
import PropTypes from 'prop-types';

import './todoCard.css';

function ToDoCard(props) {

  const { customStyles, children } = props;

  return (
    <div className={`ToDoCard-container ${customStyles}`}>
      {children}
    </div>
  )
}

ToDoCard.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.string,
};

ToDoCard.defaultProps = {
  customStyles: '',
};

export default ToDoCard;
