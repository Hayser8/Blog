// Componente PostList
function PostList ({ posts, onReadMore })  {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          banner={post.banner}
          onReadMoreClick={() => onReadMore(post)}
        />
      ))}
    </div>
  );
};

// PropTypes para PostList
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      banner: PropTypes.string,
    })
  ).isRequired,
};
