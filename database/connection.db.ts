import mysql from 'mysql2';
import { config } from '../config/global.config';

export class Database {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database
    });
  }

  connect(): void {
    this.connection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL");
    });
  }

  query(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, results, fields) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  }
}
