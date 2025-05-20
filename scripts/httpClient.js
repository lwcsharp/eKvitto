import { Settings } from './config/config.js'

// export const get = async (endpoint) => {
//   const url = `${Settings.apiUrl}/${endpoint}`;

//   try {
//     const response = await fetch(url);

//     if (response.ok) {
//       return await response.json();      
//     } else {
//       throw new Error(`
//         Error: ${response.status}, ${response.statusText}`
//       );
//     }
//   } catch (error) {
//     console.log('Error info: ', error);
//   }
// };

export default class HttpClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  async get() {
    try {
      const uri = Settings.apiURL + this.endpoint;
      const respone = await this.fetch(uri);

      if (respone.ok) {
        return await respone.json();;
      } else {
        throw new Error(
          `Error: ${respone.status}, ${respone.statusText} `
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}