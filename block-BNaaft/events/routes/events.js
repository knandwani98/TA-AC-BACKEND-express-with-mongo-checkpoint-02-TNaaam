var express = require("express");
var router = express.Router();

/* All Events Page. */
router.get("/", function (req, res, next) {
  res.render("allEvents", {});
});

// create event page
router.get("/new", (req, res, next) => {
  res.render("createEvent", {});
});

router.post("/", (req, res, next) => {
  var data = req.body;
  console.log(data);
});

module.exports = router;

{
  /* <ul>
<% events.forEach(()=> { %>
<li><%= event.title %></li>
<% }) %>
</ul> */
}
