import { Request, Response } from "express";
import { createPeople } from "protocols";
import { peopleRepository } from "../repositories/people.repository";

async function getPeople(req: Request, res: Response) {
    const {id} = req.params
    console.log(id)
    const peopleId = Number(id)
    console.log(peopleId)
    const people = await peopleRepository.getPersonById(peopleId)

  res.send(people);
}

async function createPeople(req: Request, res: Response) {
  const people = req.body as createPeople // TODO Asserção do tipo
  await peopleRepository.createPeople(people);
  res.sendStatus(201);
}

const peopleController = {
  getPeople,
  createPeople
}

export default peopleController;