import { pool } from "../db.js";
// palauttaa olion -> siisti syntaksi
import mysql from "mysql2/promise";

// Tähän tulee eri vaiheet taulukossa
export async function haeKaikkiVaiheet(): Promise<string[]> {
  const conn = await pool.getConnection();
  try {
    // const [rows] = await conn.query<mysql.RowDataPacket[]> (
    //   "SELECT vaihe FROM haeKaikkiVaiheet;"
    // );

    const kyselyPromise = conn.query<mysql.RowDataPacket[]>("SELECT * FROM opinnaytetyot");
    const tulosTaulukko = await kyselyPromise;
    const rows = tulosTaulukko[0]; // Tietokantarivit
    const fields = tulosTaulukko[1]; // Metadata

    return rows.map((r) => r.vaihe);
  } finally {
    conn.release();
  }

}

export async function haeVaiheenSelitys(query: string): Promise<string[]> {
  const conn = await pool.getConnection();
  try {
    const hakutermi: string = `%${query}%`;
    const sqlKysely: string = "SELECT selitys FROM vaiheet WHERE vaihe LIKE ?;"
    const parametrit: string[] = [hakutermi];
    const kyselyPromise = conn.query<mysql.RowDataPacket[]>(sqlKysely, parametrit);
    const tulosTaulukko = await kyselyPromise;
    const rows = tulosTaulukko[0];
    // Otetaan pelkkä selitys oliolistasta
    return rows.map((row) => row.selitys as string); 
   
  } finally {
    conn.release();
  }
}
