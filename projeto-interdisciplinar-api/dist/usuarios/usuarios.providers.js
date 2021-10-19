"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosProviders = void 0;
const usuario_entity_1 = require("./entities/usuario.entity");
exports.usuariosProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(usuario_entity_1.Usuario),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=usuarios.providers.js.map