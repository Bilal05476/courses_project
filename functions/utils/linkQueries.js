const GET_LINKS = `
query{
    allLinks{
        data{
        name
        email
        _id
        current
        future
        }
    }
}`;

// const CREATE_LINKS = `
// mutation($name: String!, $url: String!, $description: String!){
//   createLink(data: {name: $name, url: $url, description: $description, archived: false})
//   {
//     name
//     url
//     _id
//     description
//     archived
//   }
// }`;

const UPDATE_LINK = `
  mutation($id: ID!, $email: String!, $name: String!, $current: String!, $future: String!  ) {
        updateLink( id: $id, data: { name: $name, email: $email, current: $current, future: $future }) {
            name
            _id
            email
            current
            future
        }
    }
`;

// const DELETE_LINK = `
//   mutation($id: ID!) {
//         deleteLink( id: $id) {
//             _id
//         }
//     }
// `;

module.exports = {
  GET_LINKS,
  UPDATE_LINK,
};
