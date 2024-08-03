import axios from "axios";
import cryptoData from "@/schema/crypto.schema";
import mongoConnection from "@/libs/mongo.db";
import { log } from "console";
import { NextResponse } from "next/server";
import { cryptoTypes } from "@/constants/crypto.types";



export async function GET() {
  try {
    await mongoConnection();

    const responses = await axios.post(
      "https://api.livecoinwatch.com/coins/map",
      {
        codes: cryptoTypes,
        currency: "INR",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 0,
        meta: true,
      },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": "35f737e8-8b17-4160-a498-a1d8c30351c4",
        },
      }
    ).then((resp) => resp?.data);

    for (const response of responses) {
      const newData = new cryptoData({
        name: response?.name,
        png: response?.png64,
        price: response?.rate,
        volume: response?.volume,
        capital: response?.cap,
        age: response?.age,
        symbol: response?.code,
        timestamp: new Date(),
      });
      await newData.save();
    }

    return NextResponse.json({},{status:201})
  } catch (error: any) {
    return NextResponse.json({ message: "An error occurred", error: error.message },{status:500});
  }
}

export async function DELETE() {
    try {
      await mongoConnection();
  
    
  
      return NextResponse.json({message:"data delete of past 1 day"},{status:201})
    } catch (error: any) {
      return NextResponse.json({ message: "An error occurred", error: error.message },{status:500});
    }
  }
  