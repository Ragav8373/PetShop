module.exports = function (req, res, next) {
  // assuming auth middleware already ran
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access denied" });
  }
  next();
};
