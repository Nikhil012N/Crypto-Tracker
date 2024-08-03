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

export interface CryptoState {
    data: CryptoInterface[] ;
    symbol: string;
    loading: boolean;
    error: string | null;
  }