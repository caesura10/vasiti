module.exports = {
  
  HOST: "http://sql11.freemysqlhosting.net/",
  
  USER: "sql11468938",
  
  PASSWORD: "LVHy5uP2X8",
  
  DB: "testdb",
  
  port: "3306"
  
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};