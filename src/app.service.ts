import { Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { AuthDocument, User } from './app.schema';

@Injectable()
export class AppService {
  async getHello() {
    constructor(
      @InjectModel('Task') private TaskModel: Model<TaskDocument>,
    ) { };


    const singleTask = await this.TaskModel.findOne({});
    return {
      status: 'success',
      data,
    };
  }
}
