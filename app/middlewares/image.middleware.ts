// import { NextFunction, Request, Response } from "express";
// import { promises as fsPromises } from "fs";

// export const getImage = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { filename, width, height } = req.params;
//   // console.log(req.url);

//   try {
//     // const imagesDir = process.cwd() + "/images";
//     // const dir = await fsPromises.readdir(imagesDir);
//     // console.log(dir.includes(filename));

//     // if (dir.includes(filename)) {
//     //   const imgToServe = dir.find((file) => file === filename);

//     // console.log(imgToServe);
//     // }

//     next();
//   } catch (err) {
//     console.log(
//       "🚀 ~ file: image.controller.ts ~ line 13 ~ getImage ~ err",
//       err
//     );
//   }
// };
