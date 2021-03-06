if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

// init Airtable
const airtable = require('airtable').base(process.env.AIRTABLE_BASE_ID);

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

const buildOutputData = (rawData) => {
  // map raw data to desired output object and return it
  return rawData.map(entry => {
    // build object properties conditionally
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
    //return object to map function
    return creditData;
  });
};

exports.handler = async function (event, context) {
  // get airtable data
  const data =  await getAirtableData('credits', 'Grid view');
  // build output object for each post entry
  const output = buildOutputData(data);
  // return response object
  return {
    statusCode: 200,
    body: JSON.stringify(output)
  };
};