import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken'
import connection from '../database/connection'

import { Encrypt } from '../tools/Encrypt'

interface iUser{
    id?: string;
    email: string;
    password : string;
    created_at?: Date;
    updated_at?: Date;
}

class User{
    async listAll(){
        return new Promise(async(resolve,reject)=>{
            await connection('users')
                .select('id','email','created_at','updated_at')
                .then((response: Array<iUser>)=>{
                    resolve(response)
                })
                .catch((error: Error)=>{
                    reject({status:400,error})
                })
        })
    }
    async create(data: iUser){
        return new Promise(async(resolve,reject)=>{
            const Cript = new Encrypt()
            
            const {email,password:pwd}=data
            const password = await Cript.cript(pwd)
                .then((response: any)=>response)
                .catch((error: Error)=>reject({status: 400,error}))
            
            const user = await this.findByEmail(email)
                .then((response:iUser)=>response)
            if(user) return reject({status:401,error:'Email already registered'})
            const id = uuid()
            await connection('users')
                .insert({id,email,password})
                .then((response: any)=>{
                    resolve({id,email})
                })
                .catch((error: Error)=>reject({status: 400,error}))
        })
    }
    async update(){}
    async delete(){}
    async authenticate(data:iUser){
        return new Promise(async(resolve,reject)=>{
            const Cript = new Encrypt()
            
            const {email,password:pwd}=data

            const user = await this.findUser(email)
                .then((response: iUser)=>response)
                .catch((error: Error)=>reject({status:400,error}))

            if(!user) return reject({status:401,err:'User not found'})

            const isValid = await Cript.compare(pwd,user.password)
                .then((response: boolean)=>response)
                .catch((err: Error)=>reject({status:400,err}));
            if(!isValid) return reject({status:401,error:"Invalid credentials"})

            const token = jwt.sign({id:user.id},process.env.APP_SECRET,{expiresIn:"15 days"});

            resolve({token})
        })  
    }

    async findById(id: string){
        return new Promise(async(resolve,reject)=>{
            await connection('users')
                .select('id','email','created_at','updated_at')
                .where({id})
                .first()
                .then((response: any)=>{
                    resolve(response)
                })
                .catch((err: Error)=>reject(err))
        })
    }

    async findByEmail(email: string){
        return new Promise(async(resolve,reject)=>{
            await connection('users')
                .select('id','email','created_at','updated_at')
                .where({email})
                .first()
                .then((response: any)=>{
                    resolve(response)
                })
                .catch((err: Error)=>reject(err))
        })
    }
    async findUser(email: string){
        return new Promise(async(resolve,reject)=>{
            await connection('users')
                .select('*')
                .where({email})
                .first()
                .then((response: any)=>{
                    resolve(response)
                })
                .catch((err: Error)=>reject(err))
        })
    }
}

export {
    iUser,
    User
}