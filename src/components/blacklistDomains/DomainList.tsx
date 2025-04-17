import { Badge, Trash2 } from "lucide-react";
import Button from "../ui/Button";
import { useBlackList } from "@/context/BlackListContext";
import { Checkbox } from "../ui/checkbox";

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
      <div className='text-center py-6 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-lg border border-dashed border-slate-200 dark:border-slate-700 text-xs transition-colors duration-300 ease-in-out'>
        No domains found
      </div>
    );
  }

  return (
    <div className='space-y-1.5'>
      <div className='flex items-center justify-between mb-1.5 px-2'>
        <div className='flex items-center gap-2'>
          <Checkbox
            id='select-all'
            checked={allSelected}
            onCheckedChange={toggleSelectAll}
            className='h-3.5 w-3.5'
          />
          <label
            htmlFor='select-all'
            className='text-xs font-medium cursor-pointer dark:text-slate-300 transition-colors duration-300 ease-in-out'
          >
            Select All
          </label>
        </div>
        {selectedDomains.length > 0 && (
          <span className='text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300 ease-in-out'>
            {selectedDomains.length} item{selectedDomains.length > 1 ? "s" : ""}{" "}
            selected
          </span>
        )}
      </div>

      {domains.map((domain) => (
        <div
          key={domain.id}
          className={`flex items-center justify-between p-2 bg-white dark:bg-slate-950 rounded-lg border transition-colors duration-300 ease-in-out ${
            selectedDomains.includes(domain.id)
              ? "border-slate-400 dark:border-slate-500 bg-slate-50 dark:bg-slate-900"
              : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
          }`}
        >
          <div className='flex items-center gap-2'>
            <Checkbox
              id={`domain-${domain.id}`}
              checked={selectedDomains.includes(domain.id)}
              onCheckedChange={() => toggleSelection(domain.id)}
              className='h-3.5 w-3.5'
            />
            <div className='flex flex-wrap items-center gap-1.5'>
              <span className='font-medium text-xs dark:text-slate-200 transition-colors duration-300 ease-in-out'>
                {domain.isRegex ? (
                  <code className='bg-purple-50 dark:bg-purple-950 px-1 py-0.5 rounded text-purple-800 dark:text-purple-300 font-mono transition-colors duration-300 ease-in-out'>
                    {domain.domain}
                  </code>
                ) : (
                  domain.domain
                )}
              </span>
              {domain.blockType === "specific-path" && domain.pathPattern && (
                <Badge className='bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 border-amber-200 dark:border-amber-800 text-[10px] py-0 h-4 transition-colors duration-300 ease-in-out'>
                  Path: {domain.pathPattern}
                </Badge>
              )}
              {domain.includeSubdomains && (
                <Badge className='bg-slate-100 dark:bg-slate-800 dark:border-slate-700 text-[10px] py-0 h-4 transition-colors duration-300 ease-in-out'>
                  Includes Subdomains
                </Badge>
              )}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-[10px] text-slate-500 dark:text-slate-400 transition-colors duration-300 ease-in-out'>
              Added {domain.dateAdded.toLocaleDateString()}
            </span>
            <Button
              onClick={() => onDelete(domain.id)}
              className='text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950 h-6 w-6 transition-colors duration-300 ease-in-out'
            >
              <Trash2 className='h-3 w-3' />
              <span className='sr-only'>Delete</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
