import React from "react";
import { FieldArray } from "formik";

import { IoMdRemove } from "react-icons/io";
import { FieldArrayInput } from "./FieldArrayInput";
import PropTypes from "prop-types";

import { Flex, Stack, Input, Button, Text } from "@chakra-ui/react";
import _ from "lodash";

const PartyStrengthsFieldArray = ({ values, errors, fieldArrayName, MAX_FRACTIONS }) => {
  const partyStrengths = _.get(values, fieldArrayName)
  const errorsPartyStrengths = _.get(errors, fieldArrayName)
  
  return (
    <FieldArray name={fieldArrayName}>
      {({ remove, push }) => (
        <Stack
          p={2}
          layerStyle={
            errorsPartyStrengths != null &&
            typeof errorsPartyStrengths === "string"
              ? "errorGlow"
              : ""
          }
          title={
            errorsPartyStrengths != null &&
            typeof errorsPartyStrengths === "string"
              ? errorsPartyStrengths
              : "Fraktionsstärken"
          }
        >
          {partyStrengths.length > 0 &&
            partyStrengths.map((_, index) => (
              <Flex key={index} flexDirection="row">
                <FieldArrayInput
                  fieldKey="name"
                  fieldArrayName={fieldArrayName}
                  index={index}
                  fieldType="text"
                  errors={errors}
                  width='30ex'
                />
                <FieldArrayInput
                  fieldKey="strength"
                  fieldArrayName={fieldArrayName}
                  index={index}
                  fieldType="number"
                  errors={errors}
                  width='14ex'
                />
                <Button
                  variant="ghost"
                  isDisabled={partyStrengths.length <= 1}
                  title={
                    partyStrengths.length > 1
                      ? "Fraktion entfernen"
                      : "Fraktion kann nicht entfernt werden, da es mindestens eine Fraktion geben muss."
                  }
                  onClick={() => remove(index)}
                >
                  <IoMdRemove />
                </Button>
              </Flex>
            ))}

          {/*ADD FRACTION*/}
          <Button
            variant="ghost"
            _hover={{
              backgroundColor: "brand.darkBlueAlpha.300",
            }}
            px={0}
            m={0}
            mt={1}
            width={"100%"}
            isDisabled={partyStrengths.length >= MAX_FRACTIONS}
            title={
              partyStrengths.length < MAX_FRACTIONS
                ? "Fraktion hinzufügen"
                : `Es können keine weiteren Fraktion hinzugefügt werden. Dieser Rechner unterstützt maximal ${MAX_FRACTIONS} Einträge für Fraktionen.`
            }
            onClick={() => push({ name: "Fraktion XYZ", strength: 0 })}
          >
            <Flex flexDirection="row" m={0} width={"100%"}>
              <Input width='30ex' disabled variant="fakeInput" />
              <Input width='14ex' disabled variant="fakeInput" />
              <Button as="span" variant="ghost" pointerEvents="none">
                <Text color="blackAlpha.400">+</Text>
              </Button>
            </Flex>
          </Button>
        </Stack>
      )}
    </FieldArray>
  );
};

PartyStrengthsFieldArray.propTypes = {
    values: PropTypes.object,
    errors: PropTypes.object,
    fieldArrayName: PropTypes.string,
    MAX_FRACTIONS: PropTypes.number,
  };
  

export default PartyStrengthsFieldArray