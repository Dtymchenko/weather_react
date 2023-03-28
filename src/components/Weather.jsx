import React from 'react'
import './Weather.css'
import Form from './Form'
import { weatherDetails } from './weatherDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Weather = ({weather, setCity}) => {

    const [currentWeather, setCurrentWeather] = React.useState({});

    React.useEffect(() => {
        setCurrentWeather(weather?.weather?.[0]?.main);
    }, [weather]);

return (
    <div className='cont'
    style={{background: `linear-gradient(${weatherDetails?.[currentWeather]?.gradient[0]}, ${weatherDetails?.[currentWeather]?.gradient[1]})` }}
    >
		<Form setCity={setCity}/>
        <div className='half1'>
		
		
            <div className='main'>		
                <span className='main2'>
					<FontAwesomeIcon icon={weatherDetails?.[currentWeather]?.icon} />
				</span>
                <span className='text'>City: {weather?.name}, {weather?.sys?.country}</span>
                <span className='text'>Current temperature: {Math.round(weather?.main?.temp)}°</span>
                <span className='text'>Feels like: {Math.round(weather?.main?.feels_like)}°</span>
                <span className='text'>Pressure: {Math.round(weather?.main?.pressure)}</span>
                <span className='text'>Humidity: {Math.round(weather?.main?.humidity)}</span>
            </div>
        <div className='half2'>
        <span className='text_title'>{weatherDetails?.[currentWeather]?.title}</span>
        <span className='text_subtitle' >{weatherDetails?.[currentWeather]?.subTitle}</span>

        </div>
    </div>
    </div>


)
}

export default Weather
