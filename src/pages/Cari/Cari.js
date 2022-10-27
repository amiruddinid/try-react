import { useState, useEffect } from 'react'
import Card from '../../components/card';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMotor,
  selectMotor,
  filterMotor,
} from './CariSlice';

export default function Cari() {
  const motor = useSelector(selectMotor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMotor());
  }, [dispatch])

  const handleFilter = (type, e) => {
    const val = e.target.value;
    dispatch(filterMotor({
      type: type,
      value: val
    }));
  }
  return (
    <div>
        {/* ambil data ketika user click button */}
        <button onClick={() => dispatch(getMotor())}>Ambil data!</button>
        <select onChange={(e) => handleFilter('available', e)}>
          <option selected disabled hidden>Availability</option>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
        <select onChange={(e) => handleFilter('transmission', e)}>
          <option selected disabled hidden>Transmision</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        {
            motor ? 
              <ul>
              { motor.map(item => (
                <Card a={item} />
              ))} 
              </ul> : <h1>Tidak ada data</h1>
        }
    </div>
  )
}
