import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.split('\n').filter(Boolean);
      const fields = {};

      for (const line of lines.slice(1)) { // Skip header
        const [firstname, , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      resolve(fields);
    });
  });
};
