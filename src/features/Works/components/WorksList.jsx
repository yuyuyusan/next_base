import styles from './WorksList.module.css';
import Image from 'next/image';

const WorksList = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {/* {props.works.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <figure>
              {item.image ? (
                <a href={`/works/${item.id}`}>
                  <img src={item.image.url} alt={item.title} />
                </a>
              ) : (
                <a href={`/works/${item.id}`}>
                  <Image
                    src="/noimage.jpg"
                    alt="noimage"
                    width={1920}
                    height={900}
                    priority={true}
                  />
                </a>
              )}
            </figure>
            <h3>
              <a href={`/works/${item.id}`}>{item.title}</a>
            </h3>
            <p>{item.detail}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default WorksList;