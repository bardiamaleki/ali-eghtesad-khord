import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Factory, TrendingUp, Settings, Combine } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Factory style={{ color: 'var(--primary)' }} />
        نظریه رفتار تولیدکننده و تابع تولید
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        رفتار تولیدکننده مشابه مصرف‌کننده است، اما با این تفاوت که به جای مطلوبیت، مقادیر فیزیکی تولید (کمی) بررسی می‌شود. تولیدکننده بر اساس دوره‌های زمانی مختلف تصمیم‌گیری می‌کند:
      </p>

      <ul style={{ listStyleType: "disc", paddingRight: "1.5rem", marginBottom: "2rem", color: "var(--text-muted)", lineHeight: "1.8", display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><strong>دوره آنی:</strong> زمان آنقدر کوتاه است که عرضه کاملاً عمودی و ثابت است.</li>
        <li><strong>دوره کوتاه‌مدت:</strong> حداقل یکی از عوامل تولید (معمولاً سرمایه <InlineMath math="K" />) ثابت است و تغییرات تولید تنها با تغییر عامل متغیر (نیروی کار <InlineMath math="L" />) امکان‌پذیر است.</li>
        <li><strong>دوره بلندمدت:</strong> تمام عوامل تولید متغیر هستند و هیچ عامل ثابتی وجود ندارد.</li>
      </ul>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <TrendingUp size={20} />
        ۱. تابع تولید در کوتاه‌مدت
      </h3>
      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="Q = f(L, \bar{K})" />
      </div>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در کوتاه‌مدت سه متغیر اساسی داریم:
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>تولید کل (TP)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>حداکثر مقدار تولید با سطح معینی از نهاده متغیر.</p>
          <BlockMath math="TP_L = Q" />
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تولید متوسط (AP)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>میزان تولید به ازای هر واحد نیروی کار.</p>
          <BlockMath math="AP_L = \frac{TP}{L}" />
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تولید نهایی (MP)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>تغییر تولید ناشی از استخدام یک واحد کارگر اضافی.</p>
          <BlockMath math="MP_L = \frac{\Delta TP}{\Delta L}" />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>نواحی اقتصادی تولید:</h4>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <li><strong>مرحله اول (توقف ممنوع):</strong> از مبدأ تا نقطه حداکثر <InlineMath math="AP_L" />. بازده صعودی است.</li>
            <li><strong>مرحله دوم (منطقه اقتصادی):</strong> از نقطه حداکثر <InlineMath math="AP_L" /> تا جایی که <InlineMath math="MP_L = 0" /> (یعنی حداکثر تولید کل). بهترین منطقه برای تولیدکننده است.</li>
            <li><strong>مرحله سوم (ورود ممنوع):</strong> از نقطه <InlineMath math="MP_L = 0" /> به بعد. استخدام نیروی جدید باعث <strong>کاهش</strong> تولید کل می‌شود (<InlineMath math="MP_L < 0" />).</li>
          </ol>
        </div>
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
          <img src="/svg/8-tp-mp-ap.svg" alt="مراحل تولید" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Settings size={20} />
        ۲. تابع تولید در بلندمدت (Isoquants)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در بلندمدت، تابع تولید شبیه منحنی‌های بی‌تفاوتی است، اما با این تفاوت مهم که تولید <strong>قابل شمارش (Cardinal)</strong> است در حالی که مطلوبیت فقط رتبه‌ای (Ordinal) بود.
      </p>

      <div className="formula-box">
        <BlockMath math="\text{شیب منحنی تولید یکسان (Isoquant)} = MRTS_{L,K} = -\frac{\Delta K}{\Delta L} = \frac{MP_L}{MP_K}" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>حالت الف: حداکثر تولید با هزینه ثابت</h4>
          <BlockMath math="\max Q = f(L, K) \quad \text{S.t} \quad \bar{C} = P_L \cdot L + P_K \cdot K" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>با لاگرانژ، شرط تعادل به دست می‌آید:</p>
          <BlockMath math="\frac{MP_L}{MP_K} = \frac{P_L}{P_K}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>(شرط دوم: هشین مرزی بزرگتر از صفر <InlineMath math="|\bar{H}| > 0" />)</p>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>حالت ب: حداقل هزینه با تولید ثابت</h4>
          <BlockMath math="\min C = P_L \cdot L + P_K \cdot K \quad \text{S.t} \quad \bar{Q} = f(L, K)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>باز هم شرط تعادل یکسان است:</p>
          <BlockMath math="\frac{MP_L}{MP_K} = \frac{P_L}{P_K}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>(شرط دوم: هشین مرزی کوچکتر از صفر <InlineMath math="|\bar{H}| < 0" />)</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
        <img src="/svg/10-producer-equilibrium.svg" alt="تعادل تولید در بلندمدت" style={{ maxWidth: '100%', maxHeight: '250px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>نقطه تعادل در تقاطع خط هزینه یکسان (Isocost) و منحنی تولید یکسان (Isoquant)</p>
      </div>

      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Combine size={20} />
        ۳. انواع توابع تولید و قضیه اویلر
      </h3>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--warning)', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تابع تولید همگن و قضیه اویلر (Euler's Theorem)</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          یک تابع تولید همگن از درجه <InlineMath math="k" /> است اگر <InlineMath math="f(\lambda L, \lambda K) = \lambda^k f(L, K)" />. طبق قضیه اویلر، در تابع همگن درجه یک (<InlineMath math="k=1" />)، اگر هر نهاده به اندازه تولید نهایی‌اش (<InlineMath math="MP" />) دستمزد بگیرد، کل تولید دقیقاً بین نهاده‌ها توزیع می‌شود (بدون مازاد):
        </p>
        <BlockMath math="L \cdot MP_L + K \cdot MP_K = k \cdot Q" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>نکته مهم: مجموع کشش‌های تولید نسبت به نهاده‌ها برابر درجه همگنی است (<InlineMath math="\varepsilon_L + \varepsilon_K = k" />).</p>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تابع تولید CES (کشش جانشینی ثابت)</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          تابع کشش جانشینی ثابت (Constant Elasticity of Substitution) فرم کلی توابع تولید است که در آن، درصد تغییر در نسبت نهاده‌ها به درصد تغییر در نسبت جانشینی فنی همواره مقدار ثابتی (<InlineMath math="\sigma" />) است.
        </p>
        <BlockMath math="Q = A [\gamma K^{-\rho} + (1-\gamma) L^{-\rho}]^{-\frac{1}{\rho}}" />
        <ul style={{ listStyleType: "none", paddingLeft: "0", color: "var(--text-muted)", lineHeight: "1.8", marginTop: "1rem", display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
          <li><InlineMath math="A" /> : ضریب کارایی تکنولوژی</li>
          <li><InlineMath math="\gamma" /> : پارامتر توزیع</li>
          <li><InlineMath math="\rho" /> : پارامتر جانشینی</li>
          <li><InlineMath math="\sigma = \frac{1}{1+\rho}" /> : کشش جانشینی</li>
        </ul>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
          <strong>نکته تستی:</strong> تابع کاب‌داگلاس (<InlineMath math="Q = A K^\alpha L^\beta" />) یک حالت خاص از CES است که در آن کشش جانشینی همواره یک است (<InlineMath math="\sigma = 1" />).
        </p>
      </div>

    </div>
  );
};

export default Subpage1;
