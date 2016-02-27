var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);

var fs       = require('fs');
var layout   = require("./layoutdb/DADOS_ENEM_1999");

var file     = "DADOS_ENEM_1999.TXT";// process.argv[2];
var fd       = fs.openSync(file,'rs');
var buffer   = new Buffer(478);
var read     = 0;

function lineinsert(line){
  var n = 0;
  var data = {}
  for(var attr in layout.columns){
    console.log(attr)
    data[attr]=line.substring(n,n+=layout.columns[attr])
  }
  return knex("DADOS_ENEM_1999").insert(data).then(function(ret){
    return ret;
  });
}

function lineread(){
  if(read = fs.readSync(fd,buffer,0,buffer.length)){
    lineinsert(buffer.toString()).then(function(ret){
      lineread();
    });
  }else{
    console.log("Import concluído");
    process.exit(0);
  }
}

console.log("Iniciando importação de "+file);
lineread();
