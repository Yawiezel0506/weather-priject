import React from 'react'
import WeatherForm from './weatherForm'
import WeatherInfo from './weatherInfo'

export default function AppWeather() {
  return (
    <React.Fragment>
        <WeatherForm/>
        <WeatherInfo/>
    </React.Fragment>
  )
}
