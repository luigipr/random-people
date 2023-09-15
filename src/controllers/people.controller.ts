import { Request, Response } from "express";
import { createPeople } from "protocols";
import { peopleRepository } from "repositories/people.repository";

function getPeople(req: Request, res: Response) {
    const {id} = req.params
    const peopleId = Number(id)
    const people = peopleRepository.getPersonById(peopleId)

  res.send(people);
}

function createPeople(req: Request, res: Response) {
  const people = req.body as createPeople // TODO Asserção do tipo
  peopleRepository.createPeople(people);
  res.sendStatus(201);
}

const peopleController = {
  getPeople,
  createPeople
}

export default peopleController;