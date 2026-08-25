"use client";

import dynamic from "next/dynamic";
import { useId } from "react";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

type MarkdownEditorProps = {
  labelText?: string;
  value: string;
  onChange: (value: string) => void;
  textAreaName: string;
  disabled?: boolean;
};

export function MarkdownEditor({
  labelText = "",
  value,
  onChange,
  textAreaName,
  disabled = false,
}: MarkdownEditorProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}

      <MDEditor
        className="whitespace-pre-wrap"
        value={value}
        onChange={(value) => {
          if (value === undefined) return;
          onChange(value);
        }}
        height={400}
        hideToolbar={disabled}
        textareaProps={{
          id,
          name: textAreaName,
          disabled: disabled,
        }}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
      />
    </div>
  );
}
