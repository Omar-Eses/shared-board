import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

function EmptyOrg() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/element.svg"}
        alt="Empty Organization"
        width={250}
        height={250}
      />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Aleses Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started.
      </p>
      <div className="mt-6 bg-transparent">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default EmptyOrg;
