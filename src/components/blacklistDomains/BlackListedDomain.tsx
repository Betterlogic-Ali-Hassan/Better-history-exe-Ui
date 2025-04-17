import BlackListedDomainSearch from "./BlackListedDomainSearch";
import BlackListedDomainTabs from "./BlackListedDomainTabs";
import DeleteDomainButton from "./DeleteDomainButton";

const BlackListedDomain = () => {
  return (
    <div>
      <BlackListedDomainSearch />
      <BlackListedDomainTabs />
      <DeleteDomainButton />
    </div>
  );
};

export default BlackListedDomain;
