import styles from "./SearchResult.module.css";

const SearchResult = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <ul>
        {data.map((d) => {
          return <li key={d.id}>{d.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
