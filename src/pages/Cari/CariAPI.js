export async function fetchMotor() {
    const motors = await fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
    const data = await motors.json()

    return data;
}

