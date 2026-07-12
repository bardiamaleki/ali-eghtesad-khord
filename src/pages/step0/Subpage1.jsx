import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { BookOpen, TrendingUp } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <BookOpen style={{ color: 'var(--primary)' }} />
          ۱. تشکیل تابع لاگرانژ و شرایط مرتبه اول (F.O.C)
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بهینه‌سازی مقید، یکی از پرکاربردترین مفاهیم ریاضی در اقتصاد خرد است. برای پیدا کردن نقطه بهینه تحت یک یا چند محدودیت، از <strong>روش ضرایب لاگرانژ</strong> استفاده می‌کنیم. این روش مسئله بهینه‌سازی مقید را با وارد کردن ضریب لاگرانژ به یک مسئله بهینه‌سازی بدون قید تبدیل می‌کند.
        </p>

        {/* Consumer Optimization */}
        <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '1rem' }}>الف) ریاضیات مصرف‌کننده (حالت مستقیم / تقاضای مارشالی)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در این حالت، هدف مصرف‌کننده حداکثر کردن مطلوبیت حاصل از مصرف کالاها با توجه به بودجه محدود خود است:
        </p>
        <div className="formula-box">
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>مسئله بهینه‌سازی:</p>
          <BlockMath math="\max U(q_1, q_2) \quad S.t: \quad I = P_1 q_1 + P_2 q_2" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>تابع لاگرانژ:</p>
          <BlockMath math="\mathcal{L}(q_1, q_2, \lambda) = U(q_1, q_2) + \lambda [I - P_1 q_1 - P_2 q_2]" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          که در آن <InlineMath math="\lambda" /> ضریب لاگرانژ است و نشان‌دهنده <strong>مطلوبیت نهایی درآمد</strong> (افزایش در مطلوبیت به ازای یک واحد افزایش درآمد) می‌باشد.
        </p>
        
        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '0.5rem' }}>شرایط مرتبه اول (F.O.C):</p>
        <div className="formula-box">
          <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}}{\partial q_1} = 0 &\Rightarrow \frac{\partial U}{\partial q_1} - \lambda P_1 = 0 \Rightarrow MU_1 = \lambda P_1 \\ \frac{\partial \mathcal{L}}{\partial q_2} = 0 &\Rightarrow \frac{\partial U}{\partial q_2} - \lambda P_2 = 0 \Rightarrow MU_2 = \lambda P_2 \\ \frac{\partial \mathcal{L}}{\partial \lambda} = 0 &\Rightarrow I - P_1 q_1 - P_2 q_2 = 0 \end{aligned}" />
        </div>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          با تقسیم دو رابطه اول بر هم، شرط تعادل مصرف‌کننده (برابری نرخ جانشینی نهایی با نسبت قیمت‌ها) حاصل می‌شود:
          <BlockMath math="\frac{MU_1}{MU_2} = \frac{P_1}{P_2} \Rightarrow MRS_{1,2} = \frac{P_1}{P_2} \quad , \quad \lambda = \frac{MU_1}{P_1} = \frac{MU_2}{P_2}" />
          با حل همزمان این روابط، <strong>توابع تقاضای مارشالی</strong> حاصل می‌شوند:
          <BlockMath math="q_1^{ND} = q_1(P_1, P_2, I) \quad , \quad q_2^{ND} = q_2(P_1, P_2, I)" />
        </p>

        {/* Detailed Mathematical Proof of lambda */}
        <h4 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>اثبات ریاضی تفصیلی ضریب لاگرانژ (<InlineMath math="\lambda = \frac{\partial U^*}{\partial I}" />)</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          به منظور اثبات تفصیلی رابطه <InlineMath math="\lambda = \partial U^* / \partial I" /> از شرایط مرتبه اول (F.O.C) با استفاده از دیفرانسیل‌گیری کامل:
          فرض کنید تابع مطلوبیت غیرمستقیم مصرف‌کننده در نقطه تعادل برابر با <InlineMath math="U^* = U(q_1^*, q_2^*)" /> باشد که در آن <InlineMath math="q_i^*" /> مقادیر تقاضای بهینه مصرف‌کننده هستند. با دیفرانسیل‌گیری کامل نسبت به درآمد (<InlineMath math="I" />) خواهیم داشت:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial U^*}{\partial I} = \frac{\partial U}{\partial q_1} \frac{\partial q_1^*}{\partial I} + \frac{\partial U}{\partial q_2} \frac{\partial q_2^*}{\partial I}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با استفاده از شرایط F.O.C حداکثرسازی مطلوبیت، داریم: <InlineMath math="\frac{\partial U}{\partial q_i} = \lambda P_i" />. با جایگذاری این شرایط در رابطه دیفرانسیل کامل:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial U^*}{\partial I} = (\lambda P_1) \frac{\partial q_1^*}{\partial I} + (\lambda P_2) \frac{\partial q_2^*}{\partial I} = \lambda \left[ P_1 \frac{\partial q_1^*}{\partial I} + P_2 \frac{\partial q_2^*}{\partial I} \right]" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          از طرف دیگر، با دیفرانسیل‌گیری کامل نسبت به <InlineMath math="I" /> از محدودیت بودجه در حالت بهینه یعنی <InlineMath math="I = P_1 q_1^* + P_2 q_2^*" /> خواهیم داشت:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial I}{\partial I} = P_1 \frac{\partial q_1^*}{\partial I} + P_2 \frac{\partial q_2^*}{\partial I} \Rightarrow 1 = P_1 \frac{\partial q_1^*}{\partial I} + P_2 \frac{\partial q_2^*}{\partial I}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با جایگذاری عبارت فوق در رابطه مطلوبیت غیرمستقیم، اثبات کامل می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial U^*}{\partial I} = \lambda \cdot [1] \Rightarrow \lambda = \frac{\partial U^*}{\partial I}" />
        </div>

        {/* Numerical Example */}
        <h4 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>مثال عددی صریح حداکثرسازی مطلوبیت مارشالی</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          فرض کنید تابع مطلوبیت مصرف‌کننده به صورت <InlineMath math="U(q_1, q_2) = q_1 q_2" /> باشد. قیمت کالاها برابر <InlineMath math="P_1 = 2" /> و <InlineMath math="P_2 = 5" /> و درآمد مصرف‌کننده <InlineMath math="I = 100" /> است:
        </p>
        <div className="formula-box">
          <BlockMath math="\max U = q_1 q_2 \quad S.t: \quad 2q_1 + 5q_2 = 100" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>تشکیل تابع لاگرانژ:</p>
          <BlockMath math="\mathcal{L} = q_1 q_2 + \lambda [100 - 2q_1 - 5q_2]" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>شرایط مرتبه اول (F.O.C):</p>
          <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}}{\partial q_1} = 0 &\Rightarrow q_2 - 2\lambda = 0 \Rightarrow q_2 = 2\lambda \\ \frac{\partial \mathcal{L}}{\partial q_2} = 0 &\Rightarrow q_1 - 5\lambda = 0 \Rightarrow q_1 = 5\lambda \\ \frac{\partial \mathcal{L}}{\partial \lambda} = 0 &\Rightarrow 100 - 2q_1 - 5q_2 = 0 \end{aligned}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با تقسیم دو رابطه اول داریم: <InlineMath math="\frac{q_2}{q_1} = \frac{2}{5} \Rightarrow q_2 = 0.4 q_1" />.
          با جایگذاری در محدودیت بودجه:
        </p>
        <div className="formula-box">
          <BlockMath math="2q_1 + 5(0.4 q_1) = 100 \Rightarrow 4q_1 = 100 \Rightarrow q_1^* = 25" />
          <BlockMath math="q_2^* = 0.4(25) = 10" />
          <BlockMath math="\lambda^* = \frac{q_2^*}{2} = 5" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در این حالت، مطلوبیت حداکثر برابر است با <InlineMath math="U^* = 25 \times 10 = 250" /> و ضریب لاگرانژ بهینه <InlineMath math="\lambda^* = 5" /> است که نشان می‌دهد به ازای یک واحد افزایش در درآمد، مطلوبیت به اندازه ۵ واحد افزایش می‌یابد.
        </p>

        {/* Consumer Dual Optimization */}
        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>ب) ریاضیات مصرف‌کننده (حالت دوگان / تقاضای جبرانی هیکسی)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در حالت دوگان، مصرف‌کننده به دنبال حداقل کردن هزینه‌های خود برای دستیابی به یک سطح مطلوبیت معین (<InlineMath math="\bar{U}" />) است:
        </p>
        <div className="formula-box">
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>مسئله بهینه‌سازی:</p>
          <BlockMath math="\min P_1 q_1 + P_2 q_2 \quad S.t: \quad U(q_1, q_2) = \bar{U}" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>تابع لاگرانژ:</p>
          <BlockMath math="\mathcal{L}(q_1, q_2, \mu) = P_1 q_1 + P_2 q_2 + \mu [\bar{U} - U(q_1, q_2)]" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          که در آن <InlineMath math="\mu" /> ضریب لاگرانژ است و نشان‌دهنده <strong>هزینه نهایی دسترسی به یک واحد مطلوبیت اضافی</strong> است.
        </p>
        
        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '0.5rem' }}>شرایط مرتبه اول (F.O.C):</p>
        <div className="formula-box">
          <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}}{\partial q_1} = 0 &\Rightarrow P_1 - \mu MU_1 = 0 \\ \frac{\partial \mathcal{L}}{\partial q_2} = 0 &\Rightarrow P_2 - \mu MU_2 = 0 \\ \frac{\partial \mathcal{L}}{\partial \mu} = 0 &\Rightarrow \bar{U} - U(q_1, q_2) = 0 \end{aligned}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          از شرایط بالا به رابطه زیر می‌رسیم که تعادل را توصیف می‌کند:
          <BlockMath math="\frac{P_1}{P_2} = \frac{MU_1}{MU_2} \quad , \quad \mu = \frac{P_1}{MU_1} = \frac{P_2}{MU_2}" />
          با حل سیستم فوق، <strong>توابع تقاضای جبرانی (هیکسی)</strong> به دست می‌آیند:
          <BlockMath math="q_1^{CD} = q_1(P_1, P_2, \bar{U}) \quad , \quad q_2^{CD} = q_2(P_1, P_2, \bar{U})" />
        </p>
        
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', marginTop: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <TrendingUp style={{ color: 'var(--secondary)' }} />
          ۲. بهینه‌سازی مقید و سود تولیدکننده
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در تئوری تولید نیز همانند مصرف‌کننده، مسائل بهینه‌سازی مقید به دو روش مستقیم و دوگان حل می‌شوند.
        </p>

        <h3 style={{ color: 'var(--secondary)', marginTop: '1.5rem', marginBottom: '1rem' }}>حالت اول: حداکثرسازی تولید با هزینه ثابت</h3>
        <div className="formula-box">
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>مسئله و تابع لاگرانژ:</p>
          <BlockMath math="\max Q = f(L, K) \quad S.t: \quad \bar{C} = P_L L + P_K K" />
          <BlockMath math="V(L, K, \lambda) = f(L, K) + \lambda [\bar{C} - P_L L - P_K K]" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>شرط تعادل نهایی (برابری نسبت بهره‌وری نهایی با نسبت قیمت‌ها):</p>
          <BlockMath math="\frac{f_L}{f_K} = \frac{P_L}{P_K} \Rightarrow \frac{MP_L}{MP_K} = \frac{P_L}{P_K} \Rightarrow MRTS_{L,K} = \frac{P_L}{P_K}" />
        </div>

        <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>حالت دوم: حداقل‌سازی هزینه با تولید ثابت</h3>
        <div className="formula-box">
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>مسئله و تابع لاگرانژ:</p>
          <BlockMath math="\min C = P_L L + P_K K \quad S.t: \quad f(L, K) = \bar{Q}" />
          <BlockMath math="Z(L, K, \mu) = P_L L + P_K K + \mu [\bar{Q} - f(L, K)]" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>شرط تعادل نهایی:</p>
          <BlockMath math="\frac{P_L}{P_K} = \frac{f_L}{f_K} \Rightarrow \frac{MP_L}{MP_K} = \frac{P_L}{P_K}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در این حالت، ضریب لاگرانژ <InlineMath math="\mu" /> معادل <strong>هزینه نهایی (MC)</strong> تولید یک واحد کالای اضافی است.
        </p>

        <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>حالت سوم: حداکثرسازی سود بدون محدودیت</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          اگر بنگاه محدودیتی در مقدار هزینه یا تولید نداشته باشد، به دنبال حداکثرسازی سود کل است:
        </p>
        <div className="formula-box">
          <BlockMath math="\max \pi = TR(Q) - TC(Q)" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>شرایط بهینه مرتبه اول و دوم (F.O.C & S.O.C):</p>
          <BlockMath math="\text{F.O.C:} \quad \frac{\partial \pi}{\partial Q} = 0 \Rightarrow MR = MC" />
          <BlockMath math="\text{S.O.C:} \quad \frac{\partial^2 \pi}{\partial Q^2} \le 0 \Rightarrow \frac{\partial MR}{\partial Q} \le \frac{\partial MC}{\partial Q}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          این بدین معنی است که در نقطه تعادل، شیب درآمد نهایی باید کمتر از شیب هزینه نهایی باشد تا سود واقعاً حداکثر شود.
        </p>
    </div>
  );
};

export default Subpage1;
