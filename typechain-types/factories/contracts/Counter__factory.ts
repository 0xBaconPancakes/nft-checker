/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Counter, CounterInterface } from "../../contracts/Counter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "CountedTo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ERC721",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "countUp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b5061065f806100246000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a87d942c1461003b578063be670b1c14610059575b600080fd5b610043610089565b604051610050919061031a565b60405180910390f35b610073600480360381019061006e91906103d6565b610092565b604051610080919061031a565b60405180910390f35b60008054905090565b600082823373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004016100e6919061031a565b60206040518083038186803b1580156100fe57600080fd5b505afa158015610112573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101369190610442565b73ffffffffffffffffffffffffffffffffffffffff161461015657600080fd5b6101976040518060400160405280601081526020017f636f756e7455703a20636f756e74203d0000000000000000000000000000000081525060005461023c565b600060016000546101a8919061049e565b905060005481116101ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e590610551565b60405180910390fd5b806000819055507fa501f5a8ef1a812bff54fb3642cfaec066c351af1716c48a7bdd05e0bb631e67600054604051610226919061031a565b60405180910390a1600054935050505092915050565b6102d482826040516024016102529291906105f9565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d8565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000819050919050565b61031481610301565b82525050565b600060208201905061032f600083018461030b565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103658261033a565b9050919050565b60006103778261035a565b9050919050565b6103878161036c565b811461039257600080fd5b50565b6000813590506103a48161037e565b92915050565b6103b381610301565b81146103be57600080fd5b50565b6000813590506103d0816103aa565b92915050565b600080604083850312156103ed576103ec610335565b5b60006103fb85828601610395565b925050602061040c858286016103c1565b9150509250929050565b61041f8161035a565b811461042a57600080fd5b50565b60008151905061043c81610416565b92915050565b60006020828403121561045857610457610335565b5b60006104668482850161042d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104a982610301565b91506104b483610301565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156104e9576104e861046f565b5b828201905092915050565b600082825260208201905092915050565b7f55696e74323536206f766572666c6f7700000000000000000000000000000000600082015250565b600061053b6010836104f4565b915061054682610505565b602082019050919050565b6000602082019050818103600083015261056a8161052e565b9050919050565b600081519050919050565b60005b8381101561059a57808201518184015260208101905061057f565b838111156105a9576000848401525b50505050565b6000601f19601f8301169050919050565b60006105cb82610571565b6105d581856104f4565b93506105e581856020860161057c565b6105ee816105af565b840191505092915050565b6000604082019050818103600083015261061381856105c0565b9050610622602083018461030b565b939250505056fea2646970667358221220e33cfecd60d0d64819d5c541870fd58836658bb9ea403ede86832dcb8d6b50c564736f6c63430008090033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}
