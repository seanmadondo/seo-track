import { IPageRanking } from "../../App";

export interface SEOFormProps {
  searchUrlInputRef: React.RefObject<HTMLInputElement>;
  isError: boolean;
  pageRankings: IPageRanking[] | undefined;
  onSearch: (currentPage: number) => void;
  onClearForm: () => void;
}

export const SEOForm = ({
  isError,
  pageRankings,
  searchUrlInputRef,
  onSearch,
  onClearForm,
}: SEOFormProps) => {
  return (
    <div className="form">
      <label htmlFor="keywords-input">Enter Keywords</label>
      <input
        id="keywords-input"
        type="text"
        placeholder="online title test"
        defaultValue={"online title test"}
      />
      <label htmlFor="search-url">Enter URL</label>
      <input
        id="search-url"
        ref={searchUrlInputRef}
        type="text"
        placeholder="https://www..."
        defaultValue={"https://www."}
        onChange={() => onClearForm()}
      />
      {isError && <p>Invalid URL. Include https:.//www...</p>}
      <button onClick={() => (pageRankings ? onClearForm() : onSearch(1))}>
        {pageRankings ? "Clear" : "Go"}
      </button>
    </div>
  );
};
