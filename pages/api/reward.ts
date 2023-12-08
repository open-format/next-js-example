// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  ActivityType,
  Chains,
  OpenFormatSDK,
  RewardTriggerParams,
  RewardType,
  toWei,
} from "@openformat/react";
import { ContractReceipt } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  data: ContractReceipt;
};

const sdk = new OpenFormatSDK({
  network: Chains.polygonMumbai,
  starId: process.env.APPLICATION_ID as string,
  signer: process.env.PRIVATE_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { action_id, receiver } = req.body;

    const params: RewardTriggerParams = {
      receiver,
      tokens: [
        {
          id: action_id,
          address: process.env.XP_TOKEN_ID as string,
          type: RewardType.XP_TOKEN,
          activityType: ActivityType.ACTION,
          amount: toWei("10"),
        },
        {
          id: "Flip Master",
          address: process.env.REWARD_TOKEN_ID as string,
          type: RewardType.CONSTELLATION_TOKEN,
          activityType: ActivityType.MISSION,
          amount: toWei("5"),
        },
      ],
    };

    const reward = await sdk.Reward.trigger(params);

    res.json({ status: "success", data: reward });
  } catch (e: any) {
    res.status(500).json({ status: "failed", message: e.message });
  }
}
