// SEO-TRACK server.js
const express = require("express");
const cors = require('cors');
const axios = require("axios");
const https = require("https");
const jsdom = require("jsdom");

const app = express();
const { JSDOM } = jsdom;

app.use(express.json());
app.use(cors());

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const PORT = 3001;


app.get("/search", async (req, res) => {

  const page = req.query.page || 1;
  
  try {

    const response = await axios.get(
      `https://infotrack-tests.infotrack.com.au/Google/Page${page.toString().padStart(2, "0")}.html`, { httpsAgent });

      const pageText = response.data;

      const dom = new JSDOM(pageText);
      const centerColDiv = dom.window.document.querySelector("#center_col");
      if (centerColDiv) {
        const anchorElements = centerColDiv.querySelectorAll("a");
        const urlRegex = /(https?:\/\/(?:www\.)?[^\/\s]+)/g;
      
        const matches = Array.from(anchorElements)
          .map((element) => element.getAttribute("href"))
          .filter((href) => urlRegex.test(href));
          console.log(matches); // ["http://example.com", "https://www.example.com"]
          res.json(matches);
      } else {
        console.log("center_col div not found");
        res.status(404).json({ error: "Results not found"})
      }
      
    
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
