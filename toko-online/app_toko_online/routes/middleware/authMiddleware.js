exports.adminOnly = (req, res, next) => {
  const isAdmin = req.body.isAdmin; // contoh: (
  // "isAdmin": true)
  if (isAdmin === true) {
    console.log("Middleware: Akses Admin Diberikan.");
    next(); //lanjutkan
  } else {
    // 403 forbidden
    return res.status(403).json({
      success: false,
      message: "Akses Otodiak. Endpoint ini membutuhkan hak Admin.",
    });
  }
};
