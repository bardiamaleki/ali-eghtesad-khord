import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در بازار انحصار هم هدف تولید کننده حداکثر کردن سود است</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Max \\pi = TR - TC"} /></p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial Q} = 0 \\implies MR = MC \\Rightarrow \\text{شرط تعادل}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"(Q) \\qquad (E)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نقطه تعادل و مقدار تعادل نقطه برخورد <InlineMath math={"MR"} /> و <InlineMath math={"MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از قسمت روی منحنی تقاضا تعیین می شود. <InlineMath math={"\\to (P)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>انحصارگر در کوتاه مدت منحنی عرضه ندارد . و فقط نقطه ی عرضه داریم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>چون فقط یک تولید کننده است چون <InlineMath math={"MR"} /> در هر جایی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>و ممکن است با <InlineMath math={"MC"} /> برخورد کند</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب درآمد نهایی ۲ برابر شیب تقاضا است.</p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>عرضه در رقابت کامل با توجه به هزینه ها تعیین می کردیم و ضابطیت هزینه ی ثابت را پوشش می داد.</li>
</ul>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/90-nemodar.svg" alt="نمودار بازار" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط دوم <InlineMath math={"\\rightarrow \\frac{\\partial^2 \\pi}{\\partial Q^2} &lt; 0 \\implies \\frac{\\partial MR}{\\partial Q} - \\frac{\\partial MC}{\\partial Q} &lt; 0 \\implies \\frac{\\partial MR}{\\partial Q} &lt; \\frac{\\partial MC}{\\partial Q}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بلند مدت : درآمد <InlineMath math={"TR"} /> تغییر می کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه نهایی بلند مدت <InlineMath math={"LMC"} /></p>
<div className="formula-box"><BlockMath math={"\\pi = TR - LTC \\to \\frac{\\partial \\pi}{\\partial Q} = 0 \\implies MR = LMC"} /></div>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>انحصارگر در بلند مدت هم می تواند سود داشته باشد چون فقط یک تولید کننده است [ در صورتی که در رقابت کامل در بلند مدت سود = صفر بود ]</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MR"} /> باید از پایین <InlineMath math={"MC"} /> را قطع کند [ نقطه تعادل ]</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تبعیض قیمت / متفاوت بودن قیمت</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>هدف:</strong> پیدا کردن تعادل و نقطه تعادل</p>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>انواع انحصارگر</h3>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- انحصارگر تبعیض قیمت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>الف) تبعیض قیمت درجه (۱) یا تبعیض قیمت کامل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ب) تبعیض قیمت درجه (۲) تبعیض قیمت مقداری</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ج) تبعیض قیمت چند بازاری (درجه ۳)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- انحصارگر چند کارخانه‌ای <InlineMath math={"\\leftarrow"} /> یک محصول تولید می‌کند</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک تولید کننده با چندین کارخانه <InlineMath math={"\\leftarrow"} /> چند محصول تولید می‌کند</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در هر دو شرایط فوق به دنبال شرایط و نقطه‌ی تعادل هستیم و اینکه در هر دو حالت‌های فوق نقطه‌ی تعادل چه تغییراتی پیدا می‌کند. دو شرط برای تبعیض قیمت:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- مصرف‌کنندگان را بتوان از هم جدا کرد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- بازار انحصاری باشد یعنی فقط در بازار انحصاری تبعیض قیمت داریم.</p>
<h4 style={{ color: "var(--accent)", marginTop: "1.5rem", marginBottom: "1rem" }}>حالت تبعیض قیمت کامل:</h4>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت ۱: تولید کننده دقیقاً می‌داند هر مصرف کننده برای کالایی که می‌خرد چه مقدار پرداخت می‌کند (انحصارگر از هر مصرف کننده یک قیمت می‌گیرد بنابراین در این وضعیت اضافه رفاه مصرف کننده برابر صفر است).</p>
<div className="formula-box"><BlockMath math={"P = f(q) \\quad \\quad CS = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(قیمت‌های مختلف برای مصرف‌کنندگان مختلف) یعنی تولید کننده تمام سطح زیر منحنی تقاضا که همان رفاه مصرف کننده است را دریافت می‌کند. درآمد انتگرال منحنی تقاضا است.</p>
<div className="formula-box"><BlockMath math={"TR = \\int_0^q f(q) dq"} /></div>
<div className="formula-box"><BlockMath math={"\\pi = \\int_0^q f(q) dq - TC(q)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(تمام سطح منحنی تقاضا)</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial q} = 0 \\Rightarrow f(q) - MC = 0 \\Rightarrow P = f(q) = MC"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/91-nemodar.svg" alt="نمودار تقاضا و تبعیض قیمت کامل" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مقدار داخل انتگرال = مشتق انتگرال</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سطح زیر منحنی تقاضا = درآمد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه - تابع تقاضا =</p>

<div className="formula-box"><BlockMath math={"TC = 20Q + 50 \\quad \\quad MC = 20"} /></div>
<div className="formula-box"><BlockMath math={"P = 100 - 4Q \\times Q = TR \\Rightarrow 100Q - 4Q^2 \\Rightarrow MR = 100 - 8Q"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) تبعیض نباشد (تعادل)</p>
<div className="formula-box"><BlockMath math={"MR = MC \\Rightarrow 100 - 8Q = 20 \\Rightarrow 80 = 8Q \\Rightarrow Q = 10"} /></div>
<div className="formula-box"><BlockMath math={"P = 100 - 4(10) = 60"} /></div>
<div className="formula-box"><BlockMath math={"\\pi = TR - TC \\Rightarrow (100 \\times 10) - 4(100) = 600"} /></div>
<div className="formula-box"><BlockMath math={"TC = (20 \\times 10) + 50 \\Rightarrow 250"} /></div>
<div className="formula-box"><BlockMath math={"\\pi = 600 - 250 = 350"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) تبعیض قیمت کامل</p>
<div className="formula-box"><BlockMath math={"TR = \\int_0^{20} (100 - 4Q) dQ"} /></div>
<div className="formula-box"><BlockMath math={"P = MC \\Rightarrow P = 20"} /></div>
<div className="formula-box"><BlockMath math={"100 - 4Q = 20 \\Rightarrow 80 = 4Q \\Rightarrow Q = 20"} /></div>
<div className="formula-box"><BlockMath math={"\\pi = 750"} /></div>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<h4 style={{ color: "var(--accent)", marginTop: "1.5rem", marginBottom: "1rem" }}>مصرف‌کنندگان برای (تبعیض قیمت درجه ۲)</h4>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این حالت برای مقدار مشخصی از کالا (<InlineMath math={"OQ_1"} />) قیمت <InlineMath math={"P_1"} /> و برای مقدار دیگر همان کالا (<InlineMath math={"OQ_2"} />) قیمت <InlineMath math={"P_2"} /> وضع می‌شود.</p>
<div className="formula-box"><BlockMath math={"OQ_1 &lt; OQ_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خیلی از مصرف کنندگان با واحدهای کم قیمت‌های زیاد و برای واحدهای زیاد قیمت کم می‌پردازند.</p>
<div className="formula-box"><BlockMath math={"(P=15 \\leftarrow Q=6) \\leftarrow (P=10 \\leftarrow Q=18)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعیین قیمت پله‌ای : تقاضا چند پله می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>گروه مصرف کنندگان پله‌ای: برای مقدار بیشتری کالا پول کمتری می‌پردازند.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/92-nemodar.svg" alt="نمودار تقاضا و تبعیض قیمت درجه ۲" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<div className="formula-box"><BlockMath math={"TR = OP_1HQ_1 + KQ_1Q_2H'"} /></div>
<div className="formula-box"><BlockMath math={"TR = (6 \\times 15) + (12 \\times 10) = 210"} /></div>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تبعیض قیمت چند بازاری</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>قیمت برق برای مصرف کننده‌ی خانگی و بنگاه یا صنعت متفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این حالت چون بازارهای فروش از هم جدا هستند می‌توان این تبعیض را اجرا کرد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- حتماً باید بازار انحصار کامل باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- کشش‌های قیمتی متفاوت باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- باید مصرف کنندگان قابل تفکیک باشند (بلیط هواپیما برای کودک و بزرگسال متفاوت)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(هزینه تولید برق برای مصرف کنندگان مختلف یکی است اما درامدها متفاوت است در مقابل یک هزینه)</p>
<div className="formula-box"><BlockMath math={"q = q_1 + q_2 \\quad \\quad Max \\pi = TR_1 + TR_2 - TC"} /></div>
<div className="formula-box"><BlockMath math={"FOC \\begin{cases} \\frac{\\partial \\pi}{\\partial q_1} = 0 \\Rightarrow \\frac{\\partial TR_1}{\\partial q_1} - \\frac{\\partial TC}{\\partial q} \\cdot \\frac{\\partial q}{\\partial q_1} = 0 \\Rightarrow MR_1 = MC \\\\ \\\\ \\frac{\\partial \\pi}{\\partial q_2} = 0 \\Rightarrow \\frac{\\partial TR_2}{\\partial q_2} - \\frac{\\partial TC}{\\partial q} \\cdot \\frac{\\partial q}{\\partial q_2} = 0 \\Rightarrow MR_2 = MC \\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"\\Rightarrow MR_1 = MR_2 = MC"} /></div>
<div className="formula-box"><BlockMath math={"S.O.C: |H| = \\begin{vmatrix} MR'_1 - MC' & -MC' \\\\ -MC' & MR'_2 - MC' \\end{vmatrix} &gt; 0"} /></div>
<div className="formula-box"><BlockMath math={"MR_1 = P_1(1 - \\frac{1}{e_1}) \\quad , \\quad MR_2 = P_2(1 - \\frac{1}{e_2}) \\quad (۲)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(شرط قسم درجه ۳)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>نکته:</strong> در بازاری که کشش بیشتر است قیمت کمتر است / درآمد نهایی در دو بازار با هم مساوی است و برابر با هزینه نهایی است و نمی‌توان کالا را در یک بازار خرید و در بازار دیگر فروخت پس در بازاری که قیمت کمتر، کشش بیشتر است.</p>
<div className="formula-box"><BlockMath math={"\\Rightarrow \\begin{cases} e_1 &gt; e_2 \\\\ P_1 &lt; P_2 \\end{cases}"} /></div>

<div className="formula-box"><BlockMath math={"(1), (2) \\Rightarrow P_1(1 - \\frac{1}{e_1}) = P_2(1 - \\frac{1}{e_2}) \\Rightarrow \\frac{P_1}{P_2} = \\frac{1 - \\frac{1}{e_2}}{1 - \\frac{1}{e_1}}"} /></div>
<div className="formula-box"><BlockMath math={"\\text{فرض } P_1 &lt; P_2 \\Rightarrow \\frac{P_1}{P_2} &lt; 1 \\Rightarrow \\frac{1 - \\frac{1}{e_2}}{1 - \\frac{1}{e_1}} &lt; 1 \\Rightarrow \\frac{1}{e_2} &gt; \\frac{1}{e_1}"} /></div>
<div className="formula-box"><BlockMath math={"e_2 &lt; e_1"} /></div>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>انحصارگر چند کارخانه‌ای</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(تولید در دو کارخانه و فروش در یک بازار)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثلاً ایران خودرو، خودروی پرشیا را هم در کارخانه‌ی تهران و هم در کارخانه‌ی مشهد تولید می‌کند اما از فروش این ها یک درامد کسب می‌کند و قیمت ایران خودرو در بازار یک قیمت مشخص دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اما هزینه‌های این تولید در این دو شهر می‌تواند متفاوت باشد و همین می‌تواند برای انحصارگر شرایط خاص ایجاد کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک درآمد <InlineMath math={"\\leftarrow TR"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲ هزینه <InlineMath math={"\\leftarrow MC_1, MC_2"} /></p>
<div className="formula-box"><BlockMath math={"q = q_1 + q_2 \\quad , \\quad Max \\pi = TR(q_1, q_2) - TC_1(q_1) - TC_2(q_2)"} /></div>
<div className="formula-box"><BlockMath math={"FOC \\begin{cases} \\frac{\\partial \\pi}{\\partial q_1} = 0 \\rightarrow \\frac{\\partial TR_1}{\\partial q_1} + \\frac{\\partial TR_2}{\\partial q_1} - \\frac{\\partial TC_1}{\\partial q_1} = 0 \\\\ \\rightarrow MR_1 + \\frac{\\partial TR_2}{\\partial q_1} = MC_1 \\\\ \\\\ \\frac{\\partial \\pi}{\\partial q_2} = 0 \\rightarrow \\frac{\\partial TR_1}{\\partial q_2} + \\frac{\\partial TR_2}{\\partial q_2} - \\frac{\\partial TC_2}{\\partial q_2} = 0 \\\\ \\rightarrow MR_2 + \\frac{\\partial TR_1}{\\partial q_2} = MC_2 \\end{cases}"} /></div>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تغییر قیمت یک کالا بر سطح تولید کالای دیگر اثر دارد</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[بحث جانشینی و مکمل بودن اتفاق می‌افتد]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با افزایش فروش <InlineMath math={"q_1"} />، درآمد <InlineMath math={"TR_2"} /> هم زیاد می‌شود <InlineMath math={"\\leftarrow"} /> مکمل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>وابستگی بین تقاضای دو کالا:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خودکار و جوهر <InlineMath math={"\\leftarrow"} /> اگر <InlineMath math={"q_1, q_2"} /> مکمل باشند: <InlineMath math={"\\frac{\\partial TR_1}{\\partial q_2} &gt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثل نوشابه‌ها <InlineMath math={"\\leftarrow"} /> اگر <InlineMath math={"q_1, q_2"} /> جانشین باشند: <InlineMath math={"\\frac{\\partial TR_1}{\\partial q_2} &lt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>پپسی و کوکاکولا و ... با افزایش فروش <InlineMath math={"q_1"} />، درآمد <InlineMath math={"TR_2"} /> کم می‌شود.</p>
<div className="formula-box"><BlockMath math={"S.O.C : |H| = \\begin{vmatrix} \\pi_{11} & \\pi_{12} \\\\ \\pi_{21} & \\pi_{22} \\end{vmatrix} &gt; 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت تولید در دو کارخانه و فروش در دو بازار <InlineMath math={"\\leftarrow"} /> خودکار و جوهر</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- دو کالا با هم متفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- هزینه تولید دو کالا هم با هم متفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعادل</p>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دولت از دو طریق می‌تواند انحصارگر را کنترل نماید:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- سیاست سقف قیمتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- سیاست مالیات برای انحصارگر</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>انحصارگر نمی‌تواند قیمت را بیش از حد بالا ببرد چون مشتری‌هایش را از دست می‌دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثلاً اگر قیمت برق بیش از حد افزایش یابد ما مصرف کننده‌ها می‌رویم سراغ انرژی خورشیدی - ... کارا.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در واقع انحصارگر می‌تواند قیمت را بالا ببرد اما اندازه دارد و دولت باید از طریقی بر انحصارگر کنترل داشته باشد.</p>


    </div>
  );
};

export default Subpage2;
