import { Request, Response } from "express";
import { promises as fsPromises } from "fs";
const sharp = require("sharp");

export const getImage = async (req: Request, res: Response) => {
  try {
    const { filename } = req.params;
    const { width, height } = req.query;
    console.log(width, height);

    const imagesDir = process.cwd() + "/images";
    const dirFiles = await fsPromises.readdir(imagesDir);

    const imgToServe = dirFiles.find((file) => file.indexOf(filename) > -1);

    // const resizedImg = await sharp(imagesDir + "/" + imgToServe)
    //   .resize({
    //     width: width && +width,
    //     height: height && +height,
    //   })
    //   .toFormat("jpeg", { mozjpeg: true })
    //   .toFile(imagesDir + `/${filename}-${width}-${height}.jpeg`);

    sharp(imagesDir + "/" + imgToServe)
      .resize({
        width: width && +width,
        height: height && +height,
      })
      .jpeg()
      .toBuffer()
      .then((data: any) => res.type("png").send(data));
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: err });
  }
};
