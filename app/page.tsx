const features = [
  { mark: "⌂", title: "桌面自动归类", text: "把截图、文档、压缩包和安装包按类型收好，让桌面重新整洁。" },
  { mark: "◇", title: "AI 更新不再堆积", text: "不断测试和更新 AI 产品时，自动找出遗留的旧 App 与旧版本。" },
  { mark: "↻", title: "只保留最新版", text: "比较版本和修改时间，确认后一键保留最新版本，不必逐个查找。" },
  { mark: "↓", title: "安装包一键清理", text: "集中识别旧 ZIP、DMG、PKG 等安装文件，确认后移到废纸篓。" },
  { mark: "▣", title: "截图集中处理", text: "截图、长截图和录屏统一保存，最近图片可以直接拖出使用。" },
  { mark: "✦", title: "照片按日期整理", text: "按照拍摄日期整理照片，由你选择哪些内容加入项目素材相簿。" },
  { mark: "✓", title: "清理安全可恢复", text: "执行前先看清单，删除内容只进入废纸篓，发现误删仍能恢复。" },
];

const colors = ["#ff3b57", "#ff9f1c", "#ffd52e", "#35d06f", "#32c7d9", "#2f80ed", "#a65be2"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="虹笺首页">
          <img src="/hongjian-icon.png" alt="" />
          <span>虹笺</span>
        </a>
        <div className="navLinks">
          <a href="#features">功能</a>
          <a href="#privacy">隐私</a>
          <a href="/rights">知识产权</a>
          <a className="navDownload" href="#download">免费下载</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="eyebrow"><span /> 为 Mac 桌面而生</div>
          <h1>把桌面杂事，<br /><em>收进一张便签。</em></h1>
          <p className="lead">虹笺是一款轻量 Mac 桌面助手。整理文件、收好截图、清理旧版本，所有操作简单可见。</p>
          <p className="creatorLine">由创作者 <strong>鄢果</strong> 设计与开发</p>
          <div className="actions">
            <a className="primary" href="#download">选择下载方式 <span>↓</span></a>
            <a className="secondary" href="#features">了解核心功能</a>
          </div>
          <p className="compatibility">适用于 macOS 13 或更高版本 · 当前为 Mac 测试版</p>
        </div>

        <div className="heroVisual" aria-label="虹笺应用界面示意图">
          <div className="glow glowOne" />
          <div className="glow glowTwo" />
          <div className="noteWindow">
            <div className="traffic"><i /><i /><i /></div>
            <div className="noteHeader">
              <span>今日整理</span>
              <small>☾ 16°　8月16日</small>
            </div>
            <p className="noteIntro">每天 5 分钟，让电脑也轻松一点</p>
            <div className="tasks">
              {["清理不必要的文件", "文件归入对应文件夹", "整理截图", "清理压缩包", "只保留最新版本"].map((task, index) => (
                <div className="task" key={task}>
                  <span className={index === 0 ? "checked" : ""}>{index === 0 ? "✓" : ""}</span>
                  <div><b>{task}</b><i /></div>
                </div>
              ))}
            </div>
            <div className="tabs" aria-hidden="true">
              {colors.map((color, index) => <span style={{ background: color }} key={color}>{index + 1}</span>)}
            </div>
          </div>
          <div className="miniCard miniScreenshot"><b>最近截图</b><span>随时拖出去</span><i /></div>
          <div className="miniCard miniClean"><b>整理完成</b><span>旧文件已移到废纸篓</span><strong>✓</strong></div>
        </div>
      </section>

      <section className="productFacts" aria-label="产品特点">
        <span><b>本地优先</b><small>文件留在你的 Mac</small></span>
        <span><b>操作可见</b><small>清理前先确认</small></span>
        <span><b>删除可恢复</b><small>只移动到废纸篓</small></span>
      </section>

      <section className="rainbowLine" aria-hidden="true">{colors.map(color => <i style={{ background: color }} key={color} />)}</section>

      <section className="features" id="features">
        <div className="sectionHeading">
          <span>CORE FEATURES</span>
          <h2>七种颜色，七件实用的小事。</h2>
          <p>从桌面整理到 AI 产品更新，旧版本与安装包一键处理，不再手动逐个删除。</p>
        </div>
        <div className="featureGrid">
          {features.map((feature, index) => (
            <article className="featureCard" key={feature.title}>
              <div className={`featureIcon featureIcon${index + 1}`}>{feature.mark}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow">
        <div className="sectionHeading"><span>HOW IT WORKS</span><h2>三步完成一次整理。</h2></div>
        <div className="workflowGrid">
          <article><i>1</i><b>选择</b><p>勾选要执行的整理项目。</p></article>
          <article><i>2</i><b>预览</b><p>先查看将被归类或清理的内容。</p></article>
          <article><i>3</i><b>完成</b><p>确认后执行，删除内容仍可恢复。</p></article>
        </div>
      </section>

      <section className="privacy" id="privacy">
        <div>
          <span className="sectionTag">隐私优先</span>
          <h2>你的文件，仍然属于你。</h2>
        </div>
        <div className="privacyPoints">
          <p><b>先看，再整理</b><span>重要清理操作会先展示清单，由你确认后才执行。</span></p>
          <p><b>可以恢复</b><span>删除操作移动到 macOS 废纸篓，不会直接永久删除。</span></p>
          <p><b>权限由你决定</b><span>照片、麦克风、录屏和位置权限都可以在系统设置中随时关闭。</span></p>
        </div>
      </section>

      <section className="downloadSection" id="download">
        <img src="/hongjian-icon.png" alt="虹笺应用图标" />
        <h2>把虹笺分享给朋友。</h2>
        <p>一个页面，两种使用方式。选择适合你的版本即可。</p>
        <div className="downloadGrid">
          <article className="downloadCard">
            <span className="downloadLabel">完整应用</span>
            <h3>虹笺 Mac 版</h3>
            <p>桌面便签、文件整理、截图和旧版本清理，适合 Mac 与 MacBook。</p>
            <a className="primary light" href="/虹笺.zip" download>下载虹笺 3.2 <span>↓</span></a>
            <small>解压后拖入“应用程序”，首次使用请右键选择“打开”</small>
          </article>
          <article className="downloadCard skillCard">
            <span className="downloadLabel">独立 Skill</span>
            <h3>安全文件日期整理</h3>
            <p>给文件名安全添加日期，先预览、可撤销，个人非商业使用免费。</p>
            <a className="primary light" href="/safe-file-date-organizer-1.0.0.zip" download="鄢果-安全文件日期整理-Skill-1.0.0.zip">下载免费 Skill <span>↓</span></a>
            <small>解压后导入 Codex Skills；商业使用与再销售须获得作者授权</small>
          </article>
        </div>
        <p className="shareTip">直接把本页网址发给朋友，对方不用接收超大的聊天附件。</p>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top"><img src="/hongjian-icon.png" alt="" /><span>虹笺</span></a>
        <p>彩虹桌面整理便签 · 创作者 鄢果</p>
        <span>© 2026 鄢果 · <a href="/rights">知识产权声明</a></span>
      </footer>
    </main>
  );
}
