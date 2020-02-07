//Worked with Michell on these routes

const db = require("../../models");

const arrayHelpers = {
  get: function() {
    return JSON.parse(this.getDataValue("groceryList"));
  },
  set: function(val) {
    return this.setDataValue("groceryList", JSON.stringify(val));
  }
};

module.exports = {
  postBedroomApi: async function(req, res) {
    const dbBedroom = await db.Bedroom.create(req.body);
    res.json(dbBedroom);
  },
  // GET route for getting all of the bedrooms
  api: function(app) {
    app.get("/api/bedrooms", function(req, res) {
      db.Bedrooms.findAll({}).then(function(Bedrooms) {
        res.json(Bedrooms);
        console.log(Bedrooms);
      });
    });

    // POST route for saving a new post
    app.post("/api/bedrooms", function(req, res) {
      // get the data
      console.log(req.body);
      // req.body.groceries
      // // convert data into string
      const Bedrooms = req.body;
      console.log(Bedrooms);
      // // push into database 
      db.Bedrooms
        .create(
          req.body
        )
        .then(function(Bedrooms) {
          console.log("remove me later lol")
          res.json(Bedrooms);

        });
    });

    // PUT route for updating a bedroom

    app.put("/api/bedrooms/:id", function(req, res) {
      console.log(req.params.id);
      db.Bedrooms
        .update({ reserved: true }, { where: { id: req.params.id } })
        .then(function(Bedrooms) {
          res.json(Bedrooms);
        });
    });

    app.get("/api/groceries", function(req, res) {
      db.groceries.findAll({}).then(function(groceries) {
        res.json(groceries);
        console.log(groceries);
      });
    });

    // POST route for saving a new post
    app.post("/api/groceries", function(req, res) {
      // get the data
      console.log(req.body);
      // req.body.groceries
      // // convert data into string
      const groceries = JSON.stringify(req.body);
      console.log(groceries);
      // // push into database
      db.Groceries
        .create(
          req.body
        )
        .then(function(groceries) {
          res.json(groceries);
        });
    });

    // PUT route for updating a bedroom

    app.put("/api/groceries/:id", function(req, res) {
      console.log(req.params.id);
      db.groceries
        .update({
          where: { id: req.params.id }
        })
        .then(function(groceries) {
          res.json(groceries);
        });
    });
    // Post Route for a new Trip

    app.get("/api/trips", function(req, res) {
      db.Trips.findAll({}).then(function(Trips) {
        res.json(Trips);
        console.log(Trips);
      });
    });

    app.post("/api/trips", function(req, res) {
      console.log(req.body.Trips);
      db.Trips.create(req.body).then(function(Trips) {
        res.json(Trips);
      });
    });

    // PUT route for updating a bedroom

    app.put("/api/trips/:id", function(req, res) {
      console.log(req.params.id);
      db.Trips
        .update({
          where: { id: req.params.id }
        })
        .then(function(Trips) {
          res.json(Trips);
        });
    });
  }
};
