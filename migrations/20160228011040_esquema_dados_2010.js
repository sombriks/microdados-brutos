
var layout1 = require("../layoutdb/DADOS_ENEM_2010");
var layout2 = require("../layoutdb/QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2010");

exports.up = function(knex, Promise) {
  return knex.schema.createTable("DADOS_ENEM_2010",function(table){
    for(var attr in layout1.columns){
      table.string(attr,layout1.columns[attr]);
    }
    table.primary(layout1.key);
  }).createTable("QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2010",function(table){
    for(var attr in layout2.columns){
      table.string(attr,layout2.columns[attr]);
    }
    table.primary(layout2.key);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("DADOS_ENEM_2010");
};
