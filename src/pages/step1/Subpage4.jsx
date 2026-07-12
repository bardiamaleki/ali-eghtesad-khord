import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>[دوگانگی]</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مفهوم دوگانگی یعنی از یک تابع با استفاده از عملیات ریاضی به تابع ۲ برسیم و بعد مجدد با یک سری عملیات و قوانین به تابع اولیه برگردیم یعنی بین دو تابع دوگانگی وجود دارد. از یکی به دیگری رسید.</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n\\text{تابع (1)} \\\\\n\\text{تابع (2)}\n\\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>می خواهیم دوگانگی بین مطلوبیت و هزینه را به دست آوریم هر چه در اقتصاد خواندیم قابل تبدیل به هم هستند. مخارج یعنی ارتباط بین قیمت ها و تقاضا و خط بودجه مخارج است.</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n\\text{Min} \\quad I = \\sum_{i=1}^{n} P_i x_i \\quad (1) \\\\\n\\text{S.t} \\quad \\bar{U} = U(x_1, x_2, \\dots, x_n)\n\\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضای جبرانی از این مدل به دست می آید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خط بودجه را <InlineMath math={"\\text{Min}"} /> می کنیم با مطلوبیت ثابت <InlineMath math={"\\bar{U}"} /> که به ما تقاضای جبرانی را می دهد بعد تقاضا را در خط بودجه قرار دهیم (توابع تقاضا را با <InlineMath math={"I"} /> نشان می دهیم یا <InlineMath math={"E"} /> نشان می دهیم).</p>
<div className="formula-box"><BlockMath math={"x_i^{CD} = x_i^{CD}(P_1, P_2, \\dots, P_n, \\bar{U})"} /></div>
<div className="formula-box"><BlockMath math={"E = \\sum_{i=1}^{n} P_i x_i^{CD} \\Rightarrow E = E(P_1, P_2, \\dots, P_n, \\bar{U})"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر تابع تقاضای جبرانی برای هر کالا را در رابطه (1) قرار دهیم به تابع مخارج می رسیم.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثال (1) جزوه ص قبل</p>
<div className="formula-box"><BlockMath math={"\\begin{aligned}\n& \\text{Min} \\quad P_1 q_1 + P_2 q_2 \\\\\n& \\text{S.t} \\quad \\bar{U} - q_1 q_2 = 0\n\\end{aligned}"} /></div>
<div className="formula-box"><BlockMath math={"\\mathcal{L} = P_1 q_1 + P_2 q_2 + \\mu (\\bar{U} - q_1 q_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تقاضای جبرانی را به دست می آوریم حل در صفحه قبل:</p>
<div className="formula-box"><BlockMath math={"q_1^{CD} = \\sqrt{\\bar{U} \\frac{P_2}{P_1}} \\quad , \\quad q_2^{CD} = \\sqrt{\\bar{U} \\frac{P_1}{P_2}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع مخارج:</p>
<div className="formula-box"><BlockMath math={"E = P_1 \\left( \\sqrt{\\bar{U} \\frac{P_2}{P_1}} \\right) + P_2 \\left( \\sqrt{\\bar{U} \\frac{P_1}{P_2}} \\right)"} /></div>
<div className="formula-box"><BlockMath math={"E = P_1^{\\frac{1}{2}} P_2^{\\frac{1}{2}} \\bar{U}^{\\frac{1}{2}} + P_2^{\\frac{1}{2}} P_1^{\\frac{1}{2}} \\bar{U}^{\\frac{1}{2}} \\Rightarrow E = 2 P_1^{\\frac{1}{2}} P_2^{\\frac{1}{2}} \\bar{U}^{\\frac{1}{2}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک مصرف کننده با توجه به مطلوبیت ثابت، از بی نهایت سبد در یک دوره به چه میزان خرج می کند [میزان خرج را نشان می دهد] چون بحث دوگانگی داریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی از تابع مخارج برسیم به مطلوبیت و از مطلوبیت به مخارج برسیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با استفاده از لم شپارد می توان از تابع مخارج به تقاضای جبرانی برسیم یعنی به مطلوبیت هم رسیده ایم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر از تابع مخارج نسبت به قیمت ها مشتق جزئی بگیرید می توان به توابع تقاضای جبرانی دسترسی پیدا کرد.</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial E}{\\partial P_i} = X_i^{CD}(P_1, P_2, \\dots, P_n) + \\sum_{i=1}^{n} P_i \\frac{\\partial X_i^{CD}}{\\partial P_i}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای رسیدن به تقاضا عبارت <InlineMath math={"\\sum_{i=1}^{n} P_i \\frac{\\partial X_i^{CD}}{\\partial P_i}"} /> صفر خواهد بود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>توابع مخارج <InlineMath math={"\\rightleftarrows"} /> تقاضای جبرانی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بررسی رفتار مصرف کننده</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial E}{\\partial P_1} = q_1^{CD} \\quad , \\quad \\frac{\\partial E}{\\partial P_2} = q_2^{CD}"} /></div>

<div className="formula-box"><BlockMath math={"y = u^n \\rightarrow y' = n u' u^{n-1}"} /></div>
<div className="formula-box"><BlockMath math={"E = 2 \\sqrt{P_1 P_2 \\bar{U}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مشتق جزئی بگیرید نسبت به <InlineMath math={"P_1"} /> باید به <InlineMath math={"q_1"} /> برسیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر نسبت به <InlineMath math={"P_2"} /> مشتق جزئی بگیریم باید برسیم به <InlineMath math={"q_2"} />.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دوگانگی را پیدا کنیم بین مخارج و تقاضای جبرانی و مطلوبیت.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[تابع مطلوبیت مستقیم]</p>
<div className="formula-box"><BlockMath math={"E = 2(P_1 P_2 \\bar{U})^{\\frac{1}{2}} = 2 P_1^{\\frac{1}{2}} P_2^{\\frac{1}{2}} \\bar{U}^{\\frac{1}{2}}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial E}{\\partial P_1} = P_2^{\\frac{1}{2}} \\bar{U}^{\\frac{1}{2}} P_1^{-\\frac{1}{2}} = \\sqrt{\\frac{P_2 \\bar{U}}{P_1}}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial E}{\\partial P_2} = (P_1 \\bar{U})^{\\frac{1}{2}} P_2^{-\\frac{1}{2}} \\rightarrow \\sqrt{\\frac{P_1 \\bar{U}}{P_2}}"} /></div>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>مبحث چهارم</h2>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>تابع مطلوبیت مستقیم:</h3>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع مطلوبیت تابعی از کالاهای <InlineMath math={"x_1, x_2, \\dots"} /> و سبد کالای مصرف کننده را نشان می دهد. در توابع تقاضای نرمال و جبرانی از آن استفاده می کنیم، اسلاتسکی.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع مطلوبیت مستقیم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی تابعی که مستقیماً با مصرف کالاها در ارتباط است و رتبه بندی شده و مقایسه ای است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مطلوبیت ذهنی / غیر قابل اندازه گیری <InlineMath math={"U(x_1, x_2, \\dots, x_n)"} /></p>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>تابع مطلوبیت غیر مستقیم: <InlineMath math={"UI"} /></h3>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>می توان از تابع مطلوبیت مستقیم، یک تابعی را به دست آورد به جای اینکه تابعی از مصرف کالاها باشد، تابعی از قیمت کالاها و درآمد مصرف کننده باشد. در واقع از قیمت می توان به تابع تقاضا رسید که:</p>
<div className="formula-box"><BlockMath math={"UI = UI(P_1, P_2, \\dots, I)"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/43-nemodar.svg" alt="نمودار توابع تقاضا" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>توابع تقاضا دو طرفه هستند:</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n\\text{خود تابع تقاضا} & x_1 = f(P_1) \\\\\n\\text{عکس تابع تقاضا} & P_1 = f(x_1)\n\\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این تابع ارزش بیشتری دارد چون قیمت های بازار را در خود دارد و درآمد را در خود دارد. متغیرهای آن وجود خارجی دارند <InlineMath math={"I"} /> و <InlineMath math={"P"} /> این تابع از تابع مطلوبیت مستقیم واقعی تر است. و ما را به کالاها ارتباط می دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نکته: باید از تابع مطلوبیت مستقیم برسیم به تابع مطلوبیت غیر مستقیم و برعکس [دوگانگی] بین مطلوبیت مستقیم و غیر مستقیم.</p>
<div className="formula-box"><BlockMath math={"\\begin{aligned}\n\\text{هدف} \\rightarrow \\text{Max} \\quad & U = U(x_1, x_2, \\dots, x_n) \\quad \\text{(مطلوبیت)} \\\\\n\\text{S.t} \\quad & I = \\sum P_i x_i \\quad \\text{(محدودیت)} \\rightarrow \\text{توابع تقاضای نرمال}\n\\end{aligned}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مشتق مرتبه اول:</p>
<div className="formula-box"><BlockMath math={"X_i^{ND} = X_i^{ND} (P_1, P_2, \\dots, P_n, I) \\rightarrow U^I = UI(P_1, P_2, \\dots, P_n, I)"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر جای مقادیر کالاها در تابع مطلوبیت مستقیم، تابع تقاضای نرمال کالاها را قرار دهیم تابعی بدست می آید که دیگر مقادیر در آن نیست (مقادیر کالاها) و قیمت کالاها و درآمد را نشان می دهد که بسیار کاربردی تر است این تابع <InlineMath math={"\\rightarrow"} /> تابع مطلوبیت غیر مستقیم</p>
<div className="formula-box"><BlockMath math={"U = U \\left[ \\overbrace{x_1 (P_1, P_2, \\dots, P_n, I)}^{\\text{تقاضا}}, \\dots, \\overbrace{x_n (P_1, P_2, \\dots, P_n, I)}^{\\text{تقاضا}} \\right]"} /></div>
<div className="formula-box"><BlockMath math={"UI = UI (P_1, P_2, \\dots, P_n, I)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابعی از قیمت و درآمد / دوگانگی وجود دارد. / هدف مصرف کننده <InlineMath math={"\\text{Min}"} /> است. با توجه به محدودیت درآمد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع مطلوبیت غیر مستقیم:</p>
<div className="formula-box"><BlockMath math={"\\begin{aligned}\n& \\text{Min} : \\quad UI(P_1, P_2, \\dots, P_n, I) \\\\\n& \\text{S.t} \\quad I = \\sum_{i=1}^{n} P_i x_i \\rightarrow \\text{تقاضا}\n\\end{aligned}"} /></div>
<div className="formula-box"><BlockMath math={"\\text{عکس تقاضا} \\leftarrow P_i = P_i(x_1, x_2, \\dots, x_n) \\quad , \\quad \\frac{\\partial U^I}{\\partial P_1} = MU_1 \\text{ [قیمت]}"} /></div>
<div className="formula-box"><BlockMath math={"UI = UI \\left[ P_1(x_1, x_2, \\dots, x_n), \\dots, P_n(x_1, x_2, \\dots, x_n) \\right]"} /></div>
<div className="formula-box"><BlockMath math={"\\downarrow"} /></div>
<div className="formula-box"><BlockMath math={"U = U(x_1, x_2, \\dots, x_n) \\quad \\text{تابع مطلوبیت مستقیم}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[مصرف کالاها <InlineMath math={"\\text{Max}"} /> هدف] <InlineMath math={"\\rightarrow"} /> هدف در تابع مطلوبیت مستقیم</p>
<div className="formula-box"><BlockMath math={"\\begin{aligned}\n& P_1 = a - x_1 \\rightarrow \\text{شیب} \\\\\n& x_1 = a - P_1 \\rightarrow \\text{کشش}\n\\end{aligned}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>توابع عکس تقاضا را در تابع مطلوبیت غیر مستقیم قرار می دهیم که به تابع مطلوبیت مستقیم می رسیم <InlineMath math={"\\leftarrow"} /> دوگانگی بین مطلوبیت مستقیم و مطلوبیت غیر مستقیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سوال:</p>
<div className="formula-box"><BlockMath math={"\\begin{aligned}\n& \\text{Max} \\quad U = q_1 q_2 \\\\\n& \\text{S.t} \\quad I = P_1 q_1 + P_2 q_2\n\\end{aligned}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هدف از تابع مطلوبیت مستقیم بالا برسیم به تابع مطلوبیت غیر مستقیم و برعکس.</p>
<div className="formula-box"><BlockMath math={"MU_1 = \\frac{\\partial U}{\\partial q_1} \\quad , \\quad MU_2 = \\frac{\\partial U}{\\partial q_2}"} /></div>
<div className="formula-box"><BlockMath math={"\\mathcal{L} = q_1 q_2 + \\lambda (I - P_1 q_1 - P_2 q_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تعادل:</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_1} = 0 \\Rightarrow q_2 - \\lambda P_1 = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_2} = 0 \\Rightarrow q_1 - \\lambda P_2 = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{q_2}{q_1} = \\frac{P_1}{P_2} \\leadsto q_2 = \\frac{P_1}{P_2} q_1 \\quad \\text{(در خط بودجه قرار می دهیم)}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 0 \\Rightarrow I - P_1 q_1 - P_2 q_2 = 0 \\leadsto I - P_1 q_1 - P_2 \\left( \\frac{P_1}{P_2} \\right) q_1 = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\Rightarrow q_1^{ND} = \\frac{I}{2 P_1} \\quad , \\quad q_2^{ND} = \\frac{I}{2 P_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این دو تا <InlineMath math={"q_1, q_2"} /> در تابع <InlineMath math={"U"} /> بالا، توابع تقاضای <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> را قرار می دهیم:</p>
<div className="formula-box"><BlockMath math={"U = q_1 q_2 \\Rightarrow UI = \\left( \\frac{I}{2 P_1} \\right) \\left( \\frac{I}{2 P_2} \\right) \\rightarrow UI = \\frac{I^2}{4 P_1 P_2} \\quad \\text{مطلوبیت غیر مستقیم}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مطلوبیت غیرمستقیم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مشتق از تابع مطلوبیت غیرمستقیم می گیریم <InlineMath math={"\\rightarrow (\\text{Min})"} /> با محدودیت همان درآمدمان [معکوس تقاضا به دست می آید <InlineMath math={"P = f(x)"} />] و بعد عکس تقاضاها را در مطلوبیت غیرمستقیم قرار می دهیم.</p>
<div className="formula-box"><BlockMath math={"\\begin{cases}\n\\text{Min} \\quad & UI = \\frac{I^2}{4 P_1 P_2} \\\\\n\\text{S.t} \\quad & I = P_1 q_1 + P_2 q_2\n\\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"Z = \\frac{1}{4} I^2 P_1^{-1} P_2^{-1} + \\mu (I - P_1 q_1 - P_2 q_2) \\quad \\text{[متغیرها قیمت است]}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نقطه تعادل:</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial Z}{\\partial P_1} = 0 \\Rightarrow -\\frac{1}{4} I^2 P_1^{-2} P_2^{-1} - \\mu q_1 = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial Z}{\\partial P_2} = 0 \\Rightarrow -\\frac{1}{4} I^2 P_1^{-1} P_2^{-2} - \\mu q_2 = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با تقسیم دو رابطه بر یکدیگر:</p>
<div className="formula-box"><BlockMath math={"\\frac{P_2}{P_1} = \\frac{q_1}{q_2} \\Rightarrow P_2 = \\frac{q_1}{q_2} P_1 \\quad \\text{(در خط بودجه قرار می دهیم)}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial Z}{\\partial \\mu} = 0 \\Rightarrow I - P_1 q_1 - P_2 q_2 = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مطلوبیت مماس می شود به خط بودجه / مفهوم نقطه تعادل در هر دو تابع معکوس تغییر نمی کند.</p>
<div className="formula-box"><BlockMath math={"I - P_1 q_1 - \\frac{q_1}{q_2} (P_1) q_2 = 0 \\Rightarrow I = 2 P_1 q_1"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معکوس تقاضا:</p>
<div className="formula-box"><BlockMath math={"P_1^* = \\frac{I}{2 q_1} \\quad , \\quad P_2^* = \\frac{I}{2 q_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با جایگذاری سایر قیمت ها در مطلوبیت غیرمستقیم قرار می دهیم:</p>
<div className="formula-box"><BlockMath math={"UI = \\frac{I^2}{4 P_1 P_2} \\Rightarrow UI = \\frac{I^2}{4 \\left( \\frac{I}{2 q_1} \\right) \\left( \\frac{I}{2 q_2} \\right)} \\Rightarrow U = q_1 q_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>چون تابع برحسب <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> است باید <InlineMath math={"P_1"} /> و <InlineMath math={"P_2"} /> را به دست آوریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از غ.م <InlineMath math={"\\rightarrow"} /> م باید <InlineMath math={"\\text{Min}"} /> کنیم مطلوبیت غیرمستقیم را با محدودیت (بودجه) درآمد <InlineMath math={"\\leftarrow"} /> مجهول <InlineMath math={"P_1"} /> و <InlineMath math={"P_2"} /> ، <InlineMath math={"\\mu"} /> (نسبت به مجهول ها مشتق می گیریم).</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>انواع تابع مطلوبیت</h2>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>۱- تابع مطلوبیت هموتتیک (متجانس)</h3>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابعی است که شیب منحنی بی تفاوتی به دست آمده از این توابع در طول هر شعاعی که از مبدأ مختصات (مبدأ) به این منحنی ها رسم می شود ثابت است و هم چنین نرخ نهایی جانشینی مصرف در این توابع، تابعی است از نسبت کالاها <InlineMath math={"(x_1, x_2)"} />.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/47-nemodar.svg" alt="نمودار تابع مطلوبیت هموتتیک" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<div className="formula-box"><BlockMath math={"\\tan \\alpha = \\frac{AH}{OH} = \\frac{x_2}{x_1}"} /></div>
<div className="formula-box"><BlockMath math={"\\text{۲) } MRS = f\\left(\\frac{x_2}{x_1}\\right)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>MRS: شیب نقاط روی منحنی است <InlineMath math={"\\leftarrow"} /> شیب منحنی بی تفاوتی.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مقدار مطلق کالاها نیست مقادیر نسبی کالاهاست (MRS).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر تابعی هموتتیک باشد، قطعاً کشش درآمدی آن برابر یک است و یعنی درآمد مصرف آن حتماً خطی است.</p>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>۲- تابع مطلوبیت همگن</h3>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابعی است که اگر مقادیر تابع را به میزان مشخص تغییر دهیم <InlineMath math={"(\\lambda)"} /> برابر شود، کل تابع <InlineMath math={"\\lambda^\\alpha"} /> برابر می شود به توان <InlineMath math={"\\alpha"} /> درجه همگنی گفته می شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یا اگر مصرف کالا را به یک میزان تغییر دهیم، مطلوبیت چه تغییری پیدا می کند.</p>
<div className="formula-box"><BlockMath math={"U = U(x_1, x_2)"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{aligned}\n& x_1 = \\lambda x_1 \\\\\n& x_2 = \\lambda x_2\n\\end{aligned} \\leadsto U(\\lambda x_1, \\lambda x_2) = \\lambda^\\alpha U(x_1, x_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- بازده صعودی: <InlineMath math={"\\alpha &gt; 1"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- بازده ثابت: <InlineMath math={"\\alpha = 1"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- بازده نزولی: <InlineMath math={"\\alpha &lt; 1"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- اگر تابع مطلوبیتی همگن باشد (از هر درجه ای)، تابع مطلوبیت نهایی آن تابع همگن با درجه ی یکی کمتر است [چون مطلوبیت نهایی مشتق مطلوبیت است و یکی از توان کم می شود].</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- اگر تابع مطلوبیت همگن از هر درجه ای باشد MRS آن همگن از درجه صفر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- اگر تابع مطلوبیتی همگن باشد (از هر درجه ای) حتماً هموتتیک هم می باشد (مهم) عکس مطلب صادق نیست.</p>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>تابع مطلوبیت مجزا</h3>
<div className="formula-box"><BlockMath math={"U = f \\left[ \\sum_{i=1}^{n} U(x_i) \\right]"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثال:</p>
<div className="formula-box"><BlockMath math={"U = \\ln (x_1^\\alpha + x_2^\\beta + x_3^\\gamma)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر سه داخل <InlineMath math={"\\ln"} /> قرار گرفتند و یک تابع است. مطلوبیت نهایی کالاها به هم ارتباط پیدا می کنند.</p>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>تابع دقیقاً مجزا</h3>
<div className="formula-box"><BlockMath math={"U = f \\left[ u_1(x_1) + u_2(x_2) + u_3(x_3) + \\dots + u_n(x_n) \\right]"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثال:</p>
<div className="formula-box"><BlockMath math={"U = \\ln x_1^\\alpha + \\ln x_2^\\beta + \\ln x_3^\\gamma"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این کالاها در مطلوبیت نهایی شان با هم هیچ ارتباطی ندارند.</p>
<h3 style={{ color: "var(--secondary)", marginTop: "1.5rem", marginBottom: "1rem" }}>تابع مطلوبیت جمع پذیر (مقادیر با هم جمع شدند)</h3>
<div className="formula-box"><BlockMath math={"U = x_1^\\alpha + x_2^\\beta + x_3^\\gamma"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر تابع مجزا، یک تابع یکنواخت از تابعی جمع پذیر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر نتیجه ای که برای تابع مطلوبیت مجزا می گیریم برای تابع مطلوبیت جمع پذیر هم صدق می کند.</p>


    </div>
  );
};

export default Subpage4;
