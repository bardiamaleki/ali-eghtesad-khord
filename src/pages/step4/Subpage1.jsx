import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { ArrowLeftRight, CheckCircle2, XCircle, Handshake } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <ArrowLeftRight style={{ color: 'var(--primary)' }} />
        انحصار دوجانبه (Bilateral Monopoly) و مباحث تکمیلی
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        زمانی که در یک بازار، یک <strong>فروشنده انحصاری (Monopolist)</strong> در مقابل یک <strong>خریدار انحصاری (Monopsonist)</strong> قرار می‌گیرد، ساختار بازار را <strong>انحصار دوجانبه</strong> می‌گویند. در این وضعیت، دیگر منحنی عرضه و تقاضای مستقلی وجود ندارد که نقطه تعادل را تعیین کند، بلکه قدرت چانه‌زنی طرفین تعیین‌کننده قیمت و مقدار خواهد بود.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CheckCircle2 size={20} />
        ۱. فرض‌های مدل پایه انحصار دوجانبه
      </h3>
      <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
        <li>فروشنده انحصاری یک نهاده (مثل یک قطعه خاص صنعتی) تولید می‌کند.</li>
        <li>تنها یک خریدار برای آن قطعه وجود دارد. خریدار این قطعه را به عنوان عامل تولید برای محصول نهایی خودش (<InlineMath math="q_1" />) استفاده می‌کند.</li>
        <li>کالای نهاییِ خریدار در یک بازار رقابتی و با قیمت ثابت <InlineMath math="P_1" /> فروخته می‌شود.</li>
        <li>نهاده‌های مورد نیاز فروشنده انحصاری هم در بازارهای رقابتی با قیمت ثابت تأمین می‌شوند.</li>
      </ul>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <XCircle size={20} />
        ۲. راه حل‌های مرجع در انحصار دوجانبه
      </h3>
      
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برای پیش‌بینی رفتار طرفین، سه راه حل (سناریو) ممکن بررسی می‌شود:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>الف) انحصار فروش (فروشنده رهبر)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            فروشنده بر بازار مسلط است. او با در نظر گرفتن عکس‌العمل خریدار، سود خود را حداکثر می‌کند. در این حالت قیمت بالا و مقدار محدود می‌شود. شرط تعادل:
          </p>
          <BlockMath math="MR_S = MC_S" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>ب) انحصار خرید (خریدار رهبر)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            خریدار مسلط است. او عکس‌العمل فروشنده را در نظر گرفته و سود خود را حداکثر می‌سازد. در این حالت قیمت نهاده پایین و به نفع خریدار است. شرط تعادل:
          </p>
          <BlockMath math="VMP_B = MFC_B" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>ج) راه حل شبه‌رقابتی</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            هر دو طرف قیمت‌پذیر فرض می‌شوند و قدرتی برای تغییر قیمت ندارند. نقطه تعادل جایی است که تمایل به پرداخت با هزینه نهایی برابر می‌شود. شرط تعادل:
          </p>
          <BlockMath math="VMP = MC_S" />
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderColor: 'var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>مقایسه نتایج سه راه حل:</h4>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <li>
            <strong>مقدار تولید:</strong> مقدار در راه حل شبه‌رقابتی <strong>بیشتر</strong> از دو حالت دیگر است (<InlineMath math="q_C > q_S \text{ و } q_B" />).
          </li>
          <li>
            <strong>قیمت تعادلی:</strong> قیمت در انحصار فروش بسیار بالاست (<InlineMath math="P_S" />)، در انحصار خرید بسیار پایین است (<InlineMath math="P_B" />)، و قیمت شبه‌رقابتی بین این دو قرار می‌گیرد.
          </li>
        </ul>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Handshake size={20} />
        ۳. راه حل چانه‌زنی (Bargaining Solution)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        از آنجا که در انحصار دوجانبه همواره یک کشمکش بر سر تصاحب سود وجود دارد، معمولاً طرفین تصمیم می‌گیرند به جای رقابت مخرب، <strong>کارتل مشترک</strong> تشکیل دهند. به این معنی که مجموع سود خریدار و فروشنده را با هم بیشینه می‌کنند.
      </p>

      <BlockMath math="\pi_{Total} = \pi_{Buyer} + \pi_{Seller}" />
      <BlockMath math="\text{Max } \pi_{Total} \implies \text{شرط شبه رقابتی: } VMP = MC" />

      <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderRight: '4px solid var(--accent)' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>محدوده قیمت مورد توافق (چانه‌زنی)</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          پس از رسیدن به مقدار بهینه (مقدار شبه‌رقابتی)، طرفین باید بر سر قیمت به توافق برسند. قیمت مورد توافق بستگی به قدرت چانه‌زنی دارد، اما همواره بین یک حد پایین (کف مورد قبول فروشنده) و یک حد بالا (سقف مورد قبول خریدار) قرار می‌گیرد:
        </p>
        <BlockMath math="\frac{\text{کل هزینه فروشنده}}{Q} \le P \le \frac{\text{کل درآمد خریدار}}{Q}" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
          در واقع هیچ‌کدام حاضر نیستند ضرر کنند، پس قیمت در محدوده‌ای قرار می‌گیرد که سود هر دو طرف صفر یا مثبت باشد.
        </p>
      </div>

    </div>
  );
};

export default Subpage1;
