const { useState } = React;

// Componente ModalForm
function ModalForm ({ isOpen, onClose, onSubmit })  {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [banner, setBanner] = useState("");

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#17252a",
        padding: "40px",
        borderRadius: "8px",
        zIndex: "1000",
        width: "50%",
        maxWidth: "600px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
      }}
    >
      <h2
        style={{ marginBottom: "20px", textAlign: "center", color: "#f1f1f1" }}
      >
        Postea un nuevo Blog!
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ title, content, banner });
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#f1f1f1" }}
          >
            Título:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#f1f1f1" }}
          >
            Contenido:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#f1f1f1" }}
          >
            Link de la imagen:
          </label>
          <input
            type="text"
            value={banner}
            onChange={(e) => setBanner(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={onClose}
            type="button"
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              background: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cerrar
          </button>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};