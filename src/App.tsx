import { DateProvider } from "./context/DateContext";
import { HeaderProvider } from "./context/HeaderContext";
import { HistoryProvider } from "./context/HistoryContext";
import { usePageContext } from "./context/PageContext";

import { ThemeDropDownContextProvider } from "./context/ThemeDropDownContext";
import DevicePage from "./pages/DevicePage";
import DownloadPage from "./pages/DownloadPage";
import SearchEnginePage from "./pages/SearchEnginePage";
import ActivityPage from "./pages/ActivityPage";
import { SearchContextProvider } from "./context/SearchFilterContext";

const App = () => {
  const { page, dialogOpen } = usePageContext();
  return (
    <ThemeDropDownContextProvider>
      <HeaderProvider>
        <SearchContextProvider>
          <DateProvider>
            <HistoryProvider>
              {page === "activity" && <ActivityPage />}
              {page === "downloads" && <DownloadPage />}
              {page === "search" && <SearchEnginePage />}
              {page === "device" && <DevicePage />}
              {dialogOpen && (
                <div
                  className='fixed inset-0 bg-black/50  '
                  style={{ zIndex: 50 }}
                ></div>
              )}
            </HistoryProvider>
          </DateProvider>
        </SearchContextProvider>
      </HeaderProvider>
    </ThemeDropDownContextProvider>
  );
};

export default App;
