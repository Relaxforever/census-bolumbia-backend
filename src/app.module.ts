import { Module, NestModule, MiddlewareConsumer,/* RequestMethod*/ } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [CatsModule],
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
