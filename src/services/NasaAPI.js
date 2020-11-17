export default class NasaAPI {
  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  static getAPOD = async (date) => {
    let url = `https://day-dapod.azurewebsites.net/api/GetAPOD`;

    if (date) {
      url += `?date=${date}`;
    }

    return await fetch(url)
      .then(this.handleErrors)
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  };
}
