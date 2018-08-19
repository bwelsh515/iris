// server.js

"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");

const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8080;

app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/user/entry", (req, res) => {
  let entries = [
    {
      _id: "000",
      author: "Brian Welsh",
      title: "Seattle Trip",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tellus ultricies ante molestie, ullamcorper suscipit massa feugiat. Aliquam quis felis massa. Morbi vestibulum in urna ac ullamcorper. Aenean lacinia velit nec odio accumsan gravida. Ut placerat sem velit, ut tempor enim congue vitae. Suspendisse eget rutrum diam. In ultrices justo convallis augue ornare, sed cursus libero auctor. Fusce volutpat felis ut est ultrices porta. Praesent turpis elit, tristique ac maximus non, congue vitae leo. Morbi fringilla eget lectus in convallis. Morbi egestas velit nec mauris mollis malesuada."
    },
    {
      _id: "001",
      author: "Brian Welsh",
      title: "Camping Trip",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tellus ultricies ante molestie, ullamcorper suscipit massa feugiat. Aliquam quis felis massa. Morbi vestibulum in urna ac ullamcorper. Aenean lacinia velit nec odio accumsan gravida. Ut placerat sem velit, ut tempor enim congue vitae. Suspendisse eget rutrum diam. In ultrices justo convallis augue ornare, sed cursus libero auctor. Fusce volutpat felis ut est ultrices porta. Praesent turpis elit, tristique ac maximus non, congue vitae leo. Morbi fringilla eget lectus in convallis. Morbi egestas velit nec mauris mollis malesuada."
    },
    {
      _id: "002",
      author: "Brian Welsh",
      title: "End of Pfizer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tellus ultricies ante molestie, ullamcorper suscipit massa feugiat. Aliquam quis felis massa. Morbi vestibulum in urna ac ullamcorper. Aenean lacinia velit nec odio accumsan gravida. Ut placerat sem velit, ut tempor enim congue vitae. Suspendisse eget rutrum diam. In ultrices justo convallis augue ornare, sed cursus libero auctor. Fusce volutpat felis ut est ultrices porta. Praesent turpis elit, tristique ac maximus non, congue vitae leo. Morbi fringilla eget lectus in convallis. Morbi egestas velit nec mauris mollis malesuada."
    },
    {
      _id: "003",
      author: "Brian Welsh",
      title: "Start of Senior Year",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tellus ultricies ante molestie, ullamcorper suscipit massa feugiat. Aliquam quis felis massa. Morbi vestibulum in urna ac ullamcorper. Aenean lacinia velit nec odio accumsan gravida. Ut placerat sem velit, ut tempor enim congue vitae. Suspendisse eget rutrum diam. In ultrices justo convallis augue ornare, sed cursus libero auctor. Fusce volutpat felis ut est ultrices porta. Praesent turpis elit, tristique ac maximus non, congue vitae leo. Morbi fringilla eget lectus in convallis. Morbi egestas velit nec mauris mollis malesuada."
    }
  ];
  res.json(entries);
});

// Routes
// app.use("/user", user);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
