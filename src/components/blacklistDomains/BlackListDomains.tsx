import BlackListedDomain from "./BlackListedDomain";
import BlockedDomainPanelAlerts from "./BlockedDomainPanelAlerts";
import BlockedDomainsPanel from "./BlockedDomainsPanel";
import BlockWebsiteTabs from "./BlockWebsiteTabs";
import DeleteDialog from "./DeleteDialog";
import Header from "./Header";
import SuccessMessage from "./SuccessMessage";

const BlackListDomains = () => {
  return (
    <div className='h-full overflow-y-auto no-scrollbar px-1 mt-2'>
      <div className='bg-card p-5 rounded-lg'>
        <Header />
        <BlockWebsiteTabs />
        <BlockedDomainsPanel />
        <BlockedDomainPanelAlerts />
        <SuccessMessage />
      </div>
      <BlackListedDomain />
      <DeleteDialog />
    </div>
  );
};

export default BlackListDomains;
