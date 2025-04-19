import ActionBtn from "../activityPage/ActionBtn";
import CustomExport from "./CustomExport";

const AdvExport = () => {
  return (
    <div className='bg-card rounded-[12px] border border-border p-4 mt-6'>
      <h2 className='mb-4 text-lg font-semibold'>
        Export Your Entire Browsing History
      </h2>
      <p className='mb-4 text-sm'>
        This feature allows you to export your entire browsing history (up to 90
        days) or select a custom date range for export. Please note that
        Chrome's History API only supports exporting history—it does not allow
        importing history back.
      </p>
      <p className='mb-4 text-sm'>
        Additionally, Chrome automatically deletes history older than 90 days,
        so BetterHistory can only export the records that Chrome retains.
      </p>
      <div className='flex items-center gap-3'>
        <ActionBtn text='Entire Export (90 Days)' className='text-xs' />
        <CustomExport />
      </div>
    </div>
  );
};

export default AdvExport;
