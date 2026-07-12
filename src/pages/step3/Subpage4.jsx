import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Store, Users, Handshake, Target, Swords } from 'lucide-react';

const Subpage4 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Store style={{ color: 'var(--primary)' }} />
        رقابت انحصاری و انحصار چندجانبه (Oligopoly)
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در دنیای واقعی، اکثر بازارها در طیفی بین رقابت کامل و انحصار مطلق قرار دارند. دو ساختار مهم در این طیف عبارتند از <strong>رقابت انحصاری (Monopolistic Competition)</strong> و <strong>انحصار چندجانبه (Oligopoly)</strong>.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Store size={20} />
        ۱. بازار رقابت انحصاری (مدل چمبرلین)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        این بازار ویژگی‌هایی از هر دو ساختار حدی دارد: تعداد بنگاه‌ها زیاد است (مثل رقابت کامل) اما کالاها همگن نیستند و <strong>تمایز محصول</strong> وجود دارد (مثل انحصار). به دلیل وجود تمایز، هر بنگاه کمی قدرت انحصاری روی قیمت کالای خودش دارد.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>دو نوع منحنی تقاضا در رقابت انحصاری:</h4>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <li>
              <strong>تقاضای مورد انتظار (<InlineMath math="d" />):</strong> بنگاه تصور می‌کند با کاهش قیمت می‌تواند سهم بازار را بگیرد و رقبا واکنشی نشان نمی‌دهند. شیب این منحنی کم است.
            </li>
            <li>
              <strong>تقاضای موثر (<InlineMath math="D" />):</strong> در واقعیت وقتی یک بنگاه قیمت را کم می‌کند، رقبا نیز همان کار را می‌کنند تا سهمشان را از دست ندهند. این تقاضا پرشیب‌تر است و رفتار واقعی بازار را نشان می‌دهد.
            </li>
          </ol>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تعادل‌های کوتاه‌مدت و بلندمدت:</h4>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <li>
              <strong>کوتاه‌مدت:</strong> بر اساس منحنی تقاضای مورد انتظار (<InlineMath math="d" />) شکل می‌گیرد: <InlineMath math="MR_d = MC" />
            </li>
            <li>
              <strong>بلندمدت:</strong> با ورود بنگاه‌های جدید، سود اقتصادی صفر می‌شود. منحنی تقاضای موثر (<InlineMath math="D" />) بر منحنی هزینه متوسط بلندمدت (<InlineMath math="LAC" />) مماس می‌شود.
            </li>
          </ul>
        </div>
      </div>

      <div className="example-box" style={{ marginBottom: '3rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          مثال عددی: تعادل ۱۰۱ بنگاه در رقابت انحصاری
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید در یک صنعت ۱۰۱ بنگاه حضور دارند. توابع تقاضا و هزینه هر بنگاه به شکل زیر است:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1rem 0' }}>
          <BlockMath math="P_i = 150 - q_i - 0.02 \sum_{j \neq i} q_j" />
          <BlockMath math="C_i = 0.5 q_i^3 - 20 q_i^2 + 270 q_i" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          در شرایط تقاضای موثر (بلندمدت) فرض می‌کنیم تمام رقبا رفتاری مشابه دارند، یعنی تولیدشان برابر با <InlineMath math="q_i" /> است. بنابراین مجموع تولید ۱۰۰ بنگاه دیگر برابر است با <InlineMath math="100 q_i" />.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
          <BlockMath math="MR_i = 150 - 2 q_i - 0.02(100 q_i) \implies MR_i = 150 - 4 q_i" />
          <BlockMath math="MC_i = 1.5 q_i^2 - 40 q_i + 270" />
          <BlockMath math="MR_i = MC_i \implies 150 - 4 q_i = 1.5 q_i^2 - 40 q_i + 270" />
          <BlockMath math="\implies q_i = 20 \quad , \quad P_i = 90 \quad , \quad \pi = 400" />
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/105-nemodar2.svg" alt="تعادل بلندمدت رقابت انحصاری" style={{ maxWidth: '100%', maxHeight: '250px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          در تعادل بلندمدت، مماس شدن منحنی‌ها در نقطه حداقل <InlineMath math="LAC" /> رخ نمی‌دهد؛ به این تفاوت <strong>ظرفیت مازاد (Excess Capacity)</strong> می‌گویند.
        </p>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Users size={20} />
        ۲. بازار انحصار چندجانبه (Oligopoly)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بازاری با <strong>تعداد معدودی تولیدکننده (دو یا چند بنگاه)</strong>. ویژگی اصلی این بازار <strong>وابستگی متقابل (Mutual Interdependence)</strong> است؛ یعنی سود هر بنگاه مستقیماً به رفتار سایر رقبا بستگی دارد.
      </p>

      <h4 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Target size={18} style={{ color: 'var(--danger)' }} />
        مدل‌های انحصار چندجانبه با کالای همگن:
      </h4>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>مدل کورنو (Cournot)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            هر بنگاه <strong>مقدار تولید رقیب را ثابت فرض می‌کند</strong>. توابع عکس‌العمل <em>مقداری</em> (<InlineMath math="q_1 = f(q_2)" />) به دست می‌آید. شرط تعادل:
          </p>
          <BlockMath math="P + q_i \frac{\partial P}{\partial q_i} = MC_i" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            نکته: اگر تعداد بنگاه‌ها بسیار زیاد شود (<InlineMath math="n \to \infty" />)، مدل کورنو به بازار رقابت کامل نزدیک می‌شود.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>مدل استاکلبرگ (Stackelberg)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            مدل <strong>رهبر و پیرو</strong>. بنگاه رهبر با آگاهی از تابع عکس‌العمل پیرو، آن را در تابع سود خود جاگذاری کرده و سودش را حداکثر می‌کند. سود رهبر بیشتر از مدل کورنو است.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>مدل برتراند (Bertrand)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            برخلاف کورنو، در اینجا متغیر رقابت <strong>قیمت</strong> است. هر بنگاه قیمت رقیب را ثابت فرض می‌کند. توابع عکس‌العمل قیمتی (<InlineMath math="P_1 = f(P_2)" />) شکل می‌گیرد. در کالای همگن جنگ قیمتی به <InlineMath math="P = MC" /> ختم می‌شود.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', borderTop: '3px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>تبانی و کارتل (Collusion)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            بنگاه‌ها با هم سازش کرده و مانند <strong>یک انحصارگر کل</strong> عمل می‌کنند تا سود مشترک ماکزیمم شود. شرط تعادل:
          </p>
          <BlockMath math="MR_{Total} = MC_1 = MC_2" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>این مدل بالاترین سود ترکیبی را برای صنعت ایجاد می‌کند اما احتمال تقلب در آن بالاست.</p>
        </div>
      </div>

      <div className="example-box" style={{ marginBottom: '3rem', borderRight: '4px solid var(--primary)' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
          مثال عددی: راه حل تبانی (سازش) بین دو بنگاه
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          تابع تقاضای بازار <InlineMath math="P = 100 - Q" /> است که در آن <InlineMath math="Q = q_1 + q_2" />. هزینه دو بنگاه متفاوت است:
        </p>
        <BlockMath math="TC_1 = 0.25 q_1^2 + 2 q_1 \implies MC_1 = 0.5 q_1 + 2" />
        <BlockMath math="TC_2 = 0.5 q_2^2 + 2 \implies MC_2 = q_2" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '1rem' }}>
          در حالت تبانی، می‌خواهیم سود کل (<InlineMath math="\pi = \pi_1 + \pi_2" />) را بیشینه کنیم. شرط تعادل این است که درآمد نهایی بازار با هزینه نهایی هر دو کارخانه برابر باشد:
        </p>
        <BlockMath math="MR = 100 - 2Q = 100 - 2(q_1 + q_2)" />
        <BlockMath math="MC_1 = MC_2 \implies 0.5 q_1 + 2 = q_2" />
        <BlockMath math="MR = MC_2 \implies 100 - 2(q_1 + q_2) = q_2 \implies 100 - 2q_1 - 3q_2 = 0" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '1rem' }}>با جایگذاری <InlineMath math="q_2" /> در معادله آخر:</p>
        <BlockMath math="100 - 2q_1 - 3(0.5 q_1 + 2) = 0 \implies q_1 = 26.86 \quad , \quad q_2 = 15.43" />
        <BlockMath math="Q_{Total} = 42.29 \quad , \quad P = 100 - 42.29 = 57.71" />
        <p style={{ color: 'var(--success)', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
          سود بنگاه اول: <InlineMath math="\pi_1 = 1316.1" /> و سود بنگاه دوم: <InlineMath math="\pi_2 = 769.5" />
        </p>
      </div>

      <h4 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Swords size={18} style={{ color: 'var(--accent)' }} />
        مدل‌های انحصار چندجانبه با کالای غیرهمگن:
      </h4>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }}>
        ۱. <strong>سهمیه‌بندی بازار (Market Sharing):</strong> تولیدکنندگان تغییرات تولید رقبا را با یک نسبت ثابت دنبال می‌کنند (<InlineMath math="q_2 = k q \implies q_2 = \frac{k}{1-k} q_1" />). <br />
        ۲. <strong>تقاضای شکسته (Kinked Demand):</strong> برای توضیح <em>چسبندگی قیمت‌ها</em> استفاده می‌شود. رقبا کاهش قیمت را پاسخ می‌دهند (بخش کم‌کشش) اما افزایش قیمت را نادیده می‌گیرند (بخش باکشش).
      </p>

    </div>
  );
};

export default Subpage4;
