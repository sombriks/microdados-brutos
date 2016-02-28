
var layout1 = require("../layoutdb/MICRODADOS_ENEM_2014");
var layout2 = require("../layoutdb/CONSISTENCIA_ENEM_ESCOLA_2014");

exports.up = function(knex, Promise) {
  return knex.schema.createTable("MICRODADOS_ENEM_2014",function(table){
    for(var attr in layout1.columns){
      table.string(attr,layout1.columns[attr]);
    }
    table.primary(layout1.key);
  }).createTable("CONSISTENCIA_ENEM_ESCOLA_2014",function(table){
    for(var attr in layout2.columns){
      table.string(attr,layout2.columns[attr]);
    }
    table.primary(layout2.key);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("MICRODADOS_ENEM_2014")
    .dropTable("CONSISTENCIA_ENEM_ESCOLA_2014");
};
