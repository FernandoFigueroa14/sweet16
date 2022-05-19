import React from 'react';
import { Col } from 'react-bootstrap';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Col md="12" lg="2" className='countdown lh-1 lh-sm-2 pb-md-4 pb-lg-3'>
      <p className='countdown-number mb-0'>{value}</p>
      <span className="fs-3">{type}</span>
    </Col>
  );
};

export default DateTimeDisplay;
