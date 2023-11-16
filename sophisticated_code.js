/**
 * File: sophisticated_code.js
 * Description: Complex and elaborate code example.
 * Author: John Doe
 * Date: October 10, 2022
 */

// Importing necessary libraries
const axios = require('axios');
const fs = require('fs');

// Constants
const API_URL = 'https://api.example.com/items';
const FILE_PATH = './output.txt';

// Function to fetch data from API
async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
}

// Function to process data and write to a file
function processData(data) {
  let processedData = '';

  // Perform complex transformations
  data.forEach((item, index) => {
    processedData += `Item ${index + 1}:\n`;
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        processedData += `${key}: ${item[key]}\n`;
      }
    }
    processedData += '\n';
  });

  // Write processed data to a file
  fs.writeFile(FILE_PATH, processedData, (error) => {
    if (error) {
      console.error('Error while writing to file:', error);
    } else {
      console.log(`Data written to ${FILE_PATH}`);
    }
  });
}

// Main function
async function main() {
  console.log('Fetching data from API...');
  const data = await fetchData();

  if (data) {
    console.log('Data fetched successfully.');
    console.log('Processing data...');
    processData(data);
  } else {
    console.log('Failed to fetch data from API.');
  }
}

// Execute main function
main();