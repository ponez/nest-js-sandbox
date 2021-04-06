import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { GigsModule } from './gigs/gigs.module';
import config from './config/keys';
@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), UsersModule, GigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
