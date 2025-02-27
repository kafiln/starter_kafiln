import React from "react";
interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}) => {
  return <div className="prose prose-sm max-w-full break-words">{content}</div>;
};
