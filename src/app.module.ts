import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './modules/data-base/data-base.module';

@Module({
  imports: [
    DataBaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
