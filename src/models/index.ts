import { Sequelize } from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize: Sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: console.log
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err:any) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

export default sequelize;
