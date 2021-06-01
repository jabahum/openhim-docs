(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{336:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(556)),i=n(560),c=n(561),s={id:"create",title:"Create Certificates",sidebar_label:"Create",keywords:["OpenHIM","API","Certificate","Key","Create"],description:"Create OpenHIM Certificates and Keys via the API"},l={unversionedId:"api/certificates/create",id:"version-7.0.x/api/certificates/create",isDocsHomePage:!1,title:"Create Certificates",description:"Create OpenHIM Certificates and Keys via the API",source:"@site/versioned_docs/version-7.0.x/api/certificates/create.md",slug:"/api/certificates/create",permalink:"/docs/api/certificates/create",version:"7.0.x",sidebar_label:"Create",sidebar:"version-7.0.x/api",previous:{title:"Certificates Overview",permalink:"/docs/api/certificates/overview"},next:{title:"Read Certificates",permalink:"/docs/api/certificates/read"}},p=[{value:"Create Certificates and keys",id:"create-certificates-and-keys",children:[{value:"Set the OpenHIM key",id:"set-the-openhim-key",children:[]},{value:"Key Example",id:"key-example",children:[]},{value:"Set up the certificate",id:"set-up-the-certificate",children:[]},{value:"Certificate Example",id:"certificate-example",children:[]},{value:"Add certificate to list of ca certificates",id:"add-certificate-to-list-of-ca-certificates",children:[]},{value:"Adding certificate Example",id:"adding-certificate-example",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"create-certificates-and-keys"},"Create Certificates and keys"),Object(r.b)("h3",{id:"set-the-openhim-key"},"Set the OpenHIM key"),Object(r.b)("p",null,"To set the OpenHIM server key, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the key."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/keystore/key\nPayload: JSON object with the key\n")),Object(r.b)("h3",{id:"key-example"},"Key Example"),Object(r.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/keystore/key',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments to set the key. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the key object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/key -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"  The response status will be ",Object(r.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(r.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "-----BEGIN RSA PRIVATE KEY-----\\nMIIEowIBAAKCAQEAvjzjg5W0f7znVALhvJnGdQSqOjGP+4PFUQoSJ+UNnLYGkL3H\\nIE29cn/sDxlxTG5V395INHtI88SppcFjCLgEWufDZVLQZ+B1MhaVNueHEZnVZAxb\\nJqtxbp1mmageuUIpcWZq4PH9O20Do3wUi1qCfZdfgO1NDIbZl7XOH0RWETdk74yx\\nIHHtEKWqjbGHdchVaktD3Ty6Ch9nDCZio38df2pudp3XcTtRsankq+FxCzLHRvs/\\nsb1BeT3jkLypuWeM5B1xkQuVolpzvtvW/PkGSnrqoeZfC6pRg3zVG1rxNs/SZUlg\\n+BNPu6akxjcxGq84F460P+FGbjmnNzYhzNHhWwIDAQABAoIBADF4viXTAaySYIod\\ncbzNNKnru6UEjI/41ZBckRok2+RcBdsQLz98V/71u1q14BvjOZvNP3O+d9tE0mVT\\npEB5MlC9orev0Jii63dKHiW4Eg0Gt1KcT/v/a7E7Z5of+VVuGj7uRm8XHyacE+0o\\n8GLI99RXUDPEAlx2mRF16xOAfu1cycf8ym4I7AcC/rtckUD16a4HZWuitqEnj5AU\\nyKvU5i9+KO0p/BRHcApUHvSQUq1Lcp9kOx1BQpwx+CY8DcBf7IAQCEiEy8o5M+Bh\\njaSAQvn7AYfHvaFbnr5JfjHg+eu2axBuwPfCEBiuyq0bXdpizyofcMw23cjEkKIH\\nrMc1/QkCgYEA+jyjOYatIGrgOLxRNFML+ztc2zfmPjjmA+0ZyZdvbkKfjOQQ519O\\nGqDy4r3P9KugXpCf6bWit6ClZ9DfsnNCl4Djfhmal8Ey92vFra3UJtYMCKwN0GXk\\nQNRWpW89jg65DY40z14q6FUi5RkdaTRR0kAlVJGBVVUSrFp70w5JyU8CgYEAwp6B\\nTnYS79PLdO/Vgg2GGjm66R5X93xahwLszW42vQklTNyDskFeofEnWBRDGJSnVZQF\\neB6tDby1UXZ35BYB6rU/Q2JV/qFYisu+EFf+JFoKs3ldPrw5387LZKFTx+A9PZhH\\n7xkiQFXIeols86jE/PtoTvfYwRy403+rSiZMjDUCgYEAhKJ5Xbdtsl4TxN7EJ/jQ\\nw/Q+Do/9gQOFn5Uf8wNKc+XqTbJg51JTwreGpfo37Ja/pQABUs4MlkoXAgTrXNnM\\n9SLC8ga+MyubSRudpqYZahBQRpRzqf8n0dj6qCtjNBXHrlCu2y8tjQH7QfVi6m1p\\n5QhNARsyszkpcaNwOHk9UO8CgYANBlKdD6XgywnYv5xIYeNRqf9qTo+Qjo/4bSev\\n7+pV6GDIrhFaQqm0qND7Qg/jez9fqNJc4aCvRKvV0dngN+DU9mBPgCtFKUMlttD3\\ngwwNHsGMlVi6NBqjcdGG4I0c2VL/5ksaI1J5f8Q0/zF9dRQJ4kFu14N4GRX9gZPT\\nGJES6QKBgDAz6qJyqBIo+/PMugHCYl/fTB15BLs1eAK2qGc+XC69Laynptzg8gpQ\\nrt7kH0tYccutDt9IQGRr2JPoHNjuo1UMlJnWm+U+twsxzahPRrN2zx8rEESzeeVH\\nOgxlgV0XefX2ZBfOozDItdeSdcn7o0m+HVaLL3wCUNdNNFtuoX5B\\n-----END RSA PRIVATE KEY-----"\n}\n')))),Object(r.b)("h3",{id:"set-up-the-certificate"},"Set up the certificate"),Object(r.b)("p",null,"To set the OpenHIM server certificate, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the certificate."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/keystore/cert\nPayload: JSON object with the certificate\n")),Object(r.b)("h3",{id:"certificate-example"},"Certificate Example"),Object(r.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/keystore/cert',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments to set the certificate. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the certificate object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/cert -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"  The response status will be ",Object(r.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(r.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "cert": "-----BEGIN CERTIFICATE-----\\nMIIDqDCCApACCQCLPx1aZMwI3DANBgkqhkiG9w0BAQsFADCBlDELMAkGA1UEBhMC\\nWkExDDAKBgNVBAgMA0taTjEPMA0GA1UEBwwGRHVyYmFuMSEwHwYDVQQKDBhKZW1i\\naSBIZWFsdGggU3lzdGVtcyBOUEMxEDAOBgNVBAsMB2VIZWFsdGgxEjAQBgNVBAMM\\nCWxvY2FsaG9zdDEdMBsGCSqGSIb3DQEJARYOcnlhbkBqZW1iaS5vcmcwIBcNMTYw\\nMTE5MTIwMjM4WhgPMjA2NjAxMDYxMjAyMzhaMIGUMQswCQYDVQQGEwJaQTEMMAoG\\nA1UECAwDS1pOMQ8wDQYDVQQHDAZEdXJiYW4xITAfBgNVBAoMGEplbWJpIEhlYWx0\\naCBTeXN0ZW1zIE5QQzEQMA4GA1UECwwHZUhlYWx0aDESMBAGA1UEAwwJbG9jYWxo\\nb3N0MR0wGwYJKoZIhvcNAQkBFg5yeWFuQGplbWJpLm9yZzCCASIwDQYJKoZIhvcN\\nAQEBBQADggEPADCCAQoCggEBAL4844OVtH+851QC4byZxnUEqjoxj/uDxVEKEifl\\nDZy2BpC9xyBNvXJ/7A8ZcUxuVd/eSDR7SPPEqaXBYwi4BFrnw2VS0GfgdTIWlTbn\\nhxGZ1WQMWyarcW6dZpmoHrlCKXFmauDx/TttA6N8FItagn2XX4DtTQyG2Ze1zh9E\\nVhE3ZO+MsSBx7RClqo2xh3XIVWpLQ908ugofZwwmYqN/HX9qbnad13E7UbGp5Kvh\\ncQsyx0b7P7G9QXk945C8qblnjOQdcZELlaJac77b1vz5Bkp66qHmXwuqUYN81Rta\\n8TbP0mVJYPgTT7umpMY3MRqvOBeOtD/hRm45pzc2IczR4VsCAwEAATANBgkqhkiG\\n9w0BAQsFAAOCAQEAb5qbfMrsUyS/3Ye8O2UvxAQ6nYaIGmHARZAIY3vT0daI4PH/\\nM/XeFffLJfVIboLoBkcO+MskGznUO1XGw1OapifRhuEijGZRxhW7OXlkjMY3BKrR\\nGjZAuMA2fnUEpibtacZHatzlCrYC7M6McGujx0svLt/bGAArFPPivkcp5LOiLTHj\\ns0Z/j1LZNwCUa4E1Vg/fya6opbjZmb2GMQQ6s1UhvWmpxTK2SO6xBVGuNS+u2WNC\\nUoSYA/d1aR1zVYJlI1+jFcglPW2kivsTqAau5WBLvbVoq1NgVGKnGGdnQ/+u3Qkt\\nFmrdRkLwU3RDZQWGLrzVFZLHsnsES60yz/aiRg==\\n-----END CERTIFICATE-----"\n}\n')))),Object(r.b)("h3",{id:"add-certificate-to-list-of-ca-certificates"},"Add certificate to list of ca certificates"),Object(r.b)("p",null,"To add a certificate to the list of ca certificates, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply a JSON object with the certificate."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/keystore/ca/cert\nPayload: JSON object with the certificate\n")),Object(r.b)("h3",{id:"adding-certificate-example"},"Adding certificate Example"),Object(r.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit. The sample data in the example for setting up of a certificate can used here. The sample data in the example for setting up of a server certificate can used here."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/keystore/ca/cert',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments to set the certificate. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the certificate object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/keystore/ca/cert -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"  The response status will be ",Object(r.b)("inlineCode",{parentName:"p"},"201")," if successful."))))}d.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},557:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},558:function(e,t,n){"use strict";var a=n(0),o=n(559);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},559:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},560:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(558),i=n(557),c=n(56),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,d=e.groupId,b=e.className,h=Object(r.a)(),m=h.tabGroupChoices,j=h.setTabGroupChoices,O=Object(a.useState)(c),f=O[0],y=O[1],g=a.Children.toArray(e.children);if(null!=d){var v=m[d];null!=v&&v!==f&&u.some((function(e){return e.value===v}))&&y(v)}var w=function(e){y(e),null!=d&&j(d,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},561:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}}}]);