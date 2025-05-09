import { WEATHER_API_KEY } from '../config.js';
export const fetchData = async (inputValue) => {
  
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${inputValue}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      } else {
        return await response.json();
      }
    } catch (error) {
      console.log(error);
      return undefined;
    } finally {
      console.log("fetch done");
    }
  };
  export const fetchSuggestions = async (inputValue)=>{
   
    const apiUrl = `https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${inputValue}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      } else {
       
        return await response.json();
      }
    } catch (error) {
      console.log(error);
      return undefined;
    } finally {
      console.log("fetch done");
    }

  }