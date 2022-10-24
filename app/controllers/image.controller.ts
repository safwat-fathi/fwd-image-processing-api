import { Request, Response } from "express";
import { promises as fsPromises } from "fs";
// import fs from "fs";
const sharp = require("sharp");

export const getImage = async (req: Request, res: Response) => {
  try {
    const { filename, width, height } = req.query;

    const imagesDir = process.cwd() + "/images";
    const dirFiles = await fsPromises.readdir(imagesDir);

    const imgToServe = dirFiles.find(
      (file) => file.indexOf(filename as string) > -1
    );

    const resizedImg = await sharp(imagesDir + "/" + imgToServe)
      .resize({
        width: width && +width,
        height: height && +height,
      })
      .toFormat("jpeg")
      .toBuffer();

    await fsPromises.writeFile(
      imagesDir + `/${filename}-${width}-${height}.jpeg`,
      resizedImg
    );

    res.type("image/jpeg").send(resizedImg);
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: err });
  }
};
