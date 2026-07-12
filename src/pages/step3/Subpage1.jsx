import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Scale, RefreshCw, BarChart2, Zap, HelpCircle, AlertCircle } from 'lucide-react';

const Subpage1 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Scale style={{ color: 'var(--primary)' }} />
        تعادل بازار و رقابت کامل
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        تعادل زمانی رخ می‌دهد که تمایل مصرف‌کننده برای خرید با تمایل تولیدکننده برای فروش هم‌راستا شود. در این نقطه، مقدار عرضه با مقدار تقاضا برابر است. اما مسئله مهم‌تر، پایداری تعادل است؛ یعنی اگر بازار به دلایلی از تعادل خارج شود، آیا مکانیسم درونی بازار آن را مجدداً به تعادل برمی‌گرداند یا خیر؟
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <RefreshCw size={20} />
        ۱. تفاوت‌های بنیادی دیدگاه تعادل مارشال و والراس
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', fontWeight: 'bold' }}>رویکرد والراسی (تنظیم با قیمت):</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            والراس اعتقاد داشت که قیمت عامل محرک تعادل است. اگر در بازار مازاد تقاضا داشته باشیم، خریداران قیمت را بالا می‌برند و اگر مازاد عرضه داشته باشیم، فروشندگان قیمت را کاهش می‌دهند:
          </p>
          <BlockMath math="E(P) = D(P) - S(P)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            - اگر <InlineMath math="E(P) > 0" /> باشد: قیمت صعودی است.
            <br />
            - اگر <InlineMath math="E(P) < 0" /> باشد: قیمت نزولی است.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontWeight: 'bold' }}>رویکرد مارشالی (تنظیم با مقدار):</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            مارشال مقدار تولید را عامل تنظیم‌کننده می‌دانست. اگر قیمت تقاضا (حداکثر تمایل به پرداخت) از قیمت عرضه بیشتر باشد، تولیدکننده مقدار تولید خود را زیاد می‌کند و بالعکس:
          </p>
          <BlockMath math="P_D(Q) \neq P_S(Q)" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
            - اگر <InlineMath math="P_D > P_S" /> باشد: مقدار تولید صعودی است.
            <br />
            - اگر <InlineMath math="P_D < P_S" /> باشد: مقدار تولید نزولی است.
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(59, 130, 246, 0.03)', borderRight: '4px solid var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <HelpCircle size={18} />
          شرط پایداری تعادل والراسی چیست؟
        </h4>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          تعادل والراسی در صورتی پایدار است که تغییرات مازاد تقاضا نسبت به قیمت منفی باشد. به عبارت دیگر، با افزایش قیمت، مازاد تقاضا کاهش یابد:
          <BlockMath math="\frac{d E(P)}{dP} = D'(P) - S'(P) < 0" />
          در بازارهای عادی با تقاضای نزولی (<InlineMath math="D' < 0" />) و عرضه صعودی (<InlineMath math="S' > 0" />)، این شرط همواره برقرار است.
        </div>
      </div>

      {/* Special Cases */}
      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)', marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--danger)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <AlertCircle size={18} />
          حالات خاص عدم وجود یا چندگانگی تعادل (صفحه ۸۱ جزوه):
        </h4>
        <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', margin: 0 }}>
          <li>
            <strong>کالاهای مجانی (Free Goods):</strong> زمانی رخ می‌دهد که در قیمت صفر نیز عرضه بیشتر از تقاضا باشد (مثل اکسیژن در جو). نقطه تعادل ریاضی در قیمت صفر خواهد بود.
          </li>
          <li style={{ marginTop: '0.5rem' }}>
            <strong>کالاهای فوق‌لوکس (Luxury Goods):</strong> در این حالت، حتی در پایین‌ترین قیمت ممکن عرضه نیز تقاضا صفر است (تقاضا و عرضه با هم متقاطع نمی‌شوند)، بنابراین هیچ تعادلی شکل نمی‌گیرد (مثل بلیط گردشگری خصوصی به فضا).
          </li>
          <li style={{ marginTop: '0.5rem' }}>
            <strong>چند تعادل همزمان:</strong> اگر توابع عرضه یا تقاضا غیرخطی و نوسانی باشند، ممکن است چند تعادل متقاطع داشته باشیم که برخی به صورت متناوب پایدار و ناپایدار هستند.
          </li>
        </ul>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BarChart2 size={20} />
        ۲. تعادل پویای بازار (با وقفه و پیوسته)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        وقتی عامل <strong>زمان (Time)</strong> وارد مدل می‌شود، متغیرها به صورت پویا (پیوسته یا گسسته) رفتار می‌کنند:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Cobweb Model */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>الف) مدل تار عنکبوتی (با وقفه / گسسته)</h4>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            این مدل مخصوص بازارهایی با دوره تولید طولانی (مثل کشاورزی) است. عرضه امسال بر اساس قیمت دوره قبل شکل می‌گیرد، در حالی که تقاضای امسال به قیمت امسال بستگی دارد:
            <BlockMath math="\begin{cases} D_t = aP_t + b \\ S_t = AP_{t-1} + B \end{cases}" />
            با مساوی قرار دادن عرضه و تقاضا، معادله تفاضلی قیمت حاصل می‌شود. شرط همگرایی قیمت به تعادل این است که قدر مطلق شیب تقاضا بیشتر از عرضه باشد:
            <BlockMath math="|a| > A" />
          </div>
        </div>

        {/* Continuous Dynamic */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>ب) تعادل پویا پیوسته (حل دیفرانسیلی)</h4>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            سرعت تغییر قیمت در طول زمان متناسب با میزان مازاد تقاضا در هر لحظه است (صفحه ۸۷ جزوه):
            <BlockMath math="\frac{dP}{dt} = k \cdot E(P_t) = k(D_t - S_t)" />
            با توابع خطی <InlineMath math="D_t = a P_t + b" /> و <InlineMath math="S_t = A P_t + B" />، معادله دیفرانسیل به شکل زیر حاصل می‌شود:
            <BlockMath math="\frac{dP}{dt} - k(a - A) P_t = k(b - B)" />
            با اعمال عامل انتگرال‌ساز <InlineMath math="e^{-k(a-A)t}" /> و انتگرال‌گیری، مسیر قیمت به شکل زیر است:
            <BlockMath math="P_t = P_e + (P_0 - P_e) \cdot e^{k(a-A)t}" />
            قیمت زمانی به قیمت تعادلی <InlineMath math="P_e" /> همگرا می‌شود که داشته باشیم <InlineMath math="a - A < 0" /> که با توجه به نزولی بودن تقاضا (<InlineMath math="a<0" />) و صعودی بودن عرضه (<InlineMath math="A>0" />) این شرط همواره برقرار است.
          </div>
        </div>
      </div>

      {/* Comparative analysis */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2.5rem', background: 'rgba(255, 255, 255, 0.02)' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'center', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.75rem' }}>
          تحلیل مقایسه‌ای سه نوع پایداری در مدل تار عنکبوتی (صفحه ۸۳ جزوه)
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '4px solid var(--success)', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(16, 185, 129, 0.02)' }}>
            <h5 style={{ color: 'var(--success)', marginBottom: '0.75rem', fontWeight: 'bold' }}>۱. پایداری همگرا (نوسانات میرا)</h5>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: '1.6', textAlign: 'justify', margin: 0, minHeight: '65px' }}>
                اگر قدر مطلق شیب تقاضا بیشتر از شیب عرضه باشد (<InlineMath math="|a| > A" />)، نوسانات قیمت به مرور ضعیف شده و قیمت به تعادل متمایل می‌شود.
              </p>
              <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90px', height: '90px' }}>
                <img src="/svg/81-nemodar.svg" alt="پایداری همگرا" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '4px solid var(--warning)', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(245, 158, 11, 0.02)' }}>
            <h5 style={{ color: 'var(--warning)', marginBottom: '0.75rem', fontWeight: 'bold' }}>۲. نوسان مستمر (خنثی)</h5>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: '1.6', textAlign: 'justify', margin: 0, minHeight: '65px' }}>
                اگر قدر مطلق شیب تقاضا با شیب عرضه برابر باشد (<InlineMath math="|a| = A" />)، دامنه نوسان قیمت ثابت مانده و نوسان مستمر دور تعادل ایجاد می‌شود.
              </p>
              <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90px', height: '90px' }}>
                <img src="/svg/82-nemodar.svg" alt="نوسانات مستمر خنثی" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '4px solid var(--danger)', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(239, 68, 68, 0.02)' }}>
            <h5 style={{ color: 'var(--danger)', marginBottom: '0.75rem', fontWeight: 'bold' }}>۳. پایداری واگرا (نوسانات فزاینده)</h5>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: '1.6', textAlign: 'justify', margin: 0, minHeight: '65px' }}>
                اگر قدر مطلق شیب تقاضا کمتر از شیب عرضه باشد (<InlineMath math="|a| < A" />)، دامنه نوسان قیمت سال به سال افزایش یافته و از تعادل دور می‌شود.
              </p>
              <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90px', height: '90px' }}>
                <img src="/svg/83-nemodar.svg" alt="پایداری واگرا" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Zap size={20} />
        ۳. بازار رقابت کامل (Perfect Competition)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        این بازار مظهر کارایی کامل در اقتصاد است که بنگاه‌ها در آن قیمت‌پذیر هستند:
      </p>

      <div className="glass-panel" style={{ padding: '1.5rem', borderColor: 'var(--primary)', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>شرط تعادل بهینه در کوتاه‌مدت:</h4>
        <BlockMath math="\text{Max } \pi = P \cdot Q - TC" />
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>شرط مرتبه اول (FOC):</strong> مشتق اول سود نسبت به مقدار برابر صفر:
            <BlockMath math="P = MC" />
          </li>
          <li>
            <strong>شرط مرتبه دوم (SOC):</strong> مشتق دوم منفی (شیب هزینه نهایی باید مثبت و صعودی باشد):
            <BlockMath math="\frac{\partial MC}{\partial Q} > 0" />
          </li>
        </ol>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>نقطه تعطیلی بنگاه (Shutdown Point)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
            اگر قیمت بازار از حداقل هزینه متغیر متوسط (AVC) کمتر شود، بنگاه برای کاهش زیان کل، تولید خود را به طور کامل متوقف می‌کند. در این حالت، زیان بنگاه فقط برابر هزینه‌های ثابت (FC) خواهد بود.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تعادل بلندمدت رقابت کامل</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
            به دلیل ورود آزادانه بنگاه‌های جدید در صورت وجود سود، یا خروج بنگاه‌ها در صورت وجود زیان، در بلندمدت سود اقتصادی کل صفر می‌شود:
            <BlockMath math="P = LMC = \text{Min } LAC" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subpage1;
