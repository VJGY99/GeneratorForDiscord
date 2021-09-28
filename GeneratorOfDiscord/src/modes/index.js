const fs = require('fs');

// Gather everything from current 
fs.readdirSync(__dirname).filter(file => file !== 'index.js').map(file => {
   module.exports[file.replace('.js', '')] = require(`${__dirname}/${file}`);
});
