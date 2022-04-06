

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    
    db[model.name] = model;
    
  });



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.users.hasMany(db.tasks, { as: "tasks" });
// db.tasks.belongsTo(db.users, {
//   foreignKey: "id",
//   as: "userId",
// });
// db.users = require("./users")(sequelize, Sequelize);
// db.tasks = require("./tasks")(sequelize, Sequelize);
module.exports = db;


// const sequelize = new Sequelize(config.database,config.username, config.password, {
//   host: config.host,
//   dialect: "mysql",
//   operatorsAliases: false,
//   // dialectOptions: {
//   //   ssl: {
//   //     ca:fs.readFileSync('src/certificate/BaltimoreCyberTrustRoot.crt.pem')
//   //   }
//   // }
// //   pool: {
// //     max: dbConfig.pool.max,
// //     min: dbConfig.pool.min,
// //     acquire: dbConfig.pool.acquire,
// //     idle: dbConfig.pool.idle
// //   }
// });
// console.log("gg", config.database);
// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;


// db.User = require("./user")(sequelize, Sequelize);
// db.dogs = require("./task")(sequelize, Sequelize);
// module.exports = db;
