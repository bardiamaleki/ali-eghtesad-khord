import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Crown, SplitSquareHorizontal, Factory, ShieldAlert, Calculator } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Crown style={{ color: 'var(--primary)' }} />
        انحصار کامل فروش (Monopoly) و تبعیض قیمت
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برخلاف بازار رقابت کامل که در آن بنگاه <strong>قیمت‌گیر</strong> است، در بازار انحصار کامل فروش تنها <strong>یک بنگاه</strong> تمام تقاضای بازار را تامین می‌کند. بنابراین، انحصارگر <strong>قیمت‌گذار</strong> است و با منحنی تقاضای نزولی بازار مواجه می‌شود (یعنی برای فروش بیشتر، باید قیمت را کاهش دهد).
      </p>

      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.5rem' }}>درآمد نهایی در انحصار:</p>
        <BlockMath math="MR = \frac{\partial TR}{\partial Q} = P + Q \frac{\partial P}{\partial Q} \quad \implies \quad MR < P" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem' }}>
          چون شیب تقاضا (<InlineMath math="\partial P / \partial Q" />) منفی است، درآمد نهایی همیشه کمتر از قیمت است.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)', marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>ارتباط درآمد نهایی و کشش قیمتی تقاضا (آموروزو - رابینسون)</h4>
        <BlockMath math="MR = P \left( 1 - \frac{1}{|e_p|} \right)" />
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '0.5rem' }}>
          <li>اگر <InlineMath math="|e_p| > 1" /> (باکشش): <InlineMath math="MR > 0" />. انحصارگر همیشه در این ناحیه تولید می‌کند.</li>
          <li>اگر <InlineMath math="|e_p| = 1" /> (کشش واحد): <InlineMath math="MR = 0" />. درآمد کل (TR) ماکزیمم است.</li>
          <li>اگر <InlineMath math="|e_p| < 1" /> (کم‌کشش): <InlineMath math="MR < 0" />. تولید در این ناحیه غیرمنطقی است.</li>
        </ul>
      </div>

      {/* Why Monopoly has no supply curve */}
      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)', marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>چرا انحصارگر منحنی عرضه ندارد؟ (فقط نقطه عرضه دارد)</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <strong>توضیح شهودی و ریاضی:</strong> در بازار رقابت کامل، بنگاه‌ها قیمت‌گیر هستند و یک رابطه یک‌به‌یک بین هر سطح قیمت بازار و مقدار تولید بهینه بنگاه وجود دارد که «منحنی عرضه» را شکل می‌دهد. اما در بازار انحصار کامل، انحصارگر قیمت‌گذار است و با منحنی تقاضای نزولی مواجه است. تصمیم تولید او نه تنها به هزینه نهایی (<InlineMath math="MC" />) بلکه به کشش تقاضا و شیب منحنی تقاضا بستگی دارد.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
          این امر موجب می‌شود که:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8', listStyleType: 'disc' }}>
          <li>با تغییر در تقاضا، ممکن است انحصارگر <strong>یک مقدار مشخص از کالا را با دو قیمت متفاوت</strong> عرضه کند.</li>
          <li>یا بالعکس، <strong>دو مقدار متفاوت از کالا را با یک قیمت واحد</strong> در بازار عرضه نماید.</li>
        </ul>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
          از آنجا که رابطه یکتا و منحصر‌به‌فردی بین قیمت و مقدار عرضه وجود ندارد، مفهومی به نام منحنی عرضه در انحصار معنی ندارد. انحصارگر صرفاً یک <strong>نقطه عرضه (Supply Point)</strong> دارد که حاصل تقاطع منحنی درآمد نهایی و هزینه نهایی (<InlineMath math="MR = MC" />) و تصویر آن روی منحنی تقاضا است.
        </p>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <SplitSquareHorizontal size={20} />
        تبعیض قیمت (Price Discrimination)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        گاهی انحصارگر می‌تواند یک کالای مشخص را با <strong>قیمت‌های متفاوت</strong> به مصرف‌کنندگان مختلف بفروشد (بدون آنکه تفاوت قیمت ناشی از تفاوت در هزینه تولید باشد). شرط اساسی این است که بازارهای خریداران قابل تفکیک بوده و امکان آربیتراژ (خرید ارزان و فروش گران) وجود نداشته باشد.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>تبعیض قیمت درجه اول (کامل)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            انحصارگر دقیقاً می‌داند هر مصرف‌کننده حداکثر چقدر حاضر است بپردازد و کالا را دقیقاً به همان قیمت می‌فروشد. در این حالت <strong>مازاد مصرف‌کننده (CS) برابر صفر می‌شود</strong> و تمام رفاه به شکل سود به انحصارگر می‌رسد.
          </p>
          <BlockMath math="\text{Max } \pi = \int_0^Q f(q) dq - TC(Q) \quad \implies P = MC" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تبعیض قیمت درجه دوم (بلوکی/پله‌ای)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            قیمت بر اساس حجم خرید تعیین می‌شود. مصرف‌کنندگانی که حجم بیشتری می‌خرند، قیمت کمتری بابت واحدهای اضافی می‌پردازند (مثل قبض برق یا بسته‌های اینترنت).
          </p>
          <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
            <h5 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>مثال عددی کامل تبعیض قیمت درجه دوم (بلوکی):</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              فرض کنید انحصارگر با تابع تقاضای معکوس <InlineMath math="P = 20 - Q" /> و هزینه نهایی ثابت <InlineMath math="MC = 4" /> روبروست. انحصارگر تصمیم می‌گیرد ساختار قیمت‌گذاری بلوکی زیر را اعمال کند:
            </p>
            <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              <li><strong>بلوک اول (پله اول):</strong> فروش ۶ واحد اول با قیمت <InlineMath math="P_1 = 15" /> واحد.</li>
              <li><strong>بلوک دوم (پله دوم):</strong> فروش ۶ واحد بعدی (از واحد ۷ تا ۱۲) با قیمت <InlineMath math="P_2 = 10" /> واحد.</li>
            </ul>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', marginTop: '0.5rem' }}>
              <strong>تحلیل سود و درآمد انحصارگر:</strong>
            </p>
            <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', listStyleType: 'square' }}>
              <li>درآمد حاصل از بلوک اول: <InlineMath math="TR_1 = 6 \times 15 = 90" /> واحد</li>
              <li>درآمد حاصل از بلوک دوم: <InlineMath math="TR_2 = (12 - 6) \times 10 = 6 \times 10 = 60" /> واحد</li>
              <li>درآمد کل: <InlineMath math="TR_{total} = TR_1 + TR_2 = 90 + 60 = 150" /> واحد</li>
              <li>هزینه کل برای تولید ۱۲ واحد کالا: <InlineMath math="TC = MC \times Q = 4 \times 12 = 48" /> واحد</li>
              <li>سود کل انحصارگر: <InlineMath math="\pi = TR_{total} - TC = 150 - 48 = 102" /> واحد</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تبعیض قیمت درجه سوم (چند بازاری)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            بازار به گروه‌های مشخص (مثل دانشجویان و افراد عادی، یا بازار داخلی و خارجی) تقسیم می‌شود. شرط تعادل این است که <strong>درآمد نهایی در تمام بازارها برابر با هزینه نهایی تولید باشد</strong>:
          </p>
          <BlockMath math="MR_1 = MR_2 = MC" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
            با استفاده از رابطه آموروزو-رابینسون اثبات می‌شود که بازاری که <strong>کشش تقاضای بیشتری</strong> دارد، <strong>قیمت کمتری</strong> دریافت می‌کند (<InlineMath math="e_1 > e_2 \implies P_1 < P_2" />).
          </p>
        </div>
      </div>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calculator size={18} />
          مثال عددی: مقایسه انحصار ساده و تبعیض قیمت کامل
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع تقاضا <InlineMath math="P = 100 - 4Q" /> و تابع هزینه <InlineMath math="TC = 20Q + 50" /> است. (بنابراین <InlineMath math="MC = 20" />)
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div>
            <p style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>حالت ۱: بدون تبعیض (انحصار ساده)</p>
            <BlockMath math="TR = 100Q - 4Q^2 \implies MR = 100 - 8Q" />
            <BlockMath math="MR = MC \implies 100 - 8Q = 20 \implies Q = 10" />
            <BlockMath math="P = 100 - 4(10) = 60" />
            <BlockMath math="\pi = (60 \times 10) - (20(10)+50) = 350" />
          </div>
          <div>
            <p style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>حالت ۲: تبعیض قیمت درجه اول</p>
            <BlockMath math="P = MC \implies 100 - 4Q = 20 \implies Q = 20" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center' }}>درآمد برابر سطح زیر منحنی تقاضا است:</p>
            <BlockMath math="TR = \int_0^{20} (100 - 4Q) dQ = \left[ 100Q - 2Q^2 \right]_0^{20} = 1200" />
            <BlockMath math="\pi = 1200 - (20(20)+50) = 750" />
          </div>
        </div>
        <p style={{ color: 'var(--success)', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
          نتیجه: با تبعیض قیمت کامل، انحصارگر سود خود را به شدت افزایش می‌دهد (<InlineMath math="350 \to 750" />).
        </p>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Factory size={20} />
        انحصارگر چندکارخانه‌ای و محصولات مرتبط
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        گاهی انحصارگر یک محصول را در چند کارخانه با ساختار هزینه‌ای متفاوت تولید می‌کند (مثل تولید خودرو در تهران و مشهد). در این حالت، انحصارگر تولید را بین کارخانه‌ها طوری تقسیم می‌کند که <strong>هزینه نهایی همه کارخانه‌ها برابر با درآمد نهایی بازار شود</strong>.
      </p>

      <div className="formula-box">
        <BlockMath math="MR = MC_1 = MC_2 = \dots = MC_n" />
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)', marginTop: '1.5rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldAlert size={18} />
          کالاهای جانشین و مکمل در انحصار
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          اگر انحصارگر دو کالای مجزا اما مرتبط تولید کند، تغییر تولید یک کالا روی درآمد کالای دیگر اثر می‌گذارد (اثر متقاطع درآمدی):
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <li>اگر دو کالا <strong>مکمل</strong> باشند (مثل خودکار و جوهر): <InlineMath math="\frac{\partial TR_1}{\partial q_2} > 0" /></li>
          <li>اگر دو کالا <strong>جانشین</strong> باشند (مثل پپسی و میراندا): <InlineMath math="\frac{\partial TR_1}{\partial q_2} < 0" /></li>
        </ul>
        <BlockMath math="\text{FOC:} \quad \frac{\partial TR_1}{\partial q_1} + \frac{\partial TR_2}{\partial q_1} = MC_1" />
      </div>

    </div>
  );
};

export default Subpage2;
