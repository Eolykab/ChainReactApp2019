import gql from "graphql-tag"

export default gql`
  query GetTalk($id: ID!) {
    getTalk(id: $id) {
      id
      title
      description
      startTime
      endTime
      location
      sponsor
      menuItems
      rsvpWebsite
      speakers {
        id
        name
        employer
        bio
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
      }
    }
  }
`
