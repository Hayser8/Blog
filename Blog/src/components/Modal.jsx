function Modal ({ isOpen, onClose, post, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTitle, setEditedTitle] = React.useState(post.title);
  const [editedContent, setEditedContent] = React.useState(post.content);
  const [editedBanner, setEditedBanner] = React.useState(post.banner);

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(post.id, editedTitle, editedContent,editedBanner);
    setIsEditing(false);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          width: "600px",
          maxWidth: "80%",
          maxHeight: "80%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          color: "#000",
        }}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Título"
              style={{ display: "block", margin: "10px 0" }}
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              placeholder="Contenido"
              style={{ display: "block", margin: "10px 0" }}
            />
            <input
              type="text"
              value={editedBanner}
              onChange={(e) => setEditedBanner(e.target.value)}
              placeholder="Link de la imagen"
              style={{ display: "block", margin: "10px 0" }}
            />
            <button
              onClick={handleSaveEdit}
              style={{
                display: "block",
                margin: "10px 0",
                backgroundColor: "#4CAF50",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Guardar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleStartEditing}
              style={{
                position: "absolute",
                top: "10px",
                left: "80px",
                backgroundColor: "orange",
                padding: "5px",
                color: "white",
              }}
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(post.id)}
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "red",
                padding: "5px",
                color: "white",
              }}
            >
              Eliminar
            </button>
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "2px",
                  backgroundColor: "black",
                  transform: "rotate(45deg)",
                  position: "relative",
                  top: "9px",
                }}
              ></span>
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "2px",
                  backgroundColor: "black",
                  transform: "rotate(-45deg)",
                  position: "relative",
                  top: "7px",
                }}
              ></span>
            </button>
            <h2 style={{ textAlign: "center", marginTop: "40px" }}>
              {post.title}
            </h2>
            {post.banner && (
              <img
                src={post.banner}
                alt="Banner"
                style={{ maxWidth: "100%", display: "block", margin: "auto" }}
              />
            )}
            <p style={{ marginTop: "20px" }}>{post.content}</p>
          </>
        )}
      </div>
    </div>
  );
};
