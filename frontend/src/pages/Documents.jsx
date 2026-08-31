import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function Documents() {

  const [documents, setDocuments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {
    fetchDocuments();
  }, []);


  const fetchDocuments =
    async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:5000/api/documents"
          );

        setDocuments(
          response.data.documents || []
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    //Delete Document
     const deleteDocument = async (id) => {

      const confirmDelete =
     window.confirm(
      "Are you sure you want to delete this PDF?"
     );

     if (!confirmDelete) {
     return;
    }

    try {

     const response =
      await axios.delete(
        `http://localhost:5000/api/documents/${id}`
      );

     console.log(response.data);

     alert(
      "PDF deleted successfully!"
     );

    // UI से भी तुरंत remove करें
    setDocuments((prevDocuments) =>
      prevDocuments.filter(
        (doc) => doc._id !== id
      )
    );

    } catch (error) {

    console.error(
      "Delete Error:",
      error
    );

    alert(
      error.response?.data?.message ||
      "Failed to delete PDF"
    );

    }
   };


  if (loading) {
    return (
      <h2>
        Loading documents...
      </h2>
    );
  }

  
  return (

    <div className="documents-container">

      <h1>
        📚 Study Notes
      </h1>

      {documents.length === 0 ? (

        <h2>
          No documents available
        </h2>

      ) : (

        <div className="documents-grid">

          {documents.map((doc) => (

            <div
              className="document-card"
              key={doc._id}
            >

              <h2>
                {doc.title}
              </h2>

              <p>
                <strong>
                  Category:
                </strong>{" "}
                {doc.category}
              </p>

              <p>
                {doc.description}
              </p>

              <iframe
                src={doc.pdfUrl}
                title={doc.title}
                width="100%"
                height="500"
              />

              <div className="document-buttons">

                <a
                  href={doc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    View PDF
                  </button>
                </a>

                <a
                  href={doc.pdfUrl}
                  download
                >
                  <button>
                    Download PDF
                  </button>
                </a>

                <button
                  onClick={() =>
                   deleteDocument(doc._id)
                  }
                  >
                  Delete PDF
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Documents;