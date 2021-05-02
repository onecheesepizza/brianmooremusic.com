if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};
const fs = require('fs');

// init Airtable
const airtable = require('airtable').base(process.env.AIRTABLE_BASE_ID);

// config
const config = {
  url: '/api/',
  location: 'public/',
  fileName: 'data.json'
};

// get data from the Airtable API
const getAirtableData = async (table, view, fields) => {
  const tableData = await
    airtable(table)
      .select({
        view: view,
        fields: fields ? fields : []
      })
      .all()
      .catch(error => console.log(error));
  // only return the necessary field data from tableData
  return tableData.map((record) => record.fields);
};

// save data as json to build folder
const saveData = (data, location, fileName) => {
  console.log('saving data');
  try {
    fs.writeFileSync(config.location + config.fileName, JSON.stringify(data));
    console.log(`${fileName} saved to ${location}`);
  }
  catch (error) {
    console.log(error);
  };
};

// script runner
const runner = async () => {
  console.log('starting data cache script');
  const data = await getAirtableData('credits', 'Grid view');
  saveData(data, config.location, config.fileName);
  try {
    const data = fs.readFileSync(config.location + config.fileName, 'utf-8');
  } catch (err) {
    console.error(err);
  }
};

runner();