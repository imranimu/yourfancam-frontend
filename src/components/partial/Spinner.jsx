import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

const PageSpinner = ({ color, ...restProps }) => {
  return (
    <div {...restProps} className="cr-page-spinner">
      <Spinner color={color} />
    </div>
  );
};

PageSpinner.propTypes = {
  color: PropTypes.string,
};

PageSpinner.defaultProps = {
    color: '',
};

export default PageSpinner;