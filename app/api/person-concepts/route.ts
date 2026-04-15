import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT id, code, name
      FROM worc_person_concept
      ORDER BY id DESC
    `)

    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('GET /api/person-concepts failed:', error)
    return NextResponse.json(
      { error: 'Kunde inte hämta personbegrepp' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const code = body.code?.trim()
    const name = body.name?.trim()

    if (!code || !name) {
      return NextResponse.json(
        { error: 'Både code och name måste fyllas i' },
        { status: 400 }
      )
    }

    const result = await pool.query(
      `
      INSERT INTO worc_person_concept (code, name)
      VALUES ($1, $2)
      RETURNING id, code, name
      `,
      [code, name]
    )

    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    console.error('POST /api/person-concepts failed:', error)
    return NextResponse.json(
      { error: 'Kunde inte spara personbegrepp' },
      { status: 500 }
    )
  }
}
