import { useState } from "react";
import { tokenList } from "../constants/token-list";
import { useWeb3React } from "@web3-react/core";
import {
  Flex,
  FormControl,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Swap() {

  const { chainId } = useWeb3React();
  const [tokenInIndex, setTokenInIndex] = useState(-1);
  const [tokenOutIndex, setTokenOutIndex] = useState(-1);

  const TokenMenu = (props: { in?: boolean }) => (
    <MenuList>
      {chainId ?
        tokenList.map((token, index) => {
          return chainId === token.chainId ?
            <MenuItem key={`token-${index}`} onClick={() => {
              props.in ? setTokenInIndex(index) : setTokenOutIndex(index)
            }}>
              {token.name} ({token.symbol})
            </MenuItem> :
            undefined;
        }).filter((value) => !!value) :
        <MenuItem disabled={true}>Connect Wallet</MenuItem>
      }
    </MenuList>
  );

  const TokenMenuIcon = (props: { index: number }) => (
    props.index > -1 ?
      <Image src={tokenList[props.index].logoURI} width={"40px"} /> :
      <Text>?</Text>
  );

  return (
    <>
      <FormControl
        p='2.5rem'
        h='19rem'
        borderRadius='15px'
        maxW='35rem'
        boxShadow='0 2px 4px 0 rgba(0,0,0,.3)'
      >
        <Flex direction='column' yarn st>
          <Flex>
            <Input borderRadius='15px' h={55} mb={5} mr={5} />
            <Menu>
              <MenuButton
                borderRadius='15px'
                h={55}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <TokenMenuIcon index={tokenInIndex} />
              </MenuButton>
              <TokenMenu in />
            </Menu>
          </Flex>
          <Flex>
            <Input borderRadius='15px' h={55} mb={10} mr={5} />
            <Menu>
              <MenuButton
                borderRadius='15px'
                h={55}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <TokenMenuIcon index={tokenOutIndex} />
              </MenuButton>
              <TokenMenu />
            </Menu>
          </Flex>
        </Flex>
        <Button w='100%' borderRadius='15px' size='lg' colorScheme='green'>
          Swap
        </Button>
      </FormControl>
    </>
  );
}
