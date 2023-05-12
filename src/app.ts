import express, {Application} from 'express';
const app:Application = express()
import cors from 'cors';

// application routes 
import userRoutes from './app/modules/user/user.route'

// middle ware
//using cors
app.use(cors());

// parse data
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/v2/user', userRoutes)


/**
 * interface ----> app/modules/user/user.interface.ts
 * Schema, model ------> app/modules/user/user.model.ts
 * route -----------> app/modules/user/user.route.ts
 * route function -------> app/modules/user/user.controller.ts
 * Database Query Function ------ services.ts
 */


export default app;
