import React from 'react';
import { ContentCard, VivaSection } from '../components/ContentCard';
import './Unit.css';

function Unit6() {
  const vivaQuestions = [
    { question: 'What is structure? 🏗️', answer: 'Structure is user-defined data type combining different types of elements into one unit. struct Student groups roll number, name, and marks together in single container.\n\n🧠 <b>Brain Booster:</b> User-defined composite type' },
    { question: 'Structure declaration? 📝', answer: 'struct keyword defines structure template without allocating memory. Memory allocates only when creating actual structure objects or variables.\n\n🧠 <b>Brain Booster:</b> Template definition' },
    { question: 'Access structure members? 🔍', answer: 'Dot operator accesses members: s.rollNo, s.marks. Arrow operator accesses through pointer: ptr->rollNo. Both refer to same data differently.\n\n🧠 <b>Brain Booster:</b> Dot and arrow operators' },
    { question: 'What is typedef? 🏷️', answer: 'typedef creates alias for structure reducing typing: typedef struct Student Stud allows Stud s1 instead of struct Student s1.\n\n🧠 <b>Brain Booster:</b> Create type alias' },
    { question: 'Nested structure? 🪆', answer: 'Structure containing another structure as member: struct Person containing struct Address. Access nested members using multiple dot operators: p.addr.city.\n\n🧠 <b>Brain Booster:</b> Structure within structure' },
    { question: 'Array of structures? 📦', answer: 'struct Student class[50] creates array of 50 student structures. Loop through to access each: class[i].rollNo accesses i-th student roll number.\n\n🧠 <b>Brain Booster:</b> Multiple structure instances' },
    { question: 'Pass structure to function? 🎯', answer: 'Pass by value copies entire structure to function, pass by reference sends pointer. By reference is efficient for large structures.\n\n🧠 <b>Brain Booster:</b> Value or reference passing' },
    { question: 'Return structure from function? 📤', answer: 'Function can return complete structure or pointer to structure. Return type must match structure type in declaration.\n\n🧠 <b>Brain Booster:</b> Return structure data' },
    { question: 'What is union? 🎭', answer: 'Union is data type where all members share same memory location. Only one member can hold value at a time, memory size equals largest member.\n\n🧠 <b>Brain Booster:</b> Shared memory type' },
    { question: 'Structure vs union? ⚖️', answer: 'Structures allocate separate memory for each member, unions share single memory block. Union memory size is maximum member size, structure is sum of all.\n\n🧠 <b>Brain Booster:</b> Independent versus shared' },
    { question: 'What are bit fields? 🔢', answer: 'Bit fields compress structure members into bits: unsigned int flag1 : 1 uses single bit. Useful for memory optimization.\n\n🧠 <b>Brain Booster:</b> Bit-level storage' },
    { question: 'Self-referential structure? 🔗', answer: 'Structure containing pointer to same type: struct Node has next pointing to Node. Essential for linked lists and trees.\n\n🧠 <b>Brain Booster:</b> Points to itself' },
    { question: 'Structure size? 📏', answer: 'sizeof(struct) sums member sizes plus padding for alignment. Compiler adds padding aligning members to efficient memory addresses.\n\n🧠 <b>Brain Booster:</b> With alignment padding' },
    { question: 'What is padding? 🎁', answer: 'Padding adds extra bytes between structure members for alignment. Enables faster CPU access to aligned memory addresses.\n\n🧠 <b>Brain Booster:</b> Alignment bytes' },
    { question: 'Write structure to file? 💾', answer: 'fwrite() writes structure directly to file: fwrite(&s, sizeof(struct Student), 1, fp). fread() reads back restoring data.\n\n🧠 <b>Brain Booster:</b> File I/O operations' },
    { question: 'Anonymous structure? 👻', answer: 'Define structure without name: typedef struct { int x; float y; } Point. Directly use Point type without struct keyword.\n\n🧠 <b>Brain Booster:</b> Unnamed structure' },
    { question: 'Initialize structure? 🎁', answer: 'Positional initialization: struct Student s = {1, "Raj", 95.5}. Designated initialization: {.rollNo = 1, .name = "Raj"}.\n\n🧠 <b>Brain Booster:</b> Multiple methods' },
    { question: 'Pointer to structure? 🔗', answer: 'struct Student *ptr = &s1 creates pointer to structure. Access members with arrow operator: ptr->rollNo instead of s1.rollNo.\n\n🧠 <b>Brain Booster:</b> Pointer access' },
    { question: 'const structure members? 🔒', answer: 'struct Point { const int x; int y } prevents modifying x. Useful for immutable fields and data integrity.\n\n🧠 <b>Brain Booster:</b> Prevent modification' },
    { question: 'Union practical use? 🎭', answer: 'Unions save memory when storing different types alternately. Device drivers use unions for hardware register interpretation.\n\n🧠 <b>Brain Booster:</b> Memory-efficient storage' },
    { question: 'Structure alignment? 📍', answer: 'Compiler arranges members for optimal alignment. #pragma pack controls alignment affecting structure size and access speed.\n\n🧠 <b>Brain Booster:</b> CPU optimization' },
    { question: 'Flexible array member? 📏', answer: 'Last member can be incomplete array: struct Data { int size; int data[] }. Enables variable-sized structures at runtime.\n\n🧠 <b>Brain Booster:</b> Variable length structure' },
    { question: 'struct vs class C++? 🎭', answer: 'C structures are data containers only, C++ structures are classes with default public access. OOP features available in C++.\n\n🧠 <b>Brain Booster:</b> Data versus object oriented' },
    { question: 'Static in structure? 🔒', answer: 'Structure members are always per-object, cannot be static inside structure definition. Static can be declared within structure scope.\n\n🧠 <b>Brain Booster:</b> Per-object members' },
    { question: 'Structure pointers array? 🔗📦', answer: 'struct Student *arr[50] is array of 50 pointers each pointing to student. Flexible for dynamic structure arrays.\n\n🧠 <b>Brain Booster:</b> Pointer array' },
    { question: 'Initialization styles? 💾', answer: 'Positional: {1, "Raj", 95.5}, Designated: {.rollNo=1, .name="Raj"}, Partial: {1, "Raj} with remaining zeros.\n\n🧠 <b>Brain Booster:</b> Different initialization' },
    { question: 'Union member access? ⚠️', answer: 'Only last assigned member is valid, accessing others gives garbage. One value at a time, not simultaneous.\n\n🧠 <b>Brain Booster:</b> Single member value' },
    { question: 'Dynamic structure? 💾', answer: 'struct Student *ptr = (struct Student*)malloc(sizeof(struct Student)) allocates structure dynamically. Access with ptr->member.\n\n🧠 <b>Brain Booster:</b> Runtime allocation' },
    { question: 'Return structure function? 📤', answer: 'Functions returning structures must declare return type as structure. Useful for data transformation and processing.\n\n🧠 <b>Brain Booster:</b> Return type matching' },
    { question: 'Structure comparison? 🔀', answer: 'Cannot compare structures with ==, must compare member-by-member or use memcmp(). Equality requires all members matching.\n\n🧠 <b>Brain Booster:</b> Member-wise comparison' },
    { question: 'Structure in linked list? 🔗', answer: 'struct Node contains data and next pointer for linked list. Self-referential structure enables dynamic node creation and chaining.\n\n🧠 <b>Brain Booster:</b> Dynamic data structure' }
  ];

  return (
    <div className="unit-page">
      <div className="unit-header">
        <h1>🏗️ Unit 6: Derived Types - Structures & Unions 🎁</h1>
        <p className="unit-intro">
          You've mastered primitive types - now learn to create your own! 🏗️ Use structures and unions to organize complex data elegantly. These are essential in real-world applications! Build powerful data structures! 🎁
        </p>
      </div>

      <div className="content-section">
        <ContentCard 
          title="🏗️ Structure Introduction"
          content={[
            '📌 Structure is a user-defined data type that groups different types of data together.',
            '💡 Real-world example: Student record with name, roll number, marks, and address.',
            '   Without structures, these would need separate variables.',
            '   Structure allows grouping related data together!',
            '🎯 Think of a structure as a template - create instances of it for actual data.',
            '💪 Structures are the foundation of OOP concepts in C!'
          ]}
        />

        <ContentCard 
          title="📝 Structure Declaration"
          content={[
            '📌 Syntax:',
            '   struct StructName {',
            '       data_type member1;',
            '       data_type member2;',
            '       ...',
            '   };',
            '💡 Example:',
            '   struct Student {',
            '       int rollNo;',
            '       char name[50];',
            '       float marks;',
            '   };',
            '⚠️ After declaration, create an object (instance)!',
            '   struct Student s1;  // object created'
          ]}
        />

        <ContentCard 
          title="🔍 Access Structure Members"
          content={[
            '🎯 Dot Operator (.): Access members directly.',
            '💡 Example:',
            '   struct Student s1;',
            '   s1.rollNo = 101;',
            '   s1.marks = 95.5;',
            '   printf("%s", s1.name);',
            '🔗 Arrow Operator (->): Access through pointer.',
            '   struct Student *ptr = &s1;',
            '   ptr->rollNo = 102;',
            '   (*ptr).marks = 98.0;  // equivalent'
          ]}
        />

        <ContentCard 
          title="🏷️ Using Typedef for Cleaner Code"
          content={[
            '📌 Typedef creates an alias for a structure.',
            '💡 Without typedef:',
            '   struct Student s1;',
            '   struct Student s2;',
            '💡 With typedef:',
            '   typedef struct Student {',
            '       int rollNo;',
            '       char name[50];',
            '   } Student;',
            '   Student s1;  // No need to write struct!',
            '✨ Code becomes cleaner and more readable!'
          ]}
        />

        <ContentCard 
          title="🪆 Nested Structures"
          content={[
            '🎯 Structure के अंदर दूसरा structure रखना।',
            '💡 Example: Student of address भी store do.',
            '   struct Address {',
            '       char city[30];',
            '       int pincode;',
            '   };',
            '   struct Student {',
            '       int rollNo;',
            '       char name[50];',
            '       struct Address addr;  // nested!',
            '   };',
            '🔍 Access do:',
            '   s1.addr.city = "Delhi";',
            '   s1.addr.pincode = 110001;'
          ]}
        />

        <ContentCard 
          title="📦 Array of Structures"
          content={[
            '🎯 कई structures to एक array in store do।',
            '💡 Example: 50 students of class',
            '   struct Student class[50];',
            '🔍 Access do:',
            '   class[0].rollNo = 101;',
            '   class[1].marks = 95.5;',
            '🔄 Loop from सब to process do:',
            '   for (int i = 0; i < 50; i++) {',
            '       printf("%d %s\\n", class[i].rollNo, class[i].name);',
            '   }',
            '💪 बहुत efficient और organized!'
          ]}
        />

        <ContentCard 
          title="🎯 Passing Structures to Functions"
          content={[
            '📌 Pass by Value:',
            '   void printStudent(struct Student s) {',
            '       printf("%d %s %.2f", s.rollNo, s.name, s.marks);',
            '   }',
            '   printStudent(s1);  // copy बनता है',
            '⚠️ Large structures के लिए memory waste हो सकता.',
            '📌 Pass by Reference (Efficient):',
            '   void printStudent(struct Student *s) {',
            '       printf("%d %s", s->rollNo, s->name);',
            '   }',
            '   printStudent(&s1);  // सिर्फ address pass'
          ]}
        />

        <ContentCard 
          title="🎁 Union - Shared Memory"
          content={[
            '🎭 Union एक data type है जहां सभी members एक ही memory to share do.',
            '💡 Syntax:',
            '   union Data {',
            '       int i;',
            '       float f;',
            '       char c;',
            '   };',
            '📊 Size तय is largest member के हिसाब से।',
            '   sizeof(union Data) = 4 (सब from बड़ा int/float हैं)',
            '⚠️ एक समय पर सिर्फ एक member valid.',
            '   अगर i to set करो तो f invalid हो जाता.'
          ]}
        />

        <ContentCard 
          title="⚖️ Structure vs Union"
          content={[
            '📊 Structure:',
            '   • हर member to अलग memory',
            '   • Size = सभी members of total',
            '   • सभी members simultaneously valid',
            '💾 Union:',
            '   • सभी members एक ही memory share',
            '   • Size = largest member',
            '   • एक समय पर एक member valid',
            '🎯 Use case:',
            '   Structure: Students of data (सभी fields needed)',
            '   Union: Device information (एक type device हो सकता है)'
          ]}
        />

        <ContentCard 
          title="🔢 Bit Fields - Memory Optimization"
          content={[
            '💾 Structure members to bits in define कर can हो।',
            '💡 Example: Flags to store do (बहुत कम memory use)',
            '   struct Flags {',
            '       unsigned int flag1 : 1;  // 1 bit',
            '       unsigned int flag2 : 2;  // 2 bits',
            '       unsigned int flag3 : 1;  // 1 bit',
            '   };  // total 4 bits = 1 byte from कम!',
            '⚡ Memory बहुत optimize हो जाता.',
            '⚠️ Implementation compiler dependent.'
          ]}
        />

        <ContentCard 
          title="🔗 Self-Referential Structures"
          content={[
            '🎯 Structure which अपने आप to reference करता.',
            '💡 Linked List के लिए:',
            '   struct Node {',
            '       int data;',
            '       struct Node *next;  // अपने आप to point करता है',
            '   };',
            '💪 Dynamic data structures बनाने के लिए जरूरी।',
            '📚 Trees, Graphs भी self-referential structures from बनते.'
          ]}
        />

        <ContentCard 
          title="💾 Saving Structures to Files"
          content={[
            '📁 fwrite() from structure to directly file in write कर can हो।',
            '   struct Student s1 = {101, "Raj", 95.5};',
            '   FILE *fp = fopen("students.dat", "wb");',
            '   fwrite(&s1, sizeof(struct Student), 1, fp);',
            '📥 fread() from back to read कर can हो।',
            '   struct Student s2;',
            '   fread(&s2, sizeof(struct Student), 1, fp);',
            '💾 Database applications in बहुत use is!'
          ]}
        />

        <ContentCard 
          title="📏 Structure Memory और Padding"
          content={[
            '💾 Structure of size = members के sizes of sum + padding',
            '🎯 Padding: CPU to aligned memory from fast access देने के लिए।',
            '💡 Example:',
            '   struct Mixed {',
            '       char c;    // 1 byte',
            '       int i;     // 4 bytes (लेकिन 3 bytes padding add होगा)',
            '       char d;    // 1 byte',
            '   };  // size = 12 bytes (expected 6 नहीं!)',
            '⚡ Compiler automatically arrange करता.',
            '🔍 sizeof() from exact size पता चल जाता है!'
          ]}
        />

        <ContentCard 
          title="🚨 Avoid Common Mistakes"
          content={[
            '❌ Mistake 1: Structure of नाम member of तरह use do।',
            '   struct Student s1 = Student;  // गलत है!',
            '❌ Mistake 2: दोनों structures to directly compare do।',
            '   if (s1 == s2) { }  // काम नहीं करेगा।',
            '❌ Mistake 3: Union के साभी members to simultaneously use do।',
            '   Union in सिर्फ एक valid है एक बार!',
            '❌ Mistake 4: Array of structures of size गलत calculate do।',
            '   malloc(n * sizeof(struct Student));  // ये सही है!',
            '❌ Mistake 5: Typedef के बिना हर बार struct लिखना।',
            '   typedef करके code readable बनाओ!'
          ]}
        />
      </div>

      <VivaSection questions={vivaQuestions} />

      <div className="unit-footer">
        <h3>🎓 Key Takeaways from Unit 6:</h3>
        <ul>
          <li>✅ Learned to declare, define and use structures.</li>
          <li>✅ Understood nested structures and array of structures.</li>
          <li>✅ Understood unions and differences from structures.</li>
          <li>✅ Understood self-referential structures (needed for linked lists).</li>
          <li>✅ Learned memory allocation and file I/O with structures.</li>
          <li>✅ Ready for Unit 7! 🚀</li>
        </ul>
      </div>
    </div>
  );
}

export default Unit6;

