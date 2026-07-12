import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جلسه ی پنجم</p>
<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>نظریه رفتار تولید کننده</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای اینکه در چه دوره زمانی، فعالیت و تولید می‌کند تصمیم‌گیری‌های متفاوتی دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>دوره آنی یا بسیار کوتاه مدت</strong> یعنی عرضه عمودی (عرضه تولید شده)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>دوره کوتاه مدت / دوره ی بلند مدت</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در کوتاه مدت فقط یک عامل متغیر است و بقیه را ثابت در نظر می‌گیریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در دوره ی بلند مدت تمام عوامل تولید متغیر هستند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کل</p>
<div className="formula-box"><BlockMath math={"Q = F(L)"} /></div>
<div className="formula-box"><BlockMath math={"Q = f(K)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید نهایی</p>
<div className="formula-box"><BlockMath math={"\\max TP_L \\Rightarrow MP_L = 0"} /></div>
<div className="formula-box"><BlockMath math={"TP_L \\rightarrow AP_L = \\frac{TP}{L}"} /></div>
<div className="formula-box"><BlockMath math={"MP_L = \\frac{dTP}{dL}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در ناحیه ی دوم اقتصادی مرحله ی مناسب تولید است.</p>
<div className="formula-box"><BlockMath math={"TP_L \\max \\Rightarrow MP_L = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\max AP_L \\text{ تا } MP_L = 0"} /></div>
<div className="formula-box"><BlockMath math={"MP_L = \\max AP_L"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/54-diagram.svg" alt="نمودار مراحل تولید" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی تولید تیپیکال به این شکل هستند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نقطه Max در مرحله دوم شروع به کاهش می‌کنند.</p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>**مرحله اول:** تازه تولید شروع شده - توقف ممنوع - بازده صعودی تولید</li>
<li>**مرحله دوم:** مرحله دوم اقتصادی</li>
<li>**مرحله سوم:** ورود ممنوع - <InlineMath math={"MP_L &lt; 0"} /></li>
</ul>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در دو حالت: ۱- هزینه Min با تولید ثابت ۲- تولید Max با هزینه ثابت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کننده می‌خواهد ماکزیمم کند تولید را همراه با حداقل هزینه.</p>
<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>حالت اول: تولید Max</h2>
<div className="formula-box"><BlockMath math={"\\max Q = f(L, K)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حداقل هزینه (قید) <div className="formula-box"><BlockMath math={"S.t \\quad \\bar{C} = P_L \\cdot L + P_K \\cdot K"} /></div></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع لاگرانژ:</p>
<div className="formula-box"><BlockMath math={"V = f(L, K) + \\lambda [ \\bar{C} - P_L \\cdot L - P_K \\cdot K ]"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط مرتبه اول (FOC):</p>
<div className="formula-box"><BlockMath math={"FOC \\quad \\frac{\\partial V}{\\partial L} = 0 \\Rightarrow \\frac{\\partial f}{\\partial L} - \\lambda P_L = 0 \\Rightarrow f_L = \\lambda P_L \\quad (1)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial V}{\\partial K} = 0 \\Rightarrow \\frac{\\partial f}{\\partial K} - \\lambda P_K = 0 \\Rightarrow f_K = \\lambda P_K \\quad (2)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial V}{\\partial \\lambda} = 0 \\Rightarrow \\bar{C} - P_L \\cdot L - P_K \\cdot K = 0 \\quad (3)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از رابطه ۱ و ۲ نتیجه می‌شود:</p>
<div className="formula-box"><BlockMath math={"\\frac{f_L}{f_K} = \\frac{P_L}{P_K} \\quad \\text{شرط اول تعادل یا شرط لازم}"} /></div>
<div className="formula-box"><BlockMath math={"| \\bar{H} | &gt; 0 \\quad \\text{شرط دوم}"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/55-diagram.svg" alt="نمودارهای تعادل تولیدکننده" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعادل جایی است که منحنی تولید مماس بر خط هزینه در هر دو حالت پس فرقی ندارد نتیجه در هر دو حالت ۱ و ۲ یکسان است.</p>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>حالت دوم: هزینه Min</h2>
<div className="formula-box"><BlockMath math={"\\min C = P_L \\cdot L + P_K \\cdot K"} /></div>
<div className="formula-box"><BlockMath math={"S.t \\quad \\bar{Q} = f(L, K)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع لاگرانژ:</p>
<div className="formula-box"><BlockMath math={"Z = P_L \\cdot L + P_K \\cdot K + \\mu [ \\bar{Q} - f(L, K) ]"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط مرتبه اول:</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial Z}{\\partial L} = 0 \\Rightarrow P_L = \\mu f_L \\Rightarrow f_L = \\frac{P_L}{\\mu} \\quad (1)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial Z}{\\partial K} = 0 \\Rightarrow P_K = \\mu f_K \\Rightarrow f_K = \\frac{P_K}{\\mu} \\quad (2)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial Z}{\\partial \\mu} = 0 \\Rightarrow \\bar{Q} - f(L, K) = 0 \\quad (3)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از رابطه ۱ و ۲ نتیجه می‌شود:</p>
<div className="formula-box"><BlockMath math={"\\frac{f_L}{f_K} = \\frac{P_L}{P_K} \\quad \\text{شرط اول}"} /></div>
<div className="formula-box"><BlockMath math={"| \\bar{H} | &lt; 0 \\quad \\text{شرط دوم}"} /></div>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>شرایط حداکثر سود برای تولید کننده</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کننده به دو طریق می‌تواند سود خود را Max کند:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- چه میزان از نهاده‌ها استفاده کند تا سودش حداکثر شود؟ (سرمایه و نیروی کار) -&gt; <strong>بازار نهاده</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- چه میزان کالا تولید کند تا سودش حداکثر شود؟ [بازار کالا]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- بازار رقابت کامل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- رقابت انحصاری</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- بازار انحصار چند جانبه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- انحصار کامل</p>
<div className="formula-box"><BlockMath math={"\\pi = TR - TC"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>شرط اول:</strong></p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial Q} = 0 \\Rightarrow \\frac{\\partial TR}{\\partial Q} - \\frac{\\partial TC}{\\partial Q} = 0 \\Rightarrow MR = MC"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>شرط دوم:</strong></p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial^2 \\pi}{\\partial Q^2} \\le 0 \\Rightarrow \\frac{\\partial MR}{\\partial Q} - \\frac{\\partial MC}{\\partial Q} \\le 0 \\Rightarrow \\frac{\\partial MR}{\\partial Q} \\le \\frac{\\partial MC}{\\partial Q}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در همه بازارها با <InlineMath math={"MR = MC"} />:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط دوم، مشتق دوم باید منفی باشد در ماکزیمم یعنی جایی که شیب <InlineMath math={"MR &lt; MC"} />.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>چه میزان نهاده تولید کننده استفاده کند تا سود حداکثر شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بازار کالا رقابتی است یا بازار کالا انحصاری است، بسیار مهم است و در تعادل تأثیر دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی باید بدانیم کالا در چه بازاری بفروش می‌رسد؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>فرض:</strong> تولید کننده رقابتی است و هر دو نهاده‌ی نیروی کار و سرمایه متغیر هستند [در شرایط بلندمدت]. سود ماکزیمم یعنی باید تابع سود را تشکیل دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید <div className="formula-box"><BlockMath math={"Q = f(L, K)"} /></div></p>
<div className="formula-box"><BlockMath math={"TR = P \\cdot Q"} /></div>
<div className="formula-box"><BlockMath math={"TC = P_L \\cdot L + P_K \\cdot K + A \\quad \\text{(A هزینه ثابت)}"} /></div>
<div className="formula-box"><BlockMath math={"\\max \\pi = TR - TC"} /></div>
<div className="formula-box"><BlockMath math={"\\max \\pi = P \\cdot f(L, K) - P_L \\cdot L - P_K \\cdot K - A"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از تابع سود نسبت به <InlineMath math={"L"} /> و <InlineMath math={"K"} /> جداگانه مشتق می‌گیریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>شرط اول مشتق = ۰</strong></p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial L} = 0 \\Rightarrow P \\cdot \\frac{\\partial f}{\\partial L} - P_L = 0 \\Rightarrow P \\cdot MP_L = P_L \\Rightarrow V \\cdot MP_L = P_L"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(ارزش تولید نهایی برای نیروی کار = دستمزد <InlineMath math={"w"} />)</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial K} = 0 \\Rightarrow P \\cdot \\frac{\\partial f}{\\partial K} - P_K = 0 \\Rightarrow P \\cdot MP_K = P_K \\Rightarrow V \\cdot MP_K = P_K"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(ارزش تولید نهایی برای سرمایه = نرخ بهره <InlineMath math={"r"} />)</p>
<div className="formula-box"><BlockMath math={"K^* = K^*(P_L, P_K, P)"} /></div>
<div className="formula-box"><BlockMath math={"L^* = L^*(P_L, P_K, P)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(توابع تقاضا برای نهاده)</p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li><InlineMath math={"P"} />: قیمت کالا</li>
<li><InlineMath math={"P_K"} />: قیمت سرمایه</li>
<li><InlineMath math={"P_L"} />: قیمت نیروی کار</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعادل جایی است که:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نیروی کار تا جایی کار می‌کند که دستمزد دریافت می‌کند [ارزش کار = دستمزد] (<InlineMath math={"w"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[ارزش سرمایه = نرخ بهره] (<InlineMath math={"r"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>سود حداکثر (شرط دوم)</strong></p>
<div className="formula-box"><BlockMath math={"S.O.C \\quad |H| = \\begin{vmatrix} P f_{LL} & P f_{LK} \\\\ P f_{KL} & P f_{KK} \\end{vmatrix} = P^2 \\begin{vmatrix} f_{LL} & f_{LK} \\\\ f_{KL} & f_{KK} \\end{vmatrix} &gt; 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(هشین معمولی / مشتق دوم)</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض می‌کنیم تابع تولید تابعی از دو نهاده است (<InlineMath math={"x_1"} /> و <InlineMath math={"x_2"} />) هر کدام این نهاده‌ها یک قیمت دارند (<InlineMath math={"r_1, r_2"} />).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>به همان صورت تابع سود را تشکیل می‌دهیم.</p>
<div className="formula-box"><BlockMath math={"\\pi = TR - TC"} /></div>
<div className="formula-box"><BlockMath math={"TR = P \\cdot Q"} /></div>
<div className="formula-box"><BlockMath math={"f_1 : \\text{ارزش تولید نهایی نهاده اول = قیمت خودش}"} /></div>
<div className="formula-box"><BlockMath math={"P \\cdot MP_1 = r_1 \\quad \\text{قیمت نهاده اول}"} /></div>
<div className="formula-box"><BlockMath math={"f_2 : \\text{ارزش تولید نهایی نهاده دوم = قیمت خودش}"} /></div>
<div className="formula-box"><BlockMath math={"P \\cdot MP_2 = r_2 \\quad \\text{قیمت نهاده دوم}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>توابع تقاضای نهاده <InlineMath math={"x_1, x_2"} /> تابعی است از قیمت دو نهاده <InlineMath math={"r_1, r_2"} /> و قیمت محصول <InlineMath math={"P"} />.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سوال: تقاضا برای محصول و تقاضا برای نهاده با هم چه تفاوتی دارند؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>هدف:</strong></p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>تولید کننده: کسب سود (Max)</li>
<li>مصرف کننده: مطلوبیت (Max)</li>
<li>شیب تقاضا منفی برای کالای معمولی و نرمال [شیب تقاضا + برای کالای پست] با صرف نظر از کالای پست، یعنی</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضا برای محصول هم شیب منفی دارد و هم + (اثر جانشینی &lt; اثر درآمدی)</p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>شیب تقاضای نهاده همیشه منفی است.</li>
<li>در منطقه ۲ اقتصادی تولید نهایی نزولی است.</li>
</ul>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تقاضا برای نهاده‌ها</h2>
<div className="formula-box"><BlockMath math={"Q = f(x_1, x_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(<InlineMath math={"x_1, x_2"} /> هر کدام یک نهاده هستند)</p>
<div className="formula-box"><BlockMath math={"\\max \\pi = P \\cdot f(x_1, x_2) - r_1 x_1 - r_2 x_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>① <div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial x_1} = 0 \\Rightarrow P \\cdot \\frac{\\partial f}{\\partial x_1} - r_1 = 0 \\Rightarrow P \\cdot f_1 = r_1 \\quad (f_1: \\text{تولید نهایی نهاده اول})"} /></div></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>② <div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial x_2} = 0 \\Rightarrow P \\cdot \\frac{\\partial f}{\\partial x_2} - r_2 = 0 \\Rightarrow P \\cdot f_2 = r_2 \\quad (f_2: \\text{تولید نهایی نهاده دوم})"} /></div></p>
<div className="formula-box"><BlockMath math={"x^* = x^*(r_1, r_2, P)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(<InlineMath math={"P"} /> قیمت محصول، <InlineMath math={"r"} /> قیمت نهاده)</p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>تابع تقاضای نهاده: تقاضا برای نهاده همیشه نزولی است [در بلندمدت و کوتاه مدت] سمت تولید کننده است.</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) تقاضا برای نهاده در بلندمدت نزولی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(از شرط مرتبه اول و دوم دیفرانسیل کامل می‌گیریم و تمام مشتق اولی x دومی + مشتق دومی x اولی)</p>
<div className="formula-box"><BlockMath math={"P f_{11} dx_1 + P f_{12} dx_2 + f_1 dP = dr_1 \\Rightarrow P f_{11} dx_1 + P f_{12} dx_2 = dr_1 - f_1 dP"} /></div>
<div className="formula-box"><BlockMath math={"P f_{21} dx_1 + P f_{22} dx_2 + f_2 dP = dr_2 \\Rightarrow P f_{21} dx_1 + P f_{22} dx_2 = dr_2 - f_2 dP"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{bmatrix}\nP f_{11} & P f_{12} \\\\\nP f_{21} & P f_{22}\n\\end{bmatrix}\n\\begin{bmatrix}\ndx_1 \\\\\ndx_2\n\\end{bmatrix}\n=\n\\begin{bmatrix}\ndr_1 - f_1 dP \\\\\ndr_2 - f_2 dP\n\\end{bmatrix}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعمیم دو متغیر مستقل = کرامر</p>
<div className="formula-box"><BlockMath math={"\\begin{bmatrix}\nP f_{11} & P f_{12} \\\\\nP f_{21} & P f_{22}\n\\end{bmatrix}\n\\begin{bmatrix}\ndx_1 \\\\\ndx_2\n\\end{bmatrix}\n=\n\\begin{bmatrix}\ndr_1 - f_1 dP \\\\\ndr_2 - f_2 dP\n\\end{bmatrix}"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{vmatrix}\nP f_{11} & P f_{12} \\\\\nP f_{21} & P f_{22}\n\\end{vmatrix}\n= P^2 |H| \\quad \\text{کرامر}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بردار جواب:</strong></p>
<div className="formula-box"><BlockMath math={"dx_1 = \\frac{\\begin{vmatrix} dr_1 - f_1 dP & P f_{12} \\\\ dr_2 - f_2 dP & P f_{22} \\end{vmatrix}}{P^2 |H|}"} /></div>
<div className="formula-box"><BlockMath math={"dx_1 = \\frac{P f_{22} dr_1 - P f_{22} f_1 dP - P f_{12} dr_2 + P f_{12} f_2 dP}{P^2 |H| &gt; 0}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر <InlineMath math={"dr_2 = dP = 0"} /> آنگاه:</p>
<div className="formula-box"><BlockMath math={"dx_1 = \\frac{P f_{22} dr_1}{P^2 |H|} \\quad \\xrightarrow{\\div dr_1}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{dx_1}{dr_1} = \\frac{f_{22}}{P|H|} &lt; 0 \\quad \\text{شیب تقاضای نهاده ی اول}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{dx_2}{dr_2} = \\frac{f_{11}}{P|H|} &lt; 0 \\quad \\text{نهاده ی دوم}"} /></div>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تابع تقاضا برای نهاده [در کوتاه مدت]</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>اصل لوشاتلیه:</strong> تقاضا برای نهاده در بلندمدت با کشش‌تر از تقاضا برای نهاده در کوتاه مدت است. چون در بلندمدت تولیدکننده می‌تواند برای نهاده موردنظر جانشین پیدا کند. بنابراین در بلندمدت نسبت به قیمت نهاده حساسیت بیشتری وجود دارد. در کوتاه مدت یک نهاده ثابت است (<InlineMath math={"\\bar{x}_2"} />) پس ۱ مشتق داریم.</p>
<div className="formula-box"><BlockMath math={"Q = f(x_1, \\bar{x}_2)"} /></div>
<div className="formula-box"><BlockMath math={"\\max \\pi = P \\cdot f(x_1, \\bar{x}_2) - r_1 x_1 - r_2 \\bar{x}_2"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\pi}{\\partial x_1} = 0 \\Rightarrow P \\cdot \\frac{\\partial f}{\\partial x_1} - r_1 = 0 \\Rightarrow f_1 \\cdot P - r_1 = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دیفرانسیل کامل می‌گیریم:</p>
<div className="formula-box"><BlockMath math={"P f_{11} \\cdot dx_1 + f_1 dP - dr_1 = 0 \\quad \\xrightarrow{dP = 0}"} /></div>
<div className="formula-box"><BlockMath math={"P \\cdot f_{11} dx_1 = dr_1 \\Rightarrow \\frac{dx_1}{dr_1} = \\frac{1}{P \\cdot f_{11}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مقایسه شیب تقاضا در کوتاه مدت و بلند مدت (همواره منفی):</p>
<div className="formula-box"><BlockMath math={"\\left[ \\frac{f_{22}}{P|H|} \\le \\frac{1}{P \\cdot f_{11}} \\right] \\cdot \\frac{1}{f_{22}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جهت علامت بزرگتر:</p>
<div className="formula-box"><BlockMath math={"\\Rightarrow \\frac{1}{H} \\ge \\frac{1}{f_{22} \\cdot f_{11}} \\Rightarrow H \\le f_{11} \\cdot f_{22} \\Rightarrow f_{11} \\cdot f_{22} - f_{12}^2 \\le f_{11} \\cdot f_{22}"} /></div>
<div className="formula-box"><BlockMath math={"\\Rightarrow -f_{12}^2 \\le 0 \\Rightarrow f_{12}^2 \\ge 0"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضا برای نهاده در کوتاه مدت نزولی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضا برای نهاده در بلندمدت نزولی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>چه ارتباطی بین این دو وجود دارد؟</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضا برای نهاده در بلندمدت کم شیب تر از تقاضای نهاده در کوتاه مدت است. یعنی باکشش تر است. یعنی کاهش استفاده از نیروی کار در بلندمدت بیشتر از کاهش استفاده از نیروی کار در کوتاه مدت است. چون در بلند مدت می‌تواند عکس العمل نشان دهد. در بلندمدت تقاضا برای نهاده باکشش تر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کننده می‌تواند بر اساس تولید یا شرایط جامعه از ۳ ماه به بالا بلندمدت محسوب می‌شود مثلاً وقتی دستمزد افزایش یابد، تولید کننده می‌تواند تعدیل کند یا تصمیم دیگری بگیرد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>شیب تقاضای نهاده در کوتاه مدت &gt; شیب تقاضا در بلند مدت</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>می‌خواهیم از پاسخ برسیم به یک رابطه همیشه برقرار:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>بلند مدت:</strong></p>
<div className="formula-box"><BlockMath math={"\\frac{dx_1}{dr_1} = \\frac{f_{22}}{P|H|}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>کوتاه مدت:</strong></p>
<div className="formula-box"><BlockMath math={"\\frac{dx_1}{dr_1} = \\frac{1}{P \\cdot f_{11}}"} /></div>
<div className="formula-box"><BlockMath math={"\\left[ \\frac{f_{22}}{P|H|} \\le \\frac{1}{P \\cdot f_{11}} \\right] \\times \\left( \\frac{1}{f_{22}} \\right)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(همواره منفی - جهت علامت عوض می‌شود)</p>
<div className="formula-box"><BlockMath math={"\\frac{1}{H} \\ge \\frac{1}{f_{22} \\cdot f_{11}} \\Rightarrow H \\le f_{11} \\cdot f_{22}"} /></div>
<div className="formula-box"><BlockMath math={"f_{11} \\cdot f_{22} - f_{12}^2 \\le f_{11} \\cdot f_{22}"} /></div>
<div className="formula-box"><BlockMath math={"-f_{12}^2 \\le 0 \\Rightarrow f_{12}^2 \\ge 0 \\quad \\text{(همیشه برقرار)}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"VMP_L = w \\quad \\text{بهره وری نهایی نیروی کار : } VMP_L"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"VMP_K = r \\quad \\text{بهره وری نهایی سرمایه : } VMP_K"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>شرط بهینه:</strong> ارزش بهره وری نهایی هر عامل تولید با هزینه اش برابر باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نوع ارتباط نهاده ها با هم مهم است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) اگر استفاده از یک نهاده افزایش یابد و تولید نهایی نهاده ی دیگر کاهش یابد دو نهاده جانشین هستند.</p>
<div className="formula-box"><BlockMath math={"w \\uparrow \\Rightarrow L \\downarrow \\Rightarrow VMP_K \\uparrow \\quad \\left( \\frac{\\partial MP_i}{\\partial x_j} &lt; 0 \\right)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) اگر استفاده از یک نهاده افزایش یابد و تولید نهایی نهاده ی دیگر افزایش یابد مکمل هستند.</p>
<div className="formula-box"><BlockMath math={"w \\uparrow \\Rightarrow L \\downarrow \\Rightarrow VMP_K \\downarrow"} /></div>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>حالت اول: دو نهاده جانشین هستند</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در دستمزد <InlineMath math={"w_0"} /> قرار داریم و برخورد با منحنی، میزان اشتغال <InlineMath math={"L_A"} /> را نشان می‌دهد. دستمزد از <InlineMath math={"w_0"} /> به <InlineMath math={"w_1"} /> می‌رسد، در کوتاه مدت با کاهش دستمزد نیروی کار <InlineMath math={"L"} /> افزایش می‌یابد (<InlineMath math={"L_A \\rightarrow L_B"} />). نرخ بهره در کوتاه مدت ثابت (یک نهاده ی متغیر داریم <InlineMath math={"(r, K_1)"} />)، در کوتاه مدت سازمان نمی‌تواند با فرض جانشین بودن نهاده انتظار داریم منحنی جابجا نمی‌شود از ۱ به ۲ منتقل می‌شویم و در کوتاه مدت فقط بازدهی عامل <InlineMath math={"K"} /> کم شده است. (هزینه فرصت کم شده).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تغییر نقطه در بلند مدت <InlineMath math={"L"} /> که زیاد می‌شود وقتی دو نهاده جانشین هستند و <InlineMath math={"VMP_K"} /> جابجا می‌شود در همان نقطه میزان سرمایه کم می‌شود (<InlineMath math={"r"} /> ثابت). <InlineMath math={"VMP_K"} /> کاهش یافت و جابجایی به پایین <InlineMath math={"K"} /> کم شد <InlineMath math={"\\rightarrow"} /> <InlineMath math={"VMP_L"} /> زیاد شد و به بالا منتقل می‌گردد. حال روند تکرار می‌شود.</p>
<div className="formula-box"><BlockMath math={"w \\downarrow \\Rightarrow L_A \\rightarrow L_B \\uparrow \\xrightarrow{\\text{بلند مدت}} VMP_K \\downarrow \\xrightarrow{r_0} K \\downarrow \\xrightarrow{L \\uparrow} VMP_L \\uparrow \\Rightarrow L_B \\rightarrow L_C \\uparrow"} /></div>
<div className="formula-box"><BlockMath math={"VMP_K \\downarrow \\xrightarrow{r} K \\downarrow \\xrightarrow{L} VMP_L \\uparrow \\xrightarrow{w} L_C \\rightarrow L_D \\uparrow \\dots"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/63-diagram.svg" alt="منحنی تقاضای بلندمدت نیروی کار" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی <InlineMath math={"LRLD"} /> (Long Run Labor Demand) منحنی تقاضای بلندمدت نیروی کار است.</p>

<div className="formula-box"><BlockMath math={"\\frac{\\partial^2 Q}{\\partial x_1 \\partial x_2} = \\begin{cases} &gt; 0 & \\text{مکمل} \\\\ &lt; 0 & \\text{جانشین} \\\\ = 0 & \\text{مستقل} \\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>نتیجه گیری:</strong> کار و سرمایه جانشین یکدیگرند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بنگاه همیشه عامل ارزان‌تر را بیشتر استفاده می‌کند. تغییر قیمت یک عامل باعث تغییر مقدار مصرف دیگری می‌شود. خروجی این رفتار در بلند مدت شکل‌گیری منحنی تقاضای عوامل تولید است. مثلاً اگر <InlineMath math={"w"} /> زیاد شود، استفاده از نیروی کار، گران می‌شود بنگاه برای اینکه هزینه‌اش زیاد نشود به سمت سرمایه می‌رود پس کار با سرمایه جانشین می‌شود. اگر نرخ بازده سرمایه <InlineMath math={"r \\uparrow"} /> سرمایه <InlineMath math={"\\uparrow"} /> گران.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>دو کالا مکمل باشند:</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>وقتی دو نهاده مکمل هستند یعنی اگر فقط یک نهاده افزایش یابد دومی تغییری کم بماند و افزایش پیدا نکند، تولید زیاد نمی‌شود. تولید فقط وقتی زیاد می‌شود که هر دو با هم افزایش پیدا کنند. (نزدیک کنج منحنی)</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/64-diagram.svg" alt="منحنی‌های تولید مکمل" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>


    </div>
  );
};

export default Subpage1;
