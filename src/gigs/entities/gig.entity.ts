import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Gig, GigDocument, GigSchema } from '../schema/gig.schema';

@Injectable()
export class GigsRepository {
  constructor(@InjectModel('Gig') private gigModel: Model<GigDocument>) {}

  async findOne(GigFilterQuery: FilterQuery<Gig>): Promise<Gig> {
    return this.gigModel.findOne(GigFilterQuery);
  }

  async find(GigsFilterQuery: FilterQuery<Gig>): Promise<Gig[]> {
    return this.gigModel.find(GigsFilterQuery);
  }

  async create(Gig: Gig): Promise<Gig> {
    const newGig = new this.gigModel(Gig);
    return newGig.save();
  }

  async findOneAndUpdate(
    GigFilterQuery: FilterQuery<Gig>,
    Gig: Partial<Gig>,
  ): Promise<Gig> {
    return this.gigModel.findOneAndUpdate(GigFilterQuery, Gig, {
      new: true,
    });
  }
  async Delete(GigFilterQuery: FilterQuery<Gig>): Promise<Gig> {
    return this.gigModel.findOneAndDelete(GigFilterQuery);
  }
}
