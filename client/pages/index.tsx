import Link from "next/link";
import { useEffect, useState } from "react";
import NavButton from "../components/Homepage/NavButton";

export default function Index() {
  const [tweetsCategory, setTweetsCategory] = useState<"forYou" | "following">(
    "forYou"
  );

  useEffect(() => {
    console.log("fetch data");
  }, [tweetsCategory]);

  return (
    <>
      <div className="sticky top-0 flex flex-col h-28 bg-transparent backdrop-blur-sm border-b border-gray-700">
        <Link
          href={"/"}
          className="w-full text-4xl basis-1/2 flex items-center">
          Home
        </Link>
        <div className="basis-1/2 grid grid-cols-2">
          <NavButton
            isSelected={tweetsCategory === "forYou"}
            setTweetsCategory={() => setTweetsCategory("forYou")}>
            For you
          </NavButton>
          <NavButton
            isSelected={tweetsCategory === "following"}
            setTweetsCategory={() => setTweetsCategory("following")}>
            Following
          </NavButton>
        </div>
      </div>
      <h1 className="text-4xl">Home</h1>
      <div className="text-3xl"></div>
    </>
  );
}
