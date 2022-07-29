import React from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Box,
  Text,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Navbar = () => {
  let { pathname } = useRouter();

  const isNotMainMenu = pathname !== "/";

  switch (pathname) {
    case "/change-title":
      pathname = "Title Transformer";
  }

  return (
    <Box w="100%" color="black" padding="8px 16px" position="fixed" top={0}>
      <Flex alignItems="center">
        <Text fontSize={24}>delman.io</Text>
        <div className="chakra-divider__size">
          <Divider orientation="vertical" />
        </div>
        <Breadcrumb margin="2px 0 0 20px">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Internship Program</BreadcrumbLink>
          </BreadcrumbItem>
          {isNotMainMenu && (
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{pathname}</BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </Flex>
    </Box>
  );
};

export default Navbar;
