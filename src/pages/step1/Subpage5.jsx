import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Layers, Sigma, HelpCircle, Lightbulb } from 'lucide-react';

const Subpage5 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Layers style={{ color: 'var(--primary)' }} />
        انواع توابع مطلوبیت و سیستم مخارج خطی (LES)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در اقتصاد خرد کاربردی و تجربی، برای مدل‌سازی ترجیحات از فرم‌های تابعی خاصی استفاده می‌شود که امکان تخمین پارامترها را با داده‌های واقعی فراهم می‌کنند. در این بخش، توابع مطلوبیت جمع‌پذیر و سیستم مخارج خطی را معرفی می‌کنیم.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۱. طبقه‌بندی توابع مطلوبیت</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>۱. توابع همگن (Homogeneous) و هموتتیک (Homothetic)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            یک تابع مطلوبیت همگن از درجه <InlineMath math="k" /> است اگر با ضرب تمام مقادیر مصرف در عدد مثبت <InlineMath math="\lambda" />، مطلوبیت کل به اندازه <InlineMath math="\lambda^k" /> برابر شود:
            <BlockMath math="U(\lambda x_1, \lambda x_2) = \lambda^k U(x_1, x_2)" />
            یک تابع <strong>هموتتیک</strong> نیز تبدیل یکنواخت (صعودی) از یک تابع همگن است (مثلاً <InlineMath math="U = \ln(x_1 x_2)" /> هموتتیک است ولی همگن نیست).
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
            <strong>ویژگی‌های اساسی ترجیحات هموتتیک (صفحه ۴۷-۴۸ جزوه):</strong>
          </p>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
            <li>در تمام توابع همگن و هموتتیک، <strong>نرخ نهایی جانشینی (MRS) همگن از درجه صفر است</strong>؛ یعنی شیب منحنی‌های بی‌تفاوتی در امتداد هر شعاعی از مبدأ ثابت است:
              <BlockMath math="MRS(\lambda x_1, \lambda x_2) = MRS(x_1, x_2)" />
            </li>
            <li>این موضوع باعث می‌شود که مسیر درآمد-مصرف (ICC) و مسیر توسعه در این توابع همواره یک <strong>خط مستقیم عبورکننده از مبدأ</strong> باشد (کشش درآمدی تقاضای تمام کالاها در این توابع برابر با ۱ است).</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--secondary)' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>۲. تابع مطلوبیت مجزا (Separable Utility)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            ترجیحات مصرف‌کننده را می‌توان به گروه‌های مجزا تقسیم کرد (مثلاً پوشاک، غذا، سرگرمی). در این تابع، مطلوبیت کل حاصل تبدیلی از مجموع مطلوبیت‌های جداگانه است:
          </p>
          <BlockMath math="U = f \left[ \sum_{i=1}^{n} U_i(x_i) \right] \quad \Rightarrow \quad U = \ln(x_1^\alpha + x_2^\beta + x_3^\gamma)" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>۳. تابع دقیقاً مجزا (Strongly Separable)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در این حالت مطلوبیت نهایی هر کالا مستقل از مصرف سایر کالاها است و هرگونه تغییر در یک کالا تاثیری بر مطلوبیت نهایی کالا‌های دیگر ندارد:
          </p>
          <BlockMath math="U = f \left[ u_1(x_1) + u_2(x_2) + \dots + u_n(x_n) \right]" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۴. تابع مطلوبیت جمع‌پذیر (Additive Utility)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            ساده‌ترین حالت که مطلوبیت کل صرفاً حاصل جمع مطلوبیت‌های مستقل تک‌تک کالاهاست:
          </p>
          <BlockMath math="U = x_1^\alpha + x_2^\beta + x_3^\gamma" />
        </div>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sigma style={{ color: 'var(--warning)' }} />
        ۲. سیستم مخارج خطی (Linear Expenditure System - LES)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        این سیستم که بر اساس تابع کلاین-روبین (Klein-Rubin) یا استون-گیری (Stone-Geary) بنا شده، بیان می‌کند که مصرف‌کننده ابتدا درآمد خود را صرف تهیه <strong>حداقل معاش (سبد بقا)</strong> کرده و سپس درآمد باقی‌مانده را با نسبت‌های ثابت بین کالاها تقسیم می‌کند.
      </p>

      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 'bold' }}>فرم لگاریتمی کلاین-روبین:</p>
        <BlockMath math="U = \sum_{i=1}^{n} \beta_i \ln (q_i - \gamma_i)" />
        <p style={{ textAlign: 'center', color: 'var(--text-main)', margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>فرم نمایی استون-گیری:</p>
        <BlockMath math="V = \prod_{i=1}^{n} (q_i - \gamma_i)^{\beta_i}" />
      </div>

      {/* Tip Box for LES Parameters */}
      <div className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(251, 191, 36, 0.03)', borderRight: '4px solid var(--warning)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <HelpCircle size={18} />
          تفسیر اقتصادی پارامترهای سیستم LES:
        </h4>
        <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', margin: 0 }}>
          <li><InlineMath math="\gamma_i" /> : <strong>سبد حداقل معاش (معیشتی)</strong> کالا است که مصرف‌کننده باید در ابتدای دوره تهیه کند. مقدار مصرف فرد هرگز نمی‌تواند کمتر از این مقدار باشد (<InlineMath math="q_i > \gamma_i" />).</li>
          <li><InlineMath math="\beta_i" /> : <strong>سهم نهایی مخارج</strong> است. نشان می‌دهد چه کسری از درآمد مازاد فرد پس از تهیه سبد معیشتی، صرف خرید این کالا می‌شود. همواره باید داشته باشیم: <InlineMath math="\sum \beta_i = 1" />.</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/50-nemodar.svg" alt="نمودار سیستم مخارج خطی" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          ویژگی مهم LES: منحنی درآمد-مصرف (ICC) آن یک <strong>خط راست</strong> است که از نقطه حداقل معاش (<InlineMath math="\gamma_1, \gamma_2" />) شروع می‌شود.
        </p>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳. استخراج تابع تقاضا در سیستم LES</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        با تشکیل تابع لاگرانژ و حل شرایط مرتبه اول (F.O.C)، مخارج بهینه برای هر کالا به صورت خطی از درآمد و قیمت‌ها حاصل می‌شود:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--primary)', marginBottom: '1.5rem' }}>
        <BlockMath math="P_i q_i = \underbrace{P_i \gamma_i}_{\text{مخارج معیشتی}} + \underbrace{\beta_i \left( I - \sum_{j=1}^{n} P_j \gamma_j \right)}_{\text{سهم از درآمد فرامعیشتی}}" />
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', marginBottom: '1.5rem' }}>
        درآمد فرامعیشتی (Supernumerary Income) = <InlineMath math="I - \sum_{j=1}^n P_j \gamma_j" />
      </p>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "2rem" }}>
        تقسیم این رابطه بر <InlineMath math="P_i" />، تابع تقاضای کالای <InlineMath math="i" /> را می‌دهد. این توابع تقاضا نسبت به درآمد و قیمت‌ها <strong>غیرخطی</strong> هستند، اما تابع مخارج (<InlineMath math="P_i q_i" />) نسبت به درآمد <strong>خطی</strong> است؛ به همین دلیل به آن سیستم مخارج خطی می‌گویند.
      </p>

      {/* Dynamic LES */}
      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. سیستم مخارج خطی پویا (Dynamic LES)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در اقتصاد خرد کاربردی و سری زمانی، ثابت فرض کردن سبد بقا (<InlineMath math="\gamma_i" />) چندان واقع‌بینانه نیست زیرا عادات مصرفی گذشته فرد روی حداقل معاش فعلی او اثرگذار است:
      </p>
      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="\gamma_{it} = \alpha_i \cdot q_{i, t-1}" />
      </div>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "2.5rem" }}>
        در این مدل‌سازی پویا، <InlineMath math="\alpha_i" /> ضریب پایداری عادت (Habit Persistence Parameter) است. این رابطه نشان می‌دهد که حداقل نیازهای معیشتی فرد در دوره فعلی، متناسب با مقدار مصرف او در دوره گذشته افزایش می‌یابد (چسبندگی مصرف و شکل‌گیری عادت).
      </p>

      {/* Solved Numerical Example for LES */}
      <div className="example-box" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Lightbulb size={18} />
          مثال عددی کامل و گام‌به‌گام سیستم مخارج خطی (LES)
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          فرض کنید در یک اقتصاد دو کالایی، تابع مطلوبیت کلاین-روبین مصرف‌کننده به صورت زیر باشد:
          <BlockMath math="U = 0.6 \ln(q_1 - 10) + 0.4 \ln(q_2 - 5)" />
          قیمت کالاها برابر با <InlineMath math="P_1 = 2" /> و <InlineMath math="P_2 = 4" /> و درآمد مصرف‌کننده برابر با <InlineMath math="I = 100" /> واحد است.
        </p>

        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>گام اول. استخراج پارامترها و محاسبه درآمد فرامعیشتی:</strong>
            <br />
            - حداقل معاش: <InlineMath math="\gamma_1 = 10 \quad , \quad \gamma_2 = 5" />
            <br />
            - سهم نهایی مخارج: <InlineMath math="\beta_1 = 0.6 \quad , \quad \beta_2 = 0.4" />
            <br />
            - مخارج معیشتی سبد بقا: <InlineMath math="P_1 \gamma_1 + P_2 \gamma_2 = (2 \times 10) + (4 \times 5) = 20 + 20 = 40" /> واحد.
            <br />
            - درآمد فرامعیشتی (مازاد): <InlineMath math="I_{super} = I - 40 = 100 - 40 = 60" /> واحد.
          </li>
          <li>
            <strong>گام دوم. محاسبه مخارج و تقاضای بهینه کالای اول:</strong>
            <br />
            مخارج بهینه: <InlineMath math="P_1 q_1 = 20 + 0.6(60) = 20 + 36 = 56" /> واحد.
            <br />
            مقدار بهینه تقاضای کالای اول: <InlineMath math="q_1^* = \frac{56}{P_1} = \frac{56}{2} = 28" /> واحد.
          </li>
          <li>
            <strong>گام سوم. محاسبه مخارج و تقاضای بهینه کالای دوم:</strong>
            <br />
            مخارج بهینه: <InlineMath math="P_2 q_2 = 20 + 0.4(60) = 20 + 24 = 44" /> واحد.
            <br />
            مقدار بهینه تقاضای کالای دوم: <InlineMath math="q_2^* = \frac{44}{P_2} = \frac{44}{4} = 11" /> واحد.
          </li>
        </ol>
        <p style={{ color: 'var(--success)', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
          سبد بهینه مصرف‌کننده در تعادل برابر با <InlineMath math="(28, 11)" /> است که در آن فرد مطلوبیت کل خود را به حداکثر رسانده است.
        </p>
      </div>

    </div>
  );
};

export default Subpage5;
