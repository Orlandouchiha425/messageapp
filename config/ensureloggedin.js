module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next();
  };

  //this function just checks if user is logged in , if user is not logged in , we will get a unauthorized error