import { createPool } from 'mysql2/promise';
import { config } from '../config/app.config';

const connection = createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  connectionLimit: 10
})

export default connection;