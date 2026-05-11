const fs = require('fs');

const units = ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7'];

units.forEach(unit => {
  const filePath = 'src/pages/' + unit + '.js';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace Brain Booster with bold version
  content = content.replace(/\n🧠 Brain Booster: /g, '\n\n🧠 <b>Brain Booster:</b> ');
  
  fs.writeFileSync(filePath, content);
  console.log(unit + '.js - Done');
});

console.log('All updated with bold!');
