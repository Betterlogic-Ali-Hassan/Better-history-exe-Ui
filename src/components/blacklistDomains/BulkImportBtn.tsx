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
        <Button className='whitespace-nowrap '>Bulk Import</Button>
      </DialogTrigger>
      <DialogContent className='max-w-md transition-colors duration-300 ease-in-out dark:bg-slate-900 dark:border-slate-700'>
        <DialogHeader>
          <DialogTitle className='text-sm dark:text-slate-200 transition-colors duration-300 ease-in-out'>
            Bulk Import Domains
          </DialogTitle>
          <DialogDescription className='text-xs dark:text-slate-400 transition-colors duration-300 ease-in-out'>
            Enter one domain per line to add multiple domains at once.
          </DialogDescription>
        </DialogHeader>
        <div className='py-3 space-y-4'>
          <div className='mb-1'>
            <div className='text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300 ease-in-out'>
              Enter domains (one per line)
            </div>
          </div>

          <textarea
            className='w-full h-32 p-2 border rounded-md text-xs transition-colors duration-300 ease-in-out dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
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
            className='text-xs h-7 transition-colors duration-300 ease-in-out'
          >
            Import Domains
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BulkImportBtn;
