/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

export const DynamicRouting = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <p>
        This is an example of dynamic routing, the parameter "name" is{" "}
        <b>{name}</b>
      </p>
    </>
  );
};

export default DynamicRouting;
