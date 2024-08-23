const fs = require('fs');
const csv = require('csv-parser');

///read csv file
function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

readCSV('./data/companies_kv.csv')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error reading CSV file:', error);
    });
