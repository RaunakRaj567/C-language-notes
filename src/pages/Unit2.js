import React from 'react';
import { ContentCard, VivaSection } from '../components/ContentCard';
import './Unit.css';

function Unit2() {
  const vivaQuestions = [
    { question: 'What are Control structures? 🏛️', answer: 'Control structures direct program execution flow by making decisions about which code blocks to execute. They include conditional statements and loops for program logic and repetitive operations.\n\n🧠 <b>Brain Booster:</b> Direct execution flow' },
    { question: 'How does an if statement work? 🤔', answer: 'An if statement evaluates a condition and executes the code block only if the condition is true. The condition must produce a boolean result determining whether the block executes.\n\n🧠 <b>Brain Booster:</b> Execute if true' },
    { question: 'if-else difference? 🔀', answer: 'If executes a block when the condition is true, else executes a different block when false. Only one block executes, never both simultaneously in the same if-else statement.\n\n🧠 <b>Brain Booster:</b> Mutually exclusive blocks' },
    { question: "What's the point of else-if? 🔗", answer: 'Else-if allows checking multiple conditions in sequence until one evaluates true. It provides a cleaner alternative to nested if statements for handling multiple different cases.\n\n🧠 <b>Brain Booster:</b> Check multiple conditions' },
    { question: 'Nested if? 🪆', answer: 'Nested if places one if statement inside another to check multiple dependent conditions in sequence. Deep nesting makes code difficult to read and understand, reducing code maintainability.\n\n🧠 <b>Brain Booster:</b> If within if statements' },
    { question: 'Why use switch over if-else? 🕹️', answer: 'Switch statements cleanly handle multiple exact value matches without long if-else chains. They are more readable and efficient for choosing from many discrete alternatives.\n\n🧠 <b>Brain Booster:</b> Clean multiple match selection' },
    { question: 'Why is break so important? 🛑', answer: 'Break exits the switch block immediately, preventing code from the next case from executing. Without break, execution falls through to subsequent cases even though conditions don\'t match.\n\n🧠 <b>Brain Booster:</b> Prevent fall-through execution' },
    { question: 'What does default case do? 📝', answer: 'Default case executes when none of the case values match the switch expression. It acts like the final else clause for handling unexpected or unspecified cases.\n\n🧠 <b>Brain Booster:</b> Handles unmatched values' },
    { question: 'How does while loop work? 🔄', answer: 'While loop checks a condition first before executing the code block, repeating until the condition becomes false. If the condition is false initially, the block never executes.\n\n🧠 <b>Brain Booster:</b> Check condition first' },
    { question: 'What about do-while loops? 🎪', answer: 'Do-while executes the code block first, then checks the condition at the end. This guarantees at least one execution regardless of the initial condition value.\n\n🧠 <b>Brain Booster:</b> Execute then check condition' },
    { question: 'For loop syntax? 📐', answer: 'For loop syntax is: for (initialization; condition; increment) containing all loop control in one statement. Initialization runs once, condition is checked each iteration, increment updates the variable.\n\n🧠 <b>Brain Booster:</b> All control in one statement' },
    { question: 'break vs continue? 🚦', answer: 'Break completely exits the loop immediately, while continue skips the rest of the current iteration and moves to the next. Both affect loop flow but have different impacts.\n\n🧠 <b>Brain Booster:</b> Exit versus skip iteration' },
    { question: 'What are nested loops? 🎂', answer: "Nested loops contain one loop inside another creating multiple iteration levels. They're common for processing 2D arrays but can significantly impact performance with exponential iterations.\n\n🧠 <b>Brain Booster:</b> Loop within loop" },
    { question: 'When use goto statement? 🎯', answer: 'The goto statement should be avoided in modern programming as it makes code difficult to follow and understand. Most programming situations have better structured alternatives available.\n\n🧠 <b>Brain Booster:</b> Avoid in modern code' },
    { question: 'What is ternary operator? 🎲', answer: "The ternary operator condition ? true_value : false_value provides a one-line alternative to if-else for simple conditional assignments. It's perfect for concise conditional expressions.\n\n🧠 <b>Brain Booster:</b> Inline if-else alternative" },
    { question: 'List logical operators? 🔗', answer: 'AND (&&) requires both conditions true, OR (||) requires at least one true, NOT (!) inverts a condition. They combine multiple conditions in complex logical expressions.\n\n🧠 <b>Brain Booster:</b> Combine multiple conditions' },
    { question: 'What are relational operators? ⚖️', answer: 'Relational operators (==, !=, <, >, <=, >=) compare two values and return true or false results. They form the basis for conditions in if statements and loops.\n\n🧠 <b>Brain Booster:</b> Compare values, return boolean' },
    { question: 'if (x = 5) vs if (x == 5)? 🚨', answer: 'Single equals assigns 5 to x and is always true, double equals compares if x equals 5 without modifying x. This is a common mistake that causes logic errors in programs.\n\n🧠 <b>Brain Booster:</b> Assignment versus comparison' },
    { question: 'What is short-circuit evaluation? ⚡', answer: 'In logical operations, if the first part determines the result, the second part is not evaluated. This optimization prevents unnecessary evaluations and potential side effects.\n\n🧠 <b>Brain Booster:</b> Skip unnecessary evaluation' },
    { question: 'How to create infinite loop? ♾️', answer: 'Infinite loops result from conditions that never become false, like for (;;) or while (1). They cause programs to hang and are dangerous unless carefully controlled with break statements.\n\n🧠 <b>Brain Booster:</b> Never-ending loop' },
    { question: 'Why use control structures? 🎯', answer: "Without control structures, programs execute sequentially from top to bottom without decision-making capabilities. They enable algorithms, conditional logic, and repetition essential for real programs.\n\n🧠 <b>Brain Booster:</b> Enable decision making" },
    { question: 'What is else ladder? 🦜', answer: 'Else ladder chains multiple else-if statements to check many conditions in sequence until one is true. Only the first true condition executes its associated block.\n\n🧠 <b>Brain Booster:</b> Multiple if-else chain' },
    { question: 'Can multiple cases run? 🎭', answer: 'Yes, if you omit the break statement between cases, execution falls through to the next case. This is usually unintended behavior but can be useful in specific situations.\n\n🧠 <b>Brain Booster:</b> Fall-through execution' },
    { question: 'How many times loop runs? 🔁', answer: "Loop iterations depend on the condition logic—from once to millions of times or infinite if misconfigured. Correct conditional logic ensures the desired number of repetitions.\n\n🧠 <b>Brain Booster:</b> Depends on condition" },
    { question: 'Declare variables inside blocks? 📝', answer: 'Yes, variables can be declared inside blocks since C99 with local scope within that block only. Variables declared this way cannot be accessed outside their declaring block.\n\n🧠 <b>Brain Booster:</b> Local block scope' },
    { question: 'Is == okay for strings? 🤔', answer: 'No, == compares memory addresses, not string content, giving incorrect results for string comparison. Use strcmp() function to properly compare string content for equality.\n\n🧠 <b>Brain Booster:</b> Compare addresses not content' },
    { question: 'What do getchar() and putchar()? 🔄', answer: 'Getchar() reads a single character from input, putchar() writes a single character to output. Both are efficient for single character input/output operations.\n\n🧠 <b>Brain Booster:</b> Single character I/O' },
    { question: 'gets() vs fgets()? 📥', answer: 'Gets() is unsafe and causes buffer overflows with no size limits, while fgets() safely limits input size. Always use fgets() to prevent security vulnerabilities.\n\n🧠 <b>Brain Booster:</b> fgets safer than gets' },
    { question: 'What is block? 📦', answer: 'A block is code wrapped in curly braces that groups statements together logically. Blocks define scope for variables and control flow boundaries.\n\n🧠 <b>Brain Booster:</b> Statements in braces' },
    { question: 'Loop without body? 👻', answer: 'Yes, a loop can have an empty body using just a semicolon, but it wastes CPU cycles. This is rarely useful and usually results from programming errors.\n\n🧠 <b>Brain Booster:</b> Empty iteration wasteful' }
  ];

  return (
    <div className="unit-page">
      <div className="unit-header">
        <h1>⚡ Unit 2: Control Structures & Input/Output Functions 🎛️</h1>
        <p className="unit-intro">
          Yo check this out! Now we're getting into the real stuff! 🚀 
          Control structures are how you give your code the brain to make decisions.
          If-else, switch, and loops - we're about to lock in and master it all! No cap!
        </p>
      </div>

      <div className="content-section">
        <ContentCard 
          title="🤔 Conditional Statements - if"
          content={[
            '✅ The if statement checks a condition before doing anything.',
            '📝 Syntax: if (condition) { statements; }',
            '💭 If the condition is true, the statements will execute.',
            '❌ If it\'s false, the block gets totally completely skipped.',
            '🎯 Example:',
            '   if (age >= 18) { printf("You can vote! W"); }',
            '💡 Always wrap the condition in parentheses!'
          ]}
        />

        <ContentCard 
          title="🔀 if-else Statement"
          content={[
            '📌 Pair an if with an else to handle both outcomes.',
            '📝 Syntax: if (condition) { statements1; } else { statements2; }',
            '🎭 If true -> statements1 executes.',
            '⚖️ If false -> statements2 executes.',
            '💡 Example:',
            '   if (score >= 50) { printf("Passed! 🎉"); }',
            '   else { printf("Failed! L ❌"); }',
            '🎯 It\'s literally one or the other - never both!'
          ]}
        />

        <ContentCard 
          title="🔗 else-if Ladder"
          content={[
            '📊 Chain else-if blocks to check a bunch of conditions in a row.',
            '📝 Syntax: if (cond1) { } else if (cond2) { } else if (cond3) { } else { }',
            '🎯 If the first condition takes an L, it checks the next one.',
            '💡 Example: Grading a test score!',
            '   if (marks >= 90) { printf("A+ GOAT 🌟"); }',
            '   else if (marks >= 80) { printf("A Based 👍"); }',
            '   else if (marks >= 70) { printf("B Mid 🎯"); }',
            '   else { printf("C Copium 📚"); }',
            '⚠️ The moment it finds a true condition, it skips the rest of the ladder!'
          ]}
        />

        <ContentCard 
          title="🪆 Nested if Statements"
          content={[
            '🎪 Putting an if statement inside another if statement.',
            '📝 Used to check conditions deeply, step-by-step.',
            '💡 Example:',
            '   if (age >= 18) {',
            '       if (hasLicense == true) {',
            '           printf("You can drive bro! 🚗");',
            '       }',
            '   }',
            '⚠️ Going too deep makes the code unreadable - keep it clean!'
          ]}
        />

        <ContentCard 
          title="🎮 switch Statement"
          content={[
            '🎯 The switch statement is a much cleaner way to check exact matches.',
            '📝 Instead of 50 if-elses, just switch on the variable.',
            '⚡ Cases check for literal values (like case 1:, case \'A\':).',
            '🛑 You MUST use the "break" keyword to stop it from running the next cases.',
            '🎁 "default:" is like the final else block when absolutely nothing else matches.',
            '💡 Example:',
            '   switch(choice) {',
            '     case 1: printf("Pizza 🍕"); break;',
            '     case 2: printf("Burger 🍔"); break;',
            '     default: printf("Salad 🥗"); break;',
            '   }'
          ]}
        />

        <ContentCard 
          title="🔄 Loops (while & do-while)"
          content={[
            '🔁 Loops let you run the exact same code over and over again without copying it.',
            '⏰ while loop: Checks the vibe (condition) first, then runs. If false initially, it never runs.',
            '   int i = 1; while(i <= 5) { printf("%d", i); i++; }',
            '🎪 do-while loop: Runs the code first, THEN checks the vibe. Guaranteed to run at least once!',
            '   int j = 1; do { printf("%d", j); j++; } while(j <= 5);',
            '⚠️ Don\'t forget to augment your variable (like i++) or you\'ll spawn an infinite loop and crash your PC!'
          ]}
        />

        <ContentCard 
          title="📐 The for Loop"
          content={[
            '🏆 The GOAT of all loops. Packs initialization, condition, and increment all in one line.',
            '📝 Syntax: for (init; condition; update) { code; }',
            '💡 Example: Printing 1 to 5',
            '   for (int i = 1; i <= 5; i++) {',
            '       printf("%d ", i);',
            '   }',
            '🎯 Perfect when you know exactly how many times you need to loop from the start.'
          ]}
        />
      </div>

      <VivaSection questions={vivaQuestions} />

      <div className="unit-footer">
        <h3>🎓 Key Takeaways from Unit 2:</h3>
        <ul>
          <li>✅ Mastered making decisions with if, else-if, and switch.</li>
          <li>✅ Understood how loops work so we don't repeat ourselves.</li>
          <li>✅ Learned the crucial difference between break and continue.</li>
          <li>✅ Discovered how do-while guarantees at least one execution.</li>
          <li>✅ You\'re officially ready for Unit 3! Let\'s gooo! 🚀</li>
        </ul>
      </div>
    </div>
  );
}

export default Unit2;

