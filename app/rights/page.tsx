export const metadata = {
  title: "知识产权声明｜虹笺",
  description: "虹笺软件、视觉设计与网站内容的创作者署名及知识产权说明。",
};

export default function RightsPage() {
  return (
    <main className="legalPage">
      <nav className="nav legalNav" aria-label="知识产权页面导航">
        <a className="brand" href="/" aria-label="返回虹笺首页">
          <img src="/hongjian-icon.png" alt="" />
          <span>虹笺</span>
        </a>
        <a className="backHome" href="/">返回首页</a>
      </nav>

      <article className="legalCard">
        <div className="legalEyebrow">INTELLECTUAL PROPERTY</div>
        <h1>知识产权声明</h1>
        <p className="legalLead">虹笺由创作者 <strong>鄢果</strong> 独立设计与开发。本页面用于公开说明作品的创作者身份与权利归属。</p>

        <section>
          <h2>权利归属</h2>
          <p>除另有明确标注外，虹笺的软件代码、产品名称、应用图标、彩虹标签视觉、界面布局、交互设计、文字内容、宣传图片及本网站原创内容，其相关著作权及其他合法权益归创作者鄢果所有。</p>
        </section>

        <section>
          <h2>允许的使用</h2>
          <p>用户可以为个人正常使用而下载、安装和使用虹笺。介绍、评论或报道虹笺时，可以在合理范围内引用公开页面和产品截图，但应注明“虹笺”及创作者“鄢果”。</p>
        </section>

        <section>
          <h2>未经许可的行为</h2>
          <p>未经创作者书面许可，不得复制或销售软件，不得移除作者署名，不得冒充官方版本，不得将图标、界面或网站内容用于容易造成来源混淆的产品，也不得以反编译等方式侵害依法享有的权利；法律明确允许的情形除外。</p>
        </section>

        <section>
          <h2>第三方内容</h2>
          <p>macOS、Mac、Apple 及其他第三方名称和标识分别属于其权利人。网站中提及这些名称仅用于说明软件兼容性，不表示第三方对虹笺的赞助或背书。</p>
        </section>

        <section>
          <h2>权利保护</h2>
          <p>如发现疑似盗用、仿冒、未经授权传播或其他侵权情况，请保留网页地址、截图、时间和相关文件。创作者可依据适用法律及平台规则提出删除、停止侵害或其他合法请求。</p>
        </section>

        <div className="rightsSignature">
          <span>创作者</span>
          <strong>鄢果</strong>
          <small>首次公开声明：2026 年 8 月 16 日</small>
        </div>

        <p className="legalNote">本声明用于说明作品权利归属，不代表商标、专利或著作权登记已经完成；具体权利范围以适用法律和正式登记材料为准。</p>
      </article>
    </main>
  );
}
