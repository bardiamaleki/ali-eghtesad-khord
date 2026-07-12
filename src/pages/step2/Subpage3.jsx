import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Calculator, LineChart, RefreshCw, Layers, Lightbulb, HelpCircle } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Calculator style={{ color: 'var(--primary)' }} />
        نظریه هزینه، دوگانگی و لم شپارد
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        توابع هزینه، بازتابی کامل از توابع تولید هستند. هر ویژگی ریاضی یا فیزیکی که تابع تولید داشته باشد، بازخورد معکوس آن در تابع هزینه بنگاه دیده می‌شود. به این تساوی و ارتباط متقابل، <strong>دوگانگی در تولید (Duality in Production)</strong> می‌گویند.
      </p>

      {/* Duality Concept Box */}
      <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.03)', borderRight: '4px solid var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <HelpCircle size={18} />
          شهود مفهوم دوگانگی:
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          تابع هزینه و تابع تولید در حقیقت یک سکه با دو رو هستند. تابع تولید به ما می‌گوید با مقادیر مشخص نهاده حداکثر چقدر می‌توان تولید کرد (فضای فیزیکی)، و تابع هزینه به ما می‌گوید برای تولید مقدار مشخصی محصول حداقل چقدر باید هزینه کرد (فضای پولی). پاسخ‌های بهینه هر دو روش کاملاً بر هم منطبق هستند.
        </p>
      </div>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <LineChart size={20} />
        ۱. رابطه عکس ریاضی توابع تولید و هزینه
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در کوتاه‌مدت، به دلیل وجود بازده نزولی در بهره‌وری کارگر، هزینه‌های متوسط و نهایی صعودی می‌شوند. این رابطه عکس به وضوح در معادلات زیر اثبات می‌شود:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>هزینه متغیر متوسط (AVC) و بهره‌وری متوسط (AP)</h4>
          <BlockMath math="AVC = \frac{TVC}{Q} = \frac{w \cdot L}{Q} = \frac{w}{Q/L} \implies AVC = \frac{w}{AP_L}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
            نتیجه: زمانی که بهره‌وری متوسط نیروی کار (<InlineMath math="AP_L" />) به حداکثر خود می‌رسد، هزینه متغیر متوسط (<InlineMath math="AVC" />) در حداقل مقدار خود قرار دارد.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>هزینه نهایی (MC) و بهره‌وری نهایی (MP)</h4>
          <BlockMath math="MC = \frac{\partial TVC}{\partial Q} = w \cdot \frac{\partial L}{\partial Q} \implies MC = \frac{w}{MP_L}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
            نتیجه: زمانی که بهره‌وری نهایی کارگر (<InlineMath math="MP_L" />) ماکزیمم می‌شود، هزینه نهایی (<InlineMath math="MC" />) در کمینه خود قرار دارد.
          </p>
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <RefreshCw size={20} />
        ۲. استخراج تابع هزینه از تابع تولید (مسیر توسعه)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برای حرکت از تابع تولید فیزیکی به تابع هزینه، از رابطه <strong>مسیر توسعه بنگاه (Expansion Path)</strong> استفاده می‌کنیم که نقاط تعادل بهینه مماس را به هم متصل می‌کند:
      </p>

      <div className="example-box" style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Lightbulb size={18} />
          مثال خط‌به‌خط: استخراج هزینه از کاب-داگلاس ساده
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع تولید به صورت <InlineMath math="q = x_1^{0.5} x_2^{0.5}" /> باشد.
        </p>
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>گام ۱. استخراج مسیر توسعه:</strong> نرخ نهایی جانشینی فنی را با نسبت قیمت‌ها برابر قرار می‌دهیم:
            <BlockMath math="\frac{MP_{X_1}}{MP_{X_2}} = \frac{r_1}{r_2} \Rightarrow \frac{x_2}{x_1} = \frac{r_1}{r_2} \Rightarrow x_2 = \frac{r_1}{r_2} x_1" />
          </li>
          <li>
            <strong>گام ۲. استخراج تقاضای عوامل تولید:</strong> رابطه بالا را در تابع تولید قید قرار می‌دهیم:
            <BlockMath math="q = x_1^{0.5} \left( \frac{r_1}{r_2} x_1 \right)^{0.5} = x_1 \sqrt{\frac{r_1}{r_2}} \implies x_1^* = q \sqrt{\frac{r_2}{r_1}}" />
            به طور قرینه برای نهاده دوم داریم: <InlineMath math="x_2^* = q \sqrt{\frac{r_1}{r_2}}" />.
          </li>
          <li>
            <strong>گام ۳. تشکیل تابع هزینه کل:</strong> مقادیر بهینه را در رابطه هزینه قرار می‌دهیم:
            <BlockMath math="TC = r_1 x_1^* + r_2 x_2^* = r_1 q \sqrt{\frac{r_2}{r_1}} + r_2 q \sqrt{\frac{r_1}{r_2}} = 2 q \sqrt{r_1 r_2}" />
          </li>
        </ol>
      </div>

      {/* CES Duality example */}
      <div className="example-box" style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Lightbulb size={18} />
          مثال پیشرفته: استخراج تابع هزینه برای تابع تولید CES (صفحه ۷۶ جزوه)
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع تولید به صورت <InlineMath math="Q = \left[ 0.5 L^{-1} + 0.5 K^{-1} \right]^{-1}" /> باشد. قیمت نهاده‌ها <InlineMath math="w" /> و <InlineMath math="r" /> است:
        </p>
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>گام ۱. محاسبه بهره‌وری نهایی و شیب:</strong>
            <BlockMath math="MRTS = \frac{MP_L}{MP_K} = \left( \frac{K}{L} \right)^2 = \frac{w}{r} \implies K = L \sqrt{\frac{w}{r}}" />
          </li>
          <li>
            <strong>گام ۲. قرار دادن در تابع تولید برای استخراج تقاضای شرطی:</strong>
            <BlockMath math="L^* = 0.5 Q \left( \frac{\sqrt{w} + \sqrt{r}}{\sqrt{w}} \right) \quad , \quad K^* = 0.5 Q \left( \frac{\sqrt{w} + \sqrt{r}}{\sqrt{r}} \right)" />
          </li>
          <li>
            <strong>گام ۳. ساده‌سازی و تشکیل هزینه کل (TC):</strong>
            <BlockMath math="TC = w L^* + r K^* = 0.5 Q (\sqrt{w} + \sqrt{r})^2" />
          </li>
        </ol>
      </div>

      <div className="image-showcase">
        <img src="/svg/66-expansion-path.svg" alt="مسیر توسعه بنگاه" />
        <div className="image-showcase-caption">مسیر توسعه بنگاه حاصل اتصال نقاط بهینه تماس در مقیاس‌های مختلف تولید است.</div>
      </div>

      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Layers size={20} />
        ۳. استخراج تابع تولید از تابع هزینه (لم شپارد)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        با استفاده از <strong>لم شپارد (Shephard's Lemma)</strong>، فرآیند برگشت نیز امکان‌پذیر است. مشتق جزئی تابع حداقل هزینه نسبت به قیمت هر عامل، تقاضای جبرانی آن را می‌دهد:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--success)', marginBottom: '2rem' }}>
        <BlockMath math="\frac{\partial TC(r_1, r_2, q)}{\partial r_1} = x_1^* \quad , \quad \frac{\partial TC(r_1, r_2, q)}{\partial r_2} = x_2^*" />
      </div>

      <div className="example-box">
        <h4 style={{ color: 'var(--success)', marginBottom: '1rem' }}>گام‌های معکوس کردن تابع هزینه و بازیابی تابع تولید:</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع هزینه به دست آمده <InlineMath math="TC = 2 q \sqrt{r_1 r_2}" /> است:
        </p>
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>گام ۱. مشتق‌گیری (لم شپارد):</strong>
            <BlockMath math="x_1 = \frac{\partial TC}{\partial r_1} = q \sqrt{\frac{r_2}{r_1}} \quad , \quad x_2 = \frac{\partial TC}{\partial r_2} = q \sqrt{\frac{r_1}{r_2}}" />
          </li>
          <li>
            <strong>گام ۲. استخراج نسبت قیمت‌ها:</strong>
            <BlockMath math="\frac{r_1}{r_2} = \left( \frac{q}{x_1} \right)^2 \quad , \quad \frac{r_1}{r_2} = \left( \frac{x_2}{q} \right)^2" />
          </li>
          <li>
            <strong>گام ۳. حذف قیمت‌ها و بازیابی رابطه فیزیکی تولید:</strong>
            <BlockMath math="\left( \frac{q}{x_1} \right)^2 = \left( \frac{x_2}{q} \right)^2 \implies \frac{q^2}{x_1^2} = \frac{x_2^2}{q^2} \implies q^4 = x_1^2 x_2^2 \implies q = x_1^{0.5} x_2^{0.5}" />
          </li>
        </ol>
        <p style={{ color: 'var(--success)', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
          به این ترتیب با موفقیت کامل و گام‌به‌گام به تابع تولید کاب-داگلاس اولیه بازگشتیم.
        </p>
      </div>

    </div>
  );
};

export default Subpage3;
