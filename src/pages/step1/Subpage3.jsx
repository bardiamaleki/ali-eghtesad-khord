import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض می‌کنیم قیمت ها یا درآمد تغییر کنند. می‌خواهیم ببینیم مصرف کننده چگونه تغییر می‌کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالا باید خصوصیات تقاضا را با استفاده از شرط مرتبه دوم بررسی کنیم. یعنی از این معادلات (<InlineMath math={"n"} /> معادله) دیفرانسیل کامل بگیریم. (<InlineMath math={"n"} /> تا <InlineMath math={"U"} /> و <InlineMath math={"\\lambda"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از تابع <InlineMath math={"U"} /> نسبت به <InlineMath math={"x"} />ها و بقیه تغییرات را حساب می‌کنیم. <InlineMath math={"U_i - \\lambda P_i = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالای اول:</p>
<div className="formula-box"><BlockMath math={"U_{11} dx_1 + U_{12} dx_2 + \\ldots + U_{1n} dx_n - P_1 d\\lambda - \\lambda dP_1 = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالای دوم:</p>
<div className="formula-box"><BlockMath math={"U_{21} dx_1 + U_{22} dx_2 + \\ldots + U_{2n} dx_n - P_2 d\\lambda - \\lambda dP_2 = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\vdots"} /></div>
<div className="formula-box"><BlockMath math={"U_{n1} dx_1 + U_{n2} dx_2 + \\ldots + U_{nn} dx_n - P_n d\\lambda - \\lambda dP_n = 0"} /></div>
<div className="formula-box"><BlockMath math={"dI - \\sum_{i=1}^n P_i dx_i - \\sum_{i=1}^n x_i dP_i = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"n+1"} /> معادله و <InlineMath math={"n+1"} /> مجهول <InlineMath math={"\\leftarrow"} /> فرم ماتریسی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بردار متغیرهای <InlineMath math={"I"} /> و <InlineMath math={"P"} /> معلوم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بردار مجهول ها</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ماتریس ضرایب مجهول</p>
<div className="formula-box"><BlockMath math={"\\begin{bmatrix} U_{11} & U_{12} & \\ldots & U_{1n} & -P_1 \\\\ U_{21} & U_{22} & \\ldots & U_{2n} & -P_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ U_{n1} & U_{n2} & \\ldots & U_{nn} & -P_n \\\\ -P_1 & -P_2 & \\ldots & -P_n & 0 \\end{bmatrix} \\begin{bmatrix} dx_1 \\\\ dx_2 \\\\ \\vdots \\\\ dx_n \\\\ d\\lambda \\end{bmatrix} = \\begin{bmatrix} \\lambda dP_1 \\\\ \\lambda dP_2 \\\\ \\vdots \\\\ \\lambda dP_n \\\\ -dI + \\sum x_i dP_i \\end{bmatrix}"} /></div>
<div className="formula-box"><BlockMath math={"AX = B"} /></div>
<div className="formula-box"><BlockMath math={"X = A^{-1} B"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>می‌خواهیم ببینیم تغییر قیمت کالاها و درآمد تقاضای ما را چگونه تغییر می‌دهد آیا فقط تغییر خود قیمت کالا است که سبب تغییر تقاضا می‌شود یا اگر قیمت سایر کالاها هم تغییر کند، باعث تغییر تقاضا می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معادلات اسلاتسکی تغییرات را به صورت کلی و به سمت واقعیت بررسی کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای این کار یک سری فروض در نظر می‌گیرد.</p>
<div className="formula-box"><BlockMath math={"\\begin{bmatrix} dx_1 \\\\ dx_2 \\\\ \\vdots \\\\ dx_j \\\\ \\vdots \\\\ dx_n \\\\ d\\lambda \\end{bmatrix} = \\begin{bmatrix} C_{11} & C_{12} & \\ldots & C_{1n} & C_{(1)(n+1)} \\\\ C_{21} & C_{22} & \\ldots & C_{2n} & C_{(2)(n+1)} \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ C_{j1} & C_{j2} & \\ldots & C_{jn} & C_{(j)(n+1)} \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ C_{n1} & C_{n2} & \\ldots & C_{nn} & C_{(n)(n+1)} \\\\ C_{(n+1)(1)} & C_{(n+1)(2)} & \\ldots & C_{(n+1)(n)} & C_{(n+1)(n+1)} \\end{bmatrix} \\begin{bmatrix} \\lambda dP_1 \\\\ \\lambda dP_2 \\\\ \\vdots \\\\ \\lambda dP_j \\\\ \\vdots \\\\ \\lambda dP_n \\\\ -dI + \\sum x_i dP_i \\end{bmatrix}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ماتریس فرضی (معکوس ماتریس بالایی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>سطر فرضی <InlineMath math={"j"} /> و <InlineMath math={"h"} /> را در نظر می‌گیریم. در سطر فرضی در نظر می‌گیرد هر سطر تک تک درایه ها در ستون های ماتریس بعدی ضرب می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر مستقیم تغییر قیمت : <InlineMath math={"C_{jj} \\lambda dP_j"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر قدرت خرید: <InlineMath math={"C_{(j)(n+1)} (-dI + \\sum x_i dP_i)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معادله اصلی:</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} dx_j = C_{j1} \\lambda dP_1 + C_{j2} \\lambda dP_2 + \\ldots + C_{(j)(n+1)} \\left(-dI + \\sum x_i dP_i\\right) \\\\ dx_h = C_{h1} \\lambda dP_1 + C_{h2} \\lambda dP_2 + \\ldots + C_{(h)(n+1)} \\left(-dI + \\sum x_i dP_i\\right) \\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>قیمت خود کالا روی تقاضایش تاثیر دارد ولی آیا اگر:</p>
<div className="formula-box"><BlockMath math={"dP_j \\neq 0 \\qquad dP_i = 0 \\qquad dI = 0"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>می‌خواهیم در این بررسی سطر فرضی قیمت کالای <InlineMath math={"j"} /> را روی تقاضای یک کالا و سایر کالاها ببینیم اثر جانشینی و درآمدی را در این معادلات پیدا کنیم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳ فرض در نظر می‌گیریم می‌خواهیم ببینیم تغییر قیمت کالای <InlineMath math={"j"} /> چه اثری به روی تقاضای خودش و همچنین چه اثری به روی تقاضای کالای <InlineMath math={"h"} /> دارد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دسته اول:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تقاضای نرمال، اثر کل همان تغییر قیمت خود کالا بود باقی صفر (بقیه ی کالاها)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>همه تغییرات صفر به غیر از خود کالا</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هیچ کالایی رو تغییر نمی‌دهد. تغییر نمی‌کند. فقط قیمت خود کالا تغییر می‌کند.</p>
<div className="formula-box"><BlockMath math={"dP_i = dI = 0 \\qquad dP_j \\neq 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر کل:</p>
<div className="formula-box"><BlockMath math={"dx_j = C_{jj} \\cdot \\lambda dP_j + C_{(j)(n+1)} \\cdot (x_j dP_j)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(<InlineMath math={"C_{jj} \\cdot \\lambda dP_j"} /> اثر مستقیم تغییر قیمت است)</p>
<div className="formula-box"><BlockMath math={"dx_h = C_{hj} \\cdot \\lambda dP_j + C_{(h)(n+1)} \\cdot (x_j dP_j)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>طرفین رابطه را به <InlineMath math={"dP_j"} /> تقسیم کنیم می‌شود اثر تغییر قیمت کالا روی خودش که شامل دو اثر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) تغییر قیمت کالا روی خودش از دو بخش تشکیل شده است. از طرفی در معادله ی پایین قیمت کالا هم روی تقاضای خودش و هم تقاضای سایر کالاها تاثیر می‌گذارد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>گوشت و مرغ <InlineMath math={"\\leftarrow"} /> تقاضای گوشت <InlineMath math={"\\uparrow"} /> <InlineMath math={"+"} /> تاثیر روی بقیه ی اقلام سبد کالایی <InlineMath math={"\\downarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با تغییر قیمت یک کالا در طول زمان روی تقاضای سایر کالاها تاثیر می‌گذارد برخی کالاها سریع اثر می‌گیرد و برخی کالاها دیرتر اثر می‌گیرند.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر تغییر قیمت = اثر جانشینی + اثر قدرت خرید (اثر درآمدی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) تغییر قیمت کالا روی خودش (اثر جانشینی و اثر درآمدی):</p>
<div className="formula-box"><BlockMath math={"\\frac{dx_j}{dP_j} = C_{jj} \\cdot \\lambda + C_{(j)(n+1)} \\cdot x_j"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) تغییر قیمت کالا روی سایر کالاها:</p>
<div className="formula-box"><BlockMath math={"\\frac{dx_h}{dP_j} = C_{hj} \\cdot \\lambda + C_{(h)(n+1)} \\cdot x_j"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>می‌خواهیم بدانیم کدام اثر درآمدی است؟ و کدام اثر جانشینی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دسته دوم فروض</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>گفتیم برای اینکه تقاضای جبرانی را پیدا کنیم یک درآمدی بهش بدیم یا یک درآمدی را ازش بگیریم <InlineMath math={"[ dI = x_j dP_j ]"} /> خط بودجه جدید مماس بر منحنی بی تفاوتی قدیم به موازات خط بودجه قدیم درآمد را به میزان <InlineMath math={"dI"} /> تغییر می‌دهیم تا قدرت خرید مصرف کننده (مطلوبیت اولیه) ثابت بماند تنها اثر درآمدی حذف می‌شود و فقط اثر جانشینی باقی می‌ماند.</p>
<div className="formula-box"><BlockMath math={"dI = x_j dP_j \\leadsto \\begin{cases} dP_j \\neq 0 \\\\ dP_i = 0 \\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در معادلات پایین به جای <InlineMath math={"dI"} /> مقدار قرار می‌دهیم (<InlineMath math={"- x_j dP_j"} />) (درآمد را کم می‌کنیم)</p>
<div className="formula-box"><BlockMath math={"dx_j = C_{jj} \\cdot \\lambda dP_j + C_{(j)(n+1)} \\cdot (-x_j dP_j + x_j dP_j)"} /></div>
<div className="formula-box"><BlockMath math={"dx_h = C_{hj} \\cdot \\lambda dP_j + C_{(h)(n+1)} \\cdot (-x_j dP_j + x_j dP_j)"} /></div>
<div className="formula-box"><BlockMath math={"\\left. \\frac{dx_j}{dP_j} \\right|_{\\bar{U}} = C_{jj} \\cdot \\lambda \\leadsto \\text{اثر جانشینی}"} /></div>
<div className="formula-box"><BlockMath math={"\\left. \\frac{dx_h}{dP_j} \\right|_{\\bar{U}} = C_{hj} \\cdot \\lambda"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معادلات اسلاتسکی : یعنی تغییر یک کالا روی خودش از دو اثر تشکیل شده</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) اثر جانشینی یا مطلوبیت ثابت ۲) اثر درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ب) تغییر قیمت یک کالا نه روی سایر کالاها که می شود جانشین یا اثر به تقاضای جبرانی دارد و اثر درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جایگذاری (۱) در (۲)</p>
<div className="formula-box"><BlockMath math={"\\frac{dx_j}{dP_j} = \\left. \\frac{dx_j}{dP_j} \\right|_{\\bar{U}} + C_{(j)(n+1)} \\cdot x_j \\quad (3)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{dx_h}{dP_j} = \\left. \\frac{dx_h}{dP_j} \\right|_{\\bar{U}} + C_{(h)(n+1)} \\cdot x_j"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دسته ی سوم فروض دوباره در نظر گرفته شود:</p>
<div className="formula-box"><BlockMath math={"dP_i = dP_j = 0 \\qquad dI \\neq 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در معادلات اصلی همه صفر و معادلات زیر باقی می ماند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این ضریب بیانگر حساسیت تقاضاست به تغییر در درآمد.</p>
<div className="formula-box"><BlockMath math={"dx_j = - C_{(j)(n+1)} \\cdot dI \\quad \\begin{cases} \\frac{dx_j}{dI} = - C_{(j)(n+1)} \\\\ \\frac{dx_h}{dI} = - C_{(h)(n+1)} \\end{cases} \\quad (4)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر کل تغییر قیمت = اثر جانشینی با مطلوبیت ثابت + اثر درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معادلات اسلاتسکی:</p>
<div className="formula-box"><BlockMath math={"\\frac{dx_j}{dP_j} = \\left. \\frac{dx_j}{dP_j} \\right|_{\\bar{U}} + \\left( - \\frac{dx_j}{dI} \\cdot x_j \\right)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{dx_h}{dP_j} = \\left. \\frac{dx_h}{dP_j} \\right|_{\\bar{U}} + \\left( - \\frac{dx_h}{dI} \\cdot x_j \\right)"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نتیجه ی مهم : معادلات اسلاتسکی ارتباط بین تقاضای مارشالی و تقاضای هیکسی را برقرار می کند و نشان می دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر کل = اثر جانشینی + اثر درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تمامی فروض روی معادله ی اصلی صورت می گیرد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر جانشینی همیشه منفی / اثر درآمدی بستگی دارد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر کالا عادی باشد تقاضا عادی است و کالا نرمال است. یعنی تغییر قیمت کالا باعث کاهش تقاضای آن کالا می شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالای عادی است - کالای پست</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر درآمدی <InlineMath math={"\\frac{dx_j}{dI} &gt; 0 \\leadsto \\frac{dx_j}{dP_j} &lt; 0"} /> اثر جانشینی عادی و نرمال اثر درآمدی مثبت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر کالا پست باشد یعنی اثر درآمدی منفی است <InlineMath math={"[ - \\times - ]"} /> [منفی]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر جانشینی <InlineMath math={"+"} /> اثر درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این صورت دو حالت داریم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{dx_j}{dI} &lt; 0"} /> اثر درآمدی منفی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) کالای پست عادی <InlineMath math={"\\leadsto \\frac{dx_j}{dP_j} &lt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"|"} />اثر درآمدی<InlineMath math={"|"} /> <InlineMath math={"&lt;"} /> <InlineMath math={"|"} />اثر جانشینی<InlineMath math={"|"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) کالای گیفن (نقض قانون تقاضا) فقط در این حالت قانون تقاضا نقض می شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر درآمدی بر جانشینی غلبه می کند <InlineMath math={"\\leadsto \\frac{dx_j}{dP_j} &gt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"|"} />اثر درآمدی<InlineMath math={"|"} /> <InlineMath math={">"} /> <InlineMath math={"|"} />اثر جانشینی<InlineMath math={"|"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در اقتصاد نمی توان کالایی را ۱۰۰٪ پست نامید. چون سلیقه و عادت رفتار مصرف کننده عامل مهمی در رفتار مصرف کننده است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالای نرمال: <InlineMath math={"\\frac{dx}{dI} &gt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالای پست: <InlineMath math={"\\frac{dx}{dI} &lt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>گیفن: <InlineMath math={"\\frac{dx}{dP} &gt; 0"} /> (اثر جانشینی <InlineMath math={"&lt;"} /> اثر درآمدی)</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تبدیل معادله اسلاتسکی به کشش [کشش بدون واحد هستند و مقایسه آن ها راحت تر است]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کشش قیمتی تقاضا = <InlineMath math={"\\varepsilon"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تغییر قیمت کالا چه تاثیری روی تقاضا می گذارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\varepsilon_j = \\bar{\\varepsilon}_j - w_j \\times \\eta_j"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\bar{\\varepsilon}_j"} />: کشش قیمتی روی تقاضای جبرانی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\eta_j"} />: کشش درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تبدیل معادلات اسلاتسکی به کشش:</p>
<div className="formula-box"><BlockMath math={"\\left[ \\frac{dx_j}{dP_j} = \\left. \\frac{dx_j}{dP_j} \\right|_{\\bar{U}} + \\left( - \\frac{dx_j}{dI} \\cdot x_j \\right) \\right] \\times \\frac{P_j}{x_j}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرمول کشش:</p>
<div className="formula-box"><BlockMath math={"\\varepsilon = \\frac{\\partial x}{\\partial P} \\cdot \\frac{P}{x}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{dx_j}{dP_j} \\cdot \\frac{P_j}{x_j} = \\left. \\frac{dx_j}{dP_j} \\right|_{\\bar{U}} \\cdot \\frac{P_j}{x_j} + \\left( - \\frac{dx_j}{dI} \\cdot x_j \\right) \\cdot \\frac{P_j}{x_j}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کشش قیمتی تقاضا (مارشالی) = کشش قیمتی روی منحنی تقاضای جبرانی (جانشینی) + اثر درآمدی</p>
<div className="formula-box"><BlockMath math={"\\varepsilon_j = \\bar{\\varepsilon}_j + \\left( - \\frac{dx_j}{dI} \\right) \\cdot \\frac{P_j \\cdot x_j}{x_j} \\cdot \\left( \\frac{I}{I} \\right)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(عبارت <InlineMath math={"\\frac{I}{I}"} /> را اضافه می کنیم)</p>
<div className="formula-box"><BlockMath math={"\\varepsilon_j = \\bar{\\varepsilon}_j + \\underbrace{\\left( \\frac{-dx_j}{dI} \\cdot \\frac{I}{x_j} \\right)}_{\\text{کشش درآمدی } \\eta_j} \\cdot \\underbrace{\\left( \\frac{P_j x_j}{I} \\right)}_{\\text{سهم مخارج کالای j از درآمد}}"} /></div>
<div className="formula-box"><BlockMath math={"\\varepsilon_j = \\bar{\\varepsilon}_j - w_j \\cdot \\eta_j"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\varepsilon_j"} />: کشش قیمتی تقاضا مارشالی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\bar{\\varepsilon}_j"} />: کشش قیمتی تقاضای جبرانی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"w_j"} />: سهم کالای j در درآمد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\eta_j"} />: کشش درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کشش قیمتی تقاضا برابر است با کشش قیمتی تقاضای جبرانی منهای کشش درآمدی ضرب در سهم مخارج کالا (<InlineMath math={"w_j"} />). پس منحنی تقاضای معمولی نسبت به منحنی تقاضای جبرانی دارای کشش بیشتری است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"w_j"} /> = هزینه های صرف شده برای خرید کالای <InlineMath math={"x_j"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط جمعی کونات : با استفاده از خط بودجه کشش ها را به دست آوریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از خط بودجه دیفرانسیل کامل می گیریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض (۱): <InlineMath math={"dP_1 \\neq 0"} /> و بقیه صفر <InlineMath math={"\\leftarrow dP_2 = 0 \\quad , \\quad dI = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(یعنی فقط قیمت کالای <InlineMath math={"q_1"} /> تغییر کند)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض (۲): <InlineMath math={"dP_2 \\neq 0"} /> و بقیه صفر <InlineMath math={"\\leftarrow dP_1 = 0 \\quad , \\quad dI = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض (۳): <InlineMath math={"dI \\neq 0"} /> و قیمت ها مساوی صفر <InlineMath math={"\\leftarrow dP_1 = 0 \\quad , \\quad dP_2 = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(یعنی قیمت ها ثابت فقط درآمد تغییر می کند)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در فرض (۱) یعنی تغییر قیمت کالا روی خودش را محاسبه کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کشش عمومی قیمتی (خودی و غیر خودی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض (۲) تغییر قیمت کالای دوم روی خودش (و سایر کالاها) چه تاثیری دارد؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض (۳) قیمت ها صفر درآمد را متغیر می کنیم. یعنی تغییر درآمد با فرض اینکه قیمت ها تغییر نکند چه تاثیری در قدرت خرید من دارد. (کشش درآمدی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جمع کشش های قیمتی چه خودی و چه غیر خودی با توجه به سهمشان در تقاضای نرمال برابر است با سهم کالایی که قیمتش تغییر کرده (<InlineMath math={"-w_1"} /> یا <InlineMath math={"-P_1"} />).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>عین همین کار را می توان برای فرض دوم و سوم انجام داد.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>چون همه قیمت ها هم مقدار ممکن است تغییر کنند از کل رابطه دیفرانسیل می گیریم.</p>
<div className="formula-box"><BlockMath math={"I = P_1 q_1 + P_2 q_2 \\leadsto dI = P_1 dq_1 + q_1 dP_1 + q_2 dP_2 + P_2 dq_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض: <InlineMath math={"dI = dP_2 = 0 \\qquad dP_1 \\neq 0"} /></p>
<div className="formula-box"><BlockMath math={"\\leadsto P_1 dq_1 + q_1 dP_1 + P_2 dq_2 = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقسیم بر <InlineMath math={"dP_1"} />:</p>
<div className="formula-box"><BlockMath math={"\\div dP_1 \\leadsto \\frac{P_1 dq_1}{dP_1} + q_1 + \\frac{P_2 dq_2}{dP_1} = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>چون می خواهیم بدانیم اگر قیمت کالای اول تغییر کند تقاضای کالای دوم چه مقدار تغییر می کند؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر چیزی که کم داشتیم را ضرب و تقسیم می کنیم تا تبدیل به کشش کنیم (ضرب در <InlineMath math={"\\frac{q_1}{q_1}"} /> و ضرب در <InlineMath math={"\\frac{q_2}{q_2} \\cdot \\frac{P_1}{P_1}"} />):</p>
<div className="formula-box"><BlockMath math={"\\left( \\frac{P_1}{q_1} \\cdot \\frac{dq_1}{dP_1} \\right) \\cdot q_1 + q_1 + \\frac{dq_2}{dP_1} \\cdot \\left( \\frac{P_2 q_2}{P_1} \\cdot \\frac{P_1}{q_2} \\right) = 0"} /></div>
<div className="formula-box"><BlockMath math={"[ q_1 \\cdot \\varepsilon_{11} + q_1 + \\varepsilon_{21} \\cdot \\frac{P_2 q_2}{P_1} = 0 ] \\div \\frac{P_1}{I}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر تغییر قیمت کالا روی خودش (تقاضای خودش) <InlineMath math={"\\leftarrow \\varepsilon_{11}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضای کالای اول روی دوم <InlineMath math={"\\leftarrow \\varepsilon_{21}"} /> (غیر خودی) کشش متقاطع</p>
<div className="formula-box"><BlockMath math={"\\underbrace{\\left( \\frac{P_1 q_1}{I} \\right)}_{w_1} \\cdot \\varepsilon_{11} + \\underbrace{\\frac{P_1 q_1}{I}}_{w_1} + \\underbrace{\\frac{P_2 q_2}{I}}_{w_2} \\cdot \\varepsilon_{21} = 0"} /></div>
<div className="formula-box"><BlockMath math={"w_1 \\cdot \\varepsilon_{11} + w_1 + w_2 \\cdot \\varepsilon_{21} = 0 \\leadsto w_1 \\cdot \\varepsilon_{11} + w_2 \\cdot \\varepsilon_{21} = -w_1"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط جمعی کونات:</p>
<div className="formula-box"><BlockMath math={"\\sum_{i=1}^{n} w_i \\varepsilon_{ij} = -w_j"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>توضیحات کشش ها:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\varepsilon_{11} = \\frac{dq_1}{dP_1} \\times \\frac{P_1}{q_1}"} /> : یعنی اگر قیمت کالای (۱) تغییر کند تقاضای کالای (۱) چه مقدار تغییر می کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\varepsilon_{21} = \\frac{dq_2}{dP_1} \\times \\frac{P_1}{q_2}"} /> : اگر قیمت کالای (۱) تغییر کند تقاضای کالای (۲) چه مقدار تغییر می کند؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\varepsilon_{ij}"} /> : تغییر اثر قیمت کالای j بر تقاضای کالای i. اندیس اول تقاضا، اندیس دوم قیمت.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مجموع انگل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط سوم: <InlineMath math={"dP_2 = dP_1 = 0 \\qquad dI \\neq 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نکته مهم: سهم کالای اول در کشش درآمدی اش بعلاوه سهم کالای دوم در کشش درآمدی اش برابر ۱ است <InlineMath math={"\\leftarrow"} /> مجموع انگل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی مصرف کننده همزمان نمی تواند دو کالای پست یا دو کالای لوکس مصرف کند.</p>
<div className="formula-box"><BlockMath math={"I = P_1 q_1 + P_2 q_2 \\leadsto dI = P_1 dq_1 + q_1 dP_1 + q_2 dP_2 + P_2 dq_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(با توجه به صفر بودن تغییرات قیمت، <InlineMath math={"dP_1"} /> و <InlineMath math={"dP_2"} /> حذف می شوند)</p>
<div className="formula-box"><BlockMath math={"dI = P_1 dq_1 + P_2 dq_2 \\quad \\div dI \\leadsto \\frac{P_1 dq_1}{dI} + \\frac{P_2 dq_2}{dI} = 1"} /></div>
<div className="formula-box"><BlockMath math={"\\left( \\frac{P_1 q_1}{I} \\right) \\cdot \\frac{dq_1}{dI} \\cdot \\frac{I}{q_1} + \\frac{P_2 q_2}{I} \\cdot \\frac{dq_2}{dI} \\cdot \\frac{I}{q_2} = 1"} /></div>
<div className="formula-box"><BlockMath math={"w_1 \\cdot \\eta_1 + w_2 \\cdot \\eta_2 = 1"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در حالت کلی:</p>
<div className="formula-box"><BlockMath math={"\\sum_{i=1}^{n} w_i \\eta_i = 1"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دو حالت داریم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"x \\uparrow \\quad y \\downarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"x \\downarrow \\quad y \\uparrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نمی توان نقطه ای پیدا کرد که هر دو کالا کم شوند یعنی با افزایش <InlineMath math={"I"} /> مصرف از هر دو کالا کم می شود (غیرممکن است).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با درآمد <InlineMath math={"\\uparrow"} /> مصرف کننده از هر دو کالا بیشتر مصرف می کند یا یکی را بیشتر و یکی را کمتر مصرف می کند اما هرگز با افزایش درآمد هر دو کالا پست نباشد (مجموع کالاها باید ۱ باشد) یا دو کالا همزمان لوکس نمی تواند باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حتی برای ۳ کالا نمی شود هر ۳ کالا پست باشد <InlineMath math={"\\leftarrow"} /> مجموع انگل</p>


    </div>
  );
};

export default Subpage3;
