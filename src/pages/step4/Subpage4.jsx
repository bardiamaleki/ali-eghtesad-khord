import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { ArrowLeftRight, Shield, Landmark } from 'lucide-react';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <ArrowLeftRight style={{ color: 'var(--primary)' }} />
        ۴. انحصار دوجانبه (Bilateral Monopoly) و چانه‌زنی
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        زمانی که در یک بازار تنها با <strong>یک فروشنده انحصاری (Monopolist)</strong> در مقابل <strong>یک خریدار انحصاری (Monopsonist)</strong> روبرو هستیم، ساختار بازار را <strong>انحصار دوجانبه</strong> می‌گویند. در این بازار دیگر منحنی‌های عرضه و تقاضای مستقلی وجود ندارند که نقطه تعادل را تعیین کنند، بلکه چانه‌زنی و قدرت استراتژیک طرفین تعیین‌کننده قیمت خواهد بود.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Landmark size={20} />
        ۱. مدل پایه و فرضیات ریاضی (صفحه ۱۲۰ جزوه)
      </h3>
      <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        <li>فروشنده انحصاری، کالای واسطه‌ای به نام <InlineMath math="q_2" /> تولید می‌کند.</li>
        <li>خریدار انحصاری از این کالا به عنوان نهاده تولید استفاده کرده و محصول نهایی <InlineMath math="q_1 = h(q_2)" /> را تولید می‌کند.</li>
        <li>خریدار محصول نهایی خود را در بازار رقابت کامل با قیمت ثابت <InlineMath math="P_1" /> می‌فروشد. سود خریدار:
          <BlockMath math="\pi_B = P_1 \cdot h(q_2) - P_2 \cdot q_2" />
        </li>
        <li>فروشنده نیز نهاده تولیدی خود (<InlineMath math="x" />) را با قیمت ثابت <InlineMath math="r" /> از بازار رقابتی تهیه می‌کند. تابع تولید معکوس او <InlineMath math="x = H(q_2)" /> است. سود فروشنده:
          <BlockMath math="\pi_S = P_2 \cdot q_2 - r \cdot H(q_2)" />
        </li>
      </ul>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Shield size={20} />
        ۲. سه راه حل مرجع (Reference Solutions)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بسته به اینکه کدام طرف مسلط بر بازار باشد، سه سناریوی مختلف شکل می‌گیرد (صفحات ۱۲۱-۱۲۵ جزوه):
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>الف) انحصار فروش (فروشنده مسلط)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
            فروشنده قیمت تعیین می‌کند و خریدار پیرو است.
            <br />
            خریدار با حداکثر کردن سود خود، قیمت را معادل ارزش تولید نهایی قرار می‌دهد (منحنی تقاضای نهاده خریدار):
            <BlockMath math="P_2 = P_1 h'(q_2)" />
            فروشنده با جاگذاری این قیمت در سود خود، مقدار تولید را بهینه‌سازی می‌کند:
            <BlockMath math="\max \pi_S = [P_1 h'(q_2)]q_2 - r H(q_2) \implies MR = MC" />
            <BlockMath math="\implies P_1 h'(q_2) + P_1 h''(q_2) q_2 = r H'(q_2)" />
            این تعادل قیمت بالا و مقدار پایینی دارد (نقطه S).
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>ب) انحصار خرید (خریدار مسلط)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
            خریدار قیمت تعیین می‌کند و فروشنده پیرو است.
            <br />
            فروشنده قیمت را معادل هزینه نهایی خود قرار می‌دهد (منحنی عرضه نهاده فروشنده):
            <BlockMath math="P_2 = r H'(q_2)" />
            خریدار با جاگذاری قیمت در سود خود، خرید را بهینه می‌کند:
            <BlockMath math="\max \pi_B = P_1 h(q_2) - [r H'(q_2)]q_2 \implies VMP = MFC" />
            <BlockMath math="\implies P_1 h'(q_2) = r H'(q_2) + r H''(q_2) q_2" />
            این تعادل قیمت بسیار پایین و دستمزد ناچیزی دارد (نقطه B).
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>ج) راه حل شبه‌رقابتی (Price-Taker)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
            هر دو طرف قیمت‌پذیر فرض می‌شوند. قیمت و مقدار در تقاطع ارزش تولید نهایی خریدار و هزینه نهایی فروشنده تعیین می‌شود (نقطه C):
            <BlockMath math="P_2 = P_1 h'(q_2) = r H'(q_2) \implies VMP = MC" />
            همواره مقدار تولید شبه‌رقابتی بزرگتر از مقدار انحصار خرید و انحصار فروش است:
            <BlockMath math="q_{2C} > q_{2S} \quad , \quad q_{2C} > q_{2B}" />
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/125-bilateral-monopoly.svg" alt="نمودار تعادل انحصار دوجانبه" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          نقطه S (تعادل انحصار فروش)، نقطه B (تعادل انحصار خرید) و نقطه C (تعادل شبه‌رقابتی)؛ مقدار تعادلی رقابتی همواره بزرگترین است.
        </p>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ArrowLeftRight size={20} />
        ۳. راه حل چانه‌زنی و بازه قیمتی توافق (Bargaining)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        از آنجا که هر یک از حالت‌های انحصار خرید یا فروش سود یکی از طرفین را به شدت کاهش می‌دهد، در دنیای واقعی طرفین معمولاً بر سر <strong>ادغام یا تبانی</strong> سازش می‌کنند. در این حالت سودهای خود را جمع کرده و یک کارتل یکپارچه تشکیل می‌دهند (صفحه ۱۲۶ جزوه):
      </p>

      <div className="formula-box">
        <p style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.5rem' }}>سود کل صنعت:</p>
        <BlockMath math="\pi_T = \pi_B + \pi_S = P_1 h(q_2) - r H(q_2)" />
        <p style={{ color: 'var(--text-main)', textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>شرط حداکثرسازی سود کل:</p>
        <BlockMath math="\frac{\partial \pi_T}{\partial q_2} = 0 \implies P_1 h'(q_2) - r H'(q_2) = 0 \implies VMP = MC" />
      </div>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginTop: "1rem" }}>
        مشاهده می‌شود که بهینه‌سازی مشترک، دقیقاً به <strong>مقدار تولید شبه‌رقابتی (<InlineMath math="q_{2C}" />)</strong> منجر می‌شود؛ یعنی در تبانی، کارایی تخصیصی جامعه به حداکثر می‌رسد. با این حال، قیمت انتقالی نهاده (<InlineMath math="P_2" />) نامعین مانده و باید از طریق چانه‌زنی تعیین شود.
      </p>

      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)', marginTop: '1.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>بازه قیمت مورد توافق در چانه‌زنی:</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          قیمت توافقی باید به گونه‌ای باشد که سود هر دو طرف صفر یا مثبت باشد (هیچ‌کس حاضر به تحمل ضرر نیست):
          <br />
          - حد پایین قیمت (کف مورد قبول فروشنده برای سود صفر): <InlineMath math="\pi_S = 0 \implies P_2 = \frac{r H(q_2)}{q_2}" /> (میانگین هزینه تولید).
          <br />
          - حد بالای قیمت (سقف مورد قبول خریدار برای سود صفر): <InlineMath math="\pi_B = 0 \implies P_2 = \frac{P_1 h(q_2)}{q_2}" /> (متوسط ارزش درآمدی).
          <br /><br />
          بنابراین، بازه نهایی قیمت توافقی چانه‌زنی به صورت زیر خواهد بود:
          <BlockMath math="\frac{r H(q_2)}{q_2} \le P_2 \le \frac{P_1 h(q_2)}{q_2}" />
          قیمت نهایی توافق، در درون این بازه و بر اساس قدرت چانه‌زنی، هنر مذاکره و گزینه‌های خارجی طرفین تعیین خواهد شد.
        </p>
      </div>

    </div>
  );
};

export default Subpage4;
