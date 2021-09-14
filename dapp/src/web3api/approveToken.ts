import { ensUri, Token } from "./types";
import { Web3ApiClient } from "@web3api/client-js";

export async function approveToken(
  client: Web3ApiClient,
  token: Token,
  amount: string
): Promise<string> {
  return "...";
}
