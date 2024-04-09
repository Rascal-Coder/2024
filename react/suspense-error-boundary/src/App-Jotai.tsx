import { Suspense } from "react";
import { atom, useAtom } from "jotai";
const getData = async () => {
  const userId = 1;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}?_delay=2000`
  );
  return response.json();
};
const userAtom = atom(getData);

const UserName = () => {
  const [user] = useAtom(userAtom);
  return <div>User name: {user.name}</div>;
};

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <UserName />
    </Suspense>
  );
}
