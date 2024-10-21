import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-4xl font-bold mt-5">This is signup page</h1>
      <SignUp />
    </div>
  );
}
