const fs = require('fs');
const path = require('path');

const units = [4, 5, 6, 7];

units.forEach(unit => {
  const filePath = path.join('src/pages', `Unit${unit}.js`);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace all common Hindi words/patterns with English equivalents
  const replacements = {
    // Hindi to English content
    '🔍 Binary Search': '🔍 Binary Search Algorithm',
    '🫧 Bubble Sort': '🫧 Bubble Sort Algorithm',
    '🎯 Selection Sort': '🎯 Selection Sort Algorithm', 
    '📝 Sorting Algorithms को Compare करते हैं': '📝 Sorting Algorithms Comparison',
    '🔗 Arrays और Pointers का Relationship': '🔗 Arrays and Pointers Relationship',
    '🚨 Array से Common Mistakes': '🚨 Common Array Mistakes',
    '💡 O(n²) - slow है।': '💡 O(n²) - Slow algorithm.',
    '⏱️ Time Complexity: O(n) - सब elements को देख सकता है।': '⏱️ Time Complexity: O(n) - Check all elements.',
    '✅ Unsorted array के लिए काम करता है।': '✅ Works on unsorted arrays.',
    '❌ बड़े arrays के लिए slow है।': '❌ Slow for large arrays.',
  };

  Object.keys(replacements).forEach(hindi => {
    while (content.includes(hindi)) {
      content = content.replace(hindi, replacements[hindi]);
    }
  });

  // Generic Hindi character removal patterns for content strings
  content = content.replace(/।$gm, '');  // Remove devanagari danda at end of lines
  content = content.replace(/\s*[हैकोसेजाभीभीभीभीभीभीभीभीभीभीभी]+\s*/g, ' '); // Remove standalone Hindi words
  
  fs.writeFileSync(filePath, content);
  console.log(`Unit${unit}.js - Cleaned`);
});

console.log('All units cleaned!');
