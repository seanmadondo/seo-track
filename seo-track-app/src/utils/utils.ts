// Define a function to extract rankings based on the search URL
export const extractRankings = (
  urls: string[],
  searchUrl: string
): number[] => {
  return urls.reduce((total: number[], url: string, index: number) => {
    if (url.includes(searchUrl) || url === searchUrl) {
      total.push(index + 1);
    }
    return total;
  }, []);
};
