import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 my-10">
      <h1 className="text-2xl w-72 text-center font-bold mt-10">
        Join the CleverMart community! 🎉 Your next great find is just a click
        away.
      </h1>
      <SignUp />
    </div>
  );
}
