import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Replace, RefreshCw, Box, HelpCircle } from 'lucide-react';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Replace style={{ color: 'var(--primary)' }} />
        دوگانگی و تابع مطلوبیت غیرمستقیم
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        مفهوم <strong>دوگانگی (Duality)</strong> یکی از زیباترین و کاربردی‌ترین ابزارهای اقتصاد خرد است. این مفهوم نشان می‌دهد که هر مسئله حداکثرسازی (مانند مطلوبیت)، یک مسئله معادل حداقل‌سازی (مانند مخارج) دارد که پاسخ‌های هم‌ارز تولید می‌کنند. در این بخش، ارتباط بین تابع مطلوبیت مستقیم و غیرمستقیم را بررسی می‌کنیم.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--success)' }}>
          <h3 style={{ color: 'var(--success)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Box size={20} />
            ۱. تابع مطلوبیت مستقیم
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            تابعی است که به طور مستقیم با مقادیر فیزیکی مصرف کالاها در ارتباط است و نشان‌دهنده ترجیحات ذهنی مصرف‌کننده است:
          </p>
          <div className="formula-box" style={{ margin: '1rem 0' }}>
            <BlockMath math="U = U(x_1, x_2, \dots, x_n)" />
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            هدف در اینجا <InlineMath math="\max U" /> با توجه به محدودیت بودجه (<InlineMath math="I = \sum P_i x_i" />) است که خروجی آن <strong>تابع تقاضای نرمال (مارشالی)</strong> است.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--warning)' }}>
          <h3 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCw size={20} />
            ۲. تابع مطلوبیت غیرمستقیم
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            اگر توابع تقاضای مارشالی را در تابع مطلوبیت مستقیم جایگذاری کنیم، به تابعی می‌رسیم که به جای مقادیر کالاها، قیمت کالاها و درآمد را به عنوان متغیر می‌پذیرد:
          </p>
          <div className="formula-box" style={{ margin: '1rem 0' }}>
            <BlockMath math="V = V(P_1, P_2, \dots, P_n, I)" />
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            این تابع بسیار کاربردی‌تر است زیرا متغیرهای آن (قیمت و درآمد) در بازار قابل مشاهده و اندازه‌گیری هستند.
          </p>
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳. فرآیند دوگانگی (رفت و برگشت)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        همان‌طور که از تابع مستقیم به غیرمستقیم رسیدیم، می‌توانیم با یک مسئله بهینه‌سازی جدید، از مطلوبیت غیرمستقیم مجدداً به مطلوبیت مستقیم بازگردیم.
      </p>

      <ul style={{ listStyleType: "none", paddingLeft: "0", color: "var(--text-muted)", lineHeight: "2", display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <li style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
          <strong>مسیر رفت (پیدا کردن مطلوبیت غیرمستقیم):</strong>
          <br/>توابع تقاضای <InlineMath math="x_i(P, I)" /> را از حداکثرسازی مطلوبیت پیدا کرده و درون <InlineMath math="U(x)" /> جایگذاری می‌کنیم تا <InlineMath math="V(P, I)" /> حاصل شود.
        </li>
        <li style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--secondary)' }}>
          <strong>مسیر برگشت (بازیابی مطلوبیت مستقیم):</strong>
          <br/>تابع <InlineMath math="V(P, I)" /> را با توجه به محدودیت بودجه نسبت به <strong>قیمت‌ها (<InlineMath math="P_i" />)</strong> حداقل (Min) می‌کنیم. خروجی این مسئله، <strong>توابع معکوس تقاضا</strong> (<InlineMath math="P_i = f(x_1, \dots, x_n)" />) است. با جایگذاری این توابع معکوس در <InlineMath math="V" />، مجدداً <InlineMath math="U(x_1, \dots, x_n)" /> بازیابی می‌شود.
        </li>
      </ul>

      {/* Roy's Identity - pedagogical improvement */}
      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. هویت روی (Roy's Identity) - میانبر طلایی</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        آیا راه ساده‌تری وجود دارد که از روی تابع مطلوبیت غیرمستقیم (<InlineMath math="V" />) به توابع تقاضای مارشالی کالاها برسیم؟ پاسخ مثبت است. طبق <strong>هویت روی (Roy's Identity)</strong>، بدون نیاز به حل سیستم لاگرانژ، می‌توان با مشتق‌گیری ساده به تقاضای بهینه رسید:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--success)', marginBottom: '1.5rem' }}>
        <BlockMath math="q_i^* = -\frac{\frac{\partial V(P_1, P_2, I)}{\partial P_i}}{\frac{\partial V(P_1, P_2, I)}{\partial I}}" />
      </div>

      <div className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(16, 185, 129, 0.03)', borderRight: '4px solid var(--success)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <HelpCircle size={18} />
          تفسیر شهودی هویت روی:
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          افزایش قیمت یک کالا مطلوبیت را کاهش می‌دهد (مشتق صورت کسر منفی است). از طرفی افزایش درآمد مطلوبیت را افزایش می‌دهد (مشتق مخرج مثبت است). نسبت این دو تغییر با علامت منفی، دقیقاً نشان‌دهنده مقدار بهینه تقاضای کالا در بازار است.
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem' }}>مثال جامع دوگانگی و هویت روی (گام‌به‌گام)</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع مطلوبیت به صورت <InlineMath math="U = q_1 q_2" /> باشد.
        </p>

        <h5 style={{ color: 'var(--text-main)', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام اول: استخراج توابع تقاضا (مارشالی)</h5>
        <BlockMath math="q_1^{ND} = \frac{I}{2 P_1} \quad , \quad q_2^{ND} = \frac{I}{2 P_2}" />

        <h5 style={{ color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام دوم: تشکیل تابع مطلوبیت غیرمستقیم</h5>
        <BlockMath math="V(P_1, P_2, I) = q_1^{ND} \cdot q_2^{ND} = \left( \frac{I}{2 P_1} \right) \left( \frac{I}{2 P_2} \right) = \frac{I^2}{4 P_1 P_2}" />

        <h5 style={{ color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام سوم: بازیابی تقاضای مارشالی با هویت روی (میانبر)</h5>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          از تابع مطلوبیت غیرمستقیم نسبت به قیمت کالای اول (<InlineMath math="P_1" />) و درآمد (<InlineMath math="I" />) مشتق می‌گیریم:
        </p>
        <BlockMath math="\frac{\partial V}{\partial P_1} = -\frac{I^2}{4 P_1^2 P_2} \quad , \quad \frac{\partial V}{\partial I} = \frac{2I}{4 P_1 P_2} = \frac{I}{2 P_1 P_2}" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          طبق فرمول هویت روی داریم:
        </p>
        <BlockMath math="q_1^* = -\frac{\frac{\partial V}{\partial P_1}}{\frac{\partial V}{\partial I}} = -\frac{-\frac{I^2}{4 P_1^2 P_2}}{\frac{I}{2 P_1 P_2}} = \frac{I^2}{4 P_1^2 P_2} \times \frac{2 P_1 P_2}{I} = \frac{I}{2 P_1}" />
        <p style={{ color: 'var(--success)', textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem' }}>
          مشاهده می‌شود که تقاضای مارشالی <InlineMath math="q_1^* = \frac{I}{2 P_1}" /> دقیقاً و به راحتی با هویت روی بازیابی شد!
        </p>

        <h5 style={{ color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام چهارم: حداقل‌سازی مطلوبیت غیرمستقیم (مسیر برگشت سنتی)</h5>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>اکنون مسئله جدیدی تعریف می‌کنیم که متغیرهای تصمیم‌گیری آن قیمت‌ها هستند:</p>
        <BlockMath math="\text{Min} \ V = \frac{I^2}{4 P_1 P_2} \quad \text{S.t} \quad I = P_1 q_1 + P_2 q_2" />
        <BlockMath math="Z = \frac{1}{4} I^2 P_1^{-1} P_2^{-1} + \mu (I - P_1 q_1 - P_2 q_2)" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>مشتق‌گیری نسبت به قیمت‌ها و قرار دادن برابر صفر:</p>
        <BlockMath math="\frac{\partial Z}{\partial P_1} = -\frac{1}{4} I^2 P_1^{-2} P_2^{-1} - \mu q_1 = 0" />
        <BlockMath math="\frac{\partial Z}{\partial P_2} = -\frac{1}{4} I^2 P_1^{-1} P_2^{-2} - \mu q_2 = 0" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>با تقسیم دو رابطه و جایگذاری در محدودیت بودجه، به توابع معکوس تقاضا می‌رسیم:</p>
        <BlockMath math="\frac{P_2}{P_1} = \frac{q_1}{q_2} \Rightarrow P_2 = \frac{q_1}{q_2} P_1 \quad \xrightarrow{\text{در بودجه}} \quad I = 2 P_1 q_1" />
        <BlockMath math="P_1^* = \frac{I}{2 q_1} \quad , \quad P_2^* = \frac{I}{2 q_2}" />

        <h5 style={{ color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام پنجم: بازیابی تابع مطلوبیت مستقیم</h5>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>توابع معکوس تقاضا را مجدداً در تابع غیرمستقیم قرار می‌دهیم:</p>
        <BlockMath math="V = \frac{I^2}{4 P_1 P_2} \Rightarrow U = \frac{I^2}{4 \left( \frac{I}{2 q_1} \right) \left( \frac{I}{2 q_2} \right)} = q_1 q_2" />
        <p style={{ color: 'var(--success)', textAlign: 'center', fontWeight: 'bold' }}>تابع مطلوبیت اولیه با موفقیت کامل از هر دو روش بازیابی شد!</p>
      </div>
    </div>
  );
};

export default Subpage4;
