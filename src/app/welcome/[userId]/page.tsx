import * as T from "./types";
import { database } from "@/database";

export default function WelcomePage({
  params: { userId },
}: T.IWelcomePageProps) {
  const id = userId.split("%")[1];

  const user = database.find((user) => user.id === id);

  console.log(database);
  console.log(id);
  console.log(user);
  console.log(userId);

  return (
    <>
      <h1>WelcomePage</h1>
    </>
  );
}
