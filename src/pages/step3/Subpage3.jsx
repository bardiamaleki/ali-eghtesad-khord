import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { DollarSign, Landmark, Coins, TrendingDown } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Landmark style={{ color: 'var(--primary)' }} />
        مالیات بر انحصارگر و انحصار خرید (Monopsony)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        دولت‌ها برای کنترل انحصارگران و جلوگیری از اجحاف به مصرف‌کننده، از ابزارهایی مانند قیمت‌گذاری سقف یا اخذ مالیات استفاده می‌کنند. مالیات‌ها دو نوع اثر در اقتصاد دارند: <strong>اثر تخصیصی (تغییر در مقدار تولید کالا)</strong> و <strong>اثر توزیعی (تغییر در سود و توزیع درآمد)</strong>.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Coins size={20} />
        ۱. انواع مالیات و اثر آن‌ها بر انحصارگر
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>الف) مالیات ثابت (Lump-Sum Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            مبلغ ثابت <InlineMath math="T" /> از سود بنگاه کم می‌شود. این مالیات <strong>اثر تخصیصی ندارد</strong> (مقدار تولید تغییر نمی‌کند) چون شرط بهینه‌سازی تغییر نکرده است. فقط سود انحصارگر کم می‌شود.
          </p>
          <BlockMath math="\text{Max } \pi = TR - TC - T \quad \implies \quad MR = MC" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>ب) مالیات بر واحد کالا (Specific Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            به ازای هر واحد تولید، مبلغ <InlineMath math="t" /> دریافت می‌شود. این مالیات <strong>اثر تخصیصی دارد</strong> زیرا هزینه نهایی را به سمت بالا شیفت می‌دهد و باعث کاهش تولید و افزایش قیمت می‌شود.
          </p>
          <BlockMath math="\text{Max } \pi = TR - TC - tQ \quad \implies \quad MR = MC + t" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>ج) مالیات بر فروش / درآمد (Sales Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            درصدی از درآمد کل به عنوان مالیات کسر می‌شود. این مالیات نیز <strong>اثر تخصیصی دارد</strong> چون درآمد نهایی را کاهش می‌دهد و منجر به کاهش تولید می‌گردد.
          </p>
          <BlockMath math="\text{Max } \pi = TR(1-t) - TC \quad \implies \quad MR(1-t) = MC" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>د) مالیات بر سود (Profit Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            درصدی از کل سود خالص اخذ می‌شود. این مالیات بهترین نوع برای حفظ کارایی است زیرا <strong>اثر تخصیصی ندارد</strong> (تولید را کم نمی‌کند) و تنها سهمی از سود را می‌گیرد.
          </p>
          <BlockMath math="\text{Max } \pi = (TR - TC)(1-t) \quad \implies \quad MR = MC" />
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/97-nemodar.svg" alt="اثر مالیات بر واحد" style={{ maxWidth: '100%', maxHeight: '280px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          نمودار مالیات بر واحد: منحنی MC به اندازه مالیات (<InlineMath math="t" />) بالا می‌رود، تعادل جدید ایجاد شده و مقدار تولید کاسته می‌شود.
        </p>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <TrendingDown size={20} />
        ۲. انحصار خرید (Monopsony)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تا اینجا فرض بر این بود که در بازار محصول انحصار وجود دارد. اما ممکن است یک بنگاه، <strong>تنها خریدار</strong> یک نهاده تولیدی (مثلاً نیروی کار در یک شهر کوچک) باشد. به این حالت <strong>مونوپسونی</strong> می‌گویند.
      </p>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--danger)', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>حالت اول: خریدار انحصاری نهاده، اما فروشنده رقابتی کالا</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          بنگاه تنها خریدار نیروی کار است، اما محصول خود را در یک بازار رقابتی با قیمت ثابت <InlineMath math="\bar{P}" /> می‌فروشد. چون بنگاه تنها خریدار نهاده است، برای استخدام کارگر بیشتر باید دستمزد بیشتری بپردازد، پس تابع عرضه نهاده صعودی است (<InlineMath math="r = g(x)" />).
        </p>
        
        <BlockMath math="\text{Max } \pi = P \cdot q(x) - g(x) \cdot x" />
        <BlockMath math="\text{FOC:} \quad P \cdot \frac{\partial q}{\partial x} - \left[ g(x) + x g'(x) \right] = 0" />
        <BlockMath math="\implies VMP_x = MFC_x" />

        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '1rem' }}>
          <li><InlineMath math="VMP_x" /> : ارزش تولید نهایی نهاده.</li>
          <li><InlineMath math="MFC_x" /> : هزینه نهایی عامل تولید. چون تابع عرضه نهاده صعودی است، شیب <InlineMath math="MFC" /> دو برابر شیب منحنی عرضه نیروی کار است (در حالت خطی).</li>
        </ul>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--warning)' }}>
        <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>حالت دوم: انحصار دوجانبه (خریدار انحصاری نهاده و فروشنده انحصاری کالا)</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          این بدترین حالت برای عوامل تولید (مثل کارگران) است. بنگاه هم در بازار نهاده تنها خریدار است و هم در بازار محصول تنها فروشنده است.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در اینجا، بنگاه به جای ارزش کالا با <strong>درآمد نهایی (MR)</strong> سر و کار دارد. شرط تعادل استخدام نهاده به شکل زیر است:
        </p>
        
        <BlockMath math="MRP_x = MFC_x" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem' }}>
          یعنی درآمد نهایی فیزیکی نهاده (<InlineMath math="MR \cdot MP_x" />) برابر با هزینه نهایی عامل تولید شود.
        </p>
      </div>

    </div>
  );
};

export default Subpage3;
