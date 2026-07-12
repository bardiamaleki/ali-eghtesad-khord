import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { DollarSign, Landmark, Coins } from 'lucide-react';

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

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <DollarSign size={18} />
          تحلیل دیفرانسیلی و ایستای مقایسه‌ای مالیات بر فروش (صفحه ۹۸ جزوه)
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          در مالیات بر فروش، درصدی از کل درآمد کسر می‌شود. می‌خواهیم اثر تغییر نرخ مالیات (<InlineMath math="t" />) را بر مقدار تعادلی تولید (<InlineMath math="Q" />) بررسی کنیم:
          <BlockMath math="\max \pi = TR(1-t) - TC" />
          شرط مرتبه اول (F.O.C):
          <BlockMath math="(1-t)MR - MC = 0" />
          با دیفرانسیل‌گیری کامل از شرط تعادل نسبت به مقدار تولید و نرخ مالیات داریم:
          <BlockMath math="(1-t)MR' dQ - MR dt - MC' dQ = 0 \implies \left[ (1-t)MR' - MC' \right] dQ = MR dt" />
          با تقسیم طرفین بر <InlineMath math="dt" />، رابطه زیر به دست می‌آید:
          <BlockMath math="\frac{dQ}{dt} = \frac{MR}{(1-t)MR' - MC'}" />
          <strong>تحلیل علامت کسر:</strong>
          <ul style={{ paddingRight: '1.5rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li>صورت کسر مثبت است (<InlineMath math="MR > 0" />)، زیرا انحصارگر همواره در ناحیه باکشش منحنی تقاضا که درآمد نهایی مثبت است تولید می‌کند.</li>
            <li>مخرج کسر منفی است، زیرا طبق شرط مرتبه دوم حداکثرسازی سود (S.O.C)، باید داشته باشیم: <InlineMath math="(1-t)MR' - MC' < 0" />.</li>
          </ul>
          بنابراین، حاصل تقسیم همواره منفی است:
          <BlockMath math="\frac{dQ}{dt} < 0" />
          این نتیجه ثابت می‌کند که افزایش نرخ مالیات بر فروش همواره باعث **کاهش مقدار تولید تعادلی** و افزایش قیمت مصرف‌کننده خواهد شد (اثر تخصیصی شدید).
        </p>
      </div>

    </div>
  );
};

export default Subpage3;
