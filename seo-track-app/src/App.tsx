import { createRef, useState } from "react";
import axios from "axios";

import validUrl from "valid-url";
import { SEOForm } from "./components/SEOForm";
import { SEOResults } from "./components/SEOResults";
import { extractRankings } from "./utils/utils";

export interface IPageRanking {
  page: number;
  rankings: number[];
}

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRankings, setPageRankings] = useState<IPageRanking[] | undefined>(
    undefined
  );
  const [isError, setIsError] = useState(false);
  const searchUrlInputRef = createRef<HTMLInputElement>();

  const PAGE_NUMBER_UPPER_BOUND = 10;

  const onSearch = async (page: number) => {
    const searchUrl = searchUrlInputRef.current?.value || "";
    if (validUrl.isHttpsUri(searchUrl)) {
      const response = await axios.get(`/search`, {
        params: { page: page },
      });
      const urls = response.data;
      const rankings = extractRankings(urls, searchUrl);

      setPageRankings([{ page: page, rankings: rankings }]);
    } else {
      setIsError(true);
      setPageRankings(undefined);
    }
  };

  const onClearForm = () => {
    setIsError(false);
    setPageRankings(undefined);
    setCurrentPage(1);
  };

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
    onSearch(currentPage + 1);
  };

  const onPrevClick = () => {
    setCurrentPage(currentPage - 1);
    onSearch(currentPage - 1);
  };

  return (
    <div className="App">
      <nav>
        <h1>SEO Track</h1>
      </nav>
      <div className="columns">
        <SEOForm
          searchUrlInputRef={searchUrlInputRef}
          isError={isError}
          pageRankings={pageRankings}
          onSearch={onSearch}
          onClearForm={onClearForm}
        />
        <SEOResults
          currentPage={currentPage}
          pageRankings={pageRankings}
          pagination={{
            bounds: { start: 1, end: PAGE_NUMBER_UPPER_BOUND },
            onNextClick: onNextClick,
            onPrevClick: onPrevClick,
          }}
        />
      </div>
    </div>
  );
};
