type FungibleTokenBalance = {
  id: string;
  balance: string;
  user: User;
  updatedAt: string;
};

type User = {
  id: string;
};
type LeaderboardResponse = {
  fungibleTokenBalances: FungibleTokenBalance[];
};
