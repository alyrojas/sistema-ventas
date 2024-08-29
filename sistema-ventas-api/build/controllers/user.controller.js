"use strict";
// import { Request, Response } from 'express';
// import prisma from '../database/database';
// import { utils } from '../utils/utils';
// class UserController {
//     public async createUser(req: Request, res: Response) {
//         try {
//             const { nombre, apellidos, username, email, rol, password } = req.body;
//             // Verificar si el username o email ya existe
//             const userExists = await prisma.usuario.findFirst({
//                 where: {
//                     OR: [{ username }, { email }]
//                 }
//             });
//             if (userExists) {
//                 return res.status(400).json({ message: "El usuario o email ya existe" });
//             }
//             // Encriptar la contraseña
//             const hashedPassword = await utils.hashPassword(password);
//             // Crear el nuevo usuario
//             const newUser = await prisma.usuario.create({
//                 data: {
//                     nombre,
//                     apellidos,
//                     username,
//                     email,
//                     rol,
//                     password: hashedPassword
//                 }
//             });
//             return res.json({ message: "Usuario creado exitosamente", user: newUser });
//         } catch (error: any) {
//             console.log(error);
//             return res.status(500).json({ message: `Error interno: ${error.message}` });
//         }
//     }
//     public async getAllUsers(req: Request, res: Response) {
//         try {
//             // const token = <string>req.headers["auth"];
//             // const currentUser = utils.getPayload(token);
//             // console.log(currentUser);
//             const users = await prisma.usuario.findMany();
//             //Va adentro del findMany
//             // where:{
//             //     cveUsuario: {
//             //         not: currentUser.cveUsuario
//             //     }
//             // }
//             if (users.length === 0) {
//                 return res.status(404).json({ message: "No se encontraron usuarios" });
//             }
//             return res.json(users);
//         } catch (error: any) {
//             return res.status(500).json({ message: `Error interno: ${error.message}` });
//         }
//     }
//     public async getUser(req: Request, res: Response) {
//         try {
//             const { id } = req.params;
//             const user = await prisma.usuario.findUnique({
//                 where: { cveUsuario: parseInt(id) }
//             });
//             if (!user) {
//                 return res.status(404).json({ message: "Usuario no encontrado" });
//             }
//             return res.json(user);
//         } catch (error: any) {
//             return res.status(500).json({ message: `Error interno: ${error.message}` });
//         }
//     }
//     public async updateUser(req: Request, res: Response) {
//         try {
//             const { id } = req.params;
//             const { nombre, apellidos, username, email, rol } = req.body;
//             // Verificar si el usuario existe
//             const user = await prisma.usuario.findUnique({
//                 where: { cveUsuario: parseInt(id) }
//             });
//             if (!user) {
//                 return res.status(404).json({ message: "Usuario no encontrado" });
//             }
//             const updatedUser = await prisma.usuario.update({
//                 where: { cveUsuario: parseInt(id) },
//                 data: { nombre, apellidos, username, email, rol }
//             });
//             return res.json({ message: "Usuario actualizado exitosamente", user: updatedUser });
//         } catch (error: any) {
//             return res.status(500).json({ message: `Error interno: ${error.message}` });
//         }
//     }
//     public async deleteUser(req: Request, res: Response) {
//         try {
//             const { id } = req.params;
//             // Verificar si el usuario existe
//             const user = await prisma.usuario.findUnique({
//                 where: { cveUsuario: parseInt(id) }
//             });
//             if (!user) {
//                 return res.status(404).json({ message: "Usuario no encontrado" });
//             }
//             await prisma.usuario.delete({
//                 where: { cveUsuario: parseInt(id) }
//             });
//             return res.json({ message: "Usuario eliminado exitosamente" });
//         } catch (error: any) {
//             return res.status(500).json({ message: `Error interno: ${error.message}` });
//         }
//     }
// }
// export const userController = new UserController();
