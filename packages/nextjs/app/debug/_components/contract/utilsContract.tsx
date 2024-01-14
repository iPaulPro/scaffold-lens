import { AbiFunction, AbiParameter } from "abitype";

/**
 * Generates a key based on function metadata
 */
const getFunctionInputKey = (functionName: string, input: AbiParameter, inputIndex: number): string => {
  const name = input?.name || `input_${inputIndex}_`;
  return functionName + "_" + name + "_" + input.internalType + "_" + input.type;
};

// This regex is used to identify array types in the form of `type[size]`
const ARRAY_TYPE_REGEX = /\[.*\]$/;

/**
 * Parses form input with array support
 */
const getParsedContractFunctionArgs = (form: Record<string, any>) => {
  let keys = Object.keys(form);

  const tuples = keys.filter(key => {
    const keySplitArray = key.split("_");
    const baseTypeOfArg = keySplitArray[keySplitArray.length - 1];
    return baseTypeOfArg.startsWith("tuple");
  });

  const groupedTuples = tuples.reduce((grouped: Record<string, any[]>, key: string) => {
    const keySplitArray = key.split("_");

    const functionName = keySplitArray[0];
    if (!grouped[functionName]) {
      grouped[functionName] = [];
    }

    const valueOfArg = form[key];

    if (valueOfArg.length) {
      if (valueOfArg.startsWith("[") && valueOfArg.endsWith("]")) {
        grouped[functionName].push(JSON.parse(valueOfArg));
      } else {
        grouped[functionName].push(valueOfArg);
      }
      keys = keys.filter(k => k !== key);
    }

    return grouped;
  }, {});

  const parsedArguments = keys.map(key => {
    try {
      const keySplitArray = key.split("_");
      const baseTypeOfArg = keySplitArray[keySplitArray.length - 1];
      let valueOfArg = form[key];

      if (ARRAY_TYPE_REGEX.test(baseTypeOfArg)) {
        valueOfArg = JSON.parse(valueOfArg);
      } else if (baseTypeOfArg === "tuple") {
        valueOfArg = groupedTuples[keySplitArray[0]];
      } else if (baseTypeOfArg === "bool") {
        if (["true", "1", "0x1", "0x01", "0x0001"].includes(valueOfArg)) {
          valueOfArg = 1;
        } else {
          valueOfArg = 0;
        }
      }
      return valueOfArg;
    } catch (error: any) {
      // ignore error, it will be handled when sending/reading from a function
    }
  });
  return parsedArguments;
};

const getInitialFormState = (abiFunction: AbiFunction) => {
  const initialForm: Record<string, any> = {};
  if (!abiFunction.inputs) return initialForm;
  abiFunction.inputs.forEach((input, inputIndex) => {
    const key = getFunctionInputKey(abiFunction.name, input, inputIndex);
    initialForm[key] = "";
  });
  return initialForm;
};

export { getFunctionInputKey, getInitialFormState, getParsedContractFunctionArgs };
