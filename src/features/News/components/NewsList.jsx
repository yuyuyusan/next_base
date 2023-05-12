import styles from './NewsList.module.css';

const NewsList = (props) => {
  return (
    <>
      {/* {!!props.news.length && (
        <ul className={styles.list}>
          {props.news.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <a href={`/news/${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
};
export default NewsList;
