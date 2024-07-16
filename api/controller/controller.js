const data = require("./../data.json");
const fs = require("fs");

exports.handshake = (req, res) => {
  console.log("shaked");
  res.status(200);
};

exports.addDetails = (req, res) => {
  console.log(req.body);

  const newData = data;

  newData.push(req.body);

  const stringedData = JSON.stringify(newData, null, 2);

  fs.writeFile("data.json", stringedData, (err) => {
    if (err) {
      console.log("error writinf dile");
    } else {
      console.log("succes");
    }
  });
  console.log(console.log(stringedData));

  res.status(200).json({
    status: "good",
  });
};

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
