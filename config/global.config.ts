import 'dotenv/config'
export const config = {
    port : process.env.SERVER_PORT,

    jwt: {
        secret : 'secret'
    },
    db : {
        host : 'localhost',
        user : 'root',
        password : 'admin',
        database : 'productos'
    }
}