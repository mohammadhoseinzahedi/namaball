import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NamaBall",
  description:
    "Stay ahead of the game with real-time football livescores and standings!",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <p>
            Welcome to the Football Data Demo App, your one-stop destination for
            real-time livescores and standings! Powered by NextJS and the
            <a href="https://www.football-data.org/"> football-data.org </a>
            api, this app covers supported competitions, providing you with
            up-to-the-minute updates and rankings. Dive in and stay ahead of the
            game!
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground dark:bg-background text-background dark:text-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/mohammadhoseinzahedi/namaball"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github-mark-white.svg"
              alt="Github logomark"
              width={20}
              height={20}
            />
            Source Code
          </a>
        </div>
      </main>
    </div>
  );
}
