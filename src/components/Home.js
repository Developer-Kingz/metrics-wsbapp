/* eslint-disable */
import React, { useEffect } from 'react'
import Details from './Details'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/HomeSlice';

const Home = () => {
  const data = useSelector((state) => state.data.data);
  console.log(data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]); 
  
  return (
    <div className='home'>
      <Details/>
      <Details/>
      <Details/>
      <Details/>
      <Details/>
      <Details/>
      <Details/>
      <Details/>
    </div>
  )
}

export default Home
