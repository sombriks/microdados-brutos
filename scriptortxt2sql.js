var fs       = require('fs');
var readline = require('readline');
var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);

var target   = process.argv[2]

if(!target){
  console.log("Usage: node scriptortxt2sql <TABLE_NAME>");
  process.exit(1);
}

var layout   = require("./layoutdb/"+target);

var file     = target+".TXT";

function renderinsert(line){
  var n = 0;
  var data = {}
  for(var attr in layout.columns){
    data[attr]=line.substring(n,n+=layout.columns[attr])
  }
  return knex(target).insert(data).toString();
}

var rl = readline.createInterface({
  input:fs.createReadStream(file),
  terminal:false,
  historySize:0,
});

var lc = 0;
rl.on("line",function(line){
  fs.appendFile(target+".sql",renderinsert(line)+";\r\n");
  lc++;
  if(lc % 10000 == 0)
    console.log("wrote "+lc+" inserts into "+target+".sql at "+(new Date()));
});
// psql -h localhost -U postgres -W microdadosenem2 < DADOS_ENEM_2014.sql
