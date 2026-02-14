import getRecentProjects from '@/lib/sanity.queryrecent'
import { NextRequest,NextResponse } from 'next/server'
export async function GET(){
    const data =await getRecentProjects();
    return NextResponse.json(data);
}