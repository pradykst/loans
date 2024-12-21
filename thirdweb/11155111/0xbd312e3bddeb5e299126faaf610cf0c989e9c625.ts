import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/



/**
 * Creates an event object for the LoanDefaulted event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { loanDefaultedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  loanDefaultedEvent()
 * ],
 * });
 * ```
 */
export function loanDefaultedEvent() {
  return prepareEvent({
    signature: "event LoanDefaulted(uint256 loanId)",
  });
};
  



/**
 * Creates an event object for the LoanRepaid event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { loanRepaidEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  loanRepaidEvent()
 * ],
 * });
 * ```
 */
export function loanRepaidEvent() {
  return prepareEvent({
    signature: "event LoanRepaid(uint256 loanId)",
  });
};
  



/**
 * Creates an event object for the LoanRequested event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { loanRequestedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  loanRequestedEvent()
 * ],
 * });
 * ```
 */
export function loanRequestedEvent() {
  return prepareEvent({
    signature: "event LoanRequested(uint256 loanId, address borrower, address lender, uint256 loanAmount, uint256 collateralId, address collateralContract, uint256 dueDate)",
  });
};
  

/**
 * Represents the filters for the "OwnershipTransferred" event.
 */
export type OwnershipTransferredEventFilters = Partial<{
  previousOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}>
newOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}>
}>;

/**
 * Creates an event object for the OwnershipTransferred event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownershipTransferredEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownershipTransferredEvent({
 *  previousOwner: ...,
 *  newOwner: ...,
 * })
 * ],
 * });
 * ```
 */
export function ownershipTransferredEvent(filters: OwnershipTransferredEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "loanCounter" function on the contract.
 * @param options - The options for the loanCounter function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { loanCounter } from "TODO";
 *
 * const result = await loanCounter();
 *
 * ```
 */
export async function loanCounter(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x34d9289e",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "loans" function.
 */
export type LoansParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "loans" function on the contract.
 * @param options - The options for the loans function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { loans } from "TODO";
 *
 * const result = await loans({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function loans(
  options: BaseTransactionOptions<LoansParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe1ec3c68",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "borrower",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "lender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "loanAmount",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "collateralId",
      "type": "uint256"
    },
    {
      "internalType": "contract IERC721",
      "name": "collateralContract",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "dueDate",
      "type": "uint256"
    },
    {
      "internalType": "bool",
      "name": "repaid",
      "type": "bool"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "owner" function on the contract.
 * @param options - The options for the owner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { owner } from "TODO";
 *
 * const result = await owner();
 *
 * ```
 */
export async function owner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8da5cb5b",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "checkLoanDefault" function.
 */
export type CheckLoanDefaultParams = {
  loanId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"loanId","type":"uint256"}>
};

/**
 * Calls the "checkLoanDefault" function on the contract.
 * @param options - The options for the "checkLoanDefault" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { checkLoanDefault } from "TODO";
 *
 * const transaction = checkLoanDefault({
 *  loanId: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function checkLoanDefault(
  options: BaseTransactionOptions<CheckLoanDefaultParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x1fd3ca77",
  [
    {
      "internalType": "uint256",
      "name": "loanId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.loanId]
  });
};




/**
 * Calls the "renounceOwnership" function on the contract.
 * @param options - The options for the "renounceOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { renounceOwnership } from "TODO";
 *
 * const transaction = renounceOwnership();
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function renounceOwnership(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x715018a6",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "repayLoan" function.
 */
export type RepayLoanParams = {
  loanId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"loanId","type":"uint256"}>
};

/**
 * Calls the "repayLoan" function on the contract.
 * @param options - The options for the "repayLoan" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { repayLoan } from "TODO";
 *
 * const transaction = repayLoan({
 *  loanId: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function repayLoan(
  options: BaseTransactionOptions<RepayLoanParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xab7b1c89",
  [
    {
      "internalType": "uint256",
      "name": "loanId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.loanId]
  });
};


/**
 * Represents the parameters for the "requestLoan" function.
 */
export type RequestLoanParams = {
  loanAmount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"loanAmount","type":"uint256"}>
collateralId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"collateralId","type":"uint256"}>
collateralContract: AbiParameterToPrimitiveType<{"internalType":"contract IERC721","name":"collateralContract","type":"address"}>
loanDuration: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"loanDuration","type":"uint256"}>
lender: AbiParameterToPrimitiveType<{"internalType":"address","name":"lender","type":"address"}>
};

/**
 * Calls the "requestLoan" function on the contract.
 * @param options - The options for the "requestLoan" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { requestLoan } from "TODO";
 *
 * const transaction = requestLoan({
 *  loanAmount: ...,
 *  collateralId: ...,
 *  collateralContract: ...,
 *  loanDuration: ...,
 *  lender: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function requestLoan(
  options: BaseTransactionOptions<RequestLoanParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x477811d5",
  [
    {
      "internalType": "uint256",
      "name": "loanAmount",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "collateralId",
      "type": "uint256"
    },
    {
      "internalType": "contract IERC721",
      "name": "collateralContract",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "loanDuration",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "lender",
      "type": "address"
    }
  ],
  []
],
    params: [options.loanAmount, options.collateralId, options.collateralContract, options.loanDuration, options.lender]
  });
};


/**
 * Represents the parameters for the "transferOwnership" function.
 */
export type TransferOwnershipParams = {
  newOwner: AbiParameterToPrimitiveType<{"internalType":"address","name":"newOwner","type":"address"}>
};

/**
 * Calls the "transferOwnership" function on the contract.
 * @param options - The options for the "transferOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferOwnership } from "TODO";
 *
 * const transaction = transferOwnership({
 *  newOwner: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function transferOwnership(
  options: BaseTransactionOptions<TransferOwnershipParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xf2fde38b",
  [
    {
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }
  ],
  []
],
    params: [options.newOwner]
  });
};


