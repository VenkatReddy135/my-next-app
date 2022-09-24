import Head from "next/head";
import ArticleList from "../Components/ArticleList/ArticleList";
export default function Home(props) {
  const { articles } = props;
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8"
  );
  const articles = await data.json();

  return {
    props: {
      articles: articles,
    },
  };
};
