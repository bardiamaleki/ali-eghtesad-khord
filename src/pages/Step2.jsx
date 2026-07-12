import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import { TrendingUp, Scale, Grid, Activity, Percent, Coins, Layers, Factory } from 'lucide-react';

const Step2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Title Header */}
      <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--primary)' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          گام ۲: رفتار تولیدکننده و نظریه هزینه (تقارن و قانون آینه)
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          در این بخش به تحلیل رفتار تولیدکننده عقلایی، مفاهیم بهره‌وری در کوتاه‌مدت و بلندمدت، ساختارهای هزینه و اثبات رابطه معکوس بین تولید و هزینه، تعادل تولیدکننده، تقاضای نهاده‌ها، اصل لوشاتلیه، مسیر توسعه، لم شپارد، منحنی امکانات تولید (PPF) و تابع تولید CES می‌پردازیم. این مباحث بر پایه قانون آینه (تقارن ساختاری) در مقایسه مستقیم با نظریه مصرف‌کننده ارائه شده است.
        </p>
      </div>

      {/* 1. Production Theory & Productivity */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Factory style={{ color: 'var(--primary)' }} />
          ۱. نظریه تولید و مفاهیم بهره‌وری (مقایسه و تقارن)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در جدول زیر و بخش‌های بعدی، تقارن کامل بین فضای انتخاب مصرف‌کننده و تولیدکننده را مشاهده می‌کنید. تولیدکننده با استفاده از نهاده‌ها محصول نهایی را خلق می‌کند، همان‌گونه که مصرف‌کننده با کالاها مطلوبیت ایجاد می‌کند.
        </p>

        {/* Mirror Grid for Production Basics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Right Column: Consumer Theory */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={18} />
              نظریه مصرف‌کننده: سبد مصرف و مطلوبیت
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              مصرف‌کننده با انتخاب مقادیری از کالاهای <InlineMath math="x" /> و <InlineMath math="y" /> مطلوبیت ذهنی خود را شکل می‌دهد:
            </p>
            <div className="formula-box">
              <BlockMath math="U = U(x, y)" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              مطلوبیت نهایی هر کالا بیانگر میزان افزایش مطلوبیت کل به ازای مصرف یک واحد اضافی از آن کالا است:
            </p>
            <div className="formula-box">
              <BlockMath math="MU_x = \frac{\partial U}{\partial x} \quad , \quad MU_y = \frac{\partial U}{\partial y}" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              منحنی بی‌تفاوتی (Indifference Curve) مکان هندسی سبدهایی است که مطلوبیت یکسانی ایجاد می‌کنند. شیب آن برابر نرخ نهایی جانشینی است:
            </p>
            <div className="formula-box">
              <BlockMath math="MRS_{xy} = -\frac{dy}{dx} = \frac{MU_x}{MU_y}" />
            </div>
          </div>

          {/* Left Column: Producer Theory */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} />
              نظریه تولیدکننده: سبد نهاده و تولید
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              تولیدکننده با ترکیب عوامل تولید نیروی کار (<InlineMath math="L" />) و سرمایه (<InlineMath math="K" />) محصول <InlineMath math="Q" /> را تولید می‌کند:
            </p>
            <div className="formula-box">
              <BlockMath math="Q = f(L, K)" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              تولید نهایی عوامل تولید، مشتق اول تابع تولید نسبت به نهاده متناظر است:
            </p>
            <div className="formula-box">
              <BlockMath math="MP_L = \frac{\partial Q}{\partial L} \quad , \quad MP_K = \frac{\partial Q}{\partial K}" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              منحنی هم‌تولید (Isoquant) ترکیبات مختلف نهاده‌ها برای تولید سطح معینی از محصول است. شیب آن برابر با نرخ نهایی جانشینی فنی است:
            </p>
            <div className="formula-box">
              <BlockMath math="MRTS_{L,K} = -\frac{dK}{dL} = \frac{MP_L}{MP_K}" />
            </div>
          </div>
        </div>

        {/* Short-Run vs Long-Run Details */}
        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱.۱. تحلیل رفتار تولید در کوتاه‌مدت و مراحل سه‌گانه</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در کوتاه‌مدت، سرمایه ثابت (<InlineMath math="K = \bar{K}" />) و نیروی کار متغیر است (<InlineMath math="Q = f(L, \bar{K})" />). شاخص‌های بهره‌وری کل، متوسط و نهایی به صورت زیر تعریف می‌شوند:
        </p>
        <div className="formula-box">
          <BlockMath math="TP_L = Q = f(L, \bar{K}) \quad , \quad AP_L = \frac{TP_L}{L} = \frac{Q}{L} \quad , \quad MP_L = \frac{\partial Q}{\partial L}" />
        </div>

        {/* SVG Representation: Short-Run Production */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/8-tp-mp-ap.svg" alt="بهره‌وری تولید در کوتاه‌مدت" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۱: منحنی‌های بهره‌وری کل (<InlineMath math="TP_L" />)، متوسط (<InlineMath math="AP_L" />) و نهایی (<InlineMath math="MP_L" />)
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/54-diagram.svg" alt="مراحل سه‌گانه تولید" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۲: مراحل سه‌گانه بهره‌وری تولید و نواحی غیرعقلایی و عقلایی (منطقه II)
            </p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem' }}>تقسیم‌بندی مراحل تولید کوتاه‌مدت:</p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <strong>مرحله اول (بازده فزاینده و متوسط صعودی):</strong> از مبدأ تا نقطه بیشینه بهره‌وری متوسط (<InlineMath math="\max AP_L" />) که در آن <InlineMath math="MP_L = AP_L" /> است. در این ناحیه به دلیل استفاده ناکافی از سرمایه ثابت نسبت به نهاده متغیر، تولید متوسط صعودی است و تولیدکننده عقلایی در این مرحله متوقف نمی‌شود (منطقه توقف ممنوع).
          </li>
          <li>
            <strong>مرحله دوم (ناحیه بهینه و اقتصادی تولید):</strong> از بیشینه بهره‌وری متوسط شروع و تا نقطه صفر شدن بهره‌وری نهایی (<InlineMath math="MP_L = 0" />) که در آن تولید کل بیشینه است (<InlineMath math="\max TP_L" />) ادامه دارد. این تنها ناحیه عقلایی است که هر دو منحنی متوسط و نهایی نزولی اما مثبت هستند.
          </li>
          <li>
            <strong>مرحله سوم (بازده منفی نهایی):</strong> با منفی شدن تولید نهایی (<InlineMath math="MP_L < 0" />) آغاز می‌شود. در این مرحله شلوغی بیش از حد کارگاه مانع از کارایی می‌شود و استخدام کارگر اضافی تولید کل را کاهش می‌دهد (منطقه ورود ممنوع).
          </li>
        </ul>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۱.۲. تولید در بلندمدت و منحنی‌های هم‌تولید</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در بلندمدت تمامی نهاده‌ها متغیر هستند. منحنی هم‌تولید نرخ‌های متفاوتی از عوامل تولید را نشان می‌دهد که همگی سطح یکسانی از محصول را ارائه می‌دهند.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/9-long-run-production.svg" alt="تولید در بلندمدت" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۲.۳: نقشه منحنی‌های هم‌تولید در بلندمدت</p>
          </div>
        </div>
      </div>

      {/* 2. Cost Structures & Inverse Relations */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Coins style={{ color: 'var(--primary)' }} />
          ۲. ساختارهای هزینه و اثبات رابطه معکوس بین تولید و هزینه
        </h2>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          هزینه‌های یک بنگاه منعکس‌کننده ویژگی‌های فنی تابع تولید و قیمت نهاده‌ها در بازار است. بر اساس نظریه دوگانگی، بهره‌وری و هزینه آینه‌ی یکدیگرند.
        </p>

        {/* Mirror Grid for Cost Structures */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Right Column: Consumer Budget */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={18} />
              محدودیت بودجه مصرف‌کننده
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              مصرف‌کننده با بودجه ثابت <InlineMath math="I" /> روبه‌رو است که کل درآمدش را به خرید کالاها اختصاص می‌دهد:
            </p>
            <div className="formula-box">
              <BlockMath math="I = P_x \cdot x + P_y \cdot y" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              شیب خط بودجه نشان‌دهنده قیمت نسبی دو کالا در بازار است:
            </p>
            <div className="formula-box">
              <BlockMath math="\text{Slope} = -\frac{P_x}{P_y}" />
            </div>
          </div>

          {/* Left Column: Producer Costs */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} />
              ساختار هزینه کل تولیدکننده
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              کل هزینه تولید در کوتاه‌مدت حاصل‌جمع هزینه ثابت کل (<InlineMath math="TFC" />) و هزینه متغیر کل (<InlineMath math="TVC" />) است:
            </p>
            <div className="formula-box">
              <BlockMath math="TC = TFC + TVC = P_K \cdot \bar{K} + P_L \cdot L" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              هزینه‌های متوسط و نهایی به صورت زیر از تابع هزینه کل استخراج می‌شوند:
            </p>
            <div className="formula-box">
              <BlockMath math="AFC = \frac{TFC}{Q} \quad , \quad AVC = \frac{TVC}{Q} \quad , \quad ATC = \frac{TC}{Q} \quad , \quad MC = \frac{\partial TC}{\partial Q}" />
            </div>
          </div>
        </div>

        {/* Cost Curves Diagrams */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/11-total-costs.svg" alt="هزینه‌های کل" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۴: منحنی‌های هزینه ثابت کل (<InlineMath math="TFC" />)، متغیر کل (<InlineMath math="TVC" />) و هزینه کل (<InlineMath math="TC" />)
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/11-average-marginal-costs.svg" alt="هزینه‌های متوسط و نهایی" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۵: منحنی‌های هزینه نهایی (<InlineMath math="MC" />)، هزینه کل متوسط (<InlineMath math="ATC" />) و هزینه متغیر متوسط (<InlineMath math="AVC" />)
            </p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۲.۱. اثبات ریاضی رابطه معکوس بین تولید و هزینه (دوگانگی)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این بخش اثبات می‌کنیم که چگونه مفاهیم نهایی و متوسط هزینه با مفاهیم متناظر تولید رابطه معکوس ریاضی دارند. فرض کنید دستمزد نیروی کار برابر با <InlineMath math="P_L" /> باشد که در بازار رقابتی مقداری ثابت است.
        </p>

        <div className="example-box">
          <h4>اثبات اول: رابطه معکوس هزینه نهایی (<InlineMath math="MC" />) و تولید نهایی کارگر (<InlineMath math="MP_L" />)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با مشتق‌گیری از هزینه کل نسبت به تولید (<InlineMath math="Q" />)، هزینه نهایی را به دست می‌آوریم:
          </p>
          <BlockMath math="MC = \frac{\partial TC}{\partial Q} = \frac{\partial (TFC + P_L \cdot L)}{\partial Q}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            چون <InlineMath math="TFC" /> ثابت است، مشتق آن صفر شده و داریم:
          </p>
          <BlockMath math="MC = P_L \frac{\partial L}{\partial Q} = \frac{P_L}{\frac{\partial Q}{\partial L}} = \frac{P_L}{MP_L}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            بنابراین، چون دستمزد <InlineMath math="P_L" /> ثابت و مثبت است، با به حداکثر رسیدن تولید نهایی کارگر (<InlineMath math="MP_L" />)، هزینه نهایی بنگاه (<InlineMath math="MC" />) به حداقل ممکن خواهد رسید:
            <br />
            <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>
              <InlineMath math="\max MP_L \Longleftrightarrow \min MC" />
            </span>
          </p>
        </div>

        <div className="example-box" style={{ borderRightColor: 'var(--primary)', borderLeft: '1px solid rgba(59, 130, 246, 0.2)', backgroundColor: 'rgba(59, 130, 246, 0.03)' }}>
          <h4 style={{ color: 'var(--primary)' }}>اثبات دوم: رابطه معکوس هزینه متغیر متوسط (<InlineMath math="AVC" />) و تولید متوسط کارگر (<InlineMath math="AP_L" />)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با تقسیم هزینه متغیر کل بر محصول تولیدی، تعریف هزینه متغیر متوسط را می‌نویسیم:
          </p>
          <BlockMath math="AVC = \frac{TVC}{Q} = \frac{P_L \cdot L}{Q} = \frac{P_L}{\frac{Q}{L}} = \frac{P_L}{AP_L}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            به دلیل ثابت بودن نرخ دستمزد، هزینه متغیر متوسط رابطه معکوس مستقیمی با تولید متوسط دارد. یعنی با دستیابی به کارایی و تولید متوسط حداکثر (<InlineMath math="AP_L" />)، هزینه متغیر متوسط به کمترین نقطه خود می‌رسد:
            <br />
            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
              <InlineMath math="\max AP_L \Longleftrightarrow \min AVC" />
            </span>
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}>
            <img src="/svg/65-diagram.svg" alt="رابطه تولید و هزینه" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۲.۶: هم‌ترازی نقاط بهینه فنی و هزینه‌ای (نگاشت مستقیم تولید و هزینه)</p>
          </div>
        </div>
      </div>

      {/* 3. Producer Equilibrium */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Scale style={{ color: 'var(--primary)' }} />
          ۳. ریاضیات تعادل تولیدکننده و مسیر توسعه
        </h2>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در بلندمدت، تولیدکننده عقلایی به دنبال بهینه‌سازی رفتار خویش است. این رفتار بهینه‌سازی به دو صورت مقید مستقیم (حداکثرسازی تولید با هزینه ثابت) یا مسئله معکوس/دوگان (حداقل‌سازی هزینه با تولید مشخص) حل می‌گردد.
        </p>

        {/* Mirror Grid for Equilibrium Cases */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Right Column: Consumer Max Utility */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={18} />
              تعادل مصرف‌کننده
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              مسئله بهینه‌سازی مطلوبیت (UMP):
            </p>
            <div className="formula-box">
              <BlockMath math="\max U(x, y) \quad \text{s.t.} \quad I = P_x x + P_y y" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              شرط مرتبه اول (FOC) تعادل مصرف‌کننده:
            </p>
            <div className="formula-box">
              <BlockMath math="MRS_{xy} = \frac{MU_x}{MU_y} = \frac{P_x}{P_y}" />
            </div>
          </div>

          {/* Left Column: Producer Max Output & Min Cost */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} />
              تعادل تولیدکننده
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1.1rem' }}>
              ۱. حداکثرسازی تولید با هزینه مشخص:
            </p>
            <div className="formula-box" style={{ margin: '0.5rem 0' }}>
              <BlockMath math="\max Q = f(L, K) \quad \text{s.t.} \quad \bar{C} = P_L L + P_K K" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1.1rem' }}>
              ۲. حداقل‌سازی هزینه با سطح تولید مشخص:
            </p>
            <div className="formula-box" style={{ margin: '0.5rem 0' }}>
              <BlockMath math="\min C = P_L L + P_K K \quad \text{s.t.} \quad \bar{Q} = f(L, K)" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '0.5rem' }}>
              هر دو مسئله شرط تعادل فنی یکسانی به همراه دارند:
            </p>
            <div className="formula-box" style={{ margin: '0.5rem 0' }}>
              <BlockMath math="MRTS_{L,K} = \frac{MP_L}{MP_K} = \frac{P_L}{P_K}" />
            </div>
          </div>
        </div>

        {/* Diagrams of Producer Equilibrium */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/10-producer-equilibrium.svg" alt="تعادل تولیدکننده" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۷: نقطه تعادل بلندمدت (مماس شدن خط هم‌هزینه و منحنی هم‌تولید)
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/55-diagram.svg" alt="حالات بهینه‌سازی تعادل" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۸: حالات دوگانه بهینه‌سازی تولید (مستقیم و دوگان)
            </p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳.۱. شرایط مرتبه دوم تعادل (Hessian Matrix)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بررسی شرایط مرتبه دوم (SOC) به منظور تضمین اکسترمم بودن نقطه حاصله صورت می‌پذیرد.
        </p>

        <div className="example-box">
          <h4>ماتریس هسین مقید در مسئله حداکثرسازی تولید با بودجه ثابت:</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            دترمینان ماتریس هسین مقید در این حالت باید مثبت باشد تا تولید بیشینه گردد (<InlineMath math="|\bar{H}| > 0" />):
          </p>
          <BlockMath math="|\bar{H}| = \begin{vmatrix} f_{LL} & f_{LK} & -P_L \\ f_{KL} & f_{KK} & -P_K \\ -P_L & -P_K & 0 \end{vmatrix} > 0" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            مثبت بودن این دترمینان متناظر با محدب بودن منحنی‌های هم‌تولید نسبت به مبدأ مختصات است که از نظر اقتصادی، نزولی بودن نرخ نهایی جانشینی فنی (<InlineMath math="MRTS" />) را تضمین می‌کند.
          </p>
        </div>

        <div className="example-box" style={{ borderRightColor: 'var(--primary)', borderLeft: '1px solid rgba(59, 130, 246, 0.2)', backgroundColor: 'rgba(59, 130, 246, 0.03)' }}>
          <h4 style={{ color: 'var(--primary)' }}>ماتریس هسین مقید در مسئله حداقل‌سازی هزینه با تولید ثابت:</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            در مسئله حداقل‌سازی هزینه، دترمینان هسین مقید باید منفی باشد (<InlineMath math="|\bar{H}| < 0" />):
          </p>
          <BlockMath math="|\bar{H}| = \begin{vmatrix} -\mu f_{LL} & -\mu f_{LK} & -f_L \\ -\mu f_{KL} & -\mu f_{KK} & -f_K \\ -f_L & -f_K & 0 \end{vmatrix} < 0" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            در این مسئله، ضریب لاگرانژ <InlineMath math="\mu" /> نمایانگر هزینه نهایی (<InlineMath math="MC" />) تولید محصول است. یعنی هزینه نهایی افزایش یک واحد تولید محصول در این تعادل، دقیقا برابر ضریب لاگرانژ به دست می‌آید: <InlineMath math="\mu = MC" />.
          </p>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳.۲. مسیر توسعه بنگاه (Expansion Path)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          مسیر توسعه مکان هندسی نقاط تعادل تولیدکننده در اثر تغییر بودجه تولید و انتقال موازی خطوط هم‌هزینه است. رابطه ریاضی آن از برابری نرخ نهایی جانشینی فنی با قیمت نسبی عوامل تولید به دست می‌آید.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/66-expansion-path.svg" alt="مسیر توسعه" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۲.۹: مسیر توسعه بنگاه (EP) در فضای نهاده‌ها</p>
          </div>
        </div>
      </div>

      {/* 4. Input Demand & Le Chatelier */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Grid style={{ color: 'var(--primary)' }} />
          ۴. تقاضای نهاده‌ها، اثبات ریاضی شیب و اصل لوشاتلیه
        </h2>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          تقاضای نهاده‌ها حاصل بهینه‌سازی بدون قید سود بنگاه است. در این بخش شیب منفی تقاضای نهاده و اثر لوشاتلیه (مقایسه انعطاف‌پذیری کوتاه‌مدت و بلندمدت) را اثبات می‌کنیم.
        </p>

        {/* Mirror Grid for Demand Concept */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Right Column: Consumer Demand */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={18} />
              تقاضای مصرف‌کننده
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              توابع تقاضای مصرف‌کننده به دو شکل کلی هستند:
            </p>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.85rem', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>تقاضای مارشالی (Direct):</strong> تابع قیمت‌ها و درآمد است: <InlineMath math="x^m(P_x, P_y, I)" /></li>
              <li><strong>تقاضای هیکسی (Conditional):</strong> تابع قیمت‌ها و مطلوبیت است: <InlineMath math="x^h(P_x, P_y, U)" /></li>
            </ul>
          </div>

          {/* Left Column: Input Demand */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} />
              تقاضای نهاده‌های بنگاه
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              توابع تقاضای نهاده نیز دارای دو ساختار معادل هستند:
            </p>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.85rem', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>تقاضای مستقیم نهاده:</strong> حاصل حداکثرسازی بدون قید سود: <InlineMath math="L^*(P_L, P_K, P)" /></li>
              <li><strong>تقاضای مشروط (هیکسی) نهاده:</strong> حاصل حداقل‌سازی هزینه با سطح تولید مشخص: <InlineMath math="L^c(P_L, P_K, Q)" /></li>
            </ul>
          </div>
        </div>

        {/* Input Demand Diagrams */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/63-diagram.svg" alt="تقاضای بلندمدت نیروی کار" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۱۰: منحنی تقاضای بلندمدت نیروی کار (<InlineMath math="LRLD" />)
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/73-min-input.svg" alt="حداقل‌سازی نهاده‌ها" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۱۱: حداقل‌سازی استخدام نهاده تحت درآمد مشخص
            </p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۴.۱. اثبات ریاضی منفی بودن شیب منحنی تقاضای نهاده</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          مسئله حداکثرسازی سود بدون قید بنگاه رقابتی را در نظر بگیرید:
        </p>
        <div className="formula-box">
          <BlockMath math="\max \pi = P \cdot f(x_1, x_2) - r_1 x_1 - r_2 x_2" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          شرایط مرتبه اول (FOC):
        </p>
        <div className="formula-box">
          <BlockMath math="P \cdot f_1(x_1, x_2) = r_1 \quad , \quad P \cdot f_2(x_1, x_2) = r_2" />
        </div>

        <div className="example-box">
          <h4>اثبات منفی بودن شیب تقاضا با قانون کرامر:</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با دیفرانسیل‌گیری کامل از دستگاه FOC نسبت به متغیرهای <InlineMath math="x_1" />، <InlineMath math="x_2" /> و قیمت <InlineMath math="r_1" /> (با فرض <InlineMath math="dr_2 = dP = 0" />) داریم:
          </p>
          <BlockMath math="P f_{11} dx_1 + P f_{12} dx_2 = dr_1" />
          <BlockMath math="P f_{21} dx_1 + P f_{22} dx_2 = 0" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با تشکیل ماتریس ضرایب و استفاده از روش کرامر برای محاسبه تغییر <InlineMath math="dx_1" />:
          </p>
          <BlockMath math="dx_1 = \frac{\begin{vmatrix} dr_1 & P f_{12} \\ 0 & P f_{22} \end{vmatrix}}{\begin{vmatrix} P f_{11} & P f_{12} \\ P f_{21} & P f_{22} \end{vmatrix}} = \frac{P f_{22} dr_1}{P^2 |H|}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            که در آن <InlineMath math="|H|" /> دترمینان هسین سود است. بر اساس شرایط مرتبه دوم حداکثرسازی سود، دترمینان ماتریس هسین سود باید مثبت باشد (<InlineMath math="|H| > 0" />) و طبق قانون بازدهی نزولی، بهره‌وری نهایی هر نهاده نزولی است (<InlineMath math="f_{22} < 0" />). در نتیجه:
          </p>
          <BlockMath math="\frac{dx_1}{dr_1} = \frac{f_{22}}{P |H|} < 0" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            این رابطه منفی بودن شیب منحنی تقاضا برای نهاده اول را در بلندمدت اثبات می‌کند. به همین صورت برای نهاده دوم نیز داریم: <InlineMath math="\frac{dx_2}{dr_2} = \frac{f_{11}}{P |H|} < 0" />.
          </p>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴.۲. مقایسه کشش تقاضا در کوتاه‌مدت و بلندمدت (اصل لوشاتلیه)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بر اساس اصل لوشاتلیه، بنگاه در بلندمدت به دلیل امکان تغییر تمامی نهاده‌ها، انعطاف‌پذیری بیشتری در مقایسه با کوتاه‌مدت دارد. بنابراین شیب تقاضا در بلندمدت ملایم‌تر (و کشش آن بیشتر) است.
        </p>

        <div className="example-box" style={{ borderRightColor: 'var(--accent)', borderLeft: '1px solid rgba(139, 92, 246, 0.2)', backgroundColor: 'rgba(139, 92, 246, 0.03)' }}>
          <h4 style={{ color: 'var(--accent)' }}>اثبات ریاضی رابطه لوشاتلیه:</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            در کوتاه‌مدت با فرض ثابت بودن سرمایه (<InlineMath math="x_2" />)، تغییرات تقاضای کارگر تنها وابسته به بهره‌وری نهایی خود اوست:
          </p>
          <BlockMath math="\frac{dx_1}{dr_1}\Big|_{SR} = \frac{1}{P f_{11}} < 0" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            برای اثبات اینکه تقاضای بلندمدت باکشش‌تر است، نامساوی زیر را ارزیابی می‌کنیم:
          </p>
          <BlockMath math="\left| \frac{dx_1}{dr_1}\Big|_{LR} \right| \ge \left| \frac{dx_1}{dr_1}\Big|_{SR} \right| \Longrightarrow \frac{f_{22}}{P|H|} \le \frac{1}{P f_{11}}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با توجه به منفی بودن <InlineMath math="f_{11}" />، ضرب نامساوی در آن جهت علامت را تغییر می‌دهد:
          </p>
          <BlockMath math="\frac{f_{11} f_{22}}{f_{11}f_{22} - f_{12}^2} \ge 1 \Longrightarrow f_{11} f_{22} \ge f_{11} f_{22} - f_{12}^2 \Longrightarrow f_{12}^2 \ge 0" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            چون مربع هر عدد حقیقی همواره نامنفی است (<InlineMath math="f_{12}^2 \ge 0" />)، این رابطه اثبات می‌گردد و نشان می‌دهد تقاضای عوامل تولید در بلندمدت همواره باکشش‌تر از کوتاه‌مدت است.
          </p>
        </div>

        {/* Leontief Special Case */}
        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴.۳. حالت خاص نهاده‌های مکمل کامل (لئونتیف)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          هنگامی که نهاده‌ها مکمل کامل هستند، جانشینی فنی ناممکن است و منحنی‌های هم‌تولید دارای زوایای ۹۰ درجه می‌باشند.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/64-diagram.svg" alt="مکمل کامل" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۲.۱۲: منحنی‌های هم‌تولید مکمل کامل (لئونتیف)</p>
          </div>
        </div>
      </div>

      {/* 5. Shephard's Lemma & Duality */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Activity style={{ color: 'var(--primary)' }} />
          ۵. لم شپارد و اثبات دوگانگی رفت و برگشتی
        </h2>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          لم شپارد رابطه‌ای مستقیم بین تابع هزینه کل و تقاضای مشروط نهاده‌ها برقرار می‌کند. طبق این لم، مشتق جزئی تابع هزینه نسبت به قیمت هر نهاده، برابر با تقاضای مشروط (هیکسی) آن نهاده است:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial C(P_L, P_K, Q)}{\partial P_L} = L^c(P_L, P_K, Q) \quad , \quad \frac{\partial C(P_L, P_K, Q)}{\partial P_K} = K^c(P_L, P_K, Q)" />
        </div>

        <div className="example-box">
          <h4>مثال جامع ریاضی دوگانگی رفت و برگشت:</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontWeight: 'bold' }}>
            بخش اول: استخراج تابع هزینه از روی تابع تولید
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            فرض کنید تابع تولید کوب-داگلاس به صورت <InlineMath math="Q = L^{1/2} K^{1/2}" /> بوده و نرخ قیمت نهاده‌ها <InlineMath math="w" /> و <InlineMath math="r" /> باشند. تعادل تولیدکننده را تشکیل می‌دهیم:
          </p>
          <BlockMath math="MRTS_{L,K} = \frac{MP_L}{MP_K} = \frac{K}{L} = \frac{w}{r} \Longrightarrow K = \frac{w}{r} L" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با قرار دادن رابطه فوق در تابع تولید، تقاضاهای مشروط نهاده‌ها را برحسب سطح محصول استخراج می‌کنیم:
          </p>
          <BlockMath math="Q = L^{1/2} \left( \frac{w}{r} L \right)^{1/2} = L \sqrt{\frac{w}{r}} \Longrightarrow L^c = Q \sqrt{\frac{r}{w}}" />
          <BlockMath math="K^c = Q \sqrt{\frac{w}{r}}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با جایگذاری این تقاضاهای مشروط در رابطه هزینه کل، تابع هزینه به دست می‌آید:
          </p>
          <BlockMath math="C = w L^c + r K^c = w \left( Q \sqrt{\frac{r}{w}} \right) + r \left( Q \sqrt{\frac{w}{r}} \right) = 2 Q \sqrt{w \cdot r}" />

          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontWeight: 'bold', marginTop: '1.5rem' }}>
            بخش دوم: بازگشت به تابع تولید با لم شپارد
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            حال فرض کنید تنها تابع هزینه <InlineMath math="C = 2 Q \sqrt{w \cdot r}" /> را در دست داریم و می‌خواهیم تابع تولید را به دست آوریم. طبق لم شپارد:
          </p>
          <BlockMath math="L = \frac{\partial C}{\partial w} = Q \sqrt{\frac{r}{w}} \Longrightarrow \sqrt{\frac{r}{w}} = \frac{L}{Q}" />
          <BlockMath math="K = \frac{\partial C}{\partial r} = Q \sqrt{\frac{w}{r}} \Longrightarrow \sqrt{\frac{w}{r}} = \frac{K}{Q}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            با برعکس کردن رابطه دوم داریم <InlineMath math="\sqrt{\frac{r}{w}} = \frac{Q}{K}" />. حال دو عبارت معادل را مساوی هم قرار می‌دهیم:
          </p>
          <BlockMath math="\frac{L}{Q} = \frac{Q}{K} \Longrightarrow Q^2 = L \cdot K \Longrightarrow Q = L^{1/2} K^{1/2}" />
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            این فرآیند، صحت کامل دوگانگی رفت و برگشت میان فضای تولید و هزینه را اثبات می‌نماید.
          </p>
        </div>
      </div>

      {/* 6. Joint Production, PPF, CES */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Percent style={{ color: 'var(--primary)' }} />
          ۶. تولیدات مشترک، منحنی امکانات تولید (PPF) و تابع تولید CES
        </h2>

        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>۶.۱. محصولات مشترک و منحنی امکانات تولید</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          اگر بنگاه از یک عامل تولید مشترک <InlineMath math="X" />، دو محصول مختلف <InlineMath math="q_1" /> و <InlineMath math="q_2" /> تولید کند، فرآیند را با تابع مخارج نهاده مشترک نمایش می‌دهیم: <InlineMath math="X = h(q_1, q_2)" />. با فرض مقدار ثابت نهاده <InlineMath math="X = \bar{X}" />، منحنی امکانات تولید (PPF) به دست می‌آید. شیب آن نرخ نهایی تبدیل (<InlineMath math="MRT" />) است:
        </p>
        <div className="formula-box">
          <BlockMath math="MRT = -\frac{dq_2}{dq_1} = \frac{\partial h / \partial q_1}{\partial h / \partial q_2} = \frac{MC_1}{MC_2} = \frac{MP_{x2}}{MP_{x1}}" />
        </div>

        {/* PPF Diagrams */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/70-ppf.svg" alt="منحنی امکانات تولید" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۱۳: منحنی امکانات تولید (PPF) محدب نسبت به مبدأ
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/svg/72-isorevenue.svg" alt="خطوط هم‌درآمد" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
              شکل ۲.۱۴: تعادل حداکثرسازی درآمد بر روی منحنی PPF
            </p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          مسئله حداکثرسازی درآمد بنگاه با نهاده ثابت به صورت زیر مدل‌سازی می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="\max TR = P_1 q_1 + P_2 q_2 \quad \text{s.t.} \quad \bar{X} = h(q_1, q_2)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          شرط تعادل آن مماس شدن خط درآمد هم‌ارز (Isorevenue) بر منحنی PPF است:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{P_1}{P_2} = MRT = \frac{MC_1}{MC_2}" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۶.۲. تابع تولید CES (کشش جانشینی ثابت)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          تابع تولید CES فرم تعمیم‌یافته‌ای است که کشش جانشینی عوامل در آن ثابت فرض می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="Q = A \left[ \gamma K^{-\rho} + (1-\gamma) L^{-\rho} \right]^{-\frac{1}{\rho}}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          پارامترهای اساسی این تابع عبارتند از:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <li><InlineMath math="A > 0" />: پارامتر کارایی یا سطح فناوری</li>
          <li><InlineMath math="\gamma \in (0, 1)" />: پارامتر توزیع سهم سرمایه در تولید</li>
          <li><InlineMath math="\rho \ge -1" />: پارامتر جانشینی، به طوری که کشش جانشینی <InlineMath math="\sigma" /> به شکل زیر با آن رابطه دارد: <InlineMath math="\sigma = \frac{1}{1+\rho}" /></li>
        </ul>

        {/* CES Diagram */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/76-ces-isoquants.svg" alt="CES Isoquants" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۲.۱۵: اشکال مختلف منحنی‌های هم‌تولید تابع CES بر اساس کشش جانشینی</p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem' }}>حالت‌های خاص تابع تولید CES:</p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <strong>کاب-داگلاس (<InlineMath math="\rho \to 0" /> یا <InlineMath math="\sigma = 1" />):</strong> در این حالت کشش جانشینی برابر با یک است و فرم تابع به صورت <InlineMath math="Q = A K^{\gamma} L^{1-\gamma}" /> تبدیل می‌شود.
          </li>
          <li>
            <strong>لئونتیف یا مکمل کامل (<InlineMath math="\rho \to \infty" /> یا <InlineMath math="\sigma = 0" />):</strong> کشش جانشینی صفر بوده و فرم تابع به صورت <InlineMath math="Q = \min \{ \frac{K}{a}, \frac{L}{b} \}" /> در می‌آید.
          </li>
          <li>
            <strong>تابع تولید خطی یا جانشین کامل (<InlineMath math="\rho \to -1" /> یا <InlineMath math="\sigma \to \infty" />):</strong> کشش جانشینی بی‌نهایت بوده و نهاده‌ها جانشین کامل یکدیگرند: <InlineMath math="Q = a K + b L" />.
          </li>
        </ul>

        <div className="example-box" style={{ marginTop: '1.5rem' }}>
          <h4>مثال مهم: اثبات کشش جانشینی تابع کاب-داگلاس</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>مسئله:</strong> نشان دهید کشش جانشینی (<InlineMath math="\sigma" />) در تابع تولید کاب-داگلاس <InlineMath math="Q = A K^\alpha L^\beta" /> (با فرض بازدهی ثابت نسبت به مقیاس یعنی <InlineMath math="\alpha + \beta = 1" />) برابر با یک است.
          </p>
          <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '0.5rem' }}>مراحل اثبات تشریحی:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li>
              <strong>محاسبه نرخ نهایی جانشینی فنی (MRTS):</strong>
              <BlockMath math="MP_L = A \beta K^\alpha L^{\beta-1} \quad , \quad MP_K = A \alpha K^{\alpha-1} L^\beta" />
              <BlockMath math="MRTS_{L,K} = \frac{MP_L}{MP_K} = \frac{A \beta K^\alpha L^{\beta-1}}{A \alpha K^{\alpha-1} L^\beta} = \left(\frac{\beta}{\alpha}\right) \cdot \left(\frac{K}{L}\right)" />
            </li>
            <li>
              <strong>لگاریتم‌گیری از طرفین رابطه:</strong>
              <BlockMath math="\ln(MRTS_{L,K}) = \ln\left(\frac{\beta}{\alpha}\right) + \ln\left(\frac{K}{L}\right)" />
            </li>
            <li>
              <strong>مشتق‌گیری و محاسبه کشش جانشینی:</strong>
              دیفرانسیل‌گیری از طرفین منجر به رابطه زیر می‌شود:
              <BlockMath math="d\ln(MRTS_{L,K}) = d\ln\left(\frac{K}{L}\right)" />
              بنابراین طبق تعریف کشش جانشینی داریم:
              <BlockMath math="\sigma = \frac{d\ln(K/L)}{d\ln(MRTS_{L,K})} = 1" />
              که نشان می‌دهد کشش جانشینی در تابع کاب-داگلاس همواره ثابت و برابر با یک است (یک مورد خاص از تابع CES).
            </li>
          </ol>
        </div>
      </div>

      {/* 7. Summary Mirror Table */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Scale style={{ color: 'var(--primary)' }} />
          ۷. جدول خلاصه قانون آینه (تقارن تفصیلی مصرف‌کننده و تولیدکننده)
        </h2>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در جدول زیر، تقارن و قانون آینه میان تمامی مفاهیم اساسی نظریه رفتار مصرف‌کننده و تولیدکننده به صورت متناظر آورده شده است:
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-main)', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--card-border)', textAlign: 'right' }}>
                <th style={{ padding: '12px 8px', color: 'var(--primary)' }}>بعد مقایسه</th>
                <th style={{ padding: '12px 8px', color: 'var(--secondary)' }}>نظریه رفتار مصرف‌کننده</th>
                <th style={{ padding: '12px 8px', color: 'var(--primary)' }}>نظریه رفتار تولیدکننده</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>فضای بهینه‌سازی</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>سبد مصرفی کالاها: <InlineMath math="(x, y)" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>سبد نهاده‌های تولید: <InlineMath math="(L, K)" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>تابع هدف اصلی</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تابع مطلوبیت ترتیبی: <InlineMath math="U(x, y)" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تابع تولید شمارشی (کاردینال): <InlineMath math="Q(L, K)" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>محدودیت اصلی</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>درآمد مالی مصرف‌کننده (خط بودجه): <InlineMath math="I = x P_x + y P_y" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>هزینه تولید (خط هم‌هزینه): <InlineMath math="C = L P_L + K P_K" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>شاخص نهایی نهاده</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>مطلوبیت نهایی: <InlineMath math="MU_x" /> و <InlineMath math="MU_y" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تولید نهایی نهاده‌ها: <InlineMath math="MP_L" /> و <InlineMath math="MP_K" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>منحنی هم‌ارز هدف</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>منحنی بی‌تفاوتی (Indifference Curve)</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>منحنی هم‌تولید (Isoquant)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>شیب منحنی هدف</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>نرخ نهایی جانشینی: <InlineMath math="MRS_{xy}" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>نرخ نهایی جانشینی فنی: <InlineMath math="MRTS_{L,K}" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>شرط تعادل (FOC)</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}><InlineMath math="MRS_{xy} = \frac{P_x}{P_y}" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}><InlineMath math="MRTS_{L,K} = \frac{P_L}{P_K}" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>مسئله مستقیم (Primal)</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>حداکثرسازی مطلوبیت (UMP)</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>حداکثرسازی تولید با هزینه مشخص</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>مسئله معکوس (Dual)</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>حداقل‌سازی مخارج (EMP)</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>حداقل‌سازی هزینه با تولید مشخص</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>ضریب لاگرانژ مستقیم</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>مطلوبیت نهایی درآمد: <InlineMath math="\lambda = \frac{\partial U}{\partial I}" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تولید نهایی بودجه: <InlineMath math="\lambda = \frac{\partial Q}{\partial C}" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>ضریب لاگرانژ معکوس</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>هزینه نهایی کسب مطلوبیت: <InlineMath math="\mu = \frac{\partial E}{\partial U}" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>هزینه نهایی تولید: <InlineMath math="\mu = MC" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>تقاضای مستقیم</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تقاضای مارشالی: <InlineMath math="x^m(P_x, P_y, I)" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تقاضای نهاده بدون قید سود: <InlineMath math="L^*(P_L, P_K, P)" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>تقاضای معکوس/مشروط</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تقاضای هیکسی: <InlineMath math="x^h(P_x, P_y, U)" /></td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>تقاضای مشروط (هیکسی): <InlineMath math="L^c(P_L, P_K, Q)" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>لم‌های استخراج تقاضا</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>هویت روی و لم شپارد</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>لم شپارد: <InlineMath math="L^c = \frac{\partial C}{\partial P_L}" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>مسیر حرکت تعادل</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>منحنی‌های ICC و PCC</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>مسیر توسعه بنگاه (Expansion Path)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>پدیده انتقال کالا/عامل</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>اثر جانشینی و درآمدی (اسلاتسکی)</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>اثر جانشینی و خروجی (اصل لوشاتلیه)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Step2;
