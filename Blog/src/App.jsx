const App = () => {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false);
  const [currentPost, setCurrentPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:3000/blogs");
        if (!response.ok) {
          throw new Error("Algo salió mal al cargar los posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.toString());
      } setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fetchPosts();
  }, []);

  const handleAddPost = async (post) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error("Error al crear el post");
      }
      const newPost = await response.json();
      setPosts([...posts, newPost]);
      setIsFormModalOpen(false);
    } catch (error) {
      console.error("Error al crear el post:", error);
      setError(error.toString());
    }
  };

  const handleAddPostClick = () => {
    setIsFormModalOpen(true);
  };

  const handleReadMore = (post) => {
    console.log("Leer más clickeado", post);
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const deletePost = async (postId) => {
    if (window.confirm("¿Estás seguro de querer eliminar este post?")) {
      try {
        const response = await fetch(`http://127.0.0.1:3000/blogs/${postId}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar el post");
        setPosts(posts.filter((post) => post.id !== postId));
        onClose();
      } catch (error) {
        console.error("Error al eliminar el post:", error);
      }
    }
  };

  const editPost = async (postId, editedTitle, editedContent, editedBanner) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/blogs/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editedTitle,
          content: editedContent,
          banner: editedBanner,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el post");
      }
      // Se espera que la API devuelva el post actualizado
      const updatedPost = await response.json();

      // Actualiza el array de posts con el post actualizado
      setPosts(posts.map((post) => (post.id === postId ? updatedPost : post)));

      // Cierra el modal de edición
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al actualizar el post:", error);
    }
  };

  return (
    <div
      style={{
        margin: "0 auto",
        color: "#fff",
        backgroundColor: "#3aafa9",
      }}
    >
      <Header />
      <Banner
        imageUrl="https://motionbgs.com/media/2005/lionel-messi-fifa-2023.jpg"
        onAddPostClick={handleAddPostClick}
      />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <PostList posts={posts} onReadMore={handleReadMore} />
      )}
      <ModalForm
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleAddPost}
      />
      {currentPost && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          post={currentPost}
          onEdit={editPost}
          onDelete={deletePost}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
