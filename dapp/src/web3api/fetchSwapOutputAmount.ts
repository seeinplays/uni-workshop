import { ensUri, Pair, TokenAmount } from "./types";
import { Web3ApiClient } from "@web3api/client-js";

export async function fetchSwapOutputAmount(
  client: Web3ApiClient,
  pair: Pair,
  inputAmount: TokenAmount
): Promise<string> {
  return "0";
}
