import PostCard from "../../components/PostCard/PostCard";

function Cards (props)  {
    return (
        <>
        <div className="card-info">
        <h1>Post Cards</h1>
        {props.cards.map(card =>
            <PostCard key={card._id} card={card} />
        )}

        </div>
        </>

    )
}

export default Cards;