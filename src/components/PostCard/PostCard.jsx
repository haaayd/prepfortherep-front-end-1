import styles from './PostCard.module.css'

const PostCard = ({card}) => {
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
              {card.m = true ? '' : false } </p> */}

          </div>
      </div>
    </div>
    </>
  );
}

export default PostCard;