import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Users, ShieldAlert, Award, Lightbulb, HelpCircle } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Users style={{ color: 'var(--primary)' }} />
        ۲. مدل‌های الیگوپولی با کالای همگن
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        در انحصار چندجانبه (الیگوپولی) با کالای همگن، مصرف‌کنندگان هیچ تفاوتی بین محصولات بنگاه‌های مختلف قائل نمی‌شوند. بنابراین، تنها یک قیمت واحد بر بازار حاکم است که بر اساس مجموع تولید تمام بنگاه‌ها تعیین می‌شود. در این بخش، مدل‌های کلاسیک را با یک مثال عددی مشترک بررسی و مقایسه می‌کنیم.
      </p>

      {/* Guide Box for solving Cournot & Stackelberg */}
      <div className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(16, 185, 129, 0.03)', borderRight: '4px solid var(--success)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--success)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Lightbulb size={18} />
          راهنمای گام‌به‌گام برای حل مسائل کورنو و استاکلبرگ:
        </h4>
        <ol style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          <li><strong>روش حل کورنو:</strong> سود هر بنگاه را بنویسید (با قرار دادن <InlineMath math="Q = q_1 + q_2" />). مشتق سود نسبت به تولید خود بنگاه را برابر صفر قرار داده و تابع عکس‌العمل (<InlineMath math="q_1 = f(q_2)" />) را استخراج کنید. با حل همزمان توابع عکس‌العمل هر دو بنگاه، تعادل کورنو حاصل می‌شود.</li>
          <li style={{ marginTop: '0.5rem' }}><strong>روش حل استاکلبرگ:</strong> ابتدا تابع عکس‌العمل بنگاه پیرو (مثلاً بنگاه ۲) را پیدا کنید. سپس این تابع عکس‌العمل را مستقیماً به جای <InlineMath math="q_2" /> در تابع سود بنگاه رهبر (بنگاه ۱) جایگذاری کنید. در نهایت با مشتق‌گیری نسبت به <InlineMath math="q_1" />، تولید بهینه رهبر را پیدا کنید.</li>
        </ol>
      </div>

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
            مدل رهبر-پیرو. بنگاه رهبر با شناخت کامل از واکنش بنگاه پیرو، تابع عکس‌العمل او را در تابع سود خود جایگذاری کرده و سود خود را حداکثر می‌کند.
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
              قیمت بازار برابر با هزینه نهایی هر بنگاه است:
              <BlockMath math="P = MC_1 \implies 100 - q_1 - q_2 = 0.5 q_1 + 2 \implies 1.5 q_1 + q_2 = 98" />
              <BlockMath math="P = MC_2 \implies 100 - q_1 - q_2 = q_2 \implies q_1 + 2 q_2 = 100" />
              با حل این دستگاه دو معادله و دو مجهول، مقادیر تعادلی حاصل می‌شوند:
              <BlockMath math="q_1 = 48 \quad , \quad q_2 = 26 \implies Q = 74" />
              قیمت بازار: <InlineMath math="P = 100 - 74 = 26" />
              <br />
              سودها: 
              <BlockMath math="\pi_1 = (26 \times 48) - \left[\frac{1}{4}(48^2) + 2(48)\right] = 576" />
              <BlockMath math="\pi_2 = (26 \times 26) - \left[\frac{1}{2}(26^2) + 2\right] = 336" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--primary)' }}>
            <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>۲) حل به روش تبانی/کارتل (صفحه ۱۱۰-۱۱۱):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              درآمد نهایی بازار از روی درآمد کل به دست می‌آید: <InlineMath math="TR = (100-Q)Q \implies MR = 100 - 2Q" />.
              شرط تعادل کارتل برابر است با: <InlineMath math="MR = MC_1 = MC_2" />
              <BlockMath math="MC_1 = MC_2 \implies 0.5 q_1 + 2 = q_2" />
              <BlockMath math="MR = MC_2 \implies 100 - 2(q_1 + q_2) = q_2 \implies 100 - 2q_1 - 3q_2 = 0" />
              با جایگذاری رابطه اول در دومی:
              <BlockMath math="100 - 2q_1 - 3(0.5 q_1 + 2) = 0 \implies 3.5 q_1 = 94 \implies q_1 \approx 26.86 \quad , \quad q_2 \approx 15.43" />
              مقدار کل: <InlineMath math="Q \approx 42.29" /> و قیمت بازار: <InlineMath math="P \approx 57.71" />
              <br />
              سودها:
              <BlockMath math="\pi_1 = (57.71 \times 26.86) - 233.99 \approx 1316.1" />
              <BlockMath math="\pi_2 = (57.71 \times 15.43) - 121.04 \approx 769.5" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--warning)' }}>
            <h5 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontWeight: 'bold' }}>۳) حل به روش کورنو (صفحه ۱۱۲):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              سود هر بنگاه را با فرض ثبات تولید رقیب حداکثر می‌کنیم:
              <BlockMath math="\pi_1 = (100 - q_1 - q_2) q_1 - (\frac{1}{4} q_1^2 + 2 q_1) \implies \frac{\partial \pi_1}{\partial q_1} = 98 - 2.5 q_1 - q_2 = 0 \implies q_1 = \frac{98 - q_2}{2.5}" />
              <BlockMath math="\pi_2 = (100 - q_1 - q_2) q_2 - (\frac{1}{2} q_2^2 + 2) \implies \frac{\partial \pi_2}{\partial q_2} = 100 - q_1 - 3 q_2 = 0 \implies q_2 = \frac{100 - q_1}{3}" />
              با حل همزمان این توابع عکس‌العمل:
              <BlockMath math="q_1 \approx 29.85 \quad , \quad q_2 \approx 23.38 \implies Q \approx 53.23" />
              قیمت بازار: <InlineMath math="P \approx 46.77" />
              <br />
              سودها: <InlineMath math="\pi_1 \approx 1113.7" /> و <InlineMath math="\pi_2 \approx 818.2" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--danger)' }}>
            <h5 style={{ color: 'var(--danger)', marginBottom: '0.5rem', fontWeight: 'bold' }}>۴) حل به روش استاکلبرگ (بنگاه ۱ رهبر، ۲ پیرو - صفحه ۱۱۳-۱۱۴):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              بنگاه پیرو (بنگاه ۲) بر اساس تابع عکس‌العمل کورنو عمل می‌کند: <InlineMath math="q_2 = \frac{100 - q_1}{3}" />.
              رهبر (بنگاه ۱) این واکنش را در سود خود لحاظ می‌کند:
              <BlockMath math="\pi_1 = \left( 100 - q_1 - \frac{100 - q_1}{3} \right) q_1 - \left( \frac{1}{4} q_1^2 + 2 q_1 \right) \approx 64.67 q_1 - 0.9167 q_1^2" />
              حداکثرسازی سود رهبر:
              <BlockMath math="\frac{\partial \pi_1}{\partial q_1} = 64.67 - 1.8333 q_1 = 0 \implies q_1 \approx 35.27" />
              تولید پیرو: <InlineMath math="q_2 = \frac{100 - 35.27}{3} \approx 21.58" />
              <br />
              مقدار کل: <InlineMath math="Q \approx 56.85" /> و قیمت بازار: <InlineMath math="P \approx 43.15" />
              <br />
              سودها: <InlineMath math="\pi_1 \approx 1140.4" /> و <InlineMath math="\pi_2 \approx 696.3" />
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Analysis and Proofs Section */}
      <h3 style={{ color: 'var(--primary)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Award size={20} style={{ color: 'var(--primary)' }} />
        ۳. تحلیل‌های پیشرفته و اثبات‌های ریاضی الیگوپولی مقداری
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Cournot Convergence Proof */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)', background: 'rgba(255, 255, 255, 0.01)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>الف) اثبات ریاضی همگرایی مدل کورنو به رقابت کامل در حالت <InlineMath math="n \to \infty" /></h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            فرض کنید در بازاری با تقاضای معکوس خطی <InlineMath math="P = a - bQ" />، تعداد <InlineMath math="n" /> بنگاه همسان با هزینه نهایی یکسان و ثابت <InlineMath math="MC" /> حضور دارند. سود بنگاه <InlineMath math="i" /> به صورت زیر تعریف می‌شود:
            <BlockMath math="\pi_i = \left( a - b \sum_{j=1}^n q_j - MC \right) q_i" />
            شرط مرتبه اول (FOC) برای بیشینه‌سازی سود بنگاه <InlineMath math="i" />:
            <BlockMath math="\frac{\partial \pi_i}{\partial q_i} = a - b \sum_{j \neq i} q_j - 2bq_i - MC = 0 \implies P - MC = b q_i" />
            از آنجا که بنگاه‌ها همسان هستند، در تعادل داریم <InlineMath math="q_1 = q_2 = \dots = q_n = q^*" /> و مقدار کل تولید <InlineMath math="Q = n q^*" /> است. با جایگذاری در رابطه فوق:
            <BlockMath math="P^* - MC = b \left( \frac{Q^*}{n} \right) \implies P^* - MC = \frac{a - P^*}{n}" />
            با حل این رابطه برای قیمت تعادلی بازار (<InlineMath math="P^*" />) خواهیم داشت:
            <BlockMath math="P^*(1 + n) = a + n MC \implies P^* = \frac{a}{1+n} + \frac{n}{1+n} MC" />
            اکنون با حد گرفتن از قیمت تعادلی هنگامی که تعداد بنگاه‌ها به سمت بی‌نهایت میل می‌کند (<InlineMath math="n \to \infty" />):
            <BlockMath math="\lim_{n \to \infty} P^* = \lim_{n \to \infty} \left( \frac{a}{1+n} + \frac{n}{1+n} MC \right) = 0 + 1 \cdot MC = MC" />
            به طور مشابه، تولید کل تعادلی بازار برابر است با:
            <BlockMath math="Q^* = \frac{n}{n+1} \left( \frac{a - MC}{b} \right) \implies \lim_{n \to \infty} Q^* = \frac{a - MC}{b}" />
            که این نتایج دقیقاً منطبق بر قیمت و مقدار تولید در بازار رقابت کامل است. بنابراین، با افزایش تعداد رقبای کورنو، بازار به رقابت کامل همگرا می‌شود.
          </p>
        </div>

        {/* Stackelberg Warfare / Disequilibrium */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)', background: 'rgba(255, 255, 255, 0.01)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>ب) تحلیل حالت عدم تعادل استاکلبرگ (Stackelberg Warfare)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در مدل استاندارد استاکلبرگ فرض می‌شود یکی از بنگاه‌ها نقش «رهبر» و دیگری نقش «پیرو» را ایفا می‌کند. اما اگر تقارن اطلاعاتی وجود داشته باشد یا هر دو بنگاه خود را قوی‌تر فرض کنند، **عدم تعادل یا جنگ استاکلبرگ (Stackelberg Warfare)** رخ می‌دهد. در این حالت:
          </p>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', listStyleType: 'disc' }}>
            <li>هر دو بنگاه تمایل دارند نقش رهبر را بازی کنند و هر کدام فرض می‌کند که رقیبش پیرو خواهد بود.</li>
            <li>بنابراین بنگاه ۱ مقدار تولید رهبری خود (<InlineMath math="q_1^L" />) و بنگاه ۲ نیز مقدار تولید رهبری خود (<InlineMath math="q_2^L" />) را وارد بازار می‌کنند.</li>
            <li>در نتیجه، تولید کل در بازار بسیار بیشتر از تعادل کورنو و استاکلبرگ پایدار می‌شود (<InlineMath math="Q = q_1^L + q_2^L" />).</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
            این مازاد عرضه شدید، قیمت بازار را به شدت کاهش داده و سود هر دو بنگاه را به شدت افت می‌دهد. این وضعیت ناپایدار است و بنگاه‌ها ناچارند یا از طریق ادغام/تبانی به کارتل روی آورند یا یکی از آن‌ها شکست را پذیرفته و به عنوان پیرو عمل کند.
          </p>
        </div>

        {/* Critique of Cournot */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)', background: 'rgba(255, 255, 255, 0.01)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>ج) نقد مدل کورنو (Cournot Critique)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            مدل کورنو به دلیل چند فرض غیرواقع‌بینانه مورد نقد جدی قرار گرفته است:
          </p>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', listStyleType: 'decimal' }}>
            <li>
              <strong>فرض ثابت بودن تولید رقیب (Naive Expectations):</strong> هسته اصلی مدل کورنو این فرض است که بنگاه‌ها معتقدند تغییر تولید آن‌ها تأثیری روی مقدار تولید رقیب نخواهد داشت (<InlineMath math="\partial q_j / \partial q_i = 0" />). در واقعیت، بنگاه‌ها کوته‌فکر نیستند و رفتار واکنشی رقیب را رصد می‌کنند.
            </li>
            <li>
              <strong>عدم پویایی واقعی زمان:</strong> تصمیم‌گیری در مدل کورنو به صورت همزمان فرض می‌شود، در حالی که در دنیای واقعی بنگاه‌ها تصمیمات خود را به صورت متوالی اتخاذ می‌کنند.
            </li>
          </ul>
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Award size={20} />
        ۴. جدول مقایسه‌ای نتایج سناریوها
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
        <strong>تحلیل جدول:</strong> روش تبانی بالاترین قیمت و بیشترین سود مجموع را برای بنگاه‌ها فراهم می‌کند اما مصرف‌کننده بیشترین ضرر را متحمل می‌شود. در روش شبه‌رقابتی، تولید در حداکثر میزان و قیمت در حداقل ممکن است. در مدل استاکلبرگ، بنگاه رهبر با تولید بیشتر، سهم بازار و سود خود را نسبت به کورنو ارتقا می‌دهد، در حالی که سود و تولید بنگاه پیرو افت پیدا می‌کند.
      </p>

    </div>
  );
};

export default Subpage2;
