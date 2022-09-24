import styles from "../ArticleList/ArticleList.module.css";
import ArticleItem from "../ArticleItem/ArticleItem";
const ArticleList = ({ articles }) => {
  console.log(articles, "venkat");
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
