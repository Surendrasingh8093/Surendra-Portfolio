const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadFolder = path.join(
  __dirname,
  "../uploads/documents"
);

// Folder create करें
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, {
    recursive: true,
  });
}

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },

  filename: (req, file, cb) => {

    const cleanName = file.originalname
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9._-]/g, "");

    const fileName =
      `${Date.now()}-${cleanName}`;

    cb(null, fileName);
  },

});


// केवल PDF
const fileFilter = (req, file, cb) => {

  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(
      new Error("Only PDF files are allowed"),
      false
    );
  }

};


// 100 MB maximum
const upload = multer({

  storage,

  fileFilter,

  limits: {
    fileSize: 200 * 1024 * 1024,
  },

});


module.exports = upload;