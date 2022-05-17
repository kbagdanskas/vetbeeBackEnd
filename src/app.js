const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/v1/users");
const { port } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

const pets = [
  {
    name: "Levis",
    year: "2001-12-25",
    email: "karolis@karolis.lt",
  },
  {
    name: "Levis",
    year: "2001-12-25",
    email: "karolis@karolis.lt",
  },
  {
    name: "Levis",
    year: "2001-12-25",
    email: "karolis@karolis.lt",
  },
  {
    name: "Levis",
    year: "2001-12-25",
    email: "karolis@karolis.lt",
  },
];
const meds = [
  {
    name: "Huberium Celliulitus",
    desc: "Description",
    year: "2016-01-01",
  },
  {
    name: "Tick Vaccine",
    desc: "Description",
    year: "2016-01-01",
  },
  {
    name: "Tick Vaccine",
    desc: "Description",
    year: "2015-01-01",
  },
  {
    name: "Tick Vaccine",
    desc: "Description",
    year: "2015-01-01",
  },
];

app.get("/pet", (req, res) => {
  res.send(pets);
});
app.get("/med", (req, res) => {
  res.send(meds);
});

app.post("/pet", (req, res) => {
  if (req.body.name && req.body.year && req.body.email) {
    pets.push({
      name: req.body.name,
      year: req.body.year,
      email: req.body.email,
    });
    res.send({ msg: "Successfully added a pet" });
  } else {
    res.status(400).send({ err: "Error, data incorrect" });
  }
});
app.post("/med", (req, res) => {
  if (req.body.name && req.body.desc && req.body.year) {
    meds.push({
      name: req.body.name,
      desc: req.body.desc,
      year: req.body.year,
    });
    res.send({ msg: "Successfully added a med" });
  } else {
    res.status(400).send({ err: "Error, data incorrect" });
  }
});

const usersRoute = require("./routes/v1/users");

app.use(`/v1/users/`, usersRoute);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
