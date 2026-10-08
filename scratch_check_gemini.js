const https = require('https');
const fs = require('fs');

const key = "AQ.Ab8RN6I4PQaOqoRhebrRPkNYXTnNU_r727eMH1vGiDOrYUZXSQ";
https.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('C:/Users/Naren/Downloads/SAFENET/gemini_response.json', JSON.stringify({
      statusCode: res.statusCode,
      body: data
    }, null, 2));
  });
}).on('error', err => {
  fs.writeFileSync('C:/Users/Naren/Downloads/SAFENET/gemini_response.json', JSON.stringify({ error: err.message }));
});
