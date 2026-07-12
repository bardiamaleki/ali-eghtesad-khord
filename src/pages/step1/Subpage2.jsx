import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { BookOpen, Compass } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <BookOpen style={{ color: 'var(--primary)' }} />
        رفتار مصرف‌کننده و نظریه مطلوبیت
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        <strong>مصرف‌کننده:</strong> هدف اساسی هر مصرف‌کننده عقلایی، رسیدن به <strong>حداکثر مطلوبیت (Utility)</strong> از طریق انتخاب سبد بهینه کالاهاست، در حالی که با <strong>محدودیت درآمدی (Budget Constraint)</strong> مواجه است.
      </p>
      
      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <BlockMath math="I = xP_x + yP_y" />
      </div>

      <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱. منحنی‌های بی‌تفاوتی (Indifference Curves)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در فضای دو کالایی، منحنی بی‌تفاوتی مکان هندسی سبدهایی از کالاهاست که <strong>مطلوبیت یکسانی</strong> را برای مصرف‌کننده ایجاد می‌کنند. به عبارت دیگر، مصرف‌کننده بین انتخاب هر نقطه‌ای روی یک منحنی بی‌تفاوتی کاملاً بی‌تفاوت است.
      </p>
      
      <div style={{ margin: '2rem 0', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src="/svg/graph3_1.svg" alt="منحنی‌های بی‌تفاوتی" style={{ maxWidth: '100%', height: 'auto' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>منحنی‌های بی‌تفاوتی با مطلوبیت متفاوت (<InlineMath math="U' > U" />)</p>
      </div>

      <p style={{ color: "var(--text-main)", fontWeight: 'bold', marginBottom: "0.5rem" }}>ویژگی‌های منحنی بی‌تفاوتی:</p>
      <ul style={{ listStyleType: "decimal", paddingRight: "1.5rem", marginBottom: "2rem", color: "var(--text-muted)", lineHeight: "1.8", display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li>نسبت به مبدأ مختصات <strong>محدب (Convex)</strong> هستند.</li>
        <li>هر چه منحنی از مبدأ دورتر باشد (بالاتر باشد)، نشان‌دهنده <strong>مطلوبیت بیشتر</strong> است.</li>
        <li>در هر نقطه از فضای کالا می‌توان یک منحنی بی‌تفاوتی رسم کرد (پوشش کل فضا).</li>
        <li>این منحنی‌ها هیچ‌گاه <strong>همدیگر را قطع نمی‌کنند</strong> (به دلیل اصل انتقال‌پذیری).</li>
        <li>دارای <strong>شیب نزولی</strong> هستند (به دلیل مطلوبیت‌بخش بودن کالاها).</li>
      </ul>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        <strong>نرخ نهایی جانشینی (MRS):</strong> قدرمطلق شیب منحنی بی‌تفاوتی در هر نقطه است. نشان می‌دهد مصرف‌کننده حاضر است چقدر از کالای <InlineMath math="y" /> چشم‌پوشی کند تا یک واحد کالای <InlineMath math="x" /> بیشتر به دست آورد، به طوری که مطلوبیت ثابت بماند.
      </p>
      <div className="formula-box">
        <BlockMath math="MRS_{xy} = -\frac{\Delta y}{\Delta x} = \frac{MU_x}{MU_y}" />
      </div>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۲. اصول حاکم بر ترجیحات مصرف‌کننده (Axioms of Preference)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برای مدل‌سازی رفتار منطقی، فرض می‌شود که ترجیحات مصرف‌کننده از اصول زیر پیروی می‌کند:
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>۱. انعکاس‌پذیری</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>مصرف‌کننده در انتخاب بین سبد <InlineMath math="A" /> و خودش کاملاً بی‌تفاوت است (<InlineMath math="A I A" />).</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--secondary)' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>۲. کامل بودن</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>مصرف‌کننده همواره می‌تواند دو سبد را مقایسه کند (<InlineMath math="A P B" /> یا <InlineMath math="B P A" /> یا <InlineMath math="A I B" />).</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>۳. انتقال‌پذیری</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>اگر <InlineMath math="A P B" /> و <InlineMath math="B P C" /> نتیجه می‌گیریم حتماً <InlineMath math="A P C" />.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۴. سیری‌ناپذیری</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>«بیشتر بهتر است». مصرف‌کننده همیشه مقدار بیشتر را به کمتر ترجیح می‌دهد.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>۵. پیوستگی</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>روی یک منحنی بی‌تفاوتی بی‌نهایت سبد پیوسته وجود دارد که فرد بین آنها بی‌تفاوت است.</p>
        </div>
      </div>
      
      <div style={{ margin: '2rem 0', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src="/svg/13-continuity.svg" alt="اصل پیوستگی" style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>نمایش هندسی اصل پیوستگی</p>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Compass style={{ color: 'var(--accent)' }} />
        ۳. تعادل مصرف‌کننده
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        مصرف‌کننده زمانی به تعادل می‌رسد که تحت محدودیت خط بودجه خود، بالاترین منحنی بی‌تفاوتی ممکن را لمس کند. به لحاظ هندسی، این نقطه مماس شدن خط بودجه و منحنی بی‌تفاوتی است.
      </p>
      
      <div className="formula-box">
        <BlockMath math="\text{شیب خط بودجه} = -\frac{P_x}{P_y} \quad , \quad \text{شیب منحنی بی‌تفاوتی} = -MRS_{xy} = -\frac{MU_x}{MU_y}" />
        <p style={{ textAlign: 'center', margin: '1rem 0', fontWeight: 'bold' }}>شرط تعادل (Tangency Condition):</p>
        <BlockMath math="\frac{MU_x}{MU_y} = \frac{P_x}{P_y}" />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img src="/svg/graph4_1.svg" alt="خط بودجه" style={{ maxWidth: '100%', height: 'auto' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>محدودیت خط بودجه</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <img src="/svg/13-equilibrium.svg" alt="تعادل مصرف کننده" style={{ maxWidth: '100%', height: 'auto' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>نقطه تعادل <InlineMath math="e" /></p>
        </div>
      </div>

      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. تغییرات بودجه و استخراج تابع تقاضای مارشالی</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        اگر قیمت کالاها یا درآمد فرد تغییر کند، خط بودجه جابجا می‌شود و تعادل‌های جدیدی ایجاد می‌گردد.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>الف) تغییر قیمت کالا (Price Consumption Curve - PCC)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            اگر قیمت کالای <InlineMath math="x" /> کاهش یابد (<InlineMath math="P_x \downarrow" />)، خط بودجه از سمت محور X به بیرون می‌چرخد. با وصل کردن نقاط تعادل جدید، منحنی <strong>PCC (منحنی قیمت - مصرف)</strong> به دست می‌آید. از انتقال نقاط این منحنی به فضای قیمت-مقدار، <strong>منحنی تقاضای مارشالی</strong> استخراج می‌شود.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img src="/svg/6-pcc-demand.svg" alt="استخراج تقاضا از PCC" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>ب) تغییر درآمد (Income Consumption Curve - ICC)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            اگر درآمد فرد افزایش یابد (<InlineMath math="I \uparrow" />)، خط بودجه به طور موازی به سمت راست (بالا) منتقل می‌شود. اتصال نقاط تعادل جدید منجر به رسم <strong>ICC (منحنی درآمد - مصرف)</strong> می‌شود. مسیر این منحنی نوع کالا (نرمال، ضروری، لوکس یا پست) را مشخص می‌کند.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img src="/svg/6-icc.svg" alt="منحنی ICC" style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }} />
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem' }}>۵. تابع تقاضای نرمال (مارشالی) و ویژگی‌های آن</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تابع تقاضای نرمال، مقدار بهینه مصرف را تابعی از قیمت‌ها و <strong>درآمد اسمی</strong> بیان می‌کند:
      </p>
      <div className="formula-box">
        <BlockMath math="q_1^{ND} = q_1 (P_1, P_2, I)" />
      </div>

      <p style={{ color: "var(--text-main)", fontWeight: 'bold', marginBottom: "0.5rem" }}>ویژگی‌های تابع تقاضای نرمال:</p>
      <ul style={{ listStyleType: "decimal", paddingRight: "1.5rem", marginBottom: "2rem", color: "var(--text-muted)", lineHeight: "1.8", display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><strong>همگن از درجه صفر:</strong> اگر همه قیمت‌ها و درآمد با یک نسبت ثابت (مثلاً ۲ برابر) افزایش یابند، مقدار تقاضا تغییری نمی‌کند (مصرف‌کننده دچار توهم پولی نمی‌شود).</li>
        <li><strong>تک‌مقداری:</strong> به ازای هر سطح قیمت و درآمد، یک جواب یکتا برای تقاضا وجود دارد.</li>
        <li><strong>نزولی بودن:</strong> به استثنای کالاهای پست گیفن (Giffen) یا مصرف تظاهری (Veblen).</li>
        <li><strong>درآمد ثابت:</strong> در طول تابع تقاضای مارشالی، درآمد اسمی (<InlineMath math="I" />) ثابت فرض می‌شود، اما مطلوبیت متغیر است.</li>
      </ul>

      <div className="example-box">
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem' }}>مثال استخراج تابع تقاضای مارشالی</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          تابع تقاضای مارشالی برای تابع مطلوبیت <InlineMath math="U = q_1 q_2" /> به صورت زیر محاسبه می‌شود:
        </p>
        <BlockMath math="\mathcal{L} = q_1 q_2 + \lambda (I - P_1 q_1 - P_2 q_2)" />
        <BlockMath math="\frac{\partial \mathcal{L}}{\partial q_1} = 0 \Rightarrow q_2 = \lambda P_1 \quad , \quad \frac{\partial \mathcal{L}}{\partial q_2} = 0 \Rightarrow q_1 = \lambda P_2" />
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'center' }}>
          با تقسیم دو رابطه:
        </p>
        <BlockMath math="q_2 = \frac{P_1}{P_2} q_1" />
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'center' }}>
          جایگذاری در محدودیت بودجه:
        </p>
        <BlockMath math="I - P_1 q_1 - P_2 \left(\frac{P_1}{P_2} q_1\right) = 0 \Rightarrow I = 2 P_1 q_1" />
        <BlockMath math="q_1^{ND} = \frac{I}{2 P_1} \quad , \quad q_2^{ND} = \frac{I}{2 P_2}" />
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem' }}>۶. حالات خاص ترجیحات و استخراج تقاضا (گوشه‌ای)</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>الف) کالاهای جانشین کامل (Perfect Substitutes)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            منحنی بی‌تفاوتی به صورت خطوط مستقیم است (<InlineMath math="U = ax + by" />). فرد تمام بودجه خود را صرف کالای <strong>ارزان‌تر</strong> می‌کند (راه‌حل گوشه‌ای).
          </p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.85rem', paddingRight: '1.5rem' }}>
            <li>اگر <InlineMath math="P_x > P_y" />: تقاضای <InlineMath math="X" /> صفر است.</li>
            <li>اگر <InlineMath math="P_x < P_y" />: تمام درآمد صرف <InlineMath math="X" /> می‌شود (<InlineMath math="x = I/P_x" />).</li>
          </ul>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <img src="/svg/15-nemodar2.svg" alt="جانشین کامل" style={{ maxWidth: '100%', height: '150px' }} />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>ب) کالاهای مکمل کامل (Perfect Complements)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            منحنی بی‌تفاوتی به شکل <strong>L (زاویه ۹۰ درجه)</strong> است (<InlineMath math="U = \min(ax, by)" />). کالاها باید با نسبت کاملاً ثابت مصرف شوند و اثر جانشینی صفر است.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            منحنی تقاضای این کالاها بسیار پرشیب (کم‌کشش) است، زیرا کاهش قیمت یکی، لزوماً باعث خرید متناسب دومی می‌شود.
          </p>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <img src="/svg/15-nemodar3.svg" alt="مکمل کامل" style={{ maxWidth: '100%', height: '150px' }} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Subpage2;
