import gql from "graphql-tag"

export default gql`
  query GetSpeaker($id: ID!) {
    getSpeaker(id: $id) {
      id
      name
      bio
      employer
      links {
        id
        facebook
        twitter
        medium
        github
        instagram
        dribbble
        websites
      }
      image
    }
  }
`
