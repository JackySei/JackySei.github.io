import{_ as e,o as n,c as i,a as s}from"./app.2f80defe.js";const l={},c=s(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>function onCopy() {
  if (navigator.clipboard &amp;&amp; window.isSecureContext) {
    navigator.clipboard.writeText(encodeURI(\`\${H5link.value}\`)).then(() =&gt; {
      ElMessage.success(&#39;\u590D\u5236\u6210\u529F&#39;)
    })
  } else {
    window.getSelection().removeAllRanges()
    const questionToCopy = document.querySelector(&#39;#copy&#39;)
    const range = document.createRange()
    range.selectNode(questionToCopy)
    window.getSelection().addRange(range)
    try {
      const successful = document.execCommand(&#39;copy&#39;)
      if (successful) {
        ElMessage.success(&#39;\u590D\u5236\u6210\u529F&#39;)
      }
    } catch (error) {
      ElMessage.error(&#39;\u590D\u5236\u5931\u8D25&#39;)
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1Anavigator.clipboard\u7684\u4F7F\u7528\u6761\u4EF6\u662F\u5B89\u5168\u73AF\u5883\uFF0C\u5373\u9664localhost\u548Chttps\u5916\u7B49\u73AF\u5883\u5916\uFF0C\u65E0\u6CD5\u4F7F\u7528\u8BE5\u5C5E\u6027\u3002</p>`,2),d=[c];function a(r,v){return n(),i("div",null,d)}var t=e(l,[["render",a],["__file","\u590D\u5236\u6587\u672C\u64CD\u4F5C.html.vue"]]);export{t as default};
