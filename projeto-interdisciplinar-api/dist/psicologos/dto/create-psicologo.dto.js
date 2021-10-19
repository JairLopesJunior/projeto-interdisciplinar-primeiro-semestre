"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePsicologoDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePsicologoDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe um nome válido!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo nome precisa ser fornecido!' }),
    (0, class_validator_1.MinLength)(120),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe um email válido!' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MinLength)(50),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe um telefone válido!' }),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.MinLength)(15),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe um crp válido!' }),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", Number)
], CreatePsicologoDto.prototype, "crp", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe uma experiência válida!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo experiência precisa ser fornecido!' }),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "experiencia", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe um facebook válido!' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "facebook", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe um estado válido!' }),
    (0, class_validator_1.MinLength)(30),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo estado precisa ser fornecido!' }),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe uma cidade válido!' }),
    (0, class_validator_1.MinLength)(50),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo cidade precisa ser fornecido!' }),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe um texto sobreMim válido!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo sobreMim precisa ser fornecido!' }),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "sobreMim", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Informe uma imagem válida!' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePsicologoDto.prototype, "imagem", void 0);
exports.CreatePsicologoDto = CreatePsicologoDto;
//# sourceMappingURL=create-psicologo.dto.js.map