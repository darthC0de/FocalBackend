import jwt, { JwtPayload } from "jsonwebtoken";
import { User,iUser } from '../Services/User'
import { Request, Response, NextFunction } from "express";

async function authenticate(req: Request, res: Response, next: NextFunction){
    const Services = new User()
    const token  : any = req.headers.token;
    if(!token) return res.status(401).json({message:"You must provide a token"});
    jwt.verify(token, process.env.APP_SECRET, async function(err: Error, decoded: JwtPayload) {
        if (err) return res.status(500).json({ auth: err.name, message: err.message });
        const user = await Services.findById(decoded.id);
        if (!user) return res.status(401).json({message:"Invalid Token"});
        req.headers.id = decoded.id;
        next();
      });
}
async function adminAccess(req: Request, res: Response, next: NextFunction){
    const Services = new User()
    const token  : any = req.headers.token;
    if(!token) return res.status(401).json({message:"You must provide a token"});
    jwt.verify(token, process.env.APP_SECRET, async function(err: Error, decoded: JwtPayload) {
        if (err) return res.status(500).json({ auth: err.name, message: err.message });
        const user : any = await Services.findById(decoded.id);
        console.log(decoded,user)
        if (!user || user.permission != "admin" ) return res.status(401).json({message:"Not authorized"});
        req.headers.id = decoded.id;
        next();
      });
}
export {
    authenticate,
    adminAccess
}
