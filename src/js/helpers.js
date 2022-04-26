// Goal of this file or of this module is to contain a couple of functions that we reuse over and over in our project.
import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// fetch and upload data, both in one function
export const AJAX = async function (url, uploadData = undefined) {
  const fetchPro = uploadData
    ? fetch(url, {
        // fetch takes in a second argument which is an object of options
        method: 'POST', // sending the data needs to be a POST request
        headers: {
          // object of headers- some snippets of text, like information about the request itself
          'Content-Type': 'application/json', // implies that the data we're gonna send is going to be in JSON format so only then our API can correctly accept that data and create a new recipe in the database. Standard Header
        },
        // Then the payload of the request. Basically the data that we want to send, called the body which should be in JSON
        body: JSON.stringify(uploadData), // converting our data into JSON format
      })
    : // API is going to return the data back that we just sent
      fetch(url);

  try {
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err; // re-throwing the error so it could be handled in model.js module instead of here.
  }
};
