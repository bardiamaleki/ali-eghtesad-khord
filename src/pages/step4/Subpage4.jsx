import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروشنده رهبر / خریدار پیرو</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سه حالت داریم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- فروشنده بر بازار مسلط شود (انحصار فروش) باید تابع سود فروشنده داشته باشیم - تابع عکس‌العمل خریدار در این تابع سود قرار داده شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- خریدار بر بازار مسلط شود (انحصار خرید) تابع عکس‌العمل فروشنده باید در تابع سود خریدار قرار داده شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- راه حل شبه رقابتی <InlineMath math={"P=MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع عکس العمل (از تابع سود هر فروشنده/خریدار) نسبت به مقدار مشتق می‌گیریم و برابر صفر قرار می‌دهیم. عکس‌العمل را بدست می‌آوریم و در تابع سود آن یکی قرار می‌دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_2 = f(q_1)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_1 = f(q_2)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) انحصار فروش</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروشنده مسلط / انحصار فروش / تابع سود فروشنده را داریم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سود خریدار <InlineMath math={"q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نسبت به <InlineMath math={"q_2"} /> مشتق می‌گیریم <InlineMath math={"\\leftarrow"} /> عکس العمل خریدار</p>
<div className="formula-box"><BlockMath math={"\\pi_B = P_1 q_1 - P_2 q_2 = P_1 \\cdot h(q_2) - P_2 q_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی خریدار آن مقدار از <InlineMath math={"q_2"} /> را خریداری می‌کند که ارزش تولید نهایی‌اش برابر با قیمت تعیین شده از سوی فروشنده باشد. (ارزش تولید نهایی <InlineMath math={"VMP_{q_2}"} />)</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi_B}{\\partial q_2} = P_1 \\cdot h'(q_2) - P_2 = 0 \\Rightarrow P_1 h'(q_2) = P_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معکوس تابع تقاضای خریدار <InlineMath math={"q_2"} /> <InlineMath math={"\\rightarrow"} /> <InlineMath math={"P_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(در اینجا <InlineMath math={"P_1 h'(q_2)"} /> برابر با <InlineMath math={"VMP_{q_2}"} /> است و <InlineMath math={"P_2"} /> قیمت فروشنده است)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جای <InlineMath math={"P_2"} />، عکس العمل خریدار را قرار می‌دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سود فروشنده <InlineMath math={"q_2"} />:</p>
<div className="formula-box"><BlockMath math={"\\pi_S = P_2 \\cdot q_2 - r X = P_2 q_2 - r H(q_2) = P_1 h'(q_2) \\cdot q_2 - r H(q_2)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi_S}{\\partial q_2} = 0 \\Rightarrow P_1(h'(q_2)) + P_1 h''(q_2) \\cdot q_2 = r H'(q_2)"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروشنده رهبر / خریدار پیرو</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروشنده آن مقدار کالایی از <InlineMath math={"q_2"} /> را می‌فروشد که درآمدهای آن با هزینه نهایی آن برای فروشنده برابر باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MR = MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت دوم: خریدار مسلط شود / انحصار خرید</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(خریدار <InlineMath math={"\\leftarrow"} /> رهبر / فروشنده <InlineMath math={"\\leftarrow"} /> پیرو)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- تابع عکس‌العمل فروشنده را به دست می‌آوریم در سود خریدار قرار می‌دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سود فروشنده:</p>
<div className="formula-box"><BlockMath math={"\\pi_S = P_2 q_2 - r H(q_2)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi_S}{\\partial q_2} = 0 \\Rightarrow P_2 = r \\cdot H'(q_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معکوس تابع عرضه فروشنده <InlineMath math={"q_2"} /> <InlineMath math={"\\leftarrow"} /> عکس العمل فروشنده</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جای <InlineMath math={"P_2"} /> عکس‌العمل قرار می‌دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سود خریدار <InlineMath math={"q_2"} />:</p>
<div className="formula-box"><BlockMath math={"\\pi_B = P_1 q_1 - P_2 q_2 = P_1 \\cdot h(q_2) - r \\cdot H'(q_2) q_2"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi_B}{\\partial q_2} = 0 \\Rightarrow P_1 h'(q_2) = r \\cdot H'(q_2) + r \\cdot H''(q_2) q_2 \\rightarrow max \\ \\pi"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>عکس العمل فروشنده: فروشنده آن مقدار <InlineMath math={"q_2"} /> را تولید می‌کند برای فروش که هزینه نهایی‌اش معادل قیمت تعیین شده از سوی خریدار باشد. (نهاده ارزش)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MC = P_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی زمانی که خریدار بر بازار مسلط باشد تا جایی <InlineMath math={"q_2"} /> می‌خرد که ارزش تولید نهایی <InlineMath math={"q_2"} /> با هزینه نهایی عامل تولید با هم برابر باشد.</p>
<div className="formula-box"><BlockMath math={"VMP = MFC"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>راه حل شبه رقابتی: هم خریدار و هم فروشنده دریافت کننده قیمت هستند و تاثیری بر قیمت ندارند.</p>
<div className="formula-box"><BlockMath math={"P = MC"} /></div>
<div className="formula-box"><BlockMath math={"P_2 = P_1 \\cdot h'(q_2) = r \\cdot H'(q_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(در اینجا <InlineMath math={"P_1 \\cdot h'(q_2)"} /> ارزش تولید نهایی خریدار و <InlineMath math={"r \\cdot H'(q_2)"} /> هزینه نهایی فروشنده است)</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/125-bilateral-monopoly.svg" alt="نمودار انحصار دوجانبه" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳ تا راه حل:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- انحصار فروش: <InlineMath math={"MR = MC"} /> (نقطه S)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- انحصار خرید: <InlineMath math={"VMP = MFC"} /> (نقطه B)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- شبه رقابتی: <InlineMath math={"VMP = MC"} /> (نقطه C)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مقادیر و قیمت‌ها:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- <InlineMath math={"q_{2C}"} /> مقدار در شبه رقابتی، <InlineMath math={"P_C"} /> قیمت در شبه رقابتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- مقدار <InlineMath math={"q_{2S}"} /> و قیمت <InlineMath math={"P_S"} /> <InlineMath math={"\\leftarrow"} /> انحصار فروش</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- مقدار <InlineMath math={"q_{2B}"} /> و قیمت <InlineMath math={"P_B"} /> <InlineMath math={"\\leftarrow"} /> انحصار خرید</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>درآمدهای نهایی (<InlineMath math={"MR"} />) شیب دو برابر تقاضا دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نتیجه: مقدار شبه رقابتی همیشه از مقدار انحصار خرید و فروش بیشتر است.</p>
<div className="formula-box"><BlockMath math={"q_{2C} &gt; q_{2S} \\text{ و } q_{2B}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در مورد تقاضا بستگی به شیب منحنی‌ها دارد و شیب <InlineMath math={"MR"} /> و شیب <InlineMath math={"MC"} />.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>قیمت شبه رقابتی بین قیمت خرید و فروش قرار می‌گیرد.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>راه حل چانه‌زنی:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خریدار و فروشنده سودهایشان را با هم جمع می‌کنند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ارزش تولید نهایی و هزینه نهایی می‌ماند <InlineMath math={"\\leftarrow"} /> مشتق بگیریم <InlineMath math={"\\rightarrow"} /> شبه رقابتی می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این حالت برای تعیین قیمت توافق می‌کنند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- فروشنده تمایل دارد به بالاترین قیمت بفروشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- خریدار تمایل دارد به کمترین قیمت بخرد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سودها <InlineMath math={"= 0"} /> دو تا قیمت به دست می‌آید.</p>
<div className="formula-box"><BlockMath math={"\\pi_T = \\pi_B + \\pi_S = P_1 q_1 - P_2 q_2 + P_2 q_2 - r \\cdot H(q_2) = P_1 h(q_2) - r \\cdot H(q_2)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi_T}{\\partial q_2} = 0 \\Rightarrow P_1 \\cdot h'(q_2) = r \\cdot H'(q_2) \\quad \\text{دقیقاً شبه رقابتی}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حد بالای قیمت:</p>
<div className="formula-box"><BlockMath math={"\\pi_B = P_1 \\cdot h(q_2) - P_2 \\cdot q_2 = 0 \\Rightarrow P_2 = \\frac{P_1 \\cdot h(q_2)}{q_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حد پایین قیمت:</p>
<div className="formula-box"><BlockMath math={"\\pi_S = P_2 \\cdot q_2 - r \\cdot H(q_2) = 0 \\Rightarrow P_2 = \\frac{r \\cdot H(q_2)}{q_2}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{r \\cdot H(q_2)}{q_2} \\le P_2 \\le \\frac{P_1 \\cdot h(q_2)}{q_2}"} /></div>


    </div>
  );
};

export default Subpage4;
