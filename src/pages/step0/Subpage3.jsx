import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Grid } from 'lucide-react';

const Subpage3 = () => {
  return (
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
  );
};

export default Subpage3;
