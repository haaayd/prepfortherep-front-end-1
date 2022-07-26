const PostCard = ({card}) => {
  return (  
    <>
      <div className="card">
          <div className="card-body">
            <h2>{card.title}</h2>

          </div>
      </div>
    
    </>
  );
}

export default PostCard;