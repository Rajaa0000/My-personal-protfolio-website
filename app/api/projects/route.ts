import { NextRequest,NextResponse } from "next/server";
import getprojects from "@/lib/sanity.queryprojects"
export  async function GET(){
  const data =await getprojects();
  return NextResponse.json(data);
}