import { Request, Response } from 'express';
import prisma from '../database/database';
import { utils } from '../utils/utils';

class IndexController {
    public async index(req: Request, res: Response){
        try {
            //testing de error / throw new RangeError('Error inesperado')
            //return res.json({message: "API Works!"});
            // const newUser = await prisma.usuario.create({
            //     data: {
            //         nombre: 'Alyne',
            //         apellidos: 'Rojas',
            //         username: 'alyrojas',
            //         password: '123'
            //     }
            // });
            // const usuarios = await prisma.usuario.findMany();
            // // const deleteUser = await prisma.usuario.delete({
            // //     where: { cveUsuario: newUser.cveUsuario}
            // // });

            // return res.json(usuarios);

            ////////////////JWT
            // const user = {
            //     cveUsuario: 1,
            //     nombre:'jose',
            //     rol: [1,2,3]
            // };

            // const token = utils.generateJWT(user);
            // console.log(token);

            // var jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdmVVc3VhcmlvIjoxLCJub21icmUiOiJqb3NlIiwicm9sIjpbMSwyLDNdLCJpYXQiOjE3MjAyMjgyMzgsImV4cCI6MTcyMDIzMTgzOH0.kd4jthXqfYKFcZWo3dVo20PS29yPdnB1kcRhDTzXSjI";
            // var data = utils.getPayload(jwt);
            // console.log(data);

            return res.json({message: "API Works!"});
        } catch (error: any) {
            return res.status(500).json({message: `Error: ${error.message}`});
        }
    }

    public insert(req: Request, res: Response){
        try {
            return res.json({message: "INSERT Works!"});
        } catch (error: any) {
            return res.status(500).json({message: `Error: ${error.message}`});
        }
    }

    public update(req: Request, res: Response){
        try {
            return res.json({message: "UPDATE Works!"});
        } catch (error: any) {
            return res.status(500).json({message: `Error: ${error.message}`});
        }
    }

    public delete(req: Request, res: Response){
        try {
            return res.json({message: "DELETE Works!"});
        } catch (error: any) {
            return res.status(500).json({message: `Error: ${error.message}`});
        }
    }
}

export const indexController = new IndexController();

