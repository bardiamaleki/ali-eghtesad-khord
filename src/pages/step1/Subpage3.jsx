import React from 'react';
import { InlineMath, BlockMath } from '../../components/Math';
import { Share2, Scissors, Activity, HelpCircle, TrendingUp, AlertTriangle } from 'lucide-react';

const Subpage3 = () => {
  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--card-border)", paddingBottom: "0.5rem", color: "var(--primary)" }}>
        <Share2 style={{ color: 'var(--primary)' }} />
        اثر درآمدی، اثر جانشینی و معادلات اسلاتسکی
      </h2>

      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        وقتی قیمت یک کالا تغییر می‌کند، رفتار مصرف‌کننده تحت تاثیر دو نیروی مختلف تغییر می‌کند:
        <br />
        ۱. <strong>اثر جانشینی (Substitution Effect):</strong> قیمت نسبی کالاها تغییر کرده و مصرف‌کننده تمایل دارد کالای ارزان‌تر شده را جانشین کالای گران‌تر کند.
        <br />
        ۲. <strong>اثر درآمدی (Income Effect):</strong> قدرت خرید واقعی مصرف‌کننده تغییر می‌کند و تمایل او برای خرید تغییر خواهد کرد.
      </p>

      <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>۱. تقاضای جبرانی (Hicksian Demand) و تابع مخارج</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برای تفکیک این دو اثر، از مفهوم <strong>تقاضای جبرانی هیکسی (Hicksian/Compensated Demand)</strong> استفاده می‌شود. در این رویکرد (مسئله دوگان)، مخارج را به گونه‌ای جبران یا تغییر می‌دهیم که مصرف‌کننده دقیقاً بر روی همان سطح مطلوبیت اولیه (<InlineMath math="\bar{U}" />) باقی بماند.
      </p>

      <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
        <BlockMath math="\min C = P_x \cdot x + P_y \cdot y \quad \text{S.t: } U(x,y) = \bar{U}" />
        <BlockMath math="q_i^{CD} = h_i(P_x, P_y, \bar{U})" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--success)' }}>
          <h5 style={{ color: 'var(--success)', marginBottom: '0.25rem' }}>ویژگی‌های تقاضای هیکسی</h5>
          <ul style={{ paddingRight: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', listStyleType: 'disc' }}>
            <li>فقط شامل اثر جانشینی است و اثر درآمدی در آن کاملاً جبران شده است.</li>
            <li>همواره و بدون استثنا نزولی است (کاهش قیمت منجر به افزایش تقاضای جبرانی می‌شود).</li>
            <li>مطلوبیت در طول آن ثابت است.</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', borderRight: '3px solid var(--primary)' }}>
          <h5 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>لم شپارد (Shephard's Lemma)</h5>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
            با مشتق‌گیری جزئی از تابع حداقل مخارج نسبت به قیمت هر کالا، تابع تقاضای جبرانی آن کالا حاصل می‌شود:
            <BlockMath math="\frac{\partial E(P_x, P_y, \bar{U})}{\partial P_x} = x^{CD}" />
          </div>
        </div>
      </div>

      {/* Comparative Table */}
      <div className="glass-panel" style={{ padding: '1.5rem', margin: '2rem 0', background: 'rgba(255, 255, 255, 0.01)', border: '1px solid var(--card-border)' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>جدول مقایسه‌ای تقاضای مارشالی در مقابل هیکسی (جبرانی)</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--card-border)', color: 'var(--primary)' }}>
                <th style={{ padding: '0.75rem' }}>ویژگی / معیار</th>
                <th style={{ padding: '0.75rem' }}>تقاضای مارشالی (Ordinary)</th>
                <th style={{ padding: '0.75rem' }}>تقاضای هیکسی (Compensated)</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-muted)' }}>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: 'var(--text-main)' }}>هدف بهینه‌سازی</td>
                <td style={{ padding: '0.75rem' }}>حداکثرسازی مطلوبیت با بودجه ثابت (<InlineMath math="\max U" />)</td>
                <td style={{ padding: '0.75rem' }}>حداقل‌سازی مخارج با مطلوبیت ثابت (<InlineMath math="\min \sum P_i q_i" />)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: 'var(--text-main)' }}>آرگومان‌های تابع</td>
                <td style={{ padding: '0.75rem' }}>قیمت کالاها و درآمد اسمی (<InlineMath math="q_i(P_1, P_2, I)" />)</td>
                <td style={{ padding: '0.75rem' }}>قیمت کالاها و مطلوبیت هدف (<InlineMath math="h_i(P_1, P_2, \bar{U})" />)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: 'var(--text-main)' }}>نوع اثر ثبت شده</td>
                <td style={{ padding: '0.75rem' }}>شامل هر دو اثر جانشینی و درآمدی است.</td>
                <td style={{ padding: '0.75rem' }}>فقط اثر جانشینی (اثر درآمدی جبران شده است).</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: 'var(--text-main)' }}>سطح مطلوبیت</td>
                <td style={{ padding: '0.75rem' }}>متغیر است (با تغییر قیمت، رفاه فرد تغییر می‌کند).</td>
                <td style={{ padding: '0.75rem' }}>ثابت است (قدرت خرید در سطح مطلوبیت حفظ می‌شود).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style={{ color: 'var(--secondary)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Scissors style={{ color: 'var(--secondary)' }} />
        ۲. تجزیه اثر قیمت برای انواع کالاها
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        تغییر نهایی تقاضای مارشالی در اثر تغییر قیمت، حاصل‌جمع جبری دو اثر است:
        <br />
        <strong style={{ color: 'var(--text-main)' }}>اثر کل (Total Effect) = اثر جانشینی + اثر درآمدی</strong>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
        {/* Normal Good */}
        <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <TrendingUp size={22} />
            الف) کالای نرمال (Normal Good)
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1.3', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                اگر قیمت کالا کاهش یابد، اثر جانشینی باعث افزایش مصرف می‌شود. از طرف دیگر، به دلیل افزایش قدرت خرید واقعی، اثر درآمدی نیز مصرف را افزایش می‌دهد. <strong>هر دو اثر هم‌جهت هستند</strong> و تقاضای کل شدیداً رشد می‌کند.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر جانشینی (SE):</span>
                  <div style={{ margin: '0.25rem 0' }}><InlineMath math="P_x \downarrow \implies x \uparrow" /></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>جهت مثبت (+)</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر درآمدی (IE):</span>
                  <div style={{ margin: '0.25rem 0' }}><InlineMath math="P_x \downarrow \implies I/P_x \uparrow \implies x \uparrow" /></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>جهت مثبت (+)</span>
                </div>
                <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر کل (Total Effect):</span>
                  <div style={{ margin: '0.25rem 0', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    <InlineMath math="TE = SE + IE \implies x \uparrow\uparrow" />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>منحنی تقاضا نزولی است (قانون تقاضا برقرار است).</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.015)', padding: '2rem 1.5rem', borderRadius: '16px' }}>
              <img src="/svg/25-nemodar.svg" alt="اثر قیمت در کالای نرمال" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain' }} />
              <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>اثر قیمت در کالای نرمال</div>
            </div>
          </div>
        </div>

        {/* Inferior Good */}
        <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <Activity size={22} />
            ب) کالای پست (Inferior Good)
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1.3', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                با کاهش قیمت، اثر جانشینی مصرف را افزایش می‌دهد. اما اثر درآمدی (به دلیل افزایش قدرت خرید و پست بودن کالا) تمایل به کاهش مصرف دارد. در اینجا، <strong>اثر جانشینی بزرگتر از اثر درآمدی است</strong>؛ در نتیجه، تقاضای کل همچنان افزایش می‌یابد (منحنی تقاضا نزولی است).
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر جانشینی (SE):</span>
                  <div style={{ margin: '0.25rem 0' }}><InlineMath math="P_x \downarrow \implies x \uparrow" /></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>جهت مثبت (+)</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر درآمدی (IE):</span>
                  <div style={{ margin: '0.25rem 0' }}><InlineMath math="P_x \downarrow \implies I/P_x \uparrow \implies x \downarrow" /></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--danger)' }}>جهت منفی (-)</span>
                </div>
                <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر کل (Total Effect):</span>
                  <div style={{ margin: '0.25rem 0', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    <InlineMath math="|SE| > |IE| \implies TE > 0 \implies x \uparrow" />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>منحنی تقاضا همچنان نزولی است (قانون تقاضا برقرار است).</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.015)', padding: '2rem 1.5rem', borderRadius: '16px' }}>
              <img src="/svg/25-nemodar.svg" alt="اثر قیمت در کالای پست" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain' }} />
              <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>اثر قیمت در کالای پست</div>
            </div>
          </div>
        </div>

        {/* Giffen Good */}
        <div className="glass-panel" style={{ padding: '2rem', borderRight: '4px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <AlertTriangle size={22} />
            ج) کالای گیفن (Giffen Good)
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1.3', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                نوعی کالای شدیداً پست است. با کاهش قیمت، اثر جانشینی مصرف را بالا می‌برد اما اثر درآمدی منفی آن‌قدر قوی است که اثر جانشینی را خنثی کرده و مصرف کل کاهش می‌یابد! <strong>اثر درآمدی بزرگتر از اثر جانشینی است</strong> و منحنی تقاضا صعودی می‌شود.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر جانشینی (SE):</span>
                  <div style={{ margin: '0.25rem 0' }}><InlineMath math="P_x \downarrow \implies x \uparrow" /></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>جهت مثبت (+)</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر درآمدی (IE):</span>
                  <div style={{ margin: '0.25rem 0' }}><InlineMath math="P_x \downarrow \implies I/P_x \uparrow \implies x \downarrow\downarrow" /></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--danger)' }}>جهت منفی شدید (--)</span>
                </div>
                <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>اثر کل (Total Effect):</span>
                  <div style={{ margin: '0.25rem 0', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    <InlineMath math="|IE| > |SE| \implies TE < 0 \implies x \downarrow" />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--danger)' }}>قانون تقاضا نقض شده و منحنی تقاضا صعودی است!</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.015)', padding: '2rem 1.5rem', borderRadius: '16px' }}>
              <img src="/svg/24-nemodar.svg" alt="اثر قیمت در کالای گیفن" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain' }} />
              <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>اثر قیمت در کالای گیفن</div>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--accent)', marginTop: '3rem', marginBottom: '1rem' }}>۳. معادله اسلاتسکی (Slutsky Equation)</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        معادله اسلاتسکی، فرمول‌بندی ریاضی برای تفکیک اثر تغییر قیمت روی تقاضای معمولی (مارشالی) به دو اثر جانشینی و درآمدی است:
      </p>

      <div className="formula-box" style={{ marginBottom: '2rem' }}>
        <BlockMath math="\frac{\partial x_i^{ND}}{\partial P_j} = \frac{\partial x_i^{CD}}{\partial P_j} - x_j \frac{\partial x_i^{ND}}{\partial I}" />
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem', textAlign: 'center', lineHeight: '1.6' }}>
          که در آن <InlineMath math="\frac{\partial x_i^{CD}}{\partial P_j}" /> اثر جانشینی و <InlineMath math="x_j \frac{\partial x_i^{ND}}{\partial I}" /> اثر درآمدی است.
        </div>
      </div>

      {/* Advanced Slutsky Proof */}
      <div className="example-box" style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <HelpCircle size={20} />
          اثبات ریاضی پیشرفته دیفرانسیلی و ماتریسی (کرامر - صفحات ۳۰-۳۴ جزوه)
        </h4>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          سیستم تعادل لاگرانژ مصرف‌کننده را به صورت دیفرانسیل کامل در نظر می‌گیریم:
          <BlockMath math="\begin{pmatrix} U_{11} & U_{12} & -P_1 \\ U_{21} & U_{22} & -P_2 \\ -P_1 & -P_2 & 0 \end{pmatrix} \begin{pmatrix} dx_1 \\ dx_2 \\ d\lambda \end{pmatrix} = \begin{pmatrix} \lambda dP_1 \\ \lambda dP_2 \\ -dI + x_1 dP_1 + x_2 dP_2 \end{pmatrix}" />
          ماتریس ضرایب، همان <strong>ماتریس هشین مرزی (<InlineMath math="\bar{H}" />)</strong> است.
          برای به دست آوردن اثر قیمت کالای اول با فرض ثبات بقیه متغیرها (<InlineMath math="dP_2=0, dI=0" />):
          <BlockMath math="dx_1 = \frac{\begin{vmatrix} \lambda dP_1 & U_{12} & -P_1 \\ 0 & U_{22} & -P_2 \\ x_1 dP_1 & -P_2 & 0 \end{vmatrix}}{|\bar{H}|} \implies \frac{\partial x_1}{\partial P_1} = \lambda \frac{\bar{H}_{11}}{|\bar{H}|} + x_1 \frac{\bar{H}_{31}}{|\bar{H}|}" />
          از طرف دیگر، اثر تغییر درآمد بر تقاضای کالای اول با فرض ثبات قیمت‌ها (<InlineMath math="dP_1=0, dP_2=0" />) برابر است با:
          <BlockMath math="dx_1 = \frac{\begin{vmatrix} 0 & U_{12} & -P_1 \\ 0 & U_{22} & -P_2 \\ -dI & -P_2 & 0 \end{vmatrix}}{|\bar{H}|} \implies \frac{\partial x_1}{\partial I} = -\frac{\bar{H}_{31}}{|\bar{H}|} \implies \frac{\bar{H}_{31}}{|\bar{H}|} = -\frac{\partial x_1}{\partial I}" />
          با جایگذاری این تساوی در رابطه قیمت، اثبات کامل می‌شود:
          <BlockMath math="\frac{\partial x_1}{\partial P_1} = \lambda \frac{\bar{H}_{11}}{|\bar{H}|} - x_1 \frac{\partial x_1}{\partial I}" />
        </div>
      </div>

      {/* Slutsky Elasticity */}
      <h3 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>۴. معادله اسلاتسکی بر اساس کشش‌ها</h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1rem" }}>
        برای مقایسه‌ی بدون واحد، معادله اسلاتسکی را با ضرب و تقسیم در مقادیر مناسب به فرم کشش تبدیل می‌کنیم:
      </p>

      <div className="formula-box" style={{ borderColor: 'var(--primary)', marginBottom: '1rem' }}>
        <BlockMath math="\varepsilon_j = \bar{\varepsilon}_j - w_j \cdot \eta_j" />
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginBottom: '2rem' }}>
        که در آن <InlineMath math="\varepsilon_j" /> کشش قیمتی مارشالی، <InlineMath math="\bar{E}_j" /> کشش قیمتی هیکسی، <InlineMath math="w_j = \frac{P_j x_j}{I}" /> سهم مخارج کالا از درآمد و <InlineMath math="\eta_j" /> کشش درآمدی کالا است.
      </p>

      {/* Aggregation Conditions */}
      <h3 style={{ color: 'var(--success)', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Activity style={{ color: 'var(--success)' }} />
        ۵. قیود جمعی (Aggregation Conditions)
      </h3>
      <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
        به دلیل وجود محدودیت بودجه، کشش‌های قیمتی و درآمدی کالاها با هم روابط سیستماتیک دارند:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>شرط جمعی کورنو (Cournot Aggregation)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            مجموع وزنی کشش‌های قیمتی کالاها نسبت به تغییر قیمت کالای <InlineMath math="j" />، برابر قرینه سهم آن کالا از درآمد است:
          </p>
          <BlockMath math="\sum_{i=1}^{n} w_i \varepsilon_{ij} = -w_j" />
          <div className="glass-panel" style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.01)', borderLeft: '3px solid var(--success)', marginTop: '0.75rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
              <strong>شهود اقتصادی:</strong> اگر قیمت کالای j افزایش یابد، مصرف‌کننده برای جبران این تغییر باید مخارج کالاها را بازتوزیع کند تا در بودجه قرار گیرد.
            </p>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>شرط جمعی انگل (Engel Aggregation)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            مجموع وزنی کشش‌های درآمدی تمامی کالاها همواره برابر با یک است:
          </p>
          <BlockMath math="\sum_{i=1}^{n} w_i \eta_i = 1" />
          <div className="glass-panel" style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.01)', borderLeft: '3px solid var(--warning)', marginTop: '0.75rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
              <strong>شهود اقتصادی:</strong> مصرف‌کننده نمی‌تواند با افزایش درآمد، مصرف تمام کالاهای خود را کاهش دهد؛ یعنی حداقل یکی از کالاها باید کالای نرمال باشد.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Subpage3;
