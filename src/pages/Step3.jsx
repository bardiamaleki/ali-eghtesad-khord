import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { 
  Scale, 
  Shield, 
  Tag, 
  Coins, 
  Users,
  Grid
} from 'lucide-react';

const Step3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* Title Header */}
      <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--primary)' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          گام ۳: ساختارهای بازار بازارهای کلاسیک
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          در این بخش به تحلیل و اثبات ریاضی ساختارهای بازار کلاسیک شامل رقابت کامل، انحصار کامل در فروش، تبعیض قیمت در انواع سطوح، انحصار چندکارخانه‌ای، تحلیل جامع اثرات انواع ۴ گانه مالیات دولت بر انحصارگر و انحصار خرید در بازار عوامل تولید (نهاده‌ها) می‌پردازیم. مفاهیم به همراه فرمول‌های ریاضی و نمودارهای تعادل ارائه شده‌اند.
        </p>
      </div>

      {/* 1. Perfect Competition */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Scale style={{ color: 'var(--primary)' }} />
          ۱. بازار رقابت کامل (Perfect Competition)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          بازار رقابت کامل ساختاری است که در آن تعداد بسیار زیادی خریدار و فروشنده وجود دارند، کالاها کاملاً همگن هستند، اطلاعات کامل و متقارن است و ورود و خروج به بازار بدون مانع انجام می‌شود. به دلیل سهم بسیار ناچیز هر بنگاه از کل بازار، بنگاه‌ها «قیمت‌پذیر» (Price Taker) بوده و منحنی تقاضای هر بنگاه خطی کاملاً افقی در سطح قیمت تعادلی بازار است:
        </p>

        <div className="formula-box">
          <BlockMath math="P = MR = AR = d" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) تعادل کوتاه‌مدت بنگاه</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بنگاه رقابتی سود اقتصادی خود (<InlineMath math="\pi" />) را با انتخاب بهینه مقدار تولید (<InlineMath math="Q" />) حداکثر می‌کند:
        </p>
        <div className="formula-box">
          <BlockMath math="\max_{Q} \pi = TR(Q) - TC(Q) = P \cdot Q - TC(Q)" />
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط مرتبه اول (First-Order Condition - FOC):</strong> مشتق اول تابع سود نسبت به مقدار تولید برابر صفر قرار می‌گیرد:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi}{\partial Q} = 0 \implies P - \frac{\partial TC}{\partial Q} = 0 \implies P = MC" />
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط مرتبه دوم (Second-Order Condition - SOC):</strong> مشتق دوم تابع سود نسبت به مقدار تولید باید منفی باشد تا سود حداکثر شود:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial^2 \pi}{\partial Q^2} < 0 \implies -\frac{\partial MC}{\partial Q} < 0 \implies \frac{\partial MC}{\partial Q} > 0" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          این نشان می‌دهد که در نقطه تعادل، منحنی هزینه نهایی (<InlineMath math="MC" />) باید صعودی باشد (یعنی منحنی هزینه نهایی تقاضا را از پایین قطع کند).
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/78-demand.svg" alt="منحنی تقاضای بازار رقابت کامل" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۳.۱: منحنی تقاضا و درآمدهای بنگاه در بازار رقابت کامل</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ب) نقطه تعطیلی بنگاه (Shutdown Point)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در کوتاه‌مدت، بنگاه با هزینه‌های ثابت مواجه است که چه تولید کند و چه نکند باید آن‌ها را بپردازد. بنابراین بنگاه تنها زمانی اقدام به تولید می‌کند که درآمدهای کل (<InlineMath math="TR" />) حداقل بتوانند هزینه‌های متغیر کل (<InlineMath math="TVC" />) را پوشش دهند:
        </p>
        <div className="formula-box">
          <BlockMath math="TR \ge TVC \implies P \cdot Q \ge TVC \implies P \ge \frac{TVC}{Q} \implies P \ge AVC" />
        </div>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', marginBottom: '1.5rem' }}>
          <li>
            <strong>نقطه تعطیلی موقت:</strong> قیمت برابر با حداقل هزینه متغیر متوسط باشد (<InlineMath math="P = \min AVC" />). اگر قیمت به زیر این سطح سقوط کند، بنگاه با متوقف کردن تولید، زیان خود را به هزینه‌های ثابت محدود می‌کند.
          </li>
          <li>
            <strong>منحنی عرضه کوتاه‌مدت بنگاه:</strong> بخشی از منحنی هزینه نهایی (<InlineMath math="MC" />) است که بالاتر از نقطه حداقل هزینه متغیر متوسط (<InlineMath math="P \ge \min AVC" />) قرار دارد.
          </li>
        </ul>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}>
            <img src="/svg/79-nemodar.svg" alt="نمودار تعادل و عرضه رقابت کامل" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۳.۲: تعادل کوتاه‌مدت، رابطه درآمدهای کل و هزینه‌ها، و استخراج عرضه کوتاه‌مدت</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ج) تعادل بلندمدت بنگاه</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در بلندمدت، تمام هزینه‌ها متغیر هستند و ورود و خروج بنگاه‌ها به صنعت کاملاً آزاد است. سود مثبت باعث ورود بنگاه‌های جدید و کاهش قیمت بازار می‌شود و زیان باعث خروج بنگاه‌ها و افزایش قیمت تعادلی می‌گردد. در تعادل بلندمدت، سود اقتصادی صفر خواهد شد:
        </p>
        <div className="formula-box">
          <BlockMath math="\pi = TR - LTC = P \cdot Q - LTC = 0 \implies P = LAC" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با توجه به اینکه بنگاه سود خود را نیز حداکثر می‌کند، باید قیمت با هزینه نهایی برابر باشد. بنابراین تعادل بلندمدت رقابتی به صورت زیر حاصل می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="P = LMC = SMC = \min LAC = \min SAC" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در این نقطه، بنگاه در حداقل هزینه متوسط خود تولید می‌کند که تضمین‌کننده کارایی فنی و تخصیصی در بازار است.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/80-nemodar.svg" alt="تعادل بلندمدت رقابت کامل" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۳: تعادل بلندمدت بنگاه رقابتی در حداقل هزینه متوسط
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/81-nemodar.svg" alt="عدم وجود تعادل در بازار" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۴: شرایط غیرعادی و عدم وجود تعادل در بازار
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/82-nemodar.svg" alt="تعادل باثبات و بی‌ثبات" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۵: تحلیل پایداری ایستای تعادل (باثبات و بی‌ثبات)
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/83-nemodar.svg" alt="تعادل والراس و مارشال" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۶: مقایسه پایداری تعادل بر اساس مکانیسم والراس و مارشال
            </p>
          </div>
        </div>

      </div>

      {/* 2. Pure Monopoly */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Shield style={{ color: 'var(--primary)' }} />
          ۲. انحصار کامل در فروش (Pure Monopoly)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          انحصار کامل ساختاری از بازار است که در آن تنها یک عرضه‌کننده برای کالایی بدون جانشین وجود دارد و ورود به بازار به دلیل موانع فنی یا قانونی مسدود است. انحصارگر بر خلاف بنگاه رقابتی، با منحنی تقاضای نزولی کل بازار روبرو بوده و «قیمت‌گذار» (Price Maker) است:
        </p>

        <div className="formula-box">
          <BlockMath math="P = f(Q) \quad , \quad f'(Q) < 0" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) شرط تعادل انحصارگر</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          هدف انحصارگر حداکثر کردن سود با انتخاب مقدار تولید بهینه است:
        </p>
        <div className="formula-box">
          <BlockMath math="\max_{Q} \pi = TR(Q) - TC(Q) = P(Q) \cdot Q - TC(Q)" />
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط مرتبه اول (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi}{\partial Q} = 0 \implies \frac{\partial TR}{\partial Q} - \frac{\partial TC}{\partial Q} = 0 \implies MR = MC" />
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط مرتبه دوم (SOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial^2 \pi}{\partial Q^2} < 0 \implies \frac{\partial MR}{\partial Q} < \frac{\partial MC}{\partial Q}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          این شرط تضمین می‌کند که شیب منحنی درآمد نهایی انحصارگر کمتر از شیب منحنی هزینه نهایی وی باشد.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/89-nemodar.svg" alt="منحنی تقاضای بازار انحصار کامل" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۷: منحنی تقاضا و درآمد نهایی در بازار انحصار کامل
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/90-nemodar.svg" alt="تعادل انحصار کامل" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۸: تعادل انحصارگر از تلاقی درآمد نهایی و هزینه نهایی
            </p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ب) رابطه کشش قیمتی تقاضا با درآمد نهایی (MR)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          رابطه بین درآمد نهایی، قیمت و کشش تقاضا به صورت زیر اثبات می‌گردد:
        </p>
        <div className="formula-box">
          <BlockMath math="TR = P \cdot Q \implies MR = \frac{\partial TR}{\partial Q} = P + Q \cdot \frac{\partial P}{\partial Q}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با فاکتورگیری از قیمت (<InlineMath math="P" />) و با توجه به تعریف کشش قیمتی تقاضا (<InlineMath math="e_p = \frac{\partial Q}{\partial P} \cdot \frac{P}{Q}" />):
        </p>
        <div className="formula-box">
          <BlockMath math="MR = P \left( 1 + \frac{Q}{P} \frac{\partial P}{\partial Q} \right) = P \left( 1 - \frac{1}{|e_p|} \right)" />
        </div>
        
        <div className="example-box">
          <h4>تحلیل کشش و محدوده تولید انحصارگر:</h4>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc' }}>
            <li>اگر کشش تقاضا بزرگتر از یک باشد (<InlineMath math="|e_p| > 1" />)، آنگاه <InlineMath math="MR > 0" /> است.</li>
            <li>اگر کشش تقاضا برابر یک باشد (<InlineMath math="|e_p| = 1" />)، آنگاه <InlineMath math="MR = 0" /> است (درآمد کل حداکثر است).</li>
            <li>اگر کشش تقاضا کمتر از یک باشد (<InlineMath math="|e_p| < 1" />)، آنگاه <InlineMath math="MR < 0" /> است.</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: '1.8' }}>
            <strong>نتیجه مهم:</strong> از آنجا که هزینه نهایی تولید همواره مثبت است (<InlineMath math="MC > 0" />)، و در نقطه تعادل باید <InlineMath math="MR = MC" /> برقرار باشد، در نتیجه انحصارگر عقلایی همواره در <strong>بخش باکشش تقاضا (<InlineMath math="|e_p| > 1" />)</strong> تولید می‌کند و هرگز در بخش بی‌کشش یا کشش واحد تولید نخواهد کرد.
          </p>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ج) شاخص لرنر (Lerner Index)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          شاخص لرنر معیاری برای اندازه‌گیری میزان قدرت انحصاری بنگاه در بازار است:
        </p>
        <div className="formula-box">
          <BlockMath math="L = \frac{P - MC}{P}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با جایگذاری شرط تعادل (<InlineMath math="MR = MC" />) و رابطه کشش در این فرمول داریم:
        </p>
        <div className="formula-box">
          <BlockMath math="MC = P \left( 1 - \frac{1}{|e_p|} \right) \implies P - MC = \frac{P}{|e_p|} \implies L = \frac{P - MC}{P} = \frac{1}{|e_p|}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در بازار رقابت کامل، کشش تقاضای بنگاه بی‌نهایت است (<InlineMath math="|e_p| \to \infty" />)، لذا <InlineMath math="L = 0" /> خواهد بود. در بازار انحصار کامل، با کاهش کشش تقاضا (بی‌کشش‌تر شدن کالا)، قدرت انحصارگر بیشتر شده و شاخص لرنر به سمت یک میل می‌کند.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>د) عدم وجود منحنی عرضه در بازار انحصار کامل</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          منحنی عرضه نشان‌دهنده یک رابطه یک‌به‌یک و مستقل بین هر سطح قیمت و مقدار عرضه شده است. در بازار انحصار کامل، منحنی عرضه وجود ندارد زیرا:
        </p>
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'decimal' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>تئوری:</strong> انحصارگر قیمت‌پذیر نیست؛ بلکه خود قیمت را بر اساس ساختار تقاضا و درآمد نهایی تعیین می‌کند.
          </li>
          <li>
            <strong>ریاضی:</strong> تغییر در تقاضا می‌تواند به دو حالت رخ دهد:
            <ul style={{ paddingRight: '1.5rem', listStyleType: 'circle', marginTop: '0.5rem' }}>
              <li><strong>تغییر قیمت بدون تغییر مقدار تولید:</strong> دو منحنی تقاضا با کشش‌های متفاوت می‌توانند در تلاقی با هزینه نهایی، مقدار تعادلی یکسانی تولید کنند اما قیمت‌های متفاوتی را روی منحنی‌های تقاضا به دست دهند.</li>
              <li><strong>تغییر مقدار تولید بدون تغییر قیمت تعادلی:</strong> دو منحنی تقاضای متفاوت می‌توانند مقادیر تعادلی متفاوتی ایجاد کنند در حالی که قیمت تعادلی آن‌ها یکسان باشد.</li>
            </ul>
          </li>
        </ol>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: '1.8' }}>
          بنابراین، رابطه‌ای مستقل و یک‌به‌یک بین قیمت و مقدار تولید وجود ندارد و انحصارگر تنها دارای یک «نقطه عرضه تعادلی» است نه یک منحنی عرضه پیوسته.
        </p>
      </div>

      {/* 3. Price Discrimination & Multi-plant Monopoly */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Tag style={{ color: 'var(--primary)' }} />
          ۳. تبعیض قیمت و انحصار چندکارخانه‌ای
        </h2>

        <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '1rem' }}>الف) انواع تبعیض قیمت (Price Discrimination)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          تبعیض قیمت به معنای فروش یک محصول یکسان به خریداران مختلف با قیمت‌های متفاوت است، به طوری که این اختلاف قیمت ناشی از تفاوت هزینه‌های تولید نباشد.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          {/* 1st Degree */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--accent)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>۱. تبعیض قیمت درجه ۱ (تبعیض قیمت کامل)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              در این نوع تبعیض، انحصارگر از حداکثر تمایل به پرداخت (قیمت ذخیره‌ای) هر مصرف‌کننده آگاه است و از هر مصرف‌کننده دقیقاً همان قیمت ذخیره‌ای او را دریافت می‌کند.
            </p>
            <ul style={{ paddingRight: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', listStyleType: 'circle', marginBottom: '1rem' }}>
              <li>مازاد مصرف‌کننده کاملاً صفر می‌شود (<InlineMath math="CS = 0" />).</li>
              <li>درآمد کل انحصارگر کل سطح زیر منحنی تقاضا است:</li>
            </ul>
            <div className="formula-box" style={{ padding: '0.75rem' }}>
              <BlockMath math="TR = \int_{0}^{Q} P(q) dq" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              شرط تعادل بهینه در این حالت به صورت <InlineMath math="P = MC" /> است. مقدار تولید در این حالت با بازار رقابتی برابر است و کارایی تخصیصی برقرار است، اما تمام مازاد رفاه نصیب تولیدکننده می‌شود.
            </p>
          </div>

          {/* 2nd Degree */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)' }}>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>۲. تبعیض قیمت درجه ۲ (بلوکی یا مقداری)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              انحصارگر قیمت‌های متفاوتی را بر اساس مقادیر مختلف خرید (بلوک‌های مصرفی) تعیین می‌کند (مانند تعرفه‌های پله‌ای برق و گاز). مصرف‌کنندگان خود را بر اساس میزان مصرف در یکی از پله‌های قیمتی قرار می‌دهند. بخشی از رفاه مصرف‌کننده در این حالت توسط انحصارگر جذب می‌گردد.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/91-nemodar.svg" alt="تبعیض قیمت درجه ۱" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۹: تعادل انحصارگر با تبعیض قیمت کامل (درجه ۱)
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/92-nemodar.svg" alt="تبعیض قیمت درجه ۲" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۱۰: قیمت‌گذاری بلوکی و پله‌ای در تبعیض قیمت درجه ۲
            </p>
          </div>
        </div>

        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>۳. تبعیض قیمت درجه ۳ (چند بازاری)</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این حالت، انحصارگر بازار خود را به بخش‌های جداگانه‌ای با کشش‌های قیمتی متفاوت تقسیم می‌کند (مانند بلیط سینما برای دانشجویان و افراد عادی).
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با فرض وجود دو بازار با مقادیر فروش <InlineMath math="Q_1" /> و <InlineMath math="Q_2" /> و تابع هزینه کل <InlineMath math="TC(Q_1 + Q_2)" />، تابع سود به صورت زیر تعریف می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="\pi = TR_1(Q_1) + TR_2(Q_2) - TC(Q_1 + Q_2)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرایط مرتبه اول تعادل (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi}{\partial Q_1} = 0 \implies MR_1(Q_1) - MC(Q_1 + Q_2) = 0 \implies MR_1 = MC" />
          <BlockMath math="\frac{\partial \pi}{\partial Q_2} = 0 \implies MR_2(Q_2) - MC(Q_1 + Q_2) = 0 \implies MR_2 = MC" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بنابراین، شرط تعادل نهایی عبارت است از:
        </p>
        <div className="formula-box">
          <BlockMath math="MR_1 = MR_2 = MC" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>ارتباط با کشش قیمتی تقاضا:</strong> با استفاده از رابطه درآمد نهایی و کشش:
        </p>
        <div className="formula-box">
          <BlockMath math="P_1 \left( 1 - \frac{1}{|e_1|} \right) = P_2 \left( 1 - \frac{1}{|e_2|} \right) = MC" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          اگر کشش تقاضا در بازار اول بزرگتر از بازار دوم باشد (<InlineMath math="|e_1| > |e_2|" />)، برای برابری رابطه بالا باید داشته باشیم:
        </p>
        <div className="formula-box">
          <BlockMath math="1 - \frac{1}{|e_1|} > 1 - \frac{1}{|e_2|} \implies P_1 < P_2" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
          این اثبات ریاضی نشان می‌دهد که انحصارگر در بازاری که <strong>کشش تقاضای بیشتری</strong> دارد (مصرف‌کنندگان به قیمت حساس‌ترند)، <strong>قیمت کمتری</strong> وضع می‌کند.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>ب) انحصارگر چندکارخانه‌ای (Multi-plant Monopoly)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این ساختار، انحصارگر محصول همگن خود را در دو یا چند کارخانه با ساختار هزینه‌ای متفاوت تولید کرده و در یک بازار واحد به فروش می‌رساند.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          اگر کارخانه‌ها هزینه‌های کل <InlineMath math="TC_1(Q_1)" /> و <InlineMath math="TC_2(Q_2)" /> داشته باشند، تابع سود انحصارگر با توجه به کل تولید <InlineMath math="Q = Q_1 + Q_2" /> به صورت زیر است:
        </p>
        <div className="formula-box">
          <BlockMath math="\pi = TR(Q_1 + Q_2) - TC_1(Q_1) - TC_2(Q_2)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرایط مرتبه اول (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi}{\partial Q_1} = 0 \implies MR(Q) = MC_1(Q_1)" />
          <BlockMath math="\frac{\partial \pi}{\partial Q_2} = 0 \implies MR(Q) = MC_2(Q_2)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بنابراین، شرط تعادل نهایی بنگاه چندکارخانه‌ای عبارت است از:
        </p>
        <div className="formula-box">
          <BlockMath math="MR(Q) = MC_1(Q_1) = MC_2(Q_2)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          به این معنی که هزینه نهایی تولید آخرین واحد کالا در تمام کارخانه‌ها باید یکسان و برابر با درآمد نهایی حاصل از کل فروش باشد.
        </p>

        <div className="example-box">
          <h4>حالت چند کالا با تقاضای متقاطع (Interrelated Demands):</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            اگر انحصارگر دو کالای متفاوت اما با تقاضای متقاطع (مکمل یا جانشین) تولید کند، سود تعادلی او از رابطه زیر به دست می‌آید:
          </p>
          <div className="formula-box" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <BlockMath math="\pi = TR_1(Q_1, Q_2) + TR_2(Q_1, Q_2) - TC_1(Q_1) - TC_2(Q_2)" />
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            شرط تعادل به صورت زیر است:
          </p>
          <div className="formula-box" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <BlockMath math="MR_1 + \frac{\partial TR_2}{\partial Q_1} = MC_1 \quad , \quad MR_2 + \frac{\partial TR_1}{\partial Q_2} = MC_2" />
          </div>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc' }}>
            <li>
              <strong>اگر دو کالا مکمل باشند (<InlineMath math="\frac{\partial TR_2}{\partial Q_1} > 0" />):</strong> افزایش تولید کالا ۱ تقاضای کالا ۲ را تحریک کرده و درآمد آن را بالا می‌برد. بنابراین انحصارگر مقادیر بیشتری از هر دو کالا نسبت به حالت بدون ارتباط تقاضا تولید می‌کند.
            </li>
            <li>
              <strong>اگر دو کالا جانشین باشند (<InlineMath math="\frac{\partial TR_2}{\partial Q_1} < 0" />):</strong> افزایش تولید کالا ۱ تقاضای کالا ۲ را کاهش می‌دهد (پدیده همنوع‌خواری یا Cannibalization). بنابراین انحصارگر مقادیر تولید هر دو کالا را محدودتر می‌کند.
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Government Taxes */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Coins style={{ color: 'var(--primary)' }} />
          ۴. اثرات ۴ نوع مالیات دولت بر انحصارگر
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          دولت‌ها برای مهار قدرت انحصار یا افزایش درآمدهای خود بر انحصارگر مالیات وضع می‌کنند. در ادامه، اثرات ۴ نوع مالیات تعادلی را به صورت ریاضی اثبات می‌کنیم.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '1rem' }}>۱. مالیات ثابت (Lump-sum Tax)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          دولت عوارض تعادلی ثابتی معادل <InlineMath math="T" /> بدون توجه به مقدار تولید بنگاه وضع می‌کند.
        </p>
        <div className="formula-box">
          <BlockMath math="\pi_{at} = TR(Q) - TC(Q) - T" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط تعادل (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi_{at}}{\partial Q} = 0 \implies MR(Q) - MC(Q) - 0 = 0 \implies MR(Q) = MC(Q)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>تحلیل تخصیصی:</strong> از آنجا که نرخ مالیات ثابت مستقل از مقدار تولید است، مشتق آن صفر شده و مقدار تعادلی (<InlineMath math="Q" />) و قیمت تعادلی (<InlineMath math="P" />) کماکان بدون تغییر می‌مانند. این مالیات فاقد اثر تخصیصی بوده و فقط سود انحصارگر را به میزان <InlineMath math="T" /> کاهش می‌دهد.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۲. مالیات بر سود (Profit Tax)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          دولت درصدی معادل <InlineMath math="t" /> از سود اقتصادی انحصارگر را کسر می‌کند.
        </p>
        <div className="formula-box">
          <BlockMath math="\pi_{at} = (1 - t)[TR(Q) - TC(Q)] = (1 - t)\pi_{bt}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط تعادل (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi_{at}}{\partial Q} = 0 \implies (1 - t)[MR(Q) - MC(Q)] = 0" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          از آنجا که نرخ مالیات از ۱۰۰ درصد کمتر است (<InlineMath math="1-t \ne 0" />)، شرط بهینه همچنان <InlineMath math="MR = MC" /> باقی می‌ماند. بنابراین، مالیات بر سود نیز هیچ اثر تخصیصی روی مقدار تولید و قیمت ندارد و فقط سود خالص انحصارگر را کاهش می‌دهد.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/96-nemodar.svg" alt="نمودار مالیات ثابت انحصارگر" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۱۱: اثر مالیات ثابت بر روی هزینه متوسط و سود انحصارگر (بدون تغییر قیمت و مقدار)
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/97-nemodar.svg" alt="نمودار مالیات بر واحد انحصارگر" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۳.۱۲: اثر مالیات بر واحد بر هزینه نهایی و کاهش مقدار تولید به همراه افزایش قیمت
            </p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳. مالیات بر واحد (Per-unit Tax)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          دولت به ازای هر واحد فروش کالا، مبلغ ثابت <InlineMath math="t" /> واحد مالیات وضع می‌کند.
        </p>
        <div className="formula-box">
          <BlockMath math="\pi_{at} = TR(Q) - TC(Q) - t \cdot Q" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط تعادل (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi_{at}}{\partial Q} = 0 \implies MR(Q) - MC(Q) - t = 0 \implies MR(Q) = MC(Q) + t" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          این امر هزینه نهایی تعادلی انحصارگر را به طور موازی به میزان <InlineMath math="t" /> به سمت بالا منتقل می‌کند.
        </p>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>اثبات ریاضی کاهش مقدار تولید تعادلی (<InlineMath math="\frac{dQ}{dt} < 0" />):</strong> با دیفرانسیل‌گیری کامل از شرط تعادل FOC نسبت به نرخ مالیات <InlineMath math="t" />:
        </p>
        <div className="formula-box">
          <BlockMath math="(MR' - MC') dQ - dt = 0 \implies \frac{dQ}{dt} = \frac{1}{MR' - MC'}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با توجه به شرط مرتبه دوم سود انحصارگر (SOC) که مخرج کسر فوق یعنی <InlineMath math="MR' - MC' < 0" /> است، همواره خواهیم داشت:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{dQ}{dt} < 0" />
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>اثبات ریاضی افزایش قیمت تعادلی (<InlineMath math="\frac{dP}{dt} > 0" />):</strong> بر اساس قاعده زنجیره‌ای برای شیب منفی تقاضا (<InlineMath math="P'(Q) < 0" />):
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{dP}{dt} = \frac{dP}{dQ} \cdot \frac{dQ}{dt}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          چون هر دو جمله سمت راست منفی هستند، حاصل‌ضرب آن‌ها مثبت خواهد بود:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{dP}{dt} > 0" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. مالیات ارزشی (Ad-valorem Tax / مالیات بر فروش)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          دولت درصدی معادل <InlineMath math="t" /> از ارزش کل فروش (درآمد کل) را به عنوان مالیات دریافت می‌کند.
        </p>
        <div className="formula-box">
          <BlockMath math="\pi_{at} = (1 - t)TR(Q) - TC(Q)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط تعادل (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \pi_{at}}{\partial Q} = 0 \implies (1 - t)MR(Q) - MC(Q) = 0 \implies (1 - t)MR(Q) = MC(Q)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          این امر منحنی درآمد نهایی را به صورت چرخشی به سمت پایین متمایل می‌کند.
        </p>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>اثبات ریاضی کاهش مقدار تولید تعادلی (<InlineMath math="\frac{dQ}{dt} < 0" />):</strong> با دیفرانسیل‌گیری کامل از شرط تعادل FOC نسبت به نرخ مالیات <InlineMath math="t" />:
        </p>
        <div className="formula-box">
          <BlockMath math="-MR \cdot dt + (1 - t)MR' dQ - MC' dQ = 0 \implies [(1 - t)MR' - MC'] dQ = MR \cdot dt" />
          <BlockMath math="\frac{dQ}{dt} = \frac{MR}{(1 - t)MR' - MC'}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          با توجه به شرط مرتبه دوم سود (SOC) که مخرج کسر منفی است و از آنجا که انحصارگر همواره در ناحیه درآمد نهایی مثبت کار می‌کند (<InlineMath math="MR > 0" />)، صورت کسر مثبت است. بنابراین:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{dQ}{dt} < 0" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>جدول مقایسه‌ای اثرات ۴ نوع مالیات بر انحصارگر</h3>
        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--card-border)', borderRadius: '12px' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)', textAlign: 'right' }}>
                <th style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>نوع مالیات</th>
                <th style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>مقدار تولید (<InlineMath math="Q" />)</th>
                <th style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>قیمت بازار (<InlineMath math="P" />)</th>
                <th style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>سود خالص (<InlineMath math="\pi" />)</th>
                <th style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>اثر تخصیصی (کارایی بازار)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}><strong>ثابت (Lump-sum)</strong></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--success)' }}>بدون تغییر</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--success)' }}>بدون تغییر</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--danger)' }}>کاهش به اندازه <InlineMath math="T" /></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>ندارد (کارایی تخصیصی حفظ می‌شود)</td>
              </tr>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}><strong>بر سود (Profit Tax)</strong></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--success)' }}>بدون تغییر</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--success)' }}>بدون تغییر</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--danger)' }}>کاهش به میزان سهم <InlineMath math="t" /></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>ندارد (کارایی تخصیصی حفظ می‌شود)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}><strong>بر واحد (Per-unit)</strong></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--danger)' }}>کاهش (<InlineMath math="\downarrow" />)</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--warning)' }}>افزایش (<InlineMath math="\uparrow" />)</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--danger)' }}>کاهش شدید</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>دارد (افزایش زیان رفاهی جامعه)</td>
              </tr>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}><strong>ارزشی (Ad-valorem)</strong></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--danger)' }}>کاهش (<InlineMath math="\downarrow" />)</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--warning)' }}>افزایش (<InlineMath math="\uparrow" />)</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)', color: 'var(--danger)' }}>کاهش شدید</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--card-border)' }}>دارد (افزایش زیان رفاهی جامعه)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Monopsony */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Users style={{ color: 'var(--primary)' }} />
          ۵. انحصار خرید در بازار نهاده‌ها (Monopsony)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          انحصار خرید وضعیتی است که در آن تنها یک خریدار برای عوامل تولید (مانند نیروی کار) در بازار وجود دارد. در این ساختار، خریدار با منحنی عرضه صعودی نهاده مواجه است، یعنی برای استخدام واحدهای بیشتر نهاده، باید قیمت یا دستمزد بالاتری پرداخت کند:
        </p>
        <div className="formula-box">
          <BlockMath math="r = g(x) \quad , \quad g'(x) > 0" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این فرمول <InlineMath math="x" /> مقدار نهاده و <InlineMath math="r" /> قیمت نهاده (دستمزد) است. هزینه کل استخدام نهاده عبارت است از:
        </p>
        <div className="formula-box">
          <BlockMath math="TC_x = r \cdot x = g(x) \cdot x" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          هزینه نهایی استخدام نهاده (<InlineMath math="MFC_x" />) برابر است با:
        </p>
        <div className="formula-box">
          <BlockMath math="MFC_x = \frac{\partial TC_x}{\partial x} = g(x) + x \cdot g'(x)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          چون شیب منحنی عرضه مثبت است (<InlineMath math="g'(x) > 0" />)، همواره هزینه نهایی استخدام نهاده بزرگتر از دستمزد پرداختی به آخرین واحد استخدام شده است:
        </p>
        <div className="formula-box">
          <BlockMath math="MFC_x > r" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>حالت اول: فروش محصول در بازار رقابت کامل</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          اگر انحصارگر خرید نهاده، محصول نهایی تولید شده را در بازاری کاملاً رقابتی به قیمت ثابت <InlineMath math="P" /> بفروشد، سود وی به صورت زیر است:
        </p>
        <div className="formula-box">
          <BlockMath math="\max_{x} \pi = P \cdot q(x) - g(x) \cdot x" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط تعادل (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="P \cdot q'(x) = g(x) + x \cdot g'(x) \implies VMP_x = MFC_x" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          حاصل‌ضرب قیمت محصول در تولید نهایی نهاده را <strong>ارزش تولید نهایی (<InlineMath math="VMP_x" />)</strong> می‌نامند.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>حالت دوم: انحصار فروش محصول و انحصار خرید نهاده</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          اگر بنگاه هم انحصار کامل در فروش محصول داشته باشد (<InlineMath math="P = P(Q)" />) و هم انحصار خرید در استخدام نهاده داشته باشد:
        </p>
        <div className="formula-box">
          <BlockMath math="\max_{x} \pi = TR(q(x)) - g(x) \cdot x" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>شرط تعادل (FOC):</strong>
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial TR}{\partial q} \cdot q'(x) = g(x) + x \cdot g'(x) \implies MRP_x = MFC_x" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          حاصل‌ضرب درآمد نهایی محصول در تولید نهایی نهاده را <strong>درآمد تولید نهایی (<InlineMath math="MRP_x" />)</strong> می‌نامند.
        </p>
        
        <div className="example-box">
          <h4>پدیده استثمار انحصار خرید (Monopsonistic Exploitation):</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '0.5rem' }}>
            در هر دو حالت فوق، بنگاه ابتدا مقدار بهینه نهاده (<InlineMath math="x^*" />) را از برابری بالا تعیین می‌کند. سپس دستمزد پرداختی را بر اساس منحنی عرضه نهاده تعیین می‌کند (<InlineMath math="r^* = g(x^*)" />).
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            از آنجا که دستمزد پرداختی کمتر از ارزش تولید نهایی نهاده است (<InlineMath math="r^* < VMP_x" />)، تفاوت میان ارزش واقعی کار نهاده و دستمزد پرداختی به آن را <strong>استثمار انحصار خرید</strong> می‌نامند. در حالت انحصار دوطرفه، این پدیده به دلیل اینکه <InlineMath math="MRP_x < VMP_x" /> است، شدیدتر بوده و نهاده بسیار کمتری با دستمزد به مراتب پایین‌تر استخدام می‌شود.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}>
            <img src="/svg/101-nemodar.svg" alt="بازار کار انحصار خرید" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۳.۱۳: تعادل انحصار خرید در بازار کار عوامل تولید</p>
          </div>
        </div>

      </div>

      {/* 5. Detailed Numerical Examples */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Grid style={{ color: 'var(--success)' }} />
          ۵. مثال‌های عددی حل‌شده به صورت تشریحی
        </h2>

        {/* Example 1 */}
        <div className="example-box">
          <h4>مثال ۱: مقایسه انحصار کامل بدون تبعیض و با تبعیض قیمت کامل (درجه ۱)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> یک بنگاه انحصاری با تابع هزینه کل <InlineMath math="TC = 20Q + 50" /> و تابع تقاضای بازار <InlineMath math="P = 100 - 4Q" /> مواجه است. تعادل بنگاه (قیمت، مقدار و سود) را در دو حالت زیر محاسبه کنید:
            <br />
            ۱) بنگاه هیچ تبعیض قیمتی اعمال نکند.
            <br />
            ۲) بنگاه تبعیض قیمت درجه ۱ (کامل) اعمال کند.
          </p>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <li>
              <strong>حالت اول: انحصار بدون تبعیض قیمت (یکسان‌ساز)</strong>
              <br />
              ابتدا درآمد کل و درآمد نهایی را محاسبه می‌کنیم:
              <BlockMath math="TR = P \cdot Q = (100 - 4Q)Q = 100Q - 4Q^2 \implies MR = \frac{\partial TR}{\partial Q} = 100 - 8Q" />
              هزینه نهایی نیز از تابع هزینه کل استخراج می‌شود:
              <BlockMath math="MC = \frac{\partial TC}{\partial Q} = 20" />
              شرط تعادل انحصارگر:
              <BlockMath math="MR = MC \implies 100 - 8Q = 20 \implies 80 = 8Q \implies Q^* = 10" />
              قیمت تعادلی بازار:
              <BlockMath math="P^* = 100 - 4(10) = 60" />
              سود اقتصادی بنگاه:
              <BlockMath math="TR = 60 \cdot 10 = 600 \quad , \quad TC = 20(10) + 50 = 250" />
              <BlockMath math="\pi^* = TR - TC = 600 - 250 = 350" />
            </li>
            <li>
              <strong>حالت دوم: تبعیض قیمت کامل (درجه ۱)</strong>
              <br />
              در تبعیض کامل، انحصارگر کل مازاد مصرف‌کننده را تصاحب کرده و قیمت هر واحد را برابر با تمایل به پرداخت نهایی مصرف‌کننده تعیین می‌کند. در این حالت شرط تعادل برابر است با:
              <BlockMath math="P = MC \implies 100 - 4Q = 20 \implies 80 = 4Q \implies Q_{disc}^* = 20" />
              درآمد کل از مساحت زیر منحنی تقاضا (انتگرال تقاضا) به دست می‌آید:
              <BlockMath math="TR = \int_0^{20} (100 - 4Q) dQ = \left[ 100Q - 2Q^2 \right]_0^{20} = (2000 - 800) - 0 = 1200" />
              هزینه کل برای مقدار تولید ۲۰ واحد:
              <BlockMath math="TC = 20(20) + 50 = 450" />
              سود بنگاه در حالت تبعیض کامل:
              <BlockMath math="\pi_{disc}^* = TR - TC = 1200 - 450 = 750" />
              تفسیر: با اعمال تبعیض کامل، مقدار تولید بنگاه به سطح رقابتی (۲۰ واحد) افزایش یافته و سود بنگاه نیز از ۳۵۰ به ۷۵۰ افزایش می‌یابد.
            </li>
          </ol>
        </div>

        {/* Example 2 */}
        <div className="example-box" style={{ marginTop: '2rem' }}>
          <h4>مثال ۲: محاسبه درآمد کل در تبعیض قیمت چندپله‌ای (درجه ۲)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> انحصارگری برای ۶ واحد اول قیمت ۱۵ و برای واحدهای اضافی تا سطح ۱۸ واحد قیمت ۱۰ وضع می‌کند. درآمد کل بنگاه را محاسبه کنید.
          </p>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1rem' }}>گام‌های حل تشریحی:</p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            در تبعیض درجه ۲، مصرف‌کننده برای پله اول قیمت بالاتری پرداخته و با افزایش خرید، برای پله‌های بعدی قیمت کمتری می‌پردازد:
            <BlockMath math="TR = P_1 \cdot Q_1 + P_2 \cdot (Q_2 - Q_1)" />
            با جایگذاری اعداد مسئله داریم:
            <BlockMath math="TR = 15 \cdot 6 + 10 \cdot (18 - 6) = 90 + 120 = 210" />
            این مدل به عنوان تعرفه‌های پله‌ای (بلاک‌بندی) در خدمات عمومی نظیر آب و برق کاربرد دارد.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Step3;
