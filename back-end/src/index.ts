import './configs/env'
import { HttpAdapter } from "./configs/httpAdapter";
import { RouterAdapter } from "./routes";

const httpAdapter =  new HttpAdapter()
const routerAdapter = new RouterAdapter(httpAdapter.getApp())

routerAdapter.createRoutes()
httpAdapter.init()
