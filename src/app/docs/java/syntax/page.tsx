import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Java Syntax",
  description: "Learn the basic syntax and structure of Java programming",
};

export default function JavaSyntax() {
  return (
    <DocLayout title="Java Syntax">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Java Syntax Basics</h1>

        <p className="doc-paragraph">
          Java syntax forms the foundation of writing correct Java programs.
          Understanding these fundamentals will help you build robust applications.
        </p>

        <h2 className="doc-subheading">Basic Program Structure</h2>

        <p className="doc-paragraph">
          Every Java program must have at least one class with a main method:
        </p>

        <CodeBlock
          language="java"
          title="Structure.java"
          code={`// Class definition
public class HelloWorld {
    // Main method - entry point
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
        />

        <h2 className="doc-subheading">Comments</h2>

        <p className="doc-paragraph">
          Comments document your code and are ignored by the compiler:
        </p>

        <CodeBlock
          language="java"
          title="Comments.java"
          code={`public class Comments {
    public static void main(String[] args) {
        // Single-line comment
        
        /*
         * Multi-line comment
         * Can span multiple lines
         */
        
        System.out.println("Comments work!"); // Inline comment
    }
}`}
        />

        <h2 className="doc-subheading">Statements and Semicolons</h2>

        <p className="doc-paragraph">
          Every Java statement must end with a semicolon (;):
        </p>

        <CodeBlock
          language="java"
          title="Statements.java"
          code={`public class Statements {
    public static void main(String[] args) {
        int age = 25;              // Variable declaration
        double price = 19.99;      // Double precision
        char grade = 'A';          // Character
        boolean passed = true;     // Boolean
        
        System.out.println(age);
        System.out.println(price);
    }
}`}
        />

        <h2 className="doc-subheading">Blocks and Braces</h2>

        <p className="doc-paragraph">
          Curly braces {} define code blocks for classes, methods, and control structures:
        </p>

        <CodeBlock
          language="java"
          title="Blocks.java"
          code={`public class Blocks {
    public static void main(String[] args) {
        // Class block
        int x = 10;
        int y = 20;
        
        if (x < y) {
            // If block
            System.out.println("x is less than y");
            
            if (y > 15) {
                // Nested block
                System.out.println("y is greater than 15");
            }
        }
    }
}`}
        />

        <h2 className="doc-subheading">Java Identifiers</h2>

        <p className="doc-paragraph">
          Identifiers are names used for classes, methods, and variables:
        </p>

        <CodeBlock
          language="java"
          title="Identifiers.java"
          code={`public class Identifiers {
    public static void main(String[] args) {
        // Valid identifiers
        int age = 25;
        String firstName = "John";
        double totalPrice = 99.99;
        boolean isActive = true;
        
        // Class names: PascalCase (FirstWord Capital)
        // Variables: camelCase (firstWord lowercase)
        // Constants: UPPER_SNAKE_CASE
        
        System.out.println(firstName);
    }
}`}
        />

        <h2 className="doc-subheading">Case Sensitivity</h2>

        <p className="doc-paragraph">
          Java is case-sensitive, meaning &quot;Name&quot; and &quot;name&quot; are different:
        </p>

        <CodeBlock
          language="java"
          title="CaseSensitivity.java"
          code={`public class CaseSensitivity {
    public static void main(String[] args) {
        String name = "John";
        String Name = "Jane";
        
        System.out.println(name);  // Output: John
        System.out.println(Name);  // Output: Jane
        
        // System vs system - different!
        System.out.println("Java is case-sensitive");
        // system.out.println("ERROR!"); // Won't compile
    }
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you understand Java syntax, let&apos;s learn about variables.
          </p>
          <Link
            href="/docs/java/variables"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Next: Variables
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
