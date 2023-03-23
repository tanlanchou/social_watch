import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'social',
  dialect: 'mysql',
  username: 'tommy',
  password: '4180d28f',
  host: '192.168.2.99',
  port: 3306,
  models: [__dirname + '/models'], // 指定模型所在的文件夹
});

// 测试连接
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize, testConnection };
