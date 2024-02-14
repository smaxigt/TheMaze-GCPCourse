const functions = require("@google-cloud/functions-framework");

const HelloWorld = async (req, res) => {
  res.status(200).send(`Hello World`);
};

// Use the correct function name when registering the Cloud Function
functions.http("HelloWorld", HelloWorld);

// Export the function
exports.HelloWorld = HelloWorld;
