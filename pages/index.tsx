import { ConnectButton, useWallet } from "@openformat/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import Leaderboard from "./components/leaderboard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address } = useWallet();

  async function handleReward(event: Event) {
    setIsLoading(true);

    event.preventDefault();

    await fetch("/api/reward", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action_id: "skate_kickflip",
        amount: 10,
        receiver: address,
      }),
    });
    setIsLoading(false);
    alert("You received 10XP for logging a skate 🛹");
  }

  return (
    <>
      <Head>
        <title>OPENFORMAT | NextJS Example</title>
      </Head>
      <main
        className={`${inter.className}`}
        style={{ padding: "1rem" }}
      >
        <ConnectButton modalSize={"compact"} />
        <div style={{ margin: "1rem" }}>
          <h1>Trick Tracker 🛹</h1>
          <h3>How to play:</h3>
          <ol className="list-decimal">
            <li>Watch the skate competition.</li>
            <li>When you see a skater land a trick, log it.</li>
          </ol>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              margin: "1rem",
            }}
          >
            <label>Choose trick:</label>
            <select>
              <option>Olie</option>
              <option>Kickflip</option>
              <option>Heelflip</option>
            </select>
            <label>Choose skater:</label>
            <select>
              <option>Tony Hawk</option>
              <option>Rodney Mullen </option>
              <option>Bob Burnquist</option>
            </select>

            <button
              type="submit"
              onClick={handleReward}
              style={{ marginTop: "1rem" }}
            >
              {isLoading ? "Logging Trick" : "Log Trick"}
            </button>
          </form>
        </div>
        <Leaderboard />
      </main>
    </>
  );
}
