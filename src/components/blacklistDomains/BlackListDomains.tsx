import BlackListedDomain from "./BlackListedDomain";
import BlockedDomainPanelAlerts from "./BlockedDomainPanelAlerts";
import BlockedDomainsPanel from "./BlockedDomainsPanel";
import BlockWebsiteTabs from "./BlockWebsiteTabs";
import Header from "./Header";
import SuccessMessage from "./SuccessMessage";

const BlackListDomains = () => {
  return (
    <div>
      <Header />
      <BlockWebsiteTabs />
      <BlockedDomainsPanel />
      <BlockedDomainPanelAlerts />
      <SuccessMessage />
      <BlackListedDomain />
    </div>
  );
};

export default BlackListDomains;
