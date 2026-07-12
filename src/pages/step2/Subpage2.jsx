import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Network, Link, Users, Landmark, Calculator } from 'lucide-react';

const Subpage2 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Network style={{ color: 'var(--primary)' }} />
        تقاضای نهاده، تخصیص منابع و محصولات مشترک
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تولیدکننده برای رسیدن به حداکثر سود، باید تعیین کند که چه مقدار از هر نهاده (مثل نیروی کار و سرمایه) را استخدام کند. این تصمیم‌گیری تقاضا برای عوامل تولید را شکل می‌دهد که به آن <strong>تقاضای مشتق‌شده (Derived Demand)</strong> می‌گویند. تقاضا برای نهاده ناشی از تقاضا برای محصول نهایی است.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Users size={20} />
        ۱. شرط بهینه استخدام نهاده‌ها (VMP)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        بنگاه تا زمانی به استخدام یک عامل تولید ادامه می‌دهد که <strong>ارزش تولید نهایی (VMP)</strong> آن عامل با <strong>هزینه نهایی (قیمت یا دستمزد)</strong> آن برابر شود.
      </p>

      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="VMP_L = P \cdot MP_L = w \quad \text{(شرط استخدام نیروی کار)}" />
        <BlockMath math="VMP_K = P \cdot MP_K = r \quad \text{(شرط استخدام سرمایه)}" />
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>چرا این شرط منطقی است؟</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          اگر <InlineMath math="VMP_L > w" /> باشد، استخدام یک کارگر اضافی بیش از دستمزدی که می‌گیرد، برای بنگاه درآمد ایجاد می‌کند. بنابراین بنگاه با استخدام کارگر بیشتر سودش را افزایش می‌دهد. این روند تا جایی ادامه می‌یابد که به دلیل قانون بازده نزولی، <InlineMath math="VMP_L" /> کاهش یافته و با <InlineMath math="w" /> برابر شود.
        </p>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem' }}>۲. مقایسه تقاضای نهاده در کوتاه‌مدت و بلندمدت و اصل لوشاتلیه</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        واکنش بنگاه به تغییر قیمت نهاده‌ها در دوره‌های زمانی مختلف متفاوت است. این تفاوت توسط <strong>اصل لوشاتلیه (Le Chatelier's Principle)</strong> توضیح داده می‌شود: تقاضا برای نهاده در بلندمدت باکشش‌تر (حساس‌تر) از تقاضا در کوتاه‌مدت است.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تقاضای کوتاه‌مدت (Short-Run)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در کوتاه‌مدت چون سرمایه ثابت است، بنگاه انعطاف‌پذیری کمی دارد. افزایش دستمزد تنها منجر به کاهش متناسب نیروی کار می‌شود و امکان جانشینی با ماشین‌آلات وجود ندارد.
          </p>
          <BlockMath math="\left( \frac{\partial L}{\partial w} \right)_{\text{Short-Run}} = \frac{1}{P \cdot f_{LL}}" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تقاضای بلندمدت (Long-Run)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در بلندمدت، بنگاه می‌تواند ماشین‌آلات را جانشین نیروی کار کند. بنابراین با افزایش دستمزد، علاوه بر کاهش تولید، بنگاه تکنولوژی خود را سرمایه‌برتر می‌کند.
          </p>
          <BlockMath math="\left( \frac{\partial L}{\partial w} \right)_{\text{Long-Run}} = \frac{f_{KK}}{P \cdot |H|}" />
        </div>
      </div>

      <div className="example-box" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>اثبات ریاضی شیب منفی تقاضا و اصل لوشاتلیه (صفحه ۵۹-۶۲ جزوه):</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          بنگاه سود خود را با انتخاب نهاده‌های <InlineMath math="L" /> و <InlineMath math="K" /> حداکثر می‌کند:
          <BlockMath math="\max \pi = P \cdot f(L, K) - w L - r K" />
          شرایط مرتبه اول (F.O.C):
          <BlockMath math="P f_L - w = 0 \quad , \quad P f_K - r = 0" />
          با دیفرانسیل‌گیری کامل از این سیستم خواهیم داشت:
          <BlockMath math="P f_{LL} dL + P f_{LK} dK = dw" />
          <BlockMath math="P f_{KL} dL + P f_{KK} dK = dr" />
          به فرم ماتریسی:
          <BlockMath math="\begin{pmatrix} P f_{LL} & P f_{LK} \\ P f_{KL} & P f_{KK} \end{pmatrix} \begin{pmatrix} dL \\ dK \end{pmatrix} = \begin{pmatrix} dw \\ dr \end{pmatrix}" />
          با فرض ثابت بودن قیمت سرمایه (<InlineMath math="dr = 0" />) و تغییر دستمزد، طبق قاعده کرامر برای حل <InlineMath math="dL" /> داریم:
          <BlockMath math="dL = \frac{\begin{vmatrix} dw & P f_{LK} \\ 0 & P f_{KK} \end{vmatrix}}{|H|} = \frac{P f_{KK} dw}{|H|} \implies \left( \frac{\partial L}{\partial w} \right)_{\text{Long-Run}} = \frac{P f_{KK}}{|H|} < 0" />
          از آنجا که طبق شرایط مرتبه دوم حداکثرسازی سود (S.O.C)، دترمینان هشین باید مثبت (<InlineMath math="|H| > 0" />) و عناصر روی قطر اصلی منفی باشند (<InlineMath math="f_{KK} < 0" />)، پس شیب تقاضا برای نهاده همواره **منفی** است (تقاضای نهاده نزولی است).
          <br /><br />
          حالا برای اثبات **اصل لوشاتلیه**، در کوتاه‌مدت که سرمایه ثابت است (<InlineMath math="dK = 0" />)، دیفرانسیل معادله اول F.O.C به صورت زیر است:
          <BlockMath math="P f_{LL} dL = dw \implies \left( \frac{\partial L}{\partial w} \right)_{\text{Short-Run}} = \frac{1}{P f_{LL}}" />
          تفاضل شیب بلندمدت و کوتاه‌مدت را محاسبه می‌کنیم (با جایگذاری <InlineMath math="|H| = P^2(f_{LL} f_{KK} - f_{LK}^2)" />):
          <BlockMath math="\left( \frac{\partial L}{\partial w} \right)_{\text{Long-Run}} - \left( \frac{\partial L}{\partial w} \right)_{\text{Short-Run}} = \frac{f_{KK}}{P(f_{LL} f_{KK} - f_{LK}^2)} - \frac{1}{P f_{LL}} = \frac{f_{LK}^2}{P f_{LL} (f_{LL} f_{KK} - f_{LK}^2)} \le 0" />
          چون صورت کسر مثبت (<InlineMath math="f_{LK}^2 \ge 0" />) و مخرج کسر منفی است (<InlineMath math="P > 0, f_{LL} < 0, |H|/P^2 > 0" />)، پس این تفاضل همواره کوچکتر یا مساوی صفر است. از آنجا که هر دو شیب منفی هستند، در نتیجه داریم:
          <BlockMath math="\left| \frac{\partial L}{\partial w} \right|_{\text{Long-Run}} \ge \left| \frac{\partial L}{\partial w} \right|_{\text{Short-Run}}" />
          این رابطه نشان می‌دهد که در بلندمدت واکنش مصرف نهاده به تغییر قیمت آن، شدیدتر و باکشش‌تر از کوتاه‌مدت است.
        </p>
      </div>
      
      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>طبق اثبات ریاضی همواره داریم:</p>
        <BlockMath math="\left| \frac{\partial L}{\partial w} \right|_{\text{Long-Run}} \ge \left| \frac{\partial L}{\partial w} \right|_{\text{Short-Run}}" />
        <img src="/svg/63-diagram.svg" alt="تقاضای بلندمدت و کوتاه‌مدت نیروی کار" style={{ maxWidth: '100%', maxHeight: '280px', marginTop: '1.5rem' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>منحنی LRLD (تقاضای بلندمدت) کم‌شیب‌تر از تقاضای کوتاه‌مدت است.</p>
      </div>

      <h3 style={{ color: 'var(--warning)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Link size={20} />
        ۳. ارتباط بین عوامل تولید (جانشین و مکمل)
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>نهاده‌های جانشین (Substitutes)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
            افزایش استفاده از یک نهاده باعث <strong>کاهش</strong> تولید نهایی نهاده دیگر می‌شود.
          </p>
          <BlockMath math="\frac{\partial MP_K}{\partial L} = \frac{\partial^2 Q}{\partial L \partial K} < 0" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
            مثال: دستگاه خودپرداز و کارمند بانک.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>نهاده‌های مکمل (Complements)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
            افزایش استفاده از یک نهاده باعث <strong>افزایش</strong> تولید نهایی نهاده دیگر می‌شود.
          </p>
          <BlockMath math="\frac{\partial MP_K}{\partial L} = \frac{\partial^2 Q}{\partial L \partial K} > 0" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
            مثال: کامیون و راننده. تولید فقط وقتی بالا می‌رود که هر دو با هم زیاد شوند.
          </p>
        </div>
      </div>

      <h3 style={{ color: 'var(--danger)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Landmark size={20} />
        ۴. تولید محصولات مشترک (Joint Products) و PPC
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        گاهی یک بنگاه از یک نهاده ثابت (مثلاً مقدار مشخصی زمین یا ماده خام <InlineMath math="\bar{X}" />) برای تولید دو یا چند محصول متفاوت (<InlineMath math="q_1, q_2" />) استفاده می‌کند. در اینجا بنگاه با <strong>منحنی امکانات تولید (PPC)</strong> مواجه است که نشان می‌دهد برای افزایش تولید یک کالا، چقدر باید از تولید کالای دیگر چشم‌پوشی کرد.
      </p>

      <div className="formula-box">
        <p style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.5rem' }}>معادله منحنی امکانات تولید:</p>
        <BlockMath math="X = h(q_1, q_2)" />
        <p style={{ color: 'var(--text-main)', textAlign: 'center', margin: '1rem 0 0.5rem 0' }}>شیب PPC (نرخ نهایی تبدیل):</p>
        <BlockMath math="\text{MRT} = \frac{\partial h / \partial q_1}{\partial h / \partial q_2} = \frac{h_1}{h_2}" />
      </div>

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calculator size={18} />
          مسائل سه‌گانه بهینه‌سازی در محصولات مشترک (صفحات ۷۰-۷۴ جزوه)
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          تولید دو محصول مشترک (<InlineMath math="q_1, q_2" />) با یک نهاده (<InlineMath math="X" />) به سه روش بهینه‌سازی بررسی می‌شود:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--primary)' }}>
            <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>حالت اول: حداکثرسازی درآمد با نهاده ثابت</h5>
            <BlockMath math="\max TR = P_1 q_1 + P_2 q_2 \quad \text{S.t} \quad \bar{X} = h(q_1, q_2)" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              تابع لاگرانژ: <InlineMath math="\mathcal{L} = P_1 q_1 + P_2 q_2 + \mu [\bar{X} - h(q_1, q_2)]" />
              <br />
              شرط مرتبه اول (F.O.C): <InlineMath math="P_1 = \mu h_1" /> و <InlineMath math="P_2 = \mu h_2 \implies \frac{P_1}{P_2} = \frac{h_1}{h_2} = MRT" />
              <br />
              شرط مرتبه دوم (S.O.C) برای ماکزیمم مقید: دترمینان هشین مرزی باید مثبت باشد (<InlineMath math="|\bar{H}| > 0" />):
              <BlockMath math="|\bar{H}| = \begin{vmatrix} -\mu h_{11} & -\mu h_{12} & -h_1 \\ -\mu h_{21} & -\mu h_{22} & -h_2 \\ -h_1 & -h_2 & 0 \end{vmatrix} > 0 \implies -h_{11} h_2^2 + 2 h_{12} h_1 h_2 - h_{22} h_1^2 > 0" />
              این شرط بدین معناست که منحنی مرز امکانات تولید (PPC) باید نسبت به مبدأ **مقعر** باشد.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--success)' }}>
            <h5 style={{ color: 'var(--success)', marginBottom: '0.5rem', fontWeight: 'bold' }}>حالت دوم: حداقل‌سازی نهاده با درآمد ثابت</h5>
            <BlockMath math="\min X = h(q_1, q_2) \quad \text{S.t} \quad \bar{R} = P_1 q_1 + P_2 q_2" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              تابع لاگرانژ: <InlineMath math="\mathcal{L} = h(q_1, q_2) + \lambda [\bar{R} - P_1 q_1 - P_2 q_2]" />
              <br />
              شرط مرتبه اول (F.O.C): <InlineMath math="h_1 = \lambda P_1" /> و <InlineMath math="h_2 = \lambda P_2 \implies \frac{h_1}{h_2} = \frac{P_1}{P_2}" />
              <br />
              شرط مرتبه دوم (S.O.C) برای مینیمم مقید: دترمینان هشین مرزی باید منفی باشد (<InlineMath math="|\bar{H}| < 0" />):
              <BlockMath math="|\bar{H}| = \begin{vmatrix} h_{11} & h_{12} & -P_1 \\ h_{21} & h_{22} & -P_2 \\ -P_1 & -P_2 & 0 \end{vmatrix} < 0" />
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--warning)' }}>
            <h5 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontWeight: 'bold' }}>حالت سوم: حداکثرسازی سود بدون محدودیت</h5>
            <BlockMath math="\max \pi = P_1 q_1 + P_2 q_2 - r \cdot h(q_1, q_2)" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              در اینجا نهاده نیز متغیر است و با قیمت ثابت <InlineMath math="r" /> خریداری می‌شود.
              <br />
              شرط مرتبه اول (F.O.C): 
              <BlockMath math="\frac{\partial \pi}{\partial q_1} = 0 \implies P_1 = r h_1 = MC_1" />
              <BlockMath math="\frac{\partial \pi}{\partial q_2} = 0 \implies P_2 = r h_2 = MC_2" />
              جایی که <InlineMath math="r h_i" /> همان هزینه نهایی تولید کالا است (<InlineMath math="MC_i" />). یعنی قیمت هر کالا باید با هزینه نهایی‌اش برابر شود.
              <br />
              شرط مرتبه دوم (S.O.C) برای بهینه‌سازی نامقید: دترمینان هشین باید مثبت (<InlineMath math="||H|| > 0" />) و عناصر روی قطر اصلی منفی باشند (<InlineMath math="\pi_{ii} < 0" />):
              <BlockMath math="\pi_{11} = -r h_{11} < 0 \implies h_{11} > 0" />
              <BlockMath math="\pi_{22} = -r h_{22} < 0 \implies h_{22} > 0" />
              <BlockMath math="|H| = \begin{vmatrix} -r h_{11} & -r h_{12} \\ -r h_{21} & -r h_{22} \end{vmatrix} > 0 \implies h_{11} h_{22} - h_{12}^2 > 0" />
            </p>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent)', marginTop: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
            <strong>نکته مهم:</strong> توجه کنید که <InlineMath math="h_1" /> در واقع معکوس تولید نهایی نهاده <InlineMath math="X" /> برای کالای اول است (<InlineMath math="h_1 = 1 / MP_{X_1}" />). بنابراین شرط تعادل در حالت اول و دوم را می‌توان به این شکل هم نوشت:
          </p>
          <BlockMath math="\frac{P_1}{P_2} = \frac{MP_{X_2}}{MP_{X_1}} = \frac{MC_1}{MC_2}" />
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/72-isorevenue.svg" alt="منحنی امکانات تولید و خط درآمد" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          تعادل جایی رخ می‌دهد که خط هم‌درآمد (Isorevenue) بر منحنی مقعر امکانات تولید (PPC) مماس شود.
        </p>
      </div>

    </div>
  );
};

export default Subpage2;
