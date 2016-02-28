
var layout1 = require("../layoutdb/DADOS_ENEM_2011");
var layout2 = require("../layoutdb/QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2011");
var layout3 = require("../layoutdb/ITENS_PROVA_2011");

exports.up = function(knex, Promise) {
  return knex.schema.createTable("DADOS_ENEM_2011",function(table){
    for(var attr in layout1.columns){
      table.string(attr,layout1.columns[attr]);
    }
    table.primary(layout1.key);
  }).createTable("QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2011",function(table){
    for(var attr in layout2.columns){
      table.string(attr,layout2.columns[attr]);
    }
    table.primary(layout2.key);
  }).createTable("ITENS_PROVA_2011",function(table){
    for(var attr in layout3.columns){
      table.string(attr,layout3.columns[attr]);
    }
    table.primary(layout3.key);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("DADOS_ENEM_2011")
    .dropTable("QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2011")
    .dropTable("ITENS_PROVA_2011");
};
