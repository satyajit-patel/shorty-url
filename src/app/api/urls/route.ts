import { NextResponse } from "next/server";
import {getData, createData, deleteData} from "@/controllers/page"
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

export async function DELETE(request: Request) {
    const {id} = await request.json();
    await deleteData(id);
    return NextResponse.json({message: "success"});
}