"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePsicologoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_psicologo_dto_1 = require("./create-psicologo.dto");
class UpdatePsicologoDto extends (0, mapped_types_1.PartialType)(create_psicologo_dto_1.CreatePsicologoDto) {
}
exports.UpdatePsicologoDto = UpdatePsicologoDto;
//# sourceMappingURL=update-psicologo.dto.js.map