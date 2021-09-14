import { Web3ApiClient } from "@web3api/client-js";
import { ensUri, Token } from "./types";

export async function swapTokenPair(
  client: Web3ApiClient,
  inputToken: Token,
  outputToken: Token,
  inputAmount: string,
  userAddress: string,
  allowedSlippage: string = "0.1",
  ttl: number = 120
): Promise<string> {
  return "...";
}
