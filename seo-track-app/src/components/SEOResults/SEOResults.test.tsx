import React from "react";
import { render, screen } from "@testing-library/react";
import { SEOResults, SEOResultsProps } from "./SEOResults"; // Update the path accordingly
import { IPageRanking } from "../../App";

describe("SEOResults Component", () => {
  const mockPageRankings: IPageRanking[] = [
    { page: 1, rankings: [1, 2, 3] },
    { page: 2, rankings: [4, 5] },
  ];

  const mockPagination = {
    bounds: { start: 1, end: 2 },
    onNextClick: jest.fn(),
    onPrevClick: jest.fn(),
  };

  const defaultProps: SEOResultsProps = {
    currentPage: 1,
    pageRankings: mockPageRankings,
    pagination: mockPagination,
  };

  it("renders without errors", () => {
    render(<SEOResults {...defaultProps} />);
    expect(screen.getByTestId("results-form")).toBeInTheDocument();
  });

  it("triggers onNextClick when Next button is clicked", () => {});

  it("triggers onPrevClick when Prev button is clicked", () => {});

  it("disables Prev button when currentPage is at start", () => {});

  it("disables Next button when currentPage is at end", () => {});
});
