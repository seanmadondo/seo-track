import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SEOForm, SEOFormProps } from "./SEOForm";

describe("SEOForm.tsx", () => {
  const mockSearchUrlInputRef = {
    current: {
      value: "https://www.example.com",
    },
  } as React.RefObject<HTMLInputElement>;

  const mockOnSearch = jest.fn();
  const mockOnClearForm = jest.fn();

  const defaultProps: SEOFormProps = {
    searchUrlInputRef: mockSearchUrlInputRef,
    isError: false,
    pageRankings: undefined,
    onSearch: mockOnSearch,
    onClearForm: mockOnClearForm,
  };

  it("renders without errors", () => {
    render(<SEOForm {...defaultProps} />);
    expect(screen.getByLabelText("Enter Keywords")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter URL")).toBeInTheDocument();
    expect(screen.getByText("Go")).toBeInTheDocument();
  });

  it("triggers onClearForm when input changes", () => {
    render(<SEOForm {...defaultProps} />);
    const urlInput = screen.getByLabelText("Enter URL") as HTMLInputElement;

    fireEvent.change(urlInput, { target: { value: "https://example.com" } });

    expect(mockOnClearForm).toHaveBeenCalled();
  });

  it("triggers onSearch when Go button is clicked", () => {
    render(<SEOForm {...defaultProps} />);
    const goButton = screen.getByText("Go");

    fireEvent.click(goButton);

    expect(mockOnSearch).toHaveBeenCalledWith(1);
  });

  it("triggers onClearForm when Clear button is clicked", () => {
    const propsWithRankings: SEOFormProps = {
      ...defaultProps,
      pageRankings: [{ page: 1, rankings: [1, 2] }],
    };

    render(<SEOForm {...propsWithRankings} />);
    const clearButton = screen.getByText("Clear");

    fireEvent.click(clearButton);

    expect(mockOnClearForm).toHaveBeenCalled();
  });
});
