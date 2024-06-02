"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const auth_module_1 = require("./domains/auth/auth.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./domains/user/user.module");
const logger_middleware_1 = require("./core/middlewares/logger.middleware");
const diary_module_1 = require("./domains/diary/diary.module");
const schedule_module_1 = require("./domains/schedule/schedule.module");
const iot_board_personal_module_1 = require("./domains/iot_board_personal/iot_board_personal.module");
const board_module_1 = require("./domains/board/board.module");
const live_stream_module_1 = require("./domains/live_stream/live_stream.module");
const mypage_module_1 = require("./domains/mypage/mypage.module");
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const morph_list_module_1 = require("./domains/morph_list/morph_list.module");
const elasticsearch_1 = require("@nestjs/elasticsearch");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.MYSQL_HOST,
                port: 3306,
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE_NAME,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: false,
                logging: true,
                timezone: '+09:00',
                namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
            }),
            nestjs_redis_1.RedisModule.forRoot({
                readyLog: true,
                config: {
                    host: process.env.REDIS_HOST,
                    port: 6379,
                    password: process.env.REDIS_PASSWORD,
                },
            }),
            elasticsearch_1.ElasticsearchModule.register({
                node: process.env.ELASICSEARCH_HOST,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            diary_module_1.DiaryModule,
            board_module_1.BoardModule,
            schedule_module_1.SchedulerModule,
            iot_board_personal_module_1.IotPersonalModule,
            live_stream_module_1.LiveStreamModule,
            mypage_module_1.MypageModule,
            morph_list_module_1.MorphListModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map