import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./routes/api.docs";
import indexRoutes from "./routes/index.routes";
import authRoutes from "./routes/auth.routes";
//import userRoutes from "./routes/user.routes";
import usuarioRoutes from "./routes/usuario.routes";
import generalRoutes from './routes/general.routes';

class Server {

    // * Crear la instancia global de nuestra app
    public app: Application;
    
    // * Generar el constructor
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    // * Generar un metodo para la configuracion 
    private config(): void {
        // * Configuracion del puerto para el server
        this.app.set("port", process.env.PORT || 3000);

        // * Mostrar las peticiones en consola
        this.app.use(morgan("dev"));

        // * Uso de CORS (Cross Origin)
        this.app.use(cors());

        // * Generar restriccion a la API
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false}));
    }

    // ! Generar un metodo para la configuracion de rutas
    private routes(): void {
        this.app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
        this.app.use("/api", indexRoutes);
        this.app.use("/api/auth", authRoutes);
        //this.app.use("/api/user", userRoutes);
        this.app.use("/api/user", usuarioRoutes);
        this.app.use("/api/general", generalRoutes);

    }

    // * Generar un metodo para inicializar el servicio
    start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}

const server = new Server();
server.start();