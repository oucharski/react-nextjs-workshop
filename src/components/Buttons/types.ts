export type ButtonsProps = {
  value: number;
  name: string;
  setter: (value: number) => () => void;
};
