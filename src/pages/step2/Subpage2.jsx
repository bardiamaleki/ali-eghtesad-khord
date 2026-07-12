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

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem' }}>۲. مقایسه تقاضای نهاده در کوتاه‌مدت و بلندمدت</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        واکنش بنگاه به تغییر قیمت نهاده‌ها در دوره‌های زمانی مختلف متفاوت است. این تفاوت توسط <strong>اصل لوشاتلیه (Le Chatelier's Principle)</strong> توضیح داده می‌شود: تقاضا برای نهاده در بلندمدت باکشش‌تر (حساس‌تر) از تقاضا در کوتاه‌مدت است.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--accent)' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تقاضای کوتاه‌مدت</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در کوتاه‌مدت چون سرمایه ثابت است، بنگاه انعطاف‌پذیری کمی دارد. افزایش دستمزد تنها منجر به کاهش متناسب نیروی کار می‌شود و امکان جانشینی با ماشین‌آلات وجود ندارد. منحنی تقاضا پرشیب‌تر است.
          </p>
          <BlockMath math="\frac{\partial L}{\partial w} \text{ (Short-Run)} = \frac{1}{P \cdot f_{LL}}" />
        </div>

        <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>تقاضای بلندمدت</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            در بلندمدت، بنگاه می‌تواند ماشین‌آلات را جانشین نیروی کار کند. بنابراین با افزایش دستمزد، علاوه بر کاهش تولید، بنگاه تکنولوژی خود را سرمایه‌برتر می‌کند. منحنی تقاضا مسطح‌تر (باکشش‌تر) است.
          </p>
          <BlockMath math="\frac{\partial L}{\partial w} \text{ (Long-Run)} = \frac{f_{KK}}{P \cdot |H|}" />
        </div>
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
          مثال جامع: حداکثرسازی درآمد با منابع ثابت
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          تولیدکننده‌ای می‌خواهد با مقدار ثابتی نهاده <InlineMath math="\bar{X}" />، درآمد خود از فروش دو محصول را حداکثر کند:
        </p>
        
        <BlockMath math="\text{Max } TR = P_1 q_1 + P_2 q_2 \quad \text{S.t: } \bar{X} = h(q_1, q_2)" />
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>با تشکیل تابع لاگرانژ داریم:</p>
        <BlockMath math="\mathcal{L} = P_1 q_1 + P_2 q_2 + \mu [\bar{X} - h(q_1, q_2)]" />
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>مشتقات مرتبه اول:</p>
        <BlockMath math="\frac{\partial \mathcal{L}}{\partial q_1} = P_1 - \mu h_1 = 0 \quad \Rightarrow P_1 = \mu h_1" />
        <BlockMath math="\frac{\partial \mathcal{L}}{\partial q_2} = P_2 - \mu h_2 = 0 \quad \Rightarrow P_2 = \mu h_2" />
        
        <p style={{ color: 'var(--text-main)', lineHeight: '1.8', textAlign: 'center', fontWeight: 'bold', margin: '1.5rem 0' }}>
          شرط تعادل در تخصیص محصولات مشترک:
        </p>
        <BlockMath math="\frac{P_1}{P_2} = \frac{h_1}{h_2}" />
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'center' }}>
          یعنی نسبت قیمت‌های بازار باید با شیب منحنی امکانات تولید (MRT) برابر شود.
        </p>

        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent)', marginTop: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
            <strong>نکته مهم:</strong> توجه کنید که <InlineMath math="h_1" /> در واقع معکوس تولید نهایی نهاده <InlineMath math="X" /> برای کالای اول است (<InlineMath math="h_1 = 1 / MP_{X_1}" />). بنابراین شرط تعادل بالا را می‌توان به این شکل هم نوشت:
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
