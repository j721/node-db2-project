
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl =>{
      tbl.increments();
      tbl.string("make", 255).notNullable()
      tbl.string("model", 255).notNullable()
      tbl.integer("mileage", 255).notNullable()
      tbl.string("transmission", 255)
      tbl.string("status", 255)
      tbl.string("vin", 255).notNullable().unique();
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};

//255 max number of characterskne

//budgeting with interger

//notNullable - can't be a null value. has to be required