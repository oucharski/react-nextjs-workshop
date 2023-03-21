type BaseType = {
  name: string;
  alias: string;
  age: number;
};

// makes everything optional
type ExamplePartial = Partial<BaseType>;

type OmitType = "name" | "alias";

// omits defined types
type ExampleOmit = Omit<BaseType, "name">;
type ExampleOmit2 = Omit<BaseType, OmitType>;

type Country = { name: string; population?: number };

type Person = BaseType & { country?: Country; lastName: string };

type Address = { country: Person["country"] };

interface IPerson extends BaseType {
  country: string;
  lastName: string;
}

export const example = (props: Omit<Person, "alias">) => {
  const name = props?.name;
  const lastName = props?.lastName;
  const age = props?.age;

  return name?.split(" ");
};

export const example2 = (props: Omit<Person, "alias">) => {
  const { name, lastName, age } = props;
  return name.split(" ");
};

const ages1 = [1, 2, 3];
const ages2 = ["a", 5, 6];
const ages3: (number | string)[] = [...ages1, ...ages2];

const part1 = { name: "Brian", lastName: "Mullins" };

const part2 = {
  name: "John",
  age: 34,
  country: {
    name: "Brazil",
    population: 1000,
  },
};

const person2: Person = {
  ...part1,
  ...part2,
  name: "Felipe",
  alias: "1",
};

export const getAddresses = (addresses: Address[]) => {
  return addresses.map((a) => a.country);
};

const person: Omit<Person, "alias"> = {
  name: "Felipe",
  lastName: "Oucharski",
  age: 34,
  country: {
    name: "Brazil",
    population: 1000,
  },
};

example(person);

const car = {
  brand: "Volkswagen",
  year: 2022,
  model: "Beetle",
  speedTickets: [
    {
      year: 12932,
      price: 1231,
      driver: "Brian",
    },
  ],
};

type Car = typeof car;
