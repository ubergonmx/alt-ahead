import { NextResponse } from 'next/server'
import populateUsers from './populateUsers'

export async function GET(request: Request) {
  console.log('Hello...')
  //populateUsers()
  return NextResponse.json({ msg: 'Successfully created User', status: 200 })
}
