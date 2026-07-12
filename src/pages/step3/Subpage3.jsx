import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { DollarSign, Landmark, Coins, HelpCircle } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Landmark style={{ color: 'var(--primary)' }} />
        مالیات بر انحصارگر و اثرات تخصیصی آن
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        دولت‌ها از ابزار مالیات برای کنترل سودهای کلان انحصارگران یا جبران ناکارایی‌های بازار استفاده می‌کنند. بررسی ریاضی نشان می‌دهد که نوع طراحی مالیات، تأثیر کاملاً متفاوتی بر روی **مقدار تولید تعادلی (کارایی بازار)** و **سود خالص انحصارگر (توزیع رفاه)** دارد.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Coins size={20} />
        ۱. انواع چهارگانه مالیات بر انحصارگر
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
        {/* Lump-Sum */}
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontWeight: 'bold' }}>الف) مالیات مقطوع (Lump-Sum Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            مبلغ ثابت <InlineMath math="T" /> بدون توجه به میزان تولید اخذ می‌شود. این مالیات به عنوان هزینه ثابت عمل کرده و **اثر تخصیصی ندارد**؛ یعنی مقدار تولید و قیمت مصرف‌کننده تغییر نمی‌کند و فقط سود انحصارگر کم می‌شود.
          </p>
          <BlockMath math="\max \pi = TR(Q) - TC(Q) - T \implies MR = MC" />
        </div>

        {/* Specific */}
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem', fontWeight: 'bold' }}>ب) مالیات بر واحد (Specific Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            به ازای هر واحد فروش، مبلغ ثابت <InlineMath math="t" /> اخذ می‌شود. این مالیات هزینه نهایی را بالا برده و **اثر تخصیصی شدیدی دارد**؛ در نتیجه تولید کاهش و قیمت مصرف‌کننده افزایش می‌یابد.
          </p>
          <BlockMath math="\max \pi = TR(Q) - TC(Q) - t \cdot Q \implies MR = MC + t" />
        </div>

        {/* Sales Tax */}
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>ج) مالیات بر ارزش فروش (Sales Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            درصدی از درآمد کل به عنوان مالیات کسر می‌شود. این مالیات نیز **اثر تخصیصی منفی دارد** زیرا درآمد نهایی انحصارگر را تقلیل می‌دهد و باعث کاهش تولید و افزایش قیمت کالا می‌شود.
          </p>
          <BlockMath math="\max \pi = TR(Q) \cdot (1-t) - TC(Q) \implies MR(1-t) = MC" />
        </div>

        {/* Profit Tax */}
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', fontWeight: 'bold' }}>د) مالیات بر سود خالص (Profit Tax)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            درصدی از سود خالص انحصارگر دریافت می‌شود. این مالیات به دلیل عدم تغییر در شروط تعادل، **فاقد اثر تخصیصی است** و کارایی تخصیصی بازار را حفظ می‌کند:
          </p>
          <BlockMath math="\max \pi = [TR(Q) - TC(Q)] \cdot (1-t) \implies MR = MC" />
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/97-nemodar.svg" alt="نمودار اثر مالیات بر واحد بر انحصارگر" style={{ maxWidth: '100%', maxHeight: '250px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          انتقال موازی منحنی هزینه نهایی به بالا به اندازه <InlineMath math="t" /> و کاهش تولید بهینه انحصارگر.
        </p>
      </div>

      {/* Comparative Statics Proof */}
      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <DollarSign size={20} />
          اثبات ریاضی و تحلیل ایستای مقایسه‌ای مالیات بر فروش (صفحه ۹۸ جزوه)
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          می‌خواهیم از نظر ریاضی و با استفاده از قضیه تابع ضمنی اثبات کنیم که افزایش نرخ مالیات بر ارزش فروش (<InlineMath math="t" />) همواره تولید تعادل را کاهش می‌دهد:
          <br />
          تابع هدف سود انحصارگر به شکل زیر است:
          <BlockMath math="\max_Q \pi = TR(Q) \cdot (1-t) - TC(Q)" />
          شرط مرتبه اول تعادل (F.O.C):
          <BlockMath math="F(Q, t) = (1-t) \cdot MR(Q) - MC(Q) = 0" />
          از شرط تعادل نسبت به مقدار تولید (<InlineMath math="Q" />) و نرخ مالیات (<InlineMath math="t" />) دیفرانسیل کامل می‌گیریم:
          <BlockMath math="\frac{\partial F}{\partial Q} dQ + \frac{\partial F}{\partial t} dt = 0" />
          محاسبه مشتقات جزئی:
          <BlockMath math="\frac{\partial F}{\partial Q} = (1-t)MR'(Q) - MC'(Q) \quad (\text{همواره منفی به دلیل شرط مرتبه دوم SOC})" />
          <BlockMath math="\frac{\partial F}{\partial t} = -MR(Q) \quad (\text{همواره منفی در ناحیه تعادلی باکشش})" />
          طبق قضیه مشتق تابع ضمنی داریم:
          <BlockMath math="\frac{dQ}{dt} = -\frac{\partial F / \partial t}{\partial F / \partial Q} = -\frac{-MR(Q)}{(1-t)MR'(Q) - MC'(Q)} = \frac{MR(Q)}{(1-t)MR'(Q) - MC'(Q)}" />
          <strong>تحلیل نهایی علامت کسر:</strong>
          <br />
          چون صورت کسر مثبت (<InlineMath math="MR > 0" />) و مخرج کسر منفی است، کل عبارت منفی خواهد بود:
          <BlockMath math="\frac{dQ}{dt} < 0" />
          این فرمول به صورت دقیق و قاطع اثبات می‌کند که افزایش نرخ مالیات بر فروش، **همواره باعث کاهش عرضه محصول و افزایش قیمت برای مصرف‌کنندگان می‌شود**.
        </p>
      </div>

    </div>
  );
};

export default Subpage3;
