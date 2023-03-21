const example = (argument1) => {
  return argument1.split(" ");
};

example(1);

export const example1 = (props) => {
  const name = props?.name;
  const lastName = props?.lastName;
  const age = props?.age;

  return name?.split(" ");
};

export const example2 = (props) => {
  const { name, lastName, age } = props;
  return name.split(" ");
};
