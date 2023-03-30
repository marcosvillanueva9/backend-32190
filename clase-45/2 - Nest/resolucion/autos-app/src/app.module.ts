import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';

@Module({
  imports: [AutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
