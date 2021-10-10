(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[7832],{675:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={},l="General scheme of invoking an entry point",s={unversionedId:"misc/invoking",id:"misc/invoking",isDocsHomePage:!1,title:"General scheme of invoking an entry point",description:"An entry point is a function provided by the smart contract. By \u201cinvoking\u201d we",source:"@site/docs/misc/invoking.md",sourceDirName:"misc",slug:"/misc/invoking",permalink:"/wasp/docs/misc/invoking",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/misc/invoking.md",version:"current",frontMatter:{}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-scheme-of-invoking-an-entry-point"},"General scheme of invoking an entry point"),(0,o.kt)("p",null,"An entry point is a function provided by the smart contract. By \u201cinvoking\u201d we\nmean calling the function from a particular environment. The effect of invoking\nan entry point depends on the calling environment and who is calling. Sending a\nrequest is an example of invocation of an entry point."),(0,o.kt)("p",null,"In general, each invocation of the entry point is similar to an object method\ncall in the object-oriented paradigm. To invoke a smart contract entry point you\nneed to specify:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hname")," of the target contract, the called object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hname")," of the entry point function name, the name of the method"),(0,o.kt)("li",{parentName:"ul"},"Parameters: a collection of key/value pairs, the (named) parameters to the\ncall"),(0,o.kt)("li",{parentName:"ul"},"Transferred tokens: a collection of color/balance pairs, a special type of\nparameter to the call")),(0,o.kt)("p",null,"The invocation always returns a result, a collection of key/value pairs, or an\nerror, if the call fails. Therefore, the generic structure of the invocation of\nan entry point is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"res = target_contract.function(parameters, transfer)\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," is a map (a dictionary) of key/value pairs, containing the result\n(possibly empty), or an error code."),(0,o.kt)("p",null,"There are several ways to invoke an entry point of a smart contract: request,\ncall and view call."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("em",{parentName:"p"},"request")," can be sent to the target contract from the \u201coutside\u201d: by a\nwallet, or another smart contract, on the same or on another chain. The Solo\nenvironment is also regarded as the \u201coutside\u201d.\n(see ",(0,o.kt)("a",{parentName:"p",href:"/wasp/docs/tutorial/06"},"Invoking smart contracts. Sending a request"),"). The ",(0,o.kt)("em",{parentName:"p"},"request"),"\nitself is a transaction, it contains parameters and attached tokens. The\ntokens that are transferred to the smart contract together with the parameters\nbecome part of its account. Requests can only be invoked (sent) by signing the\nrequest with the private key which controls those tokens. Sending a request to\na view will trigger an error and fallback actions. In the Solo environment\nrequests are stored on the UTXODB ledger and handled by the Solo environment,\nbacklog is collected and requests are forwarded to the corresponding target\nchains.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any ",(0,o.kt)("em",{parentName:"p"},"entry point")," can be ",(0,o.kt)("em",{parentName:"p"},"called")," from another smart contract on the same\nchain. It is just like a usual function call in a programming language. In\nthis case both caller and target smart contracts assume the same state of the\nchain, i.e. the call is always synchronous.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("em",{parentName:"p"},"views")," can be called from anywhere, including from outside, for example\nfrom a web API which fetches the smart contract data for display."))))}m.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);