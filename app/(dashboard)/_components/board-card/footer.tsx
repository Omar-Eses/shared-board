import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  author: string;
  createdAt: string;
  disabled: boolean;
  onClick: () => void;
}

function Footer({
  isFavorite,
  title,
  author,
  createdAt,
  disabled,
  onClick,
}: FooterProps) {
  return (
    <div className="relative p-4 bg-white">
      <p className="text-14px truncate max-w-[calc(100%-24px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {author}, {createdAt}
      </p>
      <Button
        className={cn(
          "opacity-0 group-hover:opacity-100 transition",
          "absolute top-3 right-3 text-muted-foreground hover:text-purple-600",
          disabled && "cursor-not-allowed opacity-75",
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavorite && "fill-purple-600 text-purple-600",
          )}
        />
      </Button>
    </div>
  );
}

export default Footer;
