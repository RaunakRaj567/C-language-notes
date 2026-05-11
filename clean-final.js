const fs = require('fs');
const path = require('path');

const replacements = [
  // Unit 6 and 7 specific replacements
  { from: 'Structure का Introduction', to: 'Structure Introduction' },
  { from: 'Structure Members को Access करना', to: 'Accessing Structure Members' },
  { from: 'Typedef का use करके Cleaner Code', to: 'Using Typedef for Cleaner Code' },
  { from: 'Structure को Function में Pass करना', to: 'Passing Structures to Functions' },
  { from: 'Structure को File में Save करना', to: 'Saving Structures to Files' },
  { from: 'Common Mistakes से बचो', to: 'Common Mistakes to Avoid' },
  { from: 'C++ का Introduction', to: 'C++ Introduction' },
  
  // Common Hindi phrases
  { from: /एक ([^।]*?) है जो/g, to: 'A $1 that' },
  { from: /होता है।/g, to: '.' },
  { from: /होते हैं।/g, to: '.' },
  { from: /होता है/g, to: 'is' },
  { from: /होते हैं/g, to: 'are' },
  { from: / है।/g, to: '.' },
  { from: / हैं।/g, to: '.' },
  { from: / है$/gm, to: '.' },
  { from: / हैं$/gm, to: '.' },
  { from: / का /g, to: ' of ' },
  { from: / की /g, to: ' of ' },
  { from: / को /g, to: ' to ' },
  { from: / से /g, to: ' from ' },
  { from: / में /g, to: ' in ' },
  { from: /जो /g, to: 'which ' },
  { from: /करना/g, to: 'do' },
  { from: /करते/g, to: 'do' },
  { from: /करते हैं/g, to: 'do' },
  { from: /सकते/g, to: 'can' },
  { from: /सकते हैं/g, to: 'can' },
  { from: /समझ गए/g, to: 'understood' },
  { from: /सीखा/g, to: 'learned' },
  { from: /सीख गए/g, to: 'learned' },
  { from: /तैयार/g, to: 'ready' },
  { from: /सीख/g, to: 'learn' },
];

const files = ['Unit6.js', 'Unit7.js'];

files.forEach(file => {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  replacements.forEach(({ from, to }) => {
    if (typeof from === 'string') {
      content = content.split(from).join(to);
    } else {
      content = content.replace(from, to);
    }
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`${file} cleaned!`);
});

console.log('All files cleaned successfully!');
