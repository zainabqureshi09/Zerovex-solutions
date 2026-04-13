"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";

interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  color?: string;
}

interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
}

interface InteractiveDiagramProps {
  nodes?: DiagramNode[];
  edges?: DiagramEdge[];
  title?: string;
  className?: string;
}

const defaultNodes: DiagramNode[] = [
  { id: "client", label: "Client", x: 50, y: 50, color: "#8B0000" },
  { id: "docs", label: "Docs Site", x: 300, y: 50, color: "#dc2626" },
  { id: "search", label: "Search", x: 550, y: 20, color: "#f97316" },
  { id: "ai", label: "AI Assistant", x: 550, y: 100, color: "#3b82f6" },
  { id: "content", label: "Content", x: 300, y: 180, color: "#10b981" },
  { id: "github", label: "GitHub", x: 50, y: 180, color: "#6366f1" },
];

const defaultEdges: DiagramEdge[] = [
  { from: "client", to: "docs", label: "Visit" },
  { from: "docs", to: "search", label: "Search" },
  { from: "docs", to: "ai", label: "Ask AI" },
  { from: "docs", to: "content", label: "Browse" },
  { from: "content", to: "github", label: "Edit" },
];

export function InteractiveDiagram({
  nodes = defaultNodes,
  edges = defaultEdges,
  title = "Architecture Overview",
  className,
}: InteractiveDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  return (
    <div className={cn("p-6 rounded-xl border border-docs-border dark:border-docs-border-dark bg-white dark:bg-black", className)}>
      <h3 className="text-lg font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-4">
        {title}
      </h3>

      <svg viewBox="0 0 700 250" className="w-full h-auto">
        {/* Edges */}
        {edges.map((edge, index) => {
          const fromNode = getNodeById(edge.from);
          const toNode = getNodeById(edge.to);
          if (!fromNode || !toNode) return null;

          return (
            <g key={index}>
              <line
                x1={fromNode.x + 50}
                y1={fromNode.y + 20}
                x2={toNode.x + 50}
                y2={toNode.y + 20}
                stroke="#8B0000"
                strokeWidth="2"
                opacity="0.3"
                markerEnd="url(#arrowhead)"
              />
              {edge.label && (
                <text
                  x={(fromNode.x + toNode.x) / 2 + 50}
                  y={(fromNode.y + toNode.y) / 2 + 15}
                  className="text-xs"
                  fill="currentColor"
                  textAnchor="middle"
                >
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Arrow Marker */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
            <polygon points="0 0, 10 5, 0 10" fill="#8B0000" opacity="0.5" />
          </marker>
        </defs>

        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            onClick={() => setSelectedNode(node.id)}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
          >
            <rect
              x={node.x}
              y={node.y}
              width="100"
              height="40"
              rx="8"
              fill={node.color || "#8B0000"}
              opacity={selectedNode === node.id ? 1 : hoveredNode === node.id ? 0.9 : 0.8}
              className="transition-all duration-200"
            />
            <text
              x={node.x + 50}
              y={node.y + 25}
              textAnchor="middle"
              fill="white"
              className="text-sm font-semibold"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Node Details */}
      {selectedNode && (
        <div className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <h4 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
            {getNodeById(selectedNode)?.label}
          </h4>
          <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
            {getNodeById(selectedNode)?.label === "Client" && "Users accessing the documentation site through their web browser."}
            {getNodeById(selectedNode)?.label === "Docs Site" && "The main Next.js documentation application with all features."}
            {getNodeById(selectedNode)?.label === "Search" && "Fuzzy search powered by Fuse.js with instant results."}
            {getNodeById(selectedNode)?.label === "AI Assistant" && "AI chatbot trained on documentation content for instant help."}
            {getNodeById(selectedNode)?.label === "Content" && "Markdown/MDX documentation pages with code examples."}
            {getNodeById(selectedNode)?.label === "GitHub" && "Source code repository with edit and view capabilities."}
          </p>
        </div>
      )}

      <p className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark mt-3">
        💡 Click on any node to see details
      </p>
    </div>
  );
}
