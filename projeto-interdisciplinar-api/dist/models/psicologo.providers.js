"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.psicologoProviders = void 0;
const psicologo_entity_1 = require("./psicologo.entity");
exports.psicologoProviders = [
    {
        provide: 'PSICOLOGO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(psicologo_entity_1.Psicologo),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=psicologo.providers.js.map