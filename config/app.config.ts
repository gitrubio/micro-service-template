import 'dotenv/config'
export const config = {
    port : process.env.SERVER_PORT,

    jwt: {
        secret : process.env.SECRET
    },
    db : {
        host : process.env.HOST_DB,
        user : process.env.USER_DB,
        password : process.env.PASSWORD_DB,
        database : process.env.DATABASE
    }
}