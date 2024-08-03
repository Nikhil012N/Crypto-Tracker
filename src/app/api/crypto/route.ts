import mongoConnection from '@/libs/mongo.db';
import CryptoData from '@/schema/crypto.schema';
import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req:NextRequest) {
    try{
        const  urlParam = await req?.nextUrl?.searchParams;
       const symbol=urlParam?.get("symbol");
        await mongoConnection();
        const data = await CryptoData.find({ symbol }).sort({ timestamp: -1 }).limit(20);

       return NextResponse.json(data,{status:200});
    }catch(error:any){
        log(error?.message)
       return NextResponse.json({message:error?.message},{status:error?.statusCode||500})
    }
   
}