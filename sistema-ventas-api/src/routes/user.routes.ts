// import { Router } from 'express';
// import { userController } from '../controllers/user.controller';

// class UserRoutes {

//     public router: Router;

//     constructor() {
//         this.router = Router();
//         this.config();
//     }

//     config(): void {
//         /**
//          * @swagger
//          * /api/user:
//          *  post:
//          *      tags: ["Usuarios"]
//          *      summary: Crear usuario
//          *      description: Crea un nuevo usuario
//          *      produces:
//          *          - application/json
//          *      responses:
//          *          201:
//          *              description: Usuario creado
//          */
//         this.router.post('/', userController.createUser);

//         /**
//          * @swagger
//          * /api/user/{id}:
//          *  get:
//          *      tags: ["Usuarios"]
//          *      summary: Obtener usuario
//          *      description: Obtiene a un usuario por su ID
//          *      produces:
//          *          - application/json
//          *      responses:
//          *          200:
//          *              description: Usuario encontrado
//          */
//         this.router.get('/:id', userController.getUser);

//         /**
//          * @swagger
//          * /api/user:
//          *  get:
//          *      tags: ["Usuarios"]
//          *      summary: Buscar usuarios
//          *      description: Busca los usuarios
//          *      produces:
//          *          - application/json
//          *      responses:
//          *          201:
//          *              description: Usuario encontrado
//          */
//         this.router.get('/', userController.getAllUsers);

//         /**
//          * @swagger
//          * /api/user/{id}:
//          *  put:
//          *      tags: ["Usuarios"]
//          *      summary: Actualizar usuario
//          *      description: Actualiza los datos de un usuario por su ID
//          *      produces:
//          *          - application/json
//          *      responses:
//          *          200:
//          *              description: Usuario actualizado
//          */
//         this.router.put('/:id', userController.updateUser);

//         /**
//          * @swagger
//          * /api/user/{id}:
//          *  delete:
//          *      tags: ["Usuarios"]
//          *      summary: Eliminar usuario
//          *      description: Elimina un usuario por su ID
//          *      produces:
//          *          - application/json
//          *      responses:
//          *          200:
//          *              description: Usuario eliminado
//          */
//         this.router.delete('/:id', userController.deleteUser);
//     }
// }

// const userRoutes = new UserRoutes();
// export default userRoutes.router;
