import {  Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
// Cuando no necesitamos o no tenemos necesidad de dependencias externas, podemos crear un middleware como una función simple.
// Path: src/logger.middleware.ts
// import { Request, Response, NextFunction } from 'express';
// export function logger(req: Request, res: Response, next: NextFunction) {
//   console.log(`Request...`);
//   next();
// }