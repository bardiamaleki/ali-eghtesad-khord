import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Network, Link, Users, Landmark, Calculator, Lightbulb } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Network style={{ color: 'var(--primary)' }} />
        تقاضای نهاده، تخصیص منابع و محصولات مشترک
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تصمیم‌گیری بنگاه در مورد میزان استخدام عوامل تولید (مانند نیروی کار و سرمایه)، تقاضا برای نهاده را شکل می‌دهد. این تقاضا نوعی <strong>تقاضای مشتق‌شده (Derived Demand)</strong> است؛ زیرا هدف نهایی بنگاه، نه استخدام کارگر، بلکه تولید محصول نهایی است که در بازار متقاضی دارد.
      </p>

      {/* Short-Run Cost Curves Section */}
      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Calculator size={20} style={{ color: 'var(--secondary)' }} />
        ۱. منحنی‌های هزینه کوتاه‌مدت و روابط هندسی آن‌ها
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در کوتاه‌مدت، هزینه‌های بنگاه به دو بخش هزینه‌های ثابت (FC) و هزینه‌های متغیر (VC) تقسیم می‌شوند. منحنی‌های هزینه متوسط کل (ATC)، هزینه متوسط متغیر (AVC)، هزینه متوسط ثابت (AFC) و هزینه نهایی (MC) روابط هندسی مشخصی با یکدیگر دارند:
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', margin: '1.5rem 0' }}>
        <div className="glass-panel" style={{ flex: '1', minWidth: '300px', textAlign: 'center', background: 'rgba(255,255,255,0.01)', padding: '1rem', borderRadius: '12px' }}>
          <img src="/svg/11-total-costs.svg" alt="نمودار هزینه‌های کل کوتاه‌مدت" style={{ maxWidth: '100%', maxHeight: '250px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>منحنی‌های هزینه کل (TC)، هزینه متغیر (VC) و هزینه ثابت (FC)</p>
        </div>
        <div className="glass-panel" style={{ flex: '1', minWidth: '300px', textAlign: 'center', background: 'rgba(255,255,255,0.01)', padding: '1rem', borderRadius: '12px' }}>
          <img src="/svg/11-average-marginal-costs.svg" alt="نمودار هزینه‌های متوسط و نهایی کوتاه‌مدت" style={{ maxWidth: '100%', maxHeight: '250px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>منحنی‌های هزینه متوسط کل (ATC)، متوسط متغیر (AVC)، متوسط ثابت (AFC) و هزینه نهایی (MC)</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>روابط هندسی و تحلیل ریاضی بین منحنی‌های هزینه کوتاه‌مدت:</h4>
        <ul style={{ listStyleType: "decimal", paddingRight: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <li>
            <strong>رابطه MC با ATC و AVC:</strong> منحنی هزینه نهایی (MC) همواره منحنی‌های هزینه متوسط کل (ATC) و هزینه متوسط متغیر (AVC) را در <strong>نقطه مینیمم آن‌ها</strong> قطع می‌کند.
          </li>
          <li style={{ marginTop: '0.5rem' }}>
            <strong>رفتار هزینه متوسط ثابت (AFC):</strong> با افزایش تولید، هزینه متوسط ثابت به دلیل ثابت بودن کل هزینه ثابت، همواره نزولی است (<InlineMath math="AFC = FC/Q" />) و هرگز به صفر نمی‌رسد (یک مجانب مستطیلی است).
          </li>
          <li style={{ marginTop: '0.5rem' }}>
            <strong>فاصله بین ATC و AVC:</strong> از آنجا که <InlineMath math="ATC - AVC = AFC" /> است، با افزایش تولید، فاصله عمودی بین دو منحنی ATC و AVC <strong>به تدریج کاهش می‌یابد</strong>، اما هرگز به صفر نمی‌رسد.
          </li>
        </ul>
      </div>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Users size={20} />
        ۲. شرط بهینه استخدام نهاده‌ها (VMP)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بنگاه تا زمانی به استخدام نیروی کار ادامه می‌دهد که <strong>ارزش تولید نهایی (VMP)</strong> آن کارگر با <strong>هزینه نهایی (دستمزد)</strong> آن برابر شود:
      </p>

      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="VMP_L = P \cdot MP_L = w \quad \text{(شرط استخدام نیروی کار)}" />
        <BlockMath math="VMP_K = P \cdot MP_K = r \quad \text{(شرط استخدام سرمایه)}" />
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳. مقایسه تقاضای نهاده در کوتاه‌مدت و بلندمدت و اصل لوشاتلیه</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        واکنش بنگاه به تغییر قیمت نهاده‌ها در بلندمدت شدیدتر از کوتاه‌مدت است. این تفاوت رفتار توسط <strong>اصل لوشاتلیه (Le Chatelier's Principle)</strong> توضیح داده می‌شود:
      </p>

      {/* Pedagogical Explanation Box */}
      <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.03)', borderRight: '4px solid var(--primary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Lightbulb size={18} />
          شهود اقتصادی اصل لوشاتلیه:
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
          اگر دستمزد افزایش یابد، در کوتاه‌مدت بنگاه نمی‌تواند ماشین‌آلات خود را تغییر دهد و واکنش چندانی نشان نمی‌دهد. اما در بلندمدت، بنگاه با متغیر شدن سرمایه، ماشین‌آلات را جانشین کارگران کرده و کارگران بسیار بیشتری را اخراج می‌کند. بنابراین، <strong>تقاضای بلندمدت عوامل تولید همواره باکشش‌تر از کوتاه‌مدت است</strong>.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تقاضای کوتاه‌مدت (Short-Run)</h4>
          <BlockMath math="\left( \frac{\partial L}{\partial w} \right)_{SR} = \frac{1}{P \cdot f_{LL}} < 0" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تقاضای بلندمدت (Long-Run)</h4>
          <BlockMath math="\left( \frac{\partial L}{\partial w} \right)_{LR} = \frac{P \cdot f_{KK}}{|H|} < 0" />
        </div>
      </div>

      {/* Math Proof */}
      <div className="example-box" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>اثبات ریاضی اصل لوشاتلیه (صفحه ۵۹-۶۲ جزوه):</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          با استفاده از دیفرانسیل F.O.C حداکثرسازی سود نامقید:
          <BlockMath math="\begin{pmatrix} P f_{LL} & P f_{LK} \\ P f_{KL} & P f_{KK} \end{pmatrix} \begin{pmatrix} dL \\ dK \end{pmatrix} = \begin{pmatrix} dw \\ dr \end{pmatrix}" />
          با فرض ثابت بودن قیمت سرمایه (<InlineMath math="dr = 0" />) و تغییر دستمزد، طبق قاعده کرامر داریم:
          <BlockMath math="\left( \frac{\partial L}{\partial w} \right)_{LR} = \frac{P f_{KK}}{|H|} < 0" />
          تفاضل شیب تقاضای بلندمدت و کوتاه‌مدت را محاسبه می‌کنیم:
          <BlockMath math="\left( \frac{\partial L}{\partial w} \right)_{LR} - \left( \frac{\partial L}{\partial w} \right)_{SR} = \frac{f_{KK}}{P(f_{LL} f_{KK} - f_{LK}^2)} - \frac{1}{P f_{LL}} = \frac{f_{LK}^2}{P f_{LL} (f_{LL} f_{KK} - f_{LK}^2)} \le 0" />
          چون صورت کسر مثبت و مخرج کسر منفی است، حاصل تفاضل شیب‌ها منفی است. این امر ثابت می‌کند که قدر مطلق شیب بلندمدت همواره بزرگتر است:
          <BlockMath math="\left| \frac{\partial L}{\partial w} \right|_{LR} \ge \left| \frac{\partial L}{\partial w} \right|_{SR}" />
        </p>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/63-diagram.svg" alt="منحنی تقاضای بلندمدت و کوتاه‌مدت" style={{ maxWidth: '100%', maxHeight: '280px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>منحنی LRLD (تقاضای بلندمدت) کم‌شیب‌تر و باکشش‌تر از تقاضای کوتاه‌مدت است.</p>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Link size={20} />
        ۴. ارتباط بین عوامل تولید (نهاده‌های جانشین و مکمل)
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>نهاده‌های جانشین (Substitutes)</h4>
          <BlockMath math="\frac{\partial MP_K}{\partial L} = \frac{\partial^2 Q}{\partial L \partial K} < 0" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            افزایش استخدام یک نهاده، بهره‌وری نهایی نهاده دیگر را کاهش می‌دهد. (مثال: کارمند بانک و دستگاه خودپرداز).
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>نهاده‌های مکمل (Complements)</h4>
          <BlockMath math="\frac{\partial MP_K}{\partial L} = \frac{\partial^2 Q}{\partial L \partial K} > 0" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
            افزایش استخدام یک نهاده، بهره‌وری نهایی نهاده دیگر را بالا می‌برد. (مثال: کامیون و راننده کامیون).
          </p>
        </div>
      </div>

      {/* Joint Products */}
      <h3 style={{ color: 'var(--danger)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Landmark size={20} />
        ۵. تولید محصولات مشترک (Joint Products) و PPC
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        گاهی یک بنگاه از یک نهاده مشخص (مثلاً مقدار ثابت شیر خام <InlineMath math="\bar{X}" />) برای تولید همزمان چند محصول متفاوت (مانند ماست <InlineMath math="q_1" /> و کره <InlineMath math="q_2" />) استفاده می‌کند. در اینجا بنگاه با <strong>منحنی امکانات تولید (PPC)</strong> مواجه است.
      </p>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1.5rem' }}>
          مسائل سه‌گانه بهینه‌سازی در محصولات مشترک (صفحات ۷۰-۷۴ جزوه)
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Case 1 */}
          <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--primary)' }}>
            <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام اول. حداکثرسازی درآمد با نهاده ثابت:</h5>
            <BlockMath math="\max TR = P_1 q_1 + P_2 q_2 \quad \text{S.t:} \quad \bar{X} = h(q_1, q_2)" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
              شرط F.O.C: برابری نرخ نهایی تبدیل (MRT) با نسبت قیمت‌ها: <InlineMath math="\frac{P_1}{P_2} = \frac{h_1}{h_2} = MRT" />.
              <br />
              شرط S.O.C (ماتریس هشین مرزی): دترمینان باید مثبت باشد (<InlineMath math="|\bar{H}| > 0" />). این شرط تضمین می‌کند که منحنی PPC نسبت به مبدأ <strong>مقعر</strong> است.
            </p>
          </div>

          {/* Case 2 */}
          <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--success)' }}>
            <h5 style={{ color: 'var(--success)', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام دوم. حداقل‌سازی نهاده با درآمد ثابت:</h5>
            <BlockMath math="\min X = h(q_1, q_2) \quad \text{S.t:} \quad \bar{R} = P_1 q_1 + P_2 q_2" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
              شرط F.O.C: همانند حالت اول، تلاقی قیمت‌ها و شیب منحنی الزامی است: <InlineMath math="\frac{h_1}{h_2} = \frac{P_1}{P_2}" />.
              <br />
              شرط S.O.C (ماتریس هشین مرزی): دترمینان باید منفی باشد (<InlineMath math="|\bar{H}| < 0" />).
            </p>
          </div>

          {/* Case 3 */}
          <div className="glass-panel" style={{ padding: '1.2rem', borderRight: '4px solid var(--warning)' }}>
            <h5 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontWeight: 'bold' }}>گام سوم. حداکثرسازی سود بدون محدودیت:</h5>
            <BlockMath math="\max \pi = P_1 q_1 + P_2 q_2 - r \cdot h(q_1, q_2)" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
              شرط F.O.C: قیمت هر کالا باید با هزینه نهایی تولید آن برابر شود: <InlineMath math="P_1 = r h_1 = MC_1" /> و <InlineMath math="P_2 = r h_2 = MC_2" />.
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/72-isorevenue.svg" alt="منحنی امکانات تولید و خط درآمد" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          تعادل در محل مماس شدن خط هم‌درآمد (Isorevenue) بر مرز امکانات تولید (PPC) شکل می‌گیرد.
        </p>
      </div>
    </div>
  );
};

export default Subpage2;
