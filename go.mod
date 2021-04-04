module github.com/iotaledger/wasp

go 1.16

require (
	github.com/bytecodealliance/wasmtime-go v0.21.0
	github.com/iotaledger/goshimmer v0.5.4-0.20210404082841-7b160f0001d3
	github.com/iotaledger/hive.go v0.0.0-20210327095456-8b9171badf36
	github.com/knadh/koanf v0.15.0
	github.com/labstack/echo/v4 v4.1.13
	github.com/mr-tron/base58 v1.2.0
	github.com/pangpanglabs/echoswagger/v2 v2.1.0
	github.com/pkg/errors v0.9.1
	github.com/spf13/pflag v1.0.5
	github.com/spf13/viper v1.7.0
	github.com/stretchr/testify v1.7.0
	go.dedis.ch/kyber/v3 v3.0.13
	go.nanomsg.org/mangos/v3 v3.0.1
	go.uber.org/atomic v1.7.0
	go.uber.org/zap v1.16.0
	golang.org/x/crypto v0.0.0-20210220033148-5ea612d1eb83
	golang.org/x/net v0.0.0-20201202161906-c7110b5ffcbb
	golang.org/x/xerrors v0.0.0-20200804184101-5ec99f83aff1
)

replace github.com/iotaledger/hive.go v0.0.0-20210331170324-e7699d9dfdbb => github.com/lunfardo314/hive.go v0.0.0-20210404054736-665eabab5ed9
