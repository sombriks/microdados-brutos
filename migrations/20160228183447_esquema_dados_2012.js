
var layout1 = require("../layoutdb/DADOS_ENEM_2012");
var layout2 = require("../layoutdb/QUESTIONARIO_ENEM_2012");
var layout3 = require("../layoutdb/ITENS_ENEM_2012");

exports.up = function(knex, Promise) {
  return knex.schema.createTable("DADOS_ENEM_2012",function(table){
    for(var attr in layout1.columns){
      table.string(attr,layout1.columns[attr]);
    }
    table.primary(layout1.key);
  }).createTable("QUESTIONARIO_ENEM_2012",function(table){
    for(var attr in layout2.columns){
      table.string(attr,layout2.columns[attr]);
    }
    table.primary(layout2.key);
  }).createTable("ITENS_ENEM_2012",function(table){
    for(var attr in layout3.columns){
      table.string(attr,layout3.columns[attr]);
    }
    table.primary(layout3.key);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("DADOS_ENEM_2012")
    .dropTable("QUESTIONARIO_ENEM_2012")
    .dropTable("ITENS_ENEM_2012");
};
