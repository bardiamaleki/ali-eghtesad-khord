import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بازار انحصار چند جانبه: خصوصیاتش نزدیک به انحصار کامل است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر بازار با دو فروشنده یا تولیدکننده وجود داشته باشد دو جانبه (دوآپولی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر تعداد فروشندگان محدودی بیشتر از دو تا باشد انحصار چند جانبه و الیگاپولی نامیده می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>وقتی تعداد تولید کننده کم باشد هر تصمیمی توسط تولید کننده گرفته شود، واکنش رقبا را به دنبال خواهد داشت.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>به عبارتی: رابطه بین قیمت و مقدار برای یک فروشنده به تنهایی در یک چنین بازاری امکان پذیر نیست و از طرفی هم در انحصار چند جانبه، دانستن سود پیش از حد هم دور از انتظار است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یکی از راههای تشخیص نوع بازار:</p>
<div className="formula-box"><BlockMath math={"\\frac{\\text{تغییرات سود یک تولید کننده}}{\\text{تغییرات تولید بقیه}} \\quad \\frac{\\Delta \\pi_i}{\\Delta q_j}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر تاثیر تولید روی سود آن قدر زیاد نباشد <InlineMath math={"\\rightarrow"} /> انحصار کامل یا رقابت کامل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر تصمیم یک فروشنده (در زمینه مقدار تولید) روی سود تولید کننده دیگر تغییرش غیرمحسوس باشد، شرایط به سمت بازار انحصار کامل یا رقابت کامل است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر تاثیر روی سود تولید کننده آن قدر زیاد باشد و محسوس <InlineMath math={"\\rightarrow"} /> انحصار دو یا چند جانبه است.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>کالای همگن:</strong> برای همه‌ی تولیدکنندگان یک تابع تقاضا داریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>کالای غیر همگن:</strong> در شرایط کالاهای غیر همگن، هرکدام یک تابع تقاضا دارند. هر تولیدکننده یک تابع تقاضا دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>راه‌حل‌های بازار انحصار چندجانبه</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- راه حل شبه رقابتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- راه حل تبانی (سازش)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- راه حل کورنو</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴- راه حل برتراند</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(واستاکلبرگ همگن)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>*این راه‌حل‌ها (۱، ۲، ۳ و ۴) همگن هستند <InlineMath math={"\\leftarrow"} /> یک تابع تقاضا داریم.*</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>*یعنی <InlineMath math={"P"} /> تابعی از <InlineMath math={"q"} /> و <InlineMath math={"q"} /> شامل <InlineMath math={"q_1 , q_2"} /> است.*</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۵- راه حل سهمیه‌بندی بازار</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۶- راه حل استاکلبرگ</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۷- راه حل تقاضای شکسته</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>*این راه‌حل‌ها (۵، ۶ و ۷) غیرهمگن هستند.*</p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>۸- راه حل اجورث <InlineMath math={"\\leftarrow"} /> حذف</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>هدف همه‌ی راه‌حل‌ها:</strong> پیدا کردن <InlineMath math={"Max \\pi"} /> برای تولیدکننده از طریق تعیین قیمت و مقدار <InlineMath math={"\\leftarrow"} /> دو تولیدکننده داریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در دو دسته می‌شوند:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- گروهی که تابع تقاضا برای تولیدکننده‌ها یکسان است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- راه‌حل‌هایی که تابع تقاضا برای تولیدکننده‌ها متفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>باید در همه‌ی راه‌حل‌ها سود را پیدا کنیم.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>راه‌حل شبه رقابتی:</strong> با توجه به شرط تعادل <InlineMath math={"P = MC"} /> بازار رقابت کامل و تقاضای همگن.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲ تولیدکننده داریم. شرط تعادل <InlineMath math={"P = MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر تولیدکننده هزینه‌ی خودش را دارد (دو هزینه) <InlineMath math={"q = q_1 + q_2"} /> تقاضا همگن.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اما چون کالا همگن است یک تابع تقاضا داریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[باید هر تولیدکننده‌ای قیمت را برابر هزینه نهایی خودش قرار دهد <InlineMath math={"P = MC"} />]</p>
<div className="formula-box"><BlockMath math={"P = MC_1 \\rightarrow 100 - q_1 - q_2 = \\frac{1}{2} q_1 + 2"} /></div>
<div className="formula-box"><BlockMath math={"P = MC_2 \\rightarrow 100 - q_1 - q_2 = q_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(دو معادله، دو مجهول)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>سوال:</strong> در کدام بازار <InlineMath math={"P"} /> بیشتره؟ در کدام بازار <InlineMath math={"q"} /> (مقدار) بیشتره؟ در کدام بازار سود بیشتر است؟ مقایسه بین حالت‌های مختلف.</p>
<div className="formula-box"><BlockMath math={"P = 100 - q"} /></div>
<div className="formula-box"><BlockMath math={"q = q_1 + q_2"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nTC_1 = \\frac{1}{4} q_1^2 + 2q_1 & MC_1 = \\frac{\\partial TC}{\\partial q} \\rightarrow MC_1 = \\frac{1}{2} q_1 + 2 \\\\\nTC_2 = \\frac{1}{2} q_2^2 + 2 & MC_2 = \\frac{\\partial TC}{\\partial q} \\rightarrow MC_2 = q_2\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_1 = TR_1 - TC_1"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_2 = TR_2 - TC_2"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>راه حل تبانی (سازش)</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دو تولیدکننده با اطلاع از منافع مشترک یکدیگر با هم سازش می‌کنند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سودها را با هم جمع می‌کنند و بعد بین خود تقسیم می‌کنند.</p>
<div className="formula-box"><BlockMath math={"\\pi = \\pi_1 + \\pi_2 = P q_1 + P q_2 - C_1(q_1) - C_2(q_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تقاضا یکسان است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع هزینه‌ها متفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک بار از سود نسبت به فروش تولیدکننده اول مشتق می‌گیریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک بار از سود نسبت به فروش تولیدکننده دوم مشتق می‌گیریم.</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial q_1} = 0 \\Rightarrow P + (q_1 + q_2) \\cdot \\frac{\\partial P}{\\partial q_1} - C'(q_1) = 0 \\Rightarrow MR = MC_1"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial q_2} = 0 \\Rightarrow P + (q_1 + q_2) \\cdot \\frac{\\partial P}{\\partial q_2} - C'(q_2) = 0 \\Rightarrow MR = MC_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط کلی تعادل در مدل تبانی:</p>
<div className="formula-box"><BlockMath math={"P + (q_1 + q_2) \\cdot \\frac{\\partial P}{\\partial q_i} = MC_i"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در اینجا قیمت و مقدار و سودها با هم متفاوت خواهد بود و تولیدکننده ترجیح می‌دهد که کدام راه‌حل‌ها به نفع تولیدکننده است.</p>
<div className="formula-box"><BlockMath math={"MR = MC"} /></div>
<div className="formula-box"><BlockMath math={"P = 100 - Q"} /></div>
<div className="formula-box"><BlockMath math={"TR = P \\cdot Q = (100 - Q)Q \\Rightarrow 100Q - Q^2"} /></div>
<div className="formula-box"><BlockMath math={"MR = \\frac{\\partial TR}{\\partial Q} = 100 - 2Q"} /></div>
<div className="formula-box"><BlockMath math={"\\Rightarrow MC_1 = MC_2 \\Rightarrow \\frac{1}{2} q_1 + 2 = q_2"} /></div>
<div className="formula-box"><BlockMath math={"\\Rightarrow MR = MC \\Rightarrow 100 - 2Q = q_2 \\quad (Q = q_1 + q_2)"} /></div>
<div className="formula-box"><BlockMath math={"100 - 2(q_1 + q_2) = q_2 \\rightarrow 100 - 2q_1 - 3q_2 = 0 \\rightarrow \\text{جاگذاری برای } q_2"} /></div>

<div className="formula-box"><BlockMath math={"100 - 2q_1 - 3(0.5 q_1 + 2) = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nq_1 = 26.86 \\\\\nq_2 = 15.43\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"Q \\text{ کل} = q_1 + q_2 = 26.86 + 15.43 = 42.29"} /></div>
<div className="formula-box"><BlockMath math={"P \\text{ بازار} = 100 - Q"} /></div>
<div className="formula-box"><BlockMath math={"100 - 42.29 = 57.71"} /></div>
<div className="formula-box"><BlockMath math={"TR_1 = 57.71 (26.86) = 1550.1"} /></div>
<div className="formula-box"><BlockMath math={"TC_1 = \\frac{1}{4} (26.86)^2 + 2(26.86)"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_1 = 1550.1 - 233.99 \\quad \\rightarrow \\quad \\pi_1 = 1316.1"} /></div>
<div className="formula-box"><BlockMath math={"TR_2 = 57.71 (15.43) = 890.5"} /></div>
<div className="formula-box"><BlockMath math={"TC_2 = \\frac{1}{2} (15.43)^2 + 2 \\rightarrow TC_2 = 121.04"} /></div>
<div className="formula-box"><BlockMath math={"\\pi_2 = 769.5"} /></div>

<div className="formula-box"><BlockMath math={"\\pi_1 = 100q_1 - q_1^2 - q_1 q_2 - \\frac{1}{4} q_1^2 - 2q_1"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>راه حل کورنو</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر تولیدکننده با این فرض که تصمیمش در مورد مقدار تولید تاثیری بر تولید رقیب ندارد، سود خودش را حداکثر می‌کند (تولید بنگاه دیگر ثابت می‌ماند - فرض)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"TR - TC = \\pi"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بنگاه اول:</p>
<div className="formula-box"><BlockMath math={"P \\cdot q_1 - C_1(q_1) = \\pi_1^{Max} \\rightarrow \\frac{\\partial \\pi_1}{\\partial q_1} = P + q_1 \\frac{\\partial P}{\\partial q_1} - C'(q_1) = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\Rightarrow C'(q_1) = MC_1"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بنگاه دوم:</p>
<div className="formula-box"><BlockMath math={"P \\cdot q_2 - C_2(q_2) = \\pi_2^{Max} \\rightarrow \\frac{\\partial \\pi_2}{\\partial q_2} = P + q_2 \\frac{\\partial P}{\\partial q_2} - C'(q_2) = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\Rightarrow C'(q_2) = MC_2"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nq_1 = f(\\overline{q}_2) \\\\\nq_2 = f(\\overline{q}_1)\n\\end{cases}\n\\quad \\text{توابع عکس‌العمل}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط تعادل در مدل کورنو:</p>
<div className="formula-box"><BlockMath math={"P + q_i \\frac{\\partial P}{\\partial q_i} = MC_i \\quad i=1,2,\\dots,n"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولیدکننده اول تابع سود خودش را Max می‌کند، درآمد شامل هر دو تا <InlineMath math={"q"} /> و هزینه هر تولیدکننده جدا است. در درآمد تولیدکننده اول، تولید (<InlineMath math={"q_2"} />) تولیدکننده دوم وجود دارد. رفتار رقیب در تابع سود دیده می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>توابع عکس‌العمل <InlineMath math={"\\rightarrow"} /> رابطه بین <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> بدست می‌آید [موقعی که عکس‌العمل تولیدکننده اول وقتی تولید تولیدکننده‌ی دوم ثابت است]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- رابطه‌ی کورنو مقداری غیرواقعی است یعنی نمی‌توان در دنیای واقعی و رقابت، رفتار رقبا تحت نظارت و تاثیرگذار است. فرض غیرواقعی داریم در راه حل کورنو <InlineMath math={"\\rightarrow"} /> این فرض ایراد دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- وقتی که تعداد بنگاه‌ها زیاد بشود، <InlineMath math={"n \\rightarrow \\infty"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>و</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nMR_1 = MC_1 \\\\\nMR_2 = MC_2\n\\end{cases}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>راه حل کورنو به سمت راه حل شبه رقابتی حرکت می‌کند یعنی <InlineMath math={"P=MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>راه حل استاکلبرگ</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>به راه حل رهبر-پیرو معروف است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض ایران خودرو و سایپا <InlineMath math={"\\rightarrow"} /> ۴ حالت داریم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- بنگاه اول رهبر، بنگاه دوم پیرو</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- بنگاه اول پیرو، بنگاه دوم رهبر</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- هر دو بنگاه پیرو <InlineMath math={"\\rightarrow"} /> راه حل کورنو</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴- هر دو بنگاه رهبر <InlineMath math={"\\rightarrow"} /> (عدم تعادل) تعادل اتفاق نمی‌افتد (عدم تعادل استاکلبرگ <InlineMath math={"\\rightarrow"} /> هر بنگاه می‌گوید من <InlineMath math={"\\leftarrow"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بنگاه رهبر تابع عکس‌العمل نداشته و بنگاه پیرو تابع عکس‌العمل دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این روش برای رسیدن به مقادیر تعادلی (حل بازار) کافی است که تابع عکس‌العمل بنگاه پیرو را به دست آورده و در تابع سود بنگاه رهبر قرار دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای پیدا کردن تابع عکس‌العمل هر بنگاه، کافی است که از تابع سود آن بنگاه نسبت به تولید همان بنگاه مشتق گرفته و برابر صفر قرار دهیم.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این حالت بنگاه رهبر سود خودش را بر می‌دارد و هر چه ماند به بنگاه پیرو تعلق می‌گیرد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>راه حل برتراند:</strong> کلا جدا از راه‌حل‌های پیشین (۴ مورد)</p>
<div className="formula-box"><BlockMath math={"P = 50 - Q \\Rightarrow TR = P \\cdot Q"} /></div>
<div className="formula-box"><BlockMath math={"TR = (50 - Q)Q"} /></div>
<div className="formula-box"><BlockMath math={"TC = 5Q"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n\\pi = \\pi(Q) \\\\\n\\frac{\\partial \\pi}{\\partial Q} = 0\n\\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برتراند بحث تولیدکننده را بر اساس <strong>قیمت</strong> مطرح می‌کند و نه مقدار.</p>
<div className="formula-box"><BlockMath math={"TR(P) , \\quad TC(P) , \\quad \\pi(P)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولیدکننده قیمت بنگاه رقیب را ثابت فرض می‌کند و سود خود را حداکثر می‌کند.</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\nP_1 = f(\\overline{P}_2) \\\\\nP_2 = f(\\overline{P}_1)\n\\end{cases}\n\\quad \\text{توابع عکس‌العمل}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در اینجا توابع عکس‌العمل قیمتی داریم.</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial P_i} = 0"} /></div>


    </div>
  );
};

export default Subpage2;
