import mysql from 'mysql';
import { DbHandler } from '../core/db.handler';

export default async () => {

  const connexion = mysql.createConnection({
    host: process.env.WILD_API_DB_HOST,
    // tslint:disable-next-line: radix
    port: Number(process.env.WILD_CIRCUS_PORT),
    user: process.env.WILD_API_DB_USER,
    password: process.env.WILD_API_FUMAINERIE_DB_PASSWORD,
    database: 'Adrien-circus',
  });

  DbHandler.getInstance(connexion);

  return connexion;
};
