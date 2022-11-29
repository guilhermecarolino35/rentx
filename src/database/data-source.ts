import "reflect-metadata"
import { DataSource } from "typeorm";

 export const AppdataSource = new DataSource({   
    type:"postgres",
    port: 5432,
    username: "docker",
    password: "1234",
    database: "avalon",
    synchronize:false,
    logging:false,
    entities: ["./src/modules/**/entities/*.ts"],

    migrations: [
        "./src/database/migrations/*.ts"
    ],
    subscribers:[],
}   
);

export function createConnection(host = "database"): Promise<DataSource> {
    return AppdataSource.setOptions({ host }).initialize();
}
