const tabula = require("tabula-js");

// Specify the path to your PDF file (adjust as needed)
const pdfPath = "path/to/your/bdl.pdf";

// Create a new instance of tabula
const t = tabula(pdfPath);

// Extract CSV data from the PDF
t.extractCsv((err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("CSV Data:", data);
  }
});
