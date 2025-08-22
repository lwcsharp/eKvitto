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
    console.log('Error getting data: ', error);
  }
};

export const post = async (endpoint, data) => {
  const url = `${Settings.apiUrl}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'x-apikey': Settings.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error: ${response.status}, ${response.statusText}`);
    }
  } catch (error) {
    console.log('Error posting data:', error);
  }
};

export const remove = async (endpoint, id) => {
  const url = `${Settings.apiUrl}/${endpoint}/${id}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'x-apikey': Settings.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error(`Error: ${response.status}, ${response.statusText}`);
    }
  } catch (error) {
    console.log('Error removing data:', error);
  }
};
