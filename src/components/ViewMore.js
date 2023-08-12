/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';

const ViewMore = () => {
  const { name } = useParams();

  const country = useSelector((state) => state.data.data);
  const details = country.find((cont) => cont.name.common === name);

  return (
    <>
      <NavBar />
      <div className="viewmore">
        <NavLink to="/metrics-wsbapp" className="nav"><FontAwesomeIcon className="arr" icon={faArrowLeft} /></NavLink>
        <div className="details-cont">
          <img src={details.flags.svg} alt="" className="cont-flag" />

          <div className="details-cont-inner">
              <div>
                <p>Country Name:</p>
                {details.name.common}
              </div>
              <div>
                <p>Capital:</p>
                {details.capital}
              </div>
          
              <div>
                <p>Region:</p>
                {details.region}
              </div>
              <div>
                <p>Countries Population:</p>
                {details.population}
              </div>
              <div>
                <p>Subregion:</p>
                {details.subregion}
              </div>
              <div> <p>TimeZone:</p> {details.timezones}</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;
