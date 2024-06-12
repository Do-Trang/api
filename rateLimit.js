const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 10, 
  handler: (req, res) => {
    res.status(409).json({ message: "Nhieu request qua! Cuu toi voi" });
  }
});

module.exports = apiLimiter;
