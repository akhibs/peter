const data = require("./../data.json");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

exports.handshake = (req, res) => {
  console.log("shaked");
  res.status(200);
};

exports.addDetails = (req, res) => {
  
  let reqBody = {};
  let imageName = "";

  //==========================================

  const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
      imageName =
        file.fieldname + "-" + Date.now() + path.extname(file.originalname);
      cb(null, imageName);
    },
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 9000000 },
    fileFilter: (req, file, cb) => {
      checkFileType(file, cb);
    },
  }).single("image");

  function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images only!");
    }
  }

  upload(req, res, (err) => {
    reqBody = JSON.parse(req.body.json);

    console.log(imageName);
    if (err) {
      console.log("error in upload ooo");
    } else {
      if (req.file === undefined) {
        console.log("undefined ooo");
      } else {
        const dataSignature = {
          trackingNo: reqBody.trackingNo,
          idNo: reqBody.idNo,
          regNo: reqBody.regNo,
          shipperInfo: {
            company: reqBody.company,
            companyDescription: reqBody.companyDescription,
            companyAddress: reqBody.companyAddress,
            companyEmail: reqBody.companyEmail,
          },
          recieverInfo: {
            name: reqBody.name,
            address: reqBody.address,
            email: reqBody.email,
          },
          shipmentInfo: {
            origin: reqBody.origin,
            destination: reqBody.destination,
            shipmentMode: reqBody.shipmentMode,
            depatureDate: reqBody.depatureDate,
            expectedDeliveryDate: reqBody.deliveryDate,
            comment: reqBody.comment,
          },
          packages: {
            quantity: reqBody.quantity,
            content: reqBody.content,
            weight: reqBody.weight,
          },
          shipmentStatus: reqBody.shipmentStatus,
          shipmentHistory: {
            origin: reqBody.origin,
            depatureDate: reqBody.depatureDate,
            currentLocation: reqBody.currentLocation,
            arrivalDate: reqBody.arrivalDate,
            destination: reqBody.destination,
            expectedDeliveryDate: reqBody.deliveryDate,
          },
          image: imageName,
        };

        const newData = data;
        newData.push(dataSignature);

        const stringedData = JSON.stringify(newData, null, 2);

        const filePath1 = path.join(__dirname, "..", "data.json");

        fs.writeFile(filePath1, stringedData, (err) => {
          if (err) {
            console.log("error writinf dile");
          } else {
            console.log("succes");
          }
        });
        console.log("package added");
        res.status(200).json({status:"good"});

        
      }
    }
  });
  

};

//=================================================
exports.editDetails = (req, res) => {
  let status = "notFound";

  const updatedData = data.map((e) => {
    if (e.trackingNo === req.body.trackingNo) {
      e.shipmentStatus = req.body.shipmentStatus;
      e.shipmentHistory.currentLocation = req.body.currentLocation;
      status = "good";
    }
    return e;
  });

  const stringedData = JSON.stringify(updatedData, null, 2);

  const filePath2 = path.join(__dirname, "..", "data.json");

  fs.writeFile(filePath2, stringedData, (err) => {
    if (err) {
      console.log("error writinf dile");
    } else {
      console.log("succes");
    }
  });

  res.status(200).json({
    status,
  });
};

exports.idSearch = (req, res) => {
  const foundData = data.filter(
    (e) => e.trackingNo === req.body.searchBarValue
  );

  console.log(foundData);
  res.status(200).json({
    status: "good",
    foundData,
  });
};

exports.getImage = (req, res) => {
  const fileName = data.filter((e) => e.trackingNo === req.params.id);

  const filePath = path.join(__dirname, "..", "uploads", fileName[0].image);

  console.log(filePath);
  res.sendFile(filePath);
};

exports.test = (req, res) => {
  console.log("active");

  res.status(200).send("good");
};
