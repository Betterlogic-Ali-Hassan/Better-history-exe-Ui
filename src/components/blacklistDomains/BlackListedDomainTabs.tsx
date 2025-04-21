import { useBlackList } from "@/context/BlackListContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DomainList } from "./DomainList";
import { FolderTree, Globe, Layers } from "lucide-react";
import { IoFilterOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

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
        <TabsList className='w-full grid grid-cols-4 gap-1 rounded-md border border-border bg-card  h-[52px] px-2 py-1 transition-colors duration-300 ease-in-out'>
          <TabsTrigger
            value='all'
            className={cn(
              "rounded-md cursor-pointer flex items-center justify-center gap-1.5 py-1.5 text-sm transition-colors duration-300 ease-in-out hover:bg-hover text-text",
              activeTab === "all" && "bg-background "
            )}
          >
            <Layers className='!h-5 !w-5' />
            <span>All Rules</span>
            <div className='ml-0.5 bg-badge text-[12px]  h-5 min-w-5 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out'>
              {domainCounts.all}
            </div>
          </TabsTrigger>

          <TabsTrigger
            value='exact'
            className={cn(
              "rounded-md cursor-pointer flex items-center justify-center gap-1.5 py-1.5 text-sm transition-colors duration-300 ease-in-out hover:bg-hover text-text",
              activeTab === "exact" && "bg-background "
            )}
          >
            <Globe className='!h-5 !w-5' />
            <span>Entire Websites</span>
            <div className='ml-0.5 bg-badge text-[12px]  h-5 min-w-5 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out'>
              {domainCounts.exact}
            </div>
          </TabsTrigger>

          <TabsTrigger
            value='subdomains'
            className={cn(
              "rounded-md cursor-pointer flex items-center justify-center gap-1.5 py-1.5 text-sm transition-colors duration-300 ease-in-out hover:bg-hover text-text",
              activeTab === "subdomains" && "bg-background "
            )}
          >
            <FolderTree className='!h-5 !w-5' />
            <span>With Subdomains</span>
            <div className='ml-0.5 bg-badge text-[12px]  h-5 min-w-5 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out'>
              {domainCounts.subdomains}
            </div>
          </TabsTrigger>

          <TabsTrigger
            value='paths'
            className={cn(
              "rounded-md cursor-pointer flex items-center justify-center gap-1.5 py-1.5 text-sm transition-colors duration-300 ease-in-out hover:bg-hover text-text",
              activeTab === "paths" && "bg-background "
            )}
          >
            <IoFilterOutline className='h-3 w-3' />
            <span>Specific Paths</span>
            <div className='ml-0.5 bg-badge text-[12px]  h-5 min-w-5 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out'>
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
