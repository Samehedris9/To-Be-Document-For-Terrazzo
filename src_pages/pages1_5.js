// src_pages/pages1_5.js - Pages 1 through 6 of To-Be Document v0.3

export function getPages1to5() {
    return `
        <!-- ================= PAGE 1: TITLE COVER PAGE ================= -->
        <section class="a4-page cover-page" id="page-1">
            <svg class="cover-bg-tech" viewBox="0 0 794 1123" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="coverBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff" />
                        <stop offset="100%" stop-color="#f8fafc" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#coverBgGrad)" />
                <g stroke="#cbd5e1" stroke-width="0.75" opacity="0.35" stroke-dasharray="4,4">
                    <line x1="0" y1="120" x2="794" y2="120" />
                    <line x1="0" y1="360" x2="794" y2="360" />
                    <line x1="0" y1="880" x2="794" y2="880" />
                    <line x1="150" y1="0" x2="150" y2="1123" />
                    <line x1="644" y1="0" x2="644" y2="1123" />
                </g>
                <g opacity="0.25">
                    <polygon points="120,180 160,150 170,200 130,220" fill="#0284c7" />
                    <polygon points="680,240 730,210 740,270 700,290" fill="#059669" />
                    <polygon points="100,780 150,760 140,820 90,830" fill="#7c3aed" />
                    <polygon points="660,820 710,790 730,850 670,870" fill="#b45309" />
                </g>
            </svg>

            <!-- Brand Top Container -->
            <div class="cover-logos-container">
                <div class="cover-partner-brand">
                    <img src="abc_logo.png" alt="ABC COUNSEL" class="cover-logo-abc">
                    <span class="cover-brand-sub">Specialized Consulting & Business Advisory Company</span>
                </div>
            </div>

            <!-- Hero Center Title -->
            <div class="cover-hero-center">
                <div class="cover-badge-top">مشروع دراسة وإعادة هندسة العمليات الصناعية التشغيلية</div>
                <h1 class="cover-main-title">وثيقة الوضع المستهدف (To-Be Document)</h1>
                <div class="cover-main-subtitle">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</div>
            </div>

            <!-- Metadata Details Grid -->
            <div class="cover-details-card">
                <div class="cover-details-grid">
                    <div class="cover-detail-item">
                        <span class="cover-detail-label">الجهة المالكة (Client)</span>
                        <span class="cover-detail-value">مصنع Trazoo (ترازو)</span>
                    </div>

                    <div class="cover-detail-item">
                        <span class="cover-detail-label">الاستشاري المنفذ (Consulting Partner)</span>
                        <span class="cover-detail-value">شركة إيه بي سي كونسل (ABC Counsel)</span>
                    </div>

                    <div class="cover-detail-item">
                        <span class="cover-detail-label">رقم وإصدار الوثيقة (Version)</span>
                        <span class="cover-detail-value">v0.3 — مسودة رسمية لمراجعة الإدارة</span>
                    </div>

                    <div class="cover-detail-item">
                        <span class="cover-detail-label">المرجع الأساسي (Base Reference)</span>
                        <span class="cover-detail-value">وثيقة الوضع الحالي As-Is v0.1 بتاريخ 2 نوفمبر 2026</span>
                    </div>

                    <div class="cover-detail-item" style="grid-column: span 2;">
                        <span class="cover-detail-label">الحالة التشغيلية والاعتماد (Status)</span>
                        <span class="cover-detail-value" style="color: #b45309;">
                            مسودة لمراجعة الإدارة — تعتمد على حسم الأسئلة المفتوحة والقرارات المطلوبة (القسم 22)
                        </span>
                    </div>

                    <div class="cover-detail-item" style="grid-column: span 2;">
                        <span class="cover-detail-label">نطاق المحتويات المعيارية (Comprehensive Scope)</span>
                        <span class="cover-detail-value" style="font-size:0.73rem; color:#475569; font-weight:600;">
                            الوثيقة الرئيسية (الأقسام 0-22) + الملحق أ (معمارية 51 إجراء SOP) + الملحق ب (قاموس مؤشرات الأداء F-01 إلى F-15، مؤشرات المراحل S1-S9، مؤشرات الإدارات، ومؤشرات تأهيل المشغلين OP) + الملحق ج (نقاط الالتقاط C01-C14 و16 تقريرا و20 لوحة متابعة)
                        </span>
                    </div>
                </div>
            </div>

            <!-- Cover Footer -->
            <div style="position: relative; z-index: 2; font-size: 0.74rem; color: var(--text-muted); border-top: 1px solid #e2e8f0; padding-top: 0.65rem;">
                وثيقة سرية — للاستخدام الداخلي المشترك بين إدارة مصنع Trazoo وشركة ABC Counsel
            </div>
        </section>

        <!-- ================= PAGE 2: TOC, EXECUTIVE SUMMARY & METHODOLOGY ================= -->
        <section class="a4-page" id="page-2">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>To-Be Operating Model</strong>
                    <span>Executive Summary & Methodology</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title" id="toc-section">
                    <span>0. بيانات الوثيقة والملخص التنفيذي ومنهجية الوسم</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Scope, Shifts & Rules</span>
                </h2>

                <p style="font-size:0.76rem; line-height:1.45; margin-bottom:0.4rem;">
                    تحدد هذه الوثيقة كيف سيعمل مصنع ترازو بعد إعادة هندسة العمليات: تسع مراحل إنتاج مكودة، وكل مرحلة لها إجراء تشغيل قياسي (SOP) ومؤشرات أداء محددة المعادلة والمصدر والمسؤول. الوثيقة تصف العمليات والسجلات والضوابط فقط، ولا تفرض أي نظام أو برمجية معينة (قرار D1/D2)، حيث يمثل السجل دليلا ماديا أو رقميا تختاره الإدارة لاحقا.
                </p>

                <h3 class="subsection-title">منهجية الوثيقة وقواعد الوسم الدقيقة (Tagging Rules)</h3>
                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.45rem; margin-bottom:0.45rem;">
                    <div class="callout-box info" style="margin:0; padding:0.4rem 0.6rem;">
                        <span class="badge badge-as-is" style="margin-bottom:0.2rem;">[As-Is]</span>
                        <p style="font-size:0.7rem; margin:0; line-height:1.35;">موجود بالنص الصريح في وثيقة الوضع الحالي As-Is v0.1 كحقيقة قائمة بالمصنع.</p>
                    </div>
                    <div class="callout-box success" style="margin:0; padding:0.4rem 0.6rem;">
                        <span class="badge badge-proposed" style="margin-bottom:0.2rem;">[Proposed]</span>
                        <p style="font-size:0.7rem; margin:0; line-height:1.35;">تحسين مقترح للوضع المستهدف مع مبرر عملي صريح، ويحتاج اعتماد إدارة المصنع.</p>
                    </div>
                    <div class="callout-box warning" style="margin:0; padding:0.4rem 0.6rem;">
                        <span class="badge badge-tbc" style="margin-bottom:0.2rem;">[TBC]</span>
                        <p style="font-size:0.7rem; margin:0; line-height:1.35;">يحتاج تأكيدا أو قرارا من إدارة Trazoo، ولا تُعتمد قيمته قبل حسمه بالقسم 22.</p>
                    </div>
                </div>

                <h3 class="subsection-title">الانتقالات الخمسة الرئيسية للتحول الصناعي (The 5 Core Shifts)</h3>
                <div class="shift-grid">
                    <div class="shift-card">
                        <div class="shift-card-title">1. الوزن الدقيق</div>
                        <div class="shift-from">وزن تقديري بالجونيات</div>
                        <div class="shift-arrow">⬇</div>
                        <div class="shift-to">وزن فعلي موثق</div>
                        <div class="shift-desc">ميزان بسكول وأرضي وميكسر يغلقان ISS-001 و ISS-002</div>
                    </div>
                    <div class="shift-card">
                        <div class="shift-card-title">2. التسجيل اللحظي</div>
                        <div class="shift-from">تسجيل متأخر غدا</div>
                        <div class="shift-arrow">⬇</div>
                        <div class="shift-to">تسجيل بنفس الفترة</div>
                        <div class="shift-desc">يسجل الاستهلاك والمخرج في نفس فترة التشغيل فورا</div>
                    </div>
                    <div class="shift-card">
                        <div class="shift-card-title">3. تتبع المنتج</div>
                        <div class="shift-from">بلوك مجهول الهوية</div>
                        <div class="shift-arrow">⬇</div>
                        <div class="shift-to">Block ID وعلامة</div>
                        <div class="shift-desc">علامة تعريف مقروءة تربط الخلطة بالألواح حتى العميل</div>
                    </div>
                    <div class="shift-card">
                        <div class="shift-card-title">4. الإفراج بالجودة</div>
                        <div class="shift-from">إفراج زمني عشوائي</div>
                        <div class="shift-arrow">⬇</div>
                        <div class="shift-to">بوابات جودة ملزمة</div>
                        <div class="shift-desc">لا انتقال لمرحلة إلا بنتيجة فحص واختبار مقبولة</div>
                    </div>
                    <div class="shift-card">
                        <div class="shift-card-title">5. محاسبة التكلفة</div>
                        <div class="shift-from">تكلفة تقديرية عامة</div>
                        <div class="shift-arrow">⬇</div>
                        <div class="shift-to">تكلفة فعلية / م²</div>
                        <div class="shift-desc">خامات فعلية + ساعات ماكينة + توزيع مرافق معتمد</div>
                    </div>
                </div>

                <h3 class="subsection-title">جدول المحتويات التنفيذي وفهرس الأقسام (22 قسما و3 ملاحق)</h3>
                <div class="data-table-wrapper" style="margin-top:0.3rem;">
                    <table class="data-table" style="font-size:0.69rem;">
                        <thead>
                            <tr>
                                <th style="width: 6%;">#</th>
                                <th style="width: 33%;">القسم / المكون الوظيفي</th>
                                <th style="width: 53%;">المحتوى الأساسي ونطاق التوثيق المستهدف v0.3</th>
                                <th style="width: 8%; text-align:center;">الصفحة</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="toc-row" onclick="scrollToPage('page-3')"><td><strong>01</strong></td><td><a href="#page-3" class="toc-link">الغرض ومبادئ التصميم وحسم التعارضات</a></td><td>مبادئ التصميم P1–P8، وافتراضات حسم التعارضات A-01 إلى A-09</td><td style="text-align:center;"><span class="toc-page-pill">03</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-4')"><td><strong>02</strong></td><td><a href="#page-4" class="toc-link">الهيكل التنظيمي ومصفوفة الصلاحيات RACI</a></td><td>الأدوار التشغيلية المضافة، مصفوفة الصلاحيات، وقواعد الفصل الإلزامية</td><td style="text-align:center;"><span class="toc-page-pill">04</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-5')"><td><strong>03</strong></td><td><a href="#page-5" class="toc-link">خريطة التدفق ونقاط التحكم والتتبع</a></td><td>مسار العمليات التسع، مراكز العمل، بوابات التحكم، وشجرة التتبع</td><td style="text-align:center;"><span class="toc-page-pill">05</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-6')"><td><strong>04</strong></td><td><a href="#page-6" class="toc-link">المعمارية العامة لبوابات الجودة (1-9)</a></td><td>مخططات المراحل التسع مع بوابات القبول والرفض ومسارات الفرز</td><td style="text-align:center;"><span class="toc-page-pill">06</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-15')"><td><strong>05</strong></td><td><a href="#page-15" class="toc-link">المرحلة 1: استلام وتخزين الخامات (RM QC)</a></td><td>SOP-RM-01، إغلاق فجوة الوزن ISS-001، فحص الكسر ومؤشرات S1</td><td style="text-align:center;"><span class="toc-page-pill">15</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-18')"><td><strong>06</strong></td><td><a href="#page-18" class="toc-link">المرحلة 2: تكسير وفرز كسر الرخام (Sizing)</a></td><td>SOP-CR-01، التصنيف الحجمي G1–G5، تشغيل الـ 2 كسارة، تنظيف الكسارات ومؤشرات S2</td><td style="text-align:center;"><span class="toc-page-pill">18</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-21')"><td><strong>07</strong></td><td><a href="#page-21" class="toc-link">المرحلة 3: الخلط الآلي ووصفات الخلطة (BOM)</a></td><td>SOP-MX-01، ميزان الميكسر الرقمي، تجانس اللون ومؤشرات S3</td><td style="text-align:center;"><span class="toc-page-pill">21</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-24')"><td><strong>08</strong></td><td><a href="#page-24" class="toc-link">المرحلة 4: الصب في القالب وتوليد Block ID</a></td><td>SOP-CS-01، دهان العازل، الدمك المتوازن، التتبع ومؤشرات S4</td><td style="text-align:center;"><span class="toc-page-pill">24</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-27')"><td><strong>09</strong></td><td><a href="#page-27" class="toc-link">المرحلة 5: سحب الهواء والكبس تحت الفاكيوم</a></td><td>SOP-VC-01، تحقيق 100 mbar، تفريغ الجيوب الهوائية ومؤشرات S5</td><td style="text-align:center;"><span class="toc-page-pill">27</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-30')"><td><strong>10</strong></td><td><a href="#page-30" class="toc-link">المرحلة 6: الفك والمعالجة (Demoulding & Curing)</a></td><td>SOP-CU-01، الرش المائي 14 يوما، اختبار الصلادة 35 MPa ومؤشرات S6</td><td style="text-align:center;"><span class="toc-page-pill">30</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-33')"><td><strong>11</strong></td><td><a href="#page-33" class="toc-link">المرحلة 7: التقطيع بالمناشير (Gang Saws)</a></td><td>SOP-GS-01، خطوط BM1–BM4، ضبط السمك، باركود Slab ID ومؤشرات S7</td><td style="text-align:center;"><span class="toc-page-pill">33</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-36')"><td><strong>12</strong></td><td><a href="#page-36" class="toc-link">المرحلة 8: الجلي والتلميع والمعالجة السطحية</a></td><td>SOP-PL-01، المعالجة بالريزن، تحقيق اللمعان 85 GU ومؤشرات S8</td><td style="text-align:center;"><span class="toc-page-pill">36</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-39')"><td><strong>13</strong></td><td><a href="#page-39" class="toc-link">المرحلة 9: القطع والتفصيل والتغليف النهائي</a></td><td>SOP-PK-01، منشار الجسر CNC، فحص الأبعاد، التغليف ومؤشرات S9</td><td style="text-align:center;"><span class="toc-page-pill">39</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-42')"><td><strong>14</strong></td><td><a href="#page-42" class="toc-link">العمليات المساندة: التخطيط وإدارة المخازن</a></td><td>SOP-PP-01، SOP-WH-01، خطة الإنتاج، التخزين المكود ومؤشرات SUP</td><td style="text-align:center;"><span class="toc-page-pill">42</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-43')"><td><strong>15</strong></td><td><a href="#page-43" class="toc-link">العمليات المساندة: الجودة، المختبر والصيانة</a></td><td>SOP-QC-01، SOP-MT-01، إدارة الـ NCR، صيانة القوالب والجاهزية</td><td style="text-align:center;"><span class="toc-page-pill">43</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-44')"><td><strong>16</strong></td><td><a href="#page-44" class="toc-link">العمليات المساندة: الهالك والتدوير ومعايرة الموازين</a></td><td>SOP-SC-01، SOP-CA-01، فرز وتدوير الكسر، دقة البسكول والموازين</td><td style="text-align:center;"><span class="toc-page-pill">44</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-45')"><td><strong>17</strong></td><td><a href="#page-45" class="toc-link">مؤشرات المصنع الموحدة ومصير السجلات الـ 25</a></td><td>منظومة F-01..15 الموحدة، ومصير السجلات والنماذج الحالية للوضع المستهدف</td><td style="text-align:center;"><span class="toc-page-pill">45</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-46')"><td><strong>18</strong></td><td><a href="#page-46" class="toc-link">إغلاق الفجوات الـ 16 ومصفوفة التتبع الشاملة</a></td><td>إغلاق ISS-001..16 و RSK-001..04 ومصفوفة التتبع T1 إلى T20</td><td style="text-align:center;"><span class="toc-page-pill">46</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-47')"><td><strong>19</strong></td><td><a href="#page-47" class="toc-link">أولويات التحسين والمخاطر التشغيلية والضوابط</a></td><td>مصفوفة الأولويات الصناعية (P1, P2, P3) وسجل المخاطر التشغيلية والضوابط</td><td style="text-align:center;"><span class="toc-page-pill">47</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-48')"><td><strong>20</strong></td><td><a href="#page-48" class="toc-link">خارطة التطبيق، الأسئلة OQ، والاعتماد الرسمي</a></td><td>مراحل التنفيذ الخمس، الأسئلة المفتوحة (28 سؤالاً بعد حسم الـ 2 كسارة)، واستمارة التوقيع والاعتماد</td><td style="text-align:center;"><span class="toc-page-pill">48</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-49')"><td><strong>21</strong></td><td><a href="#page-49" class="toc-link">الملحق أ: معمارية الـ 51 إجراء والكتالوج العام</a></td><td>معمارية الإجراءات، إجراءات SOP-GEN العامة الـ 14 وقواعد التشغيل</td><td style="text-align:center;"><span class="toc-page-pill">49</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-50')"><td><strong>22</strong></td><td><a href="#page-50" class="toc-link">الملحق أ: إجراءات التشغيل القياسية التفصيلية</a></td><td>مجموعات الإجراءات التفصيلية للمراحل التسع والعمليات المساندة (31 إجراء)</td><td style="text-align:center;"><span class="toc-page-pill">50</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-51')"><td><strong>23</strong></td><td><a href="#page-51" class="toc-link">الملحق ب: قاموس مؤشرات الأداء (105 مؤشرات)</a></td><td>المؤشرات الشاملة L1، ومؤشرات المراحل التفصيلية L3 وقواعد الاحتساب</td><td style="text-align:center;"><span class="toc-page-pill">51</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-52')"><td><strong>24</strong></td><td><a href="#page-52" class="toc-link">الملحق ب: مؤشرات الإدارات الداعمة وشجرة القياس</a></td><td>مؤشرات الإدارات الداعمة L2، تأهيل المشغلين OP، وشجرة المؤشرات المتوازنة</td><td style="text-align:center;"><span class="toc-page-pill">52</span></td></tr>
                            <tr class="toc-row" onclick="scrollToPage('page-53')"><td><strong>25</strong></td><td><a href="#page-53" class="toc-link">الملحق ج: التقارير ولوحات المتابعة ونقاط التسجيل</a></td><td>نقاط التسجيل C01-C14، كتالوج 16 تقريرا، ولوحات التحكم الرقمية DB</td><td style="text-align:center;"><span class="toc-page-pill">53</span></td></tr>
                            </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Executive Summary & TOC</span>
                <span>الصفحة 02 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 3: PURPOSE, SCOPE & DESIGN ASSUMPTIONS ================= -->
        <section class="a4-page" id="page-3">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Design Principles & Assumptions</strong>
                    <span>Sections 1 & 2</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>1. الغرض والنطاق ومبادئ التصميم المستهدف</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Core Operating Architecture</span>
                </h2>
                <p style="font-size:0.77rem; margin-bottom:0.4rem;">
                    تغطي الوثيقة نفس نطاق As-Is: العمليات الإنتاجية، التخطيط والمشتريات، المخازن والصرف، الصيانة وقطع الغيار، معالجة المياه، ومحاسبة التكاليف. يضاف إليها تتبع البلوكات والألواح بالباركود وعلامات التعريف [As-Is]. خارج النطاق حاليا: المبيعات والتحصيل، الحسابات الدائنة والإقفال السنوي، وشؤون الموظفين.
                </p>

                <h3 class="subsection-title">مبادئ التصميم المستهدف (Target Design Principles)</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.5rem;">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th style="width: 8%;">#</th>
                                <th style="width: 25%;">المبدأ المستهدف</th>
                                <th style="width: 67%;">التطبيق العملي في مصنع Trazoo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="badge badge-proposed">P1</span></td>
                                <td><strong>كل مرحلة عملية مسجلة</strong></td>
                                <td>كل مرحلة = عملية في مسار الإنتاج (Routing) على مركز عمل محدد، ومخرجها صنف نصف مصنع مكود.</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">P2</span></td>
                                <td><strong>لا حركة بدون مستند</strong></td>
                                <td>لا صرف بدون أمر إنتاج، ولا استلام بدون أمر شراء، ولا قطعة غيار بدون أمر صيانة معتمد.</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">P3</span></td>
                                <td><strong>الوزن عند كل نقل عهدة</strong></td>
                                <td>ميزان معاير عند البوابة والمخزن والميكسر، والفرق يظهر تلقائيا كانحراف يحتاج تفسيرا واعتمادا.</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">P4</span></td>
                                <td><strong>التسجيل عند المصدر</strong></td>
                                <td>من ينفذ يسجل لحظيا في نقطة تسجيل بمكان التنفيذ، ولا يعاد الإدخال يدويا من مسودات ورقية لاحقة.</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">P5</span></td>
                                <td><strong>بوابات جودة ملزمة</strong></td>
                                <td>حالة المادة (مقبول / مرفوض / إعادة تشغيل / موقوف) تحدد إمكانية نقلها أو استخدامها نظاميا.</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">P6</span></td>
                                <td><strong>التتبع من المورد للعميل</strong></td>
                                <td>رقم دفعة للخامة + رقم بلوك + رقم لوح، مرتبطة في شجرة نسب رقمية واحدة (Genealogy Trace).</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">P7</span></td>
                                <td><strong>الفصل بين الوظائف</strong></td>
                                <td>الطالب لا يعتمد، والمستلم لا يصرف لنفسه، والجودة لا تتبع الإنتاج لضمان الحوكمة والنزاهة.</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">P8</span></td>
                                <td><strong>المعايير قبل القياس</strong></td>
                                <td>وصفة خلطة معتمدة وزمن قياسي لكل عملية، ليصبح انحراف الكمية والزمن والتكلفة قابلا للحساب.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="section-title">
                    <span>2. افتراضات التصميم لحسم التعارضات (Design Assumptions)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">حلول تعارضات As-Is صفحات 4-16</span>
                </h2>
                <div class="data-table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th style="width: 8%;">الكود</th>
                                <th style="width: 25%;">موضوع التعارض</th>
                                <th style="width: 52%;">الافتراض المعتمد في التصميم المستهدف</th>
                                <th style="width: 15%; text-align:center;">الحالة والوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="badge badge-proposed">A-01</span></td>
                                <td>عدد وسعة سيلوهات الأسمنت</td>
                                <td>معتمد رسمياً وجود 3 سايلوهات (صوامع) كمواقع تخزين مستقلة ومكودة للأسمنت والمواد السائبة [As-Is محسوم]؛ والسعة تحدد بالمعايرة الميدانية.</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed] محسوم (3 سايلوهات)</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">A-02</span></td>
                                <td>آلية صرف ووزن الخامات</td>
                                <td>الصرف الفعلي بوزن ميزان الماكينة يسجل كاستهلاك على أمر الإنتاج بنفس فترة التشغيل، ويلغى طلب الصرف اللاحق.</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed] محسوم</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-as-is">A-03</span></td>
                                <td>مدة المعالجة (14 مقابل 14–28 يوما)</td>
                                <td>حد أدنى 14 يوما كزمن انتظار بالمسار، والإفراج للتقطيع بنتيجة اختبار ضغط مقبولة وليس بالزمن فقط (حد أقصى 28 يوما).</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[TBC] يحتاج معيارا</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">A-04</span></td>
                                <td>عدد المراحل (8 مقابل 9)</td>
                                <td>9 مراحل، والمرحلة 9 مقسمة إلى: 9أ قطع خاص (اختياري) و9ب فحص نهائي وتغليف (إلزامي).</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed] مقترح</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">A-05</span></td>
                                <td>نقطة المنتج التام</td>
                                <td>اللوح الملمع يصبح منتجا تاما بعد الفحص النهائي والتغليف (9ب). والقطع الخاص أمر تحويل منفصل مرتبط بأمر البيع.</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed] مقترح</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">A-06</span></td>
                                <td>تبعية إدارة الجودة</td>
                                <td>إدارة جودة مستقلة تملك صلاحية إيقاف وإفراج المادة في سجل المادة بحيادية تامة.</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed] محسوم</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-as-is">A-07</span></td>
                                <td>فئات المقاس الحجمي للكسر</td>
                                <td>خمس فئات ثابتة G1–G5 بأكواد أصناف مستقلة، ونطاق 0.1–0.6 مم يعامل كخليط من G1 وG2 داخل وصفة الخلطة.</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[TBC] يحتاج تأكيد</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-proposed">A-08</span></td>
                                <td>أساس تحميل المستلزمات</td>
                                <td>تكلفة مباشرة محملة بالمتر المربع المنتج على مركز العمل (أسلحة وأحجار)، بمعدل قياسي يراجع شهريا مقابل الفعلي.</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed] مقترح</span></td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-as-is">A-09</span></td>
                                <td>—</td>
                                <td>لا تحدد هذه الوثيقة أي نظام أو برمجية معينة، ويبقى القرار تقنيا لإدارة المصنع. (قرار D1/D2)</td>
                                <td style="text-align:center;"><span class="badge badge-as-is">مسحوب</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Principles & Assumptions</span>
                <span>الصفحة 03 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 4: TARGET ORG & RACI MATRIX ================= -->
        <section class="a4-page" id="page-4">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Organization & RACI Matrix</strong>
                    <span>Section 3</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>3. الهيكل التنظيمي المستهدف ومصفوفة الصلاحيات (RACI)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Segregation of Duties</span>
                </h2>
                <p style="font-size:0.77rem; margin-bottom:0.35rem;">
                    تبقى الأدوار العشرة الموثقة في As-Is (القسم 4) [As-Is]، وتضاف ستة أدوار تشغيلية لازمة لتشغيل النموذج المستهدف مع منع أي تعارض مصالح:
                </p>

                <h3 class="subsection-title">الأدوار التشغيلية الستة المضافة (Added Target Roles)</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th style="width: 30%;">الدور الجديد</th>
                                <th style="width: 52%;">المسؤولية التشغيلية الرئيسية في الوضع المستهدف</th>
                                <th style="width: 18%;">التبعية المقترحة</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>مشرف فترة تشغيل (Shift Supervisor)</strong></td>
                                <td>تشغيل أوامر فترة التشغيل وتسجيل المخرجات والتوقفات والهدر لحظيا عند الماكينات.</td>
                                <td>[TBC] مدير المصنع</td>
                            </tr>
                            <tr>
                                <td><strong>مشغل الميزان البسكول (Weighbridge Operator)</strong></td>
                                <td>وزن الشاحنات الداخلة والخارجة وإصدار تذكرة وزن مرتبطة بأمر الشراء PO.</td>
                                <td>[TBC] إدارة المخازن</td>
                            </tr>
                            <tr>
                                <td><strong>مخطط صيانة (Maintenance Planner)</strong></td>
                                <td>جدول الصيانة الوقائية وإصدار أوامر العمل ومتابعة عمر المستلزمات والقطع.</td>
                                <td>[TBC] مدير المصنع</td>
                            </tr>
                            <tr>
                                <td><strong>مشغل محطة المياه (WTP Operator)</strong></td>
                                <td>تشغيل دورة المعالجة وتسجيل جرعات الكيماويات وكميات المياه المسترجعة والطين.</td>
                                <td>[TBC] مدير المصنع</td>
                            </tr>
                            <tr>
                                <td><strong>محاسب تكاليف (Cost Accountant)</strong></td>
                                <td>معايير التكلفة وتحليل الانحرافات الشهرية وإغلاق أوامر الإنتاج محاسبيا.</td>
                                <td>[TBC] الإدارة المالية</td>
                            </tr>
                            <tr>
                                <td><strong>مسؤول بيانات الأصناف والوصفات</strong></td>
                                <td>البيانات الأساسية (أصناف، وصفات BOM، مسارات التشغيل) والدعم التشغيلي الأول.</td>
                                <td>[TBC] إدارة SCM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">مصفوفة الصلاحيات والحوكمة التشغيلية (RACI Matrix)</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.71rem;">
                        <thead>
                            <tr>
                                <th style="width: 25%;">المعاملة التشغيلية</th>
                                <th style="width: 8%; text-align:center;">المخطط</th>
                                <th style="width: 9%; text-align:center;">المشتريات</th>
                                <th style="width: 8%; text-align:center;">المخزن</th>
                                <th style="width: 8%; text-align:center;">الجودة</th>
                                <th style="width: 9%; text-align:center;">الإنتاج</th>
                                <th style="width: 11%; text-align:center;">مدير المصنع</th>
                                <th style="width: 8%; text-align:center;">SCM</th>
                                <th style="width: 8%; text-align:center;">المالية</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>خطة الإنتاج الأسبوعية</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center;">I</td><td style="text-align:center;">I</td><td style="text-align:center;">I</td><td style="text-align:center;">C</td><td style="text-align:center; font-weight:700; color:#059669;">A</td><td style="text-align:center;">C</td><td style="text-align:center;">I</td></tr>
                            <tr><td>طلب شراء خامات PR</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center;">I</td><td style="text-align:center;">C</td><td style="text-align:center;">—</td><td style="text-align:center;">C</td><td style="text-align:center; font-weight:700; color:#059669;">A</td><td style="text-align:center;">I</td><td style="text-align:center;">—</td></tr>
                            <tr><td>أمر شراء للمورد PO</td><td style="text-align:center;">—</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center;">—</td><td style="text-align:center;">C</td><td style="text-align:center;">—</td><td style="text-align:center; font-weight:700; color:#059669;">A*</td><td style="text-align:center; font-weight:700; color:#059669;">A*</td><td style="text-align:center; font-weight:700; color:#059669;">A*</td></tr>
                            <tr><td>إذن استلام مخزني GRN</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center;">C</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td><td style="text-align:center;">I</td></tr>
                            <tr><td>فحص وقبول / رفض وارد</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td><td style="text-align:center;">I</td><td style="text-align:center; font-weight:700; color:#0284c7;">R/A</td><td style="text-align:center;">I</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td></tr>
                            <tr><td>إطلاق أمر إنتاج</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td><td style="text-align:center;">I</td><td style="text-align:center;">C</td><td style="text-align:center; font-weight:700; color:#059669;">A</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td></tr>
                            <tr><td>صرف خامات لأمر الإنتاج</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center;">—</td><td style="text-align:center;">C</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td></tr>
                            <tr><td>تسجيل مخرج المرحلة والتوقف</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">C</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center; font-weight:700; color:#059669;">A</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td></tr>
                            <tr><td>إفراج بلوك للتقطيع</td><td style="text-align:center;">I</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center; font-weight:700; color:#0284c7;">R/A</td><td style="text-align:center;">C</td><td style="text-align:center;">I</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td></tr>
                            <tr><td>إصدار أمر صيانة وتكاليفه</td><td style="text-align:center;">C</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td><td style="text-align:center;">—</td><td style="text-align:center;">C</td><td style="text-align:center; font-weight:700; color:#059669;">A</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td></tr>
                            <tr><td>تسوية فروق الجرد</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center; font-weight:700; color:#0284c7;">R</td><td style="text-align:center;">—</td><td style="text-align:center;">I</td><td style="text-align:center;">C</td><td style="text-align:center; font-weight:700; color:#059669;">A</td><td style="text-align:center; font-weight:700; color:#059669;">A</td></tr>
                            <tr><td>إغلاق أمر إنتاج وتكلفته</td><td style="text-align:center;">I</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">—</td><td style="text-align:center;">C</td><td style="text-align:center;">C</td><td style="text-align:center;">I</td><td style="text-align:center; font-weight:700; color:#0284c7;">R/A</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="callout-box warning" style="margin-top:0.3rem;">
                    <div class="callout-title">
                        <span>🔒 قواعد الفصل الإلزامية بين الوظائف:</span>
                    </div>
                    <ul style="margin:0; font-size:0.73rem; line-height:1.4;">
                        <li><strong>منشئ طلب الشراء (PR)</strong> لا يعتمده، ومنشئ أمر الشراء (PO) لا يسجل إذن استلامه (GRN).</li>
                        <li><strong>أمين المخزن</strong> لا يعدل حالة الجودة، وإدارة الجودة لا تسجل حركات مخزنية أو صرف مواد.</li>
                        <li><strong>مشرفو الإنتاج</strong> لا يسجلون استلام خامات موردين ولا يرحلون تسويات جرد في المخازن.</li>
                        <li><strong>موظف المشتريات</strong> لا ينشئ أو يعدل بيانات الموردين البنكية لمنع أي تلاعب مالي.</li>
                    </ul>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Target Org & RACI</span>
                <span>الصفحة 04 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 5: PROCESS MAP & TRACEABILITY ================= -->
        <section class="a4-page" id="page-5">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Map & Control Gates</strong>
                    <span>Section 4 (Table)</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>4. خريطة التدفق المستهدفة ونقاط التحكم (Process Flow & Gates)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">9-Stage Target Routing</span>
                </h2>
                <p style="font-size:0.77rem; margin-bottom:0.35rem;">
                    يتحول المصنع إلى مسار إنتاج موحد من تسع عمليات، لكل عملية مركز عمل ومخرج مكود وبوابة تحكم لا يتجاوزها المنتج إلا باستيفاء شرطها. يستمر الإنتاج حسب الطلب (MTO) مع إمكانية إنتاج للمخزون للألوان سريعة الحركة:
                </p>

                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.71rem;">
                        <thead>
                            <tr>
                                <th style="width: 5%;">#</th>
                                <th style="width: 17%;">المرحلة المستهدفة</th>
                                <th style="width: 15%;">مركز العمل</th>
                                <th style="width: 18%;">المخرج (صنف مكود)</th>
                                <th style="width: 25%;">بوابة التحكم للانتقال (Control Gate)</th>
                                <th style="width: 20%;">المستند / السجل المطلوب</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>1</strong></td><td>استلام وتخزين الخامات</td><td>المخزن / البسكول</td><td>خام برقم دفعة (RM-Lot)</td><td>فحص وارد مقبول ومطابقة الوزن</td><td>إذن استلام GRN + تذكرة وزن</td></tr>
                            <tr><td><strong>2</strong></td><td>التكسير والتجهيز</td><td>WC-CR (العدد [TBC])</td><td>كسر مصنف G1–G5</td><td>تحليل منخلي مطابق لمواصفة التدرج</td><td>أمر تكسير + استهلاك ومخرج</td></tr>
                            <tr><td><strong>3</strong></td><td>الخلط الآلي</td><td>WC-MX (ميكسر 5 طن)</td><td>دفعة خلطة (Batch)</td><td>وزن الدفعة ضمن التسامح + فحص Slump</td><td>استهلاك آلي من ميزان الميكسر</td></tr>
                            <tr><td><strong>4</strong></td><td>الصب في القالب</td><td>WC-CS (عربة الصب)</td><td>بلوك خام برقم Block ID</td><td>دفعتان مسجلتان على نفس البلوك بالمهلة</td><td>مخرج البلوك + بطاقة التتبع</td></tr>
                            <tr><td><strong>5</strong></td><td>سحب الهواء (الفاكيوم)</td><td>WC-VC (الفاكيوم)</td><td>بلوك مصمت مفرغ الهواء</td><td>سجل معاملات التفريغ والاهتزاز مطابق</td><td>تسجيل زمن العملية والمعاملات</td></tr>
                            <tr><td><strong>6</strong></td><td>الفك والمعالجة (Curing)</td><td>ساحة المعالجة (مواقع)</td><td>بلوك معالج جاهز</td><td>14 يوما كحد أدنى + اختبار ضغط مقبول</td><td>نقل موقع + إفراج جودة</td></tr>
                            <tr><td><strong>7</strong></td><td>التقطيع بالمناشير</td><td>WC-GS (BM1–BM4)</td><td>ألواح خام 2 سم / 3 سم</td><td>مطابقة المخرج الفعلي مع المخطط للبلوك</td><td>استهلاك البلوك + مخرج الألواح م²</td></tr>
                            <tr><td><strong>8</strong></td><td>الجلي والتلميع</td><td>WC-PL (خط التلميع)</td><td>لوح مصقول مصنف</td><td>قراءة لمعان وسمك ضمن المواصفات</td><td>مخرج مصنف حسب التشطيب والدرجة</td></tr>
                            <tr><td><strong>9أ</strong></td><td>قطع خاص (اختياري)</td><td>WC-CNC (ماكينة 5 محاور)</td><td>قطع بمقاسات العميل</td><td>مطابقة فحص القطعة الأولى للرسم</td><td>أمر تحويل مرتبط بأمر البيع</td></tr>
                            <tr><td><strong>9ب</strong></td><td>فحص نهائي وتغليف</td><td>WC-PK (منطقة التغليف)</td><td>منتج تام مغلف (FG)</td><td>شهادة فحص نهائي واعتماد تجانس اللون</td><td>مخرج تام + نقل لمستودع FG</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">نمط وسلسلة التتبع الشاملة (Traceability Pattern)</h3>
                <div class="callout-box success" style="margin-bottom:0.35rem;">
                    <div style="font-size:0.74rem; font-weight:700; color:var(--primary); line-height:1.6; text-align:center; background:#ffffff; padding:0.4rem; border-radius:6px; border:1px solid #cbd5e1;">
                        رقم دفعة الخامة ⬅ رقم دفعة الكسر المصنف ⬅ دفعة الخلطة ⬅ رقم البلوك (Block ID) ⬅ أرقام الألواح (Block ID + تسلسل) ⬅ رقم الطرد النهائي
                    </div>
                    <p style="font-size:0.72rem; color:#475569; margin:0.3rem 0 0 0; line-height:1.4;">
                        من أي لوح لدى العميل يمكن الوصول المباشر إلى: وصفة الخلطة المستخدمة، مورد الأسمنت، نتائج اختبار كسر المكعبات، معاملات دورة الفاكيوم، وتاريخ ونشر المنشار [Proposed].
                    </p>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Process Map & Gates</span>
                <span>الصفحة 05 من 53</span>
            </footer>
        </section>

        
        <!-- ================= PAGE 6: VISUAL PROCESS FLOWCHART STAGE 1 (RAW MATERIAL RECEIVING & INSPECTION) ================= -->
        <section class="a4-page" id="page-6">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (Flowcharts: Stages 1 to 9)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Visual Gates & Decisions</span>
                </h2>
                <p style="font-size:0.75rem; margin-bottom:0.35rem;">
                    تبين المخططات التالية الخطوات الأساسية، بوابات التحكم والتحقق، ومسارات القبول أو الرفض لكل مرحلة إنتاجية [Proposed]:
                </p>
                <h3 class="subsection-title">1. المرحلة 1: استلام وفحص وتخزين الخامات (Raw Material Receiving & Inspection)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage01_Raw_Material_Receiving_and_Inspection_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 1 – استلام وفحص وتخزين الخامات">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 1 – استلام وفحص وتخزين الخامات (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 1 Flowchart</span>
                <span>الصفحة 06 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 7: VISUAL PROCESS FLOWCHART STAGE 2 (CRUSHING & SIZING) ================= -->
        <section class="a4-page" id="page-7">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Crushing & Sizing</span>
                </h2>
                <h3 class="subsection-title">2. المرحلة 2: تكسير وفرز كسر الرخام (Crushing & Sizing)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage02_Crushing_and_Sizing_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 2 – تكسير وفرز كسر الرخام">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 2 – تكسير وفرز كسر الرخام (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 2 Flowchart</span>
                <span>الصفحة 07 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 8: VISUAL PROCESS FLOWCHART STAGE 3 (AUTOMATIC MIXING) ================= -->
        <section class="a4-page" id="page-8">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Automatic Mixing</span>
                </h2>
                <h3 class="subsection-title">3. المرحلة 3: الخلط الآلي وتجهيز الخلطة (Automatic Mixing)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage03_Automatic_Mixing_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 3 – الخلط الآلي وتجهيز الخلطة">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 3 – الخلط الآلي وتجهيز الخلطة (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 3 Flowchart</span>
                <span>الصفحة 08 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 9: VISUAL PROCESS FLOWCHART STAGE 4 (BLOCK CASTING) ================= -->
        <section class="a4-page" id="page-9">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Block Casting</span>
                </h2>
                <h3 class="subsection-title">4. المرحلة 4: الصب في القالب وتكوين البلوك (Block Casting)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage04_Block_Casting_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 4 – الصب في القالب وتكوين البلوك">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 4 – الصب في القالب وتكوين البلوك (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 4 Flowchart</span>
                <span>الصفحة 09 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 10: VISUAL PROCESS FLOWCHART STAGE 5 (VACUUM DE-AIRING) ================= -->
        <section class="a4-page" id="page-10">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Vacuum De-airing</span>
                </h2>
                <h3 class="subsection-title">5. المرحلة 5: سحب الهواء والكبس تحت الفاكيوم (Vacuum De-airing)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage05_Vacuum_De-airing_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 5 – سحب الهواء والكبس تحت الفاكيوم">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 5 – سحب الهواء والكبس تحت الفاكيوم (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 5 Flowchart</span>
                <span>الصفحة 10 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 11: VISUAL PROCESS FLOWCHART STAGE 6 (DEMOULDING & CURING) ================= -->
        <section class="a4-page" id="page-11">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Demoulding & Curing</span>
                </h2>
                <h3 class="subsection-title">6. المرحلة 6: فك القوالب والمعالجة والإنضاج (Demoulding & Curing)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage06_Demoulding_and_Curing_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 6 – فك القوالب والمعالجة والإنضاج">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 6 – فك القوالب والمعالجة والإنضاج (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 6 Flowchart</span>
                <span>الصفحة 11 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 12: VISUAL PROCESS FLOWCHART STAGE 7 (GANG SAW SLABBING) ================= -->
        <section class="a4-page" id="page-12">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Gang Saw Slabbing</span>
                </h2>
                <h3 class="subsection-title">7. المرحلة 7: تقطيع البلوك إلى ألواح باستخدام المناشير (Gang Saw Slabbing)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage07_Gang_Saw_Slabbing_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 7 – تقطيع البلوك إلى ألواح باستخدام المناشير">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 7 – تقطيع البلوك إلى ألواح باستخدام المناشير (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 7 Flowchart</span>
                <span>الصفحة 12 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 13: VISUAL PROCESS FLOWCHART STAGE 8 (GRINDING & POLISHING) ================= -->
        <section class="a4-page" id="page-13">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Grinding & Polishing</span>
                </h2>
                <h3 class="subsection-title">8. المرحلة 8: الجلي والتلميع والمعالجة السطحية (Grinding & Polishing)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage08_Grinding_and_Polishing_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 8 – الجلي والتلميع والمعالجة السطحية">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 8 – الجلي والتلميع والمعالجة السطحية (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 8 Flowchart</span>
                <span>الصفحة 13 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 14: VISUAL PROCESS FLOWCHART STAGE 9 (CUSTOM CUTTING & PACKAGING) ================= -->
        <section class="a4-page" id="page-14">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Process Flowcharts</strong>
                    <span>Section 4: Visual Flowcharts (1 to 9)</span>
                </div>
            </header>

            <main class="page-content">
    
                <h2 class="section-title">
                    <span>المخططات الانسيابية لتدفق العمليات (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Custom Cutting & Packaging</span>
                </h2>
                <h3 class="subsection-title">9. المرحلة 9: القطع والتفصيل والتغليف النهائي (Custom Cutting & Packaging)</h3>
        
                <div class="flowchart-figure-box" style="margin-top:0.25rem;">
                    <img src="flowcharts_png/full_single_images/Stage09_Custom_Cutting_and_Packaging_full.png" class="flowchart-img" style="max-height: 205mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي الكامل للمرحلة 9 – القطع والتفصيل والتغليف النهائي">
                    <div class="flowchart-caption">المخطط الانسيابي الشامل للمرحلة 9 – القطع والتفصيل والتغليف النهائي (Full Process Flow)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Section 4: Stage 9 Flowchart</span>
                <span>الصفحة 14 من 53</span>
            </footer>
        </section>
    
    `;
}
