import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "C++ Variables",
  description: "Learn about variables in C++ - how to store and manipulate data",
};

export default function CppVariables() {
  return (
    <DocLayout title="C++ Variables">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">Variables in C++</h1>

        <p className="doc-paragraph">
          Variables are containers for storing data values. In C++, you must declare
          the type of a variable before using it, which is known as static typing.
        </p>

        <h2 className="doc-subheading">Variable Declaration</h2>

        <p className="doc-paragraph">
          C++ requires you to specify the data type when declaring a variable:
        </p>

        <CodeBlock
          language="cpp"
          title="declaration.cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    int age = 25;              // Integer
    double price = 19.99;      // Floating-point
    float pi = 3.14f;          // Single precision float
    char grade = 'A';          // Single character
    bool passed = true;        // Boolean (true/false)
    
    cout << "Age: " << age << endl;
    cout << "Price: " << price << endl;
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Data Types</h2>

        <p className="doc-paragraph">
          C++ has several fundamental data types:
        </p>

        <CodeBlock
          language="cpp"
          title="types.cpp"
          code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Integer types
    int num = 100;
    short smallNum = 32767;
    long bigNum = 1000000L;
    long long veryBig = 9223372036854775807LL;
    
    // Floating-point types
    float f = 3.14f;
    double d = 3.14159265359;
    long double ld = 3.141592653589793238L;
    
    // Character type
    char letter = 'Z';
    
    // Boolean type
    bool isTrue = true;
    bool isFalse = false;
    
    // String (requires <string>)
    string name = "C++ Programming";
    
    cout << "Integer: " << num << endl;
    cout << "Double: " << d << endl;
    cout << "String: " << name << endl;
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Variable Initialization</h2>

        <p className="doc-paragraph">
          C++ supports multiple ways to initialize variables:
        </p>

        <CodeBlock
          language="cpp"
          title="initialization.cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    // Traditional initialization
    int x = 10;
    
    // Constructor initialization
    int y(20);
    
    // Uniform initialization (C++11)
    int z{30};
    double price{9.99};
    
    // Auto keyword (C++11)
    auto age = 25;        // Compiler deduces int
    auto name = "John";   // Compiler deduces const char*
    
    // Multiple variables
    int a = 1, b = 2, c = 3;
    
    cout << x << " " << y << " " << z << endl;
    cout << "Auto: " << age << endl;
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Constants</h2>

        <p className="doc-paragraph">
          Constants are variables whose values cannot be changed after initialization:
        </p>

        <CodeBlock
          language="cpp"
          title="constants.cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    // Using const keyword
    const double PI = 3.14159265359;
    const int MAX_AGE = 150;
    
    // Using #define preprocessor
    #define GRAVITY 9.81
    
    cout << "PI: " << PI << endl;
    cout << "Gravity: " << GRAVITY << endl;
    
    // PI = 3.14;  // ERROR: Cannot modify const!
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Type Conversion</h2>

        <p className="doc-paragraph">
          C++ allows converting between different data types:
        </p>

        <CodeBlock
          language="cpp"
          title="conversion.cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    // Implicit conversion
    int num = 10;
    double result = num;  // int to double automatically
    
    // Explicit conversion (casting)
    double pi = 3.14159;
    int whole = (int)pi;           // C-style cast
    int whole2 = static_cast<int>(pi);  // C++ style
    
    cout << "Implicit: " << result << endl;
    cout << "Explicit: " << whole << endl;
    
    return 0;
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you understand variables, let&apos;s explore C++ conditions.
          </p>
          <Link
            href="/docs/python/conditions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Next: Conditions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
