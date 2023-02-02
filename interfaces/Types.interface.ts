export interface IDbResponse<T> {
   data : T[] | null
   error : boolean 
   mensaje : string
}