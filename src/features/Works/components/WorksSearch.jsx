import styles from './WorksSearch.module.css';

const WorksSearch = (props) => {
  return (
    <>
      <div className={styles.search}>
        <p>検索</p>
        <input
          type="text"
          value={props.searchText}
          onChange={(e) => props.setSearchText(e.target.value)}
        />
      </div>
      {/* <p className={styles.results}>
        <span className={styles.num}>{props.filteredWorks.length}</span>
        <span className={styles.jp}>件があります</span>
      </p> */}
    </>
  );
};


export default WorksSearch;