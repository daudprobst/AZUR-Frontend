import React from "react";
import PropTypes from "prop-types";
import PieChart from "../PieChart";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Center,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";

AnteileOutput.propTypes = {
  seatSplit: PropTypes.object,
  isAmbiguous: PropTypes.bool,
};

export default function AnteileOutput({ isAmbiguous, seatSplit }) {
  const sizes = useTheme().sizes;
  const innerWidthPx = convertRemToPixels(sizes[20]);
  const outerWidthPx = convertRemToPixels(sizes[56]);

  return (
    <Flex flexDirection="column">
      <Center>
        {isAmbiguous ? (
           <Alert status="warning">
            <AlertIcon />
            <AlertTitle mr={2}>Mehrdeutiges Ergebnis</AlertTitle>
            <AlertDescription>
              Es lässt sich kein eindeutiges Ergebnis für diese Eingabe berechnen. Das heißt, dass die Einheiten
              nicht eindeutig bestimmten Fraktionen zugewiesen werden können. Es kann helfen eine andere mathematische
              Methode zu wählen, oder diese Verteilungsgröße zu vermeiden.
            </AlertDescription>
          </Alert>
        ) : (
          <PieChart
            data={seatSplit}
            outerRadius={outerWidthPx}
            innerRadius={innerWidthPx}
          />
        )}
      </Center>
      <Center my="10">
        <Table>
          <Thead>
            <Tr>
              {Object.keys(seatSplit).map((fractionName) => (
                <Th key={fractionName}>{fractionName} </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {Object.entries(seatSplit).map(
                ([fractionName, fractionStrength]) => (
                  <Td key={fractionName}>
                    {Array.isArray(fractionStrength)
                      ? fractionStrength.join(" oder ")
                      : fractionStrength}
                  </Td>
                )
              )}
            </Tr>
          </Tbody>
        </Table>
      </Center>

    </Flex>
  );
}

function convertRemToPixels(rem) {
  return (
    parseFloat(rem) *
    parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
}
