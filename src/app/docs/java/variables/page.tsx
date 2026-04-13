import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Java Variables",
  description: "Learn about variables in Java - how to store and manipulate data",
};

export default function JavaVariables() {
  return (
    <DocLayout title="Java Variables">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Variables in Java</h1>

        <p className="doc-paragraph">
          Variables in Java are containers for storing data. Java is a statically-typed
          language, meaning you must declare the type of a variable before using it.
        </p>

        <h2 className="doc-subheading">Variable Declaration</h2>

        <p className="doc-paragraph">
          In Java, every variable must be declared with a specific type:
        </p>

        <CodeBlock
          language="java"
          title="Declaration.java"
          code={`public class Declaration {
    public static void main(String[] args) {
        int age = 25;              // Integer
        double price = 19.99;      // Double precision
        float pi = 3.14f;          // Single precision float
        char grade = 'A';          // Single character
        boolean passed = true;     // Boolean (true/false)
        String name = "John";      // String (object)
        
        System.out.println("Age: " + age);
        System.out.println("Price: " + price);
        System.out.println("Name: " + name);
    }
}`}
        />

        <h2 className="doc-subheading">Primitive Data Types</h2>

        <p className="doc-paragraph">
          Java has 8 primitive data types:
        </p>

        <CodeBlock
          language="java"
          title="Primitives.java"
          code={`public class Primitives {
    public static void main(String[] args) {
        // Integer types
        byte b = 127;              // -128 to 127 (8-bit)
        short s = 32767;           // -32,768 to 32,767 (16-bit)
        int num = 100;             // -2B to 2B (32-bit)
        long bigNum = 1000000L;    // Large numbers (64-bit)
        
        // Floating-point types
        float f = 3.14f;           // Single precision (32-bit)
        double d = 3.14159;        // Double precision (64-bit)
        
        // Other primitives
        char letter = 'Z';         // Unicode character
        bool isTrue = true;        // true or false
        
        System.out.println("Int: " + num);
        System.out.println("Double: " + d);
    }
}`}
        />

        <h2 className="doc-subheading">String Type</h2>

        <p className="doc-paragraph">
          Strings are objects in Java (not primitive), but they&apos;re essential:
        </p>

        <CodeBlock
          language="java"
          title="Strings.java"
          code={`public class Strings {
    public static void main(String[] args) {
        // String creation
        String greeting = "Hello, World!";
        String name = new String("Java");
        
        // String operations
        int length = greeting.length();
        char firstChar = greeting.charAt(0);
        String upper = greeting.toUpperCase();
        boolean contains = greeting.contains("World");
        
        System.out.println(greeting);
        System.out.println("Length: " + length);
        System.out.println("Upper: " + upper);
        
        // String concatenation
        String full = greeting + " " + name;
        System.out.println(full);
    }
}`}
        />

        <h2 className="doc-subheading">Type Casting</h2>

        <p className="doc-paragraph">
          Java supports converting between different data types:
        </p>

        <CodeBlock
          language="java"
          title="Casting.java"
          code={`public class Casting {
    public static void main(String[] args) {
        // Widening (automatic)
        int num = 100;
        double wideNum = num;  // int to double
        
        // Narrowing (manual)
        double pi = 3.14159;
        int narrowPi = (int) pi;  // double to int
        
        // Type conversion
        String text = "123";
        int parsed = Integer.parseInt(text);
        double parsedDouble = Double.parseDouble("3.14");
        
        System.out.println("Widened: " + wideNum);
        System.out.println("Narrowed: " + narrowPi);
        System.out.println("Parsed: " + parsed);
    }
}`}
        />

        <h2 className="doc-subheading">Final Variables</h2>

        <p className="doc-paragraph">
          Constants are declared with the &quot;final&quot; keyword - they cannot be changed:
        </p>

        <CodeBlock
          language="java"
          title="FinalVars.java"
          code={`public class FinalVars {
    public static void main(String[] args) {
        // Constant - cannot be changed
        final double PI = 3.14159265359;
        final int MAX_USERS = 100;
        final String APP_NAME = "MyApp";
        
        System.out.println("PI: " + PI);
        System.out.println("Max Users: " + MAX_USERS);
        
        // PI = 3.14;  // ERROR: Cannot assign to final variable!
    }
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            You&apos;ve completed the Java basics! Practice with examples and keep learning.
          </p>
          <Link
            href="/docs/java/introduction"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Review Introduction
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
