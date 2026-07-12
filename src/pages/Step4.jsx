import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { 
  Shuffle, 
  Boxes, 
  GitCommit, 
  Handshake,
  Grid
} from 'lucide-react';

const Step4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* Title Header */}
      <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--primary)' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          گام ۴: ساختارهای بازار بازارهای استراتژیک (رقابت انحصاری و الیگوپولی)
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          در این بخش به تحلیل و اثبات ریاضی ساختارهای بازار استراتژیک شامل بازار رقابت انحصاری (تقاضای مورد انتظار صوری و مؤثر واقعی در کوتاه‌مدت و بلندمدت)، مدل‌های الیگوپولی همگن (کورنو، برتراند، استاکلبرگ و کارتل)، مدل تقاضای شکسته (سویزی) برای توجیه ثبات قیمت، و در نهایت انحصار دوجانبه (Bilateral Monopoly) می‌پردازیم. مفاهیم همراه با فرمول‌های علمی و نمودارهای اصلاح‌شده تعادل ارائه شده‌اند.
        </p>
      </div>

      {/* 1. Monopolistic Competition */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Shuffle style={{ color: 'var(--primary)' }} />
          ۱. بازار رقابت انحصاری (Monopolistic Competition)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          بازار رقابت انحصاری ساختاری است که در آن تعداد زیادی تولیدکننده وجود دارند که کالاهای متمایز اما جانشین نزدیک عرضه می‌کنند. تمایز کالاها به هر بنگاه نوعی قدرت انحصاری ملایم در بازار می‌دهد که منجر به نزولی بودن منحنی تقاضای بنگاه می‌شود. اما ورود آزادانه بنگاه‌ها در بلندمدت، سود اقتصادی را به صفر می‌رساند.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) منحنی‌های تقاضای صوری (<InlineMath math="d" />) و واقعی (<InlineMath math="D" />)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این بازار هر بنگاه با دو نوع منحنی تقاضا روبرو است:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'decimal', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>منحنی تقاضای مورد انتظار یا صوری (<InlineMath math="d" />):</strong> 
            بنگاه فرض می‌کند که در صورت تغییر قیمت خود، سایر رقبا قیمتشان را تغییر نخواهند داد. به دلیل این فرض، این منحنی بسیار کشش‌پذیرتر و ملایم‌تر است. تابع تقاضای معکوس بنگاه <InlineMath math="k" /> به شکل زیر است:
            <div className="formula-box" style={{ marginTop: '0.5rem' }}>
              <BlockMath math="P_k = A_k - a_k q_k - \sum_{i=1, i \neq k}^{n} b_{ki} q_i" />
            </div>
            با فرض تقارن کامل بنگاه‌ها، اندیس‌ها را حذف کرده و تأثیر تولید رقبا را در کوتاه‌مدت ثابت در نظر می‌گیریم:
            <div className="formula-box" style={{ marginTop: '0.5rem' }}>
              <BlockMath math="P_k = A - a q_k - b \sum_{i \neq k} q_i" />
            </div>
          </li>
          <li>
            <strong>منحنی تقاضای مؤثر یا واقعی (<InlineMath math="D" />):</strong> 
            این منحنی نشان‌دهنده شرایطی است که با تغییر قیمت یک بنگاه، تمامی رقبای دیگر نیز به طور هم‌زمان قیمت‌های خود را تغییر می‌دهند تا سهم بازارشان حفظ شود. این منحنی کم‌کشش‌تر و پرشیب‌تر است. تحت فرض تقارن در بلندمدت، مقدار تولید تمام بنگاه‌ها با هم برابر است (<InlineMath math="q_i = q_k" />):
            <div className="formula-box" style={{ marginTop: '0.5rem' }}>
              <BlockMath math="P_k = A - a q_k - b (n-1) q_k \implies P_k = A - [a + (n-1)b] q_k" />
            </div>
            بنابراین، شیب منحنی تقاضای واقعی (<InlineMath math="D" />) به اندازه <InlineMath math="(n-1)b" /> از شیب منحنی تقاضای صوری تندتر است.
          </li>
        </ul>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/103-nemodar.svg" alt="منحنی تقاضای مورد انتظار و واقعی" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۴.۱: منحنی تقاضای صوری (d) و منحنی تقاضای واقعی (D) در رقابت انحصاری</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ب) تعادل کوتاه‌مدت</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در کوتاه‌مدت، بنگاه بر اساس منحنی تقاضای مورد انتظار خود (<InlineMath math="dd" />) تصمیم‌گیری می‌کند و تصور می‌کند رقبا عکس‌العملی نشان نمی‌دهند. شرط تعادل حداکثرسازی سود عبارت است از:
        </p>
        <div className="formula-box">
          <BlockMath math="MR_{expected} = MC" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با توجه به اینکه شیب درآمد نهایی حاصل از تقاضای صوری خطی دو برابر شیب تقاضاست:
        </p>
        <div className="formula-box">
          <BlockMath math="A - 2a q_k - b \sum_{i \neq k} q_i = MC_k" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          نقطه تعادل حاصل ممکن است منجر به سود اقتصادی مثبت، صفر یا منفی شود.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/105-nemodar1.svg" alt="تعادل کوتاه مدت رقابت انحصاری" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۴.۲: تعادل کوتاه‌مدت بنگاه در بازار رقابت انحصاری</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ج) تعادل بلندمدت</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در بلندمدت با ورود بنگاه‌های جدید، سهم بازار هر بنگاه کاهش یافته و سود اقتصادی به سمت صفر حرکت می‌کند. شرایط تعادل بلندمدت عبارتند از:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            منحنی تقاضای صوری (<InlineMath math="d" />) بر منحنی هزینه متوسط بلندمدت (<InlineMath math="LAC" />) مماس می‌شود (سود اقتصادی صفر): <InlineMath math="P = LAC" />.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            نقطه تعادل روی منحنی تقاضای واقعی (<InlineMath math="D" />) قرار دارد، یعنی در مقدار تعادلی بلندمدت منحنی‌های صوری و واقعی یکدیگر را قطع می‌کنند.
          </li>
          <li>
            درآمد نهایی صوری با هزینه نهایی بلندمدت برابر است:
            <div className="formula-box" style={{ marginTop: '0.5rem' }}>
              <BlockMath math="MR_{expected} = LMC \implies A - 2a q_k - b(n-1)q_k = LMC" />
            </div>
          </li>
        </ul>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          توجه داشته باشید که در تعادل بلندمدت رقابت انحصاری، تولید در حداقل منحنی هزینه متوسط (<InlineMath math="LAC" />) انجام نمی‌شود و بنگاه با «ظرفیت اضافی بلااستفاده» (Excess Capacity) کار می‌کند.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/105-nemodar2.svg" alt="تعادل بلندمدت رقابت انحصاری" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۴.۳: تعادل بلندمدت بنگاه با فرض سود صفر و ظرفیت اضافی</p>
          </div>
        </div>

      </div>

      {/* 2. Homogeneous Oligopoly Models */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Boxes style={{ color: 'var(--primary)' }} />
          ۲. مدل‌های الیگوپولی همگن (Homogeneous Oligopoly Models)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          در بازارهای انحصار چندجانبه با کالای همگن، تقاضای کل بازار تابعی از مجموع مقادیر تولید کل بنگاه‌هاست:
          <InlineMath math="P = P(Q) = P(q_1 + q_2 + \dots + q_n)" />. در ادامه ۴ مدل اصلی بر اساس فرضیات تعاملی متفاوت بررسی می‌شوند.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) مدل کورنو (Cournot Model)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در مدل کورنو، بنگاه‌ها به طور هم‌زمان و مستقل مقدار تولید خود را به عنوان متغیر تصمیم انتخاب می‌کنند. هر بنگاه تولید رقیب خود را ثابت فرض می‌کند (<InlineMath math="\frac{\partial q_j}{\partial q_i} = 0" />).
        </p>
        <div className="formula-box">
          <BlockMath math="\max_{q_i} \pi_i = P(q_1 + \dots + q_n) \cdot q_i - C_i(q_i) \implies FOC: P(Q) + q_i P'(Q) - MC_i(q_i) = 0" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در شرایط دو جانبه (Duopoly) با تقاضای خطی <InlineMath math="P = A - B(q_1 + q_2)" /> و هزینه‌های نهایی ثابت <InlineMath math="c_1" /> و <InlineMath math="c_2" />، توابع عکس‌العمل (Reaction Functions) به صورت زیر است:
        </p>
        <div className="formula-box">
          <BlockMath math="q_1 = \frac{A - c_1 - B q_2}{2B}, \quad q_2 = \frac{A - c_2 - B q_1}{2B}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با حل هم‌زمان این دو معادله و با فرض تقارن هزینه (<InlineMath math="c_1 = c_2 = c" />)، تعادل کورنو به دست می‌آید:
        </p>
        <div className="formula-box">
          <BlockMath math="q_i^* = \frac{A - c}{3B}, \quad Q^* = \frac{2(A - c)}{3B}, \quad P^* = \frac{A + 2c}{3}, \quad \pi_i^* = \frac{(A - c)^2}{9B}" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ب) مدل برتراند (Bertrand Model)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در مدل برتراند، متغیر تصمیم بنگاه‌ها قیمت است. به دلیل همگن بودن کالاها، بنگاهی که قیمت پایین‌تری ارائه دهد کل بازار را تصاحب می‌کند. این موضوع محرکی برای جنگ قیمتی شدید (Undercutting) می‌شود.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          شرط تعادل در این حالت به برابری قیمت با هزینه نهایی می‌انجامد (پارادوکس برتراند):
        </p>
        <div className="formula-box">
          <BlockMath math="P_1^* = P_2^* = MC = c" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این حالت، سود اقتصادی هر دو بنگاه صفر است و مقدار تولید بازار برابر با رقابت کامل است:
        </p>
        <div className="formula-box">
          <BlockMath math="Q^* = \frac{A - c}{B}, \quad q_i^* = \frac{A - c}{2B}, \quad \pi_i^* = 0" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>ج) مدل استاکلبرگ (Stackelberg Model)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          این مدل رهبر-پیرو در مقدار تولید است. رهبر (بنگاه ۱) زودتر حرکت کرده و مقدار خود را تعیین می‌کند و پیرو (بنگاه ۲) بر اساس مقدار تعیین شده تصمیم می‌گیرد. رهبر با استفاده از تابع واکنش کورنو پیرو، سود خود را به حداکثر می‌رساند:
        </p>
        <div className="formula-box">
          <BlockMath math="q_2 = \frac{A - c - B q_1}{2B}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          رهبر این رفتار پیرو را در سود خود قرار می‌دهد:
        </p>
        <div className="formula-box">
          <BlockMath math="\max_{q_1} \pi_1 = \left[ A - B\left(q_1 + \frac{A - c - B q_1}{2B}\right) \right] q_1 - c q_1 = \left( \frac{A - c - B q_1}{2} \right) q_1" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با مشتق‌گیری نسبت به تولید رهبر و برابر صفر قرار دادن آن، مقادیر تعادل به دست می‌آیند:
        </p>
        <div className="formula-box">
          <BlockMath math="q_1^* = \frac{A - c}{2B} \quad (\text{رهبر}), \quad q_2^* = \frac{A - c}{4B} \quad (\text{پیرو})" />
        </div>
        <div className="formula-box">
          <BlockMath math="Q^* = \frac{3(A - c)}{4B}, \quad P^* = \frac{A + 3c}{4}, \quad \pi_1^* = \frac{(A - c)^2}{8B}, \quad \pi_2^* = \frac{(A - c)^2}{16B}" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>د) مدل کارتل یا تبانی (Cartel Model)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این مدل، بنگاه‌ها به جای رقابت، همکاری کرده و سود کل بازار را حداکثر می‌کنند (مشابه انحصار کامل چندکارخانه‌ای):
        </p>
        <div className="formula-box">
          <BlockMath math="\max_{q_1, q_2} \Pi = P(q_1+q_2)(q_1+q_2) - C_1(q_1) - C_2(q_2) \implies MR(Q) = MC_1(q_1) = MC_2(q_2)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با فرض تقارن هزینه و تقسیم مساوی بازار و سودها:
        </p>
        <div className="formula-box">
          <BlockMath math="Q^* = \frac{A - c}{2B}, \quad P^* = \frac{A + c}{2}, \quad q_i^* = \frac{A - c}{4B}, \quad \pi_i^* = \frac{(A - c)^2}{8B}, \quad \Pi^* = \frac{(A - c)^2}{4B}" />
        </div>

        {/* Matrix Comparison Table */}
        <h3 style={{ color: 'var(--primary)', marginTop: '3rem', marginBottom: '1.5rem' }}>جدول مقایسه‌ای ماتریسی مدل‌های الیگوپولی همگن</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          جدول زیر مقایسه دقیق متغیرها و نتایج تعادلی هر چهار مدل الیگوپولی همگن را تحت فرض تقاضای خطی <InlineMath math="P = A - B(q_1 + q_2)" /> و هزینه‌های نهایی یکسان و ثابت <InlineMath math="MC_1 = MC_2 = c" /> نشان می‌دهد:
        </p>
        
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', borderStyle: 'hidden', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--card-border)', background: 'rgba(59, 130, 246, 0.1)' }}>
                <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--primary-hover)' }}>مدل الیگوپولی</th>
                <th style={{ padding: '1rem', fontWeight: '800' }}>متغیر تصمیم</th>
                <th style={{ padding: '1rem', fontWeight: '800' }}>شرط تعادل ریاضی</th>
                <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--warning)' }}>قیمت تعادلی (<InlineMath math="P^*" />)</th>
                <th style={{ padding: '1rem', fontWeight: '800' }}>تولید هر بنگاه (<InlineMath math="q_i^*" />)</th>
                <th style={{ padding: '1rem', fontWeight: '800' }}>تولید کل بازار (<InlineMath math="Q^*" />)</th>
                <th style={{ padding: '1rem', fontWeight: '800' }}>سود هر بنگاه (<InlineMath math="\pi_i^*" />)</th>
                <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--success)' }}>سود کل بازار (<InlineMath math="\Pi^*" />)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '1rem', fontWeight: '600' }}>برتراند (Bertrand)</td>
                <td style={{ padding: '1rem' }}>قیمت (<InlineMath math="P_i" />)</td>
                <td style={{ padding: '1rem' }}><InlineMath math="P_i = MC = c" /></td>
                <td style={{ padding: '1rem', color: 'var(--warning)', fontWeight: '600' }}><InlineMath math="c" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{A - c}{2B}" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{A - c}{B}" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="0" /></td>
                <td style={{ padding: '1rem', color: 'var(--success)', fontWeight: '600' }}><InlineMath math="0" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '1rem', fontWeight: '600' }}>کورنو (Cournot)</td>
                <td style={{ padding: '1rem' }}>مقدار (<InlineMath math="q_i" />)</td>
                <td style={{ padding: '1rem' }}><InlineMath math="MR_i = MC_i" /> با فرض تولید ثابت رقیب</td>
                <td style={{ padding: '1rem', color: 'var(--warning)', fontWeight: '600' }}><InlineMath math="\frac{A + 2c}{3}" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{A - c}{3B}" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{2(A - c)}{3B}" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{(A - c)^2}{9B}" /></td>
                <td style={{ padding: '1rem', color: 'var(--success)', fontWeight: '600' }}><InlineMath math="\frac{2(A - c)^2}{9B}" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '1rem', fontWeight: '600' }}>استاکلبرگ (Stackelberg)</td>
                <td style={{ padding: '1rem' }}>مقدار (<InlineMath math="q_i" />) به ترتیب زمان</td>
                <td style={{ padding: '1rem' }}>ماکزیمم‌سازی سود رهبر با جایگذاری واکنش پیرو</td>
                <td style={{ padding: '1rem', color: 'var(--warning)', fontWeight: '600' }}><InlineMath math="\frac{A + 3c}{4}" /></td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  رهبر: <InlineMath math="\frac{A - c}{2B}" /> <br />
                  پیرو: <InlineMath math="\frac{A - c}{4B}" />
                </td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{3(A - c)}{4B}" /></td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  رهبر: <InlineMath math="\frac{(A - c)^2}{8B}" /> <br />
                  پیرو: <InlineMath math="\frac{(A - c)^2}{16B}" />
                </td>
                <td style={{ padding: '1rem', color: 'var(--success)', fontWeight: '600' }}><InlineMath math="\frac{3(A - c)^2}{16B}" /></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '1rem', fontWeight: '600' }}>کارتل / تبانی (Cartel)</td>
                <td style={{ padding: '1rem' }}>مقدار مشترک (<InlineMath math="Q" />)</td>
                <td style={{ padding: '1rem' }}><InlineMath math="MR(Q) = MC_i" /> برای سود کل صنعت</td>
                <td style={{ padding: '1rem', color: 'var(--warning)', fontWeight: '600' }}><InlineMath math="\frac{A + c}{2}" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{A - c}{4B}" /> (تقسیم مساوی)</td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{A - c}{2B}" /></td>
                <td style={{ padding: '1rem' }}><InlineMath math="\frac{(A - c)^2}{8B}" /></td>
                <td style={{ padding: '1rem', color: 'var(--success)', fontWeight: '600' }}><InlineMath math="\frac{(A - c)^2}{4B}" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <strong>تحلیل مقایسه‌ای ترتیبی:</strong>
          <br />
          ۱. <strong>تولید تعادلی بازار (<InlineMath math="Q^*" />):</strong> برتراند (رقابت کامل) &gt; استاکلبرگ &gt; کورنو &gt; کارتل
          <br />
          ۲. <strong>قیمت تعادلی بازار (<InlineMath math="P^*" />):</strong> کارتل &gt; کورنو &gt; استاکلبرگ &gt; برتراند (رقابت کامل)
          <br />
          ۳. <strong>سود کل بازار (<InlineMath math="\Pi^*" />):</strong> کارتل &gt; کورنو &gt; استاکلبرگ &gt; برتراند (رقابت کامل)
        </p>

      </div>

      {/* 3. Sweezy Kinked Demand Curve */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <GitCommit style={{ color: 'var(--primary)' }} />
          ۳. مدل تقاضای شکسته سویزی (Sweezy Kinked Demand Curve)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          مدل سویزی برای توجیه <strong>ثبات قیمت‌ها</strong> (Price Rigidity) در برخی بازارهای الیگوپولی ارائه شده است. فرضیه رفتاری این است که واکنش رقبا به تغییرات قیمتی نامتقارن است:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', marginBottom: '1.5rem' }}>
          <li>اگر بنگاه قیمت خود را افزایش دهد، سایر رقبا از او پیروی نمی‌کنند (تا سهم بازارشان افزایش یابد). تقاضای بالا کشش‌پذیرتر است (<InlineMath math="dd" />).</li>
          <li>اگر بنگاه قیمت خود را کاهش دهد، سایر رقبا فوراً پیروی می‌کنند (تا مشتریان خود را از دست ندهند). تقاضای پایین کم‌کشش‌تر است (<InlineMath math="DD" />).</li>
        </ul>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          این تغییر در کشش تقاضا، یک <strong>شکستگی (Kink)</strong> در قیمت جاری بازار (<InlineMath math="P_E" />) ایجاد می‌کند.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) ناپیوستگی درآمد نهایی (<InlineMath math="MR" />)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          به دلیل شکستگی منحنی تقاضا، منحنی درآمد نهایی در مقدار تعادلی (<InlineMath math="Q_E" />) دچار یک <strong>شکاف یا ناپیوستگی عمودی (Vertical Discontinuity)</strong> می‌شود. اگر تقاضای بخش بالایی <InlineMath math="P_1 = a_1 - b_1 q" /> و تقاضای بخش پایینی <InlineMath math="P_2 = a_2 - b_2 q" /> باشد، شکاف درآمد نهایی بین مقادیر زیر است:
        </p>
        <div className="formula-box">
          <BlockMath math="MR_{upper} = a_1 - 2b_1 q^* \quad \text{and} \quad MR_{lower} = a_2 - 2b_2 q^*" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          تا زمانی که منحنی هزینه نهایی (<InlineMath math="MC" />) از درون این شکاف عمودی عبور کند، تغییرات هزینه نهایی تأثیری بر قیمت تعادلی و مقدار تولید نخواهد داشت:
        </p>
        <div className="formula-box">
          <BlockMath math="MR_{lower} \le MC \le MR_{upper}" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/116-kinked-demand.svg" alt="نمودار تقاضای شکسته سویزی" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۴.۴: منحنی تقاضای شکسته سویزی و شکاف درآمد نهایی</p>
          </div>
        </div>

        <div className="example-box">
          <h4>بررسی مثال عددی کتاب (صفحه ۱۱۶)</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            توابع تقاضا و هزینه‌های داده شده:
          </p>
          <div className="formula-box">
            <BlockMath math="P_1 = 100 - 2q_1 - q_2, \quad MC_1 = 5q_1" />
            <BlockMath math="P_2 = 95 - q_1 - 3q_2, \quad MC_2 = 2.5 q_2" />
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            از حل هم‌زمان سودها، تعادل اولیه در نقطه <InlineMath math="q_1 = q_2 = 10" /> و قیمت‌ها به ترتیب در <InlineMath math="P_1^* = 70" /> و <InlineMath math="P_2^* = 55" /> برقرار است.
          </p>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'circle', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>قیمت‌های بالاتر از ۷۰ (رقبا پیروی نمی‌کنند و قیمت دوم در ۵۵ ثابت می‌ماند):</strong>
              <br />
              با قرار دادن <InlineMath math="P_2 = 55" /> در تقاضای دوم: <InlineMath math="55 = 95 - q_1 - 3q_2 \implies q_2 = \frac{40 - q_1}{3}" />.
              <br />
              با جایگذاری در تقاضای اول: <InlineMath math="P_1 = 100 - 2q_1 - \left(\frac{40 - q_1}{3}\right) = \frac{260 - 5q_1}{3}" />.
              <br />
              در نتیجه درآمد نهایی بالایی برابر است با: <InlineMath math="MR_1^{upper} = \frac{260 - 10q_1}{3} \xrightarrow{q_1=10} MR_1^{upper} = \frac{160}{3} \approx 53.33" />.
            </li>
            <li>
              <strong>قیمت‌های کمتر از ۷۰ (رقبا پیروی می‌کنند، یعنی به تناسب کاهش قیمت، سهم یکسانی دارند و فرض می‌شود <InlineMath math="q_2 = q_1" />):</strong>
              <br />
              با جایگذاری در تقاضای اول: <InlineMath math="P_1 = 100 - 2q_1 - q_1 = 100 - 3q_1" />.
              <br />
              درآمد نهایی پایینی برابر است با: <InlineMath math="MR_1^{lower} = 100 - 6q_1 \xrightarrow{q_1=10} MR_1^{lower} = 40" />.
            </li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            بنابراین، بازه ناپیوستگی درآمد نهایی بنگاه اول <InlineMath math="[40, 53.33]" /> است. از آنجا که هزینه نهایی بنگاه اول در مقدار تعادلی برابر است با <InlineMath math="MC_1(10) = 5(10) = 50" /> و این مقدار درون بازه ناپیوستگی قرار دارد، قیمت در <InlineMath math="P_1^* = 70" /> و مقدار تولید در <InlineMath math="q_1^* = 10" /> تثبیت شده و تغییر نخواهد کرد.
          </p>
        </div>

      </div>

      {/* 4. Bilateral Monopoly */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Handshake style={{ color: 'var(--primary)' }} />
          ۴. نظریه انحصار دوجانبه (Bilateral Monopoly)
        </h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          انحصار دوجانبه وضعیتی در بازار عوامل تولید (یا نهاده‌های واسطه‌ای) است که در آن تنها یک خریدار انحصاری (Monopsonist) و تنها یک فروشنده انحصاری (Monopolist) وجود دارد. در این ساختار، به دلیل اینکه طرفین پذیرنده قیمت نیستند، منحنی‌های عرضه و تقاضای استاندارد وجود ندارند و تعادل منحصر‌به‌فردی شکل نمی‌گیرد.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>الف) ساختار ریاضی و تعادل‌های سه‌گانه</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          فرض کنید خریدار از نهاده <InlineMath math="q_2" /> برای تولید محصول نهایی <InlineMath math="q_1 = h(q_2)" /> استفاده می‌کند و محصول را در بازار رقابتی با قیمت <InlineMath math="P_1" /> می‌فروشد:
        </p>
        <div className="formula-box">
          <BlockMath math="\pi_B = P_1 h(q_2) - P_2 q_2" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          فروشنده نیز نهاده <InlineMath math="q_2" /> را با هزینه تولید کل <InlineMath math="r H(q_2)" /> تولید می‌کند و به خریدار عرضه می‌کند:
        </p>
        <div className="formula-box">
          <BlockMath math="\pi_S = P_2 q_2 - r H(q_2)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بر اساس روابط قدرت بین طرفین، سه تعادل زیر متصور است:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'decimal', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>انحصار فروش (فروشنده رهبر / خریدار پیرو):</strong> 
            خریدار پذیرنده قیمت است و شرط FOC او منحنی تقاضای معکوس او را تعیین می‌کند: <InlineMath math="P_2 = P_1 h'(q_2) = VMP_{q_2}" />. فروشنده این تقاضا را در تابع سود خود قرار داده و آن را بهینه‌سازی می‌کند:
            <div className="formula-box" style={{ marginTop: '0.5rem' }}>
              <BlockMath math="MR_{seller} = MC_{seller} \implies P_1 h'(q_2) + P_1 h''(q_2) q_2 = r H'(q_2) \quad (\text{نقطه } S)" />
            </div>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>انحصار خرید (خریدار رهبر / فروشنده پیرو):</strong> 
            فروشنده پذیرنده قیمت فرض می‌شود و شرط FOC او عرضه معکوس را مشخص می‌کند: <InlineMath math="P_2 = r H'(q_2) = MC_{seller}" />. خریدار این رابطه را در سود خود جایگذاری می‌کند:
            <div className="formula-box" style={{ marginTop: '0.5rem' }}>
              <BlockMath math="VMP_{q_2} = MFC_{q_2} \implies P_1 h'(q_2) = r H'(q_2) + r H''(q_2) q_2 \quad (\text{نقطه } B)" />
            </div>
          </li>
          <li>
            <strong>تعادل شبه رقابتی:</strong> 
            هر دو طرف قیمت‌‌پذیر فرض می‌شوند و تعادل در تلاقی ارزش تولید نهایی و هزینه نهایی برقرار می‌گردد:
            <div className="formula-box" style={{ marginTop: '0.5rem' }}>
              <BlockMath math="P_1 h'(q_2) = r H'(q_2) \quad (\text{نقطه } C)" />
            </div>
          </li>
        </ul>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/125-bilateral-monopoly.svg" alt="نمودار انحصار دوجانبه" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۴.۵: نقاط تعادل در انحصار دوجانبه: انحصار فروش (S)، انحصار خرید (B)، و شبه رقابتی (C)</p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          مشاهده می‌شود که مقدار تولید بهینه کارتل برابر با مقدار تولید شبه رقابتی (<InlineMath math="q_{2C}" />) است. با این حال، قیمت نهایی <InlineMath math="P_2" /> از طریق قدرت چانه‌زنی طرفین تعیین می‌شود و بازه آن بین سود صفر برای خریدار (حد بالا) و سود صفر برای فروشنده (حد پایین) محدود است:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{r H(q_2)}{q_2} \le P_2 \le \frac{P_1 h(q_2)}{q_2}" />
        </div>

      </div>

      {/* 4. Detailed Duopoly Numerical Comparisons */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Grid style={{ color: 'var(--success)' }} />
          ۴. بررسی مثال عددی کتاب (صفحه ۱۰۹): مقایسه تمام مدل‌های الیگوپولی
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>صورت مسئله:</strong> در یک بازار انحصار دو جانبه (Duopoly) با کالا همگن، تابع تقاضای بازار به صورت <InlineMath math="P = 100 - Q" /> (که در آن <InlineMath math="Q = q_1 + q_2" /> است) داده شده است. هزینه‌های کل دو بنگاه عبارتند از:
          <BlockMath math="TC_1 = \frac{1}{4} q_1^2 + 2q_1 \implies MC_1 = \frac{1}{2} q_1 + 2" />
          <BlockMath math="TC_2 = \frac{1}{2} q_2^2 + 2 \implies MC_2 = q_2" />
          تعادل بازار (قیمت، مقادیر تولید و سود هر بنگاه) را در سناریوهای زیر حل کرده و با هم مقایسه کنید:
          <br />
          الف) مدل تبانی (کارتل)
          <br />
          ب) مدل رقابتی کورنو
          <br />
          ج) مدل رهبری استاکلبرگ (با فرض رهبری بنگاه ۱)
        </p>

        <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1.5rem' }}>حل تشریحی گام‌به‌گام:</p>
        <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '0.5rem' }}>
          <li>
            <strong>الف) راه‌حل تبانی (Cartel / Collusion):</strong>
            <br />
            بنگاه‌ها سود مشترک کل بازار را حداکثر می‌کنند:
            <BlockMath math="\max \Pi = P \cdot Q - TC_1 - TC_2 = (100 - q_1 - q_2)(q_1 + q_2) - \left(\frac{1}{4} q_1^2 + 2q_1\right) - \left(\frac{1}{2} q_2^2 + 2\right)" />
            شرایط مرتبه اول (FOC) نسبت به <InlineMath math="q_1" /> و <InlineMath math="q_2" />:
            <BlockMath math="\begin{aligned} \frac{\partial \Pi}{\partial q_1} = 0 &\implies 100 - 2(q_1 + q_2) - \frac{1}{2}q_1 - 2 = 0 \implies 2.5 q_1 + 2 q_2 = 98 \quad (1) \\ \frac{\partial \Pi}{\partial q_2} = 0 &\implies 100 - 2(q_1 + q_2) - q_2 = 0 \implies 2 q_1 + 3 q_2 = 100 \quad (2) \end{aligned}" />
            با حل این دستگاه معادلات داریم:
            <BlockMath math="q_1^* = 26.86 \quad , \quad q_2^* = 15.43 \implies Q^* = 42.29" />
            قیمت تعادلی بازار و سودهای حاصله:
            <BlockMath math="P^* = 100 - 42.29 = 57.71" />
            <BlockMath math="\pi_1^* = TR_1 - TC_1 = (57.71 \times 26.86) - 234.08 = 1316.1" />
            <BlockMath math="\pi_2^* = TR_2 - TC_2 = (57.71 \times 15.43) - 121.04 = 769.5" />
          </li>

          <li>
            <strong>ب) راه‌حل کورنو (Cournot Duopoly):</strong>
            <br />
            هر بنگاه به صورت مستقل با فرض ثبات تولید دیگری سود خود را حداکثر می‌کند:
            <br />
            بنگاه ۱: <InlineMath math="\max \pi_1 = (100 - q_1 - q_2)q_1 - \left(\frac{1}{4} q_1^2 + 2q_1\right)" />
            <BlockMath math="FOC_1: 100 - 2q_1 - q_2 - 0.5q_1 - 2 = 0 \implies 2.5q_1 + q_2 = 98 \implies q_1 = 39.2 - 0.4q_2 \quad (\text{عکس‌العمل ۱})" />
            بنگاه ۲: <InlineMath math="\max \pi_2 = (100 - q_1 - q_2)q_2 - \left(\frac{1}{2} q_2^2 + 2\right)" />
            <BlockMath math="FOC_2: 100 - q_1 - 2q_2 - q_2 = 0 \implies q_1 + 3q_2 = 100 \implies q_2 = \frac{100 - q_1}{3} \quad (\text{عکس‌العمل ۲})" />
            با تقاطع دادن دو تابع عکس‌العمل تعادل کورنو به دست می‌آید:
            <BlockMath math="q_1^* = 29.85 \quad , \quad q_2^* = 23.38 \implies Q^* = 53.23" />
            قیمت بازار و سود بنگاه‌ها:
            <BlockMath math="P^* = 100 - 53.23 = 46.77" />
            <BlockMath math="\pi_1^* = (46.77 \times 29.85) - 282.45 = 1113.6" />
            <BlockMath math="\pi_2^* = (46.77 \times 23.38) - 275.31 = 818.2" />
          </li>

          <li>
            <strong>ج) راه‌حل رهبری استاکلبرگ (Stackelberg with Firm 1 as Leader):</strong>
            <br />
            رهبر (بنگاه ۱) از تابع عکس‌العمل پیرو (<InlineMath math="q_2 = \frac{100 - q_1}{3}" />) آگاه است و آن را درون تابع سود خود جایگذاری می‌کند:
            <BlockMath math="\max \pi_1 = \left[ 100 - q_1 - \left(\frac{100 - q_1}{3}\right) \right] q_1 - \left(\frac{1}{4} q_1^2 + 2 q_1\right)" />
            با ساده‌سازی سود رهبر:
            <BlockMath math="\pi_1 = \left(\frac{200 - 2q_1}{3}\right)q_1 - \frac{1}{4} q_1^2 - 2q_1 = \frac{194}{3} q_1 - \frac{11}{12} q_1^2" />
            FOC برای رهبر:
            <BlockMath math="\frac{\partial \pi_1}{\partial q_1} = 0 \implies \frac{194}{3} - \frac{11}{6} q_1 = 0 \implies q_1^* = 35.27" />
            مقدار تولید پیرو و تعادل کل:
            <BlockMath math="q_2^* = \frac{100 - 35.27}{3} = 21.58 \implies Q^* = 56.85" />
            قیمت و سودها:
            <BlockMath math="P^* = 100 - 56.85 = 43.15" />
            <BlockMath math="\pi_1^* = (43.15 \times 35.27) - 381.53 = 1140.4" />
            <BlockMath math="\pi_2^* = (43.15 \times 21.58) - 234.85 = 696.3" />
          </li>
        </ol>
      </div>

    </div>
  );
};

export default Step4;
