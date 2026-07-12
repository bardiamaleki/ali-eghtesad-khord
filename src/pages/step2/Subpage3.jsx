import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقسیم رابطه ۱ بر ۲:</p>
<div className="formula-box"><BlockMath math={"1 \\div 2 \\rightsquigarrow \\frac{P_1}{P_2} = \\frac{h_1}{h_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(<InlineMath math={"\\frac{h_1}{h_2}"} /> شیب P.P.C و <InlineMath math={"\\frac{P_1}{P_2}"} /> شیب منحنی درآمدی است)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تغییر در میزان تولید <InlineMath math={"q_1"} /> چه اثری روی <InlineMath math={"X"} /> دارد (<InlineMath math={"h_1"} />):</p>
<div className="formula-box"><BlockMath math={"h_1 = \\frac{1}{MP_{x_1}}"} /></div>
<div className="formula-box"><BlockMath math={"h_2 = \\frac{1}{MP_{x_2}}"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/72-isorevenue.svg" alt="منحنی امکانات تولید و خطوط درآمدی" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(دو خط درآمدی با یک منحنی امکانات تولید)</p>
<div className="formula-box"><BlockMath math={"\\frac{h_1}{h_2} = \\frac{P_1}{P_2} = \\frac{MP_{x_2}}{MP_{x_1}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(یادآوری: <InlineMath math={"MC = \\frac{w}{MP_L} = \\frac{r}{MP_K}"} />)</p>
<div className="formula-box"><BlockMath math={"\\frac{P_1}{P_2} = \\frac{MP_{x_2}}{MP_{x_1}} = \\frac{MC_1}{MC_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط مرتبه دوم (S.O.C):</p>
<div className="formula-box"><BlockMath math={"|\\bar{H}| = \\begin{vmatrix} -\\mu h_{11} & -\\mu h_{12} & -h_1 \\\\ -\\mu h_{21} & -\\mu h_{22} & -h_2 \\\\ -h_1 & -h_2 & 0 \\end{vmatrix} &gt; 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط دوم: ماتریس هشین باید مثبت باشد.</p>
<div className="formula-box"><BlockMath math={"\\mu = \\frac{\\partial TR}{\\partial X}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(درآمد نهایی تولید نهاده <InlineMath math={"X"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"*"} /> نسبت قیمت کالا برابر شد با عکس تولید نهایی آن نهاده ها <InlineMath math={"\\quad \\left( \\frac{MC_1}{MC_2} \\right)"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>حداقل استفاده از نهاده ها با درآمد ثابت</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت دوم:</p>
<div className="formula-box"><BlockMath math={"Min : X = h(q_1, q_2)"} /></div>
<div className="formula-box"><BlockMath math={"s.t \\quad \\overline{TR} = P_1 q_1 + P_2 q_2"} /></div>
<div className="formula-box"><BlockMath math={"V = h(q_1, q_2) + \\lambda [\\overline{TR} - P_1 q_1 - P_2 q_2]"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>عکس قبلی: Min امکانات تولید با درآمد ثابت.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(۲ امکانات تولید، ۱ یک خط درآمدی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرایط مرتبه اول (FOC):</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} \\frac{\\partial V}{\\partial q_1} = 0 \\rightsquigarrow \\frac{\\partial h}{\\partial q_1} - \\lambda P_1 = 0 \\qquad (1) \\\\ \\\\ \\frac{\\partial V}{\\partial q_2} = 0 \\rightsquigarrow \\frac{\\partial h}{\\partial q_2} - \\lambda P_2 = 0 \\qquad (2) \\\\ \\\\ \\frac{\\partial V}{\\partial \\lambda} = 0 \\rightsquigarrow \\overline{TR} - P_1 q_1 - P_2 q_2 = 0 \\qquad (3) \\end{cases}"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/73-min-input.svg" alt="حداقل استفاده از نهاده ها" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقسیم رابطه ۱ بر ۲:</p>
<div className="formula-box"><BlockMath math={"1 \\div 2 \\rightsquigarrow \\text{شرط تعادل} \\quad \\frac{P_1}{P_2} = \\frac{h_1}{h_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(<InlineMath math={"\\frac{P_1}{P_2}"} /> شیب منحنی درآمد و <InlineMath math={"\\frac{h_1}{h_2}"} /> شیب P.P.C است. این رابطه نشان دهنده عکس تولید نهایی نهاده <InlineMath math={"X"} /> است.)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>عین قبلی: شرط لازم هر دو رابطه یکی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط کافی (S.O.C):</p>
<div className="formula-box"><BlockMath math={"|\\bar{H}| &lt; 0"} /></div>
<div className="formula-box"><BlockMath math={"h_1 = \\frac{\\partial h}{\\partial q_1} = \\frac{1}{MP_{x_1}} \\leftarrow \\text{عکس تولید نهایی نهاده X برای کالای اول}"} /></div>
<div className="formula-box"><BlockMath math={"h_2 = \\frac{\\partial h}{\\partial q_2} = \\frac{1}{MP_{x_2}} \\leftarrow \\text{عکس تولید نهایی نهاده X برای کالای دوم}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{h_1}{h_2} = \\frac{P_1}{P_2} = \\frac{MP_{x_2}}{MP_{x_1}}"} /></div>
<div className="formula-box"><BlockMath math={"MP_L = \\frac{w}{MC} \\Rightarrow MC = \\frac{w}{MP_L} \\Rightarrow \\frac{P_1}{P_2} = \\frac{MP_{x_2}}{MP_{x_1}} = \\frac{MC_1}{MC_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ماتریس هشین در این حالت:</p>
<div className="formula-box"><BlockMath math={"S.O.C \\quad |\\bar{H}| = \\begin{vmatrix} h_{11} & h_{12} & -P_1 \\\\ h_{21} & h_{22} & -P_2 \\\\ -P_1 & -P_2 & 0 \\end{vmatrix} &lt; 0"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>حالت سوم:</strong> تولیدکننده سود را Max می کند.</p>
<div className="formula-box"><BlockMath math={"Max\\ \\pi = TR - TC = TR - r X"} /></div>
<div className="formula-box"><BlockMath math={"= P_1 q_1 + P_2 q_2 - r \\cdot h(q_1, q_2) \\qquad \\text{(چون } X = h(q_1, q_2)\\text{)}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(یک تابع داریم دوباره مشتق می گیریم چون محدودیت نداریم.)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرایط مرتبه اول (FOC):</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} \\frac{\\partial \\pi}{\\partial q_1} = 0 \\rightsquigarrow P_1 - r \\frac{\\partial h}{\\partial q_1} = 0 \\Rightarrow P_1 = r h_1 \\qquad (1) \\\\ \\\\ \\frac{\\partial \\pi}{\\partial q_2} = 0 \\rightsquigarrow P_2 - r \\frac{\\partial h}{\\partial q_2} = 0 \\Rightarrow P_2 = r h_2 \\qquad (2) \\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"1 \\div 2 \\rightsquigarrow \\frac{P_1}{P_2} = \\frac{h_1}{h_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حداکثر سود با بهینه نهاده برابر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در هر سه حالت نسبت قیمت ها برابر است با عکس تولید نهایی آن نهاده.</p>
<div className="formula-box"><BlockMath math={"\\frac{P_1}{P_2} = \\frac{MP_{x_2}}{MP_{x_1}} \\Rightarrow P_1 \\cdot MP_{x_1} = P_2 \\cdot MP_{x_2} \\Rightarrow"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضای نهاده <InlineMath math={"\\quad VMP_{x_1} = VMP_{x_2} = r"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط کافی (S.O.C):</p>
<div className="formula-box"><BlockMath math={"|H| = \\begin{vmatrix} -r h_{11} & -r h_{12} \\\\ -r h_{21} & -r h_{22} \\end{vmatrix} &gt; 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ما معکوس تابع تولید را فرض کردیم یعنی از یک نهاده برای تولید چندین محصول استفاده کردیم و این بستگی به این دارد که قیمت آن کالا در بازار چه قدر است. یعنی اینکه از هر محصول چه قدر تولید شود (یا بحث تخصیص) بستگی به قیمت آن کالاها دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>براساس نسبت قیمت کالا و نسبت تولید نهایی تقسیم بندی می شود که نهاده به سمت تولید کدام کالا اختصاص پیدا کند <InlineMath math={"\\leftarrow"} /> مفهوم محصولات مشترک.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>انواع تابع تولید</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- تابع تولید همگن: همین تابع کاب داگلاس <InlineMath math={"\\quad q = x_1^{\\frac{1}{2}} x_2^{\\frac{1}{2}}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- تابع تولید CES (تابع تولید با کشش جانشینی ثابت) (سی اس)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>تابع تولید همگن</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>قضیه ی اویلر: اگر از تابع تولید نسبت به نهاده ها مشتق جزئی بگیریم و در خود آن نهاده ضرب کنیم می رسیم به درجه ی جانشینی یا درجه ی همگن بودن آن.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نکته: مجموع کشش های تولید نسبت به دو نهاده برابر است با درجه ی همگنی.</p>
<div className="formula-box"><BlockMath math={"Q = f(x_1, x_2)"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{cases} x_1 = \\lambda x_1 \\\\ x_2 = \\lambda x_2 \\end{cases} \\rightarrow Q = f(\\lambda x_1, \\lambda x_2) = \\lambda^k f(x_1, x_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>قضیه ی اویلر بیان می کند که هر یک از عوامل تولید، دقیقاً به اندازه ی تولید نهایی خود از تولید سهم می برند البته در شرایطی که تابع تولید همگن از درجه اول باشند.</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial Q}{\\partial x_1} \\cdot x_1 + \\frac{\\partial Q}{\\partial x_2} \\cdot x_2 = k Q \\qquad (1)"} /></div>
<div className="formula-box"><BlockMath math={"MP_{x_1} \\cdot x_1 + MP_{x_2} \\cdot x_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر <InlineMath math={"k=1 \\rightsquigarrow MP_{x_1} \\cdot x_1 + MP_{x_2} \\cdot x_2 = Q"} /></p>
<div className="formula-box"><BlockMath math={"(1) \\div Q \\rightsquigarrow \\frac{\\partial Q}{\\partial x_1} \\cdot \\frac{x_1}{Q} + \\frac{\\partial Q}{\\partial x_2} \\cdot \\frac{x_2}{Q} = k"} /></div>
<div className="formula-box"><BlockMath math={"\\varepsilon_1 + \\varepsilon_2 = k"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مجموع کشش های تولید نسبت به نهاده ها با درجه ی همگنی تابع تولید برابر است.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>تابع تولید CES (تابع تولید با کشش جانشینی ثابت)</strong></p>
<div className="formula-box"><BlockMath math={"q = A [\\gamma K^{-\\rho} + (1-\\gamma) L^{-\\rho}]^{-\\frac{1}{\\rho}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"A"} />: ضریب تکنولوژی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\rho"} /> (پارامتر جانشینی): چه مقدار نیروی کار و سرمایه را در تابع تولید می توانیم جانشین کنیم (درصد جانشین)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\gamma"} />: ضریب توزیعی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>میزان جانشینی مقدار ثابتی است (کشش جانشینی) ثابت <InlineMath math={"\\sigma"} /></p>
<div className="formula-box"><BlockMath math={"\\sigma = \\frac{1}{1+\\rho}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تابع کاب داگلاس که حالت خاصی از تابع CES کشش جانشینی برابر یک است.</p>
<div className="formula-box"><BlockMath math={"q = A K^\\alpha L^\\beta \\qquad \\sigma = 1"} /></div>
<div className="formula-box"><BlockMath math={"\\sigma = \\frac{\\% \\Delta (K/L) / (K/L)}{\\% \\Delta MRTS_{L,K} / MRTS_{L,K}} = \\frac{\\text{درصد تغییر ایجاد شده در نسبت نهاده ها}}{\\text{درصد تغییر در شیب منحنی های تولید}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>ویژگی های CES</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- کشش جانشینی بین نهاده ها در این تابع حتماً باید ثابت باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- تابع CES حتماً باید همگن درجه (۱) باشد.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/76-ces-isoquants.svg" alt="انواع نمودارهای تابع تولید CES" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>مثال:</strong> نشان دهید تابع کاب داگلاس یک تابع CES است.</p>
<div className="formula-box"><BlockMath math={"Q = A K^\\alpha L^\\beta \\qquad , \\alpha + \\beta = 1"} /></div>
<div className="formula-box"><BlockMath math={"MRTS_{L,K} = \\frac{MP_L}{MP_K} = \\frac{A \\beta K^\\alpha L^{\\beta-1}}{A \\alpha K^{\\alpha-1} L^\\beta} = \\left(\\frac{\\beta}{\\alpha}\\right) \\cdot \\left(\\frac{K}{L}\\right)"} /></div>
<div className="formula-box"><BlockMath math={"\\rightarrow Ln(MRTS_{L,K}) = Ln\\left(\\frac{\\beta}{\\alpha}\\right) + Ln\\left(\\frac{K}{L}\\right)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با مشتق گیری:</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial MRTS_{L,K}}{MRTS_{L,K}} = \\frac{\\partial \\left(\\frac{K}{L}\\right)}{\\left(\\frac{K}{L}\\right)} \\Rightarrow \\frac{\\frac{\\partial \\left(\\frac{K}{L}\\right)}{\\left(\\frac{K}{L}\\right)}}{\\frac{\\partial MRTS_{L,K}}{MRTS_{L,K}}} = 1 = \\sigma"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بازارها را از کتاب خرد (۲) دکتر شاکری (بخوانید)</p>


    </div>
  );
};

export default Subpage3;
