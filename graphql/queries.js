import { gql } from "@apollo/client";
const GET_PAGE_DATA = gql`
  query {
    pages {
      data {
        attributes {
          picture_managers {
            data {
              attributes {
                name
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          project_managers {
            data {
              attributes {
                name
                number
                link
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_PAGE_DATA };
