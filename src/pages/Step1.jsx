import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { BookOpen, TrendingUp, Scale, Grid, Activity, Percent } from 'lucide-react';

const Step1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Title Header */}
      <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--primary)' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          گام ۱: نظریه رفتار مصرف‌کننده و دوگانگی
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          در این بخش به تحلیل رفتار مصرف‌کننده عاقل، استخراج توابع تقاضا (مارشالی و هیکسی)، اثبات رابطه اسلاتسکی، بررسی مفهوم دوگانگی (Duality) و در نهایت مطالعه سیستم مخارج خطی (LES) و ویژگی‌های ترجیحات همگن و هموتتیک می‌پردازیم. تمامی مباحث منطبق بر فرمول‌های ریاضی و نمودارهای تحلیل جزوه ارائه شده‌اند.
        </p>
      </div>

      {/* 1. Utility Theory, IC, Budget Line */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <BookOpen style={{ color: 'var(--primary)' }} />
          ۱. نظریه مطلوبیت، منحنی‌های بی‌تفاوتی و خط بودجه
        </h2>

        <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '1rem' }}>۱.۱. مطلوبیت کل و مطلوبیت نهایی</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          هدف مصرف‌کننده حداکثر کردن مطلوبیت حاصل از سبد کالاهای انتخابی خود است. در فضای دو کالایی (<InlineMath math="x" /> و <InlineMath math="y" />)، تابع مطلوبیت مستقیم به صورت زیر بیان می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="U = U(x, y)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          مطلوبیت نهایی (Marginal Utility) نشان‌دهنده تغییر در مطلوبیت کل در اثر افزایش یک واحد مصرف از کالا با فرض ثبات سایر کالاها است:
        </p>
        <div className="formula-box">
          <BlockMath math="MU_x = \frac{\partial U}{\partial x} \quad , \quad MU_y = \frac{\partial U}{\partial y}" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱.۲. منحنی‌های بی‌تفاوتی (Indifference Curves)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          منحنی بی‌تفاوتی مکان هندسی سبدهایی از کالاست که مطلوبیت کل یکسانی (<InlineMath math="dU = 0" />) را برای مصرف‌کننده ایجاد می‌کنند.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/graph3_1.svg" alt="منحنی‌های بی‌تفاوتی" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۱: منحنی‌های بی‌تفاوتی مصرف‌کننده (محدب نسبت به مبدأ)</p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ویژگی‌های اصلی منحنی‌های بی‌تفاوتی:</p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong>نزولی بودن (شیب منفی):</strong> ناشی از فرض مطلوب بودن کالاها (عدم اشباع) است.</li>
          <li><strong>محدب بودن نسبت به مبدأ (Convexity):</strong> ناشی از نرخ نهایی جانشینی نزولی است.</li>
          <li><strong>عدم تقاطع:</strong> بر اساس اصل ترجیحات قوی و انتقال‌پذیری، منحنی‌ها هرگز یکدیگر را قطع نمی‌کنند.</li>
          <li><strong>پوشش کل فضا:</strong> از هر نقطه در فضای مصرف‌کننده یک منحنی بی‌تفاوتی می‌گذرد.</li>
          <li><strong>ارتباط مستقیم با مطلوبیت:</strong> منحنی‌های بالاتر نشان‌دهنده مطلوبیت بیشتر هستند (<InlineMath math="U' > U" />).</li>
        </ul>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱.۳. اصول پنج‌گانه ترجیحات مصرف‌کننده</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          رفتار منطقی مصرف‌کننده متکی بر پنج اصل بدیهی زیر در نظریه ترجیحات است:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginTop: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>۱. انعکاس‌پذیری (Reflexivity)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              هر سبد کالا حداقل به اندازه خودش ترجیح داده می‌شود یا با خودش بی‌تفاوت است: <InlineMath math="A \succeq A" />.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--secondary)' }}>
            <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>۲. کامل بودن (Completeness)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              مصرف‌کننده قادر است هر دو سبد را مقایسه و رتبه‌بندی کند: <InlineMath math="A \succeq B" /> یا <InlineMath math="B \succeq A" /> یا هر دو.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--accent)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>۳. انتقال‌پذیری (Transitivity)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              ترجیحات مصرف‌کننده همساز هستند؛ اگر <InlineMath math="A \succeq B" /> و <InlineMath math="B \succeq C" /> باشد، آنگاه <InlineMath math="A \succeq C" />.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--success)' }}>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۴. سیری‌ناپذیری (Non-satiation)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              مصرف‌کننده همواره مقدار بیشتر از یک کالا را ترجیح می‌دهد (بیشتر بهتر است).
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '1.2rem', borderTop: '3px solid var(--warning)' }}>
            <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>۵. پیوستگی (Continuity)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              ترجیحات دچار جهش‌های ناگهانی نمی‌شوند؛ یعنی سبدهای نزدیک به هم، مطلوبیت‌های نزدیکی دارند.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/13-continuity.svg" alt="اصل پیوستگی ترجیحات" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۲: اصل پیوستگی روی منحنی بی‌تفاوتی</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱.۴. نرخ جانشینی نهایی (MRS) و اثبات ریاضی آن</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          نرخ نهایی جانشینی (<InlineMath math="MRS_{xy}" />)، مقداری از کالای <InlineMath math="y" /> است که مصرف‌کننده مایل است در ازای دریافت یک واحد اضافی از کالای <InlineMath math="x" /> از دست بدهد تا مطلوبیت کل او ثابت بماند.
        </p>
        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '0.5rem' }}>اثبات ریاضی:</p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با دیفرانسیل‌گیری کامل از تابع مطلوبیت داریم:
        </p>
        <div className="formula-box">
          <BlockMath math="dU = \frac{\partial U}{\partial x} dx + \frac{\partial U}{\partial y} dy = MU_x dx + MU_y dy" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در طول منحنی بی‌تفاوتی مطلوبیت ثابت است (<InlineMath math="dU = 0" />)، بنابراین:
        </p>
        <div className="formula-box">
          <BlockMath math="MU_x dx + MU_y dy = 0 \Rightarrow MU_x dx = -MU_y dy \Rightarrow -\frac{dy}{dx}\Big|_{dU=0} = \frac{MU_x}{MU_y} = MRS_{xy}" />
        </div>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱.۵. خط بودجه و انتقال‌های آن</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          خط بودجه مرز سبدهای قابل خریداری توسط مصرف‌کننده با کل درآمد اسمی (<InlineMath math="I" />) را نشان می‌دهد:
        </p>
        <div className="formula-box">
          <BlockMath math="P_x x + P_y y = I \Rightarrow y = \frac{I}{P_y} - \frac{P_x}{P_y}x" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          شیب خط بودجه برابر با نسبت قیمت‌ها (<InlineMath math="-P_x/P_y" />) است که نرخ مبادله بازار را نشان می‌دهد.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/graph4_1.svg" alt="خط بودجه" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۳: خط بودجه مصرف‌کننده</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/6-px-shift.svg" alt="چرخش خط بودجه" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۴: تغییر قیمت کالای x و چرخش خط بودجه</p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem' }}>تاثیرات تغییر پارامترها:</p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong>تغییر درآمد (<InlineMath math="I" />):</strong> خط بودجه به صورت موازی به خارج (افزایش درآمد) یا داخل (کاهش درآمد) منتقل می‌شود بدون اینکه شیب تغییر کند.</li>
          <li><strong>تغییر قیمت کالای <InlineMath math="x" /> (<InlineMath math="P_x" />):</strong> خط بودجه حول محل تلاقی با محور <InlineMath math="y" /> می‌چرخد. کاهش قیمت کالا خط بودجه را به سمت راست و خارج می‌چرخاند و سبدهای بیشتری قابل خرید خواهند بود.</li>
        </ul>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/14-nemodar.svg" alt="تغییرات درآمد و خط بودجه" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۵: انتقال خط بودجه به موازات هم در اثر تغییر درآمد</p>
          </div>
        </div>
      </div>

      {/* 2. Dual Optimization */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <TrendingUp style={{ color: 'var(--secondary)' }} />
          ۲. بهینه‌سازی دوگان مصرف‌کننده
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          تصمیم‌گیری بهینه مصرف‌کننده را می‌توان به صورت دو مسئله دوگان (رویکرد اولیه و ثانویه) بیان کرد که هر دو به یک سبد تعادلی یکسان منجر می‌شوند.
        </p>

        {/* UMP */}
        <h3 style={{ color: 'var(--secondary)', marginTop: '1.5rem', marginBottom: '1rem' }}>۲.۱. حداکثرسازی مطلوبیت مقید (UMP) - مسئله اولیه</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در مسئله اولیه (Primal)، مصرف‌کننده با داشتن درآمد اسمی ثابت (<InlineMath math="I" />) به دنبال دستیابی به حداکثر مطلوبیت است:
        </p>
        <div className="formula-box">
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>مسئله ریاضی:</p>
          <BlockMath math="\max_{x,y} U(x, y) \quad \text{s.t.} \quad I - P_x x - P_y y = 0" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>تشکیل تابع لاگرانژ:</p>
          <BlockMath math="\mathcal{L}(x, y, \lambda) = U(x, y) + \lambda(I - P_x x - P_y y)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          که در آن <InlineMath math="\lambda" /> مطلوبیت نهایی درآمد (Marginal Utility of Income) است. با گرفتن مشتقات جزئی و برابر صفر قرار دادن آن‌ها (شرایط مرتبه اول F.O.C) داریم:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \mathcal{L}}{\partial x} = MU_x - \lambda P_x = 0 \Rightarrow \lambda = \frac{MU_x}{P_x}" />
          <BlockMath math="\frac{\partial \mathcal{L}}{\partial y} = MU_y - \lambda P_y = 0 \Rightarrow \lambda = \frac{MU_y}{P_y}" />
          <BlockMath math="\frac{\partial \mathcal{L}}{\partial \lambda} = I - P_x x - P_y y = 0" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          از ترکیب روابط بالا شرط مماس بودن منحنی بی‌تفاوتی و خط بودجه حاصل می‌شود:
          <BlockMath math="MRS_{xy} = \frac{MU_x}{MU_y} = \frac{P_x}{P_y}" />
          با حل همزمان این رابطه با خط بودجه، <strong>توابع تقاضای مارشالی</strong> حاصل می‌شوند:
          <BlockMath math="x^{ND} = x(P_x, P_y, I) \quad , \quad y^{ND} = y(P_x, P_y, I)" />
        </p>

        {/* EMP */}
        <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>۲.۲. حداقل‌سازی هزینه مقید (EMP) - مسئله دوگان</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در مسئله ثانویه (Dual)، هدف کمینه کردن مخارج برای دستیابی به سطح مطلوبیت هدف معین (<InlineMath math="\bar{U}" />) است:
        </p>
        <div className="formula-box">
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>مسئله ریاضی:</p>
          <BlockMath math="\min_{x,y} E = P_x x + P_y y \quad \text{s.t.} \quad \bar{U} - U(x, y) = 0" />
          <p style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold' }}>تشکیل تابع لاگرانژ:</p>
          <BlockMath math="\mathcal{L}_{dual}(x, y, \mu) = P_x x + P_y y + \mu(\bar{U} - U(x, y))" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          که در آن <InlineMath math="\mu" /> مخارج نهایی مطلوبیت (هزینه نهایی دستیابی به یک واحد مطلوبیت بیشتر) است. شرایط مرتبه اول (F.O.C) به صورت زیر است:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \mathcal{L}_{dual}}{\partial x} = P_x - \mu MU_x = 0 \Rightarrow \mu = \frac{P_x}{MU_x}" />
          <BlockMath math="\frac{\partial \mathcal{L}_{dual}}{\partial y} = P_y - \mu MU_y = 0 \Rightarrow \mu = \frac{P_y}{MU_y}" />
          <BlockMath math="\frac{\partial \mathcal{L}_{dual}}{\partial \mu} = \bar{U} - U(x, y) = 0" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          از ترکیب روابط بالا مجدداً همان شرط تعادلی حاصل می‌شود:
          <BlockMath math="MRS_{xy} = \frac{MU_x}{MU_y} = \frac{P_x}{P_y}" />
          با حل همزمان این رابطه با قید مطلوبیت، <strong>توابع تقاضای هیکسی (جبرانی)</strong> استخراج می‌شوند:
          <BlockMath math="x^{CD} = x^{CD}(P_x, P_y, \bar{U}) \quad , \quad y^{CD} = y^{CD}(P_x, P_y, \bar{U})" />
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/13-equilibrium.svg" alt="شرط تعادل و شیب" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۶: شرط برابری شیب خط بودجه و منحنی بی‌تفاوتی</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/graph4_2.svg" alt="تعادل مصرف‌کننده" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۷: نقطه تعادل حاصل از مماس شدن بودجه و مطلوبیت</p>
          </div>
        </div>

        {/* Comparison Table */}
        <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>۲.۳. مقایسه جامع تقاضای مارشالی و هیکسی</h3>
        <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-main)', border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}>
            <thead>
              <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '2px solid var(--card-border)' }}>
                <th style={{ padding: '12px', textAlign: 'right', border: '1px solid var(--card-border)' }}>ویژگی / مفهوم</th>
                <th style={{ padding: '12px', textAlign: 'right', border: '1px solid var(--card-border)' }}>تقاضای مارشالی (نرمال)</th>
                <th style={{ padding: '12px', textAlign: 'right', border: '1px solid var(--card-border)' }}>تقاضای هیکسی (جبرانی)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>مسئله مبنا</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>حداکثرسازی مطلوبیت مقید (UMP)</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>حداقل‌سازی هزینه مقید (EMP)</td>
              </tr>
              <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>متغیرهای برون‌زا</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>قیمت کالاها (<InlineMath math="P" />) و درآمد اسمی (<InlineMath math="I" />)</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>قیمت کالاها (<InlineMath math="P" />) و مطلوبیت هدف (<InlineMath math="\bar{U}" />)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>شرط تعادل (FOC)</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}><InlineMath math="MRS_{xy} = \frac{P_x}{P_y}" /></td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}><InlineMath math="MRS_{xy} = \frac{P_x}{P_y}" /></td>
              </tr>
              <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>تفسیر اثرات قیمتی</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>کل اثر تغییر قیمت را نشان می‌دهد (جانشینی + درآمدی)</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>تنها اثر جانشینی را با فرض جبران درآمدی نمایش می‌دهد</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>درجه همگنی</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>همگن درجه صفر نسبت به قیمت‌ها و درآمد کل</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>همگن درجه صفر نسبت به قیمت‌ها</td>
              </tr>
              <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>جهت شیب تقاضا</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>معمولاً نزولی (به جز در کالای گیفن که صعودی است)</td>
                <td style={{ padding: '12px', border: '1px solid var(--card-border)' }}>همواره نزولی به علت منفی بودن ذاتی اثر جانشینی</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Extra Demand Curves and ICC/PCC */}
        <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۲.۴. استخراج منحنی‌های تقاضا، ICC و PCC</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با تغییر درآمد مصرف‌کننده، مسیر نقاط بهینه در فضای کالا منجر به رسم <strong>منحنی درآمد-مصرف (ICC)</strong> می‌شود. با تغییر قیمت یک کالا، مسیر نقاط بهینه <strong>منحنی قیمت-مصرف (PCC)</strong> را تشکیل می‌دهد که مستقیماً منحنی تقاضای مارشالی از آن استخراج می‌شود.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '1.5rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/6-pcc-demand.svg" alt="PCC و تقاضا" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۸: استخراج منحنی تقاضا از روی منحنی قیمت-مصرف (PCC)</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/6-icc.svg" alt="منحنی ICC" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۹: منحنی درآمد-مصرف (ICC) برای دو کالای عادی</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>۲.۵. حالت‌های خاص ترجیحات و منحنی‌های تقاضای آن‌ها</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          بر اساس توابع مطلوبیت متفاوت، اشکال گوناگونی از منحنی‌های تقاضای مارشالی تولید می‌شوند:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li>
            <strong>کالای معمولی (نرمال):</strong> منحنی تقاضا با شیب منفی و فاقد شکستگی است.
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
              <div style={{ textAlign: 'center', width: '100%', maxWidth: '300px', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '8px' }}>
                <img src="/svg/15-nemodar1.svg" alt="تقاضای کالای نرمال" style={{ maxWidth: '100%', height: 'auto' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>شکل ۱.۱۰: منحنی تقاضای مارشالی کلاسی (کالای معمولی)</p>
              </div>
            </div>
          </li>
          <li>
            <strong>کالاهای جانشین کامل (Perfect Substitutes):</strong> مطلوبیت به صورت خطی است (<InlineMath math="U = ax + by" />). تعادل معمولاً دارای جواب گوشه‌ای (Corner Solution) است و منحنی تقاضا دارای پله‌های افقی در نسبت قیمت‌های خاص است.
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
              <div style={{ textAlign: 'center', width: '100%', maxWidth: '300px', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '8px' }}>
                <img src="/svg/15-nemodar2.svg" alt="کالا جانشین کامل" style={{ maxWidth: '100%', height: 'auto' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>شکل ۱.۱۱: بهینه‌سازی کالا جانشین کامل و تقاضای گوشه‌ای</p>
              </div>
            </div>
          </li>
          <li>
            <strong>کالاهای مکمل کامل (Perfect Complements):</strong> مطلوبیت به صورت لئونتیف است (<InlineMath math="U = \min\{ax, by\}" />). نسبت مصرف همواره در زاویه منحنی L شکل ثابت است (<InlineMath math="ax = by" />).
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
              <div style={{ textAlign: 'center', width: '100%', maxWidth: '300px', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '8px' }}>
                <img src="/svg/15-nemodar3.svg" alt="کالا مکمل کامل" style={{ maxWidth: '100%', height: 'auto' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>شکل ۱.۱۲: منحنی مطلوبیت مکمل کامل و تعادل زاویه‌ای</p>
              </div>
            </div>
          </li>
        </ul>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/16-nemodar.svg" alt="نمودار تقاضای سنتی" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۱۳: استخراج منحنی تقاضای سنتی بازار</p>
          </div>
        </div>
      </div>

      {/* 3. Slutsky Equation */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Scale style={{ color: 'var(--accent)' }} />
          ۳. معادله اسلاتسکی و تجزیه اثر کل قیمت
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          وقتی قیمت یک کالا تغییر می‌کند، اثر کل آن بر تقاضا (اثر مارشالی) را می‌توان به دو کانال مجزا تجزیه کرد:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <li><strong>اثر جانشینی (SE):</strong> تغییر در مقدار تقاضا صرفاً ناشی از تغییر قیمت‌های نسبی کالاها با حفظ مطلوبیت واقعی ثابت. اثر جانشینی همواره منفی است.</li>
          <li><strong>اثر درآمدی (IE):</strong> تغییر در مقدار تقاضا به علت تغییر در قدرت خرید واقعی مصرف‌کننده ناشی از نوسان قیمت. علامت این اثر به نوع کالا بستگی دارد.</li>
        </ul>

        <h3 style={{ color: 'var(--accent)', marginTop: '1.5rem', marginBottom: '1rem' }}>۳.۱. فرمول‌بندی ریاضی معادله اسلاتسکی</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          معادله اسلاتسکی برای کالای خودی (<InlineMath math="x_i" />) به صورت زیر است:
        </p>
        <div className="formula-box">
          <BlockMath math="\underbrace{\frac{\partial x_i(P, I)}{\partial P_i}}_{\text{اثر کل}} = \underbrace{\left. \frac{\partial x_i}{\partial P_i} \right|_{\bar{U}}}_{\text{اثر جانشینی (هیکسی)}} - \underbrace{x_i \frac{\partial x_i(P, I)}{\partial I}}_{\text{اثر درآمدی}}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          که برای تغییرات قیمت متقاطع (<InlineMath math="P_j" />) نیز به شکل عمومی زیر تعمیم می‌یابد:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial x_i(P, I)}{\partial P_j} = \frac{\partial x_i^{CD}(P, U)}{\partial P_j} - x_j(P, I)\frac{\partial x_i(P, I)}{\partial I}" />
        </div>

        <h3 style={{ color: 'var(--accent)', marginTop: '2rem', marginBottom: '1rem' }}>۳.۲. تجزیه اثر کل قیمت برای انواع کالاها (با فرض کاهش قیمت کالا)</h3>
        
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>۱. کالای معمولی (Normal Goods)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            با کاهش قیمت، اثر جانشینی مثبت (<InlineMath math="SE > 0" />) و اثر درآمدی نیز به دلیل نرمال بودن مثبت (<InlineMath math="IE > 0" />) است. هر دو اثر هم‌جهت بوده و یکدیگر را تقویت می‌کنند، بنابراین تقاضا قطعاً افزایش می‌یابد (<InlineMath math="TE = SE + IE > 0" />). منحنی تقاضا نزولی است.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--warning)', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>۲. کالای پست معمولی (Ordinary Inferior Goods)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            با کاهش قیمت، اثر جانشینی مثبت (<InlineMath math="SE > 0" />) است ولی اثر درآمدی به دلیل پست بودن منفی (<InlineMath math="IE < 0" />) است. اما چون شدت اثر جانشینی بزرگتر از اثر درآمدی است (<InlineMath math="|SE| > |IE|" />)، اثر کل در نهایت مثبت است (<InlineMath math="TE > 0" />) و تقاضا افزایش می‌یابد. منحنی تقاضا با شیب تندتری همچنان نزولی است.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>۳. کالای پست گیفن (Giffen Goods)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            این کالاها به شدت پست هستند به طوری که سهم بزرگی از سبد خانوار فقیر را تشکیل می‌دهند. با کاهش قیمت، اثر درآمدی منفی بر اثر جانشینی غلبه می‌کند (<InlineMath math="|IE| > |SE|" />). بنابراین با کاهش قیمت، تقاضا کاهش می‌یابد (<InlineMath math="TE < 0" />) و قانون تقاضا نقض می‌شود. منحنی تقاضا صعودی خواهد شد.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/25-nemodar.svg" alt="تجزیه اثر هیکسی" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۱۴: تجزیه اثر قیمت هیکسی با استفاده از خط بودجه کمکی</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img src="/svg/24-nemodar.svg" alt="تجزیه اثر گیفن" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۱۵: نمودار تجزیه اثر درآمدی و جانشینی در کالای گیفن</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--accent)', marginTop: '2rem', marginBottom: '1rem' }}>۳.۳. معادله اسلاتسکی به فرم کشش</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با ضرب طرفین معادله اسلاتسکی در نسبت قیمت به مقدار (<InlineMath math="P_i/x_i" />) فرم کششی آن حاصل می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="\varepsilon_{ii} = \bar{\varepsilon}_{ii} - w_i \eta_i" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          توضیح متغیرها:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><InlineMath math="\varepsilon_{ii}" />: کشش قیمتی تقاضای مارشالی (اثر کل).</li>
          <li><InlineMath math="\bar{\varepsilon}_{ii}" />: کشش قیمتی تقاضای هیکسی (اثر جانشینی، همواره منفی).</li>
          <li><InlineMath math="w_i = \frac{P_i x_i}{I}" />: سهم مخارج کالای <InlineMath math="i" /> از درآمد کل مصرف‌کننده.</li>
          <li><InlineMath math="\eta_i = \frac{\partial x_i}{\partial I} \frac{I}{x_i}" />: کشش درآمدی تقاضای کالا.</li>
        </ul>
      </div>

      {/* 4. Duality & Value Functions */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Activity style={{ color: 'var(--success)' }} />
          ۴. مبحث دوگانگی (Duality) و توابع ارزش
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          دوگانگی نشان‌دهنده رابطه بین تابع مطلوبیت مستقیم، غیرمستقیم، مخارج و توابع تقاضا است.
        </p>

        <h3 style={{ color: 'var(--success)', marginTop: '1.5rem', marginBottom: '1rem' }}>۴.۱. تابع مطلوبیت غیرمستقیم: <InlineMath math="V(P, I)" /></h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          حداکثر مطلوبیت قابل دستیابی را بر اساس قیمت‌ها و درآمد نشان می‌دهد. این تابع با جایگذاری تقاضای مارشالی در تابع مطلوبیت مستقیم حاصل می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="V(P, I) = U(x^{ND}(P, I), y^{ND}(P, I))" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>ویژگی‌ها:</strong> همگن درجه صفر نسبت به قیمت‌ها و درآمد، صعودی نسبت به درآمد و نزولی نسبت به قیمت‌ها.
        </p>

        <h3 style={{ color: 'var(--success)', marginTop: '2rem', marginBottom: '1rem' }}>۴.۲. تابع مخارج: <InlineMath math="E(P, U)" /></h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          حداقل هزینه لازم برای دستیابی به مطلوبیت <InlineMath math="U" /> را در قیمت‌های <InlineMath math="P" /> نشان می‌دهد:
        </p>
        <div className="formula-box">
          <BlockMath math="E(P, U) = P_x x^{CD}(P, U) + P_y y^{CD}(P, U)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>ویژگی‌ها:</strong> همگن درجه یک نسبت به قیمت‌ها، مقعر نسبت به قیمت‌ها و صعودی نسبت به مطلوبیت.
        </p>

        <h3 style={{ color: 'var(--success)', marginTop: '2rem', marginBottom: '1rem' }}>۴.۳. قضیه‌های انتقال: لم شپارد و هویت روی</h3>
        
        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--primary)', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>لم شپارد (Shephard's Lemma)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            با مشتق‌گیری جزئی از تابع مخارج نسبت به قیمت هر کالا، تابع تقاضای هیکسی آن کالا استخراج می‌شود:
          </p>
          <BlockMath math="\frac{\partial E(P, U)}{\partial P_i} = x_i^{CD}(P, U)" />
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--secondary)', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>هویت روی (Roy's Identity)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            با مشتق‌گیری جزئی از تابع مطلوبیت غیرمستقیم نسبت به قیمت کالا و درآمد، توابع تقاضای مارشالی استخراج می‌شوند:
          </p>
          <BlockMath math="x_i^{ND}(P, I) = -\frac{\frac{\partial V(P, I)}{\partial P_i}}{\frac{\partial V(P, I)}{\partial I}}" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/43-nemodar.svg" alt="رابطه دوگانگی توابع" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۱۶: ارتباط معکوس و متقابل توابع تقاضا و ارزش</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--success)', marginTop: '2rem', marginBottom: '1rem' }}>۴.۴. نمودار جریان ارتباطات دوگانگی</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          ارتباط چهار تابع اصلی به صورت زیر بازسازی می‌شود:
        </p>
        <div className="formula-box" style={{ fontFamily: 'monospace', direction: 'ltr', whiteSpace: 'pre', fontSize: '0.9rem' }}>
{`   [ U(x, y) ] (مطلوبیت مستقیم)
     |      ^
     | UMP  | قرار دادن معکوس تقاضا
     v      |
   [ V(P, I) ] (مطلوبیت غیرمستقیم) <====== معکوس ======> [ E(P, U) ] (تابع مخارج)
     |                                                      |
     | هویت روی                                             | لم شپارد
     v                                                      v
   [ x_i^ND(P, I) ] (تقاضای مارشالی)                     [ x_i^CD(P, U) ] (تقاضای هیکسی)
`}
        </div>
      </div>

      {/* 5. LES & Homogeneous/Homothetic */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Percent style={{ color: 'var(--warning)' }} />
          ۵. سیستم مخارج خطی (LES) و توابع همگن/هموتتیک
        </h2>

        <h3 style={{ color: 'var(--warning)', marginTop: '1.5rem', marginBottom: '1rem' }}>۵.۱. توابع همگن و هموتتیک</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          یک تابع مطلوبیت همگن از درجه <InlineMath math="\alpha" /> ویژگی زیر را دارد:
        </p>
        <div className="formula-box">
          <BlockMath math="U(\lambda x, \lambda y) = \lambda^\alpha U(x, y)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در این توابع، مطلوبیت‌های نهایی همگن درجه <InlineMath math="\alpha - 1" /> هستند و شیب منحنی‌های بی‌تفاوتی (<InlineMath math="MRS" />) همگن درجه صفر است.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>توابع هموتتیک (Homothetic):</strong> تبدیل یکنواخت صعودی از یک تابع همگن هستند. ویژگی کلیدی آن‌ها این است که نرخ نهایی جانشینی فقط تابع نسبت مصرف کالاهاست:
        </p>
        <div className="formula-box">
          <BlockMath math="MRS_{xy} = f\left(\frac{y}{x}\right)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          به همین دلیل، در امتداد خطوطی که از مبدأ می‌گذرند (نسبت ثابت کالاها)، شیب منحنی‌های بی‌تفاوتی همگی یکسان است. منحنی درآمد-مصرف (ICC) برای این توابع همواره یک خط مستقیم از مبدأ است و کشش درآمدی تقاضای همه کالاها دقیقاً برابر با ۱ است. بنابراین این مدل‌ها نمی‌توانند کالاهای پست یا لوکس را مدل‌سازی کنند.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <img src="/svg/47-nemodar.svg" alt="ترجیحات هموتتیک" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۱۷: یکسانی شیب منحنی‌های بی‌تفاوتی در امتداد شعاع‌های صادر شده از مبدأ در توابع هموتتیک</p>
          </div>
        </div>

        <h3 style={{ color: 'var(--warning)', marginTop: '2rem', marginBottom: '1rem' }}>۵.۲. سیستم مخارج خطی (LES)</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          سیستم مخارج خطی (LES) که بر پایه تابع مطلوبیت کلاین-روبین (یا استون-جری) بنا شده، مدلی هموتتیک انتقال‌یافته است که در آن سهمی از درآمد صرف تأمین حداقل معاش می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="U(q) = \sum_{i=1}^{n} \beta_i \ln (q_i - \gamma_i) \quad \text{s.t.} \quad \sum_{i=1}^{n} \beta_i = 1 \quad , \quad q_i > \gamma_i" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          توضیح پارامترها:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <li><InlineMath math="\gamma_i" />: حداقل سطح مصرف معیشتی برای کالای <InlineMath math="i" />.</li>
          <li><InlineMath math="\beta_i" />: سهم نهایی مخارج از درآمد فرامعیشتی مصرف‌کننده.</li>
        </ul>

        <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>استخراج ریاضی توابع تقاضا در LES:</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با استفاده از تابع لاگرانژ:
        </p>
        <div className="formula-box">
          <BlockMath math="\mathcal{L} = \sum_{i=1}^n \beta_i \ln(q_i - \gamma_i) + \lambda\left(I - \sum_{j=1}^n P_j q_j\right)" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          مشتق‌گیری نسبت به مقدار مصرف <InlineMath math="q_i" />:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{\partial \mathcal{L}}{\partial q_i} = 0 \Rightarrow \frac{\beta_i}{q_i - \gamma_i} - \lambda P_i = 0 \Rightarrow P_i(q_i - \gamma_i) = \frac{\beta_i}{\lambda}" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          با جمع بستن روی تمام کالاها و استفاده از قید کل بودجه و تساوی مجموع <InlineMath math="\beta" />ها به ۱، ضریب لاگرانژ به دست می‌آید:
        </p>
        <div className="formula-box">
          <BlockMath math="\frac{1}{\lambda} = I - \sum_{j=1}^n P_j \gamma_j" />
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          جایگذاری ضریب لاگرانژ در معادله مخارج کالای <InlineMath math="i" /> منجر به توابع تقاضای مارشالی زیر می‌شود:
        </p>
        <div className="formula-box">
          <BlockMath math="q_i^{ND}(P, I) = \gamma_i + \frac{\beta_i}{P_i} \left( I - \sum_{j=1}^{n} P_j \gamma_j \right)" />
        </div>

        <h4 style={{ color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>تفسیر اقتصادی:</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          مصرف‌کننده ابتدا مقدار حداقل معاش برای تمام کالاها را با کل هزینه معیشتی <InlineMath math="\sum P_j \gamma_j" /> تهیه می‌کند. سپس درآمد باقی‌مانده (درآمد فرامعیشتی یا سوپر اَلوکیشن) را بر اساس نسبت سهم‌های ثابت <InlineMath math="\beta_i" /> بین خرید بیشتر کالاها توزیع می‌نماید.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '550px' }}>
            <img src="/svg/50-nemodar.svg" alt="تعادل در LES" style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>شکل ۱.۱۸: نمودار تعادل و حداقل معیشت در سیستم مخارج خطی (LES)</p>
          </div>
        </div>

        <h4 style={{ color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>مزایا و معایب مدل LES:</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '0.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--success)' }}>
            <h5 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>مزایای LES:</h5>
            <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', listStyleType: 'circle', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>تعداد پارامترها خطی است، بنابراین تخمین اقتصادسنجی بسیار راحتی دارد.</li>
              <li>ضرایب مدل دارای تفسیر مستقیم اقتصادی (حداقل معاش و سهم بودجه فرامعیشتی) هستند.</li>
              <li>برای تحلیل تقاضای گروه‌های کالایی کلان بسیار کارآمد است.</li>
            </ul>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRight: '4px solid var(--danger)' }}>
            <h5 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>معایب LES:</h5>
            <ul style={{ paddingRight: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', listStyleType: 'circle', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>به دلیل ساختار هموتتیک انتقال‌یافته، کشش متقاطع غیرقیمتی صفر است و جانشینی متقاطع وجود ندارد.</li>
              <li>نمی‌تواند کالاهای لوکس یا پست را مدل کند (همگی کالاها نرمال فرض می‌شوند).</li>
              <li>سهم‌های نهایی مخارج (<InlineMath math="\beta_i" />) در زمان ثابتند در حالی که در واقعیت تغییر می‌کنند.</li>
            </ul>
          </div>
        </div>
        
        <h3 style={{ color: 'var(--warning)', marginTop: '2rem', marginBottom: '1rem' }}>۵.۳. توابع مطلوبیت مجزا و دقیقاً مجزا</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
          در اقتصاد خرد، توابع مطلوبیت بر اساس نحوه‌ی وابستگی مطلوبیت نهایی کالاها به یکدیگر طبقه‌بندی می‌شوند:
        </p>
        <ul style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <li>
            <strong>۱. تابع مطلوبیت مجزا (Separable Utility):</strong> در این توابع، مطلوبیت کل ترکیبی از توابع مختلف است اما در نهایت داخل یک تابع بیرونی قرار گرفته‌اند. مطلوبیت نهایی کالاها در این حالت به یکدیگر وابسته است:
            <BlockMath math="U = f \left[ \sum_{i=1}^{n} U_i(x_i) \right] \quad \text{مثال:} \quad U = \ln (x_1^\alpha + x_2^\beta + x_3^\gamma)" />
          </li>
          <li>
            <strong>۲. تابع دقیقاً مجزا (Strictly Separable Utility):</strong> در این توابع، مطلوبیت کل به صورت مجموع توابع مستقل از هر کالا تعریف می‌شود و مطلوبیت نهایی کالاها هیچ وابستگی به مقادیر مصرف سایر کالاها ندارد:
            <BlockMath math="U = u_1(x_1) + u_2(x_2) + \dots + u_n(x_n) \quad \text{مثال:} \quad U = \ln x_1^\alpha + \ln x_2^\beta + \ln x_3^\gamma" />
          </li>
          <li>
            <strong>۳. تابع مطلوبیت جمع‌پذیر (Additive Utility):</strong> در این حالت مطلوبیت کل مستقیماً از جمع مطلوبیت کالاها به دست می‌آید:
            <BlockMath math="U = x_1^\alpha + x_2^\beta + x_3^\gamma" />
            هر تابع مجزا، یک تبدیل یکنواخت صعودی از یک تابع جمع‌پذیر است و تمام نتایجی که برای توابع مجزا گرفته می‌شود برای توابع جمع‌پذیر نیز صدق می‌کند.
          </li>
        </ul>
      </div>

      {/* 6. Example section */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          <Grid style={{ color: 'var(--success)' }} />
          ۶. مثال عددی حل شده تشریحی: تعادل و اسلاتسکی
        </h2>
        <div className="example-box">
          <h4>مثال عددی: استخراج تعادل و تجزیه اسلاتسکی</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>صورت مسئله:</strong> مصرف‌کننده‌ای دارای تابع مطلوبیت <InlineMath math="U = x^2 y" /> است. قیمت‌های اولیه کالاها <InlineMath math="P_x = 4" />، <InlineMath math="P_y = 1" /> و درآمد او <InlineMath math="I = 120" /> است. 
            اگر قیمت کالای <InlineMath math="x" /> به <InlineMath math="P_x' = 1" /> کاهش یابد:
            <br />
            الف) سبد مصرفی اولیه و ثانویه را پیدا کنید.
            <br />
            ب) اثر کل، اثر جانشینی هیکسی و اثر درآمدی را بر تقاضای کالای <InlineMath math="x" /> محاسبه کنید.
          </p>

          <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginTop: '1.5rem' }}>حل تشریحی گام‌به‌گام:</p>
          <ol style={{ paddingRight: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '0.5rem' }}>
            <li>
              <strong>گام ۱: استخراج توابع تقاضای مارشالی عمومی</strong>
              <br />
              با استفاده از شرط تعادل <InlineMath math="MRS_{xy} = \frac{P_x}{P_y}" />:
              <BlockMath math="MU_x = 2xy \quad , \quad MU_y = x^2 \Rightarrow MRS_{xy} = \frac{2xy}{x^2} = \frac{2y}{x}" />
              بنابراین:
              <BlockMath math="\frac{2y}{x} = \frac{P_x}{P_y} \Rightarrow x P_x = 2 y P_y \Rightarrow y = \frac{x P_x}{2 P_y}" />
              با قرار دادن در خط بودجه:
              <BlockMath math="x P_x + y P_y = I \Rightarrow x P_x + \frac{x P_x}{2} = I \Rightarrow \frac{3}{2} x P_x = I \Rightarrow x^{ND} = \frac{2I}{3P_x}" />
              به همین ترتیب برای کالای دوم:
              <BlockMath math="y^{ND} = \frac{I}{3P_y}" />
            </li>
            <li>
              <strong>گام ۲: محاسبه سبد مصرفی اولیه (نقطه <InlineMath math="e_1" />)</strong>
              <br />
              با جایگذاری مقادیر اولیه <InlineMath math="I = 120, P_x = 4, P_y = 1" />:
              <BlockMath math="x_1 = \frac{2 \cdot 120}{3 \cdot 4} = 20 \quad , \quad y_1 = \frac{120}{3 \cdot 1} = 40" />
              مطلوبیت کل حاصل در نقطه اولیه:
              <BlockMath math="U_1 = x_1^2 y_1 = 20^2 \cdot 40 = 16000" />
            </li>
            <li>
              <strong>گام ۳: محاسبه سبد مصرفی نهایی (نقطه <InlineMath math="e_2" />)</strong>
              <br />
              با تغییر قیمت کالای اول به <InlineMath math="P_x' = 1" />:
              <BlockMath math="x_2 = \frac{2 \cdot 120}{3 \cdot 1} = 80 \quad , \quad y_2 = \frac{120}{3 \cdot 1} = 40" />
              بنابراین <strong>اثر کل (TE)</strong> بر تقاضای کالای <InlineMath math="x" /> برابر است با:
              <BlockMath math="TE = x_2 - x_1 = 80 - 20 = 60" />
            </li>
            <li>
              <strong>گام ۴: محاسبه اثر جانشینی هیکسی (نقطه فرضی <InlineMath math="e_3" />)</strong>
              <br />
              در نقطه فرضی هیکسی، مصرف‌کننده باید با قیمت‌های جدید (<InlineMath math="P_x'=1, P_y=1" />) به مطلوبیت اولیه (<InlineMath math="U_1 = 16000" />) دست یابد.
              <br />
              از رابطه بهینگی داریم:
              <BlockMath math="2y = x \frac{P_x'}{P_y} \Rightarrow y = \frac{x}{2}" />
              با قرار دادن این رابطه در تابع مطلوبیت هدف:
              <BlockMath math="x^2 y = 16000 \Rightarrow x^2 \left(\frac{x}{2}\right) = 16000 \Rightarrow x^3 = 32000 \Rightarrow x_3 = \sqrt[3]{32000} \approx 31.75" />
              بنابراین <strong>اثر جانشینی (SE)</strong> برابر است با:
              <BlockMath math="SE = x_3 - x_1 = 31.75 - 20 = 11.75" />
            </li>
            <li>
              <strong>گام ۵: محاسبه اثر درآمدی (IE)</strong>
              <br />
              اثر درآمدی مابه‌التفاوت اثر کل و اثر جانشینی است:
              <BlockMath math="IE = TE - SE = 60 - 11.75 = 48.25" />
              تفسیر: چون کالا معمولی است، اثر درآمدی مثبت بوده و اثر جانشینی را تقویت می‌کند (<InlineMath math="11.75 + 48.25 = 60" />).
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Step1;
