import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DataBaseModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
