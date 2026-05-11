const fs = require('fs');
const path = require('path');

const units = ['Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6', 'Unit7'];

units.forEach(unit => {
  const filePath = path.join(__dirname, `src/pages/${unit}.js`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all bullet points with Brain Booster format
  content = content.replace(/\n• /g, '\n🧠 Brain Booster: ');
  
  fs.writeFileSync(filePath, content);
  console.log(`${unit}.js updated successfully`);
});

console.log('All files updated!');
