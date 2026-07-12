import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { PieChart, Sliders, TrendingDown, HelpCircle } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <PieChart style={{ color: 'var(--primary)' }} />
        ۳. الیگوپولی غیرهمگن و تقاضای شکسته
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        وقتی کالاها غیرهمگن (متمایز) باشند، هر بنگاه تابع تقاضای مجزایی دارد که به قیمت یا مقدار تولید خودش و رقبایش وابسته است. در این حالت، تصمیمات استراتژیک بر اساس حفظ سهم بازار یا پیش‌بینی واکنش‌های نامتقارن رقبا صورت می‌گیرد.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sliders size={20} />
        ۱. راه حل سهمیه‌بندی بازار (Market Sharing)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در این مدل بلندمدت، بنگاه‌ها توافق می‌کنند که سهم نسبی مشخصی از بازار را حفظ کنند (صفحه ۱۱۵ جزوه). اگر سهم بنگاه دوم از کل تولید بازار برابر با نسبت ثابت <InlineMath math="k" /> باشد:
        <BlockMath math="\frac{q_2}{q_1 + q_2} = k \implies q_2 = k(q_1 + q_2) \implies q_2(1-k) = k q_1" />
        از این رابطه، توابع تسهیم سهم بازار به صورت زیر حاصل می‌شوند که با جایگذاری در تقاضای هر بنگاه، مسئله بهینه‌سازی مستقل را حل می‌کند:
        <BlockMath math="q_2 = \frac{k}{1-k} q_1 \quad , \quad q_1 = \frac{1-k}{k} q_2" />
      </p>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <TrendingDown size={20} />
        ۲. نظریه منحنی تقاضای شکسته (Sweezy's Kinked Demand)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        این نظریه که توسط پل سویزی مطرح شد، پدیده **چسبندگی قیمت‌ها (Price Rigidity)** در بازار انحصار چندجانبه را توصیف می‌کند. اساس این مدل بر فرضی نامتقارن استوار است:
        <br />
        - اگر بنگاهی قیمت خود را **افزایش** دهد، هیچ‌یک از رقبا از او پیروی نمی‌کنند (بخش تقاضای باکشش و صوری dd).
        <br />
        - اگر بنگاهی قیمت خود را **کاهش** دهد، تمام رقبا برای حفظ مشتریان از او پیروی می‌کنند (بخش تقاضای کم‌کشش و واقعی DD).
        <br />
        این تفاوت رفتار باعث ایجاد یک **شکستگی (Kink)** در منحنی تقاضا و در نتیجه یک **شکاف عمودی (vertical gap)** در منحنی درآمد نهایی (MR) می‌شود.
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/116-kinked-demand.svg" alt="منحنی تقاضای شکسته سویزی" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          شکستگی در نقطه تعادل قیمت و ایجاد فاصله قطع‌شدگی در منحنی درآمد نهایی (MR)؛ هرگونه تغییر در هزینه نهایی (MC) در این بازه تأثیری بر قیمت تعادلی بازار ندارد.
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <HelpCircle size={18} />
          حل تشریحی مثال تعادل و محدوده چسبندگی قیمت (صفحات ۱۱۷-۱۱۸ جزوه):
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید دو بنگاه با توابع تقاضای غیرهمگن زیر روبرو هستند:
          <BlockMath math="P_1 = 100 - 2q_1 - q_2 \quad \text{S.t} \quad TC_1 = 2.5 q_1^2 \implies MC_1 = 5q_1" />
          <BlockMath math="P_2 = 95 - q_1 - 3q_2 \quad \text{S.t} \quad TC_2 = 1.25 q_2^2 \implies MC_2 = 2.5q_2" />
          می‌خواهیم تعادل اولیه کورنو و سپس محدوده تغییرات هزینه‌ای را پیدا کنیم که قیمت تعادلی بدون تغییر می‌ماند.
          <br /><br />
          <strong>گام اول: تعادل اولیه کورنو</strong>
          <br />
          توابع سود را بیشینه کرده و دستگاه عکس‌العمل را حل می‌کنیم:
          <BlockMath math="\pi_1 = (100 - 2q_1 - q_2)q_1 - 2.5 q_1^2 \implies \frac{\partial \pi_1}{\partial q_1} = 100 - 9q_1 - q_2 = 0 \implies q_1 = \frac{100 - q_2}{9}" />
          <BlockMath math="\pi_2 = (95 - q_1 - 3q_2)q_2 - 1.25 q_2^2 \implies \frac{\partial \pi_2}{\partial q_2} = 95 - q_1 - 8.5q_2 = 0 \implies q_2 = \frac{95 - q_1}{8.5}" />
          با حل دستگاه فوق، مقادیر تعادلی برابر می‌شوند با:
          <BlockMath math="q_1 = 10 \quad , \quad q_2 = 10" />
          قیمت‌های تعادلی اولیه:
          <BlockMath math="P_1 = 70 \quad , \quad P_2 = 55" />
          بنابراین شکستگی برای بنگاه اول در نقطه <InlineMath math="q_1 = 10" /> و <InlineMath math="P_1 = 70" /> رخ می‌دهد.
          <br /><br />
          <strong>گام دوم: تحلیل رفتار در قیمت‌های بالاتر از ۷۰ (عدم پیروی)</strong>
          <br />
          اگر بنگاه ۱ قیمت را افزایش دهد، بنگاه ۲ قیمت خود را در <InlineMath math="P_2 = 55" /> حفظ می‌کند. با قرار دادن این قیمت در تقاضای بنگاه ۲:
          <BlockMath math="55 = 95 - q_1 - 3q_2 \implies q_2 = \frac{40 - q_1}{3}" />
          با قرار دادن این رابطه در تابع تقاضای بنگاه ۱، تقاضای بخش بالایی (باکشش) حاصل می‌شود:
          <BlockMath math="P_1 = 100 - 2q_1 - \left( \frac{40 - q_1}{3} \right) = \frac{260 - 5q_1}{3}" />
          درآمد نهایی برای این بخش:
          <BlockMath math="MR_1^{upper} = \frac{260 - 10q_1}{3} \quad \xrightarrow{q_1=10} \quad MR_1^{upper} = 53.33" />
          <strong>گام سوم: تحلیل رفتار در قیمت‌های کمتر از ۷۰ (پیروی رقبا)</strong>
          <br />
          اگر بنگاه ۱ قیمت را کاهش دهد، بنگاه ۲ نیز قیمت خود را کاهش می‌دهد تا سهم بازارش حفظ شود. با فرض تطابق کامل رفتار (<InlineMath math="q_2 = q_1" />)، منحنی تقاضای بخش پایینی (کم‌کشش) عبارت است از:
          <BlockMath math="P_1 = 100 - 2q_1 - q_1 = 100 - 3q_1" />
          درآمد نهایی برای این بخش:
          <BlockMath math="MR_1^{lower} = 100 - 6q_1 \quad \xrightarrow{q_1=10} \quad MR_1^{lower} = 40" />
          <strong>گام چهارم: تعیین محدوده چسبندگی قیمت</strong>
          <br />
          در نقطه شکستگی <InlineMath math="q_1 = 10" />، منحنی درآمد نهایی دچار شکاف و پرش ناگهانی بین دو مقدار به دست آمده می‌شود:
          <BlockMath math="40 \le MR_1 \le 53.33" />
          از آنجا که هزینه نهایی بنگاه اول در نقطه تعادل برابر است با <InlineMath math="MC_1(10) = 5(10) = 50" />، و این مقدار دقیقاً در محدوده شکاف قرار دارد (<InlineMath math="40 < 50 < 53.33" />)، تعادل در قیمت ۷۰ پایدار می‌ماند. اگر هزینه نهایی به دلیل نوسانات قیمت مواد اولیه بین ۴۰ تا ۵۳.۳۳ تغییر کند، بنگاه ۱ هیچ انگیزه‌ای برای تغییر قیمت خود (۷۰) یا مقدار تولید (۱۰) نخواهد داشت.
        </p>
      </div>

    </div>
  );
};

export default Subpage3;
