import { NextResponse } from "next/server";
import {getData, createData} from "@/controllers/page"
import {connectDB} from "@/configs/db"

connectDB();

export async function GET() {
    const urls = await getData();
    return NextResponse.json({urls})
}

export async function POST(request: Request) {
    const {originalUrl} = await request.json();
    const response = await createData(originalUrl);
    return NextResponse.json({message: response}, {status: 201})
}