import{_ as i,c as a,a as n,o as h}from"./app-C_XscStE.js";const l={};function t(e,s){return h(),a("div",null,s[0]||(s[0]=[n(`<h2 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量"><span>声明变量</span></a></h2><p>在 Rust 中， 通过 <code>let</code> 关键字声明变量。</p><h2 id="变量命名" tabindex="-1"><a class="header-anchor" href="#变量命名"><span>变量命名</span></a></h2><p>在命名方面，与其他语言没有区别，但是需要遵循 <a href="https://www.notion.so/d6508ec305c44193b2d36fd0ce5e84bb" target="_blank" rel="noopener noreferrer">Rust 命名规范</a></p><h2 id="变量绑定" tabindex="-1"><a class="header-anchor" href="#变量绑定"><span>变量绑定</span></a></h2><p>在其他语言， <code>var a = &#39;hello&#39;</code> 表示将 字符串 <code>hello</code> 赋值给了变量 <code>a</code> 。</p><p>在 Rust 中， <code>let a = &#39;hello&#39;</code> ，这个过程被称为 变量绑定。</p><p>使用 <strong>绑定</strong> 而不是 <strong>赋值</strong> ,是因为涉及了 Rust 的核心原则 —— <strong>所有权</strong> 。</p><div class="hint-container tip"><p class="hint-container-title">所有权</p><p>简单来说，任何内存对象都是有主人的，而且一般情况下完全属于它的主人，绑定就是把这个对象绑定给一个变量，让这个变量成为它的主人。</p></div><h2 id="变量可变性" tabindex="-1"><a class="header-anchor" href="#变量可变性"><span>变量可变性</span></a></h2><p>Rust 的变量默认是 <strong>不可变</strong> 的。 这是 Rust 的特性之一，让我们编写的代码更安全、性能也更好。</p><p>如果变量 <code>a</code> 是不可变的，那么它一旦被绑定值，那么就不能再被修改</p><p>但也可以通过 关键字 <code>mut</code> 使变量变为 <strong>可变的</strong> 。</p><p><strong>示例 1</strong>：不可变变量</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 6</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>cargo run</code> 运行，将会抛出一个 <strong>cannot assign twice to immutable variable <code>a</code> \`</strong> 的错误提示。</p><p><strong>示例 2</strong>：可变变量</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> mut</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 6</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行程序将得到以下结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">a:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">a:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 6</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用下划线开头忽略未使用变量" tabindex="-1"><a class="header-anchor" href="#使用下划线开头忽略未使用变量"><span>使用下划线开头忽略未使用变量</span></a></h2><p>如果创建了一个变量，但是却没有使用它，Rust 会给出一个警告，因为这可能是一个 Bug。</p><p>但有时候创建未使用的变量可能是有用的，这时你希望 Rust 不要警告未使用的变量，那么可以 <strong>使用下划线作为变量名开头</strong> ：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">fn</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时，Rust 只会警告 变量 <code>x</code> 未被使用，而不会警告变量 <code>_y</code> 未被使用。</p><h2 id="变量结构" tabindex="-1"><a class="header-anchor" href="#变量结构"><span>变量结构</span></a></h2><p><code>let</code> 表达式不仅可以用于 变量绑定，还可以用于复杂的变量解构。</p><p><strong>变量结构</strong> 是指，从一个相对复杂的变量中，匹配出变量的一部分内容。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> mut</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">bool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> bool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// a 不可变， b 可变</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">a: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">, b: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构式赋值" tabindex="-1"><a class="header-anchor" href="#解构式赋值"><span>解构式赋值</span></a></h3><p>赋值语句左边可以使用 <strong>元组</strong>， <strong>切片</strong> ， <strong>结构体模式</strong> 。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 元组</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ..</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 切片</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">struct</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Struct</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> i32</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Struct</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ..</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Struct</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> };</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 结构体模式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 1 2 1 4 5</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量"><span>常量</span></a></h2><p>在 Rust 中，通过 <code>const</code> 声明常量。</p><p>并且常量的必须标注值的类型。</p><h2 id="变量遮蔽" tabindex="-1"><a class="header-anchor" href="#变量遮蔽"><span>变量遮蔽</span></a></h2><p>Rust 允许声明相同的变量名，在后面声明的变量会遮蔽掉前面声明的变量：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">fn</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 在 之前的 x 进行变量遮蔽</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> x</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 遮蔽前可以使用 之前的变量 x 的值</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // x 值为 3</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> x</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 在块级作用域内对 之前的 x 进行遮蔽</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // x 值为 5</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量遮蔽不同于使用 <code>mut</code> 声明的可变变量，第二个 <code>let</code> 声明生成的是完全不同的变量，只是拥有相同的变量名，是一次内存对象的再分配，而 <code>mut</code> 声明的变量，修改的是同一个内存地址上的值，并不会发生内存对象的再分配。</p><p>变量遮蔽的用处在于，如果你在某个作用域内无需再使用之前的变量（在被遮蔽后，无法再访问到之前的同名变量），就可以重复的使用变量名字，而不用绞尽脑汁去想更多的名字。</p>`,40)]))}const p=i(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/learn-rust/variable/","title":"变量","lang":"zh-CN","frontmatter":{"title":"变量","author":"李嘉明","createTime":"2022/06/03 05:40:30","permalink":"/learn-rust/variable/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/learn-rust/variable/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"变量"}],["meta",{"property":"og:description","content":"声明变量 在 Rust 中， 通过 let 关键字声明变量。 变量命名 在命名方面，与其他语言没有区别，但是需要遵循 Rust 命名规范 变量绑定 在其他语言， var a = 'hello' 表示将 字符串 hello 赋值给了变量 a 。 在 Rust 中， let a = 'hello' ，这个过程被称为 变量绑定。 使用 绑定 而不是 赋值 ,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"声明变量 在 Rust 中， 通过 let 关键字声明变量。 变量命名 在命名方面，与其他语言没有区别，但是需要遵循 Rust 命名规范 变量绑定 在其他语言， var a = 'hello' 表示将 字符串 hello 赋值给了变量 a 。 在 Rust 中， let a = 'hello' ，这个过程被称为 变量绑定。 使用 绑定 而不是 赋值 ,..."},"headers":[{"level":2,"title":"声明变量","slug":"声明变量","link":"#声明变量","children":[]},{"level":2,"title":"变量命名","slug":"变量命名","link":"#变量命名","children":[]},{"level":2,"title":"变量绑定","slug":"变量绑定","link":"#变量绑定","children":[]},{"level":2,"title":"变量可变性","slug":"变量可变性","link":"#变量可变性","children":[]},{"level":2,"title":"使用下划线开头忽略未使用变量","slug":"使用下划线开头忽略未使用变量","link":"#使用下划线开头忽略未使用变量","children":[]},{"level":2,"title":"变量结构","slug":"变量结构","link":"#变量结构","children":[{"level":3,"title":"解构式赋值","slug":"解构式赋值","link":"#解构式赋值","children":[]}]},{"level":2,"title":"常量","slug":"常量","link":"#常量","children":[]},{"level":2,"title":"变量遮蔽","slug":"变量遮蔽","link":"#变量遮蔽","children":[]}],"readingTime":{"minutes":3.13,"words":939},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/rust学习简记/基础入门/变量.md"}`);export{p as comp,d as data};