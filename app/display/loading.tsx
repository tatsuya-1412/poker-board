import { Spinner } from "@radix-ui/themes";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="flex flex-col items-center justify-center">
        <Spinner className="size=3" />
        <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
