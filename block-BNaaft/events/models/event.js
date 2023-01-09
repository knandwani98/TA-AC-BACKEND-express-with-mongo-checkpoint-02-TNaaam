var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: String,
  summary: String,
  host: String,
  stat_date: Date,
  end_date: Date,
  event_category: [String],
});

module.exports = mongoose.model("Event", eventSchema);
