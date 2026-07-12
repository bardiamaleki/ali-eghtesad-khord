import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { HelpCircle, RefreshCw, BarChart2, ShieldAlert } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <RefreshCw style={{ color: 'var(--primary)' }} />
        ۱. مقدمه: جریان دایره‌ای اقتصاد و تعادل بازار
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        علم اقتصاد در واقع <strong>دانش کمیابی منابع</strong> است؛ جایی که خواسته‌های انسان‌ها نامحدود بوده اما منابع در دسترس برای تامین آن‌ها محدود و کمیاب است. بنابراین، مسئله‌ی اساسی اقتصاد، چگونگی تخصیص بهینه‌ی منابع کمیاب به خواسته‌های نامحدود است.
      </p>

      {/* Circle Flow */}
      <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) چرخه جریان دایره‌ای اقتصاد (Circular Flow)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در اقتصاد خرد، تعاملات اساسی بین دو گروه اصلی یعنی <strong>خانوارها (Household)</strong> به عنوان مصرف‌کننده و <strong>بنگاه‌ها (Firm)</strong> به عنوان تولیدکننده شکل می‌گیرد:
      </p>

      <div style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/svg/graph1_1.svg" alt="چرخه جریان دایره‌ای اقتصاد" style={{ maxWidth: '100%', maxHeight: '350px', borderRadius: '8px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>چرخه تعاملی بین بازار کالاها و خدمات و بازار عوامل تولید</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>بازار کالاها و خدمات:</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            خانوارها متقاضی خرید کالاها و بنگاه‌ها عرضه‌کننده آن‌ها هستند. جریان پول از خانوار به بنگاه حرکت می‌کند و جریان فیزیکی کالا برعکس.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--secondary)' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>بازار عوامل تولید (نهاده‌ها):</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            خانوارها صاحبان عوامل تولید (نیروی کار، زمین و سرمایه) بوده و عرضه‌کننده هستند و بنگاه‌ها متقاضی این نهاده‌ها می‌باشند.
          </p>
        </div>
      </div>

      {/* Market Types */}
      <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>ب) ساختارهای چهارگانه بازار کالا و خدمات</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        بر اساس میزان رقابت و قدرت تعیین قیمت، بازارها به چهار دسته تقسیم می‌شوند:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
          <h5 style={{ color: 'var(--success)', fontWeight: 'bold', marginBottom: '0.5rem' }}>۱. رقابت کامل</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
            بنگاه‌ها قیمت‌گیر هستند. تعداد خریدار و فروشنده بسیار زیاد است و کالای همگن عرضه می‌شود (<InlineMath math="P = MR = D" />).
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
          <h5 style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>۲. رقابت انحصاری</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8.rem', lineHeight: '1.6', margin: 0 }}>
            تعداد فروشندگان زیاد است اما کالاها متمایز بوده و هر بنگاه دارای مقداری قدرت قیمت‌گذاری است.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
          <h5 style={{ color: 'var(--warning)', fontWeight: 'bold', marginBottom: '0.5rem' }}>۳. انحصار چند جانبه</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
            بازار در دست چند بنگاه بزرگ است و تصمیمات هر کدام واکنش سایرین را به همراه دارد.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
          <h5 style={{ color: 'var(--danger)', fontWeight: 'bold', marginBottom: '0.5rem' }}>۴. انحصار کامل</h5>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
            تنها یک فروشنده در بازار وجود دارد که تعیین‌کننده قیمت بازار است و با تقاضای کل مواجه است.
          </p>
        </div>
      </div>

      {/* Household & Firm Math */}
      <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BarChart2 size={20} />
        ج) روابط ریاضی تقاضا، عرضه و تعادل
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {/* Demand */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>۱. رفتار خانوار و تابع تقاضا (Demand)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            خانوار متقاضی خرید کالا است. مقدار تقاضا تابعی از قیمت خود کالا (<InlineMath math="P_x" />)، درآمد مصرف‌کننده (<InlineMath math="I" />)، قیمت سایر کالاها (<InlineMath math="P_y" />) و غیره است:
          </p>
          <BlockMath math="Q_x^d = f(P_x, I, P_y, \dots)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            رابطه قیمت خود کالا با تقاضا معکوس است (قانون تقاضا). فرم خطی تقاضای معکوس به شکل زیر است:
          </p>
          <BlockMath math="P_x = a - b Q_x^d \quad (b > 0)" />
          <div style={{ margin: '1rem 0', textAlign: 'center' }}>
            <img src="/svg/graph2_1.svg" alt="منحنی تقاضا" style={{ maxWidth: '100%', maxHeight: '180px' }} />
          </div>
        </div>

        {/* Supply */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۲. رفتار بنگاه و تابع عرضه (Supply)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            بنگاه عرضه‌کننده کالا است. مقدار عرضه تابعی از قیمت خود کالا (<InlineMath math="P_x" />)، هزینه‌ها، تکنولوژی (<InlineMath math="T" />) و یارانه‌ها است:
          </p>
          <BlockMath math="Q_x^s = f(P_x, C, T, \dots)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            رابطه قیمت خود کالا با مقدار عرضه مستقیم است (قانون عرضه). فرم خطی عرضه معکوس به شکل زیر است:
          </p>
          <BlockMath math="P_x = a + b Q_x^s \quad (b > 0)" />
          <div style={{ margin: '1rem 0', textAlign: 'center' }}>
            <img src="/svg/graph2_2.svg" alt="منحنی عرضه" style={{ maxWidth: '100%', maxHeight: '180px' }} />
          </div>
        </div>
      </div>

      {/* Equilibrium */}
      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--warning)' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <ShieldAlert size={18} />
          تعادل بازار (Market Equilibrium)
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          تعادل جایی شکل می‌گیرد که تمایل مصرف‌کننده برای خرید با تمایل تولیدکننده برای فروش هم‌راستا شود. یعنی مقدار تقاضا با مقدار عرضه برابر گردد:
        </p>
        <BlockMath math="Q_x^d = Q_x^s \implies P^d = P^s" />
        <div style={{ margin: '1.5rem 0', textAlign: 'center' }}>
          <img src="/svg/graph2_3.svg" alt="تعادل بازار" style={{ maxWidth: '100%', maxHeight: '250px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>نقطه تعادل در تلاقی عرضه و تقاضا</p>
        </div>
      </div>
    </div>
  );
};

export default Subpage1;
