"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, Bot, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in production, this would call an API)
    setTimeout(() => {
      const assistantMsg: Message = {
        role: "assistant",
        content: `Thank you for your question about "${userMsg.content}". In a production environment, this would be connected to an AI service like OpenAI to provide intelligent responses based on the documentation.`,
      };
      setMessages([...newMessages, assistantMsg]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg",
          "bg-dark-red hover:bg-dark-red-light text-white",
          "transition-all duration-300 hover:scale-105",
          isOpen && "rotate-90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]",
          "bg-white dark:bg-black border border-docs-border dark:border-docs-border-dark rounded-xl shadow-2xl",
          "transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-docs-border dark:border-docs-border-dark bg-docs-muted dark:bg-docs-muted-dark rounded-t-xl">
          <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-dark-red" />
          </div>
          <div>
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark">Zerovex AI</h3>
            <p className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark">Ask me anything about the docs</p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 p-4 overflow-y-auto" ref={scrollRef}>
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Bot className="w-12 h-12 text-docs-muted-foreground dark:text-docs-muted-foreground-dark opacity-50 mb-3" />
              <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                Hi! I can help you with the documentation.
              </p>
              <p className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark opacity-70 mt-1">
                Ask me about Python, JavaScript, or any topic!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-3",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-dark-red" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-2 text-sm",
                      msg.role === "user"
                        ? "bg-dark-red text-white"
                        : "bg-docs-muted dark:bg-docs-muted-dark text-docs-foreground dark:text-docs-foreground-dark"
                    )}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-dark-red" />
                  </div>
                  <div className="bg-docs-muted dark:bg-docs-muted-dark rounded-lg px-4 py-2">
                    <Loader2 className="w-4 h-4 animate-spin text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-docs-border dark:border-docs-border-dark">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about the documentation..."
              className="flex-1 px-3 py-2 rounded-lg border border-docs-border dark:border-docs-border-dark bg-white dark:bg-black text-docs-foreground dark:text-docs-foreground-dark placeholder:text-docs-muted-foreground dark:placeholder:text-docs-muted-foreground-dark focus:outline-none focus:ring-2 focus:ring-dark-red"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="shrink-0 px-3 py-2 rounded-lg bg-dark-red hover:bg-dark-red-light disabled:opacity-50 disabled:cursor-not-allowed text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
