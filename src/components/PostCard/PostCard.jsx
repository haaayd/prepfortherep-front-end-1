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
              {card.m = true ? '' : false } </p> */}

          </div>
      </div>
    
    </>
  );
}

export default PostCard;