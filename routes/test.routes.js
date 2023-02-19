const router = require("express").Router();
module.exports = (app) => {
  router.get("/", (req, res) => {
    res.sendFile(process.env.DIR);
  });
  router.post("/post", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;

    if (fname == "ELMEHDI" && lname == "LHAROUI") {
      res.send("<p>welcome you are alow to connect</p>");
    } else {
      res.send("<p>you are not alow to connect</p>");
    }
  });

  app.use("/test", router);
};
