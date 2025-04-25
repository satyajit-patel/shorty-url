// page name should be route.ts

import { NextResponse } from "next/server";

// http://localhost:3000/api/todos
export async function GET() {
    return NextResponse.json({todos: ["todo1", "todo2"]})
}

export async function POST() {
    return NextResponse.json({todos: "todo3"}, {status: 201})
}