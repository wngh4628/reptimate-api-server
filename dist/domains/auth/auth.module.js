"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_ex_module_1 = require("../../core/typeorm-ex.module");
const user_repository_1 = require("../user/repositories/user.repository");
const user_module_1 = require("./../user/user.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt/jwt.strategy");
const refresh_token_strategy_1 = require("./jwt/refresh-token.strategy");
const fb_token_repository_1 = require("./repositories/fb-token.repository");
const ref_token_repository_1 = require("./repositories/ref-token.repository");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === 'dev' ? 'env.dev' : 'env.prod',
            }),
            jwt_1.JwtModule.registerAsync({
                useFactory: () => ({
                    secret: process.env.JWT_SECRET,
                    signOptions: {
                        expiresIn: '2h',
                    },
                }),
            }),
            typeorm_ex_module_1.TypeOrmExModule.forCustomRepository([
                user_repository_1.UserRepository,
                ref_token_repository_1.RefTokenRepository,
                fb_token_repository_1.FbTokenRepository
            ]),
            passport_1.PassportModule,
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, refresh_token_strategy_1.JwtRefreshTokenStrategy],
        exports: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, passport_1.PassportModule, refresh_token_strategy_1.JwtRefreshTokenStrategy],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map