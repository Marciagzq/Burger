var orm = require("../config/orm.js");

module.exports = function(app) {

app.get("/", function(req, res) {
      orm.selectAll("burgers", function(dbBurgers) {
        var hbsObject = {burgers: dbBurgers}
        res.render("index", hbsObject)
      })
    //   console.log(res);
  });

  app.post("/api/burgers", function(req, res) {
        orm.insertOne(req.body.burger, function(dbBurgers) {
            res.redirect("/");
        })
        // console.log(res)
});

app.put("/api/burgers/:id", function(req, res) {
  var set = "id = " + req.body.devoured;
  var where = req.body;
  console.log(set);
  console.log(where);
  orm.updateOne(set, where, function(dbBurgers) {

      res.redirect("/");
    })

})

};

