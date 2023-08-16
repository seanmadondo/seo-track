import { IPageRanking } from "../../App";

export interface SEOResultsProps {
  currentPage: number;
  pageRankings: IPageRanking[] | undefined;
  pagination: {
    bounds: { start: number; end: number };
    onNextClick: () => void;
    onPrevClick: () => void;
  };
}

export const SEOResults = ({
  pageRankings,
  currentPage,
  pagination,
}: SEOResultsProps) => {
  return (
    <div className="results" data-testid={"results-form"}>
      <>
        {pageRankings &&
          pageRankings.map((item) => {
            return (
              <div key={item.page}>
                <h4>Results</h4>
                <p>{`Your URL was found ${item.rankings.length} times on page ${currentPage}.`}</p>
                <table>
                  <thead>
                    <tr>
                      <th>Page</th>
                      <th>Rankings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.page}</td>
                      <td>
                        {item.rankings.length > 0
                          ? item.rankings.join(", ")
                          : "None"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="pagination">
                  <button
                    disabled={currentPage === pagination.bounds.start}
                    onClick={pagination.onPrevClick}
                  >
                    Prev
                  </button>
                  <button
                    disabled={currentPage === pagination.bounds.end}
                    onClick={pagination.onNextClick}
                  >
                    Next
                  </button>
                </div>
              </div>
            );
          })}
      </>
    </div>
  );
};
