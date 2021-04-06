import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateGigDto } from './dto/create-gig.dto';
import { UpdateGigDto } from './dto/update-gig.dto';
import { Gig } from './schema/gig.schema';
import { GigsRepository } from './entities/gig.entity';
@Injectable()
export class GigsService {
  constructor(private readonly gigRepository: GigsRepository) {}
  create(createGigDto: CreateGigDto): Promise<Gig> {
    return this.gigRepository.create({
      gigId: uuidv4(),
      Description: createGigDto.Description,
      Techs: createGigDto.Tech,
      budget: createGigDto.budget,
    });
  }

  findAll() {
    return this.gigRepository.find({});
  }

  findOne(id: string) {
    return this.gigRepository.findOne({ gigId: id });
  }

  update(id: string, updateGigDto: UpdateGigDto) {
    return this.gigRepository.findOneAndUpdate({ gigId: id }, updateGigDto);
  }

  remove(id: string) {
    return this.gigRepository.Delete({ gigId: id });
  }
}
