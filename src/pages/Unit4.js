import React from 'react';
import { ContentCard, VivaSection } from '../components/ContentCard';
import './Unit.css';

function Unit4() {
  const vivaQuestions = [
    { question: 'What is an array? 📦', answer: 'An array is a collection of elements of the same data type stored in contiguous memory locations. All elements are accessed using one name and indexed numbers starting from zero.\n\n🧠 <b>Brain Booster:</b> Collection of same type' },
    { question: 'Array declaration syntax? 📝', answer: 'Array declaration uses data_type array_name[size] where size is constant representing how many elements it can hold. For example: int arr[10] declares an array of 10 integers.\n\n🧠 <b>Brain Booster:</b> Type name size' },
    { question: 'How does indexing work? 🔢', answer: 'Indexing starts at zero for the first element, so arr[0] is first, arr[4] is fifth. Index bounds from 0 to size-1; accessing outside causes undefined behavior.\n\n🧠 <b>Brain Booster:</b> Zero-based indexing' },
    { question: 'How to initialize 1D array? 💾', answer: 'Declare and initialize: int arr[5] = {1, 2, 3, 4, 5}. Partial initialization with remaining zeros: int arr[5] = {1, 2}. Size auto-determined: int arr[] = {10, 20, 30}.\n\n🧠 <b>Brain Booster:</b> Multiple initialization methods' },
    { question: 'What is 2D array? 📐', answer: "A 2D array represents a matrix with rows and columns: int arr[3][4] means 3 rows and 4 columns. It's essentially an array of arrays storing tabular data.\n\n🧠 <b>Brain Booster:</b> Array of arrays" },
    { question: 'How to access 2D array? 🔍', answer: 'Access using arr[row][col] where row and column are zero-indexed. For example, arr[0][2] accesses row 0, column 2. Nested loops are used for traversal.\n\n🧠 <b>Brain Booster:</b> Row and column indexing' },
    { question: 'Are array elements auto-initialized? 🤔', answer: 'Global and static arrays auto-initialize to zero, local arrays contain garbage values unless explicitly initialized. Behavior depends on storage class and scope.\n\n🧠 <b>Brain Booster:</b> Depends on storage class' },
    { question: 'sizeof with arrays? 📏', answer: 'sizeof(arr) returns the total array size, sizeof(arr[0]) returns single element size. Number of elements = sizeof(arr) / sizeof(arr[0]).\n\n🧠 <b>Brain Booster:</b> Total size division' },
    { question: 'Is array name a pointer? 🔗', answer: "Yes, array names decay to pointers to the first element. arr and &arr[0] are equivalent; both point to the array's first element.\n\n🧠 <b>Brain Booster:</b> Pointer to first element" },
    { question: 'What is string? 🔥', answer: 'A string is a character array terminated by null character (\\0). The string "Hello" contains H, e, l, l, o, and invisible \\0 terminator.\n\n🧠 <b>Brain Booster:</b> Null-terminated char array' },
    { question: 'String initialization methods? 📝', answer: 'Direct initialization: char str[6] = "Hello". Auto-sized: char str[] = "World" automatically reserves enough space. Both methods create null-terminated strings.\n\n🧠 <b>Brain Booster:</b> Multiple initialization methods' },
    { question: 'What is linear search? 🔍', answer: 'Linear search checks elements one by one from start to end until finding the target. Time complexity is O(n) and works on unsorted arrays.\n\n🧠 <b>Brain Booster:</b> Sequential element search' },
    { question: 'Binary search requirements? 🔎', answer: 'Array must be sorted for binary search to work correctly. Algorithm compares middle element and eliminates half of remaining elements each iteration.\n\n🧠 <b>Brain Booster:</b> Requires sorted array' },
    { question: 'What does bubble sort do? 🧇', answer: 'Bubble sort repeatedly compares adjacent elements and swaps them if in wrong order. Larger elements "bubble" toward the end. Time complexity is O(n²).\n\n🧠 <b>Brain Booster:</b> Compare and swap adjacent' },
    { question: 'How does selection sort work? 🏆', answer: 'Selection sort finds minimum element and places it at beginning repeatedly. Divides array into sorted and unsorted portions. Time complexity is O(n²).\n\n🧠 <b>Brain Booster:</b> Find minimum repeatedly' },
    { question: 'What are string functions? 🔥', answer: 'strlen() finds string length, strcpy() copies strings, strcat() concatenates, strcmp() compares strings. All are defined in string.h library.\n\n🧠 <b>Brain Booster:</b> Standard string operations' },
    { question: 'Passing array to function? 🔗', answer: 'Arrays pass as pointers to first element, not complete copies. Modifications in function affect original array. Array size must pass separately.\n\n🧠 <b>Brain Booster:</b> Pass as pointer' },
    { question: 'Memory layout of 2D arrays? 💾', answer: 'Row-major order stores consecutive rows sequentially: arr[3][4] stores rows 0, 1, 2 consecutively. Address calculation uses formula for efficient access.\n\n🧠 <b>Brain Booster:</b> Row-major memory order' },
    { question: 'What is jagged array? 🌲', answer: 'Jagged arrays have rows with different lengths. Implemented using pointer arrays: int *arr[3] where each element points to different sized array.\n\n🧠 <b>Brain Booster:</b> Variable row lengths' },
    { question: 'Stability in sorting? ⚖️', answer: 'Stable sorts preserve relative order of equal elements. Bubble sort is stable, selection sort is not. Matters for complex sorting criteria.\n\n🧠 <b>Brain Booster:</b> Preserves equal order' },
    { question: 'Array bounds violation? 🚨', answer: 'Accessing outside array bounds causes undefined behavior without compiler protection. Can crash programs or corrupt memory silently without warnings.\n\n🧠 <b>Brain Booster:</b> Undefined behavior' },
    { question: 'What is VLA? 📏', answer: 'Variable Length Arrays allow dynamic sizing in C99: int arr[n]. Stack allocated so size cannot exceed available stack. Not supported by all compilers.\n\n🧠 <b>Brain Booster:</b> Dynamic size arrays' },
    { question: 'Can return arrays? 📤', answer: 'Cannot directly return arrays, but can return pointers to global/static arrays or dynamically allocated arrays. Returning local array pointers is dangerous.\n\n🧠 <b>Brain Booster:</b> Return via pointers' },
    { question: 'How does merge sort work? 🔀', answer: 'Divide and conquer: split array in half, sort recursively, merge sorted halves. Time complexity O(n log n) guaranteed, requires extra space.\n\n🧠 <b>Brain Booster:</b> Divide, sort, merge' },
    { question: 'Pivot role in quicksort? 🏆', answer: 'Pivot divides array into smaller and larger elements. Recursively sort both sides. Average O(n log n), worst O(n²) with bad pivot selection.\n\n🧠 <b>Brain Booster:</b> Division element' },
    { question: 'Char array vs string? 🔥', answer: 'Character array is just array of chars, string is null-terminated char array. String functions require null termination to work correctly.\n\n🧠 <b>Brain Booster:</b> Termination difference' },
    { question: 'Why fgets over scanf? 📥', answer: 'scanf() with %s has no size limit causing buffer overflow. fgets(str, size, stdin) limits input preventing overflow attacks.\n\n🧠 <b>Brain Booster:</b> Size limit safety' },
    { question: 'Print array directly? 🖨️', answer: 'Cannot print array directly with printf. Must iterate with loops printing each element. Array decays to pointer, not printable directly.\n\n🧠 <b>Brain Booster:</b> Loop required' },
    { question: 'What is dynamic array? 💾', answer: 'Array with size determined at runtime using malloc() allocation. Provides flexibility but requires manual memory management and deallocation.\n\n🧠 <b>Brain Booster:</b> Runtime size allocation' },
    { question: 'const array? 🔒', answer: 'const int arr[5] = {1,2,3,4,5} makes array elements unchangeable. Useful for read-only data and preventing accidental modifications.\n\n🧠 <b>Brain Booster:</b> Immutable elements' },
    { question: 'Array of pointers? 🔗', answer: 'int *arr[5] declares array of 5 pointers each pointing to integers. Different from pointer to array. Useful for jagged arrays and dynamic arrays.\n\n🧠 <b>Brain Booster:</b> Pointers as elements' }
  ];

  return (
    <div className="unit-page">
      <div className="unit-header">
        <h1>📦 Unit 4: Arrays in C 🎯</h1>
        <p className="unit-intro">
          Arrays are super important for storing collections of data! 📚 Access multiple values with a single name using indices - so convenient! Learn from 1D arrays to 2D matrices and master sorting algorithms! 🎯
        </p>
      </div>

      <div className="content-section">
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
            '💡 Nested loops to traverse 2D arrays!'
          ]}
        />

        <ContentCard 
          title="🔤 Strings (Character Arrays)"
          content={[
            '📝 String: Character array ending with null terminator (\\0).',
            '💡 "Hello" ASCII representation: H e l l o \\0',
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
            '🎯 Compare with the middle element and eliminate half each time.',
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
            '🎯 Simple sorting algorithm.',
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
            '✅ For simplicity, good for learning and small datasets.'
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
            '⏱️ Time Complexity: O(n²)',
            '✅ Simple like Bubble Sort, but slightly more efficient!'
          ]}
        />

        <ContentCard 
          title="📝 Sorting Algorithms Comparison"
          content={[
            '🫧 Bubble Sort: O(n²) - Simple, slow.',
            '🎯 Selection Sort: O(n²) - Simple, selection more efficient.',
            '📊 Insertion Sort: O(n²) - Adaptive, good for partially sorted arrays.',
            '⚡ Merge Sort: O(n log n) - Guaranteed, stable, requires extra space.',
            '🔥 Quick Sort: O(n log n) average, in-place, widely preferred.',
            '💡 Real applications use Quick Sort or Merge Sort!'
          ]}
        />

        <ContentCard 
          title="🔗 Arrays and Pointers Relationship"
          content={[
            '🎯 Array name is pointer to first element!',
            '💡 int arr[5] = {10, 20, 30, 40, 50};',
            '   arr == &arr[0]  // Always true',
            '📍 arr + 1 -> second element',
            '🔍 *(arr) = 10, *(arr+1) = 20, etc.',
            '💪 Use pointer arithmetic to traverse array elements.',
            '⚠️ Very important concept!'
          ]}
        />

        <ContentCard 
          title="🚨 Common Array Mistakes"
          content={[
            '❌ Mistake 1: Out of bounds access.',
            '   arr[10] when size is 5 - causes undefined behavior.',
            '❌ Mistake 2: Wrong format specifier for strings.',
            '   printf("%d", str);  - Prints address, not string content.',
            '❌ Mistake 3: Missing & in scanf for single values.',
            '   scanf("%d", arr);  - Arrays are already pointers.',
            '❌ Mistake 4: Direct array copying.',
            '   arr1 = arr2;  - Only copies pointer, not elements.',
            '❌ Mistake 5: Returning arrays from functions.',
            '   Cannot return arrays directly, must return pointers!'
          ]}
        />
      </div>

      <VivaSection questions={vivaQuestions} />

      <div className="unit-footer">
        <h3>🎓 Key Takeaways from Unit 4:</h3>
        <ul>
          <li>✅ Learned to declare, initialize, and access 1D and 2D arrays.</li>
          <li>✅ Understood string handling and character arrays.</li>
          <li>✅ Can implement Linear and Binary search algorithms.</li>
          <li>✅ Mastered sorting algorithms - Bubble Sort and Selection Sort.</li>
          <li>✅ Understood the relationship between arrays and pointers.</li>
          <li>✅ Ready for Unit 5! 🚀</li>
        </ul>
      </div>
    </div>
  );
}

export default Unit4;

