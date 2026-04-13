import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Java Introduction",
  description: "Getting started with Java programming - Learn about one of the most popular enterprise programming languages",
};

export default function JavaIntroduction() {
  return (
    <DocLayout title="Java Introduction">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Introduction to Java</h1>

        <p className="doc-paragraph">
          Java is a versatile, object-oriented programming language developed by Sun Microsystems
          in 1995. Known for its &quot;Write Once, Run Anywhere&quot; philosophy, Java runs on any device
          with a Java Virtual Machine (JVM), making it one of the most popular languages for
          enterprise applications and Android development.
        </p>

        <h2 className="doc-subheading">Why Learn Java?</h2>

        <ul className="doc-list">
          <li>Platform-independent through JVM - runs on any device</li>
          <li>Strongly object-oriented with robust design principles</li>
          <li>Dominates enterprise backend development</li>
          <li>Primary language for Android app development</li>
          <li>Massive ecosystem of libraries and frameworks</li>
          <li>In high demand with excellent job prospects</li>
        </ul>

        <h2 className="doc-subheading">Your First Java Program</h2>

        <p className="doc-paragraph">
          Let&apos;s start with the classic &quot;Hello, World!&quot; program. This example demonstrates
          Java&apos;s class-based structure:
        </p>

        <CodeBlock
          language="java"
          title="HelloWorld.java"
          code={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        String message = "Welcome to Java!";
        System.out.println(message);
    }
}`}
        />

        <p className="doc-paragraph">
          When you compile and run this program, it will display:
        </p>

        <CodeBlock
          language="text"
          code={`Hello, World!
Welcome to Java!`}
        />

        <h2 className="doc-subheading">Java Features</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Platform Independent</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              JVM allows Java code to run on any operating system.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Object-Oriented</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Everything is an object with classes, inheritance, and polymorphism.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Automatic Memory Management</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Garbage collection handles memory automatically.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Rich Standard Library</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Extensive APIs for collections, I/O, networking, and more.
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">Java Use Cases</h2>

        <p className="doc-paragraph">
          Java is used extensively in modern software development:
        </p>

        <ul className="doc-list">
          <li><strong>Enterprise Applications:</strong> Spring, Hibernate, Jakarta EE</li>
          <li><strong>Android Development:</strong> Native Android apps</li>
          <li><strong>Web Applications:</strong> Servlets, JSP, Spring Boot</li>
          <li><strong>Big Data:</strong> Hadoop, Apache Spark</li>
          <li><strong>Financial Services:</strong> Trading systems and banking</li>
          <li><strong>Scientific Computing:</strong> Research and simulation</li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you know what Java is, let&apos;s learn about Java syntax.
          </p>
          <Link
            href="/docs/java/syntax"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Next: Java Syntax
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
