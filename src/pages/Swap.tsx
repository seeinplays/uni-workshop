import {
  Flex,
  FormControl,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Swap() {
  return (
    <>
      <FormControl
        p='2.5rem'
        h='19rem'
        borderRadius='15px'
        maxW='35rem'
        boxShadow='0 20px 4px 0 rgba(0,0,0,.3)'
      >
        <Flex direction='column'>
          <Flex>
            <Input borderRadius='15px' h={55} mb={5} mr={5} />
            <Menu>
              <MenuButton
                borderRadius='15px'
                h={55}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              />
              <MenuList>
                <MenuItem>ETH</MenuItem>
                <MenuItem>DAI</MenuItem>
              </MenuList>
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
              />
              <MenuList>
                <MenuItem>ETH</MenuItem>
                <MenuItem>DAI</MenuItem>
              </MenuList>
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

export default Swap;
