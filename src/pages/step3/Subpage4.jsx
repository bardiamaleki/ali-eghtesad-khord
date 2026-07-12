import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { ShoppingCart, UserCheck, TrendingUp, Info, HelpCircle, Lightbulb } from 'lucide-react';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <ShoppingCart style={{ color: 'var(--primary)' }} />
        انحصار خرید (Monopsony)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        تا اینجا فرض بر این بود که در بازار محصول انحصار وجود دارد. اما ممکن است یک بنگاه، <strong>تنها خریدار</strong> یک نهاده تولیدی (مثلاً نیروی کار در یک شهر کوچک صنعتی، یا کارخانه‌ای انحصاری برای خرید چغندرقند کشاورزان) باشد. به این ساختار بازار، <strong>انحصار خرید (مونوپسونی)</strong> می‌گویند.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <UserCheck size={20} />
        ۱. حالت اول: خریدار انحصاری نهاده، فروشنده رقابتی محصول
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بنگاه تنها خریدار نهاده <InlineMath math="x" /> است، اما محصول نهایی خود را در بازار رقابت کامل و با قیمت ثابت بازار <InlineMath math="\bar{P}" /> به فروش می‌رساند.
        چون بنگاه تنها خریدار نهاده است، با منحنی عرضه صعودی نهاده مواجه است؛ یعنی برای استخدام متغیرهای بیشتر، باید قیمت نهاده (<InlineMath math="r" />) را افزایش دهد:
        <BlockMath math="r = g(x) \quad , \quad g'(x) > 0" />
      </p>

      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.5rem', fontWeight: 'bold' }}>معادله سود بنگاه:</p>
        <BlockMath math="\pi = P \cdot q(x) - r \cdot x = P \cdot q(x) - g(x) \cdot x" />
        <p style={{ color: 'var(--text-main)', textAlign: 'center', margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>شرط اول تعادل (F.O.C):</p>
        <BlockMath math="\frac{\partial \pi}{\partial x} = 0 \implies P \cdot \frac{\partial q}{\partial x} - \left[ g(x) + x \cdot g'(x) \right] = 0" />
        <BlockMath math="\implies P \cdot MP_x = MFC_x \implies VMP_x = MFC_x" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>ارزش تولید نهایی (VMP)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
            ارزش بازاری حاصل از استخدام واحد اضافی عامل تولید: <InlineMath math="VMP_x = P \cdot MP_x" />. این منحنی، همان تقاضای نهاده بنگاه رقابتی است.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>هزینه نهایی نهاده (MFC)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
            هزینه اضافی برای استخدام یک واحد دیگر از نهاده: <InlineMath math="MFC_x = g(x) + x \cdot g'(x)" />. چون منحنی عرضه صعودی است، همواره هزینه نهایی استخدام از قیمت خود عامل تولید بیشتر است (<InlineMath math="MFC_x > r" />).
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--success)', marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingUp size={18} />
          اثبات شیب ۲ برابری MFC در حالت خطی (صفحه ۱۰۱ جزوه):
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          اگر تابع عرضه نهاده خطی و صعودی باشد:
          <BlockMath math="r = g(x) = a + b \cdot x \quad (b > 0)" />
          در این صورت کل مخارج استخدام نهاده برابر است با:
          <BlockMath math="TC_x = r \cdot x = a x + b x^2" />
          با مشتق‌گیری، هزینه نهایی نهاده (MFC) حاصل می‌شود:
          <BlockMath math="MFC_x = \frac{\partial TC_x}{\partial x} = a + 2 b \cdot x" />
          این نتیجه نشان می‌دهد که در توابع عرضه خطی نهاده، **شیب منحنی MFC دقیقاً دو برابر شیب منحنی عرضه نهاده است** (مانند رابطه MR و تقاضا در انحصار فروش).
        </p>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/101-nemodar.svg" alt="تعادل در بازار انحصار خرید" style={{ maxWidth: '100%', maxHeight: '280px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          تقاطع VMP و MFC مقدار بهینه استخدام را تعیین کرده و دستمزد پرداختی از روی منحنی عرضه مشخص می‌شود که همواره کمتر از ارزش کار کارگر است.
        </p>
      </div>

      {/* Solved Example for Monopsony */}
      <div className="example-box" style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Lightbulb size={18} />
          مثال عددی کامل و گام‌به‌گام تعادل مونوپسونی (انحصار خرید):
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          یک کارخانه قند تنها خریدار چغندرقند در منطقه است و با تابع عرضه چغندرقند <InlineMath math="r = 10 + 2x" /> مواجه است. قیمت فروش هر واحد قند در بازار رقابتی برابر با <InlineMath math="P = 4" /> و تابع تولید کارخانه <InlineMath math="q = 50x - x^2" /> است. دستمزد تعادلی و میزان خرید را پیدا کنید:
        </p>
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>گام ۱. محاسبه VMP (ارزش تولید نهایی):</strong>
            <BlockMath math="MP_x = \frac{\partial q}{\partial x} = 50 - 2x \implies VMP_x = P \cdot MP_x = 4(50 - 2x) = 200 - 8x" />
          </li>
          <li>
            <strong>گام ۲. محاسبه MFC (هزینه نهایی نهاده):</strong>
            <br />
            طبق قانون شیب دو برابری:
            <BlockMath math="MFC_x = 10 + 4x" />
          </li>
          <li>
            <strong>گام ۳. حل تعادل و یافتن مقادیر بهینه:</strong>
            <BlockMath math="VMP_x = MFC_x \implies 200 - 8x = 10 + 4x \implies 12x = 190 \implies x^* \approx 15.8" />
            <br />
            قیمت پرداخت شده به نهاده از روی منحنی عرضه به دست می‌آید:
            <BlockMath math="r^* = 10 + 2(15.8) = 41.6" />
          </li>
        </ol>
      </div>

      <h3 style={{ color: 'var(--danger)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Info size={20} />
        ۲. حالت دوم: انحصار مضاعف (Monopsonist در خرید نهاده و Monopolist در فروش محصول)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        این سناریو زمانی رخ می‌دهد که بنگاه هم انحصارگر خرید عوامل تولید است و هم انحصارگر فروش محصول نهایی در بازار. در این حالت، بنگاه با قیمت ثابت برای محصول مواجه نیست و درآمد نهایی فیزیکی نهاده (MRP) را ملاک قرار می‌دهد:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--danger)', marginBottom: '1.5rem' }}>
        <BlockMath math="\max \pi = TR(q(x)) - g(x) \cdot x" />
        <p style={{ color: 'var(--text-main)', textAlign: 'center', margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>شرط اول تعادل:</p>
        <BlockMath math="MR \cdot MP_x = MFC_x \implies MRP_x = MFC_x" />
      </div>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "2rem" }}>
        در این حالت به دلیل اینکه <InlineMath math="MR < P" /> است، همواره داریم <InlineMath math="MRP_x < VMP_x" />. این نابرابری ثابت می‌کند که در وضعیت انحصار مضاعف، **میزان استخدام عوامل تولید به شدت کاهش یافته و دستمزد پرداختی به عوامل تولید به مراتب پایین‌تر از حالت مونوپسونی عادی است** (استثمار شدید عوامل تولید).
      </p>

      <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--accent)' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <HelpCircle size={18} />
          شرط مرتبه دوم (S.O.C) تعادل انحصار خرید:
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
          برای تضمین حداکثر شدن سود، مشتق دوم سود نسبت به نهاده باید منفی باشد:
          <BlockMath math="\frac{\partial^2 \pi}{\partial x^2} \le 0 \implies \frac{\partial VMP_x}{\partial x} \le \frac{\partial MFC_x}{\partial x}" />
          یعنی شیب منحنی هزینه نهایی نهاده (MFC) باید بزرگتر از شیب منحنی ارزش تولید نهایی (VMP یا MRP) باشد.
        </p>
      </div>

    </div>
  );
};

export default Subpage4;
