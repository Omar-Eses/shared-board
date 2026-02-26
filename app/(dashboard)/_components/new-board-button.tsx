"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface Props {
  orgId: string;
  disabled?: boolean;
}

function NewBoardButton({ orgId, disabled }: Props) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!orgId) return;

    mutate({ orgId: orgId, title: "New Board" })
      .then(() => toast.success("Board created successfully!"))
      .catch(() => toast.error("Failed to create board. Please try again."));
  };

  const pendingText = pending ? "Creating..." : "New Board";

  return (
    <Button
      disabled={disabled || pending}
      onClick={onClick}
      variant="outline"
      size={"lg"}
      className={cn(
        "col-span-1 aspect-100/127 h-auto bg-purple-600 rounded-lg",
        "hover:bg-purple-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "cursor-not-allowed opacity-75 hover:bg-purple-600",
      )}
    >
        
      <Plus className="h-12 w-12 text-white" />
      <p className="mt-2 text-sm font-light text-white">{pendingText}</p>
    </Button>
  );
}

export default NewBoardButton;
