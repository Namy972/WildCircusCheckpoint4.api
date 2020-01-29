import mysql from 'mysql';
import { DbHandler } from '../core/db.handler';

export default async () => {

  const connexion = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.WILD_API_DB_PASSWORD,
    database: 'wildCircus',
  });

  DbHandler.getInstance(connexion);

  return connexion;
};
