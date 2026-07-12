import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Factory, TrendingUp, Settings, Combine, Lightbulb } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Factory style={{ color: 'var(--primary)' }} />
        نظریه رفتار تولیدکننده و تابع تولید
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        رفتار تولیدکننده تا حد زیادی مشابه رفتار مصرف‌کننده است، اما با این تفاوت مهم که به جای مطلوبیت ذهنی، مقادیر فیزیکی تولید (کمی و قابل اندازه‌گیری) بررسی می‌شود. تصمیم‌گیری تولیدکننده بر اساس دوره‌های زمانی شکل می‌گیرد:
      </p>

      <ul style={{ listStyleType: "disc", paddingRight: "1.5rem", marginBottom: "2rem", color: "var(--text-muted)", lineHeight: "1.8", display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><strong>دوره آنی (Market Period):</strong> زمان آن‌قدر کوتاه است که هیچ عاملی قابل تغییر نیست و عرضه کاملاً ثابت و عمودی است.</li>
        <li><strong>دوره کوتاه‌مدت (Short-Run):</strong> حداقل یکی از عوامل تولید (معمولاً سرمایه <InlineMath math="K" />) ثابت است و تغییرات تولید تنها با استخدام عامل متغیر (نیروی کار <InlineMath math="L" />) امکان‌پذیر است.</li>
        <li><strong>دوره بلندمدت (Long-Run):</strong> تمام عوامل تولید متغیر هستند و بنگاه می‌تواند مقیاس تولید خود را تغییر دهد.</li>
      </ul>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <TrendingUp size={20} />
        ۱. تابع تولید در کوتاه‌مدت و مراحل سه‌گانه تولید
      </h3>
      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="Q = f(L, \bar{K})" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>تولید کل (TP)</h4>
          <BlockMath math="TP_L = Q" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>کل مقدار محصول تولید شده توسط بنگاه.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تولید متوسط (AP)</h4>
          <BlockMath math="AP_L = \frac{TP_L}{L}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>بازدهی متوسط هر کارگر در تولید.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تولید نهایی (MP)</h4>
          <BlockMath math="MP_L = \frac{\partial TP_L}{\partial L}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>تولید حاصل از استخدام آخرین کارگر اضافی.</p>
        </div>
      </div>

      {/* Production Stages Table for better pedagogy */}
      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>مشخصات مراحل سه‌گانه تولید در کوتاه‌مدت</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--card-border)', color: 'var(--primary)' }}>
                <th style={{ padding: '0.5rem' }}>مرحله تولید</th>
                <th style={{ padding: '0.5rem' }}>محدوده مرحله</th>
                <th style={{ padding: '0.5rem' }}>وضعیت بهره‌وری‌ها</th>
                <th style={{ padding: '0.5rem' }}>تصمیم بنگاه</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-muted)' }}>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '0.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>مرحله اول</td>
                <td style={{ padding: '0.5rem' }}>از مبدأ تا ماکزیمم <InlineMath math="AP_L" /></td>
                <td style={{ padding: '0.5rem' }}><InlineMath math="MP_L > AP_L > 0" /> (بهره‌وری متوسط رو به افزایش است)</td>
                <td style={{ padding: '0.5rem', color: 'var(--warning)' }}>غیرتولیدی (توقف ممنوع)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '0.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>مرحله دوم</td>
                <td style={{ padding: '0.5rem' }}>از ماکزیمم <InlineMath math="AP_L" /> تا جایی که <InlineMath math="MP_L = 0" /></td>
                <td style={{ padding: '0.5rem' }}><InlineMath math="AP_L > MP_L > 0" /> (هر دو نزولی اما مثبت هستند)</td>
                <td style={{ padding: '0.5rem', color: 'var(--success)', fontWeight: 'bold' }}>منطقه بهینه اقتصادی تولید</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>مرحله سوم</td>
                <td style={{ padding: '0.5rem' }}>بعد از <InlineMath math="MP_L = 0" /> (ماکزیمم تولید کل)</td>
                <td style={{ padding: '0.5rem' }}><InlineMath math="MP_L < 0" /> (استخدام کارگر جدید تولید کل را کم می‌کند)</td>
                <td style={{ padding: '0.5rem', color: 'var(--danger)' }}>غیرتولیدی (ورود ممنوع)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '3rem' }}>
        <div style={{ flex: '1.2', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
            بنگاه عقلایی همیشه در <strong>مرحله دوم تولید</strong> فعالیت می‌کند. در مرحله اول، بنگاه با استخدام کارگر بیشتر می‌تواند بازدهی متوسط کل نیروهایش را بالا ببرد، بنابراین توقف در آن غیرمنطقی است. در مرحله سوم نیز تولید نهایی منفی است و سود کاهش می‌یابد.
          </p>
        </div>
        <div className="glass-panel" style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.015)', padding: '2rem 1.5rem', borderRadius: '16px' }}>
          <img src="/svg/8-tp-mp-ap.svg" alt="مراحل تولید کوتاه‌مدت" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain' }} />
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Settings size={20} />
        ۲. تابع تولید در بلندمدت و مسئله بهینه‌سازی
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در بلندمدت تمام نهاده‌ها متغیر هستند. شیب منحنی تولید یکسان (Isoquant) نشان‌دهنده <strong>نرخ نهایی جانشینی فنی (MRTS)</strong> است:
      </p>

      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <BlockMath math="MRTS_{L,K} = -\frac{dK}{dL} = \frac{MP_L}{MP_K} = \frac{w}{r} \quad \text{(شرط مماس شدن خط هزینه و منحنی تولید)}" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>حالت مستقیم: حداکثر تولید با هزینه ثابت</h4>
          <BlockMath math="\max_{L, K} f(L, K) \quad \text{S.t:} \quad \bar{C} = w L + r K" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
            خروجی این مسئله، توابع تقاضای مشتق‌شده عوامل تولید است. شرط کافی (S.O.C) آن بزرگتر بودن دترمینان هشین مرزی از صفر است (<InlineMath math="|\bar{H}| > 0" />).
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>حالت دوگان: حداقل هزینه با تولید ثابت</h4>
          <BlockMath math="\min_{L, K} w L + r K \quad \text{S.t:} \quad f(L, K) = \bar{Q}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
            خروجی این مسئله، توابع تقاضای شرطی عوامل تولید است. شرط کافی (S.O.C) آن کوچکتر بودن دترمینان هشین مرزی از صفر است (<InlineMath math="|\bar{H}| < 0" />).
          </p>
        </div>
      </div>

      <div className="image-showcase">
        <img src="/svg/10-producer-equilibrium.svg" alt="تعادل تولید بلندمدت" />
        <div className="image-showcase-caption">نقطه تعادل تولیدکننده در محل مماس شدن منحنی تولید یکسان و خط هم‌هزینه</div>
      </div>

      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Combine size={20} />
        ۳. انواع توابع تولید و قضیه اویلر
      </h3>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--warning)', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>قضیه اویلر (Euler's Theorem) در تولید</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          اگر تابع تولید همگن از درجه <InlineMath math="k" /> باشد (<InlineMath math="f(\lambda L, \lambda K) = \lambda^k f(L, K)" />)، طبق قضیه اویلر داریم:
        </p>
        <BlockMath math="L \cdot MP_L + K \cdot MP_K = k \cdot Q" />
        <div className="glass-panel" style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.01)', borderLeft: '3px solid var(--warning)', marginTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            <strong>تفسیر اقتصادی (درجه ۱):</strong> در بازدهی ثابت نسبت به مقیاس (<InlineMath math="k=1" />)، اگر ارزش تولید نهایی هر عامل به عنوان دستمزد به او پرداخت شود، کل محصول تولید شده دقیقاً بین نیروی کار و سرمایه توزیع شده و هیچ مازادی برای بنگاه باقی نمی‌ماند (سود اقتصادی برابر صفر است).
          </p>
        </div>
      </div>

      {/* CES details */}
      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تابع تولید CES (کشش جانشینی ثابت)</h4>
        <BlockMath math="Q = A [\gamma K^{-\rho} + (1-\gamma) L^{-\rho}]^{-\frac{1}{\rho}}" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          کشش جانشینی عوامل تولید در این تابع همواره ثابت و برابر است با: <InlineMath math="\sigma = \frac{1}{1+\rho}" />.
        </p>

        <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
          <h5 style={{ color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Lightbulb size={16} />
            اثبات تفصیلی حد تابع CES به کاب-داگلاس (هوپیتال - صفحه ۷۷ جزوه):
          </h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            می‌خواهیم نشان دهیم وقتی پارامتر جانشینی به سمت صفر میل می‌کند (<InlineMath math="\rho \to 0" />)، تابع CES به تابع کاب-داگلاس تبدیل می‌شود:
            <br />
            ابتدا از طرفین تابع CES لگاریتم طبیعی می‌گیریم:
            <BlockMath math="\ln Q = \ln A - \frac{\ln [\gamma K^{-\rho} + (1-\gamma) L^{-\rho}]}{\rho}" />
            با میل دادن حد به سمت صفر (<InlineMath math="\rho \to 0" />)، کسر به صورت مبهم <InlineMath math="\frac{0}{0}" /> در می‌آید. با اعمال قاعده هوپیتال و مشتق‌گیری نسبت به متغیر حد (<InlineMath math="\rho" />) داریم:
            <BlockMath math="\lim_{\rho \to 0} \ln Q = \ln A - \lim_{\rho \to 0} \frac{\frac{\partial}{\partial \rho} \ln [\gamma K^{-\rho} + (1-\gamma) L^{-\rho}]}{\frac{\partial}{\partial \rho} \rho}" />
            محاسبه مشتق صورت کسر:
            <BlockMath math="\frac{\partial}{\partial \rho} \ln [\dots] = \frac{-\gamma K^{-\rho} \ln K - (1-\gamma) L^{-\rho} \ln L}{\gamma K^{-\rho} + (1-\gamma) L^{-\rho}}" />
            با جایگذاری <InlineMath math="\rho = 0" /> در حد فوق (با توجه به اینکه <InlineMath math="X^0 = 1" />):
            <BlockMath math="= \frac{-\gamma \ln K - (1-\gamma) \ln L}{\gamma + (1-\gamma)} = -\gamma \ln K - (1-\gamma) \ln L" />
            اکنون با جایگذاری در معادله اصلی لگاریتم تولید:
            <BlockMath math="\lim_{\rho \to 0} \ln Q = \ln A - [-\gamma \ln K - (1-\gamma) \ln L] = \ln A + \gamma \ln K + (1-\gamma) \ln L" />
            با گرفتن نمایی (Anti-log) از طرفین، فرم کلاسیک کاب-داگلاس اثبات می‌شود:
            <BlockMath math="Q = A K^\gamma L^{1-\gamma}" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subpage1;
