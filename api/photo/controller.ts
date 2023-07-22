import { Request, Response } from "express";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

async function convertAll(_req: Request, res: Response) {
  try {
   
          const directorioImagenes = '//192.168.0.67/Logistica/Fotos';
          const directorioSalida = 'C:/Users/SyD Colombia SA/Desktop/n';
          const rutaArchivoExcel = 'C:/Users/carlo/OneDrive/Escritorio/Libro1.xlsx';
          const rangoCeldasIDs = 'A2:A6';
      

            // Leer el archivo de Excel
            const workbook = XLSX.readFile(rutaArchivoExcel);
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
        console.log('workbook',workbook);
        
            // Obtener los IDs del archivo de Excel
            const range = XLSX.utils.decode_range(rangoCeldasIDs);
            const ids = [];
            for (let row = range.s.r; row <= range.e.r; row++) {
              const cellAddress = XLSX.utils.encode_cell({ r: row, c: range.s.c });
              const cell = sheet[cellAddress];
              if (cell && cell.t === 'n') {
                const id = cell.v;
                ids.push(id);
              }
            }
      
            // Procesar las imágenes
            for (const id of ids) {
              const nombreArchivo = id.toString();
              const archivo = `${directorioImagenes}${nombreArchivo}.png`;
      
              // Verificar si el archivo existe y es una imagen PNG
           /*    if (fs.existsSync(archivo) && archivo.toLowerCase().endsWith('.png')) {
                // Leer la imagen PNG
                const imagen = await loadImage(archivo);
      
                // Crear una nueva imagen con fondo blanco
                const imagenRedimensionada = createWhiteImage(300, 300);
                const canvas = imagenRedimensionada.getContext('2d');
                canvas.drawImage(imagen, 0, 0, 300, 300);
      
                // Guardar la imagen convertida en formato JPEG
                const rutaSalida = `${directorioSalida}${nombreArchivo}.jpg`;
                await saveImage(imagenRedimensionada, rutaSalida);
      
                console.log(`Se ha convertido ${archivo} a JPEG y redimensionado.`);
              } */
            }
          
/*       
        const loadImage = (url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = (error) => reject(error);
            img.src = url;
          });
        }; */
/*       
        const createWhiteImage = (width, height) => {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext('2d');
          context.fillStyle = 'white';
          context.fillRect(0, 0, width, height);
          return canvas;
        }; */
      
/*         const saveImage = (canvas, filename) => {
          return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
              saveAs(blob, filename);
              resolve();
            }, 'image/jpeg', 1);
          });
        };
   */
    res.status(200).json({});
  } catch (error) {
    console.log('error : ',error);
    
    res.status(500).json()
  }

}
export default {
    convertAll,
};
