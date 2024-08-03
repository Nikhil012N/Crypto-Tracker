import { CryptoInterface } from '@/constants/data.interface';
import mongoose, { Schema, Document } from 'mongoose';

interface CryptoDataModel extends CryptoInterface, Document {}

const cryptoSchema: Schema = new Schema({
  name: { type: String, required: true, index: true },
  symbol: { type: String, required: true, index: true },
  png: { type: String, required: true },
  price: { type: Number, required: true },
  volume: { type: Number, required: true },
  capital: { type: Number, required: true },
  age: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now, index: { expires: '86400s' } }
}, { versionKey: false });

const CryptoData = mongoose.models.CryptoData || mongoose.model<CryptoDataModel>('CryptoData', cryptoSchema);
export default CryptoData;