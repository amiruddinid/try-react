import { useState, useEffect } from 'react'
import Card from '../../components/card';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMotor,
  selectMotor,
  selectInitMotor,
  filterMotor,
} from './CariSlice';

export default function Cari() {
  const [filter, setFilter] = useState({})
  const motor = useSelector(selectMotor);
  const initMotor = useSelector(selectInitMotor);
  const type = [...new Set(initMotor.map(e => e.type))]
  const transmisi = [...new Set(initMotor.map(e => e.transmission))]
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMotor());
  }, [dispatch])

  const handleInputFilter = (type, e) => {
    const val = e.target.value;
    setFilter({...filter, [type] : val})
  }

  const handleFilter = () => {
    console.log(filter)
    dispatch(filterMotor(filter));
  }

  return (
    <div className='mt-5'>
        {/* ambil data ketika user click button */}
        <button onClick={() => dispatch(getMotor())}>Ambil data!</button>
        <select onChange={(e) => handleInputFilter('type', e)}>
          <option selected disabled hidden>Type</option>
          {
            type.map(el => <option value={el}>{el}</option>)
          }
        </select>
        <select onChange={(e) => handleInputFilter('transmission', e)}>
          <option selected disabled hidden>Transmision</option>
          {
            transmisi.map(el => <option value={el}>{el}</option>)
          }
        </select>
        <input type="date" onChange={(e) => handleInputFilter('availableAt', e)}/>
        <button onClick={handleFilter}>Filter</button>
        {
            motor ? 
              <ul>
              { motor.map(item => (
                <div>
                  <h1>{item.model + item.manufacture}</h1>
                  <img src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + item.image.substring(1)}/>
                </div>
              ))} 
              </ul> : <h1>Tidak ada data</h1>
        }
    </div>
  )
}
