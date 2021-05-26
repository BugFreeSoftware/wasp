// package service implements JSON-RPC endpoints according to
// https://eth.wiki/json-rpc/API
package service

import (
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/eth/protocols/eth"
	"github.com/ethereum/go-ethereum/rlp"
	"github.com/ethereum/go-ethereum/rpc"
	"github.com/iotaledger/hive.go/crypto/ed25519"
)

type EthService struct {
	evmChain *EVMChain
	signer   *ed25519.KeyPair
}

func NewEthService(evmChain *EVMChain, signer *ed25519.KeyPair) *EthService {
	return &EthService{evmChain, signer}
}

func (s *EthService) ProtocolVersion() hexutil.Uint {
	return hexutil.Uint(eth.ETH65)
}

func (e *EthService) GetTransactionCount(address common.Address, blockNumber rpc.BlockNumber) (hexutil.Uint64, error) {
	n, err := e.evmChain.TransactionCount(address, parseBlockNumber(blockNumber))
	if err != nil {
		return 0, err
	}
	return hexutil.Uint64(n), nil
}

func (e *EthService) BlockNumber() (*hexutil.Big, error) {
	n, err := e.evmChain.BlockNumber()
	if err != nil {
		return nil, err
	}
	return (*hexutil.Big)(n), nil
}

func (e *EthService) GetBlockByNumber(blockNumber rpc.BlockNumber, full bool) (map[string]interface{}, error) {
	block, err := e.evmChain.BlockByNumber(parseBlockNumber(blockNumber))
	if err != nil {
		return nil, err
	}
	if block == nil {
		return nil, nil
	}
	return RPCMarshalBlock(block, true, full)
}

func (e *EthService) GetBlockByHash(hash common.Hash, full bool) (map[string]interface{}, error) {
	block, err := e.evmChain.BlockByHash(hash)
	if err != nil {
		return nil, err
	}
	if block == nil {
		return nil, nil
	}
	return RPCMarshalBlock(block, true, full)
}

func (e *EthService) GetBalance(address common.Address, blockNumber rpc.BlockNumber) (*hexutil.Big, error) {
	bal, err := e.evmChain.Balance(address, parseBlockNumber(blockNumber))
	if err != nil {
		return nil, err
	}
	return (*hexutil.Big)(bal), nil
}

func (e *EthService) GetCode(address common.Address, blockNumber rpc.BlockNumber) (hexutil.Bytes, error) {
	code, err := e.evmChain.Code(address, parseBlockNumber(blockNumber))
	if err != nil {
		return nil, err
	}
	return hexutil.Bytes(code), nil
}

func (e *EthService) GetTransactionReceipt(txHash common.Hash) (map[string]interface{}, error) {
	r, err := e.evmChain.TransactionReceipt(txHash)
	if err != nil {
		return nil, err
	}
	return RPCMarshalReceipt(r), nil
}

func (e *EthService) SendRawTransaction(txBytes hexutil.Bytes) (common.Hash, error) {
	tx := new(types.Transaction)
	if err := rlp.DecodeBytes(txBytes, tx); err != nil {
		return common.Hash{}, err
	}
	if err := e.evmChain.SendTransaction(e.signer, tx); err != nil {
		return common.Hash{}, err
	}
	return tx.Hash(), nil
}

func (s *EthService) Call(args *RPCCallArgs, blockNumber rpc.BlockNumber) (hexutil.Bytes, error) {
	ret, err := s.evmChain.CallContract(args.parse(), parseBlockNumber(blockNumber))
	return hexutil.Bytes(ret), err
}

func (s *EthService) EstimateGas(args *RPCCallArgs) (hexutil.Uint64, error) {
	gas, err := s.evmChain.EstimateGas(args.parse())
	return hexutil.Uint64(gas), err
}

func (s *EthService) GetStorageAt(address common.Address, key common.Hash, blockNumber rpc.BlockNumber) (hexutil.Bytes, error) {
	ret, err := s.evmChain.StorageAt(address, key, parseBlockNumber(blockNumber))
	return hexutil.Bytes(ret), err
}

func (s *EthService) GetBlockTransactionCountByHash(blockHash common.Hash) (hexutil.Uint, error) {
	ret, err := s.evmChain.BlockTransactionCountByHash(blockHash)
	return hexutil.Uint(ret), err
}

/*
func (s *EthService) Syncing()                             { panic("not implemented") }
func (s *EthService) Coinbase()                            { panic("not implemented") }
func (s *EthService) Mining()                              { panic("not implemented") }
func (s *EthService) Hashrate()                            { panic("not implemented") }
func (s *EthService) GasPrice()                            { panic("not implemented") }
func (s *EthService) Accounts()                            { panic("not implemented") }
func (s *EthService) GetBlockTransactionCountByNumber()    { panic("not implemented") }
func (s *EthService) GetUncleCountByBlockHash()            { panic("not implemented") }
func (s *EthService) GetUncleCountByBlockNumber()          { panic("not implemented") }
func (s *EthService) Sign()                                { panic("not implemented") }
func (s *EthService) SignTransaction()                     { panic("not implemented") }
func (s *EthService) SendTransaction()                     { panic("not implemented") }
func (s *EthService) GetTransactionByHash()                { panic("not implemented") }
func (s *EthService) GetTransactionByBlockHashAndIndex()   { panic("not implemented") }
func (s *EthService) GetTransactionByBlockNumberAndIndex() { panic("not implemented") }
func (s *EthService) GetUncleByBlockHashAndIndex()         { panic("not implemented") }
func (s *EthService) GetUncleByBlockNumberAndIndex()       { panic("not implemented") }
func (s *EthService) GetCompilers()                        { panic("not implemented") }
func (s *EthService) CompileLLL()                          { panic("not implemented") }
func (s *EthService) CompileSolidity()                     { panic("not implemented") }
func (s *EthService) CompileSerpent()                      { panic("not implemented") }
func (s *EthService) NewFilter()                           { panic("not implemented") }
func (s *EthService) NewBlockFilter()                      { panic("not implemented") }
func (s *EthService) NewPendingTransactionFilter()         { panic("not implemented") }
func (s *EthService) UninstallFilter()                     { panic("not implemented") }
func (s *EthService) GetFilterChanges()                    { panic("not implemented") }
func (s *EthService) GetFilterLogs()                       { panic("not implemented") }
func (s *EthService) GetLogs()                             { panic("not implemented") }
func (s *EthService) GetWork()                             { panic("not implemented") }
func (s *EthService) SubmitWork()                          { panic("not implemented") }
func (s *EthService) SubmitHashrate()                      { panic("not implemented") }
*/

type NetService struct {
	evmChain *EVMChain
}

func NewNetService(evmChain *EVMChain) *NetService {
	return &NetService{evmChain}
}

func (e *NetService) Version() string {
	return "1074" // IOTA -- get it?
}

/*
func (s *NetService) PeerCount() { panic("not implemented") }
func (s *NetService) Listening() { panic("not implemented") }
*/

type Web3Service struct {
	evmChain *EVMChain
}

func NewWeb3Service(evmChain *EVMChain) *Web3Service {
	return &Web3Service{evmChain}
}

/*
func (s *Web3Service) ClientVersion() { panic("not implemented") }
func (s *Web3Service) Sha3()          { panic("not implemented") }
*/
