import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";
import _ from "lodash";

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <ul>
        {props.posts.map(function (post, idx) {
          console.log(props);
          return (
            <li key={idx}>
              <Link href={"/posts/" + post.slug}>
                <h1>
                  <a>{post.title}</a>
                </h1>
              </Link>
              <p>{post.des.substr(0, 110)}...</p>
              <span>{post.date.replace(/\//g, "-")}</span>
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: _.sortBy(allPosts, "date").reverse(),
      title: config.title,
      description: config.description,
    },
  };
}
