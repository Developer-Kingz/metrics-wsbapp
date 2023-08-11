import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Details from './Details';
import { fetchData } from '../redux/HomeSlice';
import NavBar from './NavBar';

const Home = () => {
  const countries = useSelector((state) => state.data.data);
  const [search, setSearch] = useState('');

  const findCountries = countries.filter((country) => country.name.official.toLowerCase()
    .includes(search.toLowerCase()));

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="home-container">
      <NavBar search={search} onSearch={onSearch} />
      <div className="header" />
      <div className="home">
        {countries && findCountries.map((country) => (
          <div className="my-details" key={country.name}>
            <Details key={country.name} country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
