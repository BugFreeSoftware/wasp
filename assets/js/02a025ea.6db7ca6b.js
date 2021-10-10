(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[8860],{9698:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],c={},i="Return of tokens in case of failure",l={unversionedId:"tutorial/10",id:"tutorial/10",isDocsHomePage:!1,title:"Return of tokens in case of failure",description:"Natural question: what if I attach tokens to the request, send it to the smart",source:"@site/docs/tutorial/10.md",sourceDirName:"tutorial",slug:"/tutorial/10",permalink:"/wasp/docs/tutorial/10",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/tutorial/10.md",version:"current",frontMatter:{}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"return-of-tokens-in-case-of-failure"},"Return of tokens in case of failure"),(0,o.kt)("p",null,"Natural question: what if I attach tokens to the request, send it to the smart\ncontract and the smart contract fails (panics)? The panics may occur for\nwhatever reason: it may be due to wrong parameters, or it may be a runtime\nerror, or a bug. What will happen with my tokens?"),(0,o.kt)("p",null,"The following test demonstrates the situation when the request results in a\npanic in the smart contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial7(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n    chain := env.NewChain(nil, "ex7")\n\n    err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n    require.NoError(t, err)\n\n    contractAgentID := iscp.NewAgentID(chain.ChainID.AsAddress(), iscp.Hn("example1"))\n\n    userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n    userAgentID := iscp.NewAgentID(userAddress, 0)\n\n    // we start with these balances on address and on chain\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n    chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // empty\n    chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)     // empty\n\n    // missing parameter, request will panic\n    req := solo.NewCallParams("example1", "storeString").WithIotas(42)\n    _, err = chain.PostRequestSync(req, userWallet)\n    require.Error(t, err)\n\n    // assert balances didn\'t change on address and on chain\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n    chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // still empty\n    chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)     // still empty\n}\n')),(0,o.kt)("p",null,"The programmer forgets the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"paramString")," and the program panics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"42:16.438200900 PANIC   TestTutorial7.ex7   vmcontext/log.go:12 string parameter not found\n...\n42:16.441706100 INFO    TestTutorial7.ex7   solo/run.go:148 REQ: 'tx/[1]3ZWV9c8MrDPMnyJjEnF8HUuMzUmMNed4Gtg5A1SWgqDD: 'panic in VM: string parameter not found''\n")),(0,o.kt)("p",null,"We can see that all sent 42 tokens are returned to the sender's address."),(0,o.kt)("p",null,"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM\nreturns all tokens (minus fees) to the sender (to the sender's address in the example above)."))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);