"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export function CopyButton({ text, label = "Copied to clipboard" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.add({
        title: "Success",
        description: label,
        type: "success",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.add({
        title: "Error",
        description: "Failed to copy text",
        type: "error",
      });
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-6 w-6 text-muted-foreground hover:text-foreground hover:bg-muted" 
      onClick={handleCopy}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
    </Button>
  );
}
