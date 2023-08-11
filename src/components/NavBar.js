import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ search, onSearch }) => (
  <div className="navbar">
    <div className="nav-inner">
      <img src="https://cdn.britannica.com/94/75394-050-C3F58654/World-map-Continents-Oceans-Seas.jpg" alt="" className="nav-img" />
      <h4>Search Countries</h4>
    </div>
    <input
      type="text"
      value={search}
      onChange={onSearch}
      placeholder="Search Country"
      className="search-country"
    />
  </div>
);

export default NavBar;
NavBar.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
