import { Request, Response } from "express";
import Pool from "../../../hooks/Pool.hook";

async function getAll(_req: Request, res: Response) {
  try {
    const data = await Pool.query<string>("SELECT * FROM productos.products;");
    if (data.error) res.status(500).json({ mensaje: data.mensaje });
  
    res.status(200).json(data.data);
  } catch (error) {}
    res.status(500).json()
}

export default {
  getAll,
};
