import { Request, Response } from "express";
import Pool from '../../../hooks/Pool.hook'


async function getAll(_req : Request , res : Response) {
    const data = await Pool.query<string>('SELECT * FROM andromeda.personas;')
    console.log(data)
    res.status(200).send({data})
}

export default {
    getAll
}