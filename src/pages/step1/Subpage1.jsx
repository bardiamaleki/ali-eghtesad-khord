import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>جلسه اول - اقتصاد خرد</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>تاریخ:</strong> ۱۸ فروردین</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>علم اقتصاد، علم کمیابی منابع هست و خواسته‌ها نامحدود و باید منابع کمیاب را به خواسته‌های نامحدود اختصاص دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اقتصاد خرد: خانوار در مقابل بنگاه (چرخه‌ی چرخشی)</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/svg/graph1_1.svg" alt="چرخه جریان دایره‌ای اقتصاد" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بازار کالا و خدمات:</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- بازار رقابت کامل (حدی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- بازار رقابت انحصاری</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- بازار انحصار چند جانبه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴- بازار انحصار کامل (حدی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بازار رقابت کامل:</strong> بازاری است که در آن شمار تولید کننده و مصرف کننده بسیار زیاد است (شبیه این بازار می‌تواند وجود داشته باشد). قیمت‌ها در این بازار ثابت است (منحنی تقاضای بنگاه افقی است). اطلاعات در این بازار شفاف است. <InlineMath math={"P = D"} /> (افقی).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بازار انحصار کامل:</strong> بازاری است شامل یک تولید کننده و این یک تولید کننده تعیین کننده شرایط بازار است و قیمت در این بازار ثابت نیست.</p>
<blockquote style={{ borderRight: "4px solid var(--primary)", paddingRight: "1rem", color: "var(--text-muted)", margin: "1rem 0", background: "rgba(255,255,255,0.02)", padding: "1rem" }}>**نکته علمی افزوده:**</blockquote>
<blockquote style={{ borderRight: "4px solid var(--primary)", paddingRight: "1rem", color: "var(--text-muted)", margin: "1rem 0", background: "rgba(255,255,255,0.02)", padding: "1rem" }}>در بازار رقابت کامل، به دلیل تعداد زیاد تولیدکنندگان و همگن بودن کالاها، هیچ بنگاهی قدرت تعیین قیمت را ندارد و همه اصطلاحاً «قیمت‌پذیر» (Price Taker) هستند. به همین دلیل منحنی تقاضا برای یک بنگاه افقی (<InlineMath math={"P=D=MR"} />) است. در انحصار کامل، تنها یک بنگاه وجود دارد که «قیمت‌گذار» (Price Maker) است و با منحنی تقاضای نزولی کل بازار روبرو است.</blockquote>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>درآمد و رفتار خانوار و بنگاه</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>خانوار:</strong> مصرف کننده کالا، متقاضی کالا</p>
<div className="formula-box"><BlockMath math={"Q_x^d = f(P_x, I, P_y, A, \\dots)"} /></div>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li><InlineMath math={"I"} />: درآمد</li>
<li><InlineMath math={"A"} />: تبلیغات</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تقاضا نزولی است (مگر در مواقع خاص).</p>
<div className="formula-box"><BlockMath math={"Q_x^d = a - bP_x \\leadsto P_x = \\frac{a}{b} - \\frac{1}{b}Q_x^d"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>*(در جزوه فرمول به صورت <InlineMath math={"P = a - bQ^d"} /> نوشته شده که از نظر ریاضیاتی اگر ضرایب را متمایز در نظر نگیریم دقیق نیست. فرم صحیح تابع تقاضای معکوس <InlineMath math={"P_x = \\frac{a}{b} - \\frac{1}{b}Q_x^d"} /> است که نشانگر رابطه خطی قیمت و مقدار تقاضا است).*</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/svg/graph2_1.svg" alt="منحنی تقاضا" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>*رابطه قیمت خود کالا با تقاضا <InlineMath math={"\\leftarrow"} /> قانون تقاضا*</p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li><InlineMath math={"a"} />: عرض از مبدأ</li>
<li><InlineMath math={"b"} />: شیب منفی</li>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بنگاه:</strong> تولید کننده، عرضه کالا</p>
<div className="formula-box"><BlockMath math={"Q_x^s = f(P_x, C, T, W, \\dots)"} /></div>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li><InlineMath math={"S"} />: یارانه تولید</li>
<li><InlineMath math={"T"} />: تکنولوژی</li>
<li><InlineMath math={"E"} />: انتظارات</li>
</ul>
<div className="formula-box"><BlockMath math={"Q_x^s = f(P_x) \\uparrow"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x = a + bQ_x \\implies Q_x^s = -\\frac{a}{b} + \\frac{1}{b}P_x"} /> *(در جزوه نوشته شده <InlineMath math={"Q_x^s = a + bP_x"} /> که به عنوان یک فرم کلی تابع خطی با ضرایب مثبت قابل قبول است).*</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/svg/graph2_2.svg" alt="منحنی عرضه" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} /></div>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li><InlineMath math={"a"} />: عرض از مبدأ</li>
<li><InlineMath math={"b"} />: شیب مثبت</li>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>تعادل بازار:</strong></p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/svg/graph2_3.svg" alt="تعادل بازار" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} /></div>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li><InlineMath math={"e"} />: نقطه وضعیت تعادلی</li>
<li>عرضه کننده (بنگاه) و متقاضی (مصرف کننده) بازار را تشکیل می‌دهند.</li>
</ul>


    </div>
  );
};

export default Subpage1;
