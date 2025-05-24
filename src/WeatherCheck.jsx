import { useState } from 'react'
import { toast } from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';

export default function WeatherCheck() {

    let[cityName , setCityName] = useState('');
    let[weatherData, setWeatherData]=useState();
    let[isLoading,setLoading]=useState(false);
    const searchWeatherData = async (e)=>{
        e.preventDefault();
        if(cityName.trim()==''){
            toast.error("Please add valid city name.");
            return;
        }
        setLoading(true);
        const url = `https://open-weather13.p.rapidapi.com/city?city=${cityName}&lang=EN`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '099056050emsh95ec67138e47b35p162487jsne8c567fde4a1',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	        }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setWeatherData(result);
            setLoading(false); 
        } catch (error) {
            toast.error(error);
            setLoading(false);
        }
    }

  return (
  <div className="container">
  <div className="mt-4 text-center">
    <h1 className="display-5 fw-bold">🌤️ Weather Details</h1>
    <hr />
  </div>

  <div className="row justify-content-center">
    <div className="col-md-6">
      <form onSubmit={searchWeatherData} className="card p-4 shadow-sm border-0">
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter City Name"
          />
        </div>
        <button className="btn btn-success mt-3 w-100" type="submit">
          🔍 Search
        </button>
      </form>
    </div>
  </div>
  {isLoading ? <LoadingSpinner/> : ''}    
  {weatherData && !isLoading && (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6">
        <div className="card shadow border-0">
          <div className="card-body text-center">
            <h2 className="card-title mb-3">{weatherData?.name}</h2>
            <hr />
            <p className="card-text fs-5">
              🌡️ Temperature: <strong>{Math.round((weatherData?.main?.temp - 32) * 5 / 9)}°C</strong>
            </p>
            <p className="card-text fs-5">
              💧 Humidity: <strong>{weatherData?.main?.humidity}%</strong>
            </p>
            <p className="card-text fs-5">
              🔺 Max Temp: <strong>{Math.round((weatherData?.main?.temp_max - 32) * 5 / 9)}°C</strong>
            </p>
            <p className="card-text fs-5">
              🔻 Min Temp: <strong>{Math.round((weatherData?.main?.temp_min - 32) * 5 / 9)}°C</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

  )
}
