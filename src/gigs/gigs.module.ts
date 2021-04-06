import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GigsService } from './gigs.service';
import { GigsController } from './gigs.controller';
import { Gig, GigSchema } from './schema/gig.schema';
import { GigsRepository } from './entities/gig.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Gig', schema: GigSchema }])],
  controllers: [GigsController],
  providers: [GigsService, GigsRepository],
})
export class GigsModule {}
