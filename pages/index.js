import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_PAGE_DATA } from "@/graphql/queries";
import Layout from "@/components/sections/Layout";
import ReactPlayer from "react-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fetchdata from "@/graphql/fetchdata";

const Home = ({ global }) => {
  // const picture = global.picture_managers;
  // const project = global.project_managers;
  const listpic = fetchdata.pictures;
  const listlogo = fetchdata.logo;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 956 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 956, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <Layout>
      <ReactPlayer
        url='https://youtu.be/q60dz7KftKc'
        width='100%'
        height='640px'
        playing={true}
        style={{ marginTop: "20px" }}
      />
      <div
        style={{
          marginTop: "40px",
        }}
      >
        <p className='text-[#000000] text-center text-2xl font-medium pb-2 cursor-pointer hover:text-red-700 text-left pr-5 pl-5'>
          Một số hình ảnh thực hiện chương trình:
        </p>

        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots
          ssr={true}
          infinite={true}
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition='all 2s'
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          transitionDuration={1000}
        >
          {listpic.map((Url, index) => (
            <div
              key={index}
              className='flex items-center justify-center '
              style={{
                margin: "auto",
                width: "325px",
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundImage:
                  "url(https://res.cloudinary.com/hiname/image/upload/v1642915643/film_lpxspf.png)",
              }}
            >
              <img
                src={`${Url}`}
                style={{
                  width: "305px",
                  height: "213px",
                  borderRadius: "16px",
                  marginTop: "-6%",
                  marginLeft: "2px",
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/* this update2  */}
      <div className='grid grid-cols-1 gap-1 md:grid-cols-1'>
        <div className='mt-12'>
          <div className='mb-0'>
            <p className='text-[#000000] text-center text-2xl font-medium pb-2 cursor-pointer hover:text-red-700 text-left pr-5 pl-5'>
              Đối tác của Viêt KA TV:
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            {listlogo.project.map((proj) => (
              <div
                key={proj.url}
                className='w-36 h-36 rounded-lg bg-[#ffffff] border-2 border-[#DC143C] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 m-2'
              >
                <a href={`${proj.link}`}>
                  <img
                    src={`${proj.url}`}
                    className='h-3/4 p-1 w-full rounded-lg '
                  />
                  <p className='text-center text-[black] text-lg font-medium cursor-pointer'>
                    {proj.number} dự án
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
//testing connetc image to server update
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

export default Home;
