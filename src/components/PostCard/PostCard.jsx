const PostCard = (props) => {
  return (  
    <>
      <div className="card">
          <div className="card-body">
            <h2>{props.card.title}</h2>

          </div>
      </div>
    
    </>
  );
}

export default PostCard;