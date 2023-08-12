import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Details = ({ country }) => {
  const { name, flags } = country;
  const { common } = name;
  return (
    <NavLink to={`/details/${common}`} className="navlink">
      <div className="details">
        <div className="details-inner">
          <img src={flags.png} alt="" className="flags" />
          <h4>{name.official}</h4>
        </div>
      </div>
    </NavLink>
  );
};

export default Details;

Details.propTypes = {
  country: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
