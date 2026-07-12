import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Store, AlignLeft, Layers, HelpCircle } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Store style={{ color: 'var(--primary)' }} />
        ۱. بازار رقابت انحصاری (مدل چمبرلین)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بازار رقابت انحصاری شبیه‌ساز ویژگی‌های هر دو بازار رقابت کامل و انحصار کامل است. در این بازار تعداد تولیدکنندگان به اندازه کافی زیاد است (گروه تولیدکنندگان)، به طوری که فعالیت یک فروشنده تأثیر مستقیمی بر بقیه ندارد؛ اما به علت **تمایز محصولات**، هر بنگاه با منحنی تقاضای نزولی مخصوص به خود مواجه است.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <AlignLeft size={20} />
        ۱. دو نوع منحنی تقاضا (تقاضای مورد انتظار و موثر)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در این بازار با دو نوع منحنی تقاضای متمایز روبرو هستیم (صفحات ۱۰۳-۱۰۴ جزوه):
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تقاضای مورد انتظار یا صوری (dd)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            منحنی تقاضای تصوری بنگاه با این فرض که با کاهش قیمت خود می‌تواند سهم بازار سایرین را جذب کند بدون اینکه رقبا عکس‌العملی نشان دهند (قیمت سایرین ثابت فرض می‌شود). این منحنی بسیار باکشش‌تر و مسطح‌تر است:
            <BlockMath math="P_k = A_k - a_k \cdot q_k - \sum_{i \neq k} b_{ki} \bar{q}_i" />
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تقاضای واقعی یا موثر (DD)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            منحنی تقاضای واقعی متناسب با سهم بازار. اگر یک بنگاه برای جذب مشتری قیمت را کاهش دهد، سایر رقبا نیز برای حفظ مشتریان خود قیمت‌ها را کاهش می‌دهند. با فرض تقارن و تشابه رفتار تمام بنگاه‌ها (<InlineMath math="q_i = q_k" />)، منحنی DD پرشیب‌تر است:
            <BlockMath math="P_k = A - [a + (n-1)b] q_k" />
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
        <img src="/svg/103-nemodar.svg" alt="نمودار تقاضای موثر و صوری" style={{ maxWidth: '100%', maxHeight: '250px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>تقاطع منحنی تقاضای صوری (dd) و تقاضای موثر بازار (DD)</p>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Layers size={20} />
        ۲. تعادل کوتاه مدت و بلند مدت
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        نحوه تصمیم‌گیری و بهینه‌سازی بنگاه در افق‌های زمانی مختلف متفاوت است:
      </p>
      
      <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        <li><strong>تعادل کوتاه‌مدت:</strong> بنگاه بر اساس منحنی تقاضای مورد انتظار (<InlineMath math="dd" />) خود تصمیم می‌گیرد، زیرا تصور می‌کند تغییر قیمت او توسط رقبا رصد نمی‌شود. بنابراین سود خود را با شرط <InlineMath math="MR_{dd} = MC" /> به حداکثر می‌رساند.</li>
        <li><strong>تعادل بلندمدت:</strong> ورود و خروج آزادانه بنگاه‌ها سود اقتصادی را صفر می‌کند. در نقطه تعادل نهایی، منحنی تقاضای صوری (<InlineMath math="dd" />) بر منحنی هزینه متوسط بلندمدت (<InlineMath math="LAC" />) مماس می‌شود (<InlineMath math="P = LAC" /> و <InlineMath math="MR_{dd} = LMC" />) و همزمان تقاضای صوری و موثر متقاطع هستند (<InlineMath math="P_{dd} = P_{DD}" />).</li>
      </ul>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>
        <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
          <img src="/svg/105-nemodar1.svg" alt="تعادل کوتاه‌مدت" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>تعادل کوتاه مدت با شرط MR = MC روی تقاضای dd</p>
        </div>
        <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
          <img src="/svg/105-nemodar2.svg" alt="تعادل بلندمدت" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>تعادل بلندمدت با مماس شدن dd بر منحنی LAC</p>
        </div>
      </div>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <HelpCircle size={18} />
          حل تشریحی مثال تعادل ۱۰۱ بنگاه (صفحه ۱۰۶ جزوه):
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در یک گروه تولیدی ۱۰۱ بنگاه همسان وجود دارند. تابع تقاضای معکوس بنگاه <InlineMath math="i" /> و تابع هزینه کل آن عبارت است از:
          <BlockMath math="P_i = 150 - q_i - 0.02 \sum_{j \neq i}^{101} q_j" />
          <BlockMath math="C_i = 0.5 q_i^3 - 20 q_i^2 + 270 q_i" />
          می‌خواهیم قیمت، مقدار و سود تعادلی هر بنگاه را پیدا کنیم.
          <br /><br />
          <strong>گام اول: استخراج تقاضای صوری و درآمد نهایی</strong>
          <br />
          بنگاه فرض می‌کند تولید سایر بنگاه‌ها (<InlineMath math="\sum_{j \neq i} q_j" />) در اثر تصمیمات او تغییر نمی‌کند. بنابراین، شیب تقاضای صوری او برابر با <InlineMath math="-1" /> است. درآمد نهایی صوری (<InlineMath math="MR_i" />) با دو برابر کردن شیب به دست می‌آید:
          <BlockMath math="MR_i = 150 - 2 q_i - 0.02 \sum_{j \neq i}^{101} q_j" />
          <strong>گام دوم: اعمال فرض تقارن تعادلی</strong>
          <br />
          در نقطه تعادل، رفتار همه بنگاه‌ها یکسان است، یعنی <InlineMath math="q_j = q_i" /> برای همه رقبا. از آنجا که ۱۰۰ بنگاه دیگر وجود دارد:
          <BlockMath math="MR_i = 150 - 2 q_i - 0.02 (100 q_i) = 150 - 4 q_i" />
          <strong>گام سوم: مساوی قرار دادن هزینه نهایی و درآمد نهایی</strong>
          <br />
          تابع هزینه نهایی (MC) با مشتق‌گیری از تابع هزینه به دست می‌آید:
          <BlockMath math="MC_i = 1.5 q_i^2 - 40 q_i + 270" />
          شرط تعادل:
          <BlockMath math="MR_i = MC_i \implies 150 - 4 q_i = 1.5 q_i^2 - 40 q_i + 270" />
          <BlockMath math="1.5 q_i^2 - 36 q_i + 120 = 0 \quad \xrightarrow{\div 1.5} \quad q_i^2 - 24 q_i + 80 = 0" />
          با تجزیه عبارت درجه دو:
          <BlockMath math="(q_i - 20)(q_i - 4) = 0 \implies q_i = 20 \quad (\text{مقدار تولید تعادلی})" />
          <strong>گام چهارم: محاسبه قیمت و سود تعادلی</strong>
          <br />
          قیمت تعادلی بازار با قرار دادن مقدار در تابع تقاضا به دست می‌آید:
          <BlockMath math="P_i = 150 - 20 - 0.02 (100 \times 20) = 130 - 40 = 90" />
          هزینه کل برای مقدار تولید ۲۰ واحد:
          <BlockMath math="C_i(20) = 0.5(8000) - 20(400) + 270(20) = 4000 - 8000 + 5400 = 1400" />
          درآمد کل:
          <BlockMath math="TR_i(20) = P_i \cdot q_i = 90 \times 20 = 1800" />
          سود نهایی هر بنگاه:
          <BlockMath math="\pi_i = TR_i - C_i = 1800 - 1400 = 400" />
        </p>
      </div>

    </div>
  );
};

export default Subpage1;
