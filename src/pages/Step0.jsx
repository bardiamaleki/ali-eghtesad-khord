import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import { BookOpen, TrendingUp, Scale, Grid } from 'lucide-react';

const Step0 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Title Header */}
      <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--primary)' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          گام ۰: موتور ریاضیات اقتصاد
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          در این بخش، پایه‌ها و مفاهیم ریاضیات بهینه‌سازی مقید که در اقتصاد خرد کاربرد فراوانی دارند را بررسی می‌کنیم. 
          ابزارهای اصلی بهینه‌سازی شامل روش لاگرانژ، شرایط مرتبه اول (F.O.C) و شرایط مرتبه دوم (S.O.C) با استفاده از دترمینان هشین مرزی (Bordered Hessian) در ادامه به تفصیل توضیح داده شده‌اند.
        </p>
      </div>

      {/* Theory & Lagrange Method */}
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
      </div>

      {/* Producer Theory */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
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

      {/* S.O.C & Bordered Hessian */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Scale style={{ color: 'var(--accent)' }} />
          ۳. شرایط مرتبه دوم (S.O.C) و ماتریس هشین مرزی (Bordered Hessian)
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          برای اطمینان از اینکه نقطه تعادل حاصل از شرایط مرتبه اول (F.O.C) یک ماکزیمم محلی یا مینیمم محلی است، باید شرایط مرتبه دوم (S.O.C) بررسی شود. در مسائل بهینه‌سازی مقید، این کار با استفاده از <strong>ماتریس هشین مرزی</strong> انجام می‌شود.
        </p>

        {/* 2 Variables 1 Constraint */}
        <h3 style={{ color: 'var(--accent)', marginTop: '1.5rem', marginBottom: '1rem' }}>الف) حالت دو متغیره و یک محدودیت</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع هدف به صورت <InlineMath math="f(x, y)" /> و محدودیت به صورت <InlineMath math="g(x, y) = c" /> باشد. 
          ماتریس هشین مرزی <InlineMath math="\bar{H}" /> به شکل زیر تشکیل می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="\bar{H} = \begin{pmatrix} \mathcal{L}_{xx} & \mathcal{L}_{xy} & -g_x \\ \mathcal{L}_{yx} & \mathcal{L}_{yy} & -g_y \\ -g_x & -g_y & 0 \end{pmatrix}" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۱. در مسئله حداکثرسازی مقید:</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              دترمینان ماتریس هشین مرزی باید <strong>بزرگتر از صفر</strong> باشد:
            </p>
            <BlockMath math="|\bar{H}| > 0" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              بسط دترمینان حول سطر سوم:
            </p>
            <div style={{ fontSize: '0.85rem', direction: 'ltr', color: 'var(--text-main)', marginTop: '0.5rem' }}>
              <BlockMath math="|\bar{H}| = 2\mathcal{L}_{xy}g_x g_y - \mathcal{L}_{xx}g_y^2 - \mathcal{L}_{yy}g_x^2 > 0" />
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)' }}>
            <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>۲. در مسئله حداقل‌سازی مقید:</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              دترمینان ماتریس هشین مرزی باید <strong>کوچکتر از صفر</strong> باشد:
            </p>
            <BlockMath math="|\bar{H}| < 0" />
          </div>
        </div>

        {/* Multi-variable n variables m constraints */}
        <h3 style={{ color: 'var(--accent)', marginTop: '2rem', marginBottom: '1rem' }}>ب) بسط چندمتغیره (n متغیر و m محدودیت)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در صورتی که سیستم دارای <InlineMath math="n" /> متغیر تصمیم‌گیری و <InlineMath math="m" /> محدودیت باشد، ماتریس هشین مرزی با ابعاد <InlineMath math="(n+m) \times (n+m)" /> به شکل زیر تشکیل می‌گردد:
        </p>
        <div className="formula-box">
          <BlockMath math="\bar{H} = \begin{pmatrix} \mathcal{L}_{11} & \mathcal{L}_{12} & \dots & \mathcal{L}_{1n} & -g^1_1 & \dots & -g^m_1 \\ \mathcal{L}_{21} & \mathcal{L}_{22} & \dots & \mathcal{L}_{2n} & -g^1_2 & \dots & -g^m_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\ \mathcal{L}_{n1} & \mathcal{L}_{n2} & \dots & \mathcal{L}_{nn} & -g^1_n & \dots & -g^m_n \\ -g^1_1 & -g^1_2 & \dots & -g^1_n & 0 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\ -g^m_1 & -g^m_2 & \dots & -g^m_n & 0 & \dots & 0 \end{pmatrix}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          برای مشخص کردن علامت و نوع بهینگی، دترمینان‌های پیشرو مرزی جزئی به نام <InlineMath math="|\bar{H}_r|" /> (برای <InlineMath math="r = m+1, \dots, n" />) را که از زیرماتریس‌های گوشه چپ بالا با ابعاد <InlineMath math="(r+m) \times (r+m)" /> تشکیل می‌شوند، طبق قواعد زیر ارزیابی می‌کنیم:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>شرط ماکزیمم مقید:</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              علامت دترمینان‌های پیشرو باید متناوباً تغییر کند و علامت دترمینان کل با علامت <InlineMath math="(-1)^n" /> هم‌خوانی داشته باشد:
            </p>
            <BlockMath math="\operatorname{sgn}(|\bar{H}_r|) = (-1)^r \quad (r = m+1, \dots, n)" />
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)' }}>
            <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>شرط مینیمم مقید:</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              علامت تمام دترمینان‌های پیشرو مرزی جزئی باید یکسان و هم‌علامت با <InlineMath math="(-1)^m" /> باشد:
            </p>
            <BlockMath math="\operatorname{sgn}(|\bar{H}_r|) = (-1)^m \quad (r = m+1, \dots, n)" />
          </div>
        </div>
      </div>

      {/* Numerical Examples */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Grid style={{ color: 'var(--success)' }} />
          ۴. مثال‌های عددی حل‌شده به صورت تشریحی و گام‌به‌گام
        </h2>

        {/* Example 1 */}
        <div className="example-box">
          <h4>مثال ۱: حداکثرسازی مطلوبیت مصرف‌کننده (مدل مستقیم)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> مصرف‌کننده‌ای دارای تابع مطلوبیت <InlineMath math="U = q_1 q_2" /> است. اگر قیمت کالاها <InlineMath math="P_1 = 2" />، <InlineMath math="P_2 = 5" /> و درآمد او <InlineMath math="I = 100" /> باشد، سبد مصرفی بهینه کالاها و مقدار ضریب لاگرانژ را پیدا کنید. سپس شرط کافی (S.O.C) را ارزیابی نمایید.
          </p>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <li>
              <strong>تشکیل خط بودجه و تابع لاگرانژ:</strong>
              <BlockMath math="2 q_1 + 5 q_2 = 100" />
              <BlockMath math="\mathcal{L} = q_1 q_2 + \lambda (100 - 2 q_1 - 5 q_2)" />
            </li>
            <li>
              <strong>محاسبه شرایط مرتبه اول (F.O.C):</strong>
              مشتق جزئی نسبت به <InlineMath math="q_1" />، <InlineMath math="q_2" /> و <InlineMath math="\lambda" /> را برابر صفر قرار می‌دهیم:
              <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}}{\partial q_1} = 0 &\Rightarrow q_2 - 2 \lambda = 0 \Rightarrow q_2 = 2 \lambda \quad (1) \\ \frac{\partial \mathcal{L}}{\partial q_2} = 0 &\Rightarrow q_1 - 5 \lambda = 0 \Rightarrow q_1 = 5 \lambda \quad (2) \\ \frac{\partial \mathcal{L}}{\partial \lambda} = 0 &\Rightarrow 100 - 2 q_1 - 5 q_2 = 0 \quad (3) \end{aligned}" />
            </li>
            <li>
              <strong>رابطه نرخ جانشینی و پیدا کردن سبد بهینه:</strong>
              با تقسیم رابطه (1) بر (2) داریم:
              <BlockMath math="\frac{q_2}{q_1} = \frac{2}{5} \Rightarrow q_2 = \frac{2}{5} q_1" />
              با جایگذاری این رابطه در بودجه (رابطه ۳):
              <BlockMath math="2 q_1 + 5 \left(\frac{2}{5} q_1\right) = 100 \Rightarrow 4 q_1 = 100 \Rightarrow q_1^* = 25" />
              سپس برای کالای دوم و ضریب لاگرانژ داریم:
              <BlockMath math="q_2^* = \frac{2}{5} (25) = 10 \quad , \quad \lambda^* = \frac{q_2}{2} = 5" />
            </li>
            <li>
              <strong>بررسی شرط مرتبه دوم (S.O.C):</strong>
              مشتقات مرتبه دوم لاگرانژ و قید را محاسبه کرده و در ماتریس هشین مرزی قرار می‌دهیم:
              <BlockMath math="\mathcal{L}_{11} = 0 , \quad \mathcal{L}_{22} = 0 , \quad \mathcal{L}_{12} = \mathcal{L}_{21} = 1 , \quad g_1 = P_1 = 2 , \quad g_2 = P_2 = 5" />
              <BlockMath math="\bar{H} = \begin{pmatrix} 0 & 1 & -2 \\ 1 & 0 & -5 \\ -2 & -5 & 0 \end{pmatrix}" />
              محاسبه دترمینان هشین مرزی:
              <BlockMath math="|\bar{H}| = 0 - 1 \begin{vmatrix} 1 & -5 \\ -2 & 0 \end{vmatrix} + (-2) \begin{vmatrix} 1 & 0 \\ -2 & -5 \end{vmatrix} = -1(0 - 10) - 2(-5 - 0) = 10 + 10 = 20" />
              چون <InlineMath math="|\bar{H}| = 20 > 0" /> است، شرط کافی برای <strong>ماکزیمم بودن</strong> مطلوبیت برقرار است.
            </li>
          </ol>
        </div>

        {/* Example 2 */}
        <div className="example-box" style={{ marginTop: '2rem' }}>
          <h4>مثال ۲: حداقل‌سازی هزینه مصرف‌کننده (مدل دوگان)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> توابع تقاضای جبرانی (هیکسی) کالاها و تابع مخارج مصرف‌کننده را برای مسئله زیر استخراج کرده و شرط کافی (S.O.C) را بررسی کنید:
            <BlockMath math="\min C = P_1 q_1 + P_2 q_2 \quad S.t: \quad q_1 q_2 = \bar{U}" />
          </p>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <li>
              <strong>تشکیل تابع لاگرانژ:</strong>
              <BlockMath math="\mathcal{L} = P_1 q_1 + P_2 q_2 + \mu (\bar{U} - q_1 q_2)" />
            </li>
            <li>
              <strong>محاسبه شرایط مرتبه اول (F.O.C):</strong>
              <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}}{\partial q_1} = 0 &\Rightarrow P_1 - \mu q_2 = 0 \Rightarrow P_1 = \mu q_2 \quad (1) \\ \frac{\partial \mathcal{L}}{\partial q_2} = 0 &\Rightarrow P_2 - \mu q_1 = 0 \Rightarrow P_2 = \mu q_1 \quad (2) \\ \frac{\partial \mathcal{L}}{\partial \mu} = 0 &\Rightarrow \bar{U} - q_1 q_2 = 0 \quad (3) \end{aligned}" />
            </li>
            <li>
              <strong>استخراج مقادیر بهینه (تقاضای جبرانی):</strong>
              از تقسیم روابط (۱) و (۲) داریم:
              <BlockMath math="\frac{P_1}{P_2} = \frac{q_2}{q_1} \Rightarrow q_2 = \frac{P_1}{P_2} q_1" />
              با قرار دادن این رابطه در قید مطلوبیت (رابطه ۳):
              <BlockMath math="\bar{U} = q_1 \left(\frac{P_1}{P_2} q_1\right) \Rightarrow q_1^2 = \bar{U} \frac{P_2}{P_1} \Rightarrow q_1^{CD} = \sqrt{\bar{U} \frac{P_2}{P_1}}" />
              به همین ترتیب برای کالای دوم:
              <BlockMath math="q_2^{CD} = \sqrt{\bar{U} \frac{P_1}{P_2}}" />
            </li>
            <li>
              <strong>تشکیل تابع مخارج (Expenditure Function):</strong>
              <BlockMath math="E(P_1, P_2, \bar{U}) = P_1 q_1^{CD} + P_2 q_2^{CD} = P_1 \sqrt{\bar{U} \frac{P_2}{P_1}} + P_2 \sqrt{\bar{U} \frac{P_1}{P_2}} = 2 \sqrt{P_1 P_2 \bar{U}}" />
            </li>
            <li>
              <strong>بررسی شرط مرتبه دوم (S.O.C):</strong>
              مشتقات دوم لاگرانژ و قید را حساب می‌کنیم:
              <BlockMath math="\mathcal{L}_{11} = 0 , \quad \mathcal{L}_{22} = 0 , \quad \mathcal{L}_{12} = \mathcal{L}_{21} = -\mu , \quad U_1 = q_2 , \quad U_2 = q_1" />
              ماتریس هشین مرزی:
              <BlockMath math="\bar{H}_{dual} = \begin{pmatrix} 0 & -\mu & -q_2 \\ -\mu & 0 & -q_1 \\ -q_2 & -q_1 & 0 \end{pmatrix}" />
              محاسبه دترمینان:
              <BlockMath math="|\bar{H}_{dual}| = \mu \begin{vmatrix} -\mu & -q_1 \\ -q_2 & 0 \end{vmatrix} - q_2 \begin{vmatrix} -\mu & 0 \\ -q_2 & -q_1 \end{vmatrix} = \mu(0 - q_1 q_2) - q_2(\mu q_1 - 0) = -2 \mu q_1 q_2" />
              از آنجا که پارامترهای <InlineMath math="\mu" />، <InlineMath math="q_1" /> و <InlineMath math="q_2" /> همگی در بهینه مثبت هستند، پس <InlineMath math="|\bar{H}_{dual}| = -2 \mu q_1 q_2 < 0" /> است و شرط کافی برای <strong>مینیمم بودن</strong> هزینه برقرار می‌باشد.
            </li>
          </ol>
        </div>

        {/* Example 3 */}
        <div className="example-box" style={{ marginTop: '2rem' }}>
          <h4>مثال ۳: دوگانگی هزینه و تولید با استفاده از لم شپارد (Shephard's Lemma)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> با فرض تابع تولید کوب-داگلاس <InlineMath math="q = x_1^{1/2} x_2^{1/2}" />، ابتدا تابع هزینه کل بنگاه را استخراج کرده و سپس نشان دهید با استفاده از لم شپارد می‌توان مجدداً تابع تولید اولیه را بازیابی کرد.
          </p>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <li>
              <strong>استخراج تابع هزینه کل:</strong>
              شرط تعادل تولیدکننده (برابری نسبت بهره‌وری نهایی با نسبت قیمت نهاده‌ها):
              <BlockMath math="\frac{MP_{x_1}}{MP_{x_2}} = \frac{r_1}{r_2} \Rightarrow \frac{0.5 x_1^{-1/2} x_2^{1/2}}{0.5 x_1^{1/2} x_2^{-1/2}} = \frac{r_1}{r_2} \Rightarrow \frac{x_2}{x_1} = \frac{r_1}{r_2} \Rightarrow x_2 = \frac{r_1}{r_2} x_1" />
              با جایگذاری در تابع تولید:
              <BlockMath math="q = x_1^{1/2} \left(\frac{r_1}{r_2} x_1\right)^{1/2} = x_1 \sqrt{\frac{r_1}{r_2}} \Rightarrow x_1^* = q \sqrt{\frac{r_2}{r_1}}" />
              به همین ترتیب برای نهاده دوم:
              <BlockMath math="x_2^* = q \sqrt{\frac{r_1}{r_2}}" />
              بنابراین هزینه کل (<InlineMath math="TC" />) برابر است با:
              <BlockMath math="TC = r_1 x_1^* + r_2 x_2^* = r_1 q \sqrt{\frac{r_2}{r_1}} + r_2 q \sqrt{\frac{r_1}{r_2}} = 2 q \sqrt{r_1 r_2}" />
            </li>
            <li>
              <strong>بازیابی توابع تقاضای نهاده‌ها با استفاده از لم شپارد:</strong>
              طبق لم شپارد، با مشتق‌گیری از تابع هزینه کل نسبت به قیمت هر نهاده، تابع تقاضای جبرانی آن نهاده حاصل می‌شود:
              <BlockMath math="x_1 = \frac{\partial TC}{\partial r_1} = 2 q \left( \frac{1}{2} r_1^{-1/2} r_2^{1/2} \right) = q \sqrt{\frac{r_2}{r_1}} \quad (1)" />
              <BlockMath math="x_2 = \frac{\partial TC}{\partial r_2} = 2 q \left( \frac{1}{2} r_1^{1/2} r_2^{-1/2} \right) = q \sqrt{\frac{r_1}{r_2}} \quad (2)" />
            </li>
            <li>
              <strong>بازیابی تابع تولید اولیه:</strong>
              از روابط (۱) و (۲) داریم:
              <BlockMath math="\sqrt{\frac{r_2}{r_1}} = \frac{x_1}{q} \Rightarrow \frac{r_2}{r_1} = \frac{x_1^2}{q^2} \quad (3)" />
              <BlockMath math="\sqrt{\frac{r_1}{r_2}} = \frac{x_2}{q} \Rightarrow \frac{r_1}{r_2} = \frac{x_2^2}{q^2} \quad (4)" />
              با ضرب طرفین روابط (۳) و (۴) داریم:
              <BlockMath math="\frac{r_2}{r_1} \cdot \frac{r_1}{r_2} = \frac{x_1^2 x_2^2}{q^4} \Rightarrow 1 = \frac{x_1^2 x_2^2}{q^4} \Rightarrow q^4 = x_1^2 x_2^2 \Rightarrow q = x_1^{1/2} x_2^{1/2}" />
              که دقیقاً همان تابع تولید اولیه است.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Step0;
