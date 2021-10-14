import { Flex } from "@chakra-ui/react";
import React from "react";
import AzurCompareInput from "./Input/AzurCompareInput";
import Output from "./Output/Output";

export default function AzurDefault() {
  const [azurCompareInput, setAzurCompareInput] = React.useState({
    data: {},
    errors: {},
  });

  

  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      height={["auto", "auto", "auto", "100vh"]}
      width="100vw"
      margin="0"
    >
      <AzurCompareInput
        azurCompareInput={azurCompareInput}
        setAzurCompareInput={setAzurCompareInput}
        width={["100%", "100%", "100%", "50%"]} // Todo proper width layout
      />
      <Output maxHeight="100%" width={["100%", "100%", "100%", "50%"]} />
    </Flex>
  );
}
