import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Scale, RefreshCw, BarChart2, Zap } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Scale style={{ color: 'var(--primary)' }} />
        تعادل بازار و رقابت کامل
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در اقتصاد خرد، تعادل زمانی رخ می‌دهد که عرضه و تقاضا برابر شوند. اگر از تعادل خارج شویم، نیروهای بازار ما را مجدداً به تعادل برمی‌گردانند. اما اینکه این بازگشت به چه شکلی و با چه سرعتی رخ دهد، بحث <strong>پایداری تعادل (Stability of Equilibrium)</strong> را مطرح می‌کند.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <RefreshCw size={20} />
        ۱. تفاوت دیدگاه مارشال و والراس در تعادل
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تعادل والراسی (Walrasian)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            لئون والراس <strong>قیمت (Price)</strong> را عامل تنظیم‌کننده بازار می‌دانست. در این دیدگاه، اگر مازاد عرضه داشته باشیم، قیمت‌ها کاهش می‌یابند تا بازار تسویه شود. 
          </p>
          <BlockMath math="E(P) = D(P) - S(P)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            مازاد تقاضا (<InlineMath math="E(P) > 0" />) باعث افزایش قیمت می‌شود.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تعادل مارشالی (Marshallian)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            آلفرد مارشال <strong>مقدار (Quantity)</strong> را عامل تنظیم‌کننده می‌دانست. تولیدکنندگان بر اساس تفاوت قیمت تقاضا و قیمت عرضه، مقدار تولید خود را تنظیم می‌کنند.
          </p>
          <BlockMath math="P_D(Q) \neq P_S(Q)" />
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderLeft: '4px solid var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>شرط پایداری تعادل والراسی:</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          تعادل والراسی زمانی باثبات (پایدار) است که شیب منحنی عرضه بزرگتر از شیب منحنی تقاضا باشد:
        </p>
        <BlockMath math="\delta = D'(p) - S'(p) < 0 \quad \text{(شیب تقاضا منهای شیب عرضه منفی باشد)}" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>به زبان ساده: در قیمت‌های بالاتر از تعادل، باید مازاد عرضه داشته باشیم و در قیمت‌های پایین‌تر، مازاد تقاضا.</p>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--accent)', marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>حالت‌های خاص عدم وجود یا چندگانگی تعادل (صفحه ۸۱ جزوه):</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          در برخی بازارهای واقعی ممکن است نقطه تقاطع عرضه و تقاضا تشکیل نشود یا در قیمت‌های خاصی باشد:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
          <li><strong>کالاهای مجانی (Free Goods):</strong> اگر در قیمت صفر، عرضه بیشتر از تقاضا باشد، کالا به عنوان کالای مجانی توزیع می‌شود (مثل اکسیژن در محیط طبیعی) و تعادل در قیمت صفر رخ می‌دهد.</li>
          <li><strong>کالاهای فوق‌لوکس (Luxury Goods):</strong> اگر حتی در حداقل قیمت عرضه، تقاضا صفر باشد (منحنی تقاضا کاملاً سمت چپ منحنی عرضه قرار گیرد)، هیچ تعادلی شکل نمی‌گیرد (مثل فضاپیماهای تفریحی خصوصی).</li>
          <li><strong>چندین نقطه تعادل:</strong> اگر منحنی‌های عرضه و تقاضا غیرخطی و مواج باشند، ممکن است چندین نقطه تعادل متقاطع داشته باشیم که برخی پایدار و برخی ناپایدار هستند.</li>
        </ul>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BarChart2 size={20} />
        ۲. تعادل پویای بازار (با وقفه و پیوسته)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        وقتی <strong>زمان (Time)</strong> وارد مدل می‌شود، تعادل از حالت ایستا به پویا تبدیل می‌گردد. در اینجا بررسی می‌کنیم که آیا مسیر حرکت قیمت در طول زمان به سمت تعادل همگرا می‌شود یا خیر.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>الف) مدل تار عنکبوتی (با وقفه / گسسته)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            مخصوص محصولات کشاورزی. عرضه امسال بر اساس قیمت سال گذشته شکل می‌گیرد، اما تقاضا به قیمت امسال بستگی دارد.
          </p>
          <BlockMath math="\begin{cases} D_t = aP_t + b \\ S_t = AP_{t-1} + B \end{cases}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
            از حل معادلات تفاضلی مرتبه اول به مسیر قیمت می‌رسیم. شرط همگرایی (تعادل پایدار) این است که شیب تقاضا (قدر مطلق) از شیب عرضه کمتر باشد:
          </p>
          <BlockMath math="a < A \quad (\text{یا در واقع } |a| < A)" />
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>ب) تعادل پویا پیوسته (حل دیفرانسیل با عامل انتگرال‌ساز)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            سرعت تغییر قیمت، متناسب با میزان مازاد تقاضا در همان لحظه است (صفحه ۸۷ جزوه):
          </p>
          <BlockMath math="\frac{dP}{dt} = k \cdot E(P_t) = k(D_t - S_t)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
            با فرض توابع تقاضا و عرضه خطی <InlineMath math="D_t = a P_t + b" /> و <InlineMath math="S_t = A P_t + B" />، معادله دیفرانسیل به شکل زیر در می‌آید:
            <BlockMath math="\frac{dP}{dt} - k(a - A) P_t = k(b - B)" />
            عامل انتگرال‌ساز برای حل این معادله مرتبه اول عبارت است از <InlineMath math="e^{-k(a-A)t}" />. با ضرب طرفین در این عامل و انتگرال‌گیری، مسیر قیمت به دست می‌آید:
            <BlockMath math="P_t = P_e + (P_0 - P_e) \cdot e^{k(a-A)t}" />
            که در آن قیمت تعادلی پایدار <InlineMath math="P_e = \frac{B - b}{a - A}" /> است.
            زمانی که <InlineMath math="t \to \infty" />، اگر <InlineMath math="a - A < 0" /> باشد (چون شیب تقاضا <InlineMath math="a" /> منفی و عرضه <InlineMath math="A" /> مثبت است، این شرط همواره برقرار است)، قیمت به تعادل همگرا می‌شود.
          </p>
        </div>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Zap size={20} />
        ۳. بازار رقابت کامل (Perfect Competition)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بازار رقابت کامل یک مدل حدی و ایده‌آل است که خصوصیات زیر را دارد:
      </p>
      
      <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        <li>تعداد بسیار زیاد خریدار و فروشنده (بنگاه‌ها <strong>قیمت‌گیر</strong> هستند).</li>
        <li>کالای همگن (تمایزی بین محصول بنگاه‌ها وجود ندارد).</li>
        <li>ورود و خروج آزادانه به صنعت.</li>
        <li>اطلاعات کامل و شفاف.</li>
      </ul>

      <div className="glass-panel" style={{ padding: '1.5rem', borderColor: 'var(--primary)', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>شرایط تعادل بنگاه در کوتاه‌مدت:</h4>
        <BlockMath math="\text{Max } \pi = TR - TC = P \cdot Q - TC" />
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>شرط مرتبه اول (FOC):</strong> مشتق سود برابر صفر:
            <BlockMath math="P - \frac{\partial TC}{\partial Q} = 0 \implies P = MC" />
          </li>
          <li>
            <strong>شرط مرتبه دوم (SOC):</strong> مشتق دوم منفی (منحنی MC باید صعودی باشد):
            <BlockMath math="\frac{\partial^2 \pi}{\partial Q^2} < 0 \implies -\frac{\partial MC}{\partial Q} < 0 \implies \frac{\partial MC}{\partial Q} > 0" />
          </li>
        </ol>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>نقطه تعطیلی بنگاه (Shutdown Point)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            اگر قیمت از حداقل هزینه متغیر متوسط (AVC) کمتر شود، بنگاه تولید را متوقف می‌کند.
          </p>
          <BlockMath math="P \ge \text{Min } AVC" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>منحنی عرضه بنگاه در کوتاه‌مدت، همان منحنی MC از نقطه مینیمم AVC به بالا است.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تعادل بلندمدت رقابت کامل</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            به دلیل ورود و خروج آزادانه، در بلندمدت تمام سودهای اقتصادی صفر می‌شود (<InlineMath math="\pi = 0" />).
          </p>
          <BlockMath math="P = LMC = \text{Min } LAC" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>این تنها بازاری است که در آن کارایی اقتصادی به طور کامل محقق می‌شود.</p>
        </div>
      </div>

    </div>
  );
};

export default Subpage1;
