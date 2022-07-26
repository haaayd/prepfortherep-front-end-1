import { Link } from "react-router-dom"

const PostCard = ({card}) => {
  return (  
    <>
      <div className="card">
          <div className="card-body">
            <Link to={"/cards"}>
            <h2>{card.title}</h2>
            </Link>

          </div>
      </div>
    
    </>
  );
}

export default PostCard;