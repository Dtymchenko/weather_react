import React from 'react'
import './Weather.css'
import { weatherDetails } from './weatherDetails'
import { svgStorage } from './svgStorage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

const Weather = ({weather}) => {

    const [currentWeather, setCurrentWeather] = React.useState({});

    React.useEffect(() => {
        setCurrentWeather(weather?.weather?.[0]?.main);
    }, [weather]);

return (
    <div className='cont'
    style={{background: `linear-gradient(${weatherDetails?.[currentWeather]?.gradient[0]}, ${weatherDetails?.[currentWeather]?.gradient[1]})` }}
    >
        <div className='half1'>
		<FontAwesomeIcon icon={icon({name: 'user-secret'})} /> // Defaults to the Classic family, Solid style
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} /> // Defaults to Classic family
<FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} /> // Setting both family and style
<FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon
			<div className='svg'>
				{/* <svg>
				{svgStorage['lightning']}
				</svg> */}
			
				{/* {svgStorage['cloudy']} */}
				{/* {svgStorage['lightning']} */}
				{/* {svgStorage['rainy']} */}
				{/* {svgStorage['pouring']} */}
				{/* {svgStorage['snow']} */}
				{/* {svgStorage['fog']} */}
				{/* {svgStorage['windy']} */}
				{/* {svgStorage['dust']} */}
				{/* {svgStorage['tornado']} */}
				{/* {svgStorage['sunny']} */}
			</div>

			<svg >
                {/* {svgStorage[weatherDetails?.[currentWeather]?.icon]} */}
				{/* {svgStorage['cloudy']} */}
				{/* {svgStorage['lightning']} */}
				{/* {svgStorage['rainy']} */}
				{/* {svgStorage['pouring']} */}
				{/* {svgStorage['snow']} */}
				{/* {svgStorage['fog']} */}
				{/* {svgStorage['windy']} */}
				{/* {svgStorage['dust']} */}
				{/* {svgStorage['tornado']} */}
				{/* {svgStorage['sunny']} */}
            </svg>

        
		{/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['cloudy'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['lightning'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['rainy'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['pouring'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['snow'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['fog'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['windy'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['dust'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['tornado'] }
		</svg>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 68.52" xmlSpace="preserve">
		{svgStorage['sunny'] }
		</svg> */}
		
            <div className='main'>
                <span className='main2'></span>
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
