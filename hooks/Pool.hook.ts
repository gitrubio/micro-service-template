import connection from "../database/connection.db";
import { IDbResponse } from "../interfaces/app.interface";

async function query<T>(sql: string): Promise<IDbResponse<T>> {
  try {
    const data = await connection.query(sql);
    return { data: data[0] as T[], error: false, mensaje: "" };
  } catch (error: any) {
    console.error(error);
    return { data: null, error: true, mensaje: error.message };
  }
}

export default {
  query,
};
