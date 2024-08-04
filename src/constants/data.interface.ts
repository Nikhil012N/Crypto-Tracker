export interface CryptoInterface {
    name: string;
    symbol: string;
    png: string;
    price: number;
    volume: number;
    capital: number;
    age: number;
    timestamp: Date;
}

export interface TableInterFace {
    data: CryptoInterface[];
    error: any;
    loading: boolean;
  }
export interface CryptoState extends TableInterFace {
    symbol: string;

  }
