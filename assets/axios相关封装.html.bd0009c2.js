import{_ as n,o as s,c as a,a as p}from"./app.2f80defe.js";const t={},e=p(`<p><a name="O7ore"></a></p><h2 id="\u62E6\u622A\u5668-\u6DFB\u52A0\u516C\u5171token" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A\u5668-\u6DFB\u52A0\u516C\u5171token" aria-hidden="true">#</a> \u62E6\u622A\u5668(\u6DFB\u52A0\u516C\u5171token)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u53D1\u8BF7\u6C42\u524D\u505A\u7684\u4E00\u4E9B\u5904\u7406\uFF0C\u6570\u636E\u8F6C\u5316\uFF0C\u914D\u7F6E\u8BF7\u6C42\u5934\uFF0C\u8BBE\u7F6Etoken,\u8BBE\u7F6Eloading\u7B49\uFF0C\u6839\u636E\u9700\u6C42\u53BB\u6DFB\u52A0</span>
        config<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6570\u636E\u8F6C\u5316,\u4E5F\u53EF\u4EE5\u4F7F\u7528qs\u8F6C\u6362</span>
        config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5982\u6709\u9700\u8981\uFF1A\u6CE8\u610F\u4F7F\u7528token\u7684\u65F6\u5019\u9700\u8981\u5F15\u5165cookie\u65B9\u6CD5\u6216\u8005\u7528\u672C\u5730localStorage\u7B49\u65B9\u6CD5\uFF0C\u63A8\u8350js-cookie</span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;EOAP-LOGIN-TOKEN&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">?</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;EOAP-LOGIN-TOKEN&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token comment">// M0YxNDhEMkVCMzUxQ0EyOUYwOENGNTA2MDRERjQ5M0E1MTM3QjE1OUJDNzQzODBGNzJFQ0MxQ0M1Nzc1OEVFQw==</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;EOAP-LOGIN-TOKEN&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> token<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.\u54CD\u5E94\u62E6\u622A\u5668</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u63A5\u6536\u5230\u54CD\u5E94\u6570\u636E\u5E76\u6210\u529F\u540E\u7684\u4E00\u4E9B\u5171\u6709\u7684\u5904\u7406\uFF0C\u5173\u95EDloading\u7B49</span>
        <span class="token comment">// response.config.metadata.endTime = new Date();</span>
        <span class="token comment">// response.duration =</span>
        <span class="token comment">//   response.config.metadata.endTime - response.config.metadata.startTime;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">200</span><span class="token operator">:</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
                localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">redirectLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">402</span><span class="token operator">:</span>
                <span class="token comment">// localStorage.clear();</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                <span class="token comment">// localStorage.clear();</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">413</span><span class="token operator">:</span>
                <span class="token comment">// localStorage.clear();</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>

        <span class="token comment">// if (response.data.errorNumber !== 0) {</span>
        <span class="token comment">//   ElMessage({</span>
        <span class="token comment">//     type: &#39;error&#39;,</span>
        <span class="token comment">//     grouping: true,</span>
        <span class="token comment">//     message: response.data.message,</span>
        <span class="token comment">//   });</span>
        <span class="token comment">//   // eslint-disable-next-line no-unused-expressions, eqeqeq</span>
        <span class="token comment">//   response.data.errorNumber == 204 ? redirectLogin() : &#39;&#39;;</span>
        <span class="token comment">// } else {</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
        <span class="token comment">// }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        reqNum<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reqNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeLoadingStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5173\u95ED\u5168\u5C40\u5F39\u7A97</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// error.config.metadata.endTime = new Date();</span>
        <span class="token comment">// error.duration =</span>
        <span class="token comment">//   error.config.metadata.endTime - error.config.metadata.startTime;</span>
        <span class="token comment">// console.log(error, 887654);</span>
        <span class="token comment">// /***** \u63A5\u6536\u5230\u5F02\u5E38\u54CD\u5E94\u7684\u5904\u7406\u5F00\u59CB *****/</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1.\u516C\u5171\u9519\u8BEF\u5904\u7406</span>
            <span class="token comment">// 2.\u6839\u636E\u54CD\u5E94\u7801\u5177\u4F53\u5904\u7406</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u9519\u8BEF\u8BF7\u6C42&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
                    localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u672A\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u62D2\u7EDD\u8BBF\u95EE&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90&#39;</span><span class="token punctuation">;</span>
                    <span class="token comment">// window.location.href = &quot;/NotFound&quot;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">405</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">408</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u6C42\u8D85\u65F6&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">501</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u7EDC\u672A\u5B9E\u73B0&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">502</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u7EDC\u9519\u8BEF&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">503</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u670D\u52A1\u4E0D\u53EF\u7528&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">504</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u7EDC\u8D85\u65F6&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">505</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8D85\u65F6\u5904\u7406</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Toast(&quot;\u670D\u52A1\u5668\u54CD\u5E94\u8D85\u65F6\uFF0C\u8BF7\u5237\u65B0\u5F53\u524D\u9875&quot;);</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u670D\u52A1\u5668\u54CD\u5E94\u8D85\u65F6\uFF0C\u8BF7\u5237\u65B0\u5F53\u524D\u9875&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Message(error.message);</span>
        <span class="token comment">// eslint-disable-next-line no-unused-expressions</span>
        <span class="token comment">// eslint-disable-next-line no-unused-expressions</span>
        error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">?</span> <span class="token function">redirectLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/***** \u5904\u7406\u7ED3\u675F *****/</span>
        <span class="token comment">//\u5982\u679C\u4E0D\u9700\u8981\u9519\u8BEF\u5904\u7406\uFF0C\u4EE5\u4E0A\u7684\u5904\u7406\u8FC7\u7A0B\u90FD\u53EF\u7701\u7565</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="hlEQN"></a></p><h2 id="\u9879\u76EE\u5168\u5C40loading" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5168\u5C40loading" aria-hidden="true">#</a> \u9879\u76EE\u5168\u5C40loading</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> reqNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u6B63\u5728\u8FDB\u884C\u7684\u7F51\u7EDC\u8BF7\u6C42\u7684\u6570\u91CF</span>
<span class="token comment">//\u8BF7\u6C42\u62E6\u622A\u5668\u4E2D\u6DFB\u52A0</span>
    <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        reqNum<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reqNum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeLoadingStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6253\u5F00\u5168\u5C40\u5F39\u7A97</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">//\u54CD\u5E94\u62E6\u622A\u5668\u4E2D\u6DFB\u52A0</span>
	  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        reqNum<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reqNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeLoadingStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5173\u95ED\u5168\u5C40\u5F39\u7A97</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        reqNum<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reqNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeLoadingStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5173\u95ED\u5168\u5C40\u5F39\u7A97</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">changeLoadingStatus</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>isLoading <span class="token operator">=</span> status<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u5728\u7236\u7EC4\u4EF6\u4E0A\u4F7F\u7528isLoading\u53D8\u91CF\u63A7\u5236loading\u6548\u679C\u5373\u53EF <a name="RDhSX"></a></p><h2 id="\u5207\u6362\u9875\u9762\u53D6\u6D88\u672A\u5B8C\u6210\u7684\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u9875\u9762\u53D6\u6D88\u672A\u5B8C\u6210\u7684\u8BF7\u6C42" aria-hidden="true">#</a> \u5207\u6362\u9875\u9762\u53D6\u6D88\u672A\u5B8C\u6210\u7684\u8BF7\u6C42</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> reqNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u6B63\u5728\u8FDB\u884C\u7684\u7F51\u7EDC\u8BF7\u6C42\u7684\u6570\u91CF</span>
window<span class="token punctuation">.</span>_axiosPromiseArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// axios\u7F51\u7EDC\u8BF7\u6C42\u6570\u7EC4</span>

<span class="token comment">//\u8BF7\u6C42\u62E6\u622A\u5668</span>
<span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>cancelToken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">axios<span class="token punctuation">.</span>CancelToken</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>_axiosPromiseArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cancel <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>_axiosPromiseArr <span class="token operator">&amp;&amp;</span>
        window<span class="token punctuation">.</span>_axiosPromiseArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	window<span class="token punctuation">.</span>_axiosPromiseArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="Uz52j"></a></p><h2 id="\u5B8C\u6574\u7ED3\u6784\u542B\u5176\u4F59\u57FA\u672C\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u7ED3\u6784\u542B\u5176\u4F59\u57FA\u672C\u5C01\u88C5" aria-hidden="true">#</a> \u5B8C\u6574\u7ED3\u6784\u542B\u5176\u4F59\u57FA\u672C\u5C01\u88C5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u5165axios</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F7F\u7528toast\u505A\u6D88\u606F\u63D0\u9192</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;@/route/index.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> env <span class="token keyword">from</span> <span class="token string">&#39;./env&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;../../store/index&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//1. \u521B\u5EFA\u65B0\u7684axios\u5B9E\u4F8B\uFF0C</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u516C\u5171\u63A5\u53E3</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> env<span class="token punctuation">.</span>baseURL<span class="token punctuation">,</span>
    <span class="token comment">// \u8D85\u65F6\u65F6\u95F4 \u5355\u4F4D\u662Fms\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E863s\u7684\u8D85\u65F6\u65F6\u95F4</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> reqNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u6B63\u5728\u8FDB\u884C\u7684\u7F51\u7EDC\u8BF7\u6C42\u7684\u6570\u91CF</span>
window<span class="token punctuation">.</span>_axiosPromiseArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// axios\u7F51\u7EDC\u8BF7\u6C42\u6570\u7EC4</span>
<span class="token comment">// 2.\u8BF7\u6C42\u62E6\u622A\u5668</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        reqNum<span class="token operator">++</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span>cancelToken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">axios<span class="token punctuation">.</span>CancelToken</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>_axiosPromiseArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cancel <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reqNum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeLoadingStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6253\u5F00\u5168\u5C40\u5F39\u7A97</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u53D1\u8BF7\u6C42\u524D\u505A\u7684\u4E00\u4E9B\u5904\u7406\uFF0C\u6570\u636E\u8F6C\u5316\uFF0C\u914D\u7F6E\u8BF7\u6C42\u5934\uFF0C\u8BBE\u7F6Etoken,\u8BBE\u7F6Eloading\u7B49\uFF0C\u6839\u636E\u9700\u6C42\u53BB\u6DFB\u52A0</span>
        config<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6570\u636E\u8F6C\u5316,\u4E5F\u53EF\u4EE5\u4F7F\u7528qs\u8F6C\u6362</span>
        config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5982\u6709\u9700\u8981\uFF1A\u6CE8\u610F\u4F7F\u7528token\u7684\u65F6\u5019\u9700\u8981\u5F15\u5165cookie\u65B9\u6CD5\u6216\u8005\u7528\u672C\u5730localStorage\u7B49\u65B9\u6CD5\uFF0C\u63A8\u8350js-cookie</span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;EOAP-LOGIN-TOKEN&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">?</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;EOAP-LOGIN-TOKEN&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token comment">// M0YxNDhEMkVCMzUxQ0EyOUYwOENGNTA2MDRERjQ5M0E1MTM3QjE1OUJDNzQzODBGNzJFQ0MxQ0M1Nzc1OEVFQw==</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;EOAP-LOGIN-TOKEN&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> token<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.\u54CD\u5E94\u62E6\u622A\u5668</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        reqNum<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reqNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeLoadingStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5173\u95ED\u5168\u5C40\u5F39\u7A97</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u63A5\u6536\u5230\u54CD\u5E94\u6570\u636E\u5E76\u6210\u529F\u540E\u7684\u4E00\u4E9B\u5171\u6709\u7684\u5904\u7406\uFF0C\u5173\u95EDloading\u7B49</span>
        <span class="token comment">// response.config.metadata.endTime = new Date();</span>
        <span class="token comment">// response.duration =</span>
        <span class="token comment">//   response.config.metadata.endTime - response.config.metadata.startTime;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">200</span><span class="token operator">:</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
                localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">redirectLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">402</span><span class="token operator">:</span>
                <span class="token comment">// localStorage.clear();</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                <span class="token comment">// localStorage.clear();</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">413</span><span class="token operator">:</span>
                <span class="token comment">// localStorage.clear();</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// redirectLogin();</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>

        <span class="token comment">// if (response.data.errorNumber !== 0) {</span>
        <span class="token comment">//   ElMessage({</span>
        <span class="token comment">//     type: &#39;error&#39;,</span>
        <span class="token comment">//     grouping: true,</span>
        <span class="token comment">//     message: response.data.message,</span>
        <span class="token comment">//   });</span>
        <span class="token comment">//   // eslint-disable-next-line no-unused-expressions, eqeqeq</span>
        <span class="token comment">//   response.data.errorNumber == 204 ? redirectLogin() : &#39;&#39;;</span>
        <span class="token comment">// } else {</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
        <span class="token comment">// }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        reqNum<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reqNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeLoadingStatus&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5173\u95ED\u5168\u5C40\u5F39\u7A97</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// error.config.metadata.endTime = new Date();</span>
        <span class="token comment">// error.duration =</span>
        <span class="token comment">//   error.config.metadata.endTime - error.config.metadata.startTime;</span>
        <span class="token comment">// console.log(error, 887654);</span>
        <span class="token comment">// /***** \u63A5\u6536\u5230\u5F02\u5E38\u54CD\u5E94\u7684\u5904\u7406\u5F00\u59CB *****/</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1.\u516C\u5171\u9519\u8BEF\u5904\u7406</span>
            <span class="token comment">// 2.\u6839\u636E\u54CD\u5E94\u7801\u5177\u4F53\u5904\u7406</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u9519\u8BEF\u8BF7\u6C42&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
                    localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u672A\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u62D2\u7EDD\u8BBF\u95EE&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90&#39;</span><span class="token punctuation">;</span>
                    <span class="token comment">// window.location.href = &quot;/NotFound&quot;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">405</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">408</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u6C42\u8D85\u65F6&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">501</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u7EDC\u672A\u5B9E\u73B0&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">502</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u7EDC\u9519\u8BEF&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">503</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u670D\u52A1\u4E0D\u53EF\u7528&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">504</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u7EDC\u8D85\u65F6&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">505</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    error<span class="token punctuation">.</span>message <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8D85\u65F6\u5904\u7406</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Toast(&quot;\u670D\u52A1\u5668\u54CD\u5E94\u8D85\u65F6\uFF0C\u8BF7\u5237\u65B0\u5F53\u524D\u9875&quot;);</span>
                window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u670D\u52A1\u5668\u54CD\u5E94\u8D85\u65F6\uFF0C\u8BF7\u5237\u65B0\u5F53\u524D\u9875&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            error<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Message(error.message);</span>
        <span class="token comment">// eslint-disable-next-line no-unused-expressions</span>
        <span class="token comment">// eslint-disable-next-line no-unused-expressions</span>
        error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">?</span> <span class="token function">redirectLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/***** \u5904\u7406\u7ED3\u675F *****/</span>
        <span class="token comment">//\u5982\u679C\u4E0D\u9700\u8981\u9519\u8BEF\u5904\u7406\uFF0C\u4EE5\u4E0A\u7684\u5904\u7406\u8FC7\u7A0B\u90FD\u53EF\u7701\u7565</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">redirectLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable comma-dangle */</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;./request&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> requestDown <span class="token keyword">from</span> <span class="token string">&#39;./requestUp&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * methods: \u8BF7\u6C42
     * <span class="token keyword">@param</span> <span class="token parameter">url</span> \u8BF7\u6C42\u5730\u5740
     * <span class="token keyword">@param</span> <span class="token parameter">params</span> \u8BF7\u6C42\u53C2\u6570
     */</span>
    <span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
            url<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> config<span class="token punctuation">.</span>params <span class="token operator">=</span> params<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">)</span> config<span class="token punctuation">.</span>headers <span class="token operator">=</span> headers<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
            url<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> config<span class="token punctuation">.</span>data <span class="token operator">=</span> params<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">)</span> config<span class="token punctuation">.</span>headers <span class="token operator">=</span> headers<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
            url<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> config<span class="token punctuation">.</span>data <span class="token operator">=</span> params<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
            url<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> config<span class="token punctuation">.</span>data <span class="token operator">=</span> params<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
            url<span class="token punctuation">,</span>
            <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;multipart/form-data;charset=utf-8&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> config<span class="token punctuation">.</span>data <span class="token operator">=</span> params<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">requestDown</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> http<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> envBase<span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">API_ENV</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;prd&#39;</span><span class="token operator">:</span>
        envBase <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;XXXXXXX&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;uat&#39;</span><span class="token operator">:</span>
        envBase <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;XXXXXXX&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;dev&#39;</span><span class="token operator">:</span>
        envBase <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;XXXXXXX&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;mock&#39;</span><span class="token operator">:</span>
        envBase <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;XXXXXXX&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        envBase <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> envBase<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&#39;@/services/config/http.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$http <span class="token operator">=</span> Http<span class="token punctuation">;</span>

<span class="token comment">//\u4F7F\u7528\u65F6</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
proxy<span class="token punctuation">.</span>$http
    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;XXX&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","axios\u76F8\u5173\u5C01\u88C5.html.vue"]]);export{r as default};
