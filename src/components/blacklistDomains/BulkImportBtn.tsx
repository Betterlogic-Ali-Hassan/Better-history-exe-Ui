import { useBlackList } from "@/context/BlackListContext";
import Button from "../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FolderIcon from "@/svgs/FolderIcon";

const BulkImportBtn = () => {
  const { blacklistedDomains, setBlacklistedDomains } = useBlackList();
  const handleBulkImport = (domains: string) => {
    const domainList = domains.split("\n").filter((d) => d.trim() !== "");

    const newDomains = domainList.map((domain) => {
      // Check if it contains a path pattern
      const hasPathPattern = domain.includes("/");
      let domainPart = domain;
      let pathPart = "";

      if (hasPathPattern) {
        const parts = domain.split("/");
        domainPart = parts[0];
        pathPart = "/" + parts.slice(1).join("/");
      }

      return {
        id: Date.now() + Math.random().toString(),
        domain: domainPart.trim(),
        includeSubdomains: false,
        pathPattern: hasPathPattern ? pathPart : undefined,
        blockType: hasPathPattern
          ? ("specific-path" as const)
          : ("entire-domain" as const),
        dateAdded: new Date(),
      };
    });

    setBlacklistedDomains([...blacklistedDomains, ...newDomains]);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='whitespace-nowrap flex gap-2 '>
          <FolderIcon />
          Bulk Import
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-md transition-colors duration-300 ease-in-out p-6 rounded-[32px] '>
        <DialogHeader className='gap-0'>
          <DialogTitle className='text-base text-text transition-colors duration-300 ease-in-out'>
            Bulk Import Domains
          </DialogTitle>
          <DialogDescription className='text-sm text-foreground transition-colors duration-300 ease-in-out'>
            Enter one domain per line to add multiple domains at once.
          </DialogDescription>
        </DialogHeader>
        <div className='py-3 space-y-4'>
          <div className='mb-1'>
            <div className='text-sm font-medium text-text mb-2 transition-colors duration-300 ease-in-out'>
              Enter domains (one per line)
            </div>
          </div>

          <textarea
            className='w-full h-32 p-2 border rounded-md text-[13px] transition-colors duration-300 ease-in-out input'
            placeholder='facebook.com
*.twitter.com
youtube.com/shorts/*
amazon.com/gp/product/*'
            id='bulk-domains'
          />
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              const textarea = document.getElementById(
                "bulk-domains"
              ) as HTMLTextAreaElement;
              handleBulkImport(textarea.value);
            }}
            className='  rounded transition-colors duration-300 ease-in-out'
          >
            Import Domains
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BulkImportBtn;
