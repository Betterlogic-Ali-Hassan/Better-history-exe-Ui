import { useBlackList } from "@/context/BlackListContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DomainList } from "./DomainList";
import { FolderTree, Globe, Layers } from "lucide-react";
import { IoFilterOutline } from "react-icons/io5";

const BlackListedDomainTabs = () => {
  const {
    activeTab,
    setActiveTab,
    domainCounts,
    selectedDomains,
    filteredDomains,
  } = useBlackList();
  return (
    <div>
      <Tabs defaultValue='all' value={activeTab} onValueChange={setActiveTab}>
        <TabsList className='w-full grid grid-cols-4 gap-1 rounded-xl bg-slate-100 dark:bg-[hsl(var(--secondary))] p-1 transition-colors duration-300 ease-in-out'>
          <TabsTrigger
            value='all'
            className={`rounded-lg flex items-center justify-center gap-1.5 py-1.5 text-xs transition-colors duration-300 ease-in-out ${
              activeTab === "all"
                ? "bg-white dark:bg-[hsl(var(--background))] shadow-sm data-[state=active]:text-slate-900 dark:data-[state=active]:text-[hsl(var(--foreground))]"
                : "hover:bg-slate-50 dark:hover:bg-[hsl(var(--muted))] text-slate-600 dark:text-[hsl(var(--muted-foreground))]"
            }`}
          >
            <Layers className='h-3 w-3' />
            <span>All Rules</span>
            <div className='ml-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] py-0 px-1 h-4 min-w-4 flex items-center justify-center transition-colors duration-300 ease-in-out'>
              {domainCounts.all}
            </div>
          </TabsTrigger>

          <TabsTrigger
            value='exact'
            className={`rounded-lg flex items-center justify-center gap-1.5 py-1.5 text-xs transition-colors duration-300 ease-in-out ${
              activeTab === "exact"
                ? "bg-white dark:bg-[hsl(var(--background))] shadow-sm data-[state=active]:text-slate-900 dark:data-[state=active]:text-[hsl(var(--foreground))]"
                : "hover:bg-slate-50 dark:hover:bg-[hsl(var(--muted))] text-slate-600 dark:text-[hsl(var(--muted-foreground))]"
            }`}
          >
            <Globe className='h-3 w-3' />
            <span>Entire Websites</span>
            <div className='ml-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] py-0 px-1 h-4 min-w-4 flex items-center justify-center transition-colors duration-300 ease-in-out'>
              {domainCounts.exact}
            </div>
          </TabsTrigger>

          <TabsTrigger
            value='subdomains'
            className={`rounded-lg flex items-center justify-center gap-1.5 py-1.5 text-xs transition-colors duration-300 ease-in-out ${
              activeTab === "subdomains"
                ? "bg-white dark:bg-[hsl(var(--background))] shadow-sm data-[state=active]:text-slate-900 dark:data-[state=active]:text-[hsl(var(--foreground))]"
                : "hover:bg-slate-50 dark:hover:bg-[hsl(var(--muted))] text-slate-600 dark:text-[hsl(var(--muted-foreground))]"
            }`}
          >
            <FolderTree className='h-3 w-3' />
            <span>With Subdomains</span>
            <div className='ml-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] py-0 px-1 h-4 min-w-4 flex items-center justify-center transition-colors duration-300 ease-in-out'>
              {domainCounts.subdomains}
            </div>
          </TabsTrigger>

          <TabsTrigger
            value='paths'
            className={`rounded-lg flex items-center justify-center gap-1.5 py-1.5 text-xs transition-colors duration-300 ease-in-out ${
              activeTab === "paths"
                ? "bg-white dark:bg-[hsl(var(--background))] shadow-sm data-[state=active]:text-slate-900 dark:data-[state=active]:text-[hsl(var(--foreground))]"
                : "hover:bg-slate-50 dark:hover:bg-[hsl(var(--muted))] text-slate-600 dark:text-[hsl(var(--muted-foreground))]"
            }`}
          >
            <IoFilterOutline className='h-3 w-3' />
            <span>Specific Paths</span>
            <div className='ml-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] py-0 px-1 h-4 min-w-4 flex items-center justify-center transition-colors duration-300 ease-in-out'>
              {domainCounts.paths}
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value='all' className='mt-4'>
          <DomainList
            allSelected={
              selectedDomains.length === filteredDomains.length &&
              filteredDomains.length > 0
            }
          />
        </TabsContent>
        <TabsContent value='exact' className='mt-4'>
          <DomainList
            allSelected={
              selectedDomains.length === filteredDomains.length &&
              filteredDomains.length > 0
            }
          />
        </TabsContent>
        <TabsContent value='subdomains' className='mt-4'>
          <DomainList
            allSelected={
              selectedDomains.length === filteredDomains.length &&
              filteredDomains.length > 0
            }
          />
        </TabsContent>
        <TabsContent value='paths' className='mt-4'>
          <DomainList
            allSelected={
              selectedDomains.length === filteredDomains.length &&
              filteredDomains.length > 0
            }
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlackListedDomainTabs;
