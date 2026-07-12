import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Scale } from 'lucide-react';

const Subpage2 = () => {
  return (
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
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۱. در مسئله حداکثرسازی مقید (تابع شبه‌مقعر):</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              دترمینان ماتریس هشین مرزی باید <strong>بزرگتر از صفر</strong> باشد. این شرط معادل با **شبه‌مقعر بودن اکید (Strict Quasi-Concavity)** تابع در همسایگی نقطه تعادل است:
            </p>
            <BlockMath math="|\bar{H}| > 0" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              بسط دترمینان حول سطر سوم:
            </p>
            <div style={{ fontSize: '0.85rem', direction: 'ltr', color: 'var(--text-main)', marginTop: '0.5rem' }}>
              <BlockMath math="|\bar{H}| = 2\mathcal{L}_{xy}g_x g_y - \mathcal{L}_{xx}g_y^2 - \mathcal{L}_{yy}g_x^2 > 0" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
              *نکته کنکوری:* اگر تابع هدف مطلوبیت مصرف‌کننده باشد، مثبت بودن دترمینان هشین مرزی نشان‌دهنده نزولی بودن نرخ نهایی جانشینی (نزولی بودن MRS) و محدب بودن منحنی‌های بی‌تفاوتی نسبت به مبدأ است.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)' }}>
            <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>۲. در مسئله حداقل‌سازی مقید (تابع شبه‌محدب):</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              دترمینان ماتریس هشین مرزی باید <strong>کوچکتر از صفر</strong> باشد (برای ۲ متغیر و ۱ قید):
            </p>
            <BlockMath math="|\bar{H}| < 0" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
              در مسائل حداقل‌سازی هزینه تولید یا مخارج مصرف‌کننده، این شرط منفی بودن تضمین می‌کند که منحنی‌های هم‌هزینه نسبت به مبدأ محدب بوده و نقطه مماس حاصله، هزینه را حداقل می‌کند.
            </p>
          </div>
        </div>

        {/* Difference between Bordered and Ordinary Hessian */}
        <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '1.5rem', borderRight: '4px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تفاوت هشین مرزی و هشین معمولی</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در اقتصاد خرد، تفاوت اساسی میان مسائل بهینه‌سازی مقید و نامقید وجود دارد که منجر به استفاده از دو نوع ماتریس هشین متفاوت می‌شود:
          </p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', marginRight: '1.2rem', listStyleType: 'disc' }}>
            <li>
              <strong>هشین معمولی (Ordinary Hessian):</strong> برای مسائل بهینه‌سازی <strong>نامقید</strong> (مانند حداکثرسازی سود بنگاه رقابتی <InlineMath math="\max \pi = TR - TC" />) استفاده می‌شود. در اینجا، شرط مرتبه دوم (S.O.C) به منفی‌معین بودن ماتریس هشین معمولی (برای ماکزیمم) بستگی دارد که در آن نیازی به اضافه کردن محدودیت‌ها نیست و صرفاً مشتقات مرتبه دوم تابع سود نسبت به نهاده‌ها بررسی می‌شوند (<InlineMath math="f_{11} < 0" />، <InlineMath math="f_{22} < 0" /> و <InlineMath math="f_{11}f_{22} - f_{12}^2 > 0" />).
            </li>
            <li>
              <strong>هشین مرزی (Bordered Hessian):</strong> برای مسائل بهینه‌سازی <strong>مقید</strong> (مانند حداکثرسازی مطلوبیت مصرف‌کننده تحت محدودیت بودجه یا حداقل‌سازی هزینه تولید تحت محدودیت مقدار تولید) کاربرد دارد. در این مسائل، به دلیل وجود قید، تغییرات متغیرها مستقل نبوده و از این رو مرزهایی شامل مشتقات تابع محدودیت به هشین معمولی اضافه می‌شوند تا رفتار تابع را روی مرز محدودیت بسنجند.
            </li>
          </ul>
          
          <h5 style={{ color: 'var(--primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>فرمول صریح بسط دترمینان هشین مرزی در مسئله مصرف‌کننده</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            در مسئله حداکثرسازی مطلوبیت مصرف‌کننده با تابع هدف <InlineMath math="U(q_1, q_2)" /> و محدودیت بودجه <InlineMath math="P_1 q_1 + P_2 q_2 = I" />، با تعریف مشتقات تابع مطلوبیت به عنوان <InlineMath math="f_{ij}" /> و قیمت‌ها به عنوان مشتقات قید (<InlineMath math="g_1 = P_1, g_2 = P_2" />)، بسط صریح دترمینان هشین مرزی به شکل زیر حاصل می‌شود:
          </p>
          <div className="formula-box">
            <BlockMath math="|\bar{H}| = 2f_{12}P_1 P_2 - f_{11}P_2^2 - f_{22}P_1^2 > 0" />
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            در مقابل، برای حداقل‌سازی مقید، شرط کافی به صورت منفی بودن دترمینان ماتریس هشین مرزی تعریف می‌شود:
          </p>
          <div className="formula-box">
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
  );
};

export default Subpage2;
