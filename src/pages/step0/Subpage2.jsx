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
  );
};

export default Subpage2;
