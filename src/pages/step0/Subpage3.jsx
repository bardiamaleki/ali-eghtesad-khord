import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Grid, Lightbulb, CheckCircle2 } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', color: 'var(--success)' }}>
          <Grid style={{ color: 'var(--success)' }} />
          ۴. مثال‌های عددی حل‌شده به صورت تشریحی و گام‌به‌گام
        </h2>

        {/* Example 1 */}
        <div className="example-box" style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={20} />
            مثال ۱: حداکثرسازی مطلوبیت مصرف‌کننده (رویکرد مستقیم)
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> مصرف‌کننده‌ای دارای تابع مطلوبیت <InlineMath math="U = q_1 q_2" /> است. اگر قیمت کلاه‌ها <InlineMath math="P_1 = 2" />، <InlineMath math="P_2 = 5" /> و درآمد او <InlineMath math="I = 100" /> باشد، سبد مصرفی بهینه کالاها و مقدار ضریب لاگرانژ را پیدا کنید. سپس شرط کافی (S.O.C) را ارزیابی نمایید.
          </p>

          <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.03)', borderRight: '4px solid var(--primary)', marginBottom: '1.5rem' }}>
            <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Lightbulb size={16} />
              نکته کلیدی حل:
            </h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
              در توابع مطلوبیت متقارن مانند <InlineMath math="U = q_1 q_2" />، مصرف‌کننده همیشه درآمد خود را به نسبت مساوی بین کالاها تقسیم می‌کند. یعنی مخارج هر کالا در تعادل برابر با نصف درآمد خواهد بود.
            </p>
          </div>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <li>
              <strong>گام ۱. تشکیل خط بودجه و تابع لاگرانژ:</strong>
              <BlockMath math="2 q_1 + 5 q_2 = 100" />
              <BlockMath math="\mathcal{L} = q_1 q_2 + \lambda (100 - 2 q_1 - 5 q_2)" />
            </li>
            <li>
              <strong>گام ۲. محاسبه شرایط مرتبه اول (F.O.C):</strong>
              مشتق جزئی نسبت به متغیرهای درونی (<InlineMath math="q_1, q_2" />) و ضریب لاگرانژ (<InlineMath math="\lambda" />) را برابر صفر قرار می‌دهیم:
              <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}}{\partial q_1} = 0 &\Rightarrow q_2 - 2 \lambda = 0 \Rightarrow q_2 = 2 \lambda \quad (1) \\ \frac{\partial \mathcal{L}}{\partial q_2} = 0 &\Rightarrow q_1 - 5 \lambda = 0 \Rightarrow q_1 = 5 \lambda \quad (2) \\ \frac{\partial \mathcal{L}}{\partial \lambda} = 0 &\Rightarrow 100 - 2 q_1 - 5 q_2 = 0 \quad (3) \end{aligned}" />
            </li>
            <li>
              <strong>گام ۳. حذف ضریب لاگرانژ و یافتن سبد بهینه:</strong>
              با تقسیم رابطه (۱) بر (۲) خواهیم داشت:
              <BlockMath math="\frac{q_2}{q_1} = \frac{2}{5} \Rightarrow q_2 = 0.4 q_1" />
              با جایگذاری این تساوی در محدودیت بودجه (رابطه ۳):
              <BlockMath math="2 q_1 + 5 (0.4 q_1) = 100 \Rightarrow 2 q_1 + 2 q_1 = 100 \Rightarrow 4 q_1 = 100 \Rightarrow q_1^* = 25" />
              سپس مقادیر بهینه دیگر به دست می‌آیند:
              <BlockMath math="q_2^* = 0.4(25) = 10 \quad , \quad \lambda^* = \frac{q_2^*}{2} = \frac{10}{2} = 5" />
            </li>
            <li>
              <strong>گام ۴. بررسی شرط مرتبه دوم (S.O.C) با ماتریس هشین مرزی:</strong>
              مشتقات مرتبه دوم لاگرانژ و قید را محاسبه می‌کنیم:
              <BlockMath math="\mathcal{L}_{11} = \frac{\partial^2 \mathcal{L}}{\partial q_1^2} = 0 , \quad \mathcal{L}_{22} = \frac{\partial^2 \mathcal{L}}{\partial q_2^2} = 0 , \quad \mathcal{L}_{12} = \mathcal{L}_{21} = 1 , \quad g_1 = 2 , \quad g_2 = 5" />
              ماتریس هشین مرزی به شکل زیر تشکیل می‌شود:
              <BlockMath math="\bar{H} = \begin{pmatrix} 0 & 1 & -2 \\ 1 & 0 & -5 \\ -2 & -5 & 0 \end{pmatrix}" />
              دترمینان این ماتریس را حول سطر اول بسط می‌دهیم:
              <BlockMath math="|\bar{H}| = 0 \cdot \begin{vmatrix} 0 & -5 \\ -5 & 0 \end{vmatrix} - 1 \cdot \begin{vmatrix} 1 & -5 \\ -2 & 0 \end{vmatrix} + (-2) \cdot \begin{vmatrix} 1 & 0 \\ -2 & -5 \end{vmatrix}" />
              <BlockMath math="|\bar{H}| = 0 - 1(0 - 10) - 2(-5 - 0) = 10 + 10 = 20" />
              چون <InlineMath math="|\bar{H}| = 20 > 0" /> است، شرط کافی برای <strong>ماکزیمم بودن</strong> سبد مصرفی بهینه برقرار است.
            </li>
          </ol>
        </div>

        {/* Example 2 */}
        <div className="example-box" style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={20} />
            مثال ۲: حداقل‌سازی هزینه مصرف‌کننده (رویکرد دوگان)
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> توابع تقاضای جبرانی (هیکسی) کالاها و تابع مخارج مصرف‌کننده را برای مسئله زیر استخراج کرده و شرط کافی (S.O.C) را بررسی کنید:
            <BlockMath math="\min C = P_1 q_1 + P_2 q_2 \quad \text{S.t:} \quad q_1 q_2 = \bar{U}" />
          </p>

          <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.03)', borderRight: '4px solid var(--success)', marginBottom: '1.5rem' }}>
            <h5 style={{ color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Lightbulb size={16} />
              نکته کلیدی حل:
            </h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
              تقاضای هیکسی فقط به قیمت‌ها و سطح مطلوبیت ثابت بستگی دارد و اثر درآمدی در آن کاملاً جبران شده است.
            </p>
          </div>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <li>
              <strong>گام ۱. تشکیل تابع لاگرانژ دوگان:</strong>
              هدف، حداقل کردن مخارج با توجه به قید مطلوبیت ثابت است:
              <BlockMath math="\mathcal{L} = P_1 q_1 + P_2 q_2 + \mu (\bar{U} - q_1 q_2)" />
            </li>
            <li>
              <strong>گام ۲. محاسبه شرایط مرتبه اول (F.O.C):</strong>
              <BlockMath math="\begin{aligned} \frac{\partial \mathcal{L}}{\partial q_1} = 0 &\Rightarrow P_1 - \mu q_2 = 0 \Rightarrow P_1 = \mu q_2 \quad (1) \\ \frac{\partial \mathcal{L}}{\partial q_2} = 0 &\Rightarrow P_2 - \mu q_1 = 0 \Rightarrow P_2 = \mu q_1 \quad (2) \\ \frac{\partial \mathcal{L}}{\partial \mu} = 0 &\Rightarrow \bar{U} - q_1 q_2 = 0 \quad (3) \end{aligned}" />
            </li>
            <li>
              <strong>گام ۳. استخراج تقاضای جبرانی (هیکسی):</strong>
              از تقسیم روابط (۱) و (۲) داریم:
              <BlockMath math="\frac{P_1}{P_2} = \frac{q_2}{q_1} \Rightarrow q_2 = \frac{P_1}{P_2} q_1" />
              با قرار دادن این رابطه در قید مطلوبیت (رابطه ۳):
              <BlockMath math="\bar{U} = q_1 \left(\frac{P_1}{P_2} q_1\right) \Rightarrow q_1^2 = \bar{U} \frac{P_2}{P_1} \Rightarrow q_1^{CD} = \sqrt{\bar{U} \frac{P_2}{P_1}}" />
              به همین ترتیب برای کالای دوم:
              <BlockMath math="q_2^{CD} = \sqrt{\bar{U} \frac{P_1}{P_2}}" />
            </li>
            <li>
              <strong>گام ۴. تشکیل تابع مخارج (Expenditure Function):</strong>
              با جایگذاری تقاضاهای هیکسی در تعریف هزینه کل داریم:
              <BlockMath math="E(P_1, P_2, \bar{U}) = P_1 q_1^{CD} + P_2 q_2^{CD} = P_1 \sqrt{\bar{U} \frac{P_2}{P_1}} + P_2 \sqrt{\bar{U} \frac{P_1}{P_2}} = 2 \sqrt{P_1 P_2 \bar{U}}" />
            </li>
            <li>
              <strong>گام ۵. بررسی شرط مرتبه دوم (S.O.C):</strong>
              مشتقات دوم لاگرانژ و قید را حساب می‌کنیم:
              <BlockMath math="\mathcal{L}_{11} = 0 , \quad \mathcal{L}_{22} = 0 , \quad \mathcal{L}_{12} = \mathcal{L}_{21} = -\mu , \quad g_1 = -q_2 , \quad g_2 = -q_1" />
              ماتریس هشین مرزی دوگان به شکل زیر است:
              <BlockMath math="\bar{H}_{dual} = \begin{pmatrix} 0 & -\mu & -q_2 \\ -\mu & 0 & -q_1 \\ -q_2 & -q_1 & 0 \end{pmatrix}" />
              محاسبه دترمینان:
              <BlockMath math="|\bar{H}_{dual}| = -\mu(\mu q_1 q_2) - q_2(-\mu q_1) = -2 \mu q_1 q_2" />
              از آنجا که مقادیر بهینه مثبت هستند، دترمینان هشین مرزی منفی است (<InlineMath math="|\bar{H}_{dual}| < 0" />) که شرط کافی برای <strong>مینیمم بودن</strong> هزینه را تایید می‌کند.
            </li>
          </ol>
        </div>

        {/* Example 3 */}
        <div className="example-box">
          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={20} />
            مثال ۳: دوگانگی هزینه و تولید با استفاده از لم شپارد (Shephard's Lemma)
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> با فرض تابع تولید کاب-داگلاس <InlineMath math="q = x_1^{1/2} x_2^{1/2}" />، ابتدا تابع هزینه کل بنگاه را استخراج کرده و سپس نشان دهید با استفاده از لم شپارد می‌توان مجدداً تابع تولید اولیه را بازیابی کرد.
          </p>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <li>
              <strong>گام ۱. استخراج تابع هزینه کل از مسیر توسعه:</strong>
              با استفاده از رابطه مسیر توسعه بنگاه در تعادل داریم:
              <BlockMath math="\frac{MP_{x_1}}{MP_{x_2}} = \frac{r_1}{r_2} \Rightarrow \frac{0.5 x_1^{-1/2} x_2^{1/2}}{0.5 x_1^{1/2} x_2^{-1/2}} = \frac{r_1}{r_2} \Rightarrow \frac{x_2}{x_1} = \frac{r_1}{r_2} \Rightarrow x_2 = \frac{r_1}{r_2} x_1" />
              با جایگذاری در تابع تولید:
              <BlockMath math="q = x_1^{1/2} \left(\frac{r_1}{r_2} x_1\right)^{1/2} = x_1 \sqrt{\frac{r_1}{r_2}} \Rightarrow x_1^* = q \sqrt{\frac{r_2}{r_1}}" />
              به همین ترتیب برای نهاده دوم:
              <BlockMath math="x_2^* = q \sqrt{\frac{r_1}{r_2}}" />
              با قرار دادن این توابع تقاضای مشتق‌شده در رابطه هزینه داریم:
              <BlockMath math="TC = r_1 x_1^* + r_2 x_2^* = r_1 q \sqrt{\frac{r_2}{r_1}} + r_2 q \sqrt{\frac{r_1}{r_2}} = 2 q \sqrt{r_1 r_2}" />
            </li>
            <li>
              <strong>گام ۲. اعمال لم شپارد برای بازیابی تقاضای نهاده‌ها:</strong>
              با مشتق‌گیری جزئی از تابع هزینه نسبت به قیمت هر عامل تولید داریم:
              <BlockMath math="x_1 = \frac{\partial TC}{\partial r_1} = q \sqrt{\frac{r_2}{r_1}} \quad (1) \quad , \quad x_2 = \frac{\partial TC}{\partial r_2} = q \sqrt{\frac{r_1}{r_2}} \quad (2)" />
            </li>
            <li>
              <strong>گام ۳. بازیابی تابع تولید اولیه:</strong>
              از روابط فوق نسبت قیمت‌ها را پیدا کرده و حذف می‌کنیم:
              <BlockMath math="\frac{r_2}{r_1} = \left( \frac{x_1}{q} \right)^2 \quad (3) \quad , \quad \frac{r_1}{r_2} = \left( \frac{x_2}{q} \right)^2 \quad (4)" />
              با ضرب طرفین روابط (۳) و (۴) در هم خواهیم داشت:
              <BlockMath math="1 = \frac{x_1^2 x_2^2}{q^4} \Rightarrow q^4 = x_1^2 x_2^2 \Rightarrow q = x_1^{1/2} x_2^{1/2}" />
              که دقیقاً همان تابع تولید اولیه است و دوگانگی ریاضی را اثبات می‌کند.
            </li>
          </ol>
        </div>
    </div>
  );
};

export default Subpage3;
