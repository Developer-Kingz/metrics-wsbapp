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
        <NavLink to="/" className="nav"><FontAwesomeIcon className="arr" icon={faArrowLeft} /></NavLink>
        <div className="details-cont">
          <img src={details.flags.svg} alt="" className="cont-flag" />

          <div className="details-cont-inner">
            <div className="cont-in">
              <h1>
                Country Name:
                {details.name.common}
              </h1>
              <h3>
                Capital:
                {details.capital}
              </h3>
            </div>

            <div className="region">
              <h4>
                Region:
                {details.region}
              </h4>
              <h4>
                Countries Population:
                {details.population}
              </h4>
              <h4>
                Language:
                {details.languages.ukr}
              </h4>
              <h4>{details.timezones}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;
