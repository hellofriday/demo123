import{_ as p,r as i,o as d,c as r,a as n,b as e,w as t,d as s,e as l}from"./app.aa8c0a58.js";const c={},u=n("h1",{id:"frontend-integration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frontend-integration","aria-hidden":"true"},"#"),s(" Frontend Integration")],-1),k={id:"das-sdk-js",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#das-sdk-js","aria-hidden":"true"},"#",-1),v=s(),_={href:"https://github.com/dotbitHQ/das-sdk-js",target:"_blank",rel:"noopener noreferrer"},b=s("das-sdk-js"),m={href:"https://github.com/dotbitHQ/das-sdk-js",target:"_blank",rel:"noopener noreferrer"},g=s("das-sdk-js"),f=s(" is a NPM package that encapsulates JSON-RPC calls to indexer."),x=s("The dapp only need to integrate this SDK and invoke corresponding API, whose data is provided by "),y=s("das-account-indexer"),q=s(", can get the needed data."),j=n("blockquote",null,[n("p",null,"Note that after the application gets the value of the user-set data, it should always verify the validity of the value.")],-1),w={href:"https://github.com/dotbitHQ/das-sdk-js",target:"_blank",rel:"noopener noreferrer"},I=s("das-sdk-js Document"),N=n("h3",{id:"prerequisites",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),s(" Prerequisites")],-1),S=s("This SDK relies on the JSON-RPC service provided by "),D=s("das-account-indexer"),P=s("."),B=n("p",null,"We recommend that developers buidl their own .bit Indexer, but developers can use the official .bit Indexer service for development and testing. See:",-1),C=s("Official Indexer Service"),E=l(`<h3 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Das <span class="token keyword">from</span> <span class="token string">&#39;das-sdk&#39;</span>

<span class="token keyword">const</span> das <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Das</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://indexer-v1.did.id&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

das<span class="token punctuation">.</span><span class="token function">records</span><span class="token punctuation">(</span><span class="token string">&#39;dasloveckb.bit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token property unquoted">key</span><span class="token operator">:</span> <span class="token string">&#39;address.eth&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">label</span><span class="token operator">:</span> <span class="token string">&#39;coinbase&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">value</span><span class="token operator">:</span> <span class="token string">&#39;0x1234...4567&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">ttl</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property unquoted">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://display.did.id/identicon/dasloveckb.bit&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token property unquoted">key</span><span class="token operator">:</span> <span class="token string">&#39;address.eth&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">label</span><span class="token operator">:</span> <span class="token string">&#39;onchain&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">value</span><span class="token operator">:</span> <span class="token string">&#39;0x2345...6789&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">ttl</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property unquoted">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://display.did.id/identicon/dasloveckb.bit&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="next-step" tabindex="-1"><a class="header-anchor" href="#next-step" aria-hidden="true">#</a> Next Step</h4>`,5),L=s("If you need to integrate .bit in backend, please read "),O=s("Backend Integration"),R=s("If you need design guide, please see "),V=s("Design Guide");function H(Q,T){const o=i("ExternalLinkIcon"),a=i("RouterLink");return d(),r("div",null,[u,n("h2",k,[h,v,n("a",_,[b,e(o)])]),n("p",null,[n("a",m,[g,e(o)]),f]),n("p",null,[x,e(a,{to:"/developers/integration-backend.html#das-account-indexer"},{default:t(()=>[y]),_:1}),q]),j,n("blockquote",null,[n("p",null,[n("a",w,[I,e(o)])])]),N,n("p",null,[S,e(a,{to:"/developers/integration-backend.html"},{default:t(()=>[D]),_:1}),P]),B,n("blockquote",null,[n("p",null,[e(a,{to:"/developers/integration-backend.html#official-indexer-service"},{default:t(()=>[C]),_:1})])]),E,n("ul",null,[n("li",null,[L,e(a,{to:"/developers/integration-backend.html"},{default:t(()=>[O]),_:1})]),n("li",null,[R,e(a,{to:"/developers/design-guide.html"},{default:t(()=>[V]),_:1})])])])}var J=p(c,[["render",H],["__file","integration-frontend.html.vue"]]);export{J as default};