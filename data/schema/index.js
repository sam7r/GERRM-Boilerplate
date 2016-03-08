import mongoose from 'mongoose';
import User from './user';
import { getSchema } from '@risingstack/graffiti-mongoose';
import config from '../../config';

mongoose.connect(config.mongoUrl);

export default getSchema([User]);
