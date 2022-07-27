
import PostCard from "../../components/PostCard/PostCard";

function Cards (props)  {
    return (
        <>
        <h1>Post Cards</h1>
        <div className="card-info">
        {props.cards.map(card =>
            <PostCard 
            key={card._id} 
            card={card} />
        )}

        </div>
        </>

    )
}

export default Cards;