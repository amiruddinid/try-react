import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMotor,
} from './Cari/CariSlice';

export default function About() {
  const motor = useSelector(selectMotor);

  return (
    <>
      {
        motor ? 
          <ul>
          { motor.map(item => (
            <div>{item.model}</div>
          ))} 
          </ul> : <h1>Tidak ada data</h1>
      }
    </>
  )
}
