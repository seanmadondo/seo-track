# SEO Track App and Server

This repository contains a React app (`seo-track-app`) and a server (`seo-track-server`) for tracking URL rankings.

## Getting Started

These instructions will help you set up and run the SEO Track App and Server Track Server locally on your machine.

### Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (usually comes with Node.js installation)
- [git](https://git-scm.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/seanmadondo/seo-track.git
   ```

2. Navigate to the `seo-track-app` folder:

   ```bash
   cd seo-track/seo-track-app
   ```

3. Install the dependencies for the React app:

   ```bash
   npm install
   ```

4. Navigate to the `seo-track-server` folder:

   ```bash
   cd ../seo-track-server
   ```

5. Install the dependencies for the server:

   ```bash
   npm install
   ```

### Running the App and Server

1. Open two terminal windows, one for the React app and one for the server.

2. In the first terminal, navigate to the `seo-track-app` folder and start the React app:

   ```bash
   cd ../seo-track-app
   npm start
   ```

3. In the second terminal, navigate to the `seo-track-server` folder and start the server:

   ```bash
   cd ../seo-track-server
   npm start
   ```

The React app should now be accessible at [http://localhost:3000](http://localhost:3000), and the server should be running at [http://localhost:3001](http://localhost:3001).

## Aspects that can be improved

1. Error Handling: The current code lacks comprehensive error handling. Network errors, HTML parsing failures, or other unexpected issues should be handled gracefully with appropriate error messages.
2. URL Encoding: URLs in HTML can be URL-encoded. The app should decode URLs before comparing them.
3. The Scraping technique can be improved.
4. Backend Validation: Implement validation for the URLs entered by users to ensure they are in a valid format.
5. Implement an upper bound of 50 results.
6. Caching: Implement a caching mechanism to store already fetched pages and their URL rankings to avoid redundant requests.
