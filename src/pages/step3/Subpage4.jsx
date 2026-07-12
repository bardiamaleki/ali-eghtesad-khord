import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { ShoppingCart, UserCheck, TrendingUp, Info, HelpCircle } from 'lucide-react';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <ShoppingCart style={{ color: 'var(--primary)' }} />
        انحصار خرید (Monopsony)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تا اینجا فرض بر این بود که در بازار محصول انحصار وجود دارد. اما ممکن است یک بنگاه، <strong>تنها خریدار</strong> یک نهاده تولیدی (مثلاً نیروی کار در یک شهر کوچک یا یک کارخانه خاص خریدار محصولات کشاورزی محلی) باشد. به این ساختار بازار، <strong>انحصار خرید (مونوپسونی)</strong> می‌گویند.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <UserCheck size={20} />
        ۱. حالت اول: خریدار انحصاری نهاده، فروشنده رقابتی محصول
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بنگاه تنها خریدار نهاده <InlineMath math="x" /> است، اما محصول نهایی خود را در بازار رقابت کامل و با قیمت ثابت <InlineMath math="\bar{P}" /> به فروش می‌رساند.
        چون بنگاه تنها خریدار نهاده است، با منحنی عرضه صعودی نهاده مواجه است؛ یعنی برای استخدام بیشتر نهاده باید قیمت بیشتری بپردازد:
        <BlockMath math="r = g(x) \quad , \quad g'(x) > 0" />
        جایی که <InlineMath math="r" /> قیمت نهاده و <InlineMath math="x" /> مقدار نهاده است.
      </p>

      <div className="formula-box">
        <p style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.5rem' }}>تابع سود بنگاه:</p>
        <BlockMath math="\pi = TR - TC = P \cdot q(x) - r \cdot x = P \cdot q(x) - g(x) \cdot x" />
        <p style={{ color: 'var(--text-main)', textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>شرط مرتبه اول (F.O.C):</p>
        <BlockMath math="\frac{\partial \pi}{\partial x} = 0 \implies P \cdot \frac{\partial q}{\partial x} - \left[ g(x) + x \cdot g'(x) \right] = 0" />
        <BlockMath math="\implies P \cdot MP_x = MFC_x \implies VMP_x = MFC_x" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>ارزش تولید نهایی (VMP)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            ارزش حاصل از تولید واحد اضافی نهاده: <InlineMath math="VMP_x = P \cdot MP_x" />. در بازار رقابت کامل محصول، این ارزش معادل تقاضای نهاده بنگاه است.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>هزینه نهایی نهاده (MFC)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            هزینه اضافی برای استخدام یک واحد دیگر از نهاده: <InlineMath math="MFC_x = g(x) + x \cdot g'(x)" />. چون <InlineMath math="g'(x) > 0" /> است، همواره هزینه نهایی نهاده از قیمت آن بیشتر است (<InlineMath math="MFC_x > r" />).
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--success)', marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingUp size={18} />
          اثبات شیب ۲ برابری MFC در حالت خطی (صفحه ۱۰۱ جزوه):
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          مجموع هزینه‌های متغیر استخدام نهاده عبارت است از:
          <BlockMath math="TC_x = r \cdot x = g(x) \cdot x" />
          اگر تابع عرضه نهاده خطی و صعودی باشد:
          <BlockMath math="r = g(x) = a + b \cdot x \quad (b > 0)" />
          در این صورت هزینه کل نهاده برابر است با:
          <BlockMath math="TC_x = (a + b \cdot x) \cdot x = a x + b x^2" />
          هزینه نهایی نهاده (MFC) با مشتق‌گیری به دست می‌آید:
          <BlockMath math="MFC_x = \frac{\partial TC_x}{\partial x} = a + 2 b \cdot x" />
          با مقایسه شیب منحنی عرضه (<InlineMath math="b" />) و شیب منحنی هزینه نهایی نهاده (<InlineMath math="2b" />)، مشخص می‌شود که در حالت خطی، **شیب منحنی MFC دقیقاً دو برابر شیب منحنی عرضه نهاده است** (مشابه رابطه MR و تقاضا در انحصار فروش).
        </p>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/101-nemodar.svg" alt="تعادل در بازار انحصار خرید" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          محل برخورد منحنی VMP (تقاضا) و MFC مقدار تعادلی استخدام نهاده را مشخص می‌کند؛ قیمت نهاده (دستمزد) از روی منحنی عرضه نهاده تعیین می‌شود که کمتر از VMP است.
        </p>
      </div>

      <h3 style={{ color: 'var(--danger)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Info size={20} />
        ۲. حالت دوم: انحصار مضاعف (Monopsonist در خرید نهاده و Monopolist در فروش محصول)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        این بدترین سناریو برای صاحبان نهاده (مانند کارگران) است. بنگاه نه تنها تنها خریدار نهاده است، بلکه تنها فروشنده کالا در بازار محصول نیز می‌باشد. بنابراین، بنگاه با قیمت ثابت برای محصول مواجه نیست و درآمد کل آن حاصل از فروش با قیمت انحصاری است:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--danger)' }}>
        <p style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.5rem' }}>تابع سود انحصار مضاعف:</p>
        <BlockMath math="\pi = TR(q(x)) - r \cdot x = TR(q(x)) - g(x) \cdot x" />
        <p style={{ color: 'var(--text-main)', textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>شرط مرتبه اول (F.O.C):</p>
        <BlockMath math="\frac{\partial \pi}{\partial x} = 0 \implies \frac{\partial TR}{\partial q} \cdot \frac{\partial q}{\partial x} - \left[ g(x) + x \cdot g'(x) \right] = 0" />
        <BlockMath math="\implies MR \cdot MP_x = MFC_x \implies MRP_x = MFC_x" />
      </div>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginTop: "1rem" }}>
        در این وضعیت تعادل، بنگاه تا جایی نهاده استخدام می‌کند که **درآمد نهایی فیزیکی نهاده (MRP)** با هزینه نهایی استخدام آن (MFC) برابر شود. 
        چون در انحصار فروش <InlineMath math="MR < P" /> است، همواره داریم:
        <BlockMath math="MRP_x = MR \cdot MP_x < P \cdot MP_x = VMP_x" />
        این نابرابری اثبات می‌کند که در حالت انحصار مضاعف، **مقدار استخدام نهاده بسیار کمتر و دستمزد پرداختی به آن به مراتب پایین‌تر** از حالت اول (فروشنده رقابتی) خواهد بود.
      </p>

      <div className="glass-panel" style={{ padding: '1.2rem', marginTop: '2rem', borderRight: '4px solid var(--accent)' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <HelpCircle size={18} />
          شرط مرتبه دوم (S.O.C) تعادل انحصار خرید:
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
          برای تضمین حداکثر شدن سود در هر دو حالت، مشتق دوم سود نسبت به نهاده باید منفی باشد:
          <BlockMath math="\frac{\partial^2 \pi}{\partial x^2} \le 0 \implies \frac{\partial VMP_x}{\partial x} \le \frac{\partial MFC_x}{\partial x} \quad (\text{یا } \frac{\partial MRP_x}{\partial x} \le \frac{\partial MFC_x}{\partial x})" />
          یعنی شیب منحنی هزینه نهایی نهاده (MFC) باید بزرگتر از شیب منحنی ارزش تولید نهایی (VMP یا MRP) باشد.
        </p>
      </div>

    </div>
  );
};

export default Subpage4;
