import { Request, Response } from "express";
import Pool from "../../hooks/Pool.hook";

async function getAll(_req: Request, res: Response) {
  try {
    const {data, error , mensaje} = await Pool.query<string>("SELECT * FROM productos.products;");
    
    if (error) res.status(500).json({ mensaje: mensaje });
  
    res.status(200).json(data);
  } catch (error) {}
    res.status(500).json()
}

export default {
  getAll,
};
