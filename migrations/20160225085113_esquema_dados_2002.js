
var layout = require("../layoutdb/DADOS_ENEM_2002")

exports.up = function(knex, Promise) {
  return knex.schema.createTable("DADOS_ENEM_2002",function(table){
    for(var attr in layout.columns){
      table.string(attr,layout.columns[attr]);
    }
    table.primary(layout.key);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("DADOS_ENEM_2002");
};
