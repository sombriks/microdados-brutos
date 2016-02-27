var fs       = require('fs');
var readline = require('readline');
var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);
var layout   = require("./layoutdb/DADOS_ENEM_1999");

var file = "DADOS_ENEM_1999.TXT";

function renderinsert(line){
  var n = 0;
  var data = {}
  for(var attr in layout.columns){
    data[attr]=line.substring(n,n+=layout.columns[attr])
  }
  return knex("DADOS_ENEM_1999").insert(data).toString();
}

var rl = readline.createInterface({
  input:fs.createReadStream(file),
  terminal:false,
  historySize:0,
});

var lc = 0;
rl.on("line",function(line){
  fs.appendFile("DADOS_ENEM_1999.sql",renderinsert(line)+";\r\n");
  lc++;
  if(lc % 10000 == 0)
    console.log("wrote "+lc+" inserts at "+(new Date()));
});
// psql -h localhost -U postgres -W microdadosenem2 < DADOS_ENEM_1999.sql
