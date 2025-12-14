import { Hint } from "@/components/hint";
import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

function NewButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <Plus className="text-white" />
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px] justify-center items-center">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl mb-4"></DialogTitle>
        </DialogHeader>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
}

export default NewButton;
