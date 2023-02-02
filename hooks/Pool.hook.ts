import connection from "../database/connection.db";
import { IQueryResponse } from '../interfaces/Types.interface';

async function query<T>(sql: string): Promise<T[]  | null> {
    try {
        const data = await connection.query(sql)
        return data[0] as T[]
    } catch (error) {
        console.error(error)
        return null
    }
}


export default {
    query
}