import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Share2, Scissors, Activity } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Share2 style={{ color: 'var(--primary)' }} />
        اثر درآمدی، اثر جانشینی و معادلات اسلاتسکی
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        وقتی قیمت یک کالا تغییر می‌کند، دو اتفاق همزمان رخ می‌دهد: ۱) قیمت نسبی کالاها عوض می‌شود (اثر جانشینی) و ۲) قدرت خرید واقعی مصرف‌کننده تغییر می‌کند (اثر درآمدی). برای تفکیک این دو اثر، از <strong>تابع تقاضای جبرانی (هیکسی)</strong> استفاده می‌کنیم.
      </p>

      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۱. تقاضای جبرانی (Hicksian Demand) و تابع مخارج</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در رویکرد دوگان (Dual)، به جای حداکثر کردن مطلوبیت، هدف <strong>حداقل کردن هزینه (مخارج)</strong> برای رسیدن به یک سطح مطلوبیت معین (<InlineMath math="\bar{U}" />) است. پاسخ این مسئله، تقاضای جبرانی را به دست می‌دهد.
      </p>

      <div className="formula-box">
        <BlockMath math="\min C = P_x \cdot x + P_y \cdot y \quad \text{S.t: } U(x,y) = \bar{U}" />
        <BlockMath math="q_i^{CD} = H_i(P_x, P_y, \bar{U})" />
      </div>

      <p style={{ color: "var(--text-main)", fontWeight: 'bold', marginTop: '1rem', marginBottom: "0.5rem" }}>ویژگی‌های تقاضای جبرانی:</p>
      <ul style={{ listStyleType: "disc", paddingRight: "1.5rem", marginBottom: "2rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
        <li>فقط تابعی از قیمت‌ها و <strong>مطلوبیت ثابت</strong> است (درآمد اسمی تغییر می‌کند).</li>
        <li>اثر درآمدی در آن حذف شده و <strong>فقط اثر جانشینی</strong> را نشان می‌دهد.</li>
        <li>همیشه نزولی است (قانون تقاضا همواره برقرار است، حتی برای کالای گیفن).</li>
      </ul>

      <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--accent)', margin: '1.5rem 0' }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تابع مخارج (Expenditure Function)</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          اگر توابع تقاضای جبرانی را در رابطه هزینه جایگذاری کنیم، حداقل هزینه لازم برای رسیدن به مطلوبیت <InlineMath math="\bar{U}" /> به دست می‌آید:
        </p>
        <BlockMath math="E(P_x, P_y, \bar{U}) = P_x \cdot x^{CD} + P_y \cdot y^{CD}" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          طبق لم شپارد (Shephard's Lemma)، مشتق تابع مخارج نسبت به قیمت هر کالا، برابر تقاضای جبرانی همان کالا است:
        </p>
        <BlockMath math="\frac{\partial E}{\partial P_x} = x^{CD}" />
      </div>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Scissors style={{ color: 'var(--secondary)' }} />
        ۲. تجزیه اثر قیمت (جانشینی و درآمدی)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        <strong>اثر کل تغییر قیمت = اثر جانشینی + اثر درآمدی</strong>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>الف) کالای نرمال (Normal Good)</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              در صورت کاهش قیمت، اثر جانشینی باعث افزایش مصرف می‌شود. چون قدرت خرید واقعی زیاد شده، اثر درآمدی نیز مصرف کالای نرمال را افزایش می‌دهد. <strong>هر دو اثر هم‌جهت هستند</strong> و تقاضا به شدت افزایش می‌یابد.
            </p>
          </div>
          <div className="glass-panel" style={{ flex: '1', minWidth: '300px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
            <img src="/svg/25-nemodar.svg" alt="کالای نرمال" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>ب) کالای پست (Inferior Good)</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              اثر جانشینی (مثل همیشه) تقاضا را زیاد می‌کند. اما چون کالا پست است، افزایش قدرت خرید باعث کاهش مصرف می‌شود. با این حال، چون <strong>اثر جانشینی بزرگتر از اثر درآمدی</strong> است، در نهایت مصرف افزایش می‌یابد. (منحنی تقاضا همچنان نزولی است).
            </p>
          </div>
          <div className="glass-panel" style={{ flex: '1', minWidth: '300px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
            <img src="/svg/25-nemodar.svg" alt="کالای پست" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>ج) کالای گیفن (Giffen Good)</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              یک کالای به شدت پست است که در آن <strong>اثر درآمدی بزرگتر از اثر جانشینی</strong> است. کاهش قیمت منجر به کاهش مقدار تقاضا می‌شود! (منحنی تقاضای مارشالی در اینجا صعودی است).
            </p>
          </div>
          <div className="glass-panel" style={{ flex: '1', minWidth: '300px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px' }}>
            <img src="/svg/25-nemodar.svg" alt="کالای گیفن" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem' }}>۳. معادلات اسلاتسکی (Slutsky Equations) و اثبات ماتریسی</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        معادله اسلاتسکی، ارتباط ریاضی بین تابع تقاضای مارشالی (که قابل مشاهده است) و تابع تقاضای هیکسی (که غیرقابل مشاهده است) را نشان می‌دهد.
      </p>

      <div className="formula-box">
        <BlockMath math="\frac{\partial x_i^{ND}}{\partial P_j} = \underbrace{\frac{\partial x_i^{CD}}{\partial P_j}}_{\text{اثر جانشینی}} - \underbrace{x_j \frac{\partial x_i^{ND}}{\partial I}}_{\text{اثر درآمدی}}" />
      </div>

      <div className="example-box" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>اثبات ریاضی پیشرفته به روش ماتریسی و کرامر (صفحات ۳۰-۳۴ جزوه):</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          مسئله بهینه‌سازی مصرف‌کننده را به صورت زیر در نظر بگیرید:
          <BlockMath math="\max U(x_1, x_2) \quad \text{S.t} \quad I = P_1 x_1 + P_2 x_2" />
          تابع لاگرانژ مربوطه به شکل زیر است:
          <BlockMath math="\mathcal{L} = U(x_1, x_2) + \lambda (I - P_1 x_1 - P_2 x_2)" />
          شرایط مرتبه اول (F.O.C) عبارتند از:
          <BlockMath math="\mathcal{L}_1 = U_1 - \lambda P_1 = 0" />
          <BlockMath math="\mathcal{L}_2 = U_2 - \lambda P_2 = 0" />
          <BlockMath math="\mathcal{L}_\lambda = I - P_1 x_1 - P_2 x_2 = 0" />
          با دیفرانسیل‌گیری کامل از سیستم فوق نسبت به تمام متغیرها (<InlineMath math="x_1, x_2, \lambda" />) و پارامترها (<InlineMath math="P_1, P_2, I" />) داریم:
          <BlockMath math="U_{11} dx_1 + U_{12} dx_2 - P_1 d\lambda = \lambda dP_1" />
          <BlockMath math="U_{21} dx_1 + U_{22} dx_2 - P_2 d\lambda = \lambda dP_2" />
          <BlockMath math="-P_1 dx_1 - P_2 dx_2 = -dI + x_1 dP_1 + x_2 dP_2" />
          این سیستم را می‌توان به فرم ماتریسی زیر نمایش داد که ماتریس ضرایب همان **ماتریس هشین مرزی** (<InlineMath math="\bar{H}" />) است:
          <BlockMath math="\begin{pmatrix} U_{11} & U_{12} & -P_1 \\ U_{21} & U_{22} & -P_2 \\ -P_1 & -P_2 & 0 \end{pmatrix} \begin{pmatrix} dx_1 \\ dx_2 \\ d\lambda \end{pmatrix} = \begin{pmatrix} \lambda dP_1 \\ \lambda dP_2 \\ -dI + x_1 dP_1 + x_2 dP_2 \end{pmatrix}" />
          برای یافتن اثر تغییر قیمت کالا ۱ روی مقدار آن (<InlineMath math="\partial x_1 / \partial P_1" />) با فرض ثابت بودن قیمت کالا ۲ و درآمد (<InlineMath math="dP_2=0, dI=0" />)، بردار سمت راست به صورت <InlineMath math="(\lambda dP_1, 0, x_1 dP_1)^T" /> در می‌آید. با استفاده از **قاعده کرامر** برای حل مجهول اول (<InlineMath math="dx_1" />):
          <BlockMath math="dx_1 = \frac{\begin{vmatrix} \lambda dP_1 & U_{12} & -P_1 \\ 0 & U_{22} & -P_2 \\ x_1 dP_1 & -P_2 & 0 \end{vmatrix}}{|\bar{H}|} \implies \frac{\partial x_1}{\partial P_1} = \lambda \frac{\bar{H}_{11}}{|\bar{H}|} + x_1 \frac{\bar{H}_{31}}{|\bar{H}|}" />
          جایی که <InlineMath math="\bar{H}_{ij}" /> همسازه‌های ماتریس هشین مرزی هستند.
          حالا برای پیدا کردن اثر درآمد بر مصرف کالا ۱ (<InlineMath math="\partial x_1 / \partial I" />) با فرض ثبات قیمت‌ها (<InlineMath math="dP_1=0, dP_2=0" />)، بردار سمت راست به صورت <InlineMath math="(0, 0, -dI)^T" /> در می‌آید. طبق قاعده کرامر:
          <BlockMath math="dx_1 = \frac{\begin{vmatrix} 0 & U_{12} & -P_1 \\ 0 & U_{22} & -P_2 \\ -dI & -P_2 & 0 \end{vmatrix}}{|\bar{H}|} \implies \frac{\partial x_1}{\partial I} = -\frac{\bar{H}_{31}}{|\bar{H}|} \implies \frac{\bar{H}_{31}}{|\bar{H}|} = -\frac{\partial x_1}{\partial I}" />
          با جایگذاری این نتیجه در رابطه تغییر قیمت اول خواهیم داشت:
          <BlockMath math="\frac{\partial x_1}{\partial P_1} = \lambda \frac{\bar{H}_{11}}{|\bar{H}|} - x_1 \frac{\partial x_1}{\partial I}" />
          جمله اول در واقع اثر تغییر قیمت بر تقاضای جبرانی (با ثابت نگه داشتن مطلوبیت <InlineMath math="\bar{U}" />) است:
          <BlockMath math="\left. \frac{\partial x_1}{\partial P_1} \right|_{\bar{U}} = \lambda \frac{\bar{H}_{11}}{|\bar{H}|}" />
          بنابراین، رابطه نهایی اسلاتسکی حاصل می‌شود:
          <BlockMath math="\frac{\partial x_1}{\partial P_1} = \left. \frac{\partial x_1}{\partial P_1} \right|_{\bar{U}} - x_1 \frac{\partial x_1}{\partial I}" />
        </p>
      </div>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginTop: "1rem" }}>
        همچنین اثر متقاطع (تأثیر قیمت کالای دیگر روی تقاضای کالای اول) به صورت زیر است:
      </p>
      <BlockMath math="\frac{\partial x_i}{\partial P_j} = \left. \frac{\partial x_i}{\partial P_j} \right|_{\bar{U}} - x_j \frac{\partial x_i}{\partial I}" />

      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. معادلات اسلاتسکی بر حسب کشش‌ها</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        با ضرب و تقسیم مقادیر مناسب، معادله اسلاتسکی به فرم کشش (Elasticity) تبدیل می‌شود که مقایسه بدون واحد را ممکن می‌سازد:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--primary)' }}>
        <BlockMath math="\varepsilon_j = \bar{\varepsilon}_j - w_j \cdot \eta_j" />
      </div>
      
      <ul style={{ listStyleType: "none", paddingLeft: "0", color: "var(--text-muted)", lineHeight: "2", marginTop: "1rem", display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <li><InlineMath math="\varepsilon_j" /> : کشش قیمتی تقاضای مارشالی</li>
        <li><InlineMath math="\bar{\varepsilon}_j" /> : کشش قیمتی تقاضای هیکسی (جبرانی)</li>
        <li><InlineMath math="w_j = \frac{P_j x_j}{I}" /> : سهم مخارج کالای <InlineMath math="j" /> از درآمد</li>
        <li><InlineMath math="\eta_j" /> : کشش درآمدی کالا</li>
      </ul>

      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Activity style={{ color: 'var(--success)' }} />
        ۵. قیود جمعی (Aggregation Conditions)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        به دلیل وجود محدودیت بودجه، کشش‌های قیمتی و درآمدی تمامی کالاها با هم ارتباط سیستماتیک دارند:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>شرط جمعی کورنو (Cournot Aggregation)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            مجموع وزنی کشش‌های قیمتی (خودی و متقاطع) نسبت به تغییر قیمت کالای <InlineMath math="j" /> برابر است با قرینه سهم آن کالا از درآمد:
          </p>
          <div style={{ margin: '1rem 0' }}>
            <BlockMath math="\sum_{i=1}^{n} w_i \varepsilon_{ij} = -w_j" />
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>برای دو کالا: <InlineMath math="w_1 \varepsilon_{11} + w_2 \varepsilon_{21} = -w_1" /></p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>شرط جمعی انگل (Engel Aggregation)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            مجموع وزنی کشش‌های درآمدی تمامی کالاها همواره برابر یک است. این یعنی مصرف‌کننده نمی‌تواند تمام درآمد اضافه‌اش را فقط صرف کالاهای پست کند.
          </p>
          <div style={{ margin: '1rem 0' }}>
            <BlockMath math="\sum_{i=1}^{n} w_i \eta_i = 1" />
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>حداقل یکی از کالاها باید نرمال باشد.</p>
        </div>
      </div>

    </div>
  );
};

export default Subpage3;
