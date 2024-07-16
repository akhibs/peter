const data = require("./../data.json");

exports.idSearch = (req, res) => {
  const foundData = data.map((e) => {
    if (e.trackingNo === req.body.searchBarValue) {
      return e;
    }
  });

  res.status(200).json({
    status: "good",
    foundData,
  });
};

exports.test = (req, res) => {
  console.log(data[0].trackingNo);
  console.log("active");

  res.status(200);
};
