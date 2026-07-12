import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>رفتار مصرف کننده</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>مصرف کننده</strong></p>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>**هدف:** رسیدن به حداکثر خواسته‌ها (حداکثرسازی مطلوبیت)</li>
<li>**محدودیت:** درآمد <InlineMath math={"\\implies I = xP_x + yP_y"} /></li>
</ul>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در فضای دو کالا / دو قیمت، در سبد مصرفی، منحنی‌های بی‌تفاوتی، ارتباط بین دو کالا را در فضای محدودیت به ما می‌دهد.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/graph3_1.svg" alt="منحنی‌های بی‌تفاوتی" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<div className="formula-box"><BlockMath math={"U = (x, y, z, \\dots)"} /></div>
<div className="formula-box"><BlockMath math={"U = (x, y)"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>ویژگی‌های منحنی بی‌تفاوتی:</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱. نسبت به مبدأ مختصات <strong>محدب</strong> است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲. هر چه منحنی بالاتر باشد، یعنی میزان مطلوبیت فرد افزایش می‌یابد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳. در هر نقطه در فضای کالا می‌توان یک منحنی بی‌تفاوتی رسم کرد. یعنی بالاخره یک نقطه در فضای دو کالا وجود دارد که نیازهای ما را رفع کند از مصرف دو کالا.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴. این منحنی‌ها هیچ‌گاه همدیگر را قطع نمی‌کنند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۵. دارای شیب نزولی هستند. روی منحنی بی‌تفاوتی مطلوبیت ثابت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>شیب منحنی بی‌تفاوتی = نرخ نهایی جانشینی (MRS):</strong></p>
<div className="formula-box"><BlockMath math={"MRS_{xy} = -\\frac{\\Delta y}{\\Delta x}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>مفهوم <InlineMath math={"MRS_{xy}"} />:</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر بخواهیم یک واحد به کالای <InlineMath math={"x"} /> اضافه کنیم، چه میزان از کالای <InlineMath math={"y"} /> کم کنیم تا مطلوبیت ما ثابت باقی بماند (یعنی روی نقاط منحنی <InlineMath math={"U"} /> مطلوبیت یکسان است). روی <InlineMath math={"U'"} /> هم همینطور روی تمام نقاط منحنی <InlineMath math={"U'"} /> مطلوبیت ثابت است.</p>
<div className="formula-box"><BlockMath math={"U' &gt; U"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مطلوبیت <InlineMath math={"U'"} /> بالاتر است چون بالاتر قرار دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مصرف کننده کورکورانه انتخاب نمی‌کند (عقلانیت مصرف‌کننده).</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تعادل مصرف‌کننده</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب منحنی بی‌تفاوتی:</p>
<div className="formula-box"><BlockMath math={"MRS_{xy} = -\\frac{\\Delta y}{\\Delta x}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>خط بودجه:</strong></p>
<div className="formula-box"><BlockMath math={"I = xP_x + yP_y \\implies \\text{شیب خط بودجه} = -\\frac{P_x}{P_y}"} /></div>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/graph4_1.svg" alt="خط بودجه" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<ul style={{ listStyleType: "disc", paddingRight: "2rem", marginBottom: "1rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
<li>نقاط بالای خط بودجه، نقاط دست‌نیافتنی هستند.</li>
<li>نقاط زیر خط بودجه را اصلاً کاری نداریم چون پس‌انداز نداریم (فرض بر مصرف کامل درآمد است).</li>
<li>نقاطی که برای مصرف‌کننده مهم است دقیقاً نقاط روی خط بودجه است.</li>
</ul>
<div className="formula-box"><BlockMath math={"\\text{شیب خط بودجه} = \\tan \\alpha = -\\frac{P_x}{P_y}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>چون هدف رسیدن به حداکثر است، دو تا شیب‌ها را کنار هم قرار می‌دهیم. یعنی هدف ما ماکزیمم کردن مطلوبیت است با محدودیت درآمد ثابت.</p>
<div className="formula-box"><BlockMath math={"\\max U \\leadsto L = U(x,y) + \\lambda(I - xP_x - yP_y)"} /></div>
<div className="formula-box"><BlockMath math={"\\text{s.t.: } I"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یک خط بودجه داریم و بی‌شمار منحنی بی‌تفاوتی. چون نقاط روی خط بودجه قابل دسترس است، پس منحنی بی‌تفاوتی که مماس بر خط بودجه است را انتخاب می‌کنیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>تعادل مصرف کننده = شیب منحنی بی‌تفاوتی = شیب خط بودجه</strong></p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/graph4_2.svg" alt="تعادل مصرف کننده" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<div className="formula-box"><BlockMath math={"-\\frac{\\Delta y}{\\Delta x} = -\\frac{P_x}{P_y}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>به عبارتی در نقطه تعادل <InlineMath math={"e"} />:</p>
<div className="formula-box"><BlockMath math={"\\frac{MU_x}{MU_y} = \\frac{P_x}{P_y}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی نسبت مطلوبیت نهایی دو کالا برابر است با نسبت قیمت‌ها.</p>
<blockquote style={{ borderRight: "4px solid var(--primary)", paddingRight: "1rem", color: "var(--text-muted)", margin: "1rem 0", background: "rgba(255,255,255,0.02)", padding: "1rem" }}>**بررسی و تأیید علمی:**</blockquote>
<blockquote style={{ borderRight: "4px solid var(--primary)", paddingRight: "1rem", color: "var(--text-muted)", margin: "1rem 0", background: "rgba(255,255,255,0.02)", padding: "1rem" }}>روابط استخراج شده کاملاً با اصول اقتصاد خرد همخوانی دارد. در نقطه تعادل (بهینه مصرف‌کننده)، شرط مماس شدن منحنی بی‌تفاوتی با خط بودجه برقرار است که به لحاظ ریاضی یعنی برابری نرخ نهایی جانشینی (MRS) با نسبت قیمت‌ها. همچنین از آنجا که <InlineMath math={"MRS_{xy} = \\frac{MU_x}{MU_y}"} />، نتیجه‌گیری نهایی مبنی بر <InlineMath math={"\\frac{MU_x}{MU_y} = \\frac{P_x}{P_y}"} /> کاملاً صحیح است.</blockquote>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"U: (x, y)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"I = P_x \\cdot x + P_y \\cdot y"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"L = U(x, y) + \\lambda (I - x P_x - y P_y)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این معادله ۳ تا مجهول دارد هر بار از تابع <InlineMath math={"L"} /> نسبت به یک مجهول مشتق می‌گیریم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳ مجهول / ۳ مشتق (<InlineMath math={"x"} /> و <InlineMath math={"y"} /> و <InlineMath math={"\\lambda"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial L}{\\partial x} = 0 \\Rightarrow MU_x - \\lambda P_x = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial L}{\\partial y} = 0 \\Rightarrow MU_y - \\lambda P_y = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از تقسیم دو رابطه اول دوباره به شرط تعادل می‌رسیم <InlineMath math={"\\leftarrow \\frac{MU_x}{MU_y} = \\frac{P_x}{P_y}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial L}{\\partial \\lambda} = 0 \\Rightarrow I - x P_x - y P_y = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت‌های تغییر خط بودجه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"I = x P_x + y P_y"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- قیمت کالای <InlineMath math={"x"} /> تغییر کند (<InlineMath math={"P_x"} />) : شیب خط بودجه تغییر می‌کند <InlineMath math={"\\leftarrow"} /> P.C.C منحنی قیمت مصرف</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- قیمت کالای <InlineMath math={"y"} /> تغییر کند (<InlineMath math={"P_y"} />) : شیب خط بودجه تغییر می‌کند <InlineMath math={"\\leftarrow"} /> P.C.C منحنی قیمت مصرف</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- تغییر درآمد <InlineMath math={"\\leftarrow"} /> خط بودجه جابجا می‌شود به صورت موازی (درآمد زیاد شود به سمت بالا موازی منتقل می‌شود [به سمت پایین ، درآمد کم شود]) <InlineMath math={"\\leftarrow"} /> منحنی درآمد مصرف I.C.C</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت اول : <InlineMath math={"P_x \\uparrow \\rightarrow \\frac{I}{P_x} \\downarrow \\leftarrow"} /> انتقال منحنی به سمت چپ (داخل)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\rightarrow \\frac{I}{P_x} \\uparrow \\rightarrow"} /> منحنی به سمت بیرون منتقل می‌شود.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./6-px-shift.svg" alt="تغییر قیمت کالای ایکس" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تغییر <InlineMath math={"P_x"} /> ( <InlineMath math={"I"} /> ثابت <InlineMath math={"P_x"} /> متغیر )</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./6-pcc-demand.svg" alt="استخراج منحنی تقاضا از منحنی قیمت مصرف" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\rightarrow X \\uparrow \\rightarrow X_1 \\leftarrow X_2"} /> قانون تقاضا</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از وصل کردن <InlineMath math={"e_1"} /> به <InlineMath math={"e_2"} /> ، منحنی تقاضا بدست می‌آید در واقع یکی از کاربردهای منحنی‌های قیمت - مصرف رسیدن به همان تابع و منحنی تقاضای اولیه است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت سوم <InlineMath math={"I \\uparrow \\rightarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خط بودجه موازی به سمت راست جابجا می‌شود</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./6-icc.svg" alt="منحنی درآمد مصرف" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی درآمد مصرف <InlineMath math={"\\leftarrow"} /> I.C.C</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- نرمال <InlineMath math={"\\leftarrow"} /> ضروری ، لوکس</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- پست</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی درآمد مصرف : اگر درآمد مصرف‌کننده تغییر کند، خط بودجه به موازات خودش منتقل شده و مصرف‌کننده با تغییر درآمد، مخارج خود را تغییر می‌دهد و یک نقطه تعادل جدید از تماس خط بودجه و منحنی‌های بی‌تفاوتی جدید ایجاد می‌شود که از وصل کردن این نقاط تعادلی، به هم منحنی درآمد مصرف شکل می‌گیرد (منحنی I.C.C).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی قیمت مصرف : اگر فقط قیمت یک کالا تغییر کند در اینصورت شیب خط بودجه چرخیده و تعادل‌های جدیدی به وجود می‌آید که با وصل نقاط تعادلی جدید، منحنی قیمت - مصرف به دست می‌آید. منحنی P.C.C.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولیدکننده / بنگاه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هدف تولیدکننده به دو صورت مطرح می‌شود یا می‌خواهد تولید را حداکثر کند با محدودیت هزینه (<InlineMath math={"C"} />) یا هدف دیگر تولیدکننده حداقل کردن هزینه با توجه به تولید مشخص که به بالاترین یا حداکثر سود دست پیدا کند</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Max\\ \\pi"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\begin{cases} Max\\ Q \\\\ S.t: \\overline{C} \\end{cases} \\rightarrow Max\\ \\pi"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\begin{cases} Min\\ C \\\\ S.t: \\overline{Q} \\end{cases} \\rightarrow Max\\ \\pi"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تولید <InlineMath math={"Q = f(L, K, ...)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"C = P_L \\cdot L + P_K \\cdot K + ..."} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_L \\cdot L"} /> : نیروی کار</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_K \\cdot K"} /> : سرمایه</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تولید کوتاه مدت در حدود ۲ ماه</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در کوتاه مدت، تمامی عوامل ثابت است و فقط نیروی کار تغییر می‌کند یا فقط سرمایه تغییر می‌کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Q = f(L, \\overline{K}, \\overline{...}, ...)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"C = P_L \\cdot L + P_K \\cdot \\overline{K}"} /></p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./8-tp-mp-ap.svg" alt="منحنی‌های تولید کل، نهایی و متوسط" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"0 \\rightarrow L_1 \\rightarrow TP_L \\uparrow"} /> با نرخ فزاینده <InlineMath math={"\\rightarrow MP_L^+"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"L_1 \\rightarrow L^* \\rightarrow TP_L \\uparrow"} /> با نرخ کاهنده <InlineMath math={"\\rightarrow MP_L^+"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"L^* \\rightarrow L_{...} \\rightarrow TP_L \\downarrow \\rightarrow MP_L^-"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>Max <InlineMath math={"TP_L \\Rightarrow MP_L = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>Max <InlineMath math={"AP_L \\Rightarrow MP_L = AP_L"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید نهایی و متوسط</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MP_L = \\frac{\\Delta TP}{\\Delta L} = \\frac{\\Delta Q}{\\Delta L}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"TP_L \\rightarrow Max \\Rightarrow MP_L = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MP_L"} /> : اگر نیروی کار یک واحد تغییر کند، چه میزان تغییر در تولید کل ایجاد می‌شود؟</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"AP_L = \\frac{Q}{L} \\rightarrow"} /> نشان می‌دهد هر واحد نیروی کار بنگاه به طور میانگین چه میزان تولید داشته است.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تولید بلند مدت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>همه عوامل می‌توانند تغییر کنند و هیچ عاملی ثابت نیست.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Q = f(L, K, ...)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"C = P_L \\cdot L + P_K \\cdot K"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تولید در بلند مدت شبیه منحنی بی‌تفاوتی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نسبت به مبدأ مختصات محدب است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر چه تولید زیادتر شود منحنی تولید بالاتری رود و برعکس <InlineMath math={"Q' &gt; Q"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>روی منحنی تولید، مقدار تولید ثابت است فقط میزان استفاده از عوامل متفاوت است.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./9-long-run-production.svg" alt="تابع تولید در بلند مدت" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نکته مهم و تفاوت منحنی تولید و بی‌تفاوتی است. همان بحث شمارشی و غیر شمارشی بودن است. تولید قابل شمارش است اما مطلوبیت را نمی‌توان شمرد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب منحنی تولید <InlineMath math={"MRTS_{L,K}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MRTS_{L,K} = - \\frac{\\Delta K}{\\Delta L}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت اول : ۳ مجهول <InlineMath math={"\\leftarrow"} /> ۳ مشتق</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\begin{cases} Max\\ Q \\\\ \\overline{C} \\end{cases} \\Rightarrow L = Q(L, K) + \\lambda(C - P_L L - P_K K)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حالت دوم : ۳ مجهول و ۳ مشتق</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\begin{cases} Min\\ C \\\\ \\overline{Q} \\end{cases} \\Rightarrow Z = P_L L + P_K K + \\lambda(Q - Q(L, K))"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نقطه تعادل تولید و هزینه در بلند مدت جائی است که خط هزینه مماس شود بر منحنی تولید. جایی که شیب تولید و شیب خط هزینه به هم مماس شود یعنی جایی که نسبت تولید نهایی نیروی کار به تولید نهایی سرمایه برابر باشد با نسبت کار به قیمت سرمایه.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./10-producer-equilibrium.svg" alt="تعادل تولید کننده" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب خط هزینه <InlineMath math={"\\frac{P_L}{P_K} = \\frac{MP_L}{MP_K}"} /> شیب منحنی تولید <InlineMath math={"MRTS_{L,K}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"MRTS_{L,K} = \\frac{MP_L}{MP_K} = - \\frac{\\Delta K}{\\Delta L}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{MP_K}{MP_L} = \\frac{P_K}{P_L}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تولید کننده امکان تصمیم‌گیری دارد <InlineMath math={"Min\\ C"} /> یا <InlineMath math={"Max\\ Q"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مصرف کننده فقط یک حالت دارد که خواسته‌اش را بدست بیاورد با توجه به خط بودجه (مطلوبیت) (حداکثر مطلوبیت)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\begin{cases} Max\\ U \\\\ I = P_x \\cdot x + P_y \\cdot y \\end{cases}"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه :</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه کل <InlineMath math={"TC = TFC + TVC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه‌های ثابت :</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه‌های متغیر :</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"AC = AFC + AVC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه نهایی <InlineMath math={"MC = \\frac{\\Delta TC}{\\Delta Q}"} /></p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./11-total-costs.svg" alt="منحنی‌های هزینه کل" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"AC"} /> ، <InlineMath math={"AVC"} /> ، <InlineMath math={"MC \\leftarrow"} /> منحنی‌های U شکل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"AP"} /> ، <InlineMath math={"MP \\leftarrow"} /> تپه‌ای شکل</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./11-average-marginal-costs.svg" alt="منحنی‌های هزینه متوسط و نهایی" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>به سمت بلند مدت که می‌رویم <InlineMath math={"AFC"} /> وجود ندارد <InlineMath math={"AC"} /> به <InlineMath math={"AVC"} /> منطبق می‌شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه نهایی (<InlineMath math={"MC"} />) از Min <InlineMath math={"AC"} /> و <InlineMath math={"AVC"} /> عبور می‌کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هزینه و تولید نقطه‌ی مقابل همدیگر هستند یعنی جائیکه هزینه نهایی <InlineMath math={"MC"} /> در Min است جایی است که تولید نهایی <InlineMath math={"MP_L"} /> در حداکثر است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Max\\ MP_L = Min\\ MC"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>و جائیکه هزینه متوسط به حداقل می‌رسد دقیقاً جائی است که تولید متوسط به حداکثر می‌رسد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Max\\ AP_L = Min\\ AC"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معرفی کتاب</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کتاب اقتصاد خرد ، تقرب ریاضی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نویسنده هندرسون - کوانت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ترجمه دکتر پژویان</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کتاب حل مسئله : تحلیل مسائل اقتصاد خرد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دکتر تفضلی و دکتر کاتوزیان فقط مسئله و حل آن کارشناسی و ارشد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جلسه‌ی دوم ۲۵ مهر ۴۰۵</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اصول حاکم بر رفتار مصرف‌کننده</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مصرف‌کننده برای آنکه بخواهد در یک فضای دو کالایی به نقطه تعادل برسد و این نقطه تعادل شکل بگیرد و مصرف‌کننده بتواند از کالاها با توجه به درآمد و قیمت‌ها خریداری کند، مستلزم یک سری فروض است [ مصرف‌کننده دارای رفتار عقلایی است ]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این فروض ثابت هستند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- اصل انعکاس پذیری : مصرف‌کننده در انتخاب بین دو سبد <InlineMath math={"A"} /> یا <InlineMath math={"B"} /> که از هر نظر یکسان هستند بی‌تفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"A I B"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"I \\leftarrow indifference"} /> بی‌تفاوت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- اصل کامل بودن : مصرف‌کننده می‌تواند بین دو سبد انتخاب داشته باشد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"A P B \\quad \\text{or} \\quad B P A \\quad \\text{or} \\quad A I B"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P \\leftarrow prefer"} /> ترجیح</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"A"} /> را به <InlineMath math={"B"} /> ترجیح دهد یا <InlineMath math={"B"} /> را به <InlineMath math={"A"} /> ترجیح دهد یا بین انتخاب دو سبد <InlineMath math={"B"} /> و <InlineMath math={"A"} /> بی‌تفاوت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- اصل انتقال پذیری : Transperency Principle</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{A P B}{B P C} \\Rightarrow A P C"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مصرف‌کننده سبد <InlineMath math={"A"} /> را به <InlineMath math={"B"} /> ترجیح می‌دهد و سبد <InlineMath math={"B"} /> را به <InlineMath math={"C"} /> ترجیح می‌دهد پس حتماً سبد <InlineMath math={"A"} /> را به <InlineMath math={"C"} /> ترجیح می‌دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"A I B"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"B I C \\Rightarrow A I C"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(بی‌تفاوتی هم شامل می‌شود)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴- اصل قانع نشدن : مصرف‌کننده همیشه بیشتر را به کمتر ترجیح می‌دهد (سبد بیشتر)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>[ فرض عاقلانه ]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر رفتار مصرف‌کننده عاقلانه نباشد به هیچ عنوان در مورد نقطه تعادل مصرف‌کننده (<InlineMath math={"e"} />) نمی‌توانیم اظهار نظر کنیم.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./13-equilibrium.svg" alt="نقطه تعادل مصرف‌کننده" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب خط بودجه <InlineMath math={"\\frac{P_x}{P_y} = \\frac{MU_x}{MU_y}"} /> شیب منحنی بی‌تفاوتی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۵- اصل پیوستگی : روی منحنی بی‌تفاوتی بی‌نهایت سبد کالا وجود دارد که مصرف‌کننده می‌تواند آن‌ها را انتخاب کند و بین آن‌ها بی‌تفاوت باشد.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/./13-continuity.svg" alt="اصل پیوستگی" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مصرف‌کننده از تمام این فروض استفاده می‌کند برای رسیدن به بحث تعادل.</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تابع تقاضای نرمال (مارشالی) Normal Demand</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خط بودجه به ۲ دلیل می‌تواند تغییر کند:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- به دلیل تغییر قیمت کالاها (<InlineMath math={"X"} /> یا <InlineMath math={"Y"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- به دلیل تغییر درآمد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر خط بودجه تغییر کند، با خط بودجه‌ی جدید، نقطه‌ی تعادل جدید و مقداری از کالاها خواهیم داشت.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تغییر قیمت کالای <InlineMath math={"X"} /> <InlineMath math={"\\leftarrow"} /> <InlineMath math={"P_x \\downarrow"} /> <InlineMath math={"\\leftarrow"} /> انتقال خط بودجه به صورت غیر موازی و مطابق شکل به سمت راست <InlineMath math={"\\uparrow \\frac{I}{P_x}"} /> ، تقاضا از <InlineMath math={"x_1"} /> به <InlineMath math={"x_2"} /> زیاد شده <InlineMath math={"\\leftarrow"} /> تقاضای مارشالی یا نرمال <InlineMath math={"\\leftarrow"} /> یعنی با کاهش قیمت کالای <InlineMath math={"X"} /> میزان تقاضا برای کالای <InlineMath math={"X"} /> زیاد شد <InlineMath math={"\\leftarrow"} /> رابطه‌ی تقاضا برقرار است.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/14-nemodar.svg" alt="نمودار انتقال خط بودجه و منحنی تقاضا" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از وصل کردن نقاط <InlineMath math={"e_1"} /> و <InlineMath math={"e_2"} /> در فضای قیمت و کالا <InlineMath math={"\\leftarrow"} /> همان تابع تقاضا به دست آمد. (حالت عادی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>سوال:</strong> اگر منحنی بی تفاوتی، حالت خاصی داشته باشد [ غیر از مبدا محدب ] یا از بالا اگر نگاه کنیم مقعر است <InlineMath math={"\\leftarrow"} /> منحنی <InlineMath math={"L"} /> یا ترجیح خطی یا مقعر به مبدا، منحنی تقاضای عمومی را رسم کنید.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱- حالت عادی (کالای نرمال)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی بی تفاوتی : محدب نسبت به مبدا</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی تقاضا : نزولی با شیب منفی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با کاهش قیمت کالا ، مقدار تقاضا افزایش می یابد (تقاضای نرمال)</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/15-nemodar1.svg" alt="نمودار حالت اول" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲- حالت دوم: کالاها جانشین کامل باشند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی بی تفاوتی : خطوط مستقیم و موازی با شیب ثابت</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی تقاضا :</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x &gt; P^*"} /> <InlineMath math={"\\leftarrow"} /> تقاضا صفر است [ قیمت کالای <InlineMath math={"X"} /> از حد منحنی بیشتر است ]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x = P^*"} /> <InlineMath math={"\\leftarrow"} /> مصرف کننده بی تفاوت است . هر مقدار تقاضا ممکن است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x &lt; P^*"} /> <InlineMath math={"\\leftarrow"} /> تمام درآمد صرف خرید این کالا می شود و مقدار تقاضا به شدت افزایش می یابد پس تقاضا شکسته (راه حل گوشه ای) است . [ مصرف کننده کالای ارزان تر را انتخاب می کند ]</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/15-nemodar2.svg" alt="نمودار حالت دوم" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳- حالت سوم : کالاها مکمل های کامل باشند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی بی تفاوتی : به شکل <InlineMath math={"L"} /> یا زاویه ۹۰</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>منحنی تقاضا : شیب منفی دارد اما از حالت عادی پر شیب تر است چون کالا ها باید با نسبت ثابت مصرف شوند و جانشینی بین آن ها وجود ندارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با کاهش قیمت ، مقدار تقاضای هر دو کالا به یک نسبت ثابت افزایش می یابد و جانشین وجود ندارد.</p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/15-nemodar3.svg" alt="نمودار حالت سوم" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>مثال:</strong> حداکثر مطلوبیت از مصرف دو کالا <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> را حساب کنید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"U = q_1 q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_1 = 2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_2 = 5"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"I = 100"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"I = P_1 q_1 + P_2 q_2 \\Rightarrow 2 q_1 + 5 q_2 = 100"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\mathcal{L} = q_1 q_2 + \\lambda ( 100 - 2 q_1 - 5 q_2 )"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_1} = q_2 - 2 \\lambda = 0 \\Rightarrow q_2 = 2 \\lambda"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_2} = q_1 - 5 \\lambda = 0 \\Rightarrow q_1 = 5 \\lambda"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{q_2}{q_1} = \\frac{2 \\lambda}{5 \\lambda} \\Rightarrow \\frac{q_2}{q_1} = \\frac{2}{5} \\Rightarrow 5 q_2 = 2 q_1 \\Rightarrow q_2 = \\frac{2 q_1}{5}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>همچنین:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{U_1}{U_2} = \\frac{P_1}{P_2} \\Rightarrow \\frac{q_2}{q_1} = \\frac{2}{5}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 100 - 2 q_1 - 5 q_2 = 0 \\Rightarrow 100 - 2 q_1 - 5 \\left( \\frac{2 q_1}{5} \\right) = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"100 - 2 q_1 - 2 q_1 = 0 \\Rightarrow 4 q_1 = 100 \\Rightarrow q_1 = 25"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_1 = 25"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_2 = 10"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\lambda = \\frac{10}{2} = 5"} /></p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/16-nemodar.svg" alt="نمودار خط بودجه و تعادل" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>خط بودجه ترکیباتی از <InlineMath math={"q_1"} /> و <InlineMath math={"q_2"} /> را نشان می دهد که مصرف کننده قادر به خرید آن است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب خط بودجه <InlineMath math={"= \\frac{\\Delta q_2}{\\Delta q_1} = -\\frac{P_1}{P_2} = -\\frac{20}{50} = -\\frac{2}{5}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب منحنی <InlineMath math={"= -\\frac{q_2}{q_1} = -\\frac{10}{25} = -\\frac{2}{5}"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>هدف:</strong> <InlineMath math={"Max~U : U(q_1, q_2)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>محدودیت:</strong> <InlineMath math={"I = P_1 q_1 + P_2 q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>ابتدا تابع لاگرانژ تشکیل می دهم . مطلوبیت با ضریبی بنام لاگرانژ ارتباط پیدا می کند با خط بودجه.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع لاگرانژ:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\mathcal{L} = U(q_1, q_2) + \\lambda [I - P_1 q_1 - P_2 q_2]"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳ تا مجهول داریم <InlineMath math={"[q_1, q_2 \\text{ و } \\lambda]"} /> <InlineMath math={"\\leftarrow"} /> ۳ تا مشتق نسبت به مجهول ها جداگانه می گیرم و برابر صفر قرار می دهم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial U}{\\partial q_1} = U_1 ="} /> مطلوبیت نهایی کالای اول <InlineMath math={"= MU_1"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>پس: <InlineMath math={"MU_2 ="} /> مطلوبیت نهایی کالای دوم <InlineMath math={"= U_2 = \\frac{\\partial U}{\\partial q_2}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>① <InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_1} = 0 \\Rightarrow \\frac{\\partial U}{\\partial q_1} - \\lambda P_1 = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>② <InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_2} = 0 \\Rightarrow \\frac{\\partial U}{\\partial q_2} - \\lambda P_2 = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 0 \\Rightarrow I - P_1 q_1 - P_2 q_2 = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از تقسیم رابطه ۱ بر ۲:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\text{①}}{\\text{②}} \\Rightarrow \\frac{U_1}{U_2} = \\frac{P_1}{P_2}"} />  (رابطه ③ - شرط تعادل)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\lambda = \\frac{U_1}{P_1} = \\frac{U_2}{P_2}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از رابطه ی ۳ مقادیر را محاسبه کرده و در رابطه ی ۴ قرار می دهیم <InlineMath math={"\\leftarrow"} /> تابع تقاضای نرمال به دست می آید.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\lambda = \\frac{MU_1}{P_1} = \\frac{MU_2}{P_2}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\lambda"} /> : مطلوبیت نهایی پول یا درآمد است (چون به <InlineMath math={"P"} /> تقسیم شده است)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی هر ۱ ریال ، واحد پول اضافی مطلوبیت مصرف کننده را چه قدر تغییر می دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از حل معادله ی ۳ و ۴ ، توابع تقاضای کالا را به دست می آوریم (دو تابع / دو کالا)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_1^{ND} = q_1 (P_1, P_2, I)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_2^{ND} = q_2 (P_1, P_2, I)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(تقاضای نرمال)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی تقاضا تابعی است هم از قیمت کالای اول و قیمت کالای دوم و درآمد ثابت.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در ریاضیات برای بدست آوردن Max و Min دو شرط لازم است. اول اینکه از تابع مشتق بگیریم و مساوی صفر قرار دهیم تا نقاط اکسترمم پیدا شود (شرط لازم)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط دوم اینست که اگر تابع Max است، مشتق دوم باید منفی شود و اگر مشتق دوم تابع مثبت شد قطعاً تابع Min است (شرط کافی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در اینجا از شرط Max سازی تابع مطلوبیت با درآمد ثابت ، تابع تقاضا را به دست آوردیم. شرط دوم مستلزم اینست که مشتق دوم این توابع گرفته شده.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای گرفتن مشتق دوم نسبت به تک تک متغیرها مشتق گرفته می شود از تابع اول و تابع دوم و تابع سوم ... یعنی ۹ تا مشتق دوم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این ۹ تا مشتق در دترمینان قرار می گیرد که دترمینان هشین مرزی نامیده می شود.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>زمانی که از تابع لاگرانژ استفاده می کنیم یعنی محدودیت و مرز داریم <InlineMath math={"\\leftarrow"} /> مشتق دوم در چارچوب هشین مرزی قرار می گیرد [ مرز قیمت ها ].</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>زمانیکه تابعی مثل سود را می خواهیم مشتق دومش را بررسی کنیم هشین معمولی است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>دترمینان هشین مرزی باید بزرگتر از صفر باشد تا مطمئن شویم که تابعی را که به دست آورده ایم در Max تابع مطلوبیت باشد و به حداکثر مطلوبیت دست پیدا کردیم.</p>
<div className="formula-box"><BlockMath math={"|\\bar{H}| = \\begin{vmatrix} f_{11} & f_{12} & -P_1 \\\\ f_{21} & f_{22} & -P_2 \\\\ -P_1 & -P_2 & 0 \\end{vmatrix} &gt; 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\Rightarrow"} /> فقط مشتق های مرتبه دوم را لازم داریم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>(در ماتریس بالا: <InlineMath math={"f_{11}"} /> از مشتق اولی نسبت به <InlineMath math={"q_1"} />، <InlineMath math={"f_{12}"} /> از مشتق اولی نسبت به <InlineMath math={"q_2"} />، <InlineMath math={"f_{21}"} /> از مشتق دومی نسبت به <InlineMath math={"q_1"} /> و <InlineMath math={"f_{22}"} /> مشتق دوم نسبت به <InlineMath math={"q_2"} /> است.)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"f_{12} = f_{21}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با بسط دترمینان:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"|\\bar{H}| = 2 f_{12} P_1 P_2 - f_{11} P_2^2 - f_{22} P_1^2 &gt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>با جایگذاری <InlineMath math={"P_1 = \\frac{f_1}{\\lambda}"} /> و <InlineMath math={"P_2 = \\frac{f_2}{\\lambda}"} />:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"|\\bar{H}| = 2 f_{12} \\left(\\frac{f_1}{\\lambda}\\right) \\left(\\frac{f_2}{\\lambda}\\right) - f_{11} \\left(\\frac{f_2}{\\lambda}\\right)^2 - f_{22} \\left(\\frac{f_1}{\\lambda}\\right)^2 &gt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"|\\bar{H}| = \\frac{1}{\\lambda^2} \\left( 2 f_{12} f_1 f_2 - f_{11} f_2^2 - f_{22} f_1^2 \\right) &gt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\Rightarrow 2 f_{12} f_1 f_2 - f_{11} f_2^2 - f_{22} f_1^2 &gt; 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این رابطه شرط کافی است برای Max شدن تابع مطلوبیت است که همان شبه مقعر بودن تابع مطلوبیت می باشد (دید از بالا).</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>ویژگی های تابع تقاضای نرمال</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_1^{ND} = q_1 (P_1, P_2, I)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱. تابع تقاضا همگن از درجه صفر نسبت به قیمت کالاها و درآمد است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یعنی اگر قیمت ها و درآمد ها با یک نسبت تغییر پیدا کنند، تابع تقاضا تغییر نمی کند (یعنی اگر درآمد مصرف کننده افزایش یابد و در مقابل قیمت ها نیز افزایش یابند (<InlineMath math={"P"} /> و <InlineMath math={"I"} /> همگی دوبرابر شود، تابع تقاضا تغییر نمی کند) مصرف کننده ثروتمند نشده است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲. تابع تقاضا یک تابع تک مقداری از سطح قیمت ها و درآمد است یعنی رابطه ی یک به یک بین آنها برقرار است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳. تابع تقاضا همواره نزولی است به استثناء در مورد:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- ۱. کالای پست گیفن باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- ۲. مصرف از روی تقلید باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴. در تابع تقاضای نرمال ، درآمد (پول) ثابت در نظر گرفته می شود.</p>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- اگر درآمد زیاد شود و ما از کالایی بیشتر خریداری کنیم کالا <InlineMath math={"\\leftarrow"} /> <strong>نرمال</strong> است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- اگر درآمد زیاد شود و از کالایی کمتر خرید کنیم کالا <InlineMath math={"\\leftarrow"} /> <strong>پست</strong> است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالاها را از نظر درآمدی و قیمتی بررسی می کنیم <InlineMath math={"\\leftarrow"} /> ① قیمت کالا <InlineMath math={"\\uparrow"} /> <InlineMath math={"\\leftarrow"} /> تقاضا <InlineMath math={"\\downarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در تابع تقاضای نرمال درآمد (پول) باید ثابت در نظر گرفته شود.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>سوال:</strong> فرض کنیم می خواهیم حداکثر کنیم مطلوبیت را با توجه به محدودیت درآمدی. تابع تقاضای نرمال را پیدا کنید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Max~U = q_1 q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"s.t: I = P_1 q_1 + P_2 q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از تابع لاگرانژ استفاده می کنیم. تابع مطلوبیت را با محدودیت ارتباط می دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\mathcal{L} = q_1 q_2 + \\lambda (I - P_1 q_1 - P_2 q_2)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳ تا مشتق می گیریم = صفر قرار می دهیم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_1} = 0 \\Rightarrow q_2 - \\lambda P_1 = 0 \\Rightarrow \\lambda = \\frac{q_2}{P_1}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_2} = 0 \\Rightarrow q_1 - \\lambda P_2 = 0 \\Rightarrow \\lambda = \\frac{q_1}{P_2}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از تساوی این دو:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{q_2}{P_1} = \\frac{q_1}{P_2} \\Rightarrow q_2 = \\frac{P_1}{P_2} q_1"} /> (شرط تعادل)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 0 \\Rightarrow I - P_1 q_1 - P_2 q_2 = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در رابطه زیر قرار می دهیم:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"I - P_1 q_1 - P_2 \\left(\\frac{P_1}{P_2} q_1\\right) = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\Rightarrow I - 2 P_1 q_1 = 0 \\Rightarrow q_1^{ND} = \\frac{I}{2 P_1}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"q_2^{ND} = \\frac{I}{2 P_2}"} /></p>
<hr style={{ borderTop: "1px solid var(--card-border)", margin: "2rem 0" }} />
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>| تقاضای مارشالی | تقاضای هیکسی |</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>| :--- | :--- |</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>| درآمد ثابت | مطلوبیت ثابت |</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>| اثر درآمدی + جانشینی | فقط اثر جانشینی |</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>| تابعی از درآمد | تابعی از مطلوبیت |</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>| <InlineMath math={"Max"} /> مطلوبیت - هدف | حداقل سازی هزینه - هدف |</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>| <InlineMath math={"Q = f(P, I)"} /> | <InlineMath math={"H = f(P, \\bar{U})"} /> |</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>تابع تقاضای جبرانی (تابع تقاضای هیکسی) (Compensated Demand)</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>اثر جانشینی:</strong> میزان تغییر مصرف کننده برای یک کالا صرفا به دلیل تغییر قیمت آن نسبت به قیمت کالاهای دیگر به شرط ثابت بودن سطح درآمد واقعی یا مطلوبیت او است. بر اساس اثر جانشینی ، مصرف کننده همیشه کالای ارزان تر را جانشین کالای گران تر می کند / زمانیکه قیمت یک کالا کاهش می یابد ، مصرف کننده این کالا را جانشین سایر کالاهایی می کند که قیمتشان ثابت مانده است و تغییر نکرده است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر جانشینی در اینجا موجب افزایش تقاضا برای کالایی می گردد که قیمتش کاهش یافته.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر جانشینی همیشه منفی است:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\uparrow \\leftarrow"} /> تقاضا برای کالای <InlineMath math={"X \\downarrow"} /> <InlineMath math={"\\leftarrow"} /> کالای دیگر جایگزین میشوند</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\leftarrow"} /> تقاضای کالای <InlineMath math={"X \\uparrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>طبق اثر جانشینی در هر نوع کالایی (نرمال - پست - مستقل از درآمد) همیشه مصرف کننده کالای ارزان تر را بیشتر مصرف می کند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>اثر درآمدی:</strong> تغییر قیمت کالا می تواند روی درآمد واقعی افراد تأثیر بگذارد نه درآمد اسمی.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\leftarrow"} /> افزایش درآمد واقعی مصرف کننده [ افزایش قدرت خرید ] (<InlineMath math={"\\frac{I}{P}"} />)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در واقع اثر درآمدی بیانگر تغییر در مقدار مورد تقاضا ، در نتیجه تغییر در درآمد حقیقی فرد است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>اثر کل = اثر جانشینی + اثر درآمدی</strong> [اثر کل وضعیت منحنی تقاضا را مشخص می کند]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- اگر اثر جانشینی بر اثر درآمدی غلبه کند [ جمع دو مقدار ] <InlineMath math={"\\leftarrow"} /> همیشه رابطه ی منفی وجود داشته باشد <InlineMath math={"\\leftarrow"} /> تقاضا منفی.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- اگر اثر درآمدی بر جانشینی غلبه کند میزان آن اثر مهم است یعنی جمع این دو را به اثر درآمدی برمی گرداند.</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>حالت اول: کالای نرمال</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالایی که با افزایش درآمد مصرف کننده ، تقاضا برای آن افزایش می یابد پس ملاحظه می شود در کالاهای نرمال اگر قیمت کالا کاهش یابد هم بر اساس اثر جانشینی و هم درآمدی ، هر دو سبب افزایش تقاضای محصول شده در نهایت بر اساس اثر کل [ مجموع اثر درآمدی و جانشینی ] مقدار تقاضا افزایش می یابد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در کالای نرمال ، قانون تقاضا نقض نمی شود - منحنی تقاضا نزولی است و اثر جانشینی و درآمدی همدیگر را تقویت می کنند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\rightarrow \\left( \\frac{I}{P_x} \\uparrow \\text{ درآمد واقعی} \\right) \\xrightarrow{\\text{اثر درآمدی}} Q_x^d \\uparrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\xrightarrow{\\text{اثر جانشینی}} Q_x^d \\uparrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>حالت دوم: کالای پست معمولی</strong></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>کالایی که با افزایش درآمد مصرف کننده ، تقاضا برای آن کاهش می یابد. در اینجا با کاهش قیمت کالای <InlineMath math={"X"} /> بر اساس اثر جانشینی کالای <InlineMath math={"X"} /> نسبت به <InlineMath math={"Y"} /> ارزان تر شده مصرف کننده از کالای <InlineMath math={"X"} /> بیشتر مصرف می کند اما طبق اثر درآمدی با کاهش قیمت کالای <InlineMath math={"X"} /> درآمد حقیقی مصرف کننده (<InlineMath math={"\\frac{I}{P_x}"} />) افزایش یافته اما از آنجا که کالا پست عادی می باشد ، مقدار تقاضا کاهش می یابد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در نهایت بر اساس اثر کل می توان گفت در کالای پست معمولی اثر جانشینی از اثر درآمدی بزرگتر بوده و در نهایت با کاهش <InlineMath math={"P_x"} /> مقدار تقاضا افزایش یافته و قانون تقاضا نقض نخواهد شد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\xrightarrow{\\text{اثر جانشینی}} \\frac{P_x}{P_y} \\downarrow \\rightarrow Q_x^d \\uparrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\xrightarrow{\\text{اثر درآمدی}} \\frac{I}{P_x} \\uparrow \\xrightarrow{\\text{پست معمولی}} Q_x^d \\downarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"Q_x^d (\\uparrow) = \\text{اثر جانشینی } (+) + \\text{اثر درآمدی } (-)"} /></p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>حالت سوم: اگر کالا پست گیفن باشد</strong> [ کالایی که اگر قیمت آن افزایش یابد مصرف کننده از آن کالا بیشتر مصرف می کند ]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این حالت با کاهش <InlineMath math={"P_x"} /> ، کالای <InlineMath math={"X"} /> نسبت به کالای <InlineMath math={"Y"} /> ارزان تر شده و طبق اثر جانشینی ، مصرف کالای <InlineMath math={"X"} /> افزایش می یابد. اما طبق اثر درآمدی با کاهش <InlineMath math={"P_x"} /> درآمد حقیقی افزایش یافته و چون کالای گیفن نیز نوعی کالای پست است پس تقاضا یا مصرف کالا کاهش می یابد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>برای بررسی اثر کل باید گفت در کالای گیفن اثر درآمدی از جانشینی بزرگتر بوده در نهایت با کاهش <InlineMath math={"P_x"} /> ، مقدار تقاضا کاهش یافته ، قانون تقاضا نقض می شود و منحنی تقاضا صعودی می شود.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\xrightarrow{\\text{اثر جانشینی}} \\frac{P_x}{P_y} \\downarrow \\rightarrow Q_x^d \\uparrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_x \\downarrow \\xrightarrow{\\text{اثر درآمدی}} \\frac{I}{P_x} \\uparrow \\xrightarrow{\\text{گیفن}} Q_x^d \\downarrow"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر جانشینی (<InlineMath math={"\\uparrow"} />) &lt; اثر درآمدی (<InlineMath math={"\\downarrow"} />) <InlineMath math={"\\rightarrow Q_x^d \\downarrow"} /></p>
<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/24-nemodar.svg" alt="نمودار کالای گیفن" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>نکته ی مهم:</strong> تقاضا در اثر جانشینی همیشه با کاهش قیمت افزایش می یابد اما در اثر درآمدی بستگی به نوع کالا دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر اثر جانشینی و درآمدی کاملا با هم برابر باشند و عکس هم ، منحنی تقاضا عمودی است - کالای حیاتی <InlineMath math={"\\leftarrow"} /> انسولین برای بیماران دیابتی.</p>

<div style={{ margin: '2rem 0', textAlign: 'center' }}><img src="/assets/25-nemodar.svg" alt="نمودار اثر جانشینی و اثر درآمدی هیکسی" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', background: 'white', padding: '1rem' }} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>موقعیتی را در نظر بگیرید که پس از تغییر در قیمت ، مقامات دولتی با برقراری مالیات یا سوبسید به مصرف کننده ای ، مطلوبیت او را بدون تغییر باقی گذارند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در این صورت تابع تقاضای جبرانی مصرف کننده ، مقدار خرید کالاها را به صورت تابعی از قیمت آن نشان می دهد. در این حالت تابع تقاضای جبرانی از طریق به حداقل رساندن مخارج مصرف کننده با توجه به این محدودیت که مطلوبیت در سطح <InlineMath math={"\\bar{U}"} /> ثابت باشد. (CD جبرانی هیکسی)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>حرکت از <InlineMath math={"e_1"} /> به <InlineMath math={"e_2"} /> <InlineMath math={"\\leftarrow"} /> اثر کل تغییر قیمت کالا که دو اثر جانشینی و اثر درآمدی را در خود دارد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"x_1 \\rightarrow x_2 \\leftarrow"} /> اثر کل</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اثر اول <InlineMath math={"P_x \\downarrow"} /> و <InlineMath math={"\\uparrow"} /> درآمد واقعی <InlineMath math={"\\leftarrow"} /> در این حالت اثر درآمدی را حذف می کنیم [مثلاً با گرفتن مالیات] اثر درآمدی را خنثی می کنیم. خط بودجه به موازات خود کاهش یافته و به سمت چپ منتقل می شود تا جائیکه که مماس شود بر منحنی بی تفاوتی اولیه [<InlineMath math={"e_3"} />] <InlineMath math={"\\leftarrow"} /> در این حالت اثر درآمدی را از بین بردیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- حرکت <InlineMath math={"e_1 \\rightarrow e_3 \\leftarrow"} /> اثر جانشینی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>- حرکت <InlineMath math={"e_3 \\rightarrow e_2 \\leftarrow"} /> اثر درآمدی</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جمع اثر کل = <InlineMath math={"e_1 \\rightarrow e_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مطلوبیت ثابت <InlineMath math={"\\bar{U}"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>در ازای نقطه <InlineMath math={"e_3 \\leftarrow"} /> میزان <InlineMath math={"x_3"} /> به دست می آید.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر <InlineMath math={"e_1"} /> را به <InlineMath math={"e_3"} /> وصل کنیم ، منحنی تقاضای جدید با حذف اثر درآمدی و فقط و فقط با اثر جانشینی به دست می آید <InlineMath math={"\\leftarrow"} /> منحنی جبرانی یا هیکسی نامیده می شود.</p>

<h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)", marginTop: "2rem" }}>ویژگی های تقاضای جبرانی</h2>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مقدار کالایی که مصرف کننده با قیمت های داده شده خریداری می کند به شرطی که مطلوبیت ثابتی را حفظ کند و هزینه اش حداقل باشد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۱. منحنی تقاضای جبرانی همیشه شیب منفی دارد چون فقط اثر جانشینی را نشان می دهد.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۲. مطلوبیت مصرف کننده ثابت است [ یعنی درآمد واقعی آن ثابت است ].</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۳. تابع تقاضای جبرانی ، همگن از درجه صفر نسبت به قیمت کالا و مطلوبیت است.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>۴. شیب آن همواره از شیب تقاضای نرمال بیشتر است. [مهم] (چون فقط یک اثر را نشان می دهد).</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>هدف:</strong> کاهش مخارج (حداقل هزینه) یا حداقل مخارج</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><strong>محدودیت:</strong> مطلوبیت <InlineMath math={"\\leftarrow"} /> مطلوبیت ثابت [ روی تابع مطلوبیت قبلی هستیم ]</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط (مطلوبیت ثابت):</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع هدف : <InlineMath math={"Min~I = P_1 q_1 + P_2 q_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"S.t: \\bar{U} = U(q_1, q_2)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع لاگرانژ:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\mathcal{L} = P_1 q_1 + P_2 q_2 + \\mu [\\bar{U} - U(q_1, q_2)]"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>① <InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_1} = 0 \\Rightarrow P_1 - \\mu \\frac{\\partial U}{\\partial q_1} = 0 \\Rightarrow P_1 = \\mu U_1"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>② <InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_2} = 0 \\Rightarrow P_2 - \\mu \\frac{\\partial U}{\\partial q_2} = 0 \\Rightarrow P_2 = \\mu U_2"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>④ <InlineMath math={"\\frac{\\partial \\mathcal{L}}{\\partial \\mu} = 0 \\Rightarrow \\bar{U} - U(q_1, q_2) = 0"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>از تقسیم رابطه ۱ بر ۲:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\frac{\\text{①}}{\\text{②}} \\Rightarrow \\frac{P_1}{P_2} = \\frac{U_1}{U_2} = MRS"} /> (رابطه ③ - مطلوبیت نهایی برای کالای نرمال)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شیب خط هزینه = شیب منحنی بی تفاوتی</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>اگر مطلوبیت <InlineMath math={"M"} /> واحد تغییر کند، حداقل هزینه چه قدر تغییر می‌کند</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>افزایش / کاهش</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مطلوبیت نهایی کالای اول</p>
<div className="formula-box"><BlockMath math={"\\mu = \\frac{P_1}{U_1} = \\frac{P_2}{U_2} \\quad \\rightarrow \\quad \\text{ضریب لاگرانژ}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هر یک از مقادیر را محاسبه و در رابطه <InlineMath math={"\\bar{E}"} /> قرار می‌دهیم که در نهایت به تابع جبران به شکل زیر می‌رسیم.</p>
<div className="formula-box"><BlockMath math={"q_1^{CD} = q_1^{CD} (P_1, P_2, \\bar{U})"} /></div>
<div className="formula-box"><BlockMath math={"q_2^{CD} = q_2^{CD} (P_1, P_2, \\bar{U})"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تقاضای یک کالا، تابعی است از قیمت کالاها و مطلوبیت ثابت</p>
<div className="formula-box"><BlockMath math={"(x,y)"} /></div>
<div className="formula-box"><BlockMath math={"1, 2"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>شرط دوم SOC باید دترمینان هسین مرزی کوچکتر از صفر باشد (<InlineMath math={"Min"} />)</p>
<div className="formula-box"><BlockMath math={"\\begin{pmatrix} -\\mu f_{11} & -\\mu f_{12} & -U_1 \\\\ -\\mu f_{21} & -\\mu f_{22} & -U_2 \\\\ -U_1 & -U_2 & 0 \\end{pmatrix} &lt; 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تقاضای جبرانی فقط اثر جانشینی را نشان می‌دهد و اثر جانشینی نیز همیشه منفی است</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بنابراین منحنی تقاضای جبرانی همگی همیشه شیب منفی دارد و شیب آن بیشتر از شیب منحنی تقاضای نرمال می‌باشد</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مثال: (۱)</p>
<div className="formula-box"><BlockMath math={"Min: P_1 q_1 + P_2 q_2"} /></div>
<div className="formula-box"><BlockMath math={"S.t: \\bar{U} - q_1 q_2 = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\leadsto \\mathcal{L} = P_1 q_1 + P_2 q_2 + \\mu (\\bar{U} - q_1 q_2)"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_1} = 0 \\leadsto P_1 - \\mu q_2 = 0 \\Rightarrow \\frac{P_1}{P_2} = \\frac{q_2}{q_1} \\leadsto q_2 = \\frac{P_1}{P_2} q_1"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial q_2} = 0 \\leadsto P_2 - \\mu q_1 = 0"} /></div>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial \\mu} = 0 \\leadsto \\bar{U} - q_1 q_2 = 0 \\Rightarrow \\bar{U} = q_1 \\left( \\frac{P_1}{P_2} q_1 \\right) \\Rightarrow"} /></div>
<div className="formula-box"><BlockMath math={"\\bar{U} = \\frac{P_1}{P_2} q_1^2 \\leadsto q_1^{CD} = \\sqrt{\\frac{\\bar{U} P_2}{P_1}}"} /></div>
<div className="formula-box"><BlockMath math={"q_2^{CD} = \\sqrt{\\frac{\\bar{U} P_1}{P_2}}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>این توابع همگن درجه صفر از قیمت ها هستند.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>یکی از سوال های امتحانی اینست که محاسبه تقاضای جبرانی را یا نرمال را محاسبه کنیم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>نکات اسلاتسکی:</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>بررسی و تجزیه و تحلیل متغیرهای برونزا (قیمت و درآمد) و تاثیر آن روی متغیرهای درون زا (مثل مقدار) <InlineMath math={"\\leftarrow"} /> قیمت و درآمد به روی هزینه های مصرف کننده اثری ندارد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"X_i"} /> : مقدار کالای <InlineMath math={"i"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"P_i"} /> : قیمت کالای <InlineMath math={"i"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"I"} /> : درآمد</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\lambda"} /> ضریب لاگرانژ : نشان می‌دهد اگر درآمد ۱ واحد زیاد شود مطلوبیت تقریباً <InlineMath math={"\\lambda"} /> واحد زیاد می‌شود</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"\\lambda"} /> = مطلوبیت نهایی درآمد</p>

<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>جلسه ی سوم اردیبهشت ۴ و ۵</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معادلات اسلاتسکی: می‌خواهیم تحت عنوان معادلات اسلاتسکی، اثر جانشینی و اثر درآمدی را از طریق ریاضی به دست آوریم و ارتباط آن را با کشش های تقاضا به دست بیاوریم و در نتیجه ویژگی های تقاضا را بررسی کنیم که چگونه نشان دهیم.</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع مطلوبیت ما از <InlineMath math={"n"} /> کالا تشکیل شده و خط بودجه هم از <InlineMath math={"1"} /> تا <InlineMath math={"n"} /> کالا درست کرده ایم</p>
<div className="formula-box"><BlockMath math={"Max U = U(x_1, x_2, \\ldots, x_n)"} /></div>
<div className="formula-box"><BlockMath math={"S.t \\quad I = \\sum_{i=1}^n P_i x_i \\Rightarrow I = P_1 x_1 + P_2 x_2 + \\ldots + P_n x_n"} /></div>
<div className="formula-box"><BlockMath math={"\\mathcal{L} = U(x_1, x_2, \\ldots, x_n) + \\lambda \\left[ I - \\sum_{i=1}^n P_i x_i \\right]"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع لاگرانژ را می‌نویسیم و همان مراحل قبل انجام می‌دهیم (n معادله و n مجهول) و n تا تابع تقاضای نرمال به دست می‌آید (از نسبت به n کالا... مشتق می‌گیریم)</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>F.O.C:</p>
<div className="formula-box"><BlockMath math={"\\frac{\\partial \\mathcal{L}}{\\partial x_i} = 0 \\Rightarrow \\frac{\\partial U}{\\partial x_i} - \\lambda P_i = 0 \\Rightarrow U_i - \\lambda P_i = 0"} /></div>
<div className="formula-box"><BlockMath math={"U_i = \\lambda P_i"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>معادلات تقاضا برای کالاهای <InlineMath math={"1"} /> تا <InlineMath math={"n"} /> (<InlineMath math={"n"} /> کالا):</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} U_1 - \\lambda P_1 = 0 \\\\ U_2 - \\lambda P_2 = 0 \\\\ \\vdots \\\\ U_n - \\lambda P_n = 0 \\end{cases}"} /></div>
<div className="formula-box"><BlockMath math={"\\begin{bmatrix} 1 \\\\ \\vdots \\\\ n \\end{bmatrix} \\rightarrow \\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 0 \\Rightarrow I - \\sum_{i=1}^n P_i x_i = 0"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>تابع تقاضای نرمال - مارشالی ها ما <InlineMath math={"x_i^{ND} = x_i^{ND}(P_1, P_2, \\ldots, P_n, I)"} /></p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"n+1"} /> مشتق = <InlineMath math={"n+1"} /> معادله و <InlineMath math={"n"} /> تا تابع تقاضا بدست می‌آوریم</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}><InlineMath math={"n+1"} /> مجهول</p>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>مجهول های ما:</p>
<div className="formula-box"><BlockMath math={"\\begin{cases} n \\text{ معادله مطلوبیت } \\\\ \\text{یک معادله خط بودجه } \\end{cases} \\Rightarrow n+1 \\text{ معادله و مجهول}"} /></div>
<p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>هدف این صفحه پیدا کردن تابع تقاضای مارشالی</p>


    </div>
  );
};

export default Subpage2;
