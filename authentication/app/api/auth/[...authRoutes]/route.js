import { NextResponse } from "next/server";

export function GET(){
    return NextResponse .json({
        message: "Aditya is here."
    })
}
export function POST(){
    return NextResponse .json({
        message: "Aditya is POSTing here."
    })
}