const { CREATE_LINKS } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formatedResponse = require("./utils/formatedResponse");

exports.handler = async (event) => {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };
  try {
    const { createLink: createdLink } = await sendQuery(
      CREATE_LINKS,
      variables
    );

    return formatedResponse(200, createdLink);
  } catch (err) {
    console.error(err);
    return formatedResponse(500, {
      err: "Something went wrong from getLinks",
    });
  }
};
