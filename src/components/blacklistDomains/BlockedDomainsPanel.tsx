import Button from "../ui/Button";
import { Info, PlusCircle } from "lucide-react";
import BulkImportBtn from "./BulkImportBtn";
import { Tooltip } from "react-tooltip";
import { BlacklistedDomain, useBlackList } from "@/context/BlackListContext";

const BlockedDomainsPanel = () => {
  const {
    newDomain,
    setNewDomain,
    pathPattern,
    isValidDomain,
    setPathPattern,
    blockType,
    validateDomain,
    includeSubdomains,
    blacklistedDomains,
    setBlockType,
    setIsValidDomain,
    setBlacklistedDomains,
    setIncludeSubdomains,
    setShowSuccess,
  } = useBlackList();
  const handleAddDomain = () => {
    if (!newDomain) return;

    // For specific path, validate that a path pattern is provided
    if (blockType === "specific-path" && !pathPattern) {
      alert("Please enter a path pattern (e.g., /maps/*)");
      return;
    }

    // Check if it's a regex pattern
    const regexSpecialChars = /[\^$[\]$${}?*+|\\]/;
    const isRegex = regexSpecialChars.test(newDomain);
    const domainValue = newDomain;

    // Update the domain input placeholder and info text
    const domainInput = document.getElementById(
      "domain-input"
    ) as HTMLInputElement;
    if (domainInput) {
      domainInput.placeholder = isRegex
        ? "^example\\.(com|org)$"
        : "example.com";
    }

    const newEntry: BlacklistedDomain = {
      id: Date.now().toString(),
      domain: domainValue,
      includeSubdomains:
        blockType === "entire-domain" ? includeSubdomains : false,
      pathPattern: blockType === "specific-path" ? pathPattern : undefined,
      blockType,
      dateAdded: new Date(),
      isRegex: isRegex,
    };

    setBlacklistedDomains([...blacklistedDomains, newEntry]);
    setNewDomain("");
    setPathPattern("");
    setIncludeSubdomains(false);
    setBlockType("entire-domain");
    setIsValidDomain(false);

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  return (
    <div className='flex flex-col sm:flex-row gap-2 mt-3'>
      <div className='flex-1'>
        <label
          htmlFor='domain-input'
          className='text-[15px] font-medium mb-2  text-text flex items-center gap-1 transition-colors duration-300 ease-in-out'
        >
          Domain
          <span
            data-tooltip-id='info2-tooltip'
            data-tooltip-content={` Enter a domain name (e.g., example.com) or a regex pattern (e.g., /.*.example.com/)`}
          >
            <Info className='h-[17px] w-[17px] ' />
          </span>
          <Tooltip
            id='info2-tooltip'
            className='bg-text  text-card  '
            place='top'
          />
        </label>
        <input
          id='domain-input'
          placeholder='example.com or /regex/'
          value={newDomain}
          onChange={(e) => {
            setNewDomain(e.target.value);
            validateDomain(e.target.value);
          }}
          className={`w-full h-10 rounded text-sm input ${
            newDomain.startsWith("/") ? "font-mono" : ""
          }`}
        />
      </div>
      {blockType === "specific-path" && (
        <div className='flex-1 mt-2'>
          <label
            htmlFor='path-input'
            className='text-sm font-medium mb-1 block text-text transition-colors duration-300 ease-in-out'
          >
            Path Pattern
          </label>
          <input
            id='path-input'
            placeholder='/maps/*'
            value={pathPattern}
            onChange={(e) => setPathPattern(e.target.value)}
            className='w-full h-10 input rounded '
          />
        </div>
      )}
      <div className='self-end flex gap-2'>
        <Button
          onClick={handleAddDomain}
          className='whitespace-nowrap h-10 transition-colors  disabled:opacity-70 disabled:hover:bg-card duration-300 ease-in-out'
          disabled={
            !isValidDomain || (blockType === "specific-path" && !pathPattern)
          }
        >
          <PlusCircle className='mr-1.5 h-4.5 w-4.5' />
          Add to Blacklist
        </Button>
        <BulkImportBtn />
      </div>
    </div>
  );
};

export default BlockedDomainsPanel;
