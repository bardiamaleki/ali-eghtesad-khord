import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>راه حل سهمیه‌بندی بازار (غیر همگن)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر تولید کننده تابع تقاضای خودش را دارد (همگن نیست). راه حل بلند مدت است نه کوتاه‌مدت. (یعنی تولید کننده دنبال سود بلند مدت است)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کنندگان تغییر مقدار تولید از طرف تولید کننده‌ی دوم را با یک نسبت دنبال می‌کنند. (تغییر نسبی)</p>
<div className="formula-box"><BlockMath math={"q = q_1 + q_2"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{q_2}{q \\ (q_1+q_2)} = k \\rightarrow q_2 = k q = k(q_1+q_2) \\rightarrow"} /></div>
<div className="formula-box"><BlockMath math={"q_2 (1-k) = q_1 k"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases} \nq_2 = \\frac{k}{(1-k)} q_1 \\\\\n\\\\\nq_1 = \\frac{1-k}{k} q_2 \n\\end{cases}"} /></div>

<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>راه حل تقاضای شکسته (مهم و معتبر) غیر همگن</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اساس این راه حل برمی‌گردد به منحنی تقاضای رقابت انحصاری:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- تقاضای مورد انتظار</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- تقاضای موثر</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اساس این نظریه حساسیت یا عدم حساسیت یک بنگاه نسبت به تصمیمات بنگاه دیگر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- افزایش قیمت از طرف یک تولید کننده از طرف سایرین دنبال نمی‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- اما کاهش قیمت از طرف یک تولید کننده تبعیت می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب <InlineMath math={"MR"} /> دو برابر تقاضا است [در بازار انحصار] در اینجا هر تولید کننده <InlineMath math={"MR"} /> خودش را دارد.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/116-kinked-demand.svg" alt="نمودار تقاضای شکسته" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nD \\text{ تقاضای تصوری یا مورد انتظار} \\rightarrow MR \\\\\nD' \\text{ تقاضای واقعی} \\rightarrow MR'\n\\end{cases} \\implies \\text{در درآمدهای نهایی شکستگی دارد}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در بازه‌ی شکستگی <InlineMath math={"MR"} /> باید دنبال تعادل بگردیم در تقاضای شکسته دنبال این تعادل هستیم.</p>

<div className="formula-box"><BlockMath math={"P_1 = 100 - 2q_1 - q_2 \\rightarrow TC_1 = 2.5 q_1^2 \\rightarrow \\begin{cases} MC_1 = 5q_1 \\\\ MC_1 = 50 \\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"P_2 = 95 - q_1 - 3q_2 \\rightarrow TC_2 = 1.25 q_2^2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>محدوده‌ای از حرکت <InlineMath math={"MC"} /> (هزینه نهایی) را پیدا کنید که بنگاه‌ها با تغییر قیمت بنگاه دیگر عکس‌العملی از خود نشان نمی‌دهند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مفهوم تعادل یک ثبات است. یعنی بازه‌ای که میلی به تغییر در آن نباشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- اول باید نقطه‌ی برخورد و پختی منحنی‌های تقاضا را پیدا کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(تقاضای تولید کننده‌ی اول و بالایی و پایینی پیدا شود)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بعد بازه‌ی هزینه را پیدا کنیم.</p>
<div className="formula-box"><BlockMath math={"TR_1 = P_1 Q_1 - TC"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n\\pi_1 = 100 q_1 - 2q_1^2 - q_1 q_2 - 2.5 q_1^2 \\\\\n\\pi_2 = 95 q_2 - q_1 q_2 - 3q_2^2 - 1.25 q_2^2\n\\end{cases}\n\\rightarrow\n\\begin{cases}\n\\frac{\\partial \\pi_1}{\\partial q_1} = 0 \\\\\n\\\\\n\\frac{\\partial \\pi_2}{\\partial q_2} = 0\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n100 - 4q_1 - q_2 - 5q_1 = 0 \\\\\n95 - q_1 - 6q_2 - 2.5 q_2 = 0\n\\end{cases}\n\\rightarrow\n\\begin{cases}\nq_1 = \\frac{100 - q_2}{9} \\\\\n\\\\\nq_2 = \\frac{95 - q_1}{8.5}\n\\end{cases}\n\\leftarrow \\text{توابع عکس العمل}"} /></div>
<div className="formula-box"><BlockMath math={"q_1 = q_2 = 10"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nP_1 = 70 \\rightarrow P \\uparrow \\rightarrow \\text{پیروی نمی‌شود} \\\\\nP_2 = 55 \\rightarrow P \\downarrow \\rightarrow \\text{پیروی می‌شود}\n\\end{cases}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در اینجا برای قیمت‌های بالاتر از ۷۰ مقادیر کمتر از ۱۰ روی تقاضای فرد اول هستیم و فرد دوم قیمت ۵۵ برای خودش را حفظ می‌کند.</p>
<div className="formula-box"><BlockMath math={"P_2 = 95 - q_1 - 3q_2 \\rightarrow 55 = 95 - q_1 - 3q_2 \\rightarrow 3q_2 = 40 - q_1 \\rightarrow q_2 = \\frac{40 - q_1}{3}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\leftarrow"} /> تابع تقاضای بخش اول که قیمت بالای منحنی</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nP_1 = 100 - 2q_1 - q_2 \\rightarrow P_1 = 100 - 2q_1 - \\left( \\frac{40 - q_1}{3} \\right) \\\\\nP_1 = \\frac{260 - 5q_1}{3} \\\\\nP &gt; 70 \\\\\nq &lt; 10\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"MR_1 = \\frac{260 - 10q_1}{3} \\xrightarrow{q_1 = 10} MR_1 = 53.3"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای قیمت کمتر از ۷۰ و مقادیر بیشتر از ۱۰ روی منحنی تقاضای فرد دوم حرکت می‌کنیم <InlineMath math={"\\rightarrow"} /> تلاش می‌کند سهم خودش را حفظ کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_1 = q_2"} /> پس <InlineMath math={"\\rightarrow"} /> به جای <InlineMath math={"q_2"} /> می‌گذاریم <InlineMath math={"q_1"} /></p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nP_1 = 100 - 2q_1 - q_2 \\\\\nP_1 = 100 - 2q_1 - q_1 \\rightarrow P_1 = 100 - 3q_1 \\\\\nP &lt; 70 \\\\\nq &gt; 10\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"MR_1 = 100 - 6q_1 \\xrightarrow{q_1 = 10} MR_1 = 100 - 6(10) = 40"} /></div>
<div className="formula-box"><BlockMath math={"50"} /></div>
<div className="formula-box"><BlockMath math={"40 &lt; MC_1 &lt; 53.3"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\downarrow \\quad \\quad \\quad \\quad \\quad \\downarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MR_1 \\quad \\quad \\quad \\quad MR_1"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جلسه ۲۶ / ۳ / ۴۰۵</p>
<div className="formula-box"><BlockMath math={"\\text{بازار کالا}\n\\begin{cases}\n\\text{رقابتی } \\bar{P} \\\\\n\\text{انحصاری } MR\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"\\text{بازار نهاده کار}\n\\begin{cases}\n\\text{رقابتی } \\bar{w} \\text{ یا } \\bar{r} \\\\\n\\text{انحصار}\n\\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بازار انحصار مضاعف دوجانبه:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالتی است که، فقط یک خریدار برای کالا و یک فروشنده برای کالا وجود دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک تولید کننده‌ی انحصاری، تابع عرضه ندارد (در بحث بازار انحصاری گفتیم، نقطه عرضه داشتیم) در نتیجه یک نقطه روی تابع تقاضای خریدار را انتخاب می‌کند <InlineMath math={"\\leftarrow"} /> هدف تولید کننده <InlineMath math={"Max \\ \\pi"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خریدار انحصاری، تابع تقاضا ندارد در نتیجه یک نقطه روی تابع عرضه فروشنده انتخاب می‌کند <InlineMath math={"\\leftarrow"} /> هدف <InlineMath math={"Max \\ \\pi"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروشنده نمی‌تواند براساس تابع عرضه‌ای که وجود ندارد عمل کند و خریدار هم نمی‌تواند بر اساس تابع تقاضایی که وجود ندارد، استفاده کند و بهره‌برداری کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Max \\ \\pi \\leftarrow"} /> ۳ راه حل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- راه حل مرجع</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- تبانی و چانه‌زنی (توافق درباره‌ی قیمت و مقدار <InlineMath math={"\\rightarrow"} /> تعیین قیمت)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- بازار منحل شود و معامله‌ای صورت نگیرد.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>راه حل مرجع <InlineMath math={"\\leftarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- انحصار فروش (فروشنده رهبر / خریدار پیرو)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- انحصار خرید (خریدار رهبر / فروشنده پیرو)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- شبه رقابتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تمام این حالات می‌خواهیم بدانیم قیمت و مقدار تعادلی در چه شرایطی قرار می‌گیرد و کجا سود ماکزیمم می‌شود؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروض:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- فقط یک کالا تولید می‌شود (کالای <InlineMath math={"q_2"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خریدار کالای <InlineMath math={"q_2"} />، از <InlineMath math={"q_2"} /> به عنوان عامل تولید، برای تولید <InlineMath math={"q_1"} /> استفاده می‌کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_1 = h(q_2)"} /> <InlineMath math={"\\leftarrow"} /> تابع تولید خریدار <InlineMath math={"q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- خریدار <InlineMath math={"q_2"} /> بعد از تولید <InlineMath math={"q_1"} />، آن را در بازار رقابتی و به قیمت <InlineMath math={"P_1"} /> می‌فروشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\pi_B = TR - TC \\Rightarrow \\pi_B = P_1 q_1 - \\underbrace{P_2 q_2}_{\\text{هزینه}}"} /> (سود خریدار <InlineMath math={"\\pi_B"} />)</p>
<div className="formula-box"><BlockMath math={"\\pi_B = P_1 h(q_2) - P_2 q_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- فروشنده <InlineMath math={"q_2"} /> برای تولید <InlineMath math={"q_2"} /> از نهاده‌ای مثل <InlineMath math={"x"} /> استفاده می‌کند که این نهاده <InlineMath math={"x"} /> را از بازار رقابتی و با قیمت <InlineMath math={"r"} /> خریداری می‌نماید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع معکوس تولید فروشنده <InlineMath math={"q_2"} />: <InlineMath math={"x = H(q_2)"} /></p>
<div className="formula-box"><BlockMath math={"\\pi_S = TR - TC \\Rightarrow \\pi_S = P_2 q_2 - r x"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_S = P_2 q_2 - r H(q_2)"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سه حالت داریم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- فروشنده بر بازار مسلط شود (انحصار فروش) تابع سود فروشنده داشته باشیم - تابع عکس‌العمل خریدار در این تابع سود قرار داده شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- خریدار بر بازار مسلط شود (انحصار خرید) تابع عکس‌العمل فروشنده باید در تابع سود خریدار قرار داده شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- راه حل شبه رقابتی <InlineMath math={"P=MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع عکس العمل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) انحصار فروش</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سود خریدار <InlineMath math={"q_2"} /></p>
<div className="formula-box"><BlockMath math={"\\pi_R = P_1 q_1 - P_2 q_2 = P_1 \\cdot h(q_2) - P_2 q_2"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>راه حل مرجع <InlineMath math={"\\leftarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- انحصار فروش (فروشنده رهبر / خریدار پیرو)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- انحصار خرید (خریدار رهبر / فروشنده پیرو)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- شبه رقابتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تمام این حالات می‌خواهیم بدانیم قیمت و مقدار تعادلی در چه شرایطی قرار می‌گیرد و کجا سود ماکزیمم می‌شود؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فروض:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- فقط یک کالا تولید می‌شود (کالای <InlineMath math={"q_2"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خریدار کالای <InlineMath math={"q_2"} />، از <InlineMath math={"q_2"} /> به عنوان عامل تولید، برای تولید <InlineMath math={"q_1"} /> استفاده می‌کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_1 = h(q_2)"} /> <InlineMath math={"\\leftarrow"} /> تابع تولید خریدار <InlineMath math={"q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- خریدار <InlineMath math={"q_2"} /> بعد از تولید <InlineMath math={"q_1"} />، آن را در بازار رقابتی و به قیمت <InlineMath math={"P_1"} /> می‌فروشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\pi_B = TR - TC \\Rightarrow \\pi_B = P_1 q_1 - \\underbrace{P_2 q_2}_{\\text{هزینه}}"} /> (سود خریدار <InlineMath math={"\\pi_B"} />)</p>
<div className="formula-box"><BlockMath math={"\\pi_B = P_1 h(q_2) - P_2 q_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- فروشنده <InlineMath math={"q_2"} /> برای تولید <InlineMath math={"q_2"} /> از نهاده‌ای مثل <InlineMath math={"x"} /> استفاده می‌کند که این نهاده <InlineMath math={"x"} /> را از بازار رقابتی و با قیمت <InlineMath math={"r"} /> خریداری می‌نماید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع معکوس تولید فروشنده <InlineMath math={"q_2"} />: <InlineMath math={"x = H(q_2)"} /></p>
<div className="formula-box"><BlockMath math={"\\pi_S = TR - TC \\Rightarrow \\pi_S = P_2 q_2 - r x"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_S = P_2 q_2 - r H(q_2)"} /></div>


    </div>
  );
};

export default Subpage3;
