const config = require('../config/config.js');

module.export = isAdmin = (req, res, next) => {
  try {
    console.log("estoy en el middleware de roles!!!");
    // const { roluser } = req.user;
    // if (roluser !== config.ROLE_ADMIN) return res.status(403).json({ msg: "requires admin 😭" });
    next();
    return;
  } catch (error) {
    console.log("Error verificando admin! xdxd");
    throw new Error(error);
  }
}

