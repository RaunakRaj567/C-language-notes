const fs = require('fs');
const path = require('path');

const units = ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7'];

units.forEach(unit => {
  const filePath = path.join(__dirname, `src/pages/${unit}.js`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace Brain Booster with bold and ensure proper line breaks
  content = content.replace(/\n🧠 Brain Booster: /g, '\n\n🧠 <b>Brain Booster:</b> ');
  
  fs.writeFileSync(filePath, content);
  console.log(`${unit}.js updated successfully`);
});

console.log('All files updated with bold Brain Booster!');
