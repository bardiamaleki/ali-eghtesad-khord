import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>طرز رسیدن از تابع تولید به تابع هزینه:</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شکل‌گیری هزینه‌های تولید بستگی به فرآیند و شکل‌گیری تولید دارد. بین تولید و هزینه رابطه عکس وجود دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MC"} /> و <InlineMath math={"MP_L"} /> دقیقاً رابطه عکس دارند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>در کوتاه مدت:</strong></p>
<div className="formula-box"><BlockMath math={"TVC = w \\cdot L"} /></div>
<div className="formula-box"><BlockMath math={"AVC = \\frac{TVC}{Q}"} /></div>
<div className="formula-box"><BlockMath math={"AVC = \\frac{w \\cdot L}{Q} = \\frac{w}{\\frac{Q}{L}} \\Rightarrow AVC = \\frac{w}{AP_L} \\quad (\\text{رابطه عکس تولید و هزینه})"} /></div>
<div className="formula-box"><BlockMath math={"MC = \\frac{\\partial TC}{\\partial Q} = \\frac{\\partial (wL)}{\\partial Q} = w \\cdot \\frac{\\partial L}{\\partial Q} \\Rightarrow MC = \\frac{w}{MP_L}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>وقتی تولید صعودی است و بازده فزاینده، با هزینه کاهنده مواجه هستیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>زمانی که بازده نزولی می‌شود، هزینه‌ها صعودی می‌شود.</p>
<div className="formula-box"><BlockMath math={"MC = \\frac{w \\cdot dL}{dQ} \\Rightarrow MC = \\frac{w}{MP_L} \\quad (\\text{رابطه عکس})"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هرگاه بازده عامل متغیر در کوتاه مدت صعودی است ما در قسمت نزولی هزینه‌ها هستیم و برعکس.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>پس بین تولید با هزینه ارتباط دارد.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/65-diagram.svg" alt="رابطه بین توابع تولید و هزینه" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>

<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>می توانیم یک دوگانگی تعریف کنیم یعنی از روی تابع تولید باید بتوانیم تابع هزینه را استخراج کنیم. یعنی بین تولید و هزینه دوگانگی وجود دارد چون بین آن ها رابطه وجود دارد.</li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تولید داده شده می خواهیم تابع هزینه را به دست آوریم:</p>
<div className="formula-box"><BlockMath math={"\\frac{MP_{X_1}}{MP_{X_2}} = \\frac{r_1}{r_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از معادله ی مسیر توسعه بنگاه استفاده می کنیم. ۱- تابع تولید را برای دو نهاده فرض می کنیم خط هزینه ما در برخورد با منحنی تولید، نقطه تعادل تولیدکننده پیدا می کنیم (نیروی کار و سرمایه). در بحث گسترش اگر بنگاه رشد کند اگر هزینه ها افزایش یابد، خط هزینه موازی به بالا منتقل می شود و با منحنی <InlineMath math={"Q'"} /> تلاقی می کند در نقطه <InlineMath math={"e'"} /> ، نقطه تعادل جدید به دست می آید. در تلاقی با منحنی تولید جدید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از وصل کردن نقاط تعادل مسیر توسعه بنگاه به دست می آید. (در فضای تولید)</p>
<div className="formula-box"><BlockMath math={"C = wL + rK"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای گسترش از طریق مسیر توسعه می توانیم مقدار نهاده <InlineMath math={"L"} /> و کمیت آن <InlineMath math={"K"} /> را به دست آوریم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\rightarrow"} /> تقاضای نهاده ها را به دست می آوریم و در خط هزینه قرار می دهیم و تابع هزینه بنگاه به دست می آید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نقطه تعادل تولیدکننده:</p>
<div className="formula-box"><BlockMath math={"e = \\frac{MP_L}{MP_K} = \\frac{P_L}{P_K}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از وصل کردن نقاط تعادلی، مسیر توسعه بنگاه به دست می آید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از رابطه اول <InlineMath math={"X_1"} /> و <InlineMath math={"X_2"} /> را به دست می آوریم و در تابع تولید قرار می دهیم و بعد مقدار نهاده ها را بر حسب قیمت آن ها به دست می آوریم <InlineMath math={"\\rightarrow"} /> تقاضای نهاده <InlineMath math={"\\rightarrow"} /> خط هزینه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>روش رسیدن از تابع تولید به تابع هزینه با استفاده از مسیر توسعه بنگاه:</p>
<div className="formula-box"><BlockMath math={"TC = \\sum_{i=1}^n r_i X_i"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/66-expansion-path.svg" alt="نمودار مسیر توسعه" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>روند:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- مسیر توسعه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- تقاضای نهاده</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- در تابع هزینه قرار می دهیم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثال:</p>
<div className="formula-box"><BlockMath math={"q = x_1^{\\frac{1}{2}} x_2^{\\frac{1}{2}}"} /></div>
<div className="formula-box"><BlockMath math={"C = ?"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید نهایی نهاده:</p>
<div className="formula-box"><BlockMath math={"\\frac{MP_{X_1}}{MP_{X_2}} = \\frac{r_1}{r_2}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مسیر توسعه (از لاگرانژ هم برویم فرقی ندارد.)</p>
<div className="formula-box"><BlockMath math={"MP_{X_1} = \\frac{1}{2} x_1^{-\\frac{1}{2}} x_2^{\\frac{1}{2}}"} /></div>
<div className="formula-box"><BlockMath math={"MP_{X_2} = \\frac{1}{2} x_1^{\\frac{1}{2}} x_2^{-\\frac{1}{2}}"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\frac{1}{2} x_1^{-\\frac{1}{2}} x_2^{\\frac{1}{2}}}{\\frac{1}{2} x_1^{\\frac{1}{2}} x_2^{-\\frac{1}{2}}} = \\frac{r_1}{r_2} \\rightsquigarrow \\frac{x_2}{x_1} = \\frac{r_1}{r_2} \\quad \\text{معادله مسیر توسعه}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تابع تولید یک بار <InlineMath math={"x_1"} /> و یک بار <InlineMath math={"x_2"} /> را جایگزین می کنیم تا توابع تقاضای نهاده به دست بیاید.</p>
<div className="formula-box"><BlockMath math={"X_2 = \\frac{r_1 x_1}{r_2} \\qquad X_1 = \\frac{x_2 r_2}{r_1}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با جایگذاری در <InlineMath math={"q = x_1^{\\frac{1}{2}} x_2^{\\frac{1}{2}}"} /> :</p>
<div className="formula-box"><BlockMath math={"q = \\left( \\frac{x_2 r_2}{r_1} \\right)^{\\frac{1}{2}} \\cdot x_2^{\\frac{1}{2}} \\rightsquigarrow q = \\left( \\frac{r_2}{r_1} \\right)^{\\frac{1}{2}} x_2"} /></div>
<div className="formula-box"><BlockMath math={"X_2^* = q \\left( \\frac{r_1}{r_2} \\right)^{\\frac{1}{2}} \\quad \\text{تقاضای نهاده دوم}"} /></div>
<div className="formula-box"><BlockMath math={"X_1^* = q \\left( \\frac{r_2}{r_1} \\right)^{\\frac{1}{2}} \\quad \\text{تقاضای نهاده اول}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تابع هزینه، تقاضای نهاده ها را قرار می دهیم:</p>
<div className="formula-box"><BlockMath math={"TC = r_1 X_1^* + r_2 X_2^* \\rightsquigarrow TC = r_1 \\left( q \\left( \\frac{r_2}{r_1} \\right)^{\\frac{1}{2}} \\right) + r_2 \\left( q \\left( \\frac{r_1}{r_2} \\right)^{\\frac{1}{2}} \\right)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(فلش ها نشان می دهند که <InlineMath math={"X_1^*"} /> تقاضای نهاده <InlineMath math={"X_1"} /> و <InlineMath math={"X_2^*"} /> تقاضای نهاده <InlineMath math={"X_2"} /> است.)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع هزینه که قیمت نهاده ها در آن وجود دارد:</p>
<div className="formula-box"><BlockMath math={"C = 2 q r_1^{\\frac{1}{2}} r_2^{\\frac{1}{2}}"} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای اینکه از تابع هزینه به تابع تولید برسیم از لم شپارد استفاده می کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) از تابع هزینه نسبت به قیمت نهاده ها مشتق گرفته و برابر نهاده ها قرار می دهیم. (تقاضای هیکسی)</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial TC}{\\partial r_1} = X_1 \\qquad (1)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial TC}{\\partial r_2} = X_2 \\qquad (2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) از روی معادلات ۱ و ۲، نسبت قیمت ها را محاسبه می کنیم <InlineMath math={"\\frac{r_1}{r_2}"} /> یا <InlineMath math={"\\frac{r_2}{r_1}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳) در نهایت قیمت ها را از روابط حذف می کنیم (چون در تابع تولید قیمت وجود ندارد) فقط خود نهاده ها (<InlineMath math={"x_1 , x_2"} />) در تابع تولید وجود دارد. (قیمت در تابع هزینه وجود دارد)</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثال:</p>
<div className="formula-box"><BlockMath math={"C = 2 q r_1^{\\frac{1}{2}} r_2^{\\frac{1}{2}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>طبق لم شپارد، مشتق جزئی می گیریم و برابر هر یک از نهاده ها قرار می دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(اینجا نسبت نمی گیریم)</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial C}{\\partial r_1} = 2 (q) \\frac{1}{2} r_1^{-\\frac{1}{2}} r_2^{\\frac{1}{2}} = X_1"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial C}{\\partial r_2} = 2 (q) \\frac{1}{2} r_1^{\\frac{1}{2}} r_2^{-\\frac{1}{2}} = X_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از هر رابطه جداگانه نسبت قیمت نهاده ها را پیدا می کنیم و رابطه را ساده می کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فقط <InlineMath math={"\\frac{r_1}{r_2}"} /> یا <InlineMath math={"\\frac{r_2}{r_1}"} /> را پیدا می کنیم.</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} \\left( \\frac{r_2}{r_1} \\right)^{\\frac{1}{2}} = \\frac{x_1}{q} \\\\ \\left( \\frac{r_1}{r_2} \\right)^{\\frac{1}{2}} = \\frac{x_2}{q} \\end{cases} \\xrightarrow{\\text{به توان ۲ می رسانیم}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳) تلاش می کنیم که نسبت قیمت ها از روابط حذف شود. طرفین را به توان ۲ می رسانیم.</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} \\left( \\frac{r_2}{r_1} \\right) = \\left( \\frac{x_1}{q} \\right)^2 \\rightsquigarrow \\frac{r_1}{r_2} = \\left( \\frac{q}{x_1} \\right)^2 \\\\ \\left( \\frac{r_1}{r_2} \\right) = \\left( \\frac{x_2}{q} \\right)^2 \\Rightarrow \\frac{r_1}{r_2} = \\left( \\frac{x_2}{q} \\right)^2 \\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با مساوی قرار دادن دو رابطه ی به دست آمده برای <InlineMath math={"\\frac{r_1}{r_2}"} /> :</p>
<div className="formula-box"><BlockMath math={"\\frac{q^2}{x_1^2} = \\frac{x_2^2}{q^2} \\rightsquigarrow q^4 = x_1^2 x_2^2 \\rightsquigarrow q = x_1^{\\frac{1}{2}} x_2^{\\frac{1}{2}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دوگانگی بین هزینه و تولید یعنی از تابع هزینه به تابع تولید رسیدیم.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تولید یک نهاده <InlineMath math={"Q = Q(L)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>استفاده از نیروی کار یا سرمایه برای تولید یک نهاده <InlineMath math={"Q = Q(K)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>تولیدات مشترک :</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی از یک نهاده چندین محصول تولید می شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثل کارخانه ی میهن - پگاه و ... (کارخانه محصولات لبنی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیر را می خرد و چندین محصول را تولید می کند [بستنی / دوغ / کره / ماست و ...]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک نهاده شیر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بحث بر سر تخصیص عامل است. از میزان شیر موجود چه میزان کره تولید می شود چه قدر خامه - ماست و ... . بحث بر سر تخصیص عامل است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[تخصیص عامل مشترک تولید] از شیر چقدر خامه / چه قدر بستنی / چه قدر ماست و ... تولید می شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>می خواهیم از معکوس تابع تولید استفاده می کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>فرض می کنیم دو محصول تولید می شود:</p>
<div className="formula-box"><BlockMath math={"X = h(q_1, q_2)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یا</p>
<div className="formula-box"><BlockMath math={"H(X, q_1, q_2) = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این بنگاه مورد نظر با فرض ثبات سایر شرایط و میزان استفاده از نهاده ها برای تولید دو کالای <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> از منحنی امکانات تولید استفاده می کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ترکیباتی با یک نهاده مشخص، مکان هندسی از دو کالای <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> یا ترکیب <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> است که اگر تولید یک کالا را زیاد کنیم باید از تولید کالای دیگر کم کنیم. مگر اینکه نهاده افزایش یابد که باید مسیر بالاتر قرار بگیریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تخصیص عامل مشترک تولید <InlineMath math={"\\rightarrow"} /> (<InlineMath math={"X"} /> نهاده) <InlineMath math={"Q = Q(X)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲ محصول (<InlineMath math={"q_1, q_2"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب منحنی امکانات تولید، نرخ نهایی تبدیل است که قدر مطلق مثبت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"*"} /> چه میزان از تولید <InlineMath math={"q_1"} /> برای تولید یک واحد تولید بیشتر از <InlineMath math={"q_2"} /> باید صرف نظر شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\bar{X}"} /> شرایط ثابت <InlineMath math={"\\leftarrow"} /> اگر <InlineMath math={"X"} /> زیاد شود کل منحنی جابجا می شود.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/70-ppf.svg" alt="منحنی امکانات تولید" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>پس برای اینکه محصولات مشترک را بحث کنیم باید از منحنی امکانات تولید استفاده کنیم (نسبت به مبدأ مقعر است)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>*(نکته: در متن نوشته شده "محدب" اما از نظر اقتصادی و شکل رسم شده در صفحه قبل، منحنی امکانات تولید نسبت به مبدأ مقعر (Concave) است)*</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این تولیدکننده یک نهاده خریداری کرده و دو محصول <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> را تولید می کند به نیت اینکه درآمدش چه قدر است، چه قدر درآمد کسب می کند:</p>
<div className="formula-box"><BlockMath math={"TR = P_1 q_1 + P_2 q_2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در حالت برای رسیدن به درآمد (هدف): ۳ هدف همه ی اینها <InlineMath math={"\\leftarrow"} /> سود Max است</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱) حداکثر درآمد با نهاده ثابت</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} Max\\ TR \\\\ \\bar{X} \\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲) حداقل استفاده از نهاده با درآمد ثابت</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} Min\\ X \\\\ \\overline{TR} \\end{cases}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳) <InlineMath math={"Max\\ \\pi"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بررسی حالت اول (شیر):</p>
<div className="formula-box"><BlockMath math={"* \\begin{cases} Max\\ TR = P_1 q_1 + P_2 q_2 \\\\ s.t \\quad \\bar{X} = h(q_1, q_2) \\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"L = P_1 q_1 + P_2 q_2 + \\mu [\\bar{X} - h(q_1, q_2)]"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(در این رابطه <InlineMath math={"\\mu"} /> ضریب لاگرانژ و عبارت داخل کروشه محدودیت است.)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"*"} /> منحنی امکانات تولید مماس شود بر خطوط درآمدی <InlineMath math={"\\leftarrow Max\\ TR"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرایط مرتبه اول (FOC):</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} \\frac{\\partial L}{\\partial q_1} = 0 \\rightsquigarrow P_1 - \\mu \\frac{\\partial h}{\\partial q_1} = 0 \\qquad (1) \\\\ \\\\ \\frac{\\partial L}{\\partial q_2} = 0 \\rightsquigarrow P_2 - \\mu \\frac{\\partial h}{\\partial q_2} = 0 \\qquad (2) \\\\ \\\\ \\frac{\\partial L}{\\partial \\mu} = 0 \\rightsquigarrow \\bar{X} - h(q_1, q_2) = 0 \\qquad (3) \\end{cases}"} /></div>


    </div>
  );
};

export default Subpage2;
