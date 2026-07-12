import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { BookOpen, Compass, HelpCircle, CheckSquare } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <BookOpen style={{ color: 'var(--primary)' }} />
        رفتار مصرف‌کننده و نظریه مطلوبیت
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        هدف مصرف‌کننده عقلایی، تخصیص سبد درآمدی خود به کالاهاست به گونه‌ای که به <strong>حداکثر مطلوبیت (Utility)</strong> ممکن دست یابد. این فرآیند تحت محدودیت بودجه فرد انجام می‌شود.
      </p>

      {/* Concept Box: Cardinal vs Ordinal */}
      <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.03)', borderRight: '4px solid var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <HelpCircle size={18} />
          مطلوبیت عددی (Cardinal) در مقابل مطلوبیت رتبه‌ای (Ordinal)
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          اقتصاددانان کلاسیک مطلوبیت را عددی و قابل اندازه‌گیری با واحد یوتیل (Util) می‌دانستند. اما در اقتصاد مدرن، مطلوبیت صرفاً مفهومی <strong>رتبه‌ای</strong> است؛ یعنی مصرف‌کننده نیازی به اعلام عدد دقیق مطلوبیت ندارد، بلکه فقط باید بتواند سبدهای کالا را بر اساس ترجیحات خود رتبه‌بندی کند (مثلاً اعلام کند سبد A را به B ترجیح می‌دهد).
        </p>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱. منحنی‌های بی‌تفاوتی (Indifference Curves)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در یک فضای دو کالایی، منحنی بی‌تفاوتی مکان هندسی سبدهایی از کالاهاست که **سطح مطلوبیت یکسانی** را برای مصرف‌کننده ایجاد می‌کنند.
      </p>
      
      <div style={{ margin: '2rem 0', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src="/svg/graph3_1.svg" alt="منحنی‌های بی‌تفاوتی" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>منحنی‌های بی‌تفاوتی با مطلوبیت متفاوت (<InlineMath math="U_3 > U_2 > U_1" />)</p>
      </div>

      <p style={{ color: "var(--text-main)", fontWeight: 'bold', marginBottom: "0.75rem" }}>ویژگی‌های اساسی منحنی‌های بی‌تفاوتی:</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--accent)' }}>
          <h5 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>۱. تحدب نسبت به مبدأ</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            به دلیل قانون مطلوبیت نهایی نزولی و نزولی بودن نرخ نهایی جانشینی (MRS)، منحنی‌ها همواره نسبت به مبدأ محدب هستند.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--accent)' }}>
          <h5 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>۲. عدم تقاطع منحنی‌ها</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            منحنی‌های بی‌تفاوتی هرگز یکدیگر را قطع نمی‌کنند. تقاطع آن‌ها منجر به تناقض با اصل انتقال‌پذیری ترجیحات می‌شود.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--accent)' }}>
          <h5 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>۳. شیب نزولی (منفی)</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            چون هر دو کالا مطلوبیت‌بخش هستند، برای افزایش مصرف یک کالا بدون تغییر مطلوبیت، باید مصرف کالای دیگر کاهش یابد.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--accent)' }}>
          <h5 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>۴. مطلوبیت بالاتر در فواصل دورتر</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            هر چه منحنی از مبدأ مختصات دورتر قرار بگیرد، به دلیل اصل سیری‌ناپذیری، سطح مطلوبیت بالاتری را نشان می‌دهد.
          </p>
        </div>
      </div>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        <strong>نرخ نهایی جانشینی (MRS):</strong> شیب منحنی بی‌تفاوتی در هر نقطه است و نشان می‌دهد فرد حاضر است چه مقدار از کالای <InlineMath math="y" /> را از دست بدهد تا یک واحد اضافی از <InlineMath math="x" /> به دست آورد بدون اینکه مطلوبیت او تغییر کند:
      </p>
      <div className="formula-box" style={{ marginBottom: '2.5rem' }}>
        <BlockMath math="MRS_{xy} = -\frac{dy}{dx} = \frac{MU_x}{MU_y} = \frac{\partial U / \partial x}{\partial U / \partial y}" />
      </div>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>۲. اصول حاکم بر ترجیحات مصرف‌کننده (Axioms of Preference)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برای توصیف رفتار منطقی مصرف‌کننده، ترجیحات او باید پنج اصل اساسی زیر را داشته باشند:
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>۱. انعکاس‌پذیری (Reflexivity)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>هر سبد کالا حداقل به اندازه خودش ترجیح داده می‌شود یا با خودش بی‌تفاوت است (<InlineMath math="A \succeq A" />).</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--secondary)' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>۲. کامل بودن (Completeness)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>فرد همواره می‌تواند بین دو سبد دلخواه مقایسه انجام دهد (<InlineMath math="A \succeq B" /> یا <InlineMath math="B \succeq A" /> یا هر دو).</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>۳. انتقال‌پذیری (Transitivity)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>اگر سبد <InlineMath math="A" /> از <InlineMath math="B" /> و <InlineMath math="B" /> از <InlineMath math="C" /> بهتر باشد، حتماً <InlineMath math="A" /> از <InlineMath math="C" /> بهتر است.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۴. سیری‌ناپذیری (Non-Satiation)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>«بیشتر بهتر است». مصرف‌کننده همواره سبدی با کالا‌های بیشتر را به کمتر ترجیح می‌دهد.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>۵. پیوستگی (Continuity)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>اگر سبد A به B ترجیح داده شود، سبدهایی که در همسایگی بسیار نزدیک A قرار دارند نیز به B ترجیح داده می‌شوند.</p>
        </div>
      </div>
      
      <div style={{ margin: '2rem 0', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src="/svg/13-continuity.svg" alt="اصل پیوستگی ترجیحات" style={{ maxWidth: '100%', maxHeight: '250px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>پیوستگی ترجیحات نشان‌دهنده نبود رفتارهای پرشی و ناگهانی در تصمیم‌گیری است.</p>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Compass style={{ color: 'var(--accent)' }} />
        ۳. تعادل مصرف‌کننده
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        مصرف‌کننده برای رسیدن به تعادل، سبدی را روی خط بودجه انتخاب می‌کند که بالاترین منحنی بی‌تفاوتی ممکن را لمس کند. به لحاظ هندسی، این تعادل در نقطه مماس شدن خط بودجه و منحنی بی‌تفاوتی رخ می‌دهد:
      </p>
      
      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <BlockMath math="\text{شیب خط بودجه} = -\frac{P_x}{P_y} \quad , \quad \text{شیب منحنی بی‌تفاوتی} = -MRS_{xy} = -\frac{MU_x}{MU_y}" />
        <p style={{ textAlign: 'center', margin: '1rem 0', fontWeight: 'bold', color: 'var(--text-main)' }}>شرط تعادل نهایی مصرف‌کننده:</p>
        <BlockMath math="\frac{MU_x}{MU_y} = \frac{P_x}{P_y} \implies \frac{MU_x}{P_x} = \frac{MU_y}{P_y}" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
          مطلوبیت حاصل از آخرین ریال خرج شده روی تمام کالاها باید با هم برابر باشد.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', margin: '2rem 0' }}>
        <div className="glass-panel" style={{ padding: '1rem', flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img src="/svg/graph4_1.svg" alt="خط بودجه" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>محدودیت خط بودجه: مرز انتخاب‌های ممکن مصرف‌کننده</p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img src="/svg/13-equilibrium.svg" alt="تعادل مصرف کننده" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>نقطه تعادل بهینه در نقطه تماس خط بودجه و منحنی بی‌تفاوتی</p>
        </div>
      </div>

      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. تغییرات بودجه و استخراج تابع تقاضای مارشالی</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تغییرات قیمت و درآمد باعث حرکت خط بودجه و جابجایی نقاط تعادل بهینه مصرف‌کننده می‌شود:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>الف) تغییر قیمت کالا و منحنی قیمت - مصرف (PCC)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با تغییر مداوم قیمت کالای اول (<InlineMath math="P_x" />)، خط بودجه حول محور عمودی چرخیده و نقاط تعادل پی‌درپی شکل می‌گیرند. اتصال این نقاط، منحنی <strong>PCC (Price Consumption Curve)</strong> را می‌سازد. با انتقال این نقاط به فضای قیمت-مقدار، <strong>منحنی تقاضای مارشالی</strong> استخراج می‌شود.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img src="/svg/6-pcc-demand.svg" alt="منحنی PCC و استخراج تقاضا" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>ب) تغییر درآمد و منحنی درآمد - مصرف (ICC)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با افزایش متوالی درآمد مصرف‌کننده، خط بودجه به طور موازی به بالا انتقال می‌یابد. اتصال نقاط تعادل بهینه حاصل، منحنی <strong>ICC (Income Consumption Curve)</strong> را ایجاد می‌کند که نشان‌دهنده نوع کالاها (عادی، لوکس یا پست) است.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img src="/svg/6-icc.svg" alt="منحنی ICC و مسیر درآمد مصرف" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem' }}>۵. ویژگی‌های اساسی تابع تقاضای مارشالی</h3>
      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="q_i^* = q_i (P_1, P_2, I)" />
      </div>
      
      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)', marginBottom: '2.5rem' }}>
        <ul style={{ listStyleType: "square", paddingRight: "1.2rem", color: "var(--text-muted)", lineHeight: "2", margin: 0 }}>
          <li><strong>همگنی درجه صفر نسبت به قیمت‌ها و درآمد:</strong> اگر تمامی قیمت‌ها و درآمد با ضریب ثابت ضرب شوند، مقدار تقاضا بدون تغییر می‌ماند (نبود توهم پولی).</li>
          <li><strong>تک‌مقداری بودن:</strong> به ازای هر ترکیب مشخص از قیمت‌ها و درآمد، یک مقدار مشخص بهینه تقاضا می‌شود.</li>
          <li><strong>ثبات درآمد اسمی:</strong> در طول منحنی تقاضای مارشالی، درآمد اسمی ثابت است اما قدرت خرید واقعی و سطح مطلوبیت تغییر می‌کند.</li>
        </ul>
      </div>

      {/* Section 6: Special Cases */}
      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1.5rem' }}>۶. حالات خاص ترجیحات و استخراج توابع تقاضا (راه‌حل‌های گوشه‌ای)</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Substitutes */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>الف) جانشین‌های کامل (Perfect Substitutes)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            منحنی بی‌تفاوتی به صورت خط راست است (<InlineMath math="U = ax + by" />). نرخ MRS همواره ثابت است. تعادل معمولاً به صورت راه‌حل گوشه‌ای (تنها خرید یک کالا) به شکل زیر است:
          </p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.85rem', paddingRight: '1.2rem', lineHeight: '1.8' }}>
            <li>اگر <InlineMath math="\frac{a}{b} > \frac{P_x}{P_y}" />: خرید فقط از کالای اول (<InlineMath math="x = I/P_x , y = 0" />).</li>
            <li>اگر <InlineMath math="\frac{a}{b} < \frac{P_x}{P_y}" />: خرید فقط از کالای دوم (<InlineMath math="x = 0 , y = I/P_y" />).</li>
            <li>اگر شیب‌ها برابر باشند: بی‌نهایت نقطه تعادلی روی خط بودجه وجود دارد.</li>
          </ul>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <img src="/svg/15-nemodar2.svg" alt="ترجیحات جانشین کامل" style={{ maxWidth: '100%', maxHeight: '180px' }} />
          </div>
        </div>

        {/* Complements */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>ب) مکمل‌های کامل (Perfect Complements)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            منحنی بی‌تفاوتی به شکل ال (L) است (<InlineMath math="U = \min(ax, by)" />). کالاها باید با نسبت ثابت مصرف شوند. تعادل همیشه در گوشه‌ی منحنی بی‌تفاوتی شکل می‌گیرد:
          </p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.85rem', paddingRight: '1.2rem', lineHeight: '1.8' }}>
            <li>شرط گوشه بهینه: <InlineMath math="ax = by \implies y = \frac{a}{b} x" />.</li>
            <li>با جایگذاری در خط بودجه، تابع تقاضا به دست می‌آید:</li>
            <BlockMath math="x^* = \frac{I}{P_x + \frac{a}{b} P_y} \quad , \quad y^* = \frac{I}{\frac{b}{a} P_x + P_y}" />
          </ul>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <img src="/svg/15-nemodar3.svg" alt="ترجیحات مکمل کامل" style={{ maxWidth: '100%', maxHeight: '180px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subpage2;
