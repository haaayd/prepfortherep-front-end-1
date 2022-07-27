import styles from './PostCard.module.css'
const PostCard = ({card, handleDeleteCard, user}) => {
  return (  
    <>
    <div className={styles.cardContainer}>
      <div className={styles.wrapper}>
          <div className={styles.card}>
            <h1>Title:
              {card.title}</h1>
            <p>Term:
              {card.term}</p>
            <p>DefinitIon:
              {card.definition}</p>
            {/* <p>Mastered:
              {card.m = true ? 'checked' : false } </p> */}

          </div>
          {user?.profile === card.owner?._id &&

          <div className="d-btn">
            <button 
              className="del"
              onClick={() => handleDeleteCard(card._id)}
              >
              X
            </button>

          </div>
          }
      </div>
    </div>
    </>
  );
}

export default PostCard;