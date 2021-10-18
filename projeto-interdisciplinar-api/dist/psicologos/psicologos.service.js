"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsicologosService = void 0;
const common_1 = require("@nestjs/common");
let PsicologosService = class PsicologosService {
    create(createPsicologoDto) {
        return 'This action adds a new psicologo';
    }
    findAll() {
        return `This action returns all psicologos`;
    }
    findOne(id) {
        return `This action returns a #${id} psicologo`;
    }
    update(id, updatePsicologoDto) {
        return `This action updates a #${id} psicologo`;
    }
    remove(id) {
        return `This action removes a #${id} psicologo`;
    }
};
PsicologosService = __decorate([
    (0, common_1.Injectable)()
], PsicologosService);
exports.PsicologosService = PsicologosService;
//# sourceMappingURL=psicologos.service.js.map