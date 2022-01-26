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
                url
                logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          contents {
            data {
              attributes {
                name
                richtext
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_PAGE_DATA };
