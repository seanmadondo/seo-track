import { extractRankings } from "./utils"; // Adjust the path accordingly

describe("extractRankings Function", () => {
  it("should extract rankings correctly when URLs match", () => {
    const urls = [
      "https://example.com",
      "https://example.org",
      "https://example.com",
    ];
    const searchUrl = "https://example.com";
    const rankings = extractRankings(urls, searchUrl);

    expect(rankings).toEqual([1, 3]);
  });

  it("should return an empty array when no URLs match", () => {
    const urls = ["https://example.org", "https://test.com"];
    const searchUrl = "https://example.com";
    const rankings = extractRankings(urls, searchUrl);

    expect(rankings).toEqual([]);
  });
});
