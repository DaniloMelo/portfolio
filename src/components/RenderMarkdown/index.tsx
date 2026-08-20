import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

interface RenderMarkdownProps {
  markdown: string;
}

export default function RenderMarkdown({ markdown }: RenderMarkdownProps) {
  return (
    <div
      className="
        w-full max-w-none mt-10
        prose prose-slate prose-a:text-blue-500 prose-a:no-underline prose-a:hover:text-blue-700 prose-a:hover:underline prose-a:transition
        prose-img:mx-auto
        md:prose-lg 
        dark:prose-invert
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
