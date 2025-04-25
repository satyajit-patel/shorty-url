// http://localhost:3000/api/todos/1

import { NextResponse } from "next/server";

// takes 2 parameter, request and an object
export async function GET(request: Request, {params} : {params: {id: string}}) {
    const {id} = params;
    return NextResponse.json({todos: "todo4" + id})
}

export async function POST(request: Request) {
    // console.log(await request.json());
    const body = await request.json();
    const {data} = body;
    return NextResponse.json({response: data})
}