import { useState } from "react";
import axios from "axios";

function UploadDocument() {

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [pdf, setPdf] =
    useState(null);

  const [loading, setLoading] =
    useState(false);


  const handleUpload = async (e) => {

    e.preventDefault();

    if (!pdf) {
      alert("Please select PDF");
      return;
    }

    if (
      pdf.type !== "application/pdf"
    ) {
      alert(
        "Only PDF files are allowed"
      );
      return;
    }

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "category",
        category
      );

      formData.append(
        "description",
        description
      );

      formData.append(
        "pdf",
        pdf
      );

      const response =
        await axios.post(
          "http://localhost:5000/api/documents/upload",
          formData
        );

      console.log(
        response.data
      );

      alert(
        "PDF uploaded successfully"
      );

      setTitle("");
      setCategory("");
      setDescription("");
      setPdf(null);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Upload failed"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="upload-document">

      <h1>
        Upload Study Notes
      </h1>

      <form onSubmit={handleUpload}>

        <input
          type="text"
          placeholder="Document Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) =>
            setPdf(
              e.target.files[0]
            )
          }
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Uploading..."
            : "Upload PDF"}
        </button>

      </form>

    </div>
  );
}

export default UploadDocument;