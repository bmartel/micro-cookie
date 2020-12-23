const { parse } = require("cookie");

module.exports = (handler) => (req, res) => {
  if (req.headers && req.headers.cookie) {
    try {
      req.cookies = parse(req.headers.cookie);
    } catch (err) {
      req.cookies = {};
      console.warn("Could not parse cookie", req.headers.cookie);
      console.error(err);
    }
  } else {
    req.cookies = {};
  }

  return handler(req, res);
};
