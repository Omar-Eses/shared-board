import { Button } from "@/components/ui/button";
import Image from "next/image";

function EmptyBoards() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/board.svg"} alt="No boards" width={250} height={250} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a new board
      </p>
      <div className="mt-6">
        <Button>Create Board</Button>
      </div>
    </div>
  );
}

export default EmptyBoards;
