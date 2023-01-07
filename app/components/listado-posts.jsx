import Post from './post';

const ListadoPosts = ({posts}) => {
  return (
    <>
        <h1 className="heading">Blog</h1>
        <div className="blog">
            {
            posts.map( post => (
                <Post 
                key={post.id} 
                post={post.attributes} 
                />
            ))
            }
        </div>
    </>
  )
}

export default ListadoPosts