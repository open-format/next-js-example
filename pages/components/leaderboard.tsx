import { fromWei, useRawRequest } from "@openformat/react";
import { gql } from "graphql-request";

// We query the OPENFORMAT subgraph - https://subgraphs.openformat.tech/subgraphs/name/open-format/mumbai
const QUERY = gql`
  query generateLeaderboard($token: String!) {
    fungibleTokenBalances(
      where: { token_: { id: $token } }
      orderBy: balance
      orderDirection: desc
    ) {
      id
      balance
      user {
        id
      }
      updatedAt
    }
  }
`;

export default function Leaderboard() {
  const { data } = useRawRequest<LeaderboardResponse, any>({
    query: QUERY,
    variables: { token: process.env.NEXT_PUBLIC_XP_TOKEN_ID },
    config: { refetchInterval: 2000 },
  });

  if (!data) return <div>loading leaderboard</div>;

  return (
    <div style={{ margin: "1rem" }}>
      <h1>Leaderboard</h1>
      <ul>
        {data.fungibleTokenBalances.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>{item.user.id}</p>
            <p>{Number(fromWei(item.balance)).toFixed(0)} XP</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
