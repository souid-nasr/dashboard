const jwt= require("jsonwebtoken") ;


const generateTokenAdmin = (admin) => {
  return jwt.sign(
    {
      _id: admin._id,
      email: admin.email,
      role: admin.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
const generateToken = (user) => {
  const payload = {
    id: user._id,
  };
  return jwt.sign(
    {
payload
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
const isAdmin = (req, res, next) => {
  if (req.user && (req.user.role==="admin")) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};
module.exports = {
  isAdmin,
  isAuth,
  generateToken,
  generateTokenAdmin
};