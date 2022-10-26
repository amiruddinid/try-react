import { useState, useEffect } from 'react'
import Card from '../components/card';

export default function Cari() {
  const [motor, setMotor] = useState()
  
  const getMotors = () => {
    fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
        .then((res) => res.json())
        .then(res => setMotor(res));
  }

  //ambil data otomatis ketika page / halaman di buka
  useEffect(() => {
    getMotors();
  }, [])

  return (
    <div>
        {/* ambil data ketika user click button */}
        <button onClick={getMotors}>Ambil data!</button>
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
