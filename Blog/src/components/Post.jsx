const PropTypes = window.PropTypes;

function Post ({ id, title, content, banner, onReadMoreClick })  {
  const postUrl = `/posts/${id}`;

  return (
    <div
      style={{
        width: "23%",
        margin: "1%",
        float: "left",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #2b7a78",
        borderRadius: "5px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#2b7a78",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        color: "#f1f1f1",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        {banner && (
          <img
            src={banner}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="Banner"
          />
        )}
        <p>{content}</p>
      </div>
      <button
        onClick={() => onReadMoreClick()}
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          color: "#feffff",
          backgroundColor: "#17252a",
          borderRadius: "5px",
          textDecoration: "none",
          border: "1px solid #17252a",
          textAlign: "center",
          alignSelf: "center",
          marginTop: "10px",
        }}
      >
        Leer más
      </button>
    </div>
  );
};

// PropTypes para Post
Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  banner: PropTypes.string,
};
