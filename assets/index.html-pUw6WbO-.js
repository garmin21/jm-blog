import{_ as i,c as a,a as e,o as l}from"./app-Bz0t8sQz.js";const n={};function h(d,s){return l(),a("div",null,s[0]||(s[0]=[e(`<p>本篇仅收集记录 常用的命令行，及在具体场景中的使用，并不对它们进行详细介绍。</p><h2 id="拷贝" tabindex="-1"><a class="header-anchor" href="#拷贝"><span>拷贝</span></a></h2><h3 id="拷贝一个文件" tabindex="-1"><a class="header-anchor" href="#拷贝一个文件"><span>拷贝一个文件</span></a></h3><p>将 <code>file.txt</code> 拷贝到 <code>documents/</code> 目录下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> documents/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拷贝一个目录" tabindex="-1"><a class="header-anchor" href="#拷贝一个目录"><span>拷贝一个目录</span></a></h3><p>把 <code>music/</code> 整个目录拷贝到 <code>media/</code> 目录下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 或者写成</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/music/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建文件副本" tabindex="-1"><a class="header-anchor" href="#创建文件副本"><span>创建文件副本</span></a></h3><p>从 <code>file.txt</code> 创建副本 <code>file.bak.txt</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.bak.txt</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 或者写成</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file{,.bak}.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建目录副本" tabindex="-1"><a class="header-anchor" href="#创建目录副本"><span>创建目录副本</span></a></h3><p>从 <code>music/</code> 创建副本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 如果 media 目录不存在</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动" tabindex="-1"><a class="header-anchor" href="#移动"><span>移动</span></a></h2><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件"><span>移动文件</span></a></h3><p>将 <code>file.txt</code> 移动到 <code>documents/</code> 目录下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> documents/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 不要忽略 document 后面的 \`/\`，不然会被当成重命名文件</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名文件" tabindex="-1"><a class="header-anchor" href="#重命名文件"><span>重命名文件</span></a></h3><p>将 <code>file.txt</code> 重命名为 <code>readme.md</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> readme.md</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="移动目录" tabindex="-1"><a class="header-anchor" href="#移动目录"><span>移动目录</span></a></h3><p>将 目录 <code>music/</code> 移动到 <code>media/</code> 目录下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 或者写成</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/music</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名目录" tabindex="-1"><a class="header-anchor" href="#重命名目录"><span>重命名目录</span></a></h3><p>将 目录 <code>music/</code> 重命名为 <code>media/</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="合并目录文件" tabindex="-1"><a class="header-anchor" href="#合并目录文件"><span>合并目录文件</span></a></h2><p>将 <code>images/</code> 目录合并到 <code>images2/</code> 目录中</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># -a 相当于 -rlptgoD , 表示归档，同名文件会被覆盖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rsync</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> images/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> images2/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h2><h3 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件"><span>创建文件</span></a></h3><p>创建 <code>file.txt</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">touch</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 如果文件存在，则更新它的权限和修改时间</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 或者使用</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> file.txt  </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 如果文件存在，则会清空文件内容</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录"><span>创建目录</span></a></h3><p>创建 <code>music/</code> 目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 创建一连串的文件夹</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> media/music/rock</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息"><span>查看信息</span></a></h2><h3 id="文件和目录大小" tabindex="-1"><a class="header-anchor" href="#文件和目录大小"><span>文件和目录大小</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">du</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node_modules/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文件信息" tabindex="-1"><a class="header-anchor" href="#文件信息"><span>文件信息</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">stat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # MacOS</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">stat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # Linux</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件内容" tabindex="-1"><a class="header-anchor" href="#文件内容"><span>文件内容</span></a></h3><p>查看文件内容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 如果文件太大，可以使用 \`less\` 来一次查看一页内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">less</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录文件" tabindex="-1"><a class="header-anchor" href="#目录文件"><span>目录文件</span></a></h3><p>查看目录中的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> folder</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># -l: 以列表格式显示. -a: 显示包括隐藏文件的所有文件. -la 结合以上两个选项.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ls</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -la</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> folder</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># -r: 倒序显示. -t: 按修改时间排序. -h: 以易读的格式显示大小.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ls</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -alrth</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> folder</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示目录下所有文件和子目录的文件树</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tree</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> folder</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # Linux</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -print</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sed</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -e</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s;[^/]*/;|____;g;s;____|; |;g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # MacOS</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 也可以在 MacOS 上使用 \`brew install tree\` 安装 \`tree\` 命令行工具</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开文件" tabindex="-1"><a class="header-anchor" href="#打开文件"><span>打开文件</span></a></h2><p>使用默认程序打开文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">xdg-open</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # Linux</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">open</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # MacOS</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # Windows</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在任意程序中打开文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">open</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> appName</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h2><h3 id="删除一个文件" tabindex="-1"><a class="header-anchor" href="#删除一个文件"><span>删除一个文件</span></a></h3><p>删除 <code>file.txt</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除一个目录" tabindex="-1"><a class="header-anchor" href="#删除一个目录"><span>删除一个目录</span></a></h3><p>删除 <code>music/</code> 目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解压缩" tabindex="-1"><a class="header-anchor" href="#解压缩"><span>解压缩</span></a></h2><h3 id="压缩整个目录" tabindex="-1"><a class="header-anchor" href="#压缩整个目录"><span>压缩整个目录</span></a></h3><p>将 目录 <code>music/</code> 压缩到 <code>archive.zip</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">zip</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> archive.zip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> music</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件"><span>解压文件</span></a></h3><p>将 <code>archive.zip</code> 解压</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">unzip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> archive.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="速览压缩文件" tabindex="-1"><a class="header-anchor" href="#速览压缩文件"><span>速览压缩文件</span></a></h3><p>速览压缩包中的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">zipinfo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> archive.zip</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">unzip</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -l</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> archive.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索"><span>搜索</span></a></h2><h3 id="找出陈旧文件" tabindex="-1"><a class="header-anchor" href="#找出陈旧文件"><span>找出陈旧文件</span></a></h3><p>找出所有最近一次修改在 5 天之前的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> folder</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -mtime</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +5</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检索文件内容" tabindex="-1"><a class="header-anchor" href="#检索文件内容"><span>检索文件内容</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">grep</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">music</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>grep</code> 能在文件中检索特定内容，一些常见的配套命令行参数:</p><ul><li><code>-i</code>：大小写敏感</li><li><code>-A/-B/-C &lt;N&gt;</code>：顺带显示前后文，<code>-A</code>表示后面 N 行，-B 表示前面 N 行，<code>-C</code>表示前后各 N 行</li><li><code>-E</code>：使用正则表达式来匹配</li><li><code>-v</code>：反选（输出不匹配的行）</li><li><code>-l</code>：只输出能匹配到内容的文件名</li><li><code>-F</code>：不要将检索内容视为正则表达式</li><li><code>-r</code>：递归匹配目录下所有文件的内容</li><li><code>-o</code>：只输出匹配上了的部分（而不是整行）</li><li><code>-a</code>：也对二进制文件进行检索，而不是忽略它们！</li></ul><h2 id="强制退出程序" tabindex="-1"><a class="header-anchor" href="#强制退出程序"><span>强制退出程序</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">killall</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> program_name</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络"><span>网络</span></a></h2><h3 id="服务器响应" tabindex="-1"><a class="header-anchor" href="#服务器响应"><span>服务器响应</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://jm-garming</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检查域名-地址连接" tabindex="-1"><a class="header-anchor" href="#检查域名-地址连接"><span>检查域名/地址连接</span></a></h3><p>检查域名或者地址某端口是否能够连接</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nc</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -vz</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> jm-garming</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 443</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nc</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -vz</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.1.1.1</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 443</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="域名-dns-配置" tabindex="-1"><a class="header-anchor" href="#域名-dns-配置"><span>域名 DNS 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dig</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> jm-garming</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="域名所有人和注册信息" tabindex="-1"><a class="header-anchor" href="#域名所有人和注册信息"><span>域名所有人和注册信息</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">whois</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> jm-garming</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="热键" tabindex="-1"><a class="header-anchor" href="#热键"><span>热键</span></a></h2><ul><li><code>Ctrl + A</code> 跳转到你当前编辑的命令行行首</li><li><code>Ctrl + E</code> 跳转到你当前编辑的命令行行尾</li><li><code>Ctrl + L</code> 清屏，和 clear 指令类似</li><li><code>Ctrl + U</code> 清除行中光标之前的内容（在行尾时即清除整行）</li><li><code>Ctrl + H</code> 和退格一样</li><li><code>Ctrl + R</code> 能让你搜索之前使用过的命令行记录</li><li><code>Ctrl + C</code> 强制停止当前的程序</li><li><code>Ctrl + D</code> 退出当前 shell （壳层/命令行界面）</li><li><code>Ctrl + Z</code> 将当下运行的程序挂起，使用 fg 来恢复运行</li><li><code>Ctrl + W</code> 删除光标前的一个词</li><li><code>Ctrl + K</code> 清除行中光标之后的内容</li><li><code>Ctrl + T</code> 交换光标前两个字符</li><li><code>Esc + T</code> 交换光标前两个词</li><li><code>Alt + F</code> 将光标移至行内下一个词处</li><li><code>Alt + B</code> 将光标移至行内上一个词处</li><li><code>Tab</code> 自动补全文件/目录的名称</li></ul><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>MacOS</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!!</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                            # 再一次执行上一条指令</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> !!</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                       # 以管理员身份执行上一条指令</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">word</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                       # 加上特定命令行前缀再执行上一条指令</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">word</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:p                     </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 显示上一条指令加上前缀，但不要执行</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">space</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">command                </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 执行指令，但不要存到历史记录中</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ls -l</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> at</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> midnight</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 在特定时间执行指令</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">caffeinate</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -u</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3600</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         # 接下来一小时内阻止你的mac休眠</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ls</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -lhs</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                       # 将目录中文件按大小排序显示</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">qlmanage</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fil</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            # 从命令行调用&quot;速览&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">top</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vsize</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                  # 查看是什么拖慢了你的mac</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,96)]))}const p=i(n,[["render",h],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/cli/","title":"Command-Line Interface","lang":"zh-CN","frontmatter":{"title":"Command-Line Interface","author":"李嘉明","createTime":"2019/08/14 11:27:06","permalink":"/cli/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/cli/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"Command-Line Interface"}],["meta",{"property":"og:description","content":"本篇仅收集记录 常用的命令行，及在具体场景中的使用，并不对它们进行详细介绍。 拷贝 拷贝一个文件 将 file.txt 拷贝到 documents/ 目录下 拷贝一个目录 把 music/ 整个目录拷贝到 media/ 目录下 创建文件副本 从 file.txt 创建副本 file.bak.txt 创建目录副本 从 music/ 创建副本 移动 移动文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Command-Line Interface\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"本篇仅收集记录 常用的命令行，及在具体场景中的使用，并不对它们进行详细介绍。 拷贝 拷贝一个文件 将 file.txt 拷贝到 documents/ 目录下 拷贝一个目录 把 music/ 整个目录拷贝到 media/ 目录下 创建文件副本 从 file.txt 创建副本 file.bak.txt 创建目录副本 从 music/ 创建副本 移动 移动文..."},"headers":[{"level":2,"title":"拷贝","slug":"拷贝","link":"#拷贝","children":[{"level":3,"title":"拷贝一个文件","slug":"拷贝一个文件","link":"#拷贝一个文件","children":[]},{"level":3,"title":"拷贝一个目录","slug":"拷贝一个目录","link":"#拷贝一个目录","children":[]},{"level":3,"title":"创建文件副本","slug":"创建文件副本","link":"#创建文件副本","children":[]},{"level":3,"title":"创建目录副本","slug":"创建目录副本","link":"#创建目录副本","children":[]}]},{"level":2,"title":"移动","slug":"移动","link":"#移动","children":[{"level":3,"title":"移动文件","slug":"移动文件","link":"#移动文件","children":[]},{"level":3,"title":"重命名文件","slug":"重命名文件","link":"#重命名文件","children":[]},{"level":3,"title":"移动目录","slug":"移动目录","link":"#移动目录","children":[]},{"level":3,"title":"重命名目录","slug":"重命名目录","link":"#重命名目录","children":[]}]},{"level":2,"title":"合并目录文件","slug":"合并目录文件","link":"#合并目录文件","children":[]},{"level":2,"title":"创建","slug":"创建","link":"#创建","children":[{"level":3,"title":"创建文件","slug":"创建文件","link":"#创建文件","children":[]},{"level":3,"title":"创建目录","slug":"创建目录","link":"#创建目录","children":[]}]},{"level":2,"title":"查看信息","slug":"查看信息","link":"#查看信息","children":[{"level":3,"title":"文件和目录大小","slug":"文件和目录大小","link":"#文件和目录大小","children":[]},{"level":3,"title":"文件信息","slug":"文件信息","link":"#文件信息","children":[]},{"level":3,"title":"文件内容","slug":"文件内容","link":"#文件内容","children":[]},{"level":3,"title":"目录文件","slug":"目录文件","link":"#目录文件","children":[]}]},{"level":2,"title":"打开文件","slug":"打开文件","link":"#打开文件","children":[]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[{"level":3,"title":"删除一个文件","slug":"删除一个文件","link":"#删除一个文件","children":[]},{"level":3,"title":"删除一个目录","slug":"删除一个目录","link":"#删除一个目录","children":[]}]},{"level":2,"title":"解压缩","slug":"解压缩","link":"#解压缩","children":[{"level":3,"title":"压缩整个目录","slug":"压缩整个目录","link":"#压缩整个目录","children":[]},{"level":3,"title":"解压文件","slug":"解压文件","link":"#解压文件","children":[]},{"level":3,"title":"速览压缩文件","slug":"速览压缩文件","link":"#速览压缩文件","children":[]}]},{"level":2,"title":"搜索","slug":"搜索","link":"#搜索","children":[{"level":3,"title":"找出陈旧文件","slug":"找出陈旧文件","link":"#找出陈旧文件","children":[]},{"level":3,"title":"检索文件内容","slug":"检索文件内容","link":"#检索文件内容","children":[]}]},{"level":2,"title":"强制退出程序","slug":"强制退出程序","link":"#强制退出程序","children":[]},{"level":2,"title":"网络","slug":"网络","link":"#网络","children":[{"level":3,"title":"服务器响应","slug":"服务器响应","link":"#服务器响应","children":[]},{"level":3,"title":"检查域名/地址连接","slug":"检查域名-地址连接","link":"#检查域名-地址连接","children":[]},{"level":3,"title":"域名 DNS 配置","slug":"域名-dns-配置","link":"#域名-dns-配置","children":[]},{"level":3,"title":"域名所有人和注册信息","slug":"域名所有人和注册信息","link":"#域名所有人和注册信息","children":[]}]},{"level":2,"title":"热键","slug":"热键","link":"#热键","children":[{"level":3,"title":"MacOS","slug":"macos","link":"#macos","children":[]}]}],"isBlogPost":true,"readingTime":{"minutes":4.5,"words":1349},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"cli.md","categoryList":[]}`);export{p as comp,r as data};