import React from "react";
import styles from "../../../Components/ArticleList/ArticleList.module.css";
import Link from "next/link";
// import { useRouter } from "next/router";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  //   console.log(router.query);
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>This is article {article.id}</h3>
          <p>{article.title}</p>
        </div>
      </div>
      <br></br>
      <span className="title">
        <Link href="/">Go back</Link>
      </span>
      <style jsx>
        {`
          .title:hover,
          title:focus,
          title:active {
            color: #0070f3;
            padding: 0.5rem;
            border: 1px solid #0070f3;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
        `}
      </style>
    </>
  );
};
export default article;

//////////    Either use this only one getServerSideProps  ///////////

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       article: data,
//     },
//   };
// };

//////////    else use both of these two getStaticProps,getStaticPaths  ///////////

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      article: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
