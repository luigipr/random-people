import { connection } from "../database/database";
import { People, createPeople } from "protocols";

async function getPersonById(id: number) {
    console.log(id)
    const result = await connection.query(
      `SELECT * FROM people WHERE id=$1`, [id]);
  
    const person = result.rows;
    return person;
}

async function createPeople(people: createPeople) {
    const {firstName, lastName} = people;
    console.log(firstName, lastName)
    await connection.query(`INSERT INTO people ("firstName" , "lastName") VALUES ($1,$2)`, [firstName, lastName]);
 }


  export const peopleRepository = {getPersonById, createPeople}