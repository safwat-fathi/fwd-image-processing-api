import { Request, Response } from "express";
import { promises as fsPromises } from "fs";

export const getImage = async (req: Request, res: Response) => {
  const { filename, width, height } = req.params;

  try {
    const imagesDir = process.cwd() + "/images";
    const dir = await fsPromises.readdir(imagesDir);
    console.log(dir.includes(filename));

    if (dir.includes(filename)) {
      const imgToServe = dir.find((file) => file === filename);

      console.log(imgToServe);
    }
    res.end();
  } catch (err) {
    console.log(
      "🚀 ~ file: image.controller.ts ~ line 13 ~ getImage ~ err",
      err
    );
  }
};
