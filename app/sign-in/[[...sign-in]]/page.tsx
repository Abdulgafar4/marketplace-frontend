import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-4xl font-bold mt-10">This is signin page</h1>
      <SignIn />
    </div>
  );
}
