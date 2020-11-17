// package present processor interface. It must be implemented by VM
package vmtypes

import (
	"fmt"
	"github.com/iotaledger/wasp/packages/coretypes"
	"github.com/iotaledger/wasp/packages/kv/codec"
)

// Processor is a abstract interface to the VM processor instance.
type Processor interface {
	GetEntryPoint(code coretypes.Hname) (EntryPoint, bool)
	GetDescription() string
}

// EntryPoint is an abstract interface by which VM is called by passing
// the Sandbox interface
type EntryPoint interface {
	WithGasLimit(int) EntryPoint
	Call(ctx Sandbox) (codec.ImmutableCodec, error)
	IsView() bool
	CallView(ctx SandboxView) (codec.ImmutableCodec, error)
}

var ErrWrongTypeEntryPoint = fmt.Errorf("wrong type of entry point")
