var fs       = require('fs');
var readline = require('readline');
var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);
var layout   = require("./layoutdb/DADOS_ENEM_1998");

var file = "DADOS_ENEM_1998.TXT";

function renderinsert(line){
  var n = 0;
  var data = {}
  for(var attr in layout.columns){
    data[attr]=line.substring(n,n+=layout.columns[attr])
  }
  return knex("DADOS_ENEM_1998").insert(data).toString();
}

var rl = readline.createInterface({
  input:fs.createReadStream(file),
  terminal:false,
  historySize:0,
});

rl.on("line",function(line){
  fs.appendFile("DADOS_ENEM_1998.sql",renderinsert(line)+"\r\n");
});
