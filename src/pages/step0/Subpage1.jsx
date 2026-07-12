import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { BookOpen, TrendingUp, HelpCircle } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', color: 'var(--primary)' }}>
          <BookOpen style={{ color: 'var(--primary)' }} />
          ۱. تشکیل تابع لاگرانژ و شرایط مرتبه اول (F.O.C)
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          بهینه‌سازی مقید، سنگ بنای اصلی تحلیل‌های ریاضی در اقتصاد خرد است. در دنیای واقعی، خانوارها و بنگاه‌ها همواره با محدودیت‌هایی (مانند بودجه یا منابع تولیدی محدود) مواجه هستند. برای پیدا کردن نقطه بهینه تحت این محدودیت‌ها، از <strong>روش ضرایب لاگرانژ (Lagrange Multipliers Method)</strong> استفاده می‌کنیم. این روش، مسئله بهینه‌سازی مقید را به یک مسئله بدون قیدِ معادل تبدیل می‌کند.
        </p>

        {/* Dynamic Tip Box */}
        <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(52, 211, 153, 0.05)', borderRight: '4px solid var(--success)', marginBottom: '2rem' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <HelpCircle size={18} />
            فلسفه روش لاگرانژ چیست؟
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
            در این روش، ما تابع هدف (مثلاً مطلوبیت یا تولید) را با حاصل‌ضرب یک متغیر کمکی به نام <strong>ضریب لاگرانژ (<InlineMath math="\lambda" />)</strong> در قید مسئله (که برابر صفر تنظیم شده) جمع می‌کنیم. ضریب لاگرانژ پیونددهنده ریاضی اهداف با محدودیت‌هاست.
          </p>
        </div>

        {/* Consumer Optimization */}
        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) ریاضیات مصرف‌کننده (رویکرد مستقیم / استخراج تقاضای مارشالی)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          هدف مصرف‌کننده، حداکثر کردن مطلوبیت فیزیکی یا روانی حاصل از مصرف کالاها با توجه به محدودیت بودجه اوست. بیایید این فرآیند را به صورت گام‌به‌گام بررسی کنیم:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>گام اول: فرمول‌بندی مسئله بهینه‌سازی مقید</h4>
            <BlockMath math="\max_{q_1, q_2} U(q_1, q_2) \quad \text{S.t:} \quad I = P_1 q_1 + P_2 q_2" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              در اینجا، <InlineMath math="U" /> تابع مطلوبیت، <InlineMath math="q_1" /> و <InlineMath math="q_2" /> مقادیر مصرف کالاها، <InlineMath math="P_1" /> و <InlineMath math="P_2" /> قیمت‌ها و <InlineMath math="I" /> درآمد مصرف‌کننده است.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>گام دوم: تشکیل تابع لاگرانژ</h4>
            <BlockMath math="\mathcal{L}(q_1, q_2, \lambda) = U(q_1, q_2) + \lambda [I - P_1 q_1 - P_2 q_2]" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              محدودیت بودجه را به صورت تفاضلی <InlineMath math="[I - P_1 q_1 - P_2 q_2 = 0]" /> درآورده و در ضریب لاگرانژ ضرب می‌کنیم تا تابع لاگرانژ شکل بگیرد.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>گام سوم: استخراج شرایط مرتبه اول (F.O.C)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              از تابع لاگرانژ نسبت به سه متغیر مجهول (<InlineMath math="q_1, q_2, \lambda" />) مشتق جزئی گرفته و برابر صفر قرار می‌دهیم:
            </p>
            <BlockMath math="\begin{aligned} \text{۱) } &\frac{\partial \mathcal{L}}{\partial q_1} = 0 \Rightarrow \frac{\partial U}{\partial q_1} - \lambda P_1 = 0 \Rightarrow MU_1 = \lambda P_1 \\ \text{۲) } &\frac{\partial \mathcal{L}}{\partial q_2} = 0 \Rightarrow \frac{\partial U}{\partial q_2} - \lambda P_2 = 0 \Rightarrow MU_2 = \lambda P_2 \\ \text{۳) } &\frac{\partial \mathcal{L}}{\partial \lambda} = 0 \Rightarrow I - P_1 q_1 - P_2 q_2 = 0 \end{aligned}" />
          </div>

          <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>گام چهارم: حل سیستم معادلات و استخراج تقاضای مارشالی</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              با تقسیم رابطه (۱) بر رابطه (۲)، ضریب لاگرانژ حذف شده و شرط تعادل طلایی مصرف‌کننده (برابری نرخ جانشینی نهایی با نسبت قیمت‌ها) حاصل می‌شود:
            </p>
            <BlockMath math="\frac{MU_1}{MU_2} = \frac{P_1}{P_2} \Rightarrow MRS_{1,2} = \frac{P_1}{P_2} \quad , \quad \lambda = \frac{MU_1}{P_1} = \frac{MU_2}{P_2}" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
              با حل همزمان این شرط تعادلی با محدودیت بودجه (معادله ۳)، مقادیر بهینه به صورت توابع قیمت و درآمد به دست می‌آیند که به آن‌ها <strong>توابع تقاضای مارشالی (Ordinary/Marshallian Demand)</strong> می‌گوییم:
            </p>
            <BlockMath math="q_1^* = q_1(P_1, P_2, I) \quad , \quad q_2^* = q_2(P_1, P_2, I)" />
          </div>
        </div>

        {/* Detailed Mathematical Proof of lambda */}
        <div className="example-box" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={20} />
            اثبات تفصیلی مفهوم اقتصادی ضریب لاگرانژ (<InlineMath math="\lambda = \frac{\partial U^*}{\partial I}" />)
          </h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            می‌خواهیم اثبات کنیم ضریب لاگرانژ دقیقاً معادل <strong>مطلوبیت نهایی درآمد</strong> مصرف‌کننده است؛ یعنی نشان می‌دهد که با افزودن یک واحد به درآمد (<InlineMath math="I" />)، سطح مطلوبیت نهایی مصرف‌کننده در تعادل چقدر رشد می‌کند:
          </p>
          <div style={{ background: 'rgba(255,255,255,0.01)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--primary)', margin: '1rem 0' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              <strong>شروع اثبات:</strong> تابع مطلوبیت بهینه را در تعادل در نظر بگیرید: <InlineMath math="U^* = U(q_1^*, q_2^*)" />.
              با دیفرانسیل‌گیری کامل نسبت به درآمد (<InlineMath math="I" />) داریم:
            </p>
            <BlockMath math="\frac{\partial U^*}{\partial I} = \frac{\partial U}{\partial q_1} \frac{\partial q_1^*}{\partial I} + \frac{\partial U}{\partial q_2} \frac{\partial q_2^*}{\partial I}" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              طبق شرایط مرتبه اول (F.O.C) می‌دانیم که <InlineMath math="\frac{\partial U}{\partial q_i} = \lambda P_i" />. این مقدار را جایگزین می‌کنیم:
            </p>
            <BlockMath math="\frac{\partial U^*}{\partial I} = (\lambda P_1) \frac{\partial q_1^*}{\partial I} + (\lambda P_2) \frac{\partial q_2^*}{\partial I} = \lambda \left[ P_1 \frac{\partial q_1^*}{\partial I} + P_2 \frac{\partial q_2^*}{\partial I} \right]" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              حالا از محدودیت بودجه در نقطه بهینه (<InlineMath math="I = P_1 q_1^* + P_2 q_2^*" />) نسبت به درآمد دیفرانسیل کامل می‌گیریم:
            </p>
            <BlockMath math="\frac{\partial I}{\partial I} = P_1 \frac{\partial q_1^*}{\partial I} + P_2 \frac{\partial q_2^*}{\partial I} \Rightarrow 1 = P_1 \frac{\partial q_1^*}{\partial I} + P_2 \frac{\partial q_2^*}{\partial I}" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              با قرار دادن این تساوی در معادله مطلوبیت غیرمستقیم، اثبات کامل می‌شود:
            </p>
            <BlockMath math="\frac{\partial U^*}{\partial I} = \lambda \cdot [1] \Rightarrow \lambda = \frac{\partial U^*}{\partial I}" />
          </div>
        </div>

        {/* Numerical Example */}
        <h4 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>مثال عددی تشریحی حداکثرسازی مطلوبیت مارشالی (صفحه ۱۶ جزوه)</h4>
        <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.01)', marginBottom: '2.5rem' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            فرض کنید تابع مطلوبیت به صورت ضربی (کاب-داگلاس ساده) <InlineMath math="U(q_1, q_2) = q_1 q_2" /> باشد. قیمت کالاها برابر با <InlineMath math="P_1 = 2" /> و <InlineMath math="P_2 = 5" /> و کل درآمد مصرف‌کننده <InlineMath math="I = 100" /> واحد است:
          </p>
          <div style={{ marginTop: '1rem' }}>
            <BlockMath math="\max U = q_1 q_2 \quad \text{S.t:} \quad 2q_1 + 5q_2 = 100" />
            <p style={{ color: 'var(--text-main)', fontWeight: 'bold', marginTop: '1rem' }}>مراحل حل تشریحی:</p>
            <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
              <li><strong>تشکیل لاگرانژ:</strong> <InlineMath math="\mathcal{L} = q_1 q_2 + \lambda [100 - 2q_1 - 5q_2]" /></li>
              <li>
                <strong>شرط اول F.O.C:</strong>
                <BlockMath math="\frac{\partial \mathcal{L}}{\partial q_1} = 0 \Rightarrow q_2 = 2\lambda \quad , \quad \frac{\partial \mathcal{L}}{\partial q_2} = 0 \Rightarrow q_1 = 5\lambda" />
              </li>
              <li><strong>حذف ضریب لاگرانژ:</strong> با تقسیم دو رابطه به تساوی <InlineMath math="\frac{q_2}{q_1} = \frac{2}{5} \implies q_1 = 2.5 q_2" /> می‌رسیم.</li>
              <li>
                <strong>جایگذاری در قید بودجه:</strong>
                <BlockMath math="2(2.5 q_2) + 5 q_2 = 100 \Rightarrow 10 q_2 = 100 \Rightarrow q_2^* = 10" />
                <BlockMath math="q_1^* = 2.5(10) = 25 \quad , \quad \lambda^* = \frac{q_2^*}{2} = 5" />
              </li>
            </ol>
            <p style={{ color: 'var(--success)', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
              مطلوبیت نهایی در بهینه برابر است با <InlineMath math="U^* = 25 \times 10 = 250" /> و افزایش ۱ واحد درآمد مطلوبیت را به اندازه ۵ واحد افزایش می‌دهد (<InlineMath math="\lambda^* = 5" />).
            </p>
          </div>
        </div>

        {/* Consumer Dual Optimization */}
        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ب) ریاضیات مصرف‌کننده (رویکرد دوگان / تقاضای جبرانی هیکسی)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در حالت دوگان (Dual)، ما مسئله را از دیدگاه هزینه‌ها نگاه می‌کنیم. هدف، حداقل کردن مخارج کل برای دستیابی به یک سطح مطلوبیت هدف (<InlineMath math="\bar{U}" />) است. پاسخ‌های بهینه این مسئله، تقاضای جبرانی هیکسی را می‌سازند:
        </p>

        <div className="formula-box" style={{ marginBottom: '2rem' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>مسئله بهینه‌سازی و لاگرانژ دوگان:</p>
          <BlockMath math="\min_{q_1, q_2} P_1 q_1 + P_2 q_2 \quad \text{S.t:} \quad U(q_1, q_2) = \bar{U}" />
          <BlockMath math="\mathcal{L}_d(q_1, q_2, \mu) = P_1 q_1 + P_2 q_2 + \mu [\bar{U} - U(q_1, q_2)]" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            در اینجا <InlineMath math="\mu" /> ضریب لاگرانژ دوگان است و نشان‌دهنده <strong>هزینه نهایی دستیابی به یک واحد مطلوبیت اضافی</strong> است.
          </p>
        </div>

        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '0.5rem' }}>شرایط مرتبه اول (F.O.C) دوگان:</p>
        <div className="formula-box" style={{ marginBottom: '2rem' }}>
          <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}_d}{\partial q_1} = 0 &\Rightarrow P_1 - \mu MU_1 = 0 \Rightarrow P_1 = \mu MU_1 \\ \frac{\partial \mathcal{L}_d}{\partial q_2} = 0 &\Rightarrow P_2 - \mu MU_2 = 0 \Rightarrow P_2 = \mu MU_2 \\ \frac{\partial \mathcal{L}_d}{\partial \mu} = 0 &\Rightarrow \bar{U} - U(q_1, q_2) = 0 \end{aligned}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
            در تعادل هیکسی نیز داریم: <InlineMath math="\frac{P_1}{P_2} = \frac{MU_1}{MU_2}" /> و ضریب لاگرانژ بهینه <InlineMath math="\mu^* = \frac{P_i}{MU_i}" /> است.
          </p>
        </div>

        {/* Section 2: Producer */}
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', color: 'var(--secondary)' }}>
          <TrendingUp style={{ color: 'var(--secondary)' }} />
          ۲. بهینه‌سازی مقید و سود تولیدکننده
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در تئوری رفتار تولیدکننده نیز دقیقاً از همین ساختارهای بهینه‌سازی مقید و نامقید استفاده می‌شود:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>حالت اول: حداکثر تولید با هزینه ثابت</h4>
            <BlockMath math="\max_{L, K} f(L, K) \quad \text{S.t:} \quad \bar{C} = w L + r K" />
            <BlockMath math="\mathcal{L}_p = f(L, K) + \lambda [\bar{C} - w L - r K]" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
              شرط F.O.C: برابری نرخ نهایی جانشینی فنی (MRTS) با نسبت قیمت نهاده‌ها:
              <BlockMath math="MRTS_{L,K} = \frac{MP_L}{MP_K} = \frac{w}{r}" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>حالت دوم: حداقل هزینه با تولید ثابت</h4>
            <BlockMath math="\min_{L, K} w L + r K \quad \text{S.t:} \quad f(L, K) = \bar{Q}" />
            <BlockMath math="\mathcal{L}_c = w L + r K + \mu [\bar{Q} - f(L, K)]" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
              در اینجا، ضریب لاگرانژ بهینه (<InlineMath math="\mu" />) دقیقاً معادل <strong>هزینه نهایی (MC)</strong> تولید یک واحد کالای اضافی است.
            </p>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>حالت سوم: حداکثرسازی سود بدون محدودیت</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            اگر بنگاه محدودیتی در مقدار هزینه یا سقف تولید نداشته باشد، سود خود را مستقیماً حداکثر می‌کند:
          </p>
          <BlockMath math="\max_{Q} \pi = TR(Q) - TC(Q)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            شرط اول (F.O.C): مشتق سود نسبت به Q برابر صفر باشد: <InlineMath math="MR = MC" />.
            <br />
            شرط دوم (S.O.C): مشتق دوم سود نسبت به Q منفی باشد: <InlineMath math="\frac{\partial MR}{\partial Q} < \frac{\partial MC}{\partial Q}" /> (یعنی شیب درآمد نهایی کمتر از شیب هزینه نهایی باشد).
          </p>
        </div>
    </div>
  );
};

export default Subpage1;
