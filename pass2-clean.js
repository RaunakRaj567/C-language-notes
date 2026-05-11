const fs = require('fs');

const moreReplacements = {
  '।': '.',
  'यार': 'Hey',
  'बहुत': 'very',
  'आसान': 'easy',
  'important': 'important',
  'सब कुछ': 'everything',
  'सीख': 'learn',
  'सकते हो': 'can',
  'लेकिन': 'but',
  'यहाँ': 'here',
  'और': 'and',
  'या': 'or',
  'क्या': 'what',
  'कैसे': 'how',
  'जब': 'when',
  'अगर': 'if',
  'नहीं': 'not',
  'हाँ': 'yes',
  'भी': 'too',
  'ही': 'only',
  'तक': 'till',
  'के लिए': 'for',
  'के साथ': 'with',
  'के बिना': 'without',
  'में': 'in',
  'पर': 'on',
  'से': 'from',
  'को': 'to',
  'का': ' of ',
  'की': ' of ',
  'दे': 'give',
  'ले': 'take',
  'करो': 'do',
  'करना': 'do',
  'डालो': 'put',
  'बनाओ': 'make',
  'सोचो': 'think',
  'लिखो': 'write',
  'पढ़ो': 'read',
};

['Unit4', 'Unit5', 'Unit6', 'Unit7'].forEach(unit => {
  const filePath = `src/pages/${unit}.js`;
  let content = fs.readFileSync(filePath, 'utf8');

  Object.entries(moreReplacements).forEach(([hindi, english]) => {
    while (content.includes(hindi)) {
      content = content.replace(hindi, english);
    }
  });

  fs.writeFileSync(filePath, content);
  console.log(`${unit}.js - Pass 2 done`);
});

console.log('Completed!');
