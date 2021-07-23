import { UserService } from './../users/users.service';
import { JwtService } from './jwt.service';
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class JwtMiddleWare implements NestMiddleware{
  constructor(private readonly jwtService: JwtService, private readonly userService: UserService){}
  async use(req: Request, res: Response, next: NextFunction){
    if('x-jwt' in req.headers){
      const token = req.headers['x-jwt'];
      const decoded = this.jwtService.verify(token.toString());
      if(typeof decoded === 'object' && decoded.hasOwnProperty('id')){
        try{
          const user = await this.userService.findById(decoded['id']);
          req['user'] = user;
        }catch(e){

        }
      }
    }
    next();
  }
}

// works the same with function component but if using repository or injection have to use class component
// export function JwtMiddleWare(req: Request, res: Response, next: NextFunction) {
//   console.log(req.headers);
//   next();
// }