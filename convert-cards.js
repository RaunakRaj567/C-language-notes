const fs = require('fs');

// Unit 4 - Arrays
const unit4ContentCards = `
        <ContentCard 
          title="📦 Array Introduction"
          content={[
            '🎯 Array: A collection of elements of the same data type.',
            '💡 Example: int arr[5] = {10, 20, 30, 40, 50};',
            '🔢 Access all elements with one name using indices.',
            '📍 Indexing starts from 0 (zero-based indexing).',
            '💾 Stored in continuous memory locations for fast access!',
            '🎯 Fixed size determined at declaration time.'
          ]}
        />

        <ContentCard 
          title="📝 Array Declaration and Initialization"
          content={[
            '📌 Declaration: data_type array_name[size];',
            '   int arr[5];  // Array of 5 integers',
            '   float scores[10];  // Array of 10 floats',
            '📌 Initialization:',
            '   int arr[5] = {10, 20, 30, 40, 50};  // All values',
            '   int arr[5] = {10, 20};  // Rest initialized to 0',
            '   int arr[] = {10, 20, 30};  // Size automatically 3',
            '🤔 Uninitialized arrays contain garbage values.'
          ]}
        />

        <ContentCard 
          title="🔢 Array Indexing"
          content={[
            '0️⃣ arr[0] - First element',
            '1️⃣ arr[1] - Second element',
            '4️⃣ arr[4] - Fifth element (valid if size is 5)',
            '❌ arr[5] - Out of bounds! (undefined behavior)',
            '💡 Example:',
            '   int arr[5] = {10, 20, 30, 40, 50};',
            '   printf("%d", arr[2]);  // Output: 30',
            '   arr[2] = 99;  // Modify element!',
            '   printf("%d", arr[2]);  // Output: 99'
          ]}
        />

        <ContentCard 
          title="📐 2D Arrays (Matrices)"
          content={[
            '🎯 Array of arrays! int arr[3][4] - 3 rows, 4 columns.',
            '📝 Declaration: data_type array_name[rows][cols];',
            '📌 Initialization:',
            '   int matrix[3][4] = {',
            '       {1, 2, 3, 4},',
            '       {5, 6, 7, 8},',
            '       {9, 10, 11, 12}',
            '   };',
            '🔍 Access: arr[row][col]',
            '   matrix[0][0] = 1 (first row, first column)',
            '   matrix[2][3] = 12 (third row, fourth column)'
          ]}
        />

        <ContentCard 
          title="🔄 Array Traversal with Loops"
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
            '💡 Use nested loops to traverse 2D arrays!'
          ]}
        />

        <ContentCard 
          title="🔤 Strings (Character Arrays)"
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
            '⚠️ All functions defined in string.h!'
          ]}
        />

        <ContentCard 
          title="🔎 Linear Search"
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
            '❌ Slow for large arrays.'
          ]}
        />

        <ContentCard 
          title="🔍 Binary Search"
          content={[
            '⚡ Fast search on sorted arrays.',
            '🎯 Compare middle element and eliminate half each time.',
            '💡 Algorithm:',
            '   int left = 0, right = n-1;',
            '   while (left <= right) {',
            '       int mid = (left + right) / 2;',
            '       if (arr[mid] == target) return mid;',
            '       else if (arr[mid] < target) left = mid + 1;',
            '       else right = mid - 1;',
            '   }',
            '⏱️ Time Complexity: O(log n) - Very fast! ⚡',
            '❌ Array must be sorted!'
          ]}
        />

        <ContentCard 
          title="🫧 Bubble Sort"
          content={[
            '🎯 Simplest sorting algorithm.',
            '💡 Algorithm: Move larger elements toward the end.',
            '   for (int i = 0; i < n; i++) {',
            '       for (int j = 0; j < n-1-i; j++) {',
            '           if (arr[j] > arr[j+1]) {',
            '               int temp = arr[j];',
            '               arr[j] = arr[j+1];',
            '               arr[j+1] = temp;',
            '           }',
            '       }',
            '   }',
            '⏱️ Time Complexity: O(n²) - Slow.',
            '✅ Good for learning and small datasets.'
          ]}
        />

        <ContentCard 
          title="🎯 Selection Sort"
          content={[
            '🔍 Find minimum element and place it in correct position.',
            '💡 Algorithm:',
            '   for (int i = 0; i < n-1; i++) {',
            '       int minIdx = i;',
            '       for (int j = i+1; j < n; j++) {',
            '           if (arr[j] < arr[minIdx]) minIdx = j;',
            '       }',
            '       int temp = arr[i];',
            '       arr[i] = arr[minIdx];',
            '       arr[minIdx] = temp;',
            '   }',
            '⏱️ Time Complexity: O(n²).',
            '✅ Simpler than bubble sort, slightly more efficient!'
          ]}
        />

        <ContentCard 
          title="📝 Sorting Algorithms Comparison"
          content={[
            '🫧 Bubble Sort: O(n²) - Simple, slow.',
            '🎯 Selection Sort: O(n²) - Simple, more efficient.',
            '📊 Insertion Sort: O(n²) - Good for partially sorted arrays.',
            '⚡ Merge Sort: O(n log n) - Guaranteed, stable, extra space.',
            '🔥 Quick Sort: O(n log n) average - In-place, preferred.',
            '💡 Real applications use Quick Sort or Merge Sort!'
          ]}
        />

        <ContentCard 
          title="🔗 Arrays and Pointers Relationship"
          content={[
            '🎯 Array name is pointer to first element!',
            '💡 int arr[5] = {10, 20, 30, 40, 50};',
            '   arr == &arr[0]  // Always true',
            '📍 arr + 1 points to second element',
            '🔍 *(arr) = 10, *(arr+1) = 20, etc.',
            '💪 Use pointer arithmetic to traverse arrays.',
            '⚠️ Very important concept!'
          ]}
        />

        <ContentCard 
          title="🚨 Common Array Mistakes"
          content={[
            '❌ Mistake 1: Out of bounds access.',
            '   arr[10] when size is 5.',
            '❌ Mistake 2: Wrong format specifier for strings.',
            '   printf("%d", str);  // Prints address, not string.',
            '❌ Mistake 3: Using scanf without & for single value.',
            '   scanf("%d", arr);  // Arrays already are pointers.',
            '❌ Mistake 4: Copying arrays directly.',
            '   arr1 = arr2;  // This copies pointer, not elements!'
          ]}
        />
`;

let content = fs.readFileSync('src/pages/Unit4.js', 'utf8');
const startIdx = content.indexOf('<ContentCard');
const endIdx = content.lastIndexOf('/>') + 2;
content = content.substring(0, startIdx) + unit4ContentCards.trim() + '\n\n        ' + content.substring(endIdx);
fs.writeFileSync('src/pages/Unit4.js', content);

console.log('Unit 4 content cards converted to English!');
