import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Layers, Sigma, ListPlus, ActivitySquare } from 'lucide-react';

const Subpage5 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Layers style={{ color: 'var(--primary)' }} />
        انواع توابع مطلوبیت و سیستم مخارج خطی (LES)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در اقتصاد خرد تجربی، برای مدل‌سازی ترجیحات از فرم‌های تابعی خاصی استفاده می‌شود که امکان تخمین پارامترها را با داده‌های واقعی فراهم می‌کنند. در این بخش، توابع مطلوبیت جمع‌پذیر و سیستم مخارج خطی را معرفی می‌کنیم.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۱. طبقه‌بندی توابع مطلوبیت</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>۱. توابع همگن (Homogeneous Utility) و هموتتیک (Homothetic)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            یک تابع مطلوبیت همگن از درجه <InlineMath math="k" /> است اگر با ضرب تمام نهاده‌ها در عدد مثبت <InlineMath math="\lambda" />، مطلوبیت کل به اندازه <InlineMath math="\lambda^k" /> برابر شود:
            <BlockMath math="U(\lambda x_1, \lambda x_2) = \lambda^k U(x_1, x_2)" />
            یک تابع **هموتتیک** نیز تبدیل یکنواخت (صعودی) از یک تابع همگن است (مثلاً <InlineMath math="U = \ln(x_1 x_2)" /> هموتتیک است ولی همگن نیست).
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
            <strong>ویژگی‌های اساسی (صفحه ۴۷-۴۸ جزوه):</strong>
          </p>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
            <li>در توابع همگن، مطلوبیت‌های نهایی کالاها (<InlineMath math="MU" />) همگن از درجه <InlineMath math="k-1" /> هستند.</li>
            <li>در تمام توابع همگن و هموتتیک، **نرخ نهایی جانشینی (MRS) همگن از درجه صفر است**؛ یعنی شیب منحنی‌های بی‌تفاوتی در امتداد هر شعاعی از مبدأ ثابت است:
              <BlockMath math="MRS(\lambda x_1, \lambda x_2) = MRS(x_1, x_2)" />
            </li>
            <li>این موضوع باعث می‌شود که مسیر درآمد-مصرف (ICC) و مسیر توسعه در این توابع همواره یک **خط مستقیم عبورکننده از مبدأ** باشد.</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--secondary)' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>۲. تابع مطلوبیت مجزا (Separable Utility)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در این تابع، کل مطلوبیت تبدیلی از مجموع مطلوبیت‌های جداگانه است. با این حال، به دلیل وجود تابع کلی <InlineMath math="f" />، مطلوبیت نهایی کالاها همچنان به هم مرتبط است.
          </p>
          <BlockMath math="U = f \left[ \sum_{i=1}^{n} U(x_i) \right] \quad \Rightarrow \quad U = \ln(x_1^\alpha + x_2^\beta + x_3^\gamma)" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>۳. تابع دقیقاً مجزا (Strongly Separable)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            تابع کلی تبدیلی از مجموع توابعی است که هر کدام منحصراً به یک کالا بستگی دارند. در اینجا مطلوبیت نهایی هر کالا مستقل از مصرف سایر کالاها است.
          </p>
          <BlockMath math="U = f \left[ u_1(x_1) + u_2(x_2) + \dots + u_n(x_n) \right] \quad \Rightarrow \quad U = \ln x_1^\alpha + \ln x_2^\beta + \dots" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۴. تابع مطلوبیت جمع‌پذیر (Additive Utility)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            ساده‌ترین حالت که مطلوبیت کل صرفاً حاصل جمع مطلوبیت‌های تک‌تک کالاهاست. هر تابع مجزا، در واقع یک تبدیل یکنواخت از یک تابع جمع‌پذیر است.
          </p>
          <BlockMath math="U = x_1^\alpha + x_2^\beta + x_3^\gamma" />
        </div>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sigma style={{ color: 'var(--warning)' }} />
        ۲. سیستم مخارج خطی (Linear Expenditure System - LES)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        این سیستم که به تابع کلاین-روبین (Klein-Rubin) یا استون-گیری (Stone-Geary) نیز معروف است، بیان می‌کند که مصرف‌کننده ابتدا درآمد خود را صرف <strong>حداقل معاش (سبد بقا)</strong> کرده و سپس درآمد باقی‌مانده را با نسبت‌های ثابت بین کالاها تقسیم می‌کند.
      </p>

      <div className="formula-box">
        <p style={{ textAlign: 'center', color: 'var(--text-main)', marginBottom: '0.5rem' }}>فرم لگاریتمی (کلاین-روبین):</p>
        <BlockMath math="U = \sum_{i=1}^{n} \beta_i \ln (q_i - \gamma_i)" />
        <p style={{ textAlign: 'center', color: 'var(--text-main)', margin: '1rem 0 0.5rem 0' }}>فرم نمایی (استون-گیری):</p>
        <BlockMath math="V = \prod_{i=1}^{n} (q_i - \gamma_i)^{\beta_i}" />
      </div>

      <ul style={{ listStyleType: "none", paddingLeft: "0", color: "var(--text-muted)", lineHeight: "2", marginTop: "1.5rem" }}>
        <li><InlineMath math="\gamma_i" /> : <strong>حداقل معاش</strong> (مقدار ضروری از کالا که باید مصرف شود).</li>
        <li><InlineMath math="\beta_i" /> : <strong>سهم نهایی مخارج</strong> (نشان می‌دهد چه کسری از درآمد مازاد، صرف این کالا می‌شود). همواره <InlineMath math="\sum \beta_i = 1" />.</li>
      </ul>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/50-nemodar.svg" alt="نمودار سیستم مخارج خطی" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          ویژگی مهم LES: منحنی درآمد-مصرف (ICC) آن یک <strong>خط راست</strong> است که از نقطه حداقل معاش (<InlineMath math="\gamma_1, \gamma_2" />) شروع می‌شود.
        </p>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳. استخراج تابع تقاضا در سیستم LES</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        با تشکیل تابع لاگرانژ و حل شرایط مرتبه اول (F.O.C)، مخارج بهینه برای هر کالا به صورت زیر به دست می‌آید:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--primary)' }}>
        <BlockMath math="P_i q_i = \underbrace{P_i \gamma_i}_{\text{مخارج معیشتی}} + \underbrace{\beta_i \left( I - \sum_{j=1}^{n} P_j \gamma_j \right)}_{\text{سهم از درآمد فرامعیشتی}}" />
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>
        درآمد فرامعیشتی (Supernumerary Income) = <InlineMath math="I - \sum P_j \gamma_j" />
      </p>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginTop: "1rem" }}>
        تقسیم این رابطه بر <InlineMath math="P_i" />، تابع تقاضای کالای <InlineMath math="i" /> را می‌دهد. این توابع تقاضا نسبت به درآمد و قیمت‌ها <strong>غیرخطی</strong> هستند، اما تابع مخارج (<InlineMath math="P_i q_i" />) <strong>خطی</strong> است؛ به همین دلیل به آن سیستم مخارج خطی می‌گویند.
      </p>

      {/* Dynamic LES */}
      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. سیستم مخارج خطی پویا (Dynamic LES)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در تحلیل‌های سری زمانی، عادت مصرف دوره قبل مصرف‌کننده نقش بسزایی در تعیین حداقل معاش دوره فعلی دارد. در سیستم مخارج خطی پویا (Dynamic LES)، پارامتر حداقل معاش (<InlineMath math="\gamma_i" />) ثابت نبوده و به صورت پویا با رفتار مصرف دوره گذشته مرتبط می‌شود:
      </p>
      <div className="formula-box">
        <BlockMath math="\gamma_{it} = \alpha_i \cdot q_{i, t-1}" />
      </div>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        در این رابطه، <InlineMath math="\gamma_{it}" /> حداقل معاش کالا در دوره <InlineMath math="t" />، <InlineMath math="q_{i, t-1}" /> مقدار مصرف شده از کالا در دوره گذشته و <InlineMath math="\alpha_i" /> ضریب پایداری عادت (Habit Persistence Parameter) است. این مدل‌سازی به خوبی پدیده چسبندگی مصرف و شکل‌گیری عادت در ترجیحات مصرف‌کننده را نشان می‌دهد.
      </p>

      {/* Solved Numerical Example for LES */}
      <div className="example-box" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>مثال عددی حل‌‌شده سیستم مخارج خطی (LES)</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          فرض کنید در یک اقتصاد دو کالایی، تابع مطلوبیت کلاین-روبین مصرف‌کننده به صورت زیر است:
          <BlockMath math="U = 0.6 \ln(q_1 - 10) + 0.4 \ln(q_2 - 5)" />
          قیمت کالاها برابر با <InlineMath math="P_1 = 2" /> و <InlineMath math="P_2 = 4" /> و درآمد مصرف‌کننده برابر با <InlineMath math="I = 100" /> واحد است.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 'bold' }}>
          گام ۱: مشخص کردن پارامترها و محاسبه درآمد معیشتی و فرامعیشتی
        </p>
        <ul style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', marginRight: '1.2rem' }}>
          <li>حداقل معاش کالای اول: <InlineMath math="\gamma_1 = 10" /></li>
          <li>حداقل معاش کالای دوم: <InlineMath math="\gamma_2 = 5" /></li>
          <li>سهم نهایی مخارج کالای اول: <InlineMath math="\beta_1 = 0.6" /></li>
          <li>سهم نهایی مخارج کالای دوم: <InlineMath math="\beta_2 = 0.4" /></li>
          <li>مخارج معیشتی کل: <InlineMath math="P_1 \gamma_1 + P_2 \gamma_2 = (2 \times 10) + (4 \times 5) = 20 + 20 = 40" /></li>
          <li>درآمد فرامعیشتی (مازاد): <InlineMath math="I_{super} = I - (P_1 \gamma_1 + P_2 \gamma_2) = 100 - 40 = 60" /></li>
        </ul>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 'bold', marginTop: '1rem' }}>
          گام ۲: محاسبه مخارج و مقادیر تقاضای بهینه برای هر کالا
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          مخارج بهینه کالای اول:
          <BlockMath math="P_1 q_1 = P_1 \gamma_1 + \beta_1 (I - \sum P_j \gamma_j) = 20 + 0.6(60) = 20 + 36 = 56" />
          مقدار تقاضای کالای اول:
          <BlockMath math="q_1^* = \frac{56}{P_1} = \frac{56}{2} = 28" />
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          مخارج بهینه کالای دوم:
          <BlockMath math="P_2 q_2 = P_2 \gamma_2 + \beta_2 (I - \sum P_j \gamma_j) = 20 + 0.4(60) = 20 + 24 = 44" />
          مقدار تقاضای کالای دوم:
          <BlockMath math="q_2^* = \frac{44}{P_2} = \frac{44}{4} = 11" />
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 'bold' }}>
          نتیجه‌گیری:
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
          مصرف‌کننده برای بیشینه‌سازی مطلوبیت خود، ۲۸ واحد از کالای اول و ۱۱ واحد از کالای دوم را تقاضا می‌کند. مطلوبیت کل به دست آمده برابر است با:
          <BlockMath math="U^* = 0.6 \ln(28 - 10) + 0.4 \ln(11 - 5) = 0.6 \ln(18) + 0.4 \ln(6) \approx 0.6(2.89) + 0.4(1.79) = 1.734 + 0.716 = 2.45" />
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
        <div className="glass-panel" style={{ flex: '1', minWidth: '300px', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ListPlus size={18} />
            مزایای سیستم LES
          </h4>
          <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li>کاهش چشمگیر تعداد پارامترهای نیازمند برآورد (صرفه‌جویی در درجات آزادی).</li>
            <li>خطی بودن مدل نسبت به درآمد و قیمت‌ها (سهولت در رگرسیون).</li>
            <li>تفسیر بسیار آسان و شهودی ضرایب (<InlineMath math="\beta" /> و <InlineMath math="\gamma" />).</li>
            <li>امکان استخراج تقاضا برای یک <strong>گروه از کالاها</strong> (مثلاً گروه خوراک) به جای تک‌تک کالاها.</li>
            <li>قابلیت پویایی (Dynamic LES) با مرتبط کردن <InlineMath math="\gamma_t" /> به مصرف دوره قبل (<InlineMath math="\gamma_t = \alpha q_{t-1}" />).</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ flex: '1', minWidth: '300px', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ActivitySquare size={18} />
            معایب و محدودیت‌ها
          </h4>
          <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li>عدم توانایی در توضیح <strong>کالاهای پست</strong> (کشش درآمدی در این مدل همواره مثبت و متمایل به یک است).</li>
            <li>چون یک تابع جمع‌پذیر است، <strong>اثرات جانشینی متقاطع (Cross-Price Effects)</strong> بین کالاها را نادیده می‌گیرد (صفر فرض می‌کند).</li>
            <li>فرض می‌کند سهم نهایی مخارج (<InlineMath math="\beta_i" />) در طول زمان و سطوح درآمدی ثابت است، در حالی که در واقعیت ممکن است با افزایش ثروت تغییر کند.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Subpage5;
