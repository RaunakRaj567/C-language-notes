import React from 'react';
import { ContentCard, VivaSection } from '../components/ContentCard';
import './Unit.css';

function Unit7() {
  const vivaQuestions = [
    { question: 'What makes C++ different? 🚀', answer: 'C++ adds Object-Oriented Programming features to C: classes, objects, inheritance, polymorphism, and templates. It maintains backward compatibility while providing higher-level abstractions.\n\n🧠 <b>Brain Booster:</b> Adds OOP features' },
    { question: 'What is a class? 🏛️', answer: 'Class is blueprint for creating objects combining data members and member functions. Unlike structures, class defaults to private access. Objects are instances of classes.\n\n🧠 <b>Brain Booster:</b> Object blueprint' },
    { question: 'What is an object? 🎁', answer: 'Object is instance of a class with actual values for data members. If Student is class, a specific student record is object. Objects occupy memory.\n\n🧠 <b>Brain Booster:</b> Class instance' },
    { question: 'What are access modifiers? 🔒', answer: 'private restricts access to class members only, public allows access everywhere, protected allows access in derived classes. Control data encapsulation and security.\n\n🧠 <b>Brain Booster:</b> Control member access' },
    { question: 'What is constructor? 🏗️', answer: 'Constructor automatically called when object is created for initialization. Same name as class without return type. Initialize member variables to valid states.\n\n🧠 <b>Brain Booster:</b> Automatic initialization' },
    { question: 'What is destructor? 🗑️', answer: 'Destructor automatically called when object is destroyed for cleanup. Named with tilde: ~ClassName(). Releases resources like dynamic memory.\n\n🧠 <b>Brain Booster:</b> Automatic cleanup' },
    { question: 'What is encapsulation? 📦', answer: 'Bundling data and functions together while hiding internal details. Keep data private, provide controlled access through public methods. Improves security.\n\n🧠 <b>Brain Booster:</b> Data hiding and control' },
    { question: 'What is inheritance? 👨‍👦', answer: 'Derived class inherits properties and methods from base class reducing code duplication. Enables code reuse and logical hierarchy between classes.\n\n🧠 <b>Brain Booster:</b> Extend base class' },
    { question: 'Single vs multiple inheritance? 🔀', answer: 'Single: derived class from one base class. Multiple: derived class from many base classes. C++ supports both but multiple can cause diamond problem.\n\n🧠 <b>Brain Booster:</b> One versus multiple bases' },
    { question: 'What is virtual function? 👻', answer: 'Virtual function enables runtime polymorphism allowing derived class to override base function. Correct function called based on actual object type at runtime.\n\n🧠 <b>Brain Booster:</b> Runtime overriding' },
    { question: 'What is polymorphism? 🎭', answer: 'Same interface, different implementations. Method overloading uses multiple functions with same name but different parameters. Method overriding uses inheritance.\n\n🧠 <b>Brain Booster:</b> Same name, different behavior' },
    { question: 'What is method overloading? 🔀', answer: 'Same function name with different parameters: void func(int), void func(float), void func(int, int). Compiler selects correct version based on arguments.\n\n🧠 <b>Brain Booster:</b> Multiple function versions' },
    { question: 'What is const member function? 🔒', answer: 'const void func() const {} cannot modify member variables. Used for read-only operations ensuring object immutability within function scope.\n\n🧠 <b>Brain Booster:</b> Read-only function' },
    { question: 'What are static members? 🔒', answer: 'Static members shared by all objects of class. One copy for entire class. static int count tracks total objects created.\n\n🧠 <b>Brain Booster:</b> Class-level member' },
    { question: 'What is friend function? 👥', answer: 'Friend function declared with friend keyword accessing private class members. Breaks encapsulation but useful for specific operations like operator overloading.\n\n🧠 <b>Brain Booster:</b> Special access privilege' },
    { question: 'What is this pointer? 👉', answer: 'this pointer implicitly available in member functions referring to current object. Used to access members: this->member or access from static context.\n\n🧠 <b>Brain Booster:</b> Current object pointer' },
    { question: 'What are namespaces? 📦', answer: 'Organize code into logical groups preventing naming conflicts. namespace myNamespace { } contains declarations. Access with myNamespace::symbol or using namespace.\n\n🧠 <b>Brain Booster:</b> Code organization' },
    { question: 'What is STL? 📚', answer: 'Standard Template Library provides reusable components: containers (vector, list, map), algorithms (sort, find), iterators. Eliminates code duplication.\n\n🧠 <b>Brain Booster:</b> Reusable components' },
    { question: 'What is vector? 📦', answer: 'Dynamic array container automatically growing when needed. std::vector<int> v; v.push_back(5) adds element. Provides array convenience with flexibility.\n\n🧠 <b>Brain Booster:</b> Dynamic array' },
    { question: 'What is exception handling? 🚨', answer: 'try-catch blocks handle errors gracefully: try { risky code } catch (exception &e) { handle }. Prevents program crashes enabling recovery.\n\n🧠 <b>Brain Booster:</b> Handle errors gracefully' },
    { question: 'What is template? 📄', answer: 'Generic programming: template <typename T> void func(T x) works with any type. Reduces code duplication for similar functionality.\n\n🧠 <b>Brain Booster:</b> Generic programming' },
    { question: 'What is string class? 🔥', answer: 'std::string provides string abstraction easier than char arrays. str += "World" concatenates without buffer concerns. Dynamic memory handled internally.\n\n🧠 <b>Brain Booster:</b> Simplified string handling' },
    { question: 'What is operator overloading? ➕', answer: 'Define custom behavior for operators: Complex c1 + c2 calls custom addition logic. Makes custom types work naturally with operators.\n\n🧠 <b>Brain Booster:</b> Custom operator behavior' },
    { question: 'What is pure virtual function? 👻', answer: 'Abstract method with no implementation: = 0 in declaration. Derived classes must implement. Creates abstract interfaces for inheritance.\n\n🧠 <b>Brain Booster:</b> Abstract method' },
    { question: 'What is abstract class? 🎭', answer: 'Class with pure virtual functions that cannot be instantiated. Serves as interface for derived classes to implement. Enforces contract.\n\n🧠 <b>Brain Booster:</b> Cannot instantiate' },
    { question: 'Shallow vs deep copy? 🔀', answer: 'Shallow: pointer copied, same memory address shared. Deep: actual data copied creating independent copy. Deep copy required for dynamic memory.\n\n🧠 <b>Brain Booster:</b> Copy type difference' },
    { question: 'What is copy constructor? 📋', answer: 'ClassName(const ClassName &obj) initializes object from existing object. Deep copy essential for dynamic memory. Prevents memory issues.\n\n🧠 <b>Brain Booster:</b> Initialize from object' },
    { question: 'What is move semantics? 🚀', answer: 'C++11 rvalue references efficiently transfer resources. Move constructor improves performance avoiding unnecessary copies for temporary objects.\n\n🧠 <b>Brain Booster:</b> Efficient resource transfer' },
    { question: 'How do const objects work? 🔒', answer: 'const ClassName obj makes object constants. Only const member functions callable. Prevents accidental modification of constant data.\n\n🧠 <b>Brain Booster:</b> Immutable object' },
    { question: 'What are smart pointers? 🧠', answer: 'unique_ptr and shared_ptr provide automatic memory management. Automatically delete when going out of scope. Eliminates memory leaks.\n\n🧠 <b>Brain Booster:</b> Automatic memory management' },
    { question: 'What are lambda functions? 🎭', answer: '[captures](parameters) { code } creates anonymous inline functions. C++11 feature useful for callbacks and algorithms. Concise syntax.\n\n🧠 <b>Brain Booster:</b> Anonymous inline function' }
  ];

  return (
    <div className="unit-page">
      <div className="unit-header">
        <h1>⭐ Unit 7: Concepts & Basics of C++ Programming 🚀</h1>
        <p className="unit-intro">
          Welcome to C++ - the advanced evolution of C! 🚀 Dive into Object-Oriented Programming with classes, objects, and inheritance. C++ combines C's power with OOP sophistication! Master modern programming paradigms! ⭐
        </p>
      </div>

      <div className="content-section">
        <ContentCard 
          title="🚀 C++ Introduction"
          content={[
            '📌 C++ = C + Classes + OOP (Object Oriented Programming).',
            '🎯 Bjarne Stroustrup developed it in 1983.',
            '💪 Backward compatible with C - most C code runs in C++.',
            '⭐ Key Features:',
            '   • Classes and objects',
            '   • Inheritance and polymorphism',
            '   • Exception handling',
            '   • Templates (generic programming)',
            '   • Standard Template Library (STL)',
            '🌍 Widely used in real-world applications!'
          ]}
        />

        <ContentCard 
          title="🏛️ Classes and Objects"
          content={[
            '📌 Class: Groups data members (variables) and member functions.',
            '💡 Syntax:',
            '   class ClassName {',
            '   private:',
            '       int rollNo;',
            '   public:',
            '       void setRollNo(int r) { rollNo = r; }',
            '       int getRollNo() { return rollNo; }',
            '   };',
            '🎯 Object: An instance of a class (contains actual data).',
            '   ClassName obj1;',
            '   obj1.setRollNo(101);',
            '💡 Structure difference: Classes default to private, structs to public!'
          ]}
        />

        <ContentCard 
          title="🔐 Access Modifiers"
          content={[
            '🚫 private: Accessible only inside the class.',
            '🌍 public: Accessible everywhere, anyone can access.',
            '👥 protected: Accessible inside class and derived classes.',
            '💡 Default in class: private',
            '💡 Default in struct: public',
            '🎯 Keep data private, provide getter/setter for controlled access! (Encapsulation)'
          ]}
        />

        <ContentCard 
          title="🏗️ Constructors and Destructors"
          content={[
            '🏗️ Constructor: Called automatically when object is created.',
            '💡 Syntax: ClassName() { initialization code }',
            '   Student() { rollNo = 0; marks = 0.0; }',
            '🗑️ Destructor: Called automatically when object is destroyed.',
            '💡 Syntax: ~ClassName() { cleanup code }',
            '   ~Student() { cout << "Object deleted"; }',
            '💾 If dynamic memory allocated, free it in destructor! (RAII principle)'
          ]}
        />

        <ContentCard 
          title="📦 Encapsulation (Data Hiding)"
          content={[
            '🔒 Keep data private, provide controlled access.',
            '💡 Example:',
            '   class Account {',
            '   private:',
            '       double balance;  // private data',
            '   public:',
            '       void deposit(double amount) { balance += amount; }',
            '       void withdraw(double amount) { if (amount <= balance) balance -= amount; }',
            '       double getBalance() { return balance; }',
            '   };',
            '🎯 Advantages:',
            '   • Data to invalid state in नहीं जा can।',
            '   • Implementation to change कर can हो, interface same रहता.',
            '   • Validation logic एक जगह.'
          ]}
        />

        <ContentCard 
          title="👨‍👦 Inheritance (विरासत)"
          content={[
            '🎯 एक class दूसरी class from properties inherit कर सकती.',
            '💡 Syntax:',
            '   class Base { /* ... */ };',
            '   class Derived : public Base { /* ... */ };',
            '📌 Types:',
            '   • Single inheritance: एक base class',
            '   • Multiple inheritance: कई base classes',
            '   • Multilevel: grandparent -> parent -> child',
            '🎯 फायदे:',
            '   • Code reuse',
            '   • Logical hierarchy',
            '   • Polymorphism of foundation'
          ]}
        />

        <ContentCard 
          title="🎭 Polymorphism"
          content={[
            '🎭 एक ही नाम, अलग-अलग काम।',
            '📌 Method Overloading (Compile-time):',
            '   void func(int a) { /* ... */ }',
            '   void func(float a) { /* ... */ }',
            '   void func(int a, int b) { /* ... */ }',
            '📌 Method Overriding (Runtime):',
            '   class Animal { virtual void sound() { } };',
            '   class Dog : public Animal { void sound() { cout << "Woof"; } };',
            '   class Cat : public Animal { void sound() { cout << "Meow"; } };',
            '💪 Runtime पर decide is कौन सा function call होगा!'
          ]}
        />

        <ContentCard 
          title="👻 Virtual Functions"
          content={[
            '🎯 Runtime polymorphism के लिए virtual keyword use do.',
            '💡 Example:',
            '   class Shape {',
            '   public:',
            '       virtual void draw() = 0;  // pure virtual',
            '   };',
            '   class Circle : public Shape {',
            '   public:',
            '       void draw() { cout << "Drawing Circle"; }',
            '   };',
            '⚡ Dynamic binding from सही function runtime पर select .',
            '💪 Polymorphism of power!'
          ]}
        />

        <ContentCard 
          title="📝 Exception Handling"
          content={[
            '🚨 Errors to gracefully handle करने के लिए।',
            '💡 Syntax:',
            '   try {',
            '       if (x == 0) throw "Division by zero!";',
            '       int result = 10 / x;',
            '   }',
            '   catch (const char* msg) {',
            '       cout << "Error: " << msg;',
            '   }',
            '   catch (...) {  // catch any exception',
            '       cout << "Unknown error";',
            '   }',
            '✅ Program crash नहीं होगा, gracefully handle होगा!'
          ]}
        />

        <ContentCard 
          title="📦 STL - Standard Template Library"
          content={[
            '💪 Ready-made data structures और algorithms।',
            '📌 Containers: vector, list, map, set, queue, stack।',
            '💡 Vector (Dynamic array):',
            '   vector<int> v;',
            '   v.push_back(10);  // element add करो',
            '   v[0];  // access करो',
            '   v.size();  // size पता करो',
            '📌 Map (Key-value pairs):',
            '   map<string, int> age;',
            '   age["Raj"] = 20;',
            '💪 बहुत efficient और optimized!'
          ]}
        />

        <ContentCard 
          title="🔤 String Class"
          content={[
            '💬 C in character array of hassle नहीं।',
            '💡 Syntax:',
            '   string str1 = "Hello";',
            '   string str2 = " World";',
            '   string result = str1 + str2;  // "Hello World"',
            '🎯 Useful functions:',
            '   • length() - length निकालो',
            '   • substr() - substring निकालो',
            '   • find() - substring ढूंढो',
            '   • replace() - text replace करो',
            '💪 बहुत easier और safer!'
          ]}
        />

        <ContentCard 
          title="📄 Templates (Generic Programming)"
          content={[
            '🎯 एक ही code सभी data types के लिए काम करे।',
            '💡 Function template:',
            '   template <typename T>',
            '   T add(T a, T b) { return a + b; }',
            '   add(5, 10);  // int के लिए',
            '   add(5.5, 3.2);  // float के लिए',
            '💡 Class template:',
            '   template <typename T>',
            '   class Stack { /* ... */ };',
            '💪 Code reuse of अलग level!'
          ]}
        />

        <ContentCard 
          title="➕ Operator Overloading"
          content={[
            '💡 Operators to अपने हिसाब from define कर can हो।',
            '💡 Example: Complex numbers of addition',
            '   Complex operator+(const Complex &other) {',
            '       Complex result;',
            '       result.real = real + other.real;',
            '       result.imag = imag + other.imag;',
            '       return result;',
            '   }',
            '   Complex c1(3, 4), c2(1, 2);',
            '   Complex c3 = c1 + c2;  // + operator of use!',
            '💪 Intuitive code बन जाता है!'
          ]}
        />

        <ContentCard 
          title="🧠 Smart Pointers (Modern C++)"
          content={[
            '💾 Automatic memory management।',
            '📌 unique_ptr: एक object ही own कर सकता.',
            '   unique_ptr<int> ptr(new int(10));',
            '📌 shared_ptr: कई objects share कर can.',
            '   shared_ptr<int> ptr1(new int(10));',
            '   shared_ptr<int> ptr2 = ptr1;  // reference count बढ़ेगा',
            '✅ अपने आप delete हो जाते.',
            '🎯 Memory leaks from बच can हो!'
          ]}
        />

        <ContentCard 
          title="🎭 Lambda Expressions"
          content={[
            '💡 Anonymous functions - जब छोटा function चाहिए।',
            '📝 Syntax: [captures](parameters) { code }',
            '💡 Example:',
            '   auto add = [](int a, int b) { return a + b; };',
            '   cout << add(5, 3);  // 8',
            '   vector<int> v = {1, 2, 3, 4};',
            '   sort(v.begin(), v.end(), [](int a, int b) {',
            '       return a > b;  // descending order',
            '   });',
            '⚡ Inline callback के लिए perfect!'
          ]}
        />

        <ContentCard 
          title="💡 C++ के Important Features"
          content={[
            '✅ Backward compatibility with C।',
            '✅ Strong type checking (C from better)।',
            '✅ Object-Oriented Programming।',
            '✅ Generic Programming (Templates)।',
            '✅ Standard Library (STL)।',
            '✅ Exception handling।',
            '✅ Operator और function overloading।',
            '✅ Memory management (manual + smart pointers)।',
            '✅ Multiple inheritance (careful use करो!)।',
            '✅ Namespaces (code organization के लिए)।'
          ]}
        />

        <ContentCard 
          title="🚨 Common C++ Mistakes"
          content={[
            '❌ Mistake 1: Forgetting to free dynamic memory (memory leak).',
            '   Use smart pointers instead!',
            '❌ Mistake 2: Not writing virtual destructor.',
            '   Always write virtual ~Base() {};',
            '❌ Mistake 3: Wrong choice between pass by reference vs value.',
            '   Use reference for performance!',
            '❌ Mistake 4: Not writing copy constructor (with dynamic memory).',
            '   Default copy does shallow copy.',
            '❌ Mistake 5: Creating object of abstract class.',
            '   Implement pure virtual functions first!'
          ]}
        />
      </div>

      <VivaSection questions={vivaQuestions} />

      <div className="unit-footer">
        <h3>🎓 Key Takeaways from Unit 7:</h3>
        <ul>
          <li>✅ Understood basic C++ structure and OOP concepts.</li>
          <li>✅ Learned classes, objects, and constructors thoroughly.</li>
          <li>✅ Understood inheritance, polymorphism, and virtual functions.</li>
          <li>✅ Learned exception handling and templates introduction.</li>
          <li>✅ Understood STL containers and smart pointers.</li>
          <li>✅ Learned advanced features like lambda expressions.</li>
          <li>✅ You now have solid understanding of C++ basics! 🚀</li>
        </ul>
      </div>

      <div className="final-message" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '12px',
        marginTop: '30px',
        textAlign: 'center'
      }}>
        <h2>🎉 बधाई हो, यार! तुमने पूरा C और C++ of basic course complete कर दिया! 🎉</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          🌟 अब तुम आगे बढ़ can हो - Advanced topics, Data Structures, Algorithms सब learn can हो।<br />
          💪 Programming of journey यही है - धीरे-धीरे practice do हुए आगे बढ़ना।<br />
          🚀 Code लिखते रहो, projects बनाते रहो, errors from learnते रहो।<br />
          <br />
          "Practice makes perfect" - तुम कर can हो, बस consistent रहो! 🎯
        </p>
      </div>
    </div>
  );
}

export default Unit7;

