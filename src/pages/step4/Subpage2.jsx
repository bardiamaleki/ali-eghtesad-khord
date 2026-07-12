import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Users, ShieldAlert, Award } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Users style={{ color: 'var(--primary)' }} />
        ۲. مدل‌های الیگوپولی با کالای همگن
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در انحصار چندجانبه با کالای همگن، مصرف‌کنندگان هیچ تفاوتی بین کالای بنگاه‌های مختلف قائل نمی‌شوند. بنابراین تنها یک قیمت واحد در بازار حاکم است که بر اساس مجموع تولید تمام بنگاه‌ها تعیین می‌گردد. در این بخش، ۵ مدل کلاسیک را با یک مثال عددی مشترک بررسی و مقایسه می‌کنیم.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۱. معرفی مدل‌ها</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>الف) شبه‌رقابتی (Quasi-Competitive)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            هر دو بنگاه رفتار رقابتی دارند و قدرت انحصاری خود را نادیده می‌گیرند. قیمت بازار برابر با هزینه نهایی هر کارخانه قرار داده می‌شود:
            <BlockMath math="P = MC_1 \quad , \quad P = MC_2" />
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>ب) تبانی و کارتل (Collusion)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            بنگاه‌ها با سازش کامل و با تجمیع سود کل، سهمیه تولید را بین خود تقسیم می‌کنند تا سود صنعت ماکزیمم شود (مشابه انحصارگر چندکارخانه‌ای):
            <BlockMath math="MR_{Total} = MC_1 = MC_2" />
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>ج) مدل کورنو (Cournot)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            هر بنگاه مقدار تولید رقیب خود را ثابت فرض می‌کند. از بهینه‌سازی سود هر کارخانه، توابع عکس‌العمل مقداری به دست آمده و همزمان حل می‌شوند:
            <BlockMath math="q_1 = f(q_2) \quad , \quad q_2 = f(q_1)" />
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>د) مدل استاکلبرگ (Stackelberg)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            مدل رهبر-پیرو. بنگاه رهبر با شناخت کامل از واکنش بنگاه پیرو، تابع عکس‌العمل او را در تابع سود خود جاگذاری کرده و سود خود را حداکثر می‌کند.
          </p>
        </div>
      </div>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldAlert size={18} />
          مسئله عددی هماهنگ: حل تشریحی و گام‌به‌گام (صفحات ۱۰۹-۱۱۴ جزوه)
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع تقاضای معکوس بازار به صورت <InlineMath math="P = 100 - Q" /> است که در آن <InlineMath math="Q = q_1 + q_2" />. ساختار هزینه‌ای دو بنگاه با هم متفاوت است:
          <BlockMath math="TC_1 = \frac{1}{4} q_1^2 + 2q_1 \implies MC_1 = \frac{1}{2} q_1 + 2" />
          <BlockMath math="TC_2 = \frac{1}{2} q_2^2 + 2 \implies MC_2 = q_2" />
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--success)' }}>
            <h5 style={{ color: 'var(--success)', marginBottom: '0.5rem', fontWeight: 'bold' }}>۱) حل به روش شبه‌رقابتی (صفحه ۱۰۹):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              قرار می‌دهیم قیمت برابر هزینه نهایی هر بنگاه باشد:
              <BlockMath math="P = MC_1 \implies 100 - q_1 - q_2 = 0.5 q_1 + 2 \implies 1.5 q_1 + q_2 = 98" />
              <BlockMath math="P = MC_2 \implies 100 - q_1 - q_2 = q_2 \implies q_1 + 2 q_2 = 100" />
              با حل این دستگاه دو معادله و دو مجهول، مقادیر تعادلی حاصل می‌شوند:
              <BlockMath math="q_1 = 48 \quad , \quad q_2 = 26 \implies Q = 74" />
              قیمت بازار: <InlineMath math="P = 100 - 74 = 26" />
              <br />
              سودها: 
              <BlockMath math="\pi_1 = (26 \times 48) - \left[\frac{1}{4}(48^2) + 2(48)\right] = 1248 - 672 = 576" />
              <BlockMath math="\pi_2 = (26 \times 26) - \left[\frac{1}{2}(26^2) + 2\right] = 676 - 340 = 336" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--primary)' }}>
            <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>۲) حل به روش تبانی/کارتل (صفحه ۱۱۰-۱۱۱):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              درآمد نهایی بازار از روی درآمد کل به دست می‌آید: <InlineMath math="TR = (100-Q)Q \implies MR = 100 - 2Q" />.
              شرط تعادل کارتل برابر است با: <InlineMath math="MR = MC_1 = MC_2" />
              <BlockMath math="MC_1 = MC_2 \implies 0.5 q_1 + 2 = q_2 \implies q_2 = 0.5 q_1 + 2" />
              <BlockMath math="MR = MC_2 \implies 100 - 2(q_1 + q_2) = q_2 \implies 100 - 2q_1 - 3q_2 = 0" />
              با جایگذاری رابطه اول در دومی:
              <BlockMath math="100 - 2q_1 - 3(0.5 q_1 + 2) = 0 \implies 3.5 q_1 = 94 \implies q_1 = 26.86 \quad , \quad q_2 = 15.43" />
              مقدار کل: <InlineMath math="Q = 42.29" /> و قیمت بازار: <InlineMath math="P = 100 - 42.29 = 57.71" />
              <br />
              سودها:
              <BlockMath math="\pi_1 = TR_1 - TC_1 = (57.71 \times 26.86) - 233.99 = 1316.1" />
              <BlockMath math="\pi_2 = TR_2 - TC_2 = (57.71 \times 15.43) - 121.04 = 769.5" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--warning)' }}>
            <h5 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontWeight: 'bold' }}>۳) حل به روش کورنو (صفحه ۱۱۲):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              هر بنگاه سود خود را با فرض ثبات مقدار تولید رقیب حداکثر می‌کند:
              <BlockMath math="\pi_1 = (100 - q_1 - q_2) q_1 - (\frac{1}{4} q_1^2 + 2 q_1) \implies \frac{\partial \pi_1}{\partial q_1} = 98 - 2.5 q_1 - q_2 = 0 \implies q_1 = \frac{98 - q_2}{2.5}" />
              <BlockMath math="\pi_2 = (100 - q_1 - q_2) q_2 - (\frac{1}{2} q_2^2 + 2) \implies \frac{\partial \pi_2}{\partial q_2} = 100 - q_1 - 3 q_2 = 0 \implies q_2 = \frac{100 - q_1}{3}" />
              با حل همزمان این توابع عکس‌العمل:
              <BlockMath math="q_1 = 29.85 \quad , \quad q_2 = 23.38 \implies Q = 53.23" />
              قیمت بازار: <InlineMath math="P = 46.77" />
              <br />
              سودها: <InlineMath math="\pi_1 = 1113.7" /> و <InlineMath math="\pi_2 = 818.2" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--danger)' }}>
            <h5 style={{ color: 'var(--danger)', marginBottom: '0.5rem', fontWeight: 'bold' }}>۴) حل به روش استاکلبرگ (بنگاه ۱ رهبر، ۲ پیرو - صفحه ۱۱۳-۱۱۴):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              بنگاه ۲ به عنوان پیرو رفتار می‌کند، پس مقدار تولید خود را بر اساس تابع عکس‌العمل کورنو تعیین می‌کند: <InlineMath math="q_2 = \frac{100 - q_1}{3}" />.
              بنگاه ۱ به عنوان رهبر با آگاهی از این واکنش، آن را در تابع سود خود قرار می‌دهد:
              <BlockMath math="\pi_1 = \left( 100 - q_1 - \frac{100 - q_1}{3} \right) q_1 - \left( \frac{1}{4} q_1^2 + 2 q_1 \right) \approx 64.67 q_1 - 0.9167 q_1^2" />
              شرط حداکثرسازی سود رهبر:
              <BlockMath math="\frac{\partial \pi_1}{\partial q_1} = 64.67 - 1.8333 q_1 = 0 \implies q_1 = 35.27" />
              مقدار تولید پیرو: <InlineMath math="q_2 = \frac{100 - 35.27}{3} = 21.58" />
              <br />
              مقدار کل: <InlineMath math="Q = 56.85" /> و قیمت بازار: <InlineMath math="P = 43.15" />
              <br />
              سودها: <InlineMath math="\pi_1 = 1140.4" /> (افزایش سود نسبت به کورنو) و <InlineMath math="\pi_2 = 696.3" /> (کاهش سود نسبت به کورنو)
            </p>
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Award size={20} />
        ۳. جدول مقایسه‌ای نتایج سناریوها
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        مقایسه نتایج مدل‌های مختلف به خوبی پویایی و قدرت انحصاری بنگاه‌ها را به تصویر می‌کشد:
      </p>

      <div className="responsive-table-wrapper">
        <table className="glass-panel responsive-table">
          <thead>
            <tr style={{ borderBottom: '2px solid var(--card-border)', color: 'var(--primary)' }}>
              <th style={{ padding: '0.75rem' }}>مدل بازار</th>
              <th style={{ padding: '0.75rem' }}>تولید بنگاه ۱ <span style={{ whiteSpace: 'nowrap' }}>(<InlineMath math="q_1" />)</span></th>
              <th style={{ padding: '0.75rem' }}>تولید بنگاه ۲ <span style={{ whiteSpace: 'nowrap' }}>(<InlineMath math="q_2" />)</span></th>
              <th style={{ padding: '0.75rem' }}>تولید کل <span style={{ whiteSpace: 'nowrap' }}>(<InlineMath math="Q" />)</span></th>
              <th style={{ padding: '0.75rem' }}>قیمت بازار <span style={{ whiteSpace: 'nowrap' }}>(<InlineMath math="P" />)</span></th>
              <th style={{ padding: '0.75rem' }}>سود بنگاه ۱ <span style={{ whiteSpace: 'nowrap' }}>(<InlineMath math="\pi_1" />)</span></th>
              <th style={{ padding: '0.75rem' }}>سود بنگاه ۲ <span style={{ whiteSpace: 'nowrap' }}>(<InlineMath math="\pi_2" />)</span></th>
              <th style={{ padding: '0.75rem' }}>سود کل <span style={{ whiteSpace: 'nowrap' }}>(<InlineMath math="\pi_T" />)</span></th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>شبه‌رقابتی</td>
              <td>48.00</td>
              <td>26.00</td>
              <td>74.00</td>
              <td>26.00</td>
              <td>576.0</td>
              <td>336.0</td>
              <td>912.0</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>تبانی (کارتل)</td>
              <td>26.86</td>
              <td>15.43</td>
              <td>42.29</td>
              <td>57.71</td>
              <td>1316.1</td>
              <td>769.5</td>
              <td style={{ color: 'var(--success)', fontWeight: 'bold' }}>2085.6</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>کورنو</td>
              <td>29.85</td>
              <td>23.38</td>
              <td>53.23</td>
              <td>46.77</td>
              <td>1113.7</td>
              <td>818.2</td>
              <td>1931.9</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>استاکلبرگ (۱ رهبر)</td>
              <td style={{ color: 'var(--success)' }}>35.27</td>
              <td style={{ color: 'var(--danger)' }}>21.58</td>
              <td>56.85</td>
              <td>43.15</td>
              <td style={{ color: 'var(--success)' }}>1140.4</td>
              <td style={{ color: 'var(--danger)' }}>696.3</td>
              <td>1836.7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ color: "var(--text-muted)", fontSize: '0.85rem', lineHeight: "1.8", marginTop: "1rem" }}>
        <strong>تحلیل جدول:</strong> روش تبانی بالاترین قیمت و بیشترین سود مجموع را برای بنگاه‌ها فراهم می‌کند اما مصرف‌کننده در این حالت بیشترین ضرر را متحمل می‌شود. در روش شبه‌رقابتی، تولید در حداکثر میزان و قیمت در حداقل ممکن است که منجر به سود صفر اقتصادی در درازمدت می‌گردد. در مدل استاکلبرگ، بنگاه رهبر با تولید بیشتر سهم بازار و سود خود را نسبت به کورنو ارتقا می‌دهد، در حالی که سود و تولید بنگاه پیرو افت پیدا می‌کند.
      </p>

    </div>
  );
};

export default Subpage2;
