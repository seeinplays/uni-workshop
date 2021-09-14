import { UNISWAP_ROUTER_CONTRACT } from "./types";
import { Web3ApiClient } from "@web3api/client-js";
import Decimal from "decimal.js-light";

export async function approvalNeeded(
  client: Web3ApiClient,
  tokenAddress: string,
  userAddress: string,
  spendAmount: string
): Promise<boolean> {
  return false;
}
