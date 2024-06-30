exports.greet = (req, res) => {
  const visitor = req.query["visitor_name"];

  if (!visitor) {
    return res.status(400).json({
      status: "fail",
      message:
        "Let's get to know you visitor. Kindly enter your name as a query",
    });
  }
  console.log(visitor);
  res.status(200).json({
    ip: req.ip,
  });
};
