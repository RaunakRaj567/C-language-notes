import React from 'react';
import { ContentCard, VivaSection } from '../components/ContentCard';
import './Unit.css';

function Unit1() {
  const vivaQuestions = [
    { question: 'When was C made and by who? 📅', answer: 'Dennis Ritchie developed C in 1972 at Bell Labs alongside Unix operating system. It became the foundation for modern programming languages and systems software. Fundamental to computing history.\n\n🧠 <b>Brain Booster:</b> Dennis Ritchie, Bell Labs, 1972' },
    { question: 'Why is C called a mid/low-level language? 🎯', answer: 'C provides direct memory access through pointers and bitwise operations for hardware manipulation. It allows programmers to write efficient code close to machine level while maintaining readability and portability across systems.\n\n🧠 <b>Brain Booster:</b> Pointers, memory access, efficiency' },
    { question: 'What is the difference between Identifiers and Keywords? 🤔', answer: 'Identifiers are user-defined names for variables, functions, and arrays that must follow naming rules. Keywords are reserved words like int, if, while that have special meaning in C and cannot be used as identifiers.\n\n🧠 <b>Brain Booster:</b> Custom names versus reserved words' },
    { question: 'What\'s in the C character set? 📝', answer: 'C character set includes uppercase letters, lowercase letters, digits, special characters, and whitespace. These elements form the building blocks for creating valid C source code and recognizable tokens.\n\n🧠 <b>Brain Booster:</b> Letters, digits, symbols, spaces' },
    { question: 'Why do we even need Data types? 🎁', answer: 'Data types inform the compiler how much memory to allocate and what operations are valid on stored values. Different types like int, char, float occupy different memory sizes and have different ranges of values.\n\n🧠 <b>Brain Booster:</b> Allocate memory, validate operations' },
    { question: 'Main difference between int, float, char, and double? ✨', answer: 'Integer stores whole numbers in 4 bytes, float stores decimals in 4 bytes, char stores single characters in 1 byte, double stores high precision decimals in 8 bytes. Each has specific memory requirements and value ranges.\n\n🧠 <b>Brain Booster:</b> Different sizes, different ranges' },
    { question: 'What to check before declaring a variable? 🧐', answer: 'Verify the identifier name follows C naming rules and is not a keyword. Choose appropriate data type for the value you plan to store. Ensure sufficient memory is available for your program.\n\n🧠 <b>Brain Booster:</b> Valid name, right type, memory' },
    { question: 'What are Constants and why use them? 🌟', answer: 'Constants are immutable values defined using #define or const keyword that cannot be modified after initialization. They improve code safety by preventing accidental changes and make programs easier to maintain and understand.\n\n🧠 <b>Brain Booster:</b> Fixed values, prevent modification' },
    { question: 'Signed vs Unsigned variables? 🔍', answer: 'Signed variables can represent both negative and positive numbers using the sign bit. Unsigned variables can only represent positive numbers but have double the maximum positive range compared to signed counterparts.\n\n🧠 <b>Brain Booster:</b> Signed: negative, Unsigned: positive only' },
    { question: 'What is variable Scope? 🔭', answer: 'Scope defines the region of code where a variable is visible and can be accessed. Global variables are accessible everywhere, local variables only within their declaring block or function definition.\n\n🧠 <b>Brain Booster:</b> Visible where declared' },
    { question: 'What are the types of #include? 📚', answer: 'Angle bracket include searches system directories for header files like standard libraries. Quoted include searches the current project directory first for user-defined headers before checking system paths.\n\n🧠 <b>Brain Booster:</b> System vs project directories' },
    { question: 'Why is the main() function strictly required? 🎬', answer: 'The main function is the mandatory entry point where program execution begins. Without main, the operating system cannot start your program because it does not know where to begin execution.\n\n🧠 <b>Brain Booster:</b> Program entry point required' },
    { question: 'What are Tokens? 🎫', answer: 'Tokens are the smallest meaningful units of C code that the compiler recognizes. They include keywords, identifiers, operators, constants, and special symbols that form the lexical structure of programs.\n\n🧠 <b>Brain Booster:</b> Smallest code units' },
    { question: 'Can you rename Keywords? 🚫', answer: 'Keywords are reserved words in C that have predefined meanings and cannot be used as variable or function names. Using keywords as identifiers results in compilation errors and violates C language syntax rules.\n\n🧠 <b>Brain Booster:</b> Reserved, cannot be redefined' },
    { question: 'What are Escape sequences? 🔤', answer: 'Escape sequences use backslash followed by a character to represent special characters within strings. Common sequences include newline, tab, carriage return, and backslash that control text formatting in output.\n\n🧠 <b>Brain Booster:</b> Special character representations' },
    { question: 'What does the sizeof() operator do? 📏', answer: 'The sizeof operator returns the number of bytes a variable or data type occupies in memory. It helps with memory allocation, structure padding understanding, and writing portable code across platforms.\n\n🧠 <b>Brain Booster:</b> Returns memory size in bytes' },
    { question: 'What are Literals? 💎', answer: 'Literals are fixed, hardcoded values written directly in source code that represent constant data. Integer, floating-point, character, and string literals all have specific syntactic formats in C programs.\n\n🧠 <b>Brain Booster:</b> Fixed values in code' },
    { question: 'What are Type modifiers? 🎛️', answer: 'Type modifiers like signed, unsigned, short, long alter the memory size and signedness properties of basic data types. They customize how much memory is allocated and what value range is supported.\n\n🧠 <b>Brain Booster:</b> Alter size and signedness' },
    { question: 'How many base data types are in C? 📊', answer: 'C has five primary data types: integer for whole numbers, character for single symbols, float for single precision decimals, double for double precision decimals, and void for no type.\n\n🧠 <b>Brain Booster:</b> Five primitive types' },
    { question: 'What on earth is Void? 🌫️', answer: 'Void represents the absence of a type in C. Void functions return no value, void pointers can point to any data type, and void parameters mean the function accepts no arguments.\n\n🧠 <b>Brain Booster:</b> No type, nothing, absence' },
    { question: 'Local vs Global variables? 🗺️', answer: 'Local variables exist only within their block or function scope and are destroyed when the block ends. Global variables are declared outside all functions and exist for the entire program duration.\n\n🧠 <b>Brain Booster:</b> Scope differs, lifetime differs' },
    { question: 'What does the Static keyword do? 🔐', answer: 'Static variables are initialized once and retain their value between function calls instead of being reset. They have internal linkage when used with functions and global linkage when declared at file scope.\n\n🧠 <b>Brain Booster:</b> Retains value across calls' },
    { question: 'What is the Extern keyword? 🔗', answer: 'The extern keyword declares a global variable defined in another source file, allowing multiple files to share data. It tells the compiler to find the actual variable definition in a different file during linking.\n\n🧠 <b>Brain Booster:</b> Access external file variables' },
    { question: 'Why use the Register keyword? ⚡', answer: 'Register requests the compiler to store a variable in the CPU cache instead of RAM for faster access. This is suitable for frequently used loop counters and variables that will be accessed many times.\n\n🧠 <b>Brain Booster:</b> Store in CPU cache' },
    { question: 'How does printf() work? 🖨️', answer: 'Printf formats and prints text to the console using format specifiers as placeholders for variables. Format specifiers like %d, %f, %s indicate how values should be displayed in the output.\n\n🧠 <b>Brain Booster:</b> Formats and prints output' },
    { question: 'How does scanf() work? 📥', answer: 'Scanf reads formatted input from the keyboard and stores values in provided variable addresses. The & operator is critical as it provides the memory address where the input value should be stored.\n\n🧠 <b>Brain Booster:</b> Reads formatted input' },
    { question: 'What are the main format specifiers? 🎫', answer: 'Format specifiers indicate data type: %d for integer, %f for floating-point, %c for character, %s for string. Using incorrect specifiers causes misinterpretation of values in printf and scanf operations.\n\n🧠 <b>Brain Booster:</b> Type placeholders for input output' },
    { question: 'What are the segments of memory layout? 📐', answer: 'C memory layout consists of text segment for compiled code, data segment for initialized globals, BSS for uninitialized globals, heap for dynamic memory, and stack for local variables and function calls.\n\n🧠 <b>Brain Booster:</b> Text, data, BSS, heap, stack' },
    { question: 'What is Typecasting? 🔄', answer: 'Typecasting converts a value from one data type to another either implicitly or explicitly. Explicit casting uses syntax like (int)3.14 to deliberately convert values for specific operations.\n\n🧠 <b>Brain Booster:</b> Convert between data types' }
  ];

  return (
    <div className="unit-page">
      <div className="unit-header">
        <h1>📚 Unit 1: C Language Basics & Introduction</h1>
        <p className="unit-intro">
          Yo let's go! Welcome to the C programming lobby bro! 🚀 
          This unit is the literal foundation of your entire dev arc. 
          From basic characters to variables, we're boutta drop some hardcore knowledge! W's in the chat!
        </p>
      </div>

      <div className="content-section">
        <ContentCard 
          title="🔤 Character Set of C"
          content={[
            '📝 Letters: A-Z and a-z (52 letters)',
            '🔢 Digits: 0-1-2-3-4-5-6-7-8-9 (10 digits)',
            '⚡ Special Characters: + - * / = ( ) [ ] { } , ; : \\\' " < > ! & % ^ ~ . ? |',
            '🤍 White Spaces: Space, Tab, Newline, Carriage Return',
            '💾 Combine these and you get valid, bussin C code!',
            '🎯 The C compiler scans these to see if your code is legit or straight garbage.'
          ]}
        />

        <ContentCard 
          title="🏷️ Identifiers and Keywords"
          content={[
            '👤 Identifiers: The custom names you give to variables, functions, and arrays.',
            '✅ Valid identifier rule: Must start with a letter or an underscore (_).',
            '❌ NEVER start with a number (x1 is a W, 1x is an L).',
            '🚫 No spaces, no special characters, and definitely no keywords.',
            '🔑 Keywords: The sacred reserved words baked into C itself.',
            '📚 List of GOAT keywords: int, float, if, else, while, return, struct, etc.',
            '⚠️ Never try to name your variable "int" or "while" - the compiler will roast you!'
          ]}
        />

        <ContentCard 
          title="📊 Data Types (Super Important!)"
          content={[
            '1️⃣ char: Stores a single character. Size = 1 byte. Range: -128 to 127.',
            '2️⃣ int: Stores whole numbers. Size = 4 bytes. Range: -2B to +2B.',
            '3️⃣ float: Decimals (single precision). Size = 4 bytes.',
            '4️⃣ double: Massive decimals (double precision). Size = 8 bytes.',
            '5️⃣ void: Literally nothing. Used for functions that don\'t return a value.',
            '🎯 Declaring a type tells the compiler exactly how much RAM to block out for you.'
          ]}
        />

        <ContentCard 
          title="🔀 Type Modifiers (Tweaking Specs!)"
          content={[
            '🔵 signed: Handles both negative and positive numbers (this is the default vibe).',
            '🟢 unsigned: Drops the negatives, letting you store way bigger positive numbers.',
            '📏 short: Caps at 2 bytes to save memory when numbers are small.',
            '📈 long: Bumps capacity up to 4 or 8 bytes for absolute massive numbers.',
            '💡 Examples: unsigned int, long double.',
            '⚡ Pick optimal modifiers so you don\'t waste precious memory!'
          ]}
        />

        <ContentCard 
          title="📝 Variables and Constants"
          content={[
            '🎁 Variable: A named locker in memory where you can store and update values.',
            '💾 Syntax: data_type variable_name = value; (e.g., int level = 99;)',
            '🔒 Constant: A locked value that can NEVER be changed once set.',
            '🌟 Two ways to lock it in:',
            '   • #define PI 3.14 (Using the preprocessor at the very top)',
            '   • const float PI = 3.14; (Using the const keyword)',
            '⭐ Constants prevent accidental bugs and make your code bulletproof.'
          ]}
        />

        <ContentCard 
          title="🔢 Variable Scope"
          content={[
            '🌍 Global Variable: Declared outside all functions. Everyone can see it, everyone can touch it.',
            '🏠 Local Variable: Declared inside curly braces. Only exists inside that specific block.',
            '⏱️ Global variables take up memory for the entire lifecycle of the app.',
            '💨 Local variables get spawned in, and automatically deleted when the function ends (super clean).',
            '🎯 Static Variable: Remembers its value across multiple function calls. Doesn\'t get wiped!',
            '🔗 Extern Variable: Used to link to a global variable hiding in a different file.'
          ]}
        />

        <ContentCard 
          title="📄 Input and Output Functions"
          content={[
            '🖨️ printf(): Dumps formatted text directly to the console screen.',
            '   • printf("Hello chat"); -> just prints text.',
            '   • printf("Level: %d", 99); -> uses a placeholder to inject numbers.',
            '📥 scanf(): Grabs input directly from the user\'s keyboard.',
            '   • scanf("%d", &age); -> The "&" symbol is CRITICAL. It points to the RAM address!',
            '🎫 Format Specifiers mapped out:',
            '   • %d = int, %f = float/double, %s = string, %c = char.'
          ]}
        />

        <ContentCard 
          title="🔀 Escape Sequences"
          content={[
            '\\n = Newline (hits enter for you)',
            '\\t = Horizontal Tab (big space)',
            '\\r = Carriage Return',
            '\\b = Backspace',
            '\\a = Alert (triggers a system bell/beep sound)',
            '\\\\ = Prints an actual backslash',
            '\\" = Prints an actual double quote inside a string',
            "\\' = Prints an actual single quote inside a string",
            '💡 You strictly use these inside strings to format your terminal output!'
          ]}
        />

        <ContentCard 
          title="🎁 Literals (Raw Values)"
          content={[
            '🔢 Integer Literals: 10, -50, 9000 (No decimals allowed)',
            '📊 Float Literals: 3.14, -2.5 (Always rocking a decimal)',
            '🔤 Character Literals: \'a\', \'Z\' (Must use single quotes)',
            '📝 String Literals: "Hello world", "123" (Must use double quotes)',
            '🌟 These are the raw, raw values you hardcode directly into your source file.'
          ]}
        />

        <ContentCard 
          title="📏 sizeof() Operator"
          content={[
            'sizeof() flexes how many bytes a variable or data type is holding hostage in RAM.',
            'sizeof(int) = Usually 4 bytes.',
            'sizeof(char) = Exactly 1 byte.',
            'sizeof(double) = Huge 8 bytes.',
            '💾 Essential for advanced memory allocation later when we get to pointers!'
          ]}
        />

        <ContentCard 
          title="🏗️ C Program Memory Layout"
          content={[
            '📚 Text Segment: The actual compiled binary code (read-only, untouchable).',
            '🔐 Initialized Data: Global/Static variables that you actually gave a starting value to.',
            '🎁 BSS Segment: Global/Static vars that you left empty (they default to 0).',
            '📦 Heap: Dynamic memory you manually request at runtime using malloc/calloc.',
            '⬆️ Stack: Local variables and function calls. It grows and shrinks automatically!',
            '💡 This is literally how your OS organizes your program while it\'s running.'
          ]}
        />
      </div>

      <VivaSection questions={vivaQuestions} />

      <div className="unit-footer">
        <h3>🎓 Key Takeaways from Unit 1:</h3>
        <ul>
          <li>✅ Aced the history and base concepts of C.</li>
          <li>✅ Locked in the rules for Identifiers, Keywords, and Data Types.</li>
          <li>✅ Learned how to snatch user input with scanf() and print with printf().</li>
          <li>✅ Grasped how memory is allocated for variables and scopes.</li>
          <li>✅ Escaped the matrix with escape sequences and format specifiers.</li>
          <li>✅ You\'re ready for Unit 2! Let\'s secure this bag! 🚀</li>
        </ul>
      </div>
    </div>
  );
}

export default Unit1;
