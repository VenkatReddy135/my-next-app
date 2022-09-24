import React from "react";
import Link from "next/link";
import styles from "../ArticleList/ArticleList.module.css";
const ArticleItem = ({ article }) => {
  console.log(article.id);
  console.log(article);
  return (
    <Link href={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
