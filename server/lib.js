const rateLimit = require("express-rate-limit");

//Other imports above

const limiter = rateLimit({
  windowMs: 900000, //15 min
  max: 5, //login attempts
  message: "Rate limit exceeded, please wait 15 minutes and try again!",
});

const postLimiter = rateLimit({
  windowMs: 300000, //15 min
  max: 20, //login attempts
  message: "Rate limit exceeded, please wait 15 minutes and try again!",
});

const getLimiter = rateLimit({
  windowMs: 300000, //5 min
  max: 250, //attempts
  message: "Rate limit exceeded, please wait 5 minutes and try again!",
});

module.exports = {
  limiter,
  postLimiter,
  getLimiter,
};
