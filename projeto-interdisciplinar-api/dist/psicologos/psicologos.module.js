"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsicologosModule = void 0;
const psicologos_providers_1 = require("./psicologos.providers");
const database_module_1 = require("./../database/database.module");
const common_1 = require("@nestjs/common");
const psicologos_service_1 = require("./psicologos.service");
const psicologos_controller_1 = require("./psicologos.controller");
let PsicologosModule = class PsicologosModule {
};
PsicologosModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [psicologos_controller_1.PsicologosController],
        providers: [
            ...psicologos_providers_1.psicologosProviders,
            psicologos_service_1.PsicologosService
        ]
    })
], PsicologosModule);
exports.PsicologosModule = PsicologosModule;
//# sourceMappingURL=psicologos.module.js.map