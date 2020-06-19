
const apiKey = process.env.REACT_APP_NASA_KEY;

export default class NasaAPI {

  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  static getAPOD = async (date) => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if (date) {
      url += `&date=${date}`
    }
    console.log('aaa')
    return await fetch(url)
      .then(this.handleErrors)
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  }


}