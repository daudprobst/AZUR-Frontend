import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import AzurCompareInput from "./Input/AzurCompareInput";

export default function AzurDefault() {
  const [azurCompareInput, setAzurCompareInput] = React.useState({
    data: {},
    errors: {},
  });

  return (
    <Flex flexDirection={["column", "column", "column", "row"]} height="100vh">
      <AzurCompareInput
        azurCompareInput={azurCompareInput}
        setAzurCompareInput={setAzurCompareInput}
      />
      <Box flex={1}>
        <Heading size="3xl">Ergebniss</Heading>
        {JSON.stringify(azurCompareInput)}
      </Box>
    </Flex>
  );
}