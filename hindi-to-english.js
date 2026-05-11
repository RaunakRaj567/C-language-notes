const fs = require('fs');

const hindiToEnglish = {
  // Common Hindi phrases and words
  'Array का array': 'Array of arrays',
  'rows, columns।': 'rows, columns.',
  '//पहली row, पहला column': '// First row, first column',
  '//तीसरी row, चौथा column': '// Third row, fourth column',
  'Character array जो': 'Character array ending with',
  'null character (\\0) से end होता है।': 'null terminator (\\0).',
  '"Hello" का ASCII': '"Hello" ASCII',
  'representation:': 'representation:',
  'null character)': 'null character)',
  'size automatically 6 होगा': 'Size automatically 6',
  'String functions:': 'String functions:',
  'string की length': 'Get string length',
  'string copy करना': 'Copy strings',
  'दो strings को concatenate करना': 'Concatenate two strings',
  'दो strings को compare करना': 'Compare strings',
  'ये सब string.h में हैं!': 'All functions defined in string.h!',
  'Array में एक-एक element को check करके target ढूंढना।': 'Check array elements one by one to find target.',
  'Time Complexity: O(n) - सब elements को देख सकता है।': 'Time Complexity: O(n) - Check all elements.',
  'Unsorted array के लिए काम करता है।': 'Works on unsorted arrays.',
  'बड़े arrays के लिए slow है।': 'Slow for large arrays.',
  'Sorted array में fast search के लिए।': 'Fast search on sorted arrays.',
  'Middle element से compare करके आधा eliminate करो।': 'Compare middle element and eliminate half each time.',
  'Sorted array जरूरी है!': 'Array must be sorted!',
  'सबसे simple sorting algorithm।': 'Simplest sorting algorithm.',
  'बड़े elements को पीछे की ओर ले जाता है।': 'Move larger elements toward the end.',
  'slow है।': 'Slow.',
  'learning के लिए अच्छा।': 'Good for learning and small datasets.',
  'Minimum element को find करके उसे सही position पर रखना।': 'Find minimum element and place it in correct position.',
  'एक ही name से access कर सकते हो': 'Access with one name',
  'Indexing 0 से शुरू होती है': 'Indexing starts from 0',
  'zero-based indexing': 'zero-based indexing',
  'Memory में continuous होते हैं': 'Stored in continuous memory',
  'fast access के लिए perfect': 'for fast access',
  'Fixed size होते हैं': 'Fixed size determined',
  'declaration के समय decide होता है': 'at declaration time',
  'Array of 5 integers': 'Array of 5 integers',
  'Array of 10 floats': 'Array of 10 floats',
  'सब values': 'All values',
  'बाकी 0 से initialize': 'Rest initialized to 0',
  'size automatically 3 होगा': 'Size automatically 3',
  'Declaration के बाद values default (garbage) हो सकते हैं।': 'Uninitialized arrays contain garbage values.',
  'पहला element': 'First element',
  'दूसरा element': 'Second element',
  'पांचवां element': 'Fifth element',
  'size 5 है तो valid है': 'valid if size is 5',
  'बाहर है': 'Out of bounds',
  'Element को change कर सकते हो': 'Modify element',
  'Array का नाम first element का pointer है': 'Array name is pointer to first element',
  'arr == &arr[0]  // always true': 'arr == &arr[0]  // Always true',
  'second element का address': 'second element',
  'Pointer arithmetic से array को traverse कर सकते हो।': 'Use pointer arithmetic to traverse arrays.',
  'Very important concept': 'Very important concept',
};

['Unit4', 'Unit5', 'Unit6', 'Unit7'].forEach(unit => {
  const filePath = `src/pages/${unit}.js`;
  let content = fs.readFileSync(filePath, 'utf8');

  Object.entries(hindiToEnglish).forEach(([hindi, english]) => {
    content = content.replaceAll(hindi, english);
  });

  fs.writeFileSync(filePath, content);
  console.log(`${unit}.js cleaned`);
});

console.log('All Hindi content converted!');
