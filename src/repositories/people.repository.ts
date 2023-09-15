import { connection } from "database/database";
import { People, createPeople } from "protocols";

async function getPersonById(id: number) {
    
    const result = await connection.query<People>(
      `SELECT * FROM people WHERE id=$1 `
      , [id]);
  
    const person = result.rows;
    return person;
}

async function createPeople(people: createPeople) {
    const {firstName, lastName} = people
    await connection.query<People>(`INSERT INTO people VALUES firstName=$1 AND lastName=$2`, [firstName, lastName]);
 }


  export const peopleRepository = {getPersonById, createPeople}