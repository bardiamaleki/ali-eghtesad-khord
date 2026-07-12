import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Scale, HelpCircle, AlertTriangle } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', color: 'var(--primary)' }}>
          <Scale style={{ color: 'var(--accent)' }} />
          ۳. شرایط مرتبه دوم (S.O.C) و ماتریس هشین مرزی (Bordered Hessian)
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          شرایط مرتبه اول (F.O.C) نقاطی را پیدا می‌کند که شیب تابع در آن‌ها صفر است (نقاط بحرانی). اما برای اطمینان از اینکه این نقاط واقعاً <strong>ماکزیمم (بیشینه)</strong> یا <strong>مینیمم (کمینه)</strong> هستند، باید شرایط مرتبه دوم (S.O.C) را بررسی کنیم. در مسائل بهینه‌سازی مقید، این بررسی ریاضی به وسیله <strong>ماتریس هشین مرزی</strong> انجام می‌شود.
        </p>

        {/* Quick Guide Step-by-Step */}
        <div className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(251, 191, 36, 0.03)', borderRight: '4px solid var(--warning)', marginBottom: '2rem' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle size={18} />
            سه گام اساسی برای ارزیابی شرایط مرتبه دوم (S.O.C):
          </h4>
          <ol style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
            <li><strong>گام اول:</strong> تشکیل ماتریس هشین مرزی با قرار دادن مشتقات جزئی مرتبه دوم لاگرانژ در بلوک اصلی و مشتقات قید در سطر و ستون مرزی.</li>
            <li><strong>گام دوم:</strong> محاسبه دترمینان ماتریس هشین مرزی (<InlineMath math="|\bar{H}|" />).</li>
            <li><strong>گام سوم:</strong> تطبیق علامت دترمینان با شروط بهینگی (مثبت برای ماکزیمم مقید، منفی برای مینیمم مقید در حالت ۲ متغیره).</li>
          </ol>
        </div>

        {/* 2 Variables 1 Constraint */}
        <h3 style={{ color: 'var(--accent)', marginTop: '2rem', marginBottom: '1rem' }}>الف) حالت دو متغیره و یک محدودیت (رایج‌ترین حالت در اقتصاد خرد)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          فرض کنید تابع هدف به صورت <InlineMath math="f(x, y)" /> و محدودیت به صورت قید خطی یا غیرخطی <InlineMath math="g(x, y) = c" /> باشد. 
          ماتریس هشین مرزی <InlineMath math="\bar{H}" /> از قرار دادن مشتقات مرتبه دوم به شکل زیر تشکیل می‌شود:
        </p>
        <div className="formula-box" style={{ marginBottom: '2rem' }}>
          <BlockMath math="\bar{H} = \begin{pmatrix} \mathcal{L}_{xx} & \mathcal{L}_{xy} & -g_x \\ \mathcal{L}_{yx} & \mathcal{L}_{yy} & -g_y \\ -g_x & -g_y & 0 \end{pmatrix}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
            توجه: مشتقات قید (<InlineMath math="g_x" /> و <InlineMath math="g_y" />) به همراه علامت منفی به عنوان «مرز» ماتریس عمل می‌کنند.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۱. در مسئله حداکثرسازی مقید (تابع شبه‌مقعر):</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              دترمینان ماتریس هشین مرزی باید <strong>بزرگتر از صفر</strong> باشد. این شرط معادل با <strong>شبه‌مقعر بودن اکید (Strict Quasi-Concavity)</strong> تابع در همسایگی نقطه تعادل است:
            </p>
            <BlockMath math="|\bar{H}| > 0" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              بسط صریح دترمینان حول سطر سوم عبارت است از:
            </p>
            <BlockMath math="|\bar{H}| = 2\mathcal{L}_{xy}g_x g_y - \mathcal{L}_{xx}g_y^2 - \mathcal{L}_{yy}g_x^2 > 0" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              <strong>تفسیر اقتصادی:</strong> در بحث مصرف‌کننده، مثبت بودن این دترمینان نشان می‌دهد که نرخ نهایی جانشینی (MRS) نزولی است و منحنی‌های بی‌تفاوتی نسبت به مبدأ محدب هستند.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)' }}>
            <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>۲. در مسئله حداقل‌سازی مقید (تابع شبه‌محدب):</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              دترمینان ماتریس هشین مرزی باید <strong>کوچکتر از صفر</strong> باشد:
            </p>
            <BlockMath math="|\bar{H}| < 0" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              بسط صریح دترمینان برای کمینه‌سازی:
            </p>
            <BlockMath math="|\bar{H}| = 2\mathcal{L}_{xy}g_x g_y - \mathcal{L}_{xx}g_y^2 - \mathcal{L}_{yy}g_x^2 < 0" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              <strong>تفسیر اقتصادی:</strong> در بهینه‌سازی تولیدکننده برای حداقل‌سازی هزینه با تولید ثابت، این شرط تضمین می‌کند که خطوط هم‌هزینه بر منحنی تولید یکسان (که نسبت به مبدأ محدب است) مماس شده و هزینه حداقل می‌شود.
            </p>
          </div>
        </div>

        {/* Difference between Bordered and Ordinary Hessian */}
        <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '1.5rem', borderRight: '4px solid var(--primary)', marginBottom: '2.5rem' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <HelpCircle size={20} />
            تفاوت هشین مرزی و هشین معمولی در چیست؟
          </h4>
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
        </div>

        {/* Multi-variable n variables m constraints */}
        <h3 style={{ color: 'var(--accent)', marginTop: '2rem', marginBottom: '1rem' }}>ب) بسط چندمتغیره (n متغیر و m محدودیت)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در صورتی که سیستم دارای <InlineMath math="n" /> متغیر تصمیم‌گیری و <InlineMath math="m" /> محدودیت باشد، ماتریس هشین مرزی با ابعاد <InlineMath math="(n+m) \times (n+m)" /> به شکل زیر تشکیل می‌گردد:
        </p>
        <div className="formula-box" style={{ marginBottom: '2rem' }}>
          <BlockMath math="\bar{H} = \begin{pmatrix} \mathcal{L}_{11} & \mathcal{L}_{12} & \dots & \mathcal{L}_{1n} & -g^1_1 & \dots & -g^m_1 \\ \mathcal{L}_{21} & \mathcal{L}_{22} & \dots & \mathcal{L}_{2n} & -g^1_2 & \dots & -g^m_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\ \mathcal{L}_{n1} & \mathcal{L}_{n2} & \dots & \mathcal{L}_{nn} & -g^1_n & \dots & -g^m_n \\ -g^1_1 & -g^1_2 & \dots & -g^1_n & 0 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\ -g^m_1 & -g^m_2 & \dots & -g^m_n & 0 & \dots & 0 \end{pmatrix}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          برای مشخص کردن علامت و نوع بهینگی، دترمینان‌های پیشرو مرزی جزئی به نام <InlineMath math="|\bar{H}_r|" /> (برای <InlineMath math="r = m+1, \dots, n" />) را که از زیرماتریس‌های گوشه چپ بالا با ابعاد <InlineMath math="(r+m) \times (r+m)" /> تشکیل می‌شوند، طبق قواعد زیر ارزیابی می‌کنیم:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>شرط ماکزیمم مقید:</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              علامت دترمینان‌های پیشرو مرزی باید متناوباً تغییر کند و علامت دترمینان کل با علامت <InlineMath math="(-1)^n" /> هم‌خوانی داشته باشد:
            </p>
            <BlockMath math="\operatorname{sgn}(|\bar{H}_r|) = (-1)^r \quad (r = m+1, \dots, n)" />
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)' }}>
            <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>شرط مینیمم مقید:</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              علامت تمام دترمینان‌های پیشرو مرزی جزئی باید یکسان و هم‌علامت با <InlineMath math="(-1)^m" /> باشد:
            </p>
            <BlockMath math="\operatorname{sgn}(|\bar{H}_r|) = (-1)^m \quad (r = m+1, \dots, n)" />
          </div>
        </div>
    </div>
  );
};

export default Subpage2;
