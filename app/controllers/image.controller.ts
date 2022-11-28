import { Request, Response } from "express";
import { promises as fsPromises } from "fs";
import { transform } from "../utils";

export const getImage = async (req: Request, res: Response) => {
  try {
    const { filename, width, height } = req.query;

    // check if image already exist
    const imgWithDimensions = `${filename}-${width}-${height}`;

    const imagesDir = process.cwd() + "/images";
    const dirFiles = await fsPromises.readdir(imagesDir);

    const isExist = dirFiles.find(
      (file: string) => file.indexOf(imgWithDimensions) > -1
    );

    if (isExist) {
      const readfile = await fsPromises.readFile(imagesDir + "/" + isExist);
      return res.type("image/jpeg").send(readfile);
    }

    const newImage = await transform(
      filename as string,
      width as string,
      height as string
    );

    res.type("image/jpeg").send(newImage);
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: err });
  }
};
