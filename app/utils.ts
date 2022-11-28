import { promises as fsPromises } from "fs";
import sharp from "sharp";

export const transform = async (
  filePath: string,
  width: string,
  height: string
): Promise<Buffer> => {
  const imagesDir = process.cwd() + "/images";
  const dirFiles = await fsPromises.readdir(imagesDir);

  const imgToServe = dirFiles.find((file) => file.indexOf(filePath) > -1);

  const resizedImg = await sharp(imagesDir + "/" + imgToServe)
    .resize(Number(width), Number(height))
    .toFormat("jpeg");

  // convert to buffer
  const toBuffer = await resizedImg.clone().toBuffer();

  // convert & save as file
  await resizedImg
    .clone()
    .toFile(imagesDir + `/${filePath}-${width}-${height}.jpeg`);

  return toBuffer;
};
