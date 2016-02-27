var fs       = require('fs');
var readline = require('readline');

var file = process.argv[2];
if(!file){
  console.log("Usage: node slicer.js <ARQUIVO>");
  process.exit(1);
}

var dir = file+"_SLICED";
//fs.rmdirSync(dir);
fs.mkdirSync(dir);

var rl = readline.createInterface({
  input:fs.createReadStream(file),
  terminal:false,
  historySize:0,
});

var i = 0;
var j = 1;
rl.on("line",function(line){
  i++;
  if(i==5000){
    j++;
    i = 0;
  }
  fs.appendFile(dir+"/"+file+"_"+j+".TXT",line+"\r\n");
});
