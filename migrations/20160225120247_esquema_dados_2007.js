
var layout = require("../layoutdb/DADOS_ENEM_2007")

exports.up = function(knex, Promise) {
  return knex.schema.createTable("DADOS_ENEM_2007",function(table){
    for(var attr in layout.columns){
      table.string(attr,layout.columns[attr]);
    }
    table.primary(layout.key);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("DADOS_ENEM_2007");
};
