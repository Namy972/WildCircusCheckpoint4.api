import mysql from 'mysql';
import { DbHandler } from '../core/db.handler';

export default async () => {

  const connexion = mysql.createConnection({
    host: process.env.WILD_DB_HOST,
    port: parseInt(process.env.WILD_DB_PORT || '3306', 10),
    user: process.env.WILD_DB_USER,
    password: process.env.WILD_DB_PASSWORD,
    database: 'livecoding',
  });

  DbHandler.getInstance(connexion);

  return connexion;
};
