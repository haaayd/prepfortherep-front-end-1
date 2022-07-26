import PostCard from "../../components/PostCard/PostCard";

const  Cards = (props) => {
    return (
        <>
        <h1>Post Cards</h1>
        {props.cards.map(card =>
            <PostCard key={card._id} card={card} />
        )}
        </>

    );
}

export default Cards;