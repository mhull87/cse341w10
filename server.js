const {
  Pool
} = require('pg');
require('dotenv').config();
const express = require('express');
const { res } = require('express');
const app = express();

//const connectionString = "postgres://familyhistoryuser:pass@localhost:5432/familyhistory";

const connectionString = process.env.DATABASE_URL || "postgres://familyhistoryuser:pass@localhost:5432/familyhistory";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs

const pool = new Pool({
  connectionString: connectionString
});

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function () {
  console.log("Now listening for connections on port: ", app.get("port"));
});

app.get("/getPerson", getPerson);

function getPerson(req, res) {
  console.log("Getting person information.");

  var id = req.query.id;
  console.log("Retrieving person with id: ", id);

  getPersonFromDb(id, function(err, result) {
    console.log("Back from the getPersonFromDB function with result: ", result);
    if (err || result == null || result.length !=1) {
      res.status(500).json({success:false, data: err});
    } else {
      res.json(result[0]);
    }
  });
}  

function getPersonFromDb(id, callback) {
var sql = "SELECT * FROM person WHERE id = $1::int";
var params = [id];

  pool.query(sql, params, function (err, result) {
    //If an error occurred...
    if (err) {
      console.log("Error in query: ")
      console.log(err);
      callback(err, null);
    }
    // Log this to the consol for debugging purposes.
    console.log("Back from DB result: " + JSON.stringify(result.rows));
    callback(null, result.rows);
  });
}