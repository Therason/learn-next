export default function SsrWeather({ current_weather }: any) {
  return (
    <>
      <h1>Weather in DC 🌞</h1>
      <h3>Date 📆: {current_weather.time.split('T')[0]}</h3>
      <h3>Hour ⏰: {current_weather.time.split('T')[1]}</h3>
      <h3>Temperature 🌡️: {current_weather.temperature}°</h3>
    </>
  )
}

// function that gets executed on the server for EVERY request
export async function getServerSideProps() {
  // fetch weather data from open meteo API
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=38.9072&longitude=-77.0369&temperature_unit=fahrenheit&current_weather=true&timezone=EST')
  const { current_weather } = await res.json()

  // pass data to the page via props
  return { props: { current_weather } }
}
