import { NextResponse, NextRequest } from "next/server";
import getProject from "@/lib/sanity.queryproject";

// 1. Define the shape of your route parameters
interface RouteContext {
  params: Promise<{
    projectname: string;
  }>;
}

export async function GET(
  request: NextRequest, 
  context: RouteContext // 2. Apply the interface here
) {
  try {
    // 3. Await the params (Required in Next.js 15)
    const { projectname } = await context.params;

    if (!projectname) {
      return NextResponse.json({ error: "Project name is required" }, { status: 400 });
    }

    const data = await getProject(decodeURIComponent(projectname));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Project fetch error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}