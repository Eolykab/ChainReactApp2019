import gql from "graphql-tag"

export default gql`
  query GetLink($id: ID!) {
    getLinks(id: $id) {
      id
      facebook
      twitter
      medium
      github
      dribbble
      instagram
      websites
    }
  }
`
