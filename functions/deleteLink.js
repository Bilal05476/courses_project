const { DELETE_LINK } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");
const formatedResponse = require("./utils/formatedResponse");
exports.handler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    return formatedResponse(405, { err: "Method not supported" });
  }
  const { id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);

    return formatedResponse(200, deletedLink);
  } catch (err) {
    console.error(err);
    return formatedResponse(500, { err: "Something went wrong" });
  }
};
