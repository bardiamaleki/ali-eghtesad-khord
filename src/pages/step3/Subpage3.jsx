import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>مالیات</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مالیات ۲ اثر دارد:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- اثر روی مقدار تولید <InlineMath math={"\\leftarrow"} /> اثر تخصیصی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- اثر روی درآمد <InlineMath math={"\\leftarrow"} /> اثر درآمدی توزیعی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از دیدگاه بخش عمومی، مالیاتی بهتر است که توزیع درآمد را بهتر کند و اثر تخصیصی آن کمتر باشد.</p>
<h4 style={{ color: "var(--accent)", marginTop: "1.5rem", marginBottom: "1rem" }}>انواع مالیات:</h4>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- مالیات ثابت: عدد ثابتی از سود کم می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- مالیات بر واحد کالا: مالیات بر قیمت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- مالیات بر فروش: مالیات بر درآمد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴- مالیات بر سود</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تاثیری که این ۴ نوع مالیات روی سود انحصارگر می‌گذارند با هم متفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در مالیات ثابت اصلاً اثر تخصیصی ندارد (چون مقدار تغییر نکرد) و اثر توزیعی هم دارد (چون P تغییر نکرد)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فقط سود انحصارگر کاهش می‌یابد (<InlineMath math={"T"} /> عدد ثابت است).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مقدار تعادلی، قیمت و ... بعد از مالیات یکسان است.</p>
<div className="formula-box"><BlockMath math={"Max \\pi = TR - TC - T \\quad (\\text{ثابت})"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial q} = 0 \\Rightarrow MR = MC"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/96-nemodar.svg" alt="نمودار مالیات ثابت" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>قبل از مالیات:</strong></p>
<div className="formula-box"><BlockMath math={"TR = O P_{bt} E Q_{bt}"} /></div>
<div className="formula-box"><BlockMath math={"TC = O G H Q_{bt}"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_{bt} = G P_{bt} E H \\quad (\\text{سود قبل از مالیات})"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بعد از مالیات:</strong></p>
<div className="formula-box"><BlockMath math={"TR = O P_{bt} E Q_{bt}"} /></div>
<div className="formula-box"><BlockMath math={"TC = O M N Q_{bt}"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_{at} = M P_{bt} E N"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_{bt} &gt; \\pi_{at}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در اینجا اگر MR, MC جابجا شوند، تعادل جابجا می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- مالیات بر واحد <InlineMath math={"\\leftarrow"} /> روی قیمت تاثیر می‌گذارد.</p>
<div className="formula-box"><BlockMath math={"\\pi = TR - TC"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_t = TR - TC - tq \\quad (\\text{نرخ مالیات } t)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial q} = 0 \\Rightarrow MR - MC - t = 0 \\Rightarrow MR = MC + t"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط تعادل می‌شود <InlineMath math={"\\uparrow"} /> یعنی درآمد نهایی برابر است با هزینه نهایی + مالیات</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه نهایی بعلاوه t <InlineMath math={"\\leftarrow"} /> یعنی MC جابجا می‌شود (قیمت و مقدار تغییر کرد)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی اثر تخصیصی داریم <InlineMath math={"\\leftarrow"} /> اثر توزیعی داریم و سود هم کم می‌شود، چون مالیات باعث شده نقطه تعادل تغییر کند.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/97-nemodar.svg" alt="نمودار مالیات بر واحد" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>قبل از مالیات:</strong></p>
<div className="formula-box"><BlockMath math={"TR = O P_{bt} E Q_{bt}"} /></div>
<div className="formula-box"><BlockMath math={"TC = O G H Q_{bt}"} /></div>
<div className="formula-box"><BlockMath math={"\\rightarrow \\pi_{bt} = G P_{bt} E H \\quad (\\text{سود قبل از مالیات})"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بعد از مالیات:</strong></p>
<div className="formula-box"><BlockMath math={"TR = O P_{at} F Q_{at}"} /></div>
<div className="formula-box"><BlockMath math={"TC = O M N Q_{at}"} /></div>
<div className="formula-box"><BlockMath math={"\\rightarrow \\pi_{at} = M P_{at} F N \\quad (\\text{سود بعد از مالیات})"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_{bt} &gt; \\pi_{at}"} /></div>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>مالیات بر فروش (مالیات بر درآمد)</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>درآمد نهایی تغییر می‌کند. شرط تعادل عوض می‌شود. <InlineMath math={"MR(1-t) = MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر تخصیصی داریم، اثر توزیعی هم داریم.</p>
<div className="formula-box"><BlockMath math={"Max \\pi = TR - TC - t \\cdot TR \\Rightarrow \\pi = TR(1-t) - TC"} /></div>
<div className="formula-box"><BlockMath math={"F.O.C: \\frac{\\partial \\pi}{\\partial Q} = 0 \\quad \\Rightarrow MR(1-t) - MC = 0 \\Rightarrow MR(1-t) = MC \\Rightarrow MR - t \\cdot MR = MC"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با توجه به اینکه مقدار Q قبل از مالیات از <InlineMath math={"MR=MC"} /> بدست می‌آمد، در نتیجه رابطه فوق می‌بینیم که این نوع مالیات دارای اثر تخصیصی است.</p>
<div className="formula-box"><BlockMath math={"S.O.C: \\frac{\\partial^2 \\pi}{\\partial Q^2} \\le 0 \\quad \\Rightarrow MR'(1-t) - MC' \\le 0"} /></div>
<div className="formula-box"><BlockMath math={"MR - t \\cdot MR = MC \\rightarrow MR' dQ - t \\cdot MR' dQ - MR dt - MC' dQ = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\rightarrow MR' dQ - t \\cdot MR' dQ - MC' dQ = MR dt"} /></div>
<div className="formula-box"><BlockMath math={"\\rightarrow (MR' - t \\cdot MR' - MC') dQ = MR dt"} /></div>
<div className="formula-box"><BlockMath math={"\\rightarrow \\frac{dQ}{dt} = \\frac{MR}{MR'(1-t) - MC'}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از آنجا که مخرج کسر بنا بر شرط مرتبه دوم منفی است و صورت <InlineMath math={"MR &gt; 0"} /> می‌باشد:</p>
<div className="formula-box"><BlockMath math={"\\frac{dQ}{dt} &lt; 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از شرط تعادل دیفرانسیل کامل می‌گیریم. <InlineMath math={"\\frac{dQ}{dt}"} /> را حساب می‌کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط دوم حداکثر سود که باید منفی باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کننده جایی تولید می‌کند که MR مثبت باشد <InlineMath math={"\\rightarrow MR &gt; 0"} />.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر تغییر نرخ مالیات بر تولید ؟ جواب صفحه قبل.</p>
<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>مالیات بر سود</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی یک مقداری از کل سود کاهش پیدا می‌کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر تخصیصی نداریم و اثر توزیعی هم نداریم.</p>
<div className="formula-box"><BlockMath math={"Max \\pi = TR - TC - t(TR - TC)"} /></div>
<div className="formula-box"><BlockMath math={"F.O.C: \\frac{\\partial \\pi}{\\partial Q} = 0 \\Rightarrow MR - MC - t(MR - MC) = 0"} /></div>
<div className="formula-box"><BlockMath math={"(MR - MC)(1 - t) = 0 \\Rightarrow MR = MC \\quad (1 - t \\ne 0)"} /></div>
<div className="formula-box"><BlockMath math={"S.O.C: \\frac{\\partial^2 \\pi}{\\partial Q^2} \\le 0 \\Rightarrow (MR' - MC')(1 - t) \\le 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مالیات بر سود و مالیات ثابت اثر تخصیصی ندارند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مالیات بر واحد کالا و مالیات بر درآمد (فروش) اثر تخصیصی دارند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در مالیات بر سود، تولید کننده بعد از مالیات تولید را کاهش نمی‌دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این نوع مالیات نسبت به مالیات‌های دیگر بهتر است لیکن در اجرای آن دو مشکل عمده وجود دارد:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- نرخ این مالیات را نمی‌توان به سادگی تعیین نمود (در مورد تعیین نرخ مالیات...).</p>


    </div>
  );
};

export default Subpage3;
