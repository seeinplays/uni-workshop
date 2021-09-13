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
      <FormControl maxW='35rem'>
        <Flex direction='column'>
          <Flex>
            <Input mb={5} mr={5} />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
              ></MenuButton>
              <MenuList>
                <MenuItem>ETH</MenuItem>
                <MenuItem>DAI</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Flex>
            <Input mb={5} mr={5} />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
              ></MenuButton>
              <MenuList>
                <MenuItem>ETH</MenuItem>
                <MenuItem>DAI</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Button sz='md' colorScheme='teal'>
          Swap
        </Button>
      </FormControl>
    </>
  );
}

export default Swap;
