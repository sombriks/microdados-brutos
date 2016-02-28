var fs       = require('fs');
var readline = require('readline');
var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);
var layout1  = require("./layoutdb/DADOS_ENEM_2009");
var layout2  = require("./layoutdb/QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2009");

var file1     = "DADOS_ENEM_2009.TXT";
var file2     = "QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2009.TXT";

function renderinsert1(line){
  var n = 0;
  var data = {}
  for(var attr in layout1.columns){
    data[attr]=line.substring(n,n+=layout1.columns[attr])
  }
  return knex("DADOS_ENEM_2009").insert(data).toString();
}

var rl1 = readline.createInterface({
  input:fs.createReadStream(file1),
  terminal:false,
  historySize:0,
});

var lc1 = 0;
rl1.on("line",function(line){
  fs.appendFile("DADOS_ENEM_2009.sql",renderinsert1(line)+";\r\n");
  lc1++;
  if(lc1 % 10000 == 0)
    console.log("wrote "+lc1+" inserts on DADOS_ENEM_2009 at "+(new Date()));
});
// psql -h localhost -U postgres -W microdadosenem2 < DADOS_ENEM_2009.sql

function renderinsert2(line){
  var n = 0;
  var data = {}
  for(var attr in layout2.columns){
    data[attr]=line.substring(n,n+=layout2.columns[attr])
  }
  return knex("QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2009").insert(data).toString();
}

var rl2 = readline.createInterface({
  input:fs.createReadStream(file2),
  terminal:false,
  historySize:0,
});

var lc2 = 0;
rl2.on("line",function(line){
  fs.appendFile("QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2009.sql",renderinsert1(line)+";\r\n");
  lc2++;
  if(lc2 % 10000 == 0)
    console.log("wrote "+lc2+" inserts on QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2009 at "+(new Date()));
});
// psql -h localhost -U postgres -W microdadosenem2 < QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2009.sql
