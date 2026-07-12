import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Calculator, LineChart, RefreshCw, Layers } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Calculator style={{ color: 'var(--primary)' }} />
        نظریه هزینه، دوگانگی و لم شپارد
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        توابع هزینه، بازتابی از توابع تولید هستند. هر ویژگی‌ای که تابع تولید داشته باشد، اثر آن به شکل معکوس در تابع هزینه دیده می‌شود. به این رابطه متقابل، <strong>دوگانگی در تولید (Duality in Production)</strong> می‌گویند.
      </p>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <LineChart size={20} />
        ۱. رابطه عکس تولید و هزینه
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        در کوتاه‌مدت، زمانی که قانون بازده نزولی حاکم می‌شود (تولید نهایی کاهش می‌یابد)، هزینه‌های نهایی رو به افزایش می‌گذارند. اثبات ریاضی این موضوع بسیار ساده است:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>هزینه متغیر متوسط (AVC) و تولید متوسط (AP)</h4>
          <BlockMath math="AVC = \frac{TVC}{Q} = \frac{w \cdot L}{Q} = \frac{w}{Q/L}" />
          <BlockMath math="\Rightarrow AVC = \frac{w}{AP_L}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
            وقتی تولید متوسط ماکزیمم می‌شود، هزینه متغیر متوسط مینیمم است.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>هزینه نهایی (MC) و تولید نهایی (MP)</h4>
          <BlockMath math="MC = \frac{\partial TVC}{\partial Q} = \frac{\partial (wL)}{\partial Q} = w \cdot \frac{\partial L}{\partial Q}" />
          <BlockMath math="\Rightarrow MC = \frac{w}{MP_L}" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
            وقتی تولید نهایی ماکزیمم می‌شود، هزینه نهایی مینیمم است.
          </p>
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <RefreshCw size={20} />
        ۲. استخراج تابع هزینه از تابع تولید (مسیر توسعه)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برای رسیدن از تابع تولید به تابع هزینه، از <strong>مسیر توسعه بنگاه (Expansion Path)</strong> استفاده می‌کنیم. مسیر توسعه مکان هندسی نقاطی است که در آن‌ها شرط بهینه (<InlineMath math="\frac{MP_1}{MP_2} = \frac{r_1}{r_2}" />) برقرار است.
      </p>

      <div className="example-box" style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--warning)', marginBottom: '1rem' }}>مثال: استخراج تابع هزینه از تابع کاب‌داگلاس</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع تولید <InlineMath math="q = x_1^{0.5} x_2^{0.5}" /> است. می‌خواهیم <InlineMath math="TC" /> را پیدا کنیم:
        </p>
        
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>تشکیل مسیر توسعه:</strong>
            <BlockMath math="\frac{MP_{X_1}}{MP_{X_2}} = \frac{r_1}{r_2} \Rightarrow \frac{0.5 x_1^{-0.5} x_2^{0.5}}{0.5 x_1^{0.5} x_2^{-0.5}} = \frac{r_1}{r_2} \Rightarrow \frac{x_2}{x_1} = \frac{r_1}{r_2}" />
          </li>
          <li>
            <strong>به دست آوردن تقاضای نهاده‌ها:</strong> مقدار <InlineMath math="x_2 = \frac{r_1 x_1}{r_2}" /> را در تابع تولید قرار می‌دهیم:
            <BlockMath math="q = x_1^{0.5} \left( \frac{r_1 x_1}{r_2} \right)^{0.5} = x_1 \left( \frac{r_1}{r_2} \right)^{0.5} \Rightarrow x_1^* = q \left( \frac{r_2}{r_1} \right)^{0.5}" />
            به همین ترتیب: <InlineMath math="x_2^* = q \left( \frac{r_1}{r_2} \right)^{0.5}" />
          </li>
          <li>
            <strong>جایگذاری در معادله هزینه:</strong>
            <BlockMath math="TC = r_1 x_1^* + r_2 x_2^* = r_1 \left[ q \left( \frac{r_2}{r_1} \right)^{0.5} \right] + r_2 \left[ q \left( \frac{r_1}{r_2} \right)^{0.5} \right]" />
            <BlockMath math="\Rightarrow TC = 2 q r_1^{0.5} r_2^{0.5}" />
          </li>
        </ol>
      </div>

      <div className="example-box" style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>مثال عددی تشریحی و کامل: استخراج مسیر توسعه و تابع هزینه برای تابع تولید CES</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع تولید یک بنگاه از نوع CES (کشش جانشینی ثابت) با مشخصات زیر باشد:
          <BlockMath math="Q = \left[ 0.5 L^{-1} + 0.5 K^{-1} \right]^{-1}" />
          در اینجا پارامتر جانشینی <InlineMath math="\rho = -1" /> است که کشش جانشینی آن برابر با <InlineMath math="\sigma = \frac{1}{1-\rho} = \frac{1}{2} = 0.5" /> است. دستمزد نیروی کار را با <InlineMath math="w" /> و نرخ اجاره سرمایه را با <InlineMath math="r" /> نشان می‌دهیم. هدف محاسبه مسیر توسعه و تابع هزینه کل بلندمدت (<InlineMath math="TC" />) است.
        </p>

        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>محاسبه تولید نهایی نهاده‌ها (MPL و MPK):</strong>
            <BlockMath math="MP_L = \frac{\partial Q}{\partial L} = - \left[ 0.5 L^{-1} + 0.5 K^{-1} \right]^{-2} \cdot (-0.5 L^{-2}) = 0.5 \left( \frac{Q}{L} \right)^2" />
            <BlockMath math="MP_K = \frac{\partial Q}{\partial K} = - \left[ 0.5 L^{-1} + 0.5 K^{-1} \right]^{-2} \cdot (-0.5 K^{-2}) = 0.5 \left( \frac{Q}{K} \right)^2" />
          </li>
          <li>
            <strong>تشکیل مسیر توسعه (Expansion Path):</strong>
            با برابر قرار دادن نرخ نهایی جانشینی فنی (MRTS) با نسبت قیمت نهاده‌ها (<InlineMath math="w/r" />):
            <BlockMath math="MRTS = \frac{MP_L}{MP_K} = \frac{0.5 \left( \frac{Q}{L} \right)^2}{0.5 \left( \frac{Q}{K} \right)^2} = \left( \frac{K}{L} \right)^2 = \frac{w}{r}" />
            با گرفتن جذر از طرفین، <strong>مسیر توسعه بهینه</strong> به دست می‌آید:
            <BlockMath math="\frac{K}{L} = \sqrt{\frac{w}{r}} \Rightarrow K = L \sqrt{\frac{w}{r}}" />
          </li>
          <li>
            <strong>محاسبه توابع تقاضای شرطی (بهینه) نهاده‌ها:</strong>
            با جایگذاری رابطه مسیر توسعه در تابع تولید داریم:
            <BlockMath math="Q^{-1} = 0.5 L^{-1} + 0.5 K^{-1} \Rightarrow Q^{-1} = 0.5 L^{-1} + 0.5 \left( L \sqrt{\frac{w}{r}} \right)^{-1}" />
            <BlockMath math="Q^{-1} = 0.5 L^{-1} \left[ 1 + \sqrt{\frac{r}{w}} \right] = 0.5 L^{-1} \left[ \frac{\sqrt{w} + \sqrt{r}}{\sqrt{w}} \right]" />
            با معکوس کردن و حل برای <InlineMath math="L" />، تقاضای نیروی کار به دست می‌آید:
            <BlockMath math="L^* = 0.5 Q \left( \frac{\sqrt{w} + \sqrt{r}}{\sqrt{w}} \right)" />
            به طور مشابه و با توجه به تقارن مسئله، تقاضای سرمایه به دست می‌آید:
            <BlockMath math="K^* = 0.5 Q \left( \frac{\sqrt{w} + \sqrt{r}}{\sqrt{r}} \right)" />
          </li>
          <li>
            <strong>استخراج تابع هزینه کل (<InlineMath math="TC" />):</strong>
            با جایگذاری تقاضاهای بهینه نهاده‌ها در تعریف هزینه کل (<InlineMath math="TC = w L + r K" />):
            <BlockMath math="TC = w \left[ 0.5 Q \left( \frac{\sqrt{w} + \sqrt{r}}{\sqrt{w}} \right) \right] + r \left[ 0.5 Q \left( \frac{\sqrt{w} + \sqrt{r}}{\sqrt{r}} \right) \right]" />
            <BlockMath math="TC = 0.5 Q (\sqrt{w} + \sqrt{r}) \sqrt{w} + 0.5 Q (\sqrt{w} + \sqrt{r}) \sqrt{r}" />
            با فاکتورگیری از عبارت مشترک:
            <BlockMath math="TC = 0.5 Q (\sqrt{w} + \sqrt{r}) (\sqrt{w} + \sqrt{r}) = 0.5 Q (\sqrt{w} + \sqrt{r})^2" />
          </li>
        </ol>
        <p style={{ color: 'var(--primary)', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
          بنابراین، تابع هزینه کل برای این تابع تولید CES برابر است با: <InlineMath math="TC = 0.5 Q (\sqrt{w} + \sqrt{r})^2" />
        </p>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
        <img src="/svg/66-expansion-path.svg" alt="مسیر توسعه" style={{ maxWidth: '100%', maxHeight: '250px' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
          مسیر توسعه با وصل کردن نقاط مماس منحنی‌های هزینه یکسان و تولید یکسان (Isoquants) به دست می‌آید.
        </p>
      </div>

      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Layers size={20} />
        ۳. استخراج تابع تولید از تابع هزینه (لم شپارد)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        فرآیند عکس نیز امکان‌پذیر است. اگر تابع هزینه در دسترس باشد، می‌توان تابع تولید را با استفاده از <strong>لم شپارد (Shephard's Lemma)</strong> استخراج کرد. لم شپارد می‌گوید مشتق تابع حداقل هزینه نسبت به قیمت هر نهاده، برابر با تقاضای جبرانی (شرطی) آن نهاده است.
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--success)', marginBottom: '2rem' }}>
        <BlockMath math="\frac{\partial TC(r_1, r_2, q)}{\partial r_1} = X_1^* \quad , \quad \frac{\partial TC(r_1, r_2, q)}{\partial r_2} = X_2^*" />
      </div>

      <div className="example-box">
        <h4 style={{ color: 'var(--success)', marginBottom: '1rem' }}>مثال: معکوس کردن تابع هزینه قبلی</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          فرض کنید تابع هزینه <InlineMath math="C = 2 q r_1^{0.5} r_2^{0.5}" /> است. می‌خواهیم تابع تولید را به دست آوریم:
        </p>
        
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>استفاده از لم شپارد:</strong>
            <BlockMath math="\frac{\partial C}{\partial r_1} = 2 q (0.5) r_1^{-0.5} r_2^{0.5} = q \left( \frac{r_2}{r_1} \right)^{0.5} = x_1" />
            <BlockMath math="\frac{\partial C}{\partial r_2} = 2 q (0.5) r_1^{0.5} r_2^{-0.5} = q \left( \frac{r_1}{r_2} \right)^{0.5} = x_2" />
          </li>
          <li>
            <strong>محاسبه نسبت قیمت‌ها از هر معادله:</strong>
            <BlockMath math="\left( \frac{r_2}{r_1} \right)^{0.5} = \frac{x_1}{q} \Rightarrow \frac{r_2}{r_1} = \left( \frac{x_1}{q} \right)^2 \Rightarrow \frac{r_1}{r_2} = \left( \frac{q}{x_1} \right)^2" />
            <BlockMath math="\left( \frac{r_1}{r_2} \right)^{0.5} = \frac{x_2}{q} \Rightarrow \frac{r_1}{r_2} = \left( \frac{x_2}{q} \right)^2" />
          </li>
          <li>
            <strong>مساوی قرار دادن دو نسبت و حذف قیمت‌ها:</strong>
            <BlockMath math="\left( \frac{q}{x_1} \right)^2 = \left( \frac{x_2}{q} \right)^2 \Rightarrow \frac{q^2}{x_1^2} = \frac{x_2^2}{q^2}" />
            <BlockMath math="q^4 = x_1^2 x_2^2 \quad \xrightarrow{\text{جذر چهارم}} \quad q = x_1^{0.5} x_2^{0.5}" />
          </li>
        </ol>
        <p style={{ color: 'var(--success)', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
          بنابراین با موفقیت به همان تابع تولید اولیه بازگشتیم! (دوگانگی کامل)
        </p>
      </div>

    </div>
  );
};

export default Subpage3;
