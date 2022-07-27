import PostCard from "../../components/PostCard/PostCard";

function Cards (props)  {
    return (
        <>
        <h1>SEI 5-23</h1>
        <div className="card-info">
        {props.cards.map(card =>
            <PostCard 
            key={card._id} 
            card={card}
            handleDeleteCard={props.handleDeleteCard}
            user={props.user}
            />
        )}

        </div>
        </>

    )
}

export default Cards;