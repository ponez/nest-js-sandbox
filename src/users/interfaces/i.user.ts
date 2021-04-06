import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly id?: string;
  readonly name: string;
  readonly SSN: number;
  readonly age: number;
}
