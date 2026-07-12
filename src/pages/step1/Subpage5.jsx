import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage5 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>سیستم مخارج خطی</h2>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>تابع مطلوبیت مخارج خطی (LES) مهم</h3>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این تابع شکل خاصی دارد به آن تابع کلاین روبین یا استون جری هم گفته می شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این دو تابع تبدیل یکنواختی از هم هستند این تابع یک تابع جمع پذیر، هموتتیک است یعنی منحنی درآمد مصرف آن خطی است.</p>
<div className="formula-box"><BlockMath math={"U = \\sum_{i=1}^{n} \\beta_i \\ln (q_i - \\gamma_i) \\quad \\text{(کلاین روبین)} \\rightarrow U = \\beta_1 \\ln (q_1 - \\gamma_1) + \\beta_2 \\ln (q_2 - \\gamma_2)"} /></div>
<div className="formula-box"><BlockMath math={"V = \\prod_{i=1}^{n} (q_i - \\gamma_i)^{\\beta_i} \\quad \\text{(استون جری)} \\rightarrow V = (q_1 - \\gamma_1)^{\\beta_1} (q_2 - \\gamma_2)^{\\beta_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>لگاریتمی از تابع کاب داگلاس.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مجموع نهایی مخارج روی کالاها برابر 1 است یعنی هر چه درآمد خرج می شود <InlineMath math={"\\sum \\beta_i = 1"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- بتا <InlineMath math={"\\beta"} /> = سهم نهایی مخارج</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- گاما <InlineMath math={"\\gamma"} /> = حداقل معاش</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\beta"} /> یعنی اگر درآمد کل 100 واحد افزایش یابد، مخارج کل روی کالای x چه مقدار افزایش پیدا می کند؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>نکات مهم:</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>LES سیستم مخارج خطی / سیستمی است که می گوید کشش درآمدی برای کالا یک است. یعنی نمی تواند کالای پست را توضیح دهد.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای رسم تبدیل یک جمع پذیر هموتتیک می کنیم (منحنی درآمد مصرف خطی است)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مبدأ بالاتر می آید چون حداقل معاش را در نظر می گیریم.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/50-nemodar.svg" alt="نمودار سیستم مخارج خطی" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>وقتی درآمد تغییر می کند با تابع مطلوبیت جدید نقطه تعادل جدید بدست می آید از وصل کردن نقاط تعادلی جدید درآمد و مطلوبیت <InlineMath math={"\\rightarrow"} /> منحنی درآمد مصرف ICC به دست می آید. و نکته مهم: درآمد مصرف خطی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>LES: این سیستمی است که می گوید کشش درآمدی برای کالا یک است یعنی این سیستم نمی تواند کالای پست را توضیح دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- کالای نرمال <InlineMath math={"\\rightarrow"} /> <InlineMath math={"1 = \\text{کشش درآمدی}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- کالای پست <InlineMath math={"\\rightarrow"} /> <InlineMath math={"0 &gt; \\text{کشش درآمدی}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[مهم] مصرف کننده ابتدا درآمدش را صرف حداقل معاش می کند و بعد مابقی درآمدش را به صرف ترجیحات اختصاص می دهد.</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>طرز استخراج تابع تقاضا از سیستم مخارج خطی</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضای نرمال:</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n\\text{Max} \\quad & U = \\beta_1 \\ln (q_1 - \\gamma_1) + \\beta_2 \\ln (q_2 - \\gamma_2) \\\\\n\\text{S.t} \\quad & I = P_1 q_1 + P_2 q_2\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"\\mathcal{L} = \\beta_1 \\ln (q_1 - \\gamma_1) + \\beta_2 \\ln (q_2 - \\gamma_2) + \\lambda [I - P_1 q_1 - P_2 q_2]"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_1} = 0 \\Rightarrow \\frac{\\beta_1}{q_1 - \\gamma_1} - \\lambda P_1 = 0 \\Rightarrow P_1 q_1 = \\frac{\\beta_1 + \\lambda \\cdot P_1 \\cdot \\gamma_1}{\\lambda} \\quad \\text{①}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_2} = 0 \\Rightarrow \\frac{\\beta_2}{q_2 - \\gamma_2} - \\lambda P_2 = 0 \\Rightarrow P_2 q_2 = \\frac{\\beta_2 + \\lambda \\cdot P_2 \\cdot \\gamma_2}{\\lambda} \\quad \\text{②}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 0 \\Rightarrow I - P_1 q_1 - P_2 q_2 = 0 \\quad \\text{③}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱ و ۲ را در ۳ قرار می دهیم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴ را به دست می آوریم بعد <InlineMath math={"\\lambda"} /> را در ۱ و ۲ قرار می دهیم.</p>
<div className="formula-box"><BlockMath math={"I = \\frac{\\beta_1}{\\lambda} + P_1 \\cdot \\gamma_1 + \\frac{\\beta_2}{\\lambda} + P_2 \\gamma_2 \\leadsto I - P_1 \\gamma_1 - P_2 \\gamma_2 = \\frac{\\beta_1 + \\beta_2}{\\lambda}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{1}{\\lambda} = I - P_1 \\gamma_1 - P_2 \\gamma_2 \\quad \\text{④}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سیستم مخارج خطی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با جایگذاری ④ در ①:</p>
<div className="formula-box"><BlockMath math={"P_1 q_1 = \\beta_1 (I - P_1 \\gamma_1 - P_2 \\gamma_2) + P_1 \\cdot \\gamma_1 \\quad \\text{(مخارج کالای 1)}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با جایگذاری ④ در ②:</p>
<div className="formula-box"><BlockMath math={"P_2 q_2 = \\beta_2 (I - P_1 \\gamma_1 - P_2 \\gamma_2) + P_2 \\gamma_2 \\quad \\text{(مخارج کالای 2)}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- <InlineMath math={"P_1 \\gamma_1"} /> و <InlineMath math={"P_2 \\gamma_2"} /> <InlineMath math={"\\rightarrow"} /> مخارج معیشتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- <InlineMath math={"(I - P_1 \\gamma_1 - P_2 \\gamma_2)"} /> <InlineMath math={"\\rightarrow"} /> درآمد فرامعیشتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مخارج معیشتی: قیمت <InlineMath math={"\\times"} /> حداقل معاش</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر سیستم مخارج خطی را به <InlineMath math={"P_1"} /> و <InlineMath math={"P_2"} /> تقسیم کنیم به تابع تقاضا می رسیم.</p>
<div className="formula-box"><BlockMath math={"q_1^{ND} = \\frac{\\beta_1}{P_1} (I - P_1 \\cdot \\gamma_1 - P_2 \\gamma_2) + \\gamma_1"} /></div>
<div className="formula-box"><BlockMath math={"q_2^{ND} = \\frac{\\beta_2}{P_2} (I - P_1 \\cdot \\gamma_1 - P_2 \\gamma_2) + \\gamma_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای کالاهایی که نمی توان میزان مصرف یا تقاضا را محاسبه کرد از توابع مخارج استفاده می کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثل مصرف میزان دارو - مصرف برق - مسکن</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>توابع تقاضای به دست آمده غیر خطی است. (<InlineMath math={"\\frac{\\beta_1}{P}"} />) بنابراین در سیستم مخارج خطی تقاضا برای کالاها پیدا نمی کنیم بلکه مخارج صرف شده روی کالاها را پیدا می کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مخارج صرف شده روی کالای (1) = ضریبی از درآمد فرامعیشتی + مخارج معیشتی همان کالا</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>LES پویا است. می توان آن را پویا کرد. باید عادات مصرفی را وارد مدل جمعی کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>و به این ترتیب <InlineMath math={"\\gamma_t"} /> حداقل معاش در یک دوره، تابعی از مصرف دوره ی قبل می باشد.</p>
<div className="formula-box"><BlockMath math={"\\gamma_t = \\alpha \\cdot q_{t-1} \\quad \\text{(عادات مصرفی)}"} /></div>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>مزایای سیستم مخارج خطی</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- با استفاده از این سیستم، تعداد پارامترهایی که می‌خواهیم برآورد کنیم کاهش می‌یابد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- این سیستم نسبت به متغیرهای درآمد و قیمت خطی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- تفسیر ضرایب در این سیستم بسیار آسان است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴- بجای استخراج تابع تقاضا برای یک کالا، می‌توان تابع تقاضا را برای یک گروه کالا استخراج نمود. (کالاهای خوراکی)</p>
<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>معایب سیستم مخارج خطی</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- این سیستم در مورد کالاهای لوکس و پست قابل استفاده نیست.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- تابع مطلوبیت فوق یک تابع جمع‌پذیر هموتتیک است بنابراین در یک تابع جمع‌پذیر اثرات متقاطع (کشش‌های متقاطع کالاها) صفر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- در این سیستم، سهم نهایی مخارج برای کالاها یکسان در نظر گرفته می‌شود در حالی‌که این سهم می‌تواند در طول زمان تغییر کند.</p>


    </div>
  );
};

export default Subpage5;
