import { Request, Response } from "express";
import { promises as fsPromises } from "fs";
import sharp from "sharp";

export const getImage = async (req: Request, res: Response) => {
  try {
    const { filename, width, height } = req.query;

    const imagesDir = process.cwd() + "/images";
    const dirFiles = await fsPromises.readdir(imagesDir);

    const imgToServe = dirFiles.find(
      (file) => file.indexOf(filename as string) > -1
    );

    const resizedImg = await sharp(imagesDir + "/" + imgToServe)
      .resize(Number(width), Number(height))
      .toFormat("jpeg");

    // convert to buffer
    const toBuffer = await resizedImg.clone().toBuffer();

    // convert & save as file
    await resizedImg
      .clone()
      .toFile(imagesDir + `/${filename}-${width}-${height}.jpeg`);

    // response with file
    res.type("image/jpeg").send(toBuffer);
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: err });
  }
};
