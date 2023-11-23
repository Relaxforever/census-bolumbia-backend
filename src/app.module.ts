import { Module, NestModule, MiddlewareConsumer,/* RequestMethod*/ } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { QuestionaryModule } from './questionnaire/questionary.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true, // set to false in production
    }),
    AuthModule, QuestionaryModule, ReportsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    // Si deseamos aumentar la restricción a la hora de aplicar el metodo podemos descomentar lo que se comentara acontinuación.
    /*.forRoutes({ path: 'cats', method: RequestMethod.GET });*/
    .forRoutes('cats');
  }
}
