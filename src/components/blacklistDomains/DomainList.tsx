import { Trash2 } from "lucide-react";
import Button from "../ui/Button";
import { useBlackList } from "@/context/BlackListContext";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

export function DomainList({ allSelected }: { allSelected: boolean }) {
  const {
    filteredDomains: domains,
    openDeleteDialog: onDelete,
    toggleDomainSelection: toggleSelection,
    selectedDomains,
    toggleSelectAll,
  } = useBlackList();
  if (domains.length === 0) {
    return (
      <div className='text-center py-6 text-foreground  bg-background rounded-md border border-dashed border-border  text-sm transition-colors duration-300 ease-in-out'>
        No domains found
      </div>
    );
  }

  return (
    <div className='space-y-1.5'>
      <div className='flex items-center justify-between mb-1.5 px-2'>
        <div className='flex items-center gap-2 mb-2'>
          <Checkbox
            id='select-all'
            checked={allSelected}
            onCheckedChange={toggleSelectAll}
            className='h-5 w-5 shadow-none border-border cursor-pointer'
          />
          <label
            htmlFor='select-all'
            className='text-sm  font-medium cursor-pointer text-text transition-colors duration-300 ease-in-out'
          >
            Select All
          </label>
        </div>
        {selectedDomains.length > 0 && (
          <span className='text-xs text-text transition-colors duration-300 ease-in-out'>
            {selectedDomains.length} item{selectedDomains.length > 1 ? "s" : ""}{" "}
            selected
          </span>
        )}
      </div>

      {domains.map((domain) => (
        <div
          key={domain.id}
          className={cn(
            "  border-transparent flex items-center h-14 lg:h-12 justify-between hover:bg-hover overflow-x-auto no-scrollbar select-none bg-card  w-full relative border  rounded-md group"
          )}
        >
          <div className='flex items-center gap-2 px-4'>
            <Checkbox
              id={`domain-${domain.id}`}
              checked={selectedDomains.includes(domain.id)}
              onCheckedChange={() => toggleSelection(domain.id)}
              className='h-4.5 w-4.5 shadow-none border-border cursor-pointer bg-background '
            />
            <div className='flex flex-wrap items-center gap-1.5  pr-8'>
              <span className='truncate text-sm font-medium text-text  max-w-[135px] sm:max-w-[150px] '>
                {domain.isRegex ? (
                  <code className='bg-badge  px-1 py-0.5 rounded text-text  font-mono transition-colors duration-300 ease-in-out'>
                    {domain.domain}
                  </code>
                ) : (
                  domain.domain
                )}
              </span>
              {domain.blockType === "specific-path" && domain.pathPattern && (
                <div className='bg-warn text-text text-[10px] py-0 h-5 flex items-center rounded-full px-1.5 transition-colors duration-300 ease-in-out'>
                  Path: {domain.pathPattern}
                </div>
              )}
              {domain.includeSubdomains && (
                <div className='bg-badge  text-[10px] py-0 h-5 flex items-center rounded-full px-1.5 transition-colors duration-300 ease-in-out'>
                  Includes Subdomains
                </div>
              )}
            </div>
          </div>
          <div className='flex items-center gap-3 px-4'>
            <span className='text-xs opacity-80 text-text transition-colors duration-300 ease-in-out'>
              Added {domain.dateAdded.toLocaleDateString()}
            </span>
            <Button
              onClick={() => onDelete(domain.id)}
              className=' hover:bg-error-light bg-transparent border-0 ring-0 rounded-full flex items-center justify-center h-8 w-8 transition-colors duration-300 ease-in-out p-0'
            >
              <Trash2 className='h-4.5 w-4.5' />
              <span className='sr-only'>Delete</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
