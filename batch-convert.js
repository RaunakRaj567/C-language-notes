const fs = require('fs');

// Unit 4 remaining replacements
const replacements = [
  {
    file: 'src/pages/Unit4.js',
    find: `title="🔄 Arrays का Traversal (Loops में)"
          content={[
            '🔁 1D Array:',
            '   for (int i = 0; i < 5; i++) {',
            '       printf("%d ", arr[i]);',
            '   }',
            '🔀 2D Array:',
            '   for (int i = 0; i < 3; i++) {  // rows',
            '       for (int j = 0; j < 4; j++) {  // columns',
            '           printf("%d ", arr[i][j]);',
            '       }',
            '       printf("\\n");',
            '   }',
            '💡 Nested loops से 2D arrays को traverse करते हैं!'`,
    replace: `title="🔄 Array Traversal with Loops"
          content={[
            '🔁 1D Array:',
            '   for (int i = 0; i < 5; i++) {',
            '       printf("%d ", arr[i]);',
            '   }',
            '🔀 2D Array:',
            '   for (int i = 0; i < 3; i++) {  // rows',
            '       for (int j = 0; j < 4; j++) {  // columns',
            '           printf("%d ", arr[i][j]);',
            '       }',
            '       printf("\\n");',
            '   }',
            '💡 Use nested loops to traverse 2D arrays!'`
  },
  {
    file: 'src/pages/Unit4.js',
    find: `title="🔤 Strings (Character Arrays)"
          content={[
            '📝 String: character array जो null character (\\0) से end होता है।',
            '💡 "Hello" का ASCII representation: H e l l o \\0',
            '📌 String Declaration:',
            '   char str1[6] = "Hello";  // 5 + 1 (null character)',
            '   char str2[] = "World";  // size automatically 6 होगा',
            '🔍 String functions:',
            '   strlen() - string की length',
            '   strcpy() - string copy करना',
            '   strcat() - दो strings को concatenate करना',
            '   strcmp() - दो strings को compare करना',
            '⚠️ ये सब string.h में हैं!'`,
    replace: `title="🔤 Strings (Character Arrays)"
          content={[
            '📝 String: Character array ending with null terminator (\\0).',
            '💡 "Hello" ASCII: H e l l o \\0',
            '📌 String Declaration:',
            '   char str1[6] = "Hello";  // 5 + 1 (null character)',
            '   char str2[] = "World";  // Size automatically 6',
            '🔍 String functions:',
            '   strlen() - Get string length',
            '   strcpy() - Copy strings',
            '   strcat() - Concatenate two strings',
            '   strcmp() - Compare strings',
            '⚠️ All functions defined in string.h!'`
  },
  {
    file: 'src/pages/Unit4.js',
    find: `title="🔎 Linear Search"
          content={[
            '🎯 Array में एक-एक element को check करके target ढूंढना।',
            '💡 Algorithm:',
            '   for (int i = 0; i < n; i++) {',
            '       if (arr[i] == target) {',
            '           printf("Found at index %d", i);',
            '           return;',
            '       }',
            '   }',
            '⏱️ Time Complexity: O(n) - सब elements को देख सकता है।',
            '✅ Unsorted array के लिए काम करता है।',
            '❌ बड़े arrays के लिए slow है।'`,
    replace: `title="🔎 Linear Search"
          content={[
            '🎯 Check array elements one by one to find target.',
            '💡 Algorithm:',
            '   for (int i = 0; i < n; i++) {',
            '       if (arr[i] == target) {',
            '           printf("Found at index %d", i);',
            '           return;',
            '       }',
            '   }',
            '⏱️ Time Complexity: O(n) - Check all elements.',
            '✅ Works on unsorted arrays.',
            '❌ Slow for large arrays.'`
  }
];

replacements.forEach(({file, find, replace}) => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(find)) {
    content = content.replace(find, replace);
    fs.writeFileSync(file, content);
    console.log(`Updated: ${file}`);
  } else {
    console.log(`Not found in: ${file}`);
  }
});

console.log('Done!');
