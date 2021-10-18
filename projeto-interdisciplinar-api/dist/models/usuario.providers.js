"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioProviders = void 0;
const usuario_entity_1 = require("./usuario.entity");
exports.usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(usuario_entity_1.Usuario),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=usuario.providers.js.map