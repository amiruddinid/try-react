import { useState, useEffect } from 'react'

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
            motor ? motor.map(item => (
                <div>
                    <div>Plat No : {item.plate}</div>
                    <div>Model : {item.manufacture} - {item.model}</div>
                    <div>Rent/day : {item.rentPerDay}</div>
                </div>
            )) : <h1>Tidak ada data</h1>
        }
    </div>
  )
}
