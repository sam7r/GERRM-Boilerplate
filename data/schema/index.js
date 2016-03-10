import mongoose from 'mongoose';
import User from './user';
import { getSchema } from '@risingstack/graffiti-mongoose';
import config from '../../config';

mongoose.connect(config.DB_URL);

export default getSchema([User]);
