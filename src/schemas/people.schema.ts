import Joi from "joi";
import { People } from "protocols";
//import { Music } from "./../protocols/Music";

export const peopleSchema = Joi.object<People>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
})