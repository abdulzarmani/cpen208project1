import { NextResponse } from 'next/server';
import pool from '../../../lib/db'; // make sure this matches your folder

export async function GET() {
  try {
    const result = await pool.query('SELECT get_outstanding_fees()');
    return NextResponse.json(result.rows[0].get_outstanding_fees);
  } catch (err) {
    console.error('❌ Database Error:', err);  // 👈 Add this line
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}
