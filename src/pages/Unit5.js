import React from 'react';
import { ContentCard, VivaSection } from '../components/ContentCard';
import './Unit.css';

function Unit5() {
  const vivaQuestions = [
    { question: 'What is a pointer? 🔗', answer: 'A pointer is a variable storing memory addresses of other variables. Declaration int *ptr creates a pointer to integers allowing indirect variable access.\n\n🧠 <b>Brain Booster:</b> Variable stores address' },
    { question: 'What are & and * operators? ⚡', answer: 'Address-of operator & returns a variable\'s memory address, dereference operator * accesses the value at the address. They are inverse operations.\n\n🧠 <b>Brain Booster:</b> Address versus value' },
    { question: 'What is null pointer? 🚫', answer: 'A null pointer points to nothing and is initialized with NULL or 0. Dereferencing null pointers causes undefined behavior and program crashes.\n\n🧠 <b>Brain Booster:</b> Pointer to nothing' },
    { question: 'Why initialize pointers? 🏆', answer: 'Uninitialized pointers contain garbage addresses causing crashes when dereferenced. Always assign valid addresses before using pointers.\n\n🧠 <b>Brain Booster:</b> Avoid undefined behavior' },
    { question: 'What is pointer arithmetic? 🔢', answer: 'Adding integer n to pointer moves it n elements forward. ptr+1 points to next element, ptr+5 five elements ahead. Pointer type determines step size.\n\n🧠 <b>Brain Booster:</b> Move between elements' },
    { question: 'What is double pointer? 🔗🔗', answer: 'Pointer to pointer: int **pptr points to another pointer which points to integer. Useful for modifying pointers and dynamic data structures.\n\n🧠 <b>Brain Booster:</b> Pointer pointing to pointer' },
    { question: 'What does malloc do? 💾', answer: 'malloc() allocates memory dynamically from heap at runtime. int *ptr = (int*)malloc(sizeof(int)) allocates space for one integer.\n\n🧠 <b>Brain Booster:</b> Dynamic memory allocation' },
    { question: 'Why use free()? 🔓', answer: 'free() releases allocated memory for reuse by other parts of program. Prevents memory leaks and improves memory efficiency.\n\n🧠 <b>Brain Booster:</b> Release memory' },
    { question: 'calloc vs malloc? 🎁', answer: 'malloc() allocates uninitialized memory, calloc() allocates zero-initialized memory. calloc(n, size) takes count and element size parameters.\n\n🧠 <b>Brain Booster:</b> Initialization difference' },
    { question: 'What does realloc do? 📈', answer: 'realloc() resizes previously allocated memory to larger or smaller size. ptr = realloc(ptr, newSize) adjusts allocation maintaining existing data.\n\n🧠 <b>Brain Booster:</b> Resize allocated memory' },
    { question: 'String and pointers? 🔥', answer: 'char *str = "Hello" is a pointer to string literal, char arr[] = "Hello" is array. Both work but have different properties and mutability.\n\n🧠 <b>Brain Booster:</b> Pointer versus array' },
    { question: 'String initialization methods? 📝', answer: 'Array initialization: char str[10] = "Hello". Pointer initialization: char *str = "Hello". Different memory allocation and modifiability.\n\n🧠 <b>Brain Booster:</b> Different approaches' },
    { question: 'How does strlen work? 📏', answer: 'strlen() counts characters in string until finding null terminator. Returns the length excluding the null character. O(n) time complexity.\n\n🧠 <b>Brain Booster:</b> Count to null terminator' },
    { question: 'strcpy safety concern? 🚨', answer: 'strcpy() has no size checking causing buffer overflow if source exceeds destination capacity. Use strncpy() instead specifying maximum size.\n\n🧠 <b>Brain Booster:</b> Size limit required' },
    { question: 'What does strcat do? 🔗', answer: 'strcat() appends one string to another: "Hello" + "World" = "HelloWorld". Destination must have enough space for combined result.\n\n🧠 <b>Brain Booster:</b> Concatenate strings' },
    { question: 'How strcmp works? 🔀', answer: 'strcmp() compares strings lexicographically returning 0 if equal, negative if first less, positive if first greater.\n\n🧠 <b>Brain Booster:</b> Lexicographic comparison' },
    { question: 'What does strchr do? 🔍', answer: 'strchr() finds the first occurrence of a character in a string returning a pointer to it or NULL if not found.\n\n🧠 <b>Brain Booster:</b> Find character' },
    { question: 'What is function pointer? 🏆', answer: 'Function pointer stores address of a function: int (*funcPtr)(int, int) declares pointer to function taking two ints. Enables callbacks and polymorphism.\n\n🧠 <b>Brain Booster:</b> Store function address' },
    { question: 'What is void pointer? 🌫️', answer: 'void *ptr is generic pointer pointing to any data type. Requires explicit casting to access the pointed value safely.\n\n🧠 <b>Brain Booster:</b> Generic pointer type' },
    { question: 'What is dangling pointer? 🚨', answer: 'Dangling pointer references freed memory still being used. Causes undefined behavior as memory may be reused by other parts.\n\n🧠 <b>Brain Booster:</b> Points to freed memory' },
    { question: 'What is wild pointer? 🐺', answer: 'Wild pointer is uninitialized containing garbage address. Dereferencing causes unpredictable crashes or memory corruption.\n\n🧠 <b>Brain Booster:</b> Uninitialized pointer' },
    { question: 'Double pointer benefits? 🔗🔗', answer: 'Double pointers allow modifying pointers in functions using pass by reference. Essential for dynamic 2D arrays and data structures.\n\n🧠 <b>Brain Booster:</b> Modify pointers' },
    { question: 'Array of pointers? 🔗📦', answer: 'int *arr[5] declares array of 5 pointers each pointing to integers. Useful for jagged arrays and arrays of strings.\n\n🧠 <b>Brain Booster:</b> Pointers in array' },
    { question: 'What does memcpy do? 💾', answer: 'memcpy() copies bytes from source to destination memory regardless of content type. No null termination checking unlike strcpy().\n\n🧠 <b>Brain Booster:</b> Copy bytes directly' },
    { question: 'What does memset do? 🎨', answer: 'memset() fills memory block with a specific byte value. memset(ptr, 0, size) zeroes memory efficiently for initialization.\n\n🧠 <b>Brain Booster:</b> Fill memory with value' },
    { question: 'Buffer overflow danger? 🚨', answer: 'Buffer overflow occurs when data exceeds buffer capacity, overwriting adjacent memory corrupting data. Caused by unsafe functions like strcpy() and gets().\n\n🧠 <b>Brain Booster:</b> Exceed capacity' },
    { question: 'fgets advantage? 📥', answer: 'fgets(str, size, stdin) limits input to size-1 characters preventing overflow. Much safer than scanf("%s") or gets().\n\n🧠 <b>Brain Booster:</b> Size-limited input' },
    { question: 'What does sprintf do? 🖨️', answer: 'sprintf() formats data into a string like printf but stores in buffer. Useful for string manipulation and formatting.\n\n🧠 <b>Brain Booster:</b> Format to string' },
    { question: 'What does sscanf do? 📊', answer: 'sscanf() parses formatted data from string like scanf but from string source. Enables parsing structured text data.\n\n🧠 <b>Brain Booster:</b> Parse from string' },
    { question: 'Operator precedence? 🔢', answer: 'Postfix operators have highest precedence, then unary operators like *, &. Parentheses override precedence preventing ambiguity.\n\n🧠 <b>Brain Booster:</b> Priority matters' },
    { question: 'const pointer difference? 🔒', answer: 'const int *ptr cannot modify the integer, int * const ptr cannot change the pointer address. Different restrictions on different types.\n\n🧠 <b>Brain Booster:</b> Restrict modifiability' }
  ];

  return (
    <div className="unit-page">
      <div className="unit-header">
        <h1>🎯 Unit 5: Pointers, Pointer Memory & Strings 🔗</h1>
        <p className="unit-intro">
          Pointers may seem confusing at first, but they're the true power of C! 💪 Once you understand addresses and dereferencing, everything becomes easy. Master dynamic memory allocation, string manipulation, and memory management! 🔗
        </p>
      </div>

      <div className="content-section">
        <ContentCard 
          title="🔗 Pointer Introduction"
          content={[
            '💾 A pointer is a variable that stores the address of another variable.',
            '📍 Every variable in memory has a unique address.',
            '💡 Example: int x = 10; int *ptr = &x;',
            '   x has value 10, but its address is something else (like 1000).',
            '   ptr stores 1000 (the address of x).',
            '🎯 Pointers enable dynamic memory allocation, pass-by-reference in functions, and efficient array handling!'
          ]}
        />

        <ContentCard 
          title="⚡ & and * Operators"
          content={[
            '🏷️ & (Address-of Operator): Returns the address of a variable.',
            '   int x = 10;',
            '   int *ptr = &x;  // ptr now contains the address of x',
            '🔓 * (Dereference Operator): Returns the value at an address.',
            '   printf("%d", *ptr);  // Output: 10 (the value of x)',
            '💡 *ptr = 20;  will change x to 20.',
            '🎯 & and * are opposite operations!'
          ]}
        />

        <ContentCard 
          title="🎯 Pointer Declaration"
          content={[
            '📝 Syntax: data_type *pointer_name;',
            '💡 Examples:',
            '   int *iptr;  // int pointer',
            '   float *fptr;  // float pointer',
            '   char *cptr;  // char pointer',
            '🔒 Always initialize pointers! Uninitialized pointers point to garbage memory.',
            '   int x = 5;',
            '   int *ptr = &x;  // Correct!',
            '   int *ptr2;  // Wrong - points to random memory'
          ]}
        />

        <ContentCard 
          title="🚫 Null Pointer"
          content={[
            '🌫️ A null pointer is one that doesn\'t point anywhere.',
            '📌 int *ptr = NULL;  or  int *ptr = 0;',
            '✅ Check for null pointers: if (ptr == NULL)',
            '⚠️ Dereferencing a null pointer causes a program crash!',
            '💡 Always validate pointers before using them.'
          ]}
        />

        <ContentCard 
          title="🔢 Pointer Arithmetic"
          content={[
            '➕ ptr + 1: Address of the next element.',
            '➖ ptr - 1: Address of the previous element.',
            '💡 For integer arrays: ptr + 1 moves 4 bytes ahead (size of int).',
            '   For float arrays: ptr + 1 moves 4 bytes ahead (size of float).',
            '🎯 Example:',
            '   int arr[5] = {10, 20, 30, 40, 50};',
            '   int *ptr = arr;  // Points to the first element',
            '   *(ptr+1) = 20, *(ptr+2) = 30, etc.',
            '💪 You can traverse arrays using pointer arithmetic!'
          ]}
        />

        <ContentCard 
          title="🔗🔗 Double Pointer"
          content={[
            '🎯 Pointer to a pointer! int **pptr;',
            '💡 Example:',
            '   int x = 10;',
            '   int *ptr = &x;  // ptr points to x',
            '   int **pptr = &ptr;  // pptr points to ptr',
            '🔍 Dereferencing:',
            '   *pptr = value of ptr (address)',
            '   **pptr = value of x (10)',
            '💪 To modify pointers using pass by reference!'
          ]}
        />

        <ContentCard 
          title="💾 Dynamic Memory Allocation"
          content={[
            '⚡ Allocate as much memory as needed at runtime.',
            '📌 malloc() (memory allocation):',
            '   int *ptr = (int*)malloc(sizeof(int));',
            '   For 20 integers: (int*)malloc(20 * sizeof(int));',
            '📌 calloc() (clear allocation):',
            '   int *ptr = (int*)calloc(20, sizeof(int));  // initialized to 0',
            '📌 realloc() (reallocate):',
            '   ptr = realloc(ptr, 30 * sizeof(int));  // resize',
            '⚠️ malloc(), calloc() return NULL on failure!'
          ]}
        />

        <ContentCard 
          title="🔓 Memory Deallocation"
          content={[
            '♻️ Use free() to release memory.',
            '📝 Syntax: free(ptr);',
            '💡 Example:',
            '   int *ptr = (int*)malloc(sizeof(int));',
            '   // ... do some work ...',
            '   free(ptr);  // release memory',
            '   ptr = NULL;  // avoid dangling pointer',
            '⚠️ Do not free() the same pointer twice!',
            '💪 Prevents memory leaks.'
          ]}
        />

        <ContentCard 
          title="🔤 Strings and Pointers"
          content={[
            '📝 A string is a character array that ends with \0.',
            '💡 char *str = "Hello";  // str is a pointer',
            '   char arr[6] = "Hello";  // arr is an array',
            '🎯 Both work but are different:',
            '   Pointer: read-only string (modifying may cause a crash)',
            '   Array: modifiable string',
            '📊 String functions: strlen(), strcpy(), strcat(), strcmp(), etc.'
          ]}
        />

        <ContentCard 
          title="📏 String Functions - strlen()"
          content={[
            '🔍 String की length निकालता है।',
            '   size_t len = strlen("Hello");  // 5',
            '   char str[20] = "World";',
            '   printf("%zu", strlen(str));  // %zu for size_t',
            '⚠️ \\0 को count नहीं करता।',
            '💡 Loop से हर character को check करता है।'
          ]}
        />

        <ContentCard 
          title="📋 String Functions - strcpy()"
          content={[
            '📌 एक string को दूसरी में copy करता है।',
            '   char dest[20];',
            '   strcpy(dest, "Hello");',
            '⚠️ DANGEROUS! Buffer overflow हो सकता है।',
            '✅ Safe version: strncpy(dest, src, n);',
            '   strncpy(dest, "Hello", 19);  // max 19 characters'
          ]}
        />

        <ContentCard 
          title="🔗 String Functions - strcat()"
          content={[
            '🔀 दो strings को concatenate करता है।',
            '   char str1[30] = "Hello";',
            '   strcat(str1, " World");  // "Hello World"',
            '⚠️ str1 को enough space होना चाहिए!',
            '✅ Safe version: strncat(str1, str2, n);'
          ]}
        />

        <ContentCard 
          title="🔎 String Functions - strcmp()"
          content={[
            '⚖️ दो strings को compare करता है।',
            '📊 Return values:',
            '   0 = दोनों equal हैं',
            '   < 0 = पहला दूसरे से छोटा है',
            '   > 0 = पहला दूसरे से बड़ा है',
            '   if (strcmp(str1, "Hello") == 0) { /* match */ }'
          ]}
        />

        <ContentCard 
          title="🎯 Function Pointers"
          content={[
            '🎯 Pointer that points to the address of a function.',
            '📝 Syntax: return_type (*ptr)(parameter_types);',
            '💡 Example:',
            '   int add(int a, int b) { return a + b; }',
            '   int (*funcPtr)(int, int) = add;',
            '   int result = funcPtr(5, 3);  // call the function',
            '💪 For callbacks and dynamic function calls!'
          ]}
        />

        <ContentCard 
          title="🌫️ Void Pointer"
          content={[
            '💾 Generic pointer - can point to any type.',
            '📝 Syntax: void *ptr;',
            '   int x = 10;',
            '   void *ptr = &x;',
            '⚠️ Must cast before dereferencing.',
            '   int val = *(int*)ptr;',
            '💡 malloc() and calloc() return void pointers!'
          ]}
        />

        <ContentCard 
          title="🚨 Common Pointer Mistakes"
          content={[
            '❌ Mistake 1: Using uninitialized pointers.',
            '   int *ptr; printf("%d", *ptr);  // crash!',
            '❌ Mistake 2: Dereferencing a null pointer.',
            '   int *ptr = NULL; printf("%d", *ptr);  // crash!',
            '❌ Mistake 3: Returning pointer to local variable.',
            '   int *func() { int x = 10; return &x; }  // x no longer exists!',
            '❌ Mistake 4: Using freed memory (dangling pointer).',
            '   free(ptr); printf("%d", *ptr);  // undefined behavior!',
            '❌ Mistake 5: Array out of bounds access.',
            '   int arr[5]; ptr = arr + 10;  // undefined behavior!'
          ]}
        />
      </div>

      <VivaSection questions={vivaQuestions} />

      <div className="unit-footer">
        <h3>🎓 Key Takeaways from Unit 5:</h3>
        <ul>
          <li>✅ Understand what pointers are and how they work.</li>
          <li>✅ Master & and * operators thoroughly.</li>
          <li>✅ Learned dynamic memory allocation (malloc, calloc, free).</li>
          <li>✅ Expert in string functions and string manipulation.</li>
          <li>✅ Understand function pointers and void pointers.</li>
          <li>✅ Learned to avoid common pointer mistakes.</li>
          <li>✅ Ready for Unit 6! 🚀</li>
        </ul>
      </div>
    </div>
  );
}

export default Unit5;

