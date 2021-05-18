const { GET_LINKS } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formatedResponse = require("./utils/formatedResponse");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data;
    return formatedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatedResponse(500, {
      err: "Something went wrong from getLinks",
    });
  }
};
