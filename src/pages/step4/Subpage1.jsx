import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بازار رقابت انحصاری</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از بعضی جهات شبیه بازار رقابت کامل و از بعضی جهات شبیه بازار انحصار کامل است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- تعداد تولیدکنندگان به اندازه کافی زیاد است (نه به اندازه رقابت کامل) و در رقابت انحصاری گروه تولیدکنندگان داریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- فعالیت یک فروشنده به تنهایی تأثیر زیادی به روی سایر تولیدکنندگان ندارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- از این جهت شبیه بازار انحصار است که هر فروشنده دارای یک منحنی تقاضا با شیب نزولی است. این خصوصیت باعث می‌شود که ما در این بازار دو نوع منحنی تقاضا داشته باشیم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- تقاضای مورد انتظار (مورد نظر - صوری)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- تقاضای موثر (تقاضای متناسب با بازار)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) تقاضای مورد انتظار: تولیدکنندگان در این بازار تصور می‌کنند با کاهش قیمت و افزایش مقدار، سهم خود را در بازار افزایش می‌دهند اما این کاهش قیمت توسط سایر رقبا رصد نمی‌شود. <InlineMath math={"dd"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) تقاضای موثر: کاهش قیمت نه تنها مقدار را (افزایش) می‌دهد بلکه با رصد این رفتار توسط سایر تولیدکنندگان روی یک منحنی پرشیب‌تر حرکت می‌کنیم. به این منحنی که مشابه رفتار رقبا را نشان می‌دهد تقاضای متناسب با بازار می‌گوییم و با <InlineMath math={"D"} /> نشان می‌دهیم.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/103-nemodar.svg" alt="نمودار تقاضای موثر و مورد انتظار" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هرکدام از این منحنی‌های تقاضا یک شرطی دارند.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>عرض از مبدا | بنگاه k ام | عکس العمل بنگاه دیگر</p>
<div className="formula-box"><BlockMath math={"P_k = A_k - a_k \\cdot q_k - \\sum_{i=1, i \\neq k}^{n} b_{ki} q_i"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"k"} />: بنگاه <InlineMath math={"k"} /> خودمان است</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"i"} />: بقیه ی بنگاه ها</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر تمام بنگاه‌ها شرایط یکسان داشته باشند (تابع تقاضا عکس مقدار و تقاضا) [اندیس‌ها را برمی‌داریم]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروض:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"A_k = A \\quad , \\quad a_k = a \\quad , \\quad b_{ki} = b"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) تابع تقاضای مورد انتظار:</p>
<div className="formula-box"><BlockMath math={"P_k = A - a q_k - b \\sum q_i"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\leftarrow"} /> تابع تقاضای خود بنگاه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[از رفتار هم تبعیت می‌کنند روی آن تابع تقاضا هستیم <InlineMath math={"\\rightarrow"} /> تابع تقاضای موثر]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[در بلندمدت شرایط همه بنگاه‌ها یکسان است <InlineMath math={"\\rightarrow"} /> اگر <InlineMath math={"q_i = q_k"} />]</p>
<div className="formula-box"><BlockMath math={"\\rightarrow P_k = A - a q_k - b \\sum^{n-1} q_k \\rightarrow P_k = A - a q_k - (n-1) b q_k"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"(n-1)"} /> یعنی بنگاه <InlineMath math={"k"} /> شمرده نشده و از کل بنگاه‌ها کم می‌شود.</p>
<div className="formula-box"><BlockMath math={"\\rightarrow P_k = A - [a + (n-1)b] q_k"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\uparrow"} /> تابع تقاضای موثر</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) <InlineMath math={"D"} /> , <InlineMath math={"d"} /> در تابع تقاضا همدیگر را قطع می‌کنند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) شرط تعادل کوتاه مدت <InlineMath math={"\\rightarrow [MR = MC]"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نکته: در کوتاه مدت و تعادل کوتاه مدت از تابع تقاضای مورد انتظار استفاده می‌کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در بلندمدت و برای تعادل بلندمدت از تابع تقاضای موثر استفاده می‌کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط تعادل بلندمدت <InlineMath math={"\\rightarrow P = Min LAC"} /></p>
<div className="formula-box"><BlockMath math={"\\pi = TR - TC \\xrightarrow{\\text{بلندمدت}} \\pi = TR - LTC"} /></div>
<div className="formula-box"><BlockMath math={"\\pi = (P) \\cdot q - LTC"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فلش از <InlineMath math={"P"} />: تابع تقاضای موثر <InlineMath math={"\\rightarrow P = A - [a + (n-1)b] q_k"} /></p>

<div className="formula-box"><BlockMath math={"TR = P \\cdot Q \\quad \\text{[قیمت } \\times \\text{ مقدار]}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضای موثر: در بلندمدت تابع تقاضا رفتار همه را (بنگاه‌ها) را نشان می‌دهد اما در کوتاه مدت فقط تابع تقاضای بنگاه <InlineMath math={"k"} /> دیده می‌شود (مورد انتظار).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در رقابت انحصاری:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعادل کوتاه مدت بر اساس تقاضای مورد انتظار</p>
<div className="formula-box"><BlockMath math={"A - 2a q_k - b \\sum q_i = MC"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب <InlineMath math={"MR"} /> دو برابر تقاضاست.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/105-nemodar1.svg" alt="نمودار تعادل کوتاه مدت رقابت انحصاری" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تعادل بلندمدت بر اساس تقاضای موثر که باید مماس بر <InlineMath math={"LAC"} /> باشد (۱)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(۲) <InlineMath math={"P = Min LAC"} /></p>
<div className="formula-box"><BlockMath math={"A - 2a q_k - b(n-1)q_k = LMC"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>درآمد نهایی حاصل از تقاضای موثر باید با <InlineMath math={"LMC"} /> برخورد کند.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/105-nemodar2.svg" alt="نمودار تعادل بلندمدت رقابت انحصاری" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعداد بنگاه <InlineMath math={"100 = 101 - 1"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"(n-1)"} /> منهای این پایگاه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>مثال:</strong> ۱۰۱ بنگاه با ساختار رقابت انحصاری در یک گروه تولیدی حضور دارند. منحنی تقاضای همگی یکسان است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>قیمت، مقدار تعادلی و سود هر بنگاه را محاسبه نمایید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>درآمد نهایی و هزینه نهایی را نیاز داریم:</p>
<div className="formula-box"><BlockMath math={"P_i = 150 - q_i - 0.02 \\sum_{j=1, j \\neq i}^{101} q_j"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی تولید کننده یک بار خودش را نمی‌شمارد.</p>
<div className="formula-box"><BlockMath math={"C_i = 0.5 q_i^3 - 20 q_i^2 + 270 q_i \\quad \\quad i=1, \\dots, 101"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضای همگی یکسان یعنی تابع تقاضا را باز کنیم، شیب درآمد نهایی دو برابر تقاضاست.</p>
<div className="formula-box"><BlockMath math={"MR_i = 150 - 2 q_i - 0.02 \\sum_{j=1}^{101} q_j \\rightarrow MR_i = 150 - 2 q_i - 0.02 (100 q_i)"} /></div>
<div className="formula-box"><BlockMath math={"MR_i = 150 - 4 q_i"} /></div>
<div className="formula-box"><BlockMath math={"MC_i = 1.5 q_i^2 - 40 q_i + 270"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه نهایی = درآمد نهایی</p>
<div className="formula-box"><BlockMath math={"MR_i = MC_i"} /></div>
<div className="formula-box"><BlockMath math={"150 - 4 q_i = 1.5 q_i^2 - 40 q_i + 270"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با حل معادله فوق:</p>
<div className="formula-box"><BlockMath math={"q_i = 20"} /></div>
<div className="formula-box"><BlockMath math={"P_i = 90"} /></div>
<div className="formula-box"><BlockMath math={"\\pi = 400"} /></div>


    </div>
  );
};

export default Subpage1;
