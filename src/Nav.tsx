import React from 'react';
import { Link, Flex, Button, Image, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Nav() {
  return (
    <>
      <Flex
        justify='space-between'
        align='center'
        padding='1rem 2rem 1rem 2rem'
        boxShadow='0 5px 4px 0 rgba(0,0,0,.2)'
      >
        <Flex align='center'>
          <Image boxSize='50' mr={5} src='./polywrap.png' alt='Polywrap Logo' />
          <Text fontStyle='italic' fontWeight='bold'>
            POLYWRAP WORKSHOP
          </Text>
        </Flex>
        <Flex align='center'>
          <Link
            mr={5}
            href='https://docs.polywrap.io/#polywrap-vs-javascript-sdks'
            isExternal
          >
            Why Polywrap? <ExternalLinkIcon mx='2px' />
          </Link>
          <Link
            mr={5}
            href='https://github.com/polywrap/uni-workshop'
            isExternal
          >
            Code <ExternalLinkIcon mx='2px' />
          </Link>
          <Link mr={5} href='https://docs.polywrap.io/' isExternal>
            Documentation <ExternalLinkIcon mx='2px' />
          </Link>
          <Button borderRadius='15px' colorScheme='green'>
            Connect
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Nav;
