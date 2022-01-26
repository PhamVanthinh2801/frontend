import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_PAGE_DATA } from "@/graphql/queries";
import Layout from "@/components/sections/Layout";
import "react-multi-carousel/lib/styles.css";

const Vechungtoi = ({ global }) => {
  const contents = global.contents.data[0].attributes;
  console.log("richtext", contents);
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{
          __html: contents.richtext.replace(
            new RegExp("/uploads", "g"),
            "https://bevietka2.herokuapp.com/uploads"
          ),
        }}
      />
    </Layout>
  );
};
export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({ query: GET_PAGE_DATA });

  return {
    props: {
      global: data.pages.data[0].attributes,
    },
  };
};

export default Vechungtoi;
