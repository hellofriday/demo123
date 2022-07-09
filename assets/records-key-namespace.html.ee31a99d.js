import{_ as a}from"./image-20210721120500021.07bc9548.js";import{_ as n,r as i,o as r,c,a as e,b as o,e as l,d as t}from"./app.aa8c0a58.js";const d={},h=l('<h1 id="bit-namespaces" tabindex="-1"><a class="header-anchor" href="#bit-namespaces" aria-hidden="true">#</a> .bit Namespaces</h1><p><img src="'+a+'" alt=".bit Records" style="zoom:50%;">Parsed records are the core of .bit, and the flexibility of records is also the source of .bit&#39;s great scalability. A record is a key-value pair, and .bit supports an infinite number of records. As shown above, different applications will read different parse records to do different jobs. Therefore, it is important to manage the namespace of the key of the record. The namespace usage specification is essentially a protocol that can be followed to enable good collaboration between applications.</p><h2 id="namespaces" tabindex="-1"><a class="header-anchor" href="#namespaces" aria-hidden="true">#</a> Namespaces</h2><p>The key of a record is a hierarchical structure using <code>. </code> separated by a hierarchy, such as <code>address.btc</code>, <code>profile.twitter</code>, <code>custom_key.bitcc_config</code>, etc. Among them, <code>address</code>, <code>profile</code>, and <code>custom_key</code> are called primary namespaces; <code>btc</code>, <code>twitter</code>, and <code>bitcc_config</code> are called secondary namespaces.</p><p>.bit has strict constraints on the use of namespaces at the contract level, and currently provides four first-level namespaces.</p>',5),_=e("p",null,[e("strong",null,"address")],-1),p=t("This namespace is generally used to store the user's digital assets receipt address, such as "),u=e("code",null,"address.btc",-1),m=t(", "),b=e("code",null,"address.eth",-1),f=t(", etc. Also, there is a "),g={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},y=t("whitelist"),k=t(" inside the contract that has built-in mainstream digital assets symbols as legal key."),w=e("p",null,[e("strong",null,"profile")],-1),v=t("This namespace is generally used to store users' personal information, such as "),x=e("code",null,"profile.twitter",-1),T=t(", "),A=e("code",null,"profile.facebook",-1),N=t(", etc. Also, there is a "),H={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},B=t("whitelist"),Q=t(" inside the contract with built-in mainstream social network names as legitimate key."),C=e("p",null,[e("strong",null,"dweb")],-1),I=t("This namespace is generally used to store decentralized network-related content, such as "),V=e("code",null,"dweb.ipfs",-1),z=t(", "),E=e("code",null,"dweb.resilio",-1),j=t(", etc. Also, there is a "),F=e("a",{href:""},"dweb.resilio",-1),L=t(" inside the contract. Also, there is a "),S={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},q=t("whitelist"),G=t(" inside the contract with the mainstream decentralized storage protocol built-in name as a legal key."),K=e("li",null,[e("p",null,[e("strong",null,"custom_key")]),e("p",null,[t("This namespace is not constrained, and developers can create any name and number of sub-namespaces under this space and define their meaning. For example, "),e("code",null,"custom_key.bitcc_config"),t(", "),e("code",null,"custom_key.pgp.master_key"),t(", etc.")])],-1),P={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},R=t("** See All .bit Namespaces**"),Y=e("h5",{id:"note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note","aria-hidden":"true"},"#"),t(" Note")],-1),D=e("p",null,[t("The .bit contract does not verify the legitimacy of the value of the record, the .bit just provides a convention. For example, a user would normally set the value of "),e("code",null,"address.btc"),t(" to a BTC address. However, the application should check if this value is really a legitimate BTC address when using this value.")],-1),J=e("h2",{id:"addition-of-first-level-namespaces",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#addition-of-first-level-namespaces","aria-hidden":"true"},"#"),t(" Addition of first-level namespaces")],-1),M=t("Currently, .bit only provides four level 1 namespaces "),O=e("code",null,"address",-1),U=t(", "),W=e("code",null,"profile",-1),X=t(", "),Z=e("code",null,"dweb",-1),$=t(", "),ee=e("code",null,"custom_key",-1),te=t(", but this is not the final result. The .bit team will gradually add more level 1 namespaces. If you think some namespaces should be added to allow better collaboration between applications. You can report in Github "),se={href:"https://github.com/dotbitHQ/das-contracts/issues",target:"_blank",rel:"noopener noreferrer"},oe=t("Issues"),ae=t(".");function ne(ie,re){const s=i("ExternalLinkIcon");return r(),c("div",null,[h,e("ul",null,[e("li",null,[_,e("p",null,[p,u,m,b,f,e("a",g,[y,o(s)]),k])]),e("li",null,[w,e("p",null,[v,x,T,A,N,e("a",H,[B,o(s)]),Q])]),e("li",null,[C,e("p",null,[I,V,z,E,j,F,L,e("a",S,[q,o(s)]),G])]),K]),e("blockquote",null,[e("p",null,[e("a",P,[R,o(s)])])]),Y,D,J,e("p",null,[M,O,U,W,X,Z,$,ee,te,e("a",se,[oe,o(s)]),ae])])}var de=n(d,[["render",ne],["__file","records-key-namespace.html.vue"]]);export{de as default};