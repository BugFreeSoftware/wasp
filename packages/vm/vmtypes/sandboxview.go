// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
package vmtypes

import (
	"github.com/iotaledger/wasp/packages/coretypes"
	"github.com/iotaledger/wasp/packages/kv/codec"
)

// SandboxView is an interface for read only call
type SandboxView interface {
	Params() codec.ImmutableCodec
	State() codec.ImmutableMustCodec
	MyBalances() coretypes.ColoredBalances
	// only calls view entry points
	Call(contractHname coretypes.Hname, entryPoint coretypes.Hname, params codec.ImmutableCodec) (codec.ImmutableCodec, error)

	MyContractID() coretypes.ContractID
	Event(msg string)
	Eventf(format string, args ...interface{})
}
