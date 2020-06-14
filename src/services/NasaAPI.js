
const apiKey = process.env.REACT_APP_NASA_KEY;

export default class NasaAPI {

  static getAPOD = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  }
}