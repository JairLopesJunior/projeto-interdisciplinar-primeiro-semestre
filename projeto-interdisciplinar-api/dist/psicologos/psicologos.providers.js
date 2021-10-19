"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.psicologosProviders = void 0;
const psicologo_entity_1 = require("./entities/psicologo.entity");
exports.psicologosProviders = [
    {
        provide: 'PSICOLOGO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(psicologo_entity_1.Psicologo),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=psicologos.providers.js.map