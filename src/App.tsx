import { DateProvider } from "./context/DateContext";
import { HeaderProvider } from "./context/HeaderContext";
import { usePageContext } from "./context/PageContext";
import { ThemeDropDownContextProvider } from "./context/ThemeDropDownContext";
import DevicePage from "./pages/DevicePage";
import DownloadPage from "./pages/DownloadPage";
import SearchEnginePage from "./pages/SearchEnginePage";
import ActivityPage from "./pages/ActivityPage";
import { SearchContextProvider } from "./context/SearchFilterContext";
import { HistoryProvider } from "./context/HistoryContext";
import BlacklistDomainPage from "./pages/BlacklistDomainPage";
import { BlackListContextProvider } from "./context/BlackListContext";
import AdvExportPage from "./pages/AdvExportPage";

const App = () => {
  const { page, dialogOpen } = usePageContext();
  return (
    <ThemeDropDownContextProvider>
      <HistoryProvider>
        <BlackListContextProvider>
          <HeaderProvider>
            <SearchContextProvider>
              <DateProvider>
                {page === "activity" && <ActivityPage />}
                {page === "downloads" && <DownloadPage />}
                {page === "search" && <SearchEnginePage />}
                {page === "device" && <DevicePage />}
                {page === "blackList" && <BlacklistDomainPage />}
                {page === "advExport" && <AdvExportPage />}
                {dialogOpen && (
                  <div
                    className='fixed inset-0 bg-black/50  '
                    style={{ zIndex: 50 }}
                  ></div>
                )}
              </DateProvider>
            </SearchContextProvider>
          </HeaderProvider>
        </BlackListContextProvider>
      </HistoryProvider>
    </ThemeDropDownContextProvider>
  );
};

export default App;
