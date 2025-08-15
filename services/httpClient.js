import { Settings } from './config/config.js';

export const get = async (endpoint) => {
  const url = `${Settings.apiUrl}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-apikey': Settings.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error: ${response.status}, ${response.statusText}`);
    }
  } catch (error) {
    console.log('Error: ', error);
  }
};
