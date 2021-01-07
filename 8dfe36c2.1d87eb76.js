(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),s=(n(0),n(438)),o=n(442),i=n(443),u={id:"authentication",title:"API Authentication",sidebar_label:"Authentication",keywords:["OpenHIM","API","Authentication"],description:"Authentication for the OpenHIM API calls"},c={unversionedId:"api/introduction/authentication",id:"version-5.2.x/api/introduction/authentication",isDocsHomePage:!1,title:"API Authentication",description:"Authentication for the OpenHIM API calls",source:"@site/versioned_docs/version-5.2.x/api/introduction/authentication.md",slug:"/api/introduction/authentication",permalink:"/docs/5.2.x/api/introduction/authentication",version:"5.2.x",sidebar_label:"Authentication",sidebar:"version-5.2.x/api",previous:{title:"welcome",permalink:"/docs/5.2.x/api/introduction/welcome"},next:{title:"Audits overview",permalink:"/docs/5.2.x/api/audits/overview"}},l=[{value:"Construct authentication headers",id:"construct-authentication-headers",children:[]},{value:"Initial authentication notification",id:"initial-authentication-notification",children:[]},{value:"For subsequent requests to the API",id:"for-subsequent-requests-to-the-api",children:[]},{value:"Examples",id:"examples",children:[]}],h={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"construct-authentication-headers"},"Construct authentication headers"),Object(s.b)("p",null,"Each and every API call that is made to the OpenHIM has to be authenticated. The authentication mechanism that is used can be fairly complex to work with however it provides decent security."),Object(s.b)("p",null,"The authentication mechanism is based on ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://stackoverflow.com/a/9387289/588776"}),"http://stackoverflow.com/a/9387289/588776"),"."),Object(s.b)("h2",{id:"initial-authentication-notification"},"Initial authentication notification"),Object(s.b)("p",null,"The user notifies the API that it wants to use its authenticated service:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET https://<server>:8080/authenticate/<user_email>")),Object(s.b)("p",null,"If you don't have a user account yet, you can use the root user. The default root user details are as follows:"),Object(s.b)("p",null,"username: root\npassword: openhim-password (you should change this on a production installation!)"),Object(s.b)("p",null,"The server will respond with the salt that was used to calculate the clients passwordHash (during user registration):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "salt": "xxx",\n  "ts": "xxx"\n}\n')),Object(s.b)("p",null,"You must calculate a passwordhash using the received salt and the supplied user password. ",Object(s.b)("inlineCode",{parentName:"p"},"passwordhash = (sha512(salt + password))")),Object(s.b)("h2",{id:"for-subsequent-requests-to-the-api"},"For subsequent requests to the API"),Object(s.b)("p",null,"For every request you must add the following additional HTTP headers to the request:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-http"}),"auth-username: <username>\nauth-ts: <the current timestamp - in the following format '2014-10-20T13:19:32.380Z' - user time must be in sync with server time for request to work>\nauth-salt: <random uuid salt that you generate>\nauth-token: <= sha512(passwordhash + auth-salt + auth-ts) >\n")),Object(s.b)("p",null,"The server will authorise this request by calculating sha512(passwordhash + auth-salt + auth-ts) using the passwordhash from its own database and ensuring that:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"this is equal to auth-token"),Object(s.b)("li",{parentName:"ul"},"the auth-ts isn't more than 2 seconds old")),Object(s.b)("p",null,"If these 2 conditions true the request is allowed."),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("p",null,"Below are a few examples of how to achieve the correct request headers to authenticate to the OpenHIM API"),Object(s.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// openhim-api.js\n\nconst crypto = require('crypto')\nconst request = require('request')\n\n// authenticate the username is valid\nconst authenticate = async (options) => {\n  return new Promise((resolve, reject) => {\n    // authenticate the username\n    let reqOptions = {\n      url: `${options.apiURL}/authenticate/${options.username}`,\n      rejectUnauthorized: options.rejectUnauthorized\n    }\n\n    request.get(reqOptions, (err, resp, body) => {\n      if (err){\n        return reject(err)\n      }\n      // if user isn't found\n      if (resp.statusCode !== 200) {\n        return reject(new Error(`User ${options.username} not found when authenticating with core API`))\n      }\n      try {\n        body = JSON.parse(body)\n        resolve(body)\n      } catch (err) {\n        reject(err)\n      }\n    })\n  })\n}\n\n// Generate the relevant auth headers\nconst genAuthHeaders = async (options) => {\n  const authDetails = await authenticate(options)\n\n  const salt = authDetails.salt\n  const now = new Date()\n\n  // create passhash\n  let shasum = crypto.createHash('sha512')\n  shasum.update(salt + options.password)\n  const passhash = shasum.digest('hex')\n\n  // create token\n  shasum = crypto.createHash('sha512')\n  shasum.update(passhash + salt + now)\n  const token = shasum.digest('hex')\n\n  // define request headers with auth credentials\n  return {\n    'auth-username': options.username,\n    'auth-ts': now,\n    'auth-salt': salt,\n    'auth-token': token\n  }\n}\n"))),Object(s.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(s.b)("p",null,"When creating your bash file, ensure the bash script is executable"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# openhim-api.sh\n\n#!/bin/bash\n\nif (( $# < 2)); then\n    echo "OpenHIM API: Curl wrapper that sets up the appropriate OpenHIM authentication headers";\n    echo "Usage: $0 USERNAME PASSWORD [CURL_ARGS...]";\n    exit 0;\nfi\n\nusername=$1;\npass=$2;\nshift;\nshift;\n\n# which server?\nserver=""\nfor arg in $@; do\n    match=`echo $arg | grep http | perl -pe \'s|(https?://.*?)/.*|\\1|\'`;\n    if [ "$match" ]; then\n        server=$match;\n    fi\ndone\n\nif [ ! "$server" ]; then\n    echo "OpenHIM server not specified";\n    exit 0;\nfi\n\nauth=`curl -k -s $server/authenticate/$username`;\nsalt=`echo $auth | perl -pe \'s|.*"salt":"(.*?)".*|\\1|\'`;\nts=`echo $auth | perl -pe \'s|.*"ts":"(.*?)".*|\\1|\'`;\n\npasshash=`echo -n "$salt$pass" | shasum -a 512 | awk \'{print $1}\'`;\ntoken=`echo -n "$passhash$salt$ts" | shasum -a 512 | awk \'{print $1}\'`;\n\ncurl -k -H "auth-username: $username" -H "auth-ts: $ts" -H "auth-salt: $salt" -H "auth-token: $token" $@;\necho "";\n')))))}p.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,b=h["".concat(o,".").concat(d)]||h[d]||p[d]||s;return n?r.a.createElement(b,i(i({ref:t},c),{},{components:n})):r.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},439:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},442:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(440),o=n(439),i=n(56),u=n.n(i),c=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,h=e.values,p=e.groupId,d=e.className,b=Object(s.a)(),f=b.tabGroupChoices,m=b.setTabGroupChoices,v=Object(a.useState)(i),O=v[0],j=v[1],y=a.Children.toArray(e.children);if(null!=p){var w=f[p];null!=w&&w!==O&&h.some((function(e){return e.value===w}))&&j(w)}var g=function(e){j(e),null!=p&&m(p,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},h.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},443:function(e,t,n){"use strict";var a=n(3),r=n(0),s=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return s.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);