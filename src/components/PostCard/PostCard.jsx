const PostCard = ({card}) => {
  return (  
    <>
      <div className="card">
          <div className="card-body">
            <h1>Title:
              {card.title}</h1>
            <p>Term:
              {card.term}</p>
            <p>DefinitIon:
              {card.definition}</p>
            {/* <p>Mastered:
              {card.m = true ? 'checked' : false } </p> */}

          </div>
          <div className="d-btn">
            <button className="del">
              X
            </button>

          </div>
      </div>
    
    </>
  );
}

export default PostCard;