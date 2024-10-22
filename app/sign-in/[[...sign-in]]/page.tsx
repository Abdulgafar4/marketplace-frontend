import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 my-10">
      <h1 className="text-2xl w-72 text-center font-bold mt-10">
        Good to see you again! 😄 Let's get back to discovering great deals.
      </h1>
      <SignIn />
    </div>
  );
}
