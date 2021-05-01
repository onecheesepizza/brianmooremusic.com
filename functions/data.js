if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

// init Airtable
const airtable = require('airtable').base(process.env.AIRTABLE_BASE_ID);
const fs = require('fs');

// get data from the Airtable API
const getAirtableData = async (table, view, fields) => {
  const tableData = await
    airtable(table)
      .select({
        view: view,
        fields: fields ? fields : []
      })
      .all();
  // only return the necessary field data from tableData
  return tableData.map((record) => record.fields);
};

// config
const config = {
  location: 'public/',
  fileName: 'data.json'
};

const readDataFile = async (filePath) => {
  try {
    // return data from cache file
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    console.error('cache file not found: reading data from API');
    // if error, try to return data from API
    return await getAirtableData('credits', 'Grid view');
  }
};

const buildOutputData = (rawData) => {
  // map raw data to desired output object
  return rawData.map(entry => {

    const creditData = {
      title: entry.title,
      credits: entry.credits,
    };
    if (entry.youtube) {
      creditData.youtube = entry.youtube;
    };
    if (entry["bandcamp-url"]) {
      creditData.bandcamp = {
        url: entry["bandcamp-url"],
        albumId: entry["bandcamp-id"]
      }
    };
    if (entry["custom-image"]) {
      creditData.customMedia = {
        image: entry["custom-image"],
        audio: entry["custom-audio"] ? entry["custom-audio"].replace(/\s/g, '').split(",") : null
      }
    }

    return creditData;
  });
};

const getData = async (config) => {
  console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
  // get data from cache file in production env, 
  if (process.env.NODE_ENV === 'production') {
    console.log('reading data from file');
    return readDataFile(config.location + config.fileName);
  // get data from live Airtable API otherwise
  } else {
    console.log('reading data from API');
    return await getAirtableData('credits', 'Grid view');
  }
};

exports.handler = async function (event, context) {

  // get data from file
  const data = await getData(config);
  // build output object for each post entry
  const output = buildOutputData(data);

  // return response object
  return {
    statusCode: 200,
    body: JSON.stringify(output)
  };
};