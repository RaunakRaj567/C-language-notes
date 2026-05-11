import React from 'react';
import { ContentCard, VivaSection } from '../components/ContentCard';
import './Unit.css';

function Unit3() {
  const vivaQuestions = [
    { question: 'What is a function? 🎬', answer: 'A function is a reusable code block performing a specific task that can be called multiple times. Functions prevent code duplication and improve program organization and maintainability.\n\n🧠 <b>Brain Booster:</b> Reusable code block' },
    { question: 'Why create user-defined functions? 🔧', answer: 'User-defined functions break complex code into small modules, making programs easier to debug, maintain, and test. They promote code reuse and improve overall code organization and clarity.\n\n🧠 <b>Brain Booster:</b> Modularity and reuse' },
    { question: 'Built-in vs user-defined functions? 🦚', answer: 'Built-in functions come with C libraries like printf and scanf, while user-defined functions are custom functions you create. Both serve similar purposes but built-ins are pre-implemented.\n\n🧠 <b>Brain Booster:</b> Pre-built versus custom' },
    { question: 'What is function prototype? 📜', answer: 'A function prototype declares the function to the compiler before use, specifying the name, return type, and parameters. It allows calling the function before its definition appears.\n\n🧠 <b>Brain Booster:</b> Declare before definition' },
    { question: 'What is function definition? 🏗️', answer: 'Function definition contains the actual implementation with the function body containing executable code. The definition specifies what the function does when called.\n\n🧠 <b>Brain Booster:</b> Implementation logic' },
    { question: 'How to call a function? 📞', answer: 'Call a function by writing its name followed by parentheses containing the required arguments. The function executes and returns a value if specified by return statement.\n\n🧠 <b>Brain Booster:</b> Name with arguments' },
    { question: 'Actual vs formal parameters? 🤔', answer: 'Formal parameters are variables in the function definition that receive values, while actual parameters are the real values passed when calling. They can differ in name but must match in type and order.\n\n🧠 <b>Brain Booster:</b> Definition versus call' },
    { question: 'What is call by value? 📤', answer: "Call by value passes a copy of the variable's value to the function. Changes inside the function do not affect the original variable, ensuring data safety.\n\n🧠 <b>Brain Booster:</b> Pass copy only" },
    { question: 'What is call by reference? 🔗', answer: "Call by reference passes the variable's memory address (pointer) to the function. Changes inside the function affect the original variable, allowing functions to modify caller's data.\n\n🧠 <b>Brain Booster:</b> Pass memory address" },
    { question: 'What does return statement do? 📦', answer: 'Return statement sends a value back to the function caller and immediately terminates the function. It specifies what value the function produces as its result.\n\n🧠 <b>Brain Booster:</b> Send value, exit function' },
    { question: 'Can function return multiple values? 🔢', answer: 'Standard return statements send only one value, but functions can return multiple values through pointers, arrays, or structures passed by reference.\n\n🧠 <b>Brain Booster:</b> Only one direct value' },
    { question: 'What if function returns void? 🌫️', answer: 'Void functions perform operations without returning a value, used for side effects only. Calling code cannot use the result in expressions or assignments.\n\n🧠 <b>Brain Booster:</b> No return value' },
    { question: 'What is recursion? 🪆', answer: 'Recursion occurs when a function calls itself to solve problems by dividing them into smaller identical subproblems. It requires a base case to prevent infinite calls.\n\n🧠 <b>Brain Booster:</b> Function calls itself' },
    { question: 'What is base case? 🛑', answer: 'The base case is the condition that stops recursive calls, preventing infinite recursion. Without a base case, the function calls itself infinitely until stack overflow occurs.\n\n🧠 <b>Brain Booster:</b> Stop recursion condition' },
    { question: 'Direct vs indirect recursion? 🔀', answer: 'Direct recursion means a function calls itself, while indirect recursion means function A calls function B which calls function A back. Both create recursive chains of calls.\n\n🧠 <b>Brain Booster:</b> Self versus mutual recursion' },
    { question: 'Recursion danger? 💣', answer: 'Recursion consumes stack memory with each call, potentially causing stack overflow for deep recursion. Performance can suffer compared to iterative solutions for some problems.\n\n🧠 <b>Brain Booster:</b> Stack memory consumption' },
    { question: 'What are storage classes? 🏢', answer: 'Storage classes define variable scope, lifetime, and memory location in programs. They determine where variables are stored and how long they exist.\n\n🧠 <b>Brain Booster:</b> Scope and lifetime' },
    { question: 'What does auto do? 🚙', answer: 'Auto is the default storage class for local variables automatically created when blocks start and destroyed when they end. Variables contain uninitialized garbage values initially.\n\n🧠 <b>Brain Booster:</b> Local automatic variables' },
    { question: 'What does static do? 🔒', answer: 'Static variables are initialized once and retain values between function calls, unlike regular auto variables that reset. Static variables have file scope visibility.\n\n🧠 <b>Brain Booster:</b> Retain value across calls' },
    { question: 'What is extern used for? 🌍', answer: 'Extern declares global variables defined in different files, allowing file-to-file variable sharing. It tells the compiler to find the variable definition elsewhere during linking.\n\n🧠 <b>Brain Booster:</b> Access external variables' },
    { question: 'Why use register? 🏎️', answer: 'Register requests storing a variable in CPU cache instead of RAM for faster access. Only suitable for heavily accessed variables like loop counters.\n\n🧠 <b>Brain Booster:</b> Store in CPU cache' },
    { question: 'Can we get address of register? 📍', answer: 'No, register variables cannot use the address operator because they are in CPU registers, not RAM. They have no memory address to reference.\n\n🧠 <b>Brain Booster:</b> No memory address' },
    { question: 'Static variable default value? 0️⃣', answer: 'Static variables automatically initialize to zero unlike auto variables which contain garbage values. This ensures predictable behavior.\n\n🧠 <b>Brain Booster:</b> Initialize to zero' },
    { question: 'What is scope? 🔭', answer: 'Scope defines the region of code where a variable is visible and usable. Global scope means everywhere, local scope means within its declaring block only.\n\n🧠 <b>Brain Booster:</b> Visibility region' },
    { question: 'What is lifetime? ⏱️', answer: 'Lifetime is how long a variable exists in memory from creation to destruction. Static variables last until program ends, auto variables last until block ends.\n\n🧠 <b>Brain Booster:</b> Existence duration' },
    { question: 'Can extern be initialized? 🤔', answer: 'Extern declarations should not include initialization as it marks the variable as defined rather than merely referenced, changing compiler behavior.\n\n🧠 <b>Brain Booster:</b> Reference not initialize' },
    { question: 'Storage classes with functions? 🎬', answer: 'Functions are extern by default allowing calls anywhere, but static functions restrict visibility to their file only. Storage classes apply to functions similarly.\n\n🧠 <b>Brain Booster:</b> Affects function visibility' },
    { question: 'Pass array to function? 📦', answer: 'Arrays are passed by sending a pointer to the first element, so functions receive the array address not a copy. Modifications affect the original array.\n\n🧠 <b>Brain Booster:</b> Pass as pointer' },
    { question: 'What is callback? 📞', answer: 'A callback function is a function passed as an argument to another function for later invocation. Useful for event handling and asynchronous operations.\n\n🧠 <b>Brain Booster:</b> Function as argument' },
    { question: 'What is tail recursion? 🐕', answer: "Tail recursion occurs when a recursive call is the function's last operation, enabling compiler optimizations. This improves efficiency compared to regular recursion.\n\n🧠 <b>Brain Booster:</b> Last operation recursion" }
  ];

  return (
    <div className="unit-page">
      <div className="unit-header">
        <h1>🔧 Unit 3: User Defined Functions & Storage Classes 🎯</h1>
        <p className="unit-intro">
          Alright squad! Time to write your own functions! 💪 
          This is the infinite glitch for making code reusable and organized.
          Functions take your programming from mid to ultra-professional W status!
        </p>
      </div>

      <div className="content-section">
        <ContentCard 
          title="🎬 Intro to Functions"
          content={[
            '🔄 Function: A reusable block of code that handles one specific task.',
            '🎯 Huge Ws:',
            '   • Reusability (Write once, use infinite times)',
            '   • Modularity (Break massive problems into small chunks)',
            '   • Keeps code looking clean, not like a bowl of spaghetti',
            '   • Makes finding bugs way easier',
            '📝 Note: execution ALWAYS starts from the main() function!'
          ]}
        />

        <ContentCard 
          title="🏗️ The 3 Pillars of Functions"
          content={[
            '1️⃣ Declaration (Prototype):',
            '   • Tells compiler the function\'s vibe before using it.',
            '   • Syntax: return_type name(parameters);',
            '2️⃣ Definition:',
            '   • The actual meat and potatoes logc.',
            '   • Syntax: return_type name(parameters) { ... code ... }',
            '3️⃣ Call:',
            '   • Actually executing the function in your code.',
            '   • Syntax: name(arguments);'
          ]}
        />

        <ContentCard 
          title="📤 Call by Value vs Call by Reference"
          content={[
            '📦 Call by Value:',
            '   • Sends a copy of the actual data.',
            '   • Changes inside the function don\'t affect the original variables.',
            '   • Super safe, no side effects.',
            '🔗 Call by Reference:',
            '   • Sends the actual memory address (pointer) of the data.',
            '   • Changes inside the function modify the original variable instantly.',
            '   • Highly powerful, but can be dangerous if you don\'t pay attention!'
          ]}
        />

        <ContentCard 
          title="🪆 Recursion (Inception Mode)"
          content={[
            '🔄 Recursion is when a function calls ITSELF from inside ITSELF.',
            '🛑 The Base Case:',
            '   • The ultimate stopping condition.',
            '   • If you forget this, the function calls itself forever until it crashes (Stack Overflow!).',
            '💡 Classic example: Finding the factorial of a number.',
            '   int fact(int n) {',
            '       if(n == 1) return 1; // Base case!',
            '       return n * fact(n-1); // Calls itself',
            '   }'
          ]}
        />

        <ContentCard 
          title="🏢 Storage Classes Gist"
          content={[
            '🎯 Storage classes decide 4 things about a variable:',
            '   1. Scope (Where can I see it?)',
            '   2. Lifetime (When does it die?)',
            '   3. Default Value (Garbage or Zero?)',
            '   4. Storage Location (RAM or CPU?)',
            '🌟 The 4 main types: auto, static, extern, register.'
          ]}
        />

        <ContentCard 
          title="🚙 auto (Automatic)"
          content={[
            '📌 This is the default for any local variable inside a function.',
            '📍 Scope: Local strictly inside its block.',
            '⏱️ Lifetime: Dies the second the block ends.',
            '🗑️ Default Value: Random garbage data until initialized.',
            '💾 Location: RAM (Stack).'
          ]}
        />

        <ContentCard 
          title="🔐 static (The Retainer)"
          content={[
            '🌟 A static variable isn\'t destroyed when the function ends; it stays alive waiting for the next call.',
            '📍 Scope: Local strictly inside its block.',
            '⏱️ Lifetime: Lives until the entire program ends.',
            '0️⃣ Default Value: Automatically 0 (no garbage).',
            '💡 Mega useful for keeping counts (like how many times a function was called).'
          ]}
        />

        <ContentCard 
          title="🌍 extern (Global Access)"
          content={[
            '🤝 Used to access a global variable that was declared in a totally different file.',
            '📍 Scope: Global anywhere.',
            '⏱️ Lifetime: Entire program duration.',
            '0️⃣ Default Value: Automatically 0.',
            '📝 Syntax: extern int count; (Tells compiler "trust me, it exists somewhere else").'
          ]}
        />

        <ContentCard 
          title="🏎️ register (Speed Demon)"
          content={[
            '⚡ Asks the compiler to store the variable inside the CPU register instead of RAM.',
            '💨 Makes access incredibly fast!',
            '📍 Scope: Local inside its block.',
            '⏱️ Lifetime: Dies when the block ends.',
            '❌ Limitation: You cannot use the "&" operator to get its memory address because it\'s not in RAM!',
            '🎯 Only use for loop counters or variables that get spammed repeatedly.'
          ]}
        />
      </div>

      <VivaSection questions={vivaQuestions} />

      <div className="unit-footer">
        <h3>🎓 Key Takeaways from Unit 3:</h3>
        <ul>
          <li>✅ You now know how to modularize your code with functions.</li>
          <li>✅ You understand the risk and power of Call by Reference versus Call by Value.</li>
          <li>✅ You learned how to cause (and prevent) Inception with Recursion.</li>
          <li>✅ You mastered dictating where and how variables live using Storage Classes.</li>
          <li>✅ Keep grinding! On to Unit 4! 🚀</li>
        </ul>
      </div>
    </div>
  );
}

export default Unit3;

