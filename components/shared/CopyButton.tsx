"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  onCopied?: () => void;
  className?: string;
  label?: string;
}

export function CopyButton({ value, onCopied, className, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn("copy-btn", copied && "copied", className)}
      aria-label={copied ? "Copied!" : `Copy ${label}`}
    >
      {copied ? (
        <><Check size={11} /> Copied!</>
      ) : (
        <><Copy size={11} /> {label}</>
      )}
    </button>
  );
}
