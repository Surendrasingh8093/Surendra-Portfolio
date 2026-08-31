const Document = require("../models/Document");
const fs = require("fs");
const path = require("path");

// Upload PDF
exports.uploadDocument = async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select a PDF file",
      });
    }

    const {
      title,
      category,
      description,
    } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        success: false,
        message:
          "Title and category are required",
      });
    }

    const pdfUrl =
      `${req.protocol}://${req.get("host")}` +
      `/uploads/documents/${req.file.filename}`;

    const document = await Document.create({
      title,
      category,
      description,
      fileName: req.file.filename,
      pdfUrl,
    });

    res.status(201).json({
      success: true,
      message:
        "PDF uploaded successfully",
      document,
    });

  } catch (error) {
    console.error(
      "Upload Document Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get all PDFs
exports.getDocuments = async (req, res) => {
  try {
    const documents =
      await Document.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      documents,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete PDF

exports.deleteDocument = async (req, res) => {
  try {

    const { id } = req.params;

    console.log("Deleting document:", id);

    // MongoDB document find 
    const document = await Document.findById(id);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    // physical path of pdf
    const filePath = path.join(
      __dirname,
      "../uploads/documents",
      document.fileName
    );

    console.log("File path:", filePath);

    // PDF मौजूद है तो delete करें
    if (fs.existsSync(filePath)) {

      fs.unlinkSync(filePath);

      console.log("PDF file deleted");

    } else {

      console.log(
        "PDF file not found:",
        filePath
      );

    }

    // MongoDB record delete करें
    await Document.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Document deleted successfully",
    });

  } catch (error) {

    console.error(
      "Delete Document Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};