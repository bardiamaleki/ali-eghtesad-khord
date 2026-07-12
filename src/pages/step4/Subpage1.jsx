import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Store, AlignLeft, Layers, HelpCircle, Lightbulb } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Store style={{ color: 'var(--primary)' }} />
        ۱. بازار رقابت انحصاری (مدل چمبرلین)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        بازار رقابت انحصاری (Monopolistic Competition) پیونددهنده ویژگی‌های رقابت کامل و انحصار کامل است. در این بازار، تعداد تولیدکنندگان به قدری زیاد است که تصمیمات فردی یک بنگاه تأثیر مستقیمی بر رفتار رقبایش ندارد. اما به دلیل <strong>تمایز محصولات (Product Differentiation)</strong>، هر بنگاه با یک منحنی تقاضای نزولی مواجه بوده و مقداری قدرت انحصاری روی محصول خود دارد.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <AlignLeft size={20} />
        ۱. دو نوع منحنی تقاضا (تقاضای تصوری و واقعی)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        ادوارد چمبرلین در مدل‌سازی خود نشان داد که بنگاه‌ها با دو نوع منحنی تقاضای متمایز روبرو هستند:
      </p>

      {/* Conceptual Explanation Box */}
      <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.03)', borderRight: '4px solid var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Lightbulb size={18} />
          تفاوت شهودی تقاضای صوری (dd) و واقعی (DD):
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          منحنی <strong>dd (صوری)</strong> زمانی معتبر است که بنگاه تصور کند فقط خودش قیمت را کاهش می‌دهد و بقیه بنگاه‌ها قیمت را ثابت نگه می‌دارند (کشش بالا). اما در واقعیت، وقتی قیمت یک کالا کاهش می‌یابد بقیه بنگاه‌ها نیز برای حفظ مشتری قیمت را کم می‌کنند، بنابراین سهم واقعی افزایش تقاضا کمتر شده و روی منحنی <strong>DD (واقعی)</strong> حرکت می‌کنیم که به مراتب شیب بیشتری دارد.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontWeight: 'bold' }}>تقاضای مورد انتظار یا صوری (dd):</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            بنگاه با این فرض که سایر رقبا تغییری در قیمت خود ایجاد نمی‌کنند، این منحنی بسیار باکشش و مسطح را پیش‌بینی می‌کند:
            <BlockMath math="P_k = A_k - a_k \cdot q_k - \sum_{i \neq k} b_{ki} \bar{q}_i" />
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', fontWeight: 'bold' }}>تقاضای واقعی یا موثر (DD):</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            اگر تمامی بنگاه‌ها به طور همزمان و متقارن قیمت خود را کاهش دهند (<InlineMath math="q_i = q_k" />)، سهم هر بنگاه از تقاضای کل بازار طبق این منحنی با شیب تندتر تعیین می‌شود:
            <BlockMath math="P_k = A - [a + (n-1)b] q_k" />
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/103-nemodar.svg" alt="نمودار تقاضای موثر و صوری چمبرلین" style={{ maxWidth: '100%', maxHeight: '250px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>ملاقات منحنی تقاضای تصوری (dd) و واقعی (DD) در قیمت تعادلی</p>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Layers size={20} />
        ۲. تعادل کوتاه‌مدت و بلندمدت در رقابت انحصاری
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h5 style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>الف) تعادل کوتاه‌مدت:</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
            بنگاه بر اساس منحنی تقاضای تصوری (<InlineMath math="dd" />) خود تصمیم به تولید می‌گیرد و نقطه بهینه را با شرط <InlineMath math="MR_{dd} = MC" /> پیدا می‌کند.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--secondary)' }}>
          <h5 style={{ color: 'var(--secondary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>ب) تعادل بلندمدت (سود صفر):</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
            به دلیل ورود آزادانه بنگاه‌های جدید، سود اقتصادی در بلندمدت به صفر می‌رسد. در نقطه تعادل نهایی، منحنی تقاضای صوری (<InlineMath math="dd" />) بر منحنی هزینه متوسط بلندمدت (<InlineMath math="LAC" />) مماس می‌شود (<InlineMath math="P = LAC" /> و <InlineMath math="MR_{dd} = LMC" />) و همزمان تقاضای صوری و موثر متقاطع هستند (<InlineMath math="P_{dd} = P_{DD}" />).
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', margin: '2rem 0' }}>
        <div className="glass-panel" style={{ padding: '1rem', flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img src="/svg/105-nemodar1.svg" alt="تعادل کوتاه‌مدت رقابت انحصاری" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>تعادل کوتاه مدت با شرط MR = MC روی تقاضای dd</p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img src="/svg/105-nemodar2.svg" alt="تعادل بلندمدت رقابت انحصاری" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>تعادل بلندمدت با مماس شدن dd بر منحنی LAC</p>
        </div>
      </div>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <HelpCircle size={20} />
          حل تشریحی مثال تعادل ۱۰۱ بنگاه (صفحه ۱۰۶ جزوه):
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در یک گروه تولیدی ۱۰۱ بنگاه همسان وجود دارند. تابع تقاضای معکوس بنگاه <InlineMath math="i" /> و تابع هزینه کل آن عبارت است از:
          <BlockMath math="P_i = 150 - q_i - 0.02 \sum_{j \neq i}^{101} q_j" />
          <BlockMath math="C_i = 0.5 q_i^3 - 20 q_i^2 + 270 q_i" />
          می‌خواهیم قیمت، مقدار و سود تعادلی هر بنگاه را پیدا کنیم.
        </p>

        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>گام ۱. استخراج تقاضای صوری و درآمد نهایی:</strong>
            <br />
            بنگاه فرض می‌کند تولید بقیه ثابت است. بنابراین، شیب تقاضای صوری او برابر با <InlineMath math="-1" /> است. درآمد نهایی صوری (<InlineMath math="MR_i" />) با دو برابر کردن شیب به دست می‌آید:
            <BlockMath math="MR_i = 150 - 2 q_i - 0.02 \sum_{j \neq i}^{101} q_j" />
          </li>
          <li>
            <strong>گام ۲. اعمال فرض تقارن تعادلی:</strong>
            <br />
            در تعادل، رفتار همه بنگاه‌ها یکسان است، یعنی <InlineMath math="q_j = q_i" /> برای ۱۰۰ رقیب دیگر:
            <BlockMath math="MR_i = 150 - 2 q_i - 0.02 (100 q_i) = 150 - 4 q_i" />
          </li>
          <li>
            <strong>گام ۳. حل معادله تعادل MC = MR:</strong>
            <br />
            هزینه نهایی (MC) حاصل مشتق هزینه کل است:
            <BlockMath math="MC_i = 1.5 q_i^2 - 40 q_i + 270" />
            شرط تعادل:
            <BlockMath math="150 - 4 q_i = 1.5 q_i^2 - 40 q_i + 270 \implies 1.5 q_i^2 - 36 q_i + 120 = 0" />
            <BlockMath math="q_i^2 - 24 q_i + 80 = 0 \implies (q_i - 20)(q_i - 4) = 0" />
            جواب اقتصادی تعادلی برابر است با <InlineMath math="q_i^* = 20" /> واحد.
          </li>
          <li>
            <strong>گام ۴. محاسبه قیمت و سود نهایی:</strong>
            <br />
            قیمت تعادلی: <InlineMath math="P_i^* = 150 - 20 - 0.02(100 \times 20) = 90" /> واحد.
            <br />
            هزینه کل تولید: <InlineMath math="C_i(20) = 0.5(8000) - 20(400) + 270(20) = 1400" /> واحد.
            <br />
            درآمد کل: <InlineMath math="TR_i = 90 \times 20 = 1800" /> واحد.
            <br />
            سود نهایی هر بنگاه: <InlineMath math="\pi_i = 1800 - 1400 = 400" /> واحد.
          </li>
        </ol>
      </div>

    </div>
  );
};

export default Subpage1;
