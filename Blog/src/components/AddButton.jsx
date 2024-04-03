function AddButton ({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#17252a',
        background: '#def2f1',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        outline: 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        fontWeight: '600'
      }}
    >
      Agrega tu Publicación
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired, 
};