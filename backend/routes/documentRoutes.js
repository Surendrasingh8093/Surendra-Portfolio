const express = require("express");

const router = express.Router();

const upload =
  require("../middleware/uploadDocument");

const {
  uploadDocument,
  getDocuments,
  deleteDocument,
} = require("../controllers/documentController");


router.post(
  "/upload",
  upload.single("pdf"),
  uploadDocument
);

router.get(
  "/",
  getDocuments
);

router.delete(
  "/:id",
  deleteDocument
);

module.exports = router;