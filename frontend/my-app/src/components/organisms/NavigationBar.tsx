import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavigationBar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="nav" bg="teal.500" color="white" p={4}>
        <Flex align="center" justify="space-between">
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
            bg="teal.500"
            _hover={{ bg: "teal.600" }}
            mr={2}
          />
          <Text fontSize="lg" fontWeight="bold" flex="1" textAlign="center">
            {" "}
            MyApp
          </Text>
          <Box w="40px"></Box>{" "}
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>メニュー</DrawerHeader>
            <DrawerBody>
              <VStack
                as="ul"
                listStyleType="none"
                spacing={4}
                align="flex-start"
              >
                <Box as="li">
                  <Link to="/home" onClick={onClose}>
                    ホーム
                  </Link>
                </Box>
                <Box as="li">
                  <Link to="/settings" onClick={onClose}>
                    設定
                  </Link>
                </Box>
                <Box as="li">
                  <Link to="/admin" onClick={onClose}>
                    管理
                  </Link>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
