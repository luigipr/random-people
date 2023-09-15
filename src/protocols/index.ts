export type People = {
    id: number;
	firstName: string;
	lastName: string;
}

export type createPeople = Omit<People, "id">