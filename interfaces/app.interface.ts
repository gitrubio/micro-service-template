export interface IDbResponse<T> {
   data : T[] | null
   error : boolean 
   mensaje : string
}

export interface IServiceDatabase {
   query : <T>(sql : string) => Promise<T[]>
}