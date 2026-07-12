import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Crown, SplitSquareHorizontal, Factory, ShieldAlert, Calculator, Lightbulb, HelpCircle } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Crown style={{ color: 'var(--primary)' }} />
        انحصار کامل فروش (Monopoly) و تبعیض قیمت
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        برخلاف بازار رقابت کامل که در آن بنگاه <strong>قیمت‌گیر</strong> است، در بازار انحصار کامل فروش تنها <strong>یک بنگاه</strong> تمام تقاضای بازار را تامین می‌کند. بنابراین، انحصارگر <strong>قیمت‌گذار (Price Maker)</strong> است و با منحنی تقاضای نزولی بازار مواجه می‌شود (یعنی برای فروش بیشتر، باید قیمت را کاهش دهد).
      </p>

      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.5rem', fontWeight: 'bold' }}>رابطه درآمد نهایی در انحصار:</p>
        <BlockMath math="MR = \frac{\partial TR}{\partial Q} = P + Q \frac{\partial P}{\partial Q} \quad \implies \quad MR < P" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem' }}>
          چون شیب تقاضا (<InlineMath math="\partial P / \partial Q" />) منفی است، درآمد نهایی همیشه کمتر از قیمت کالا است.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)', marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <HelpCircle size={18} />
          ارتباط درآمد نهایی و کشش قیمتی تقاضا (فرمول آموروزو - رابینسون):
        </h4>
        <BlockMath math="MR = P \left( 1 - \frac{1}{|e_p|} \right)" />
        <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', lineHeight: '2', marginTop: '0.5rem', listStyleType: 'circle' }}>
          <li>اگر <InlineMath math="|e_p| > 1" /> (تقاضای باکشش): <InlineMath math="MR > 0" />. انحصارگر همیشه در این ناحیه تولید می‌کند.</li>
          <li>اگر <InlineMath math="|e_p| = 1" /> (کشش واحد): <InlineMath math="MR = 0" />. درآمد کل (TR) در حداکثر ممکن قرار دارد.</li>
          <li>اگر <InlineMath math="|e_p| < 1" /> (تقاضای کم‌کشش): <InlineMath math="MR < 0" />. تولید در این ناحیه غیرمنطقی است زیرا سود را کاهش می‌دهد.</li>
        </ul>
      </div>

      {/* Why Monopoly has no supply curve */}
      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)', marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>چرا انحصارگر منحنی عرضه ندارد؟ (فقط نقطه عرضه دارد)</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          در بازار رقابت کامل، بنگاه‌ها قیمت‌گیر هستند و یک رابطه یک‌به‌یک بین هر قیمت بازار و مقدار تولید بهینه بنگاه وجود دارد. اما در بازار انحصار کامل، انحصارگر قیمت‌گذار است. تصمیم تولید او نه تنها به هزینه نهایی (<InlineMath math="MC" />) بلکه به کشش تقاضا و شیب منحنی تقاضا بستگی دارد.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
          این امر موجب می‌شود که:
          <br />
          ۱. با تغییر در تقاضا، ممکن است انحصارگر <strong>یک مقدار مشخص از کالا را با دو قیمت متفاوت</strong> عرضه کند.
          <br />
          ۲. یا بالعکس، <strong>دو مقدار متفاوت از کالا را با یک قیمت واحد</strong> در بازار عرضه نماید.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
          از آنجا که رابطه یکتایی بین قیمت و مقدار عرضه وجود ندارد، مفهومی به نام منحنی عرضه در انحصار معنی ندارد. انحصارگر صرفاً یک <strong>نقطه عرضه (Supply Point)</strong> دارد که حاصل تقاطع منحنی درآمد نهایی و هزینه نهایی (<InlineMath math="MR = MC" />) است.
        </p>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <SplitSquareHorizontal size={20} />
        تبعیض قیمت (Price Discrimination)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تبعیض قیمت یعنی فروش یک کالای یکسان با قیمت‌های متفاوت به مشتریان مختلف، بدون اینکه تفاوت قیمت ناشی از تفاوت هزینه تولید باشد. سه درجه تبعیض قیمت وجود دارد:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
        {/* First degree */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>تبعیض قیمت درجه اول (کامل)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            انحصارگر دقیقاً می‌داند هر مشتری حداکثر چقدر حاضر است بپردازد و کالا را دقیقاً به همان قیمت می‌فروشد. در این حالت <strong>مازاد مصرف‌کننده (CS) کاملاً صفر شده</strong> و کل مازاد اقتصادی بازار به عنوان سود تولیدکننده جذب انحصارگر می‌شود.
          </p>
          <BlockMath math="\text{Max } \pi = \int_0^Q P(q) dq - TC(Q) \quad \implies P = MC" />
        </div>

        {/* Second degree */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>تبعیض قیمت درجه دوم (بلوکی/پله‌ای)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            قیمت بر اساس حجم خرید تعیین می‌شود. مصرف‌کنندگانی که حجم بیشتری می‌خرند، قیمت کمتری بابت واحدهای اضافی می‌پردازند (مانند تخفیف‌های حجمی یا قیمت‌گذاری پله‌ای قبض برق).
          </p>
          <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.01)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
            <h5 style={{ color: 'var(--warning)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Lightbulb size={16} />
              مثال عددی کامل تبعیض قیمت درجه دوم (بلوکی):
            </h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              فرض کنید انحصارگر با تقاضای معکوس <InlineMath math="P = 20 - Q" /> و هزینه نهایی ثابت <InlineMath math="MC = 4" /> روبروست. انحصارگر تصمیم می‌گیرد دو پله قیمت‌گذاری کند:
              <br />
              - پله اول: ۶ واحد اول با قیمت <InlineMath math="P_1 = 15" />.
              <br />
              - پله دوم: ۶ واحد بعدی با قیمت <InlineMath math="P_2 = 10" />.
            </p>
            <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', listStyleType: 'square' }}>
              <li>درآمد از پله اول: <InlineMath math="TR_1 = 6 \times 15 = 90" /> واحد</li>
              <li>درآمد از پله دوم: <InlineMath math="TR_2 = 6 \times 10 = 60" /> واحد</li>
              <li>درآمد کل: <InlineMath math="TR = 90 + 60 = 150" /> واحد</li>
              <li>هزینه کل برای ۱۲ واحد کالا: <InlineMath math="TC = 4 \times 12 = 48" /> واحد</li>
              <li>سود کل انحصارگر: <InlineMath math="\pi = TR - TC = 150 - 48 = 102" /> واحد</li>
            </ul>
          </div>
        </div>

        {/* Third degree */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تبعیض قیمت درجه سوم (چند بازاری)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            بازار به بخش‌های مختلف (مثل دانشجویان و افراد عادی) با کشش‌های قیمتی متفاوت تقسیم می‌شود. شرط تعادل این است که درآمد نهایی در تک‌تک بازارها با هزینه نهایی تولید برابر باشد:
          </p>
          <BlockMath math="MR_1 = MR_2 = MC" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '0.5rem' }}>
            طبق فرمول آموروزو-رابینسون، بازاری که <strong>کشش تقاضای بالاتری (حساس‌تر)</strong> دارد، <strong>قیمت پایین‌تری</strong> پرداخت می‌کند:
          </p>
          <BlockMath math="P_1 \left( 1 - \frac{1}{|e_1|} \right) = P_2 \left( 1 - \frac{1}{|e_2|} \right) \quad \implies |e_1| > |e_2| \implies P_1 < P_2" />
        </div>
      </div>

      <div className="example-box" style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calculator size={20} />
          مثال مقایسه‌ای: انحصار ساده در برابر تبعیض قیمت کامل
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع تقاضا <InlineMath math="P = 100 - 4Q" /> و هزینه نهایی ثابت <InlineMath math="MC = 20" /> باشد (با هزینه ثابت ۵۰):
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1rem' }}>
            <p style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>حالت اول: بدون تبعیض (انحصار ساده)</p>
            <BlockMath math="TR = 100Q - 4Q^2 \implies MR = 100 - 8Q" />
            <BlockMath math="MR = MC \implies 100 - 8Q = 20 \implies Q^* = 10" />
            <BlockMath math="P^* = 100 - 4(10) = 60" />
            <BlockMath math="\pi = (60 \times 10) - (20 \times 10 + 50) = 350" />
          </div>
          <div className="glass-panel" style={{ padding: '1rem' }}>
            <p style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>حالت دوم: تبعیض قیمت کامل (درجه ۱)</p>
            <BlockMath math="P = MC \implies 100 - 4Q = 20 \implies Q^* = 20" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>درآمد کل برابر است با مساحت زیر تقاضا:</p>
            <BlockMath math="TR = \int_0^{20} (100 - 4Q) dQ = 1200" />
            <BlockMath math="\pi = 1200 - (20 \times 20 + 50) = 750" />
          </div>
        </div>
        <p style={{ color: 'var(--success)', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
          نتیجه: سود انحصارگر از ۳۵۰ به ۷۵۰ افزایش می‌یابد و مقدار تولید نیز کارآمد و برابر با رقابت کامل (۲۰ واحد) می‌شود.
        </p>
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Factory size={20} />
        انحصارگر چندکارخانه‌ای و محصولات مرتبط
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        گاهی یک انحصارگر کالا را در چند کارخانه با ساختار هزینه‌ای متفاوت تولید می‌کند. در این حالت، شرط تعادل بهینه‌سازی توزیع تولید این است که:
      </p>

      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="MR(Q_{total}) = MC_1(q_1) = MC_2(q_2) = \dots" />
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldAlert size={18} />
          کالاهای مرتبط جانشین و مکمل در انحصار:
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          اگر بنگاه انحصاری دو کالای مرتبط تولید کند، اثر تغییر عرضه کالای اول روی درآمد کل کالای دوم در تعادل لحاظ می‌شود:
        </p>
        <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          <li>اگر دو کالا <strong>مکمل</strong> باشند (مثل چای و قند): <InlineMath math="\frac{\partial TR_1}{\partial q_2} > 0" /></li>
          <li>اگر دو کالا <strong>جانشین</strong> باشند (مثل پپسی و کوکا): <InlineMath math="\frac{\partial TR_1}{\partial q_2} < 0" /></li>
        </ul>
      </div>

    </div>
  );
};

export default Subpage2;
