import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>انحصار خرید</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>کالا:</strong></p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>رقابت <InlineMath math={"\\leftarrow \\bar{P}"} /></li>
<li>انحصاری <InlineMath math={"\\leftarrow MR"} /> (بازار فروش انحصاری)</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>نهاده (نیروی کار):</strong></p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>رقابت <InlineMath math={"\\leftarrow \\bar{P}"} /></li>
<li>انحصاری <InlineMath math={"\\leftarrow MR"} /></li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>انحصارگر در بازار رقابتی بفروشد / در بازار انحصاری بفروشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>انحصار در خرید نهاده وجود دارد اما کالا دو حالت دارد <InlineMath math={"\\leftarrow"} /> رقابت / انحصار</p>
<h4 style={{ color: "var(--accent)", marginTop: "1.5rem", marginBottom: "1rem" }}>حالت اول: محصول را در بازار رقابتی بفروش برساند <InlineMath math={"\\leftarrow"} /> نهاده انحصاری</h4>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>قیمت ثابت است <InlineMath math={"\\leftarrow \\bar{P}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q = q(x)"} /> : تابع تولید خریدار <InlineMath math={"x"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"r = g(x)"} /> (قیمت نهاده) : تابع عرضه فروشندگان <InlineMath math={"x"} /> و <InlineMath math={"g' &gt; 0"} /></p>
<div className="formula-box"><BlockMath math={"\\pi = TR - TC = P \\cdot q(x) - r \\cdot x = P \\cdot q(x) - g(x) \\cdot x"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در اینجا <InlineMath math={"P \\cdot q(x)"} /> فروش کالا است و <InlineMath math={"g(x) \\cdot x"} /> قیمت نهاده تابعی از عرضه است.</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial x} = 0 \\Rightarrow P \\cdot \\frac{\\partial q}{\\partial x} - [g(x) + g'(x) \\cdot x] = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial TC}{\\partial x} = MFC_x"} /></div>

<div className="formula-box"><BlockMath math={"P \\cdot MP_x = MFC_x \\Rightarrow VMP_x = MFC_x \\quad (\\text{شرط اول})"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial^2 \\pi}{\\partial x^2} \\le 0 \\Rightarrow \\frac{\\partial VMP_x}{\\partial x} \\le \\frac{\\partial MFC_x}{\\partial x} \\quad (\\text{شرط دوم})"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط اول: ارزش کار برابر است با هزینه نهایی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برخورد <InlineMath math={"VMP"} /> با <InlineMath math={"MFC"} /> مقدار <InlineMath math={"x"} /> را به ما می‌دهد (تقاضای نیروی کار).</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/101-nemodar.svg" alt="نمودار بازار کار" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<div className="formula-box"><BlockMath math={"MFC_x = \\frac{\\partial (g(x) \\cdot x)}{\\partial x} = g'(x) \\cdot x + g(x)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مشتق آن:</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial MFC_x}{\\partial x} = g'(x) + g''(x) \\cdot x + g'(x) = 2g'(x) + g''(x) \\cdot x"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در صورتی که تابع عرضه خطی باشد (<InlineMath math={"g''(x) = 0"} />):</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب <InlineMath math={"MFC_x = 2 g'(x)"} /> (دو برابر شیب عرضه)</p>
<h4 style={{ color: "var(--accent)", marginTop: "1.5rem", marginBottom: "1rem" }}>حالت دوم: انحصار انحصار <InlineMath math={"\\leftarrow"} /> بدترین حالت برای عامل تولید</h4>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هم انحصار در فروش کالا وجود دارد و هم در خرید نهاده.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعادل جایی است که درآمد نهایی = هزینه نهایی عامل تولید.</p>
<div className="formula-box"><BlockMath math={"MRP_x = MFC_x"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>درآمد نهایی فروش کالا <InlineMath math={"\\leftarrow MRP_x"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه نهایی عامل تولید <InlineMath math={"\\leftarrow MFC_x"} /></p>

<div className="formula-box"><BlockMath math={"Max \\pi = TR - TC = TR(q(x)) - r \\cdot x = TR(q(x)) - g(x) \\cdot x"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial x} = 0 \\Rightarrow \\frac{\\partial TR}{\\partial q} \\cdot \\frac{\\partial q}{\\partial x} - [g'(x) \\cdot x + g(x)] = 0"} /></div>
<div className="formula-box"><BlockMath math={"MRP_x = MFC_x \\quad (\\text{شرط اول})"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial^2 \\pi}{\\partial x^2} \\le 0 \\Rightarrow \\frac{\\partial MRP_x}{\\partial x} \\le \\frac{\\partial MFC_x}{\\partial x} \\quad (\\text{شرط دوم})"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر انحصارگر خرید، کالایی را که تولید کرده در بازار انحصاری بفروشد، هم مقدار نهاده کمتری می‌خرد و هم دستمزد کمتری به آن نهاده می‌دهد (نسبت به حالتی که کالای تولید شده را در بازار رقابتی بفروشد).</p>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>جلسه نهم</h3>
<h4 style={{ color: "var(--accent)", marginTop: "1.5rem", marginBottom: "1rem" }}>بازار رقابت انحصاری:</h4>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بازار رقابت کامل <InlineMath math={"\\longleftarrow"} /> بازار رقابت انحصاری <InlineMath math={"\\longleftarrow"} /> بازار انحصار چند جانبه <InlineMath math={"\\longleftarrow"} /> بازار انحصار کامل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>تعداد تولیدکننده:</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بی‌شمار تولید کننده <InlineMath math={"\\longleftarrow"} /> بی‌شمار تولید کننده <InlineMath math={"\\dots \\longleftarrow"} /> ۱ تولید کننده</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>هدف:</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هدف تولید کننده <InlineMath math={"\\longrightarrow"} /> Max سود</p>


    </div>
  );
};

export default Subpage4;
