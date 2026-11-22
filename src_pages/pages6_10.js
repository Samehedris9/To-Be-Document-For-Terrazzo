// src_pages/pages6_10.js - Stages 1 through 5 of To-Be Document v0.3
// Each stage is structured across 3 dedicated A4 pages:
// Page 1: Trigger & Inputs/Outputs Strip + Flowchart Part 1 (Gate input to decision)
// Page 2: Flowchart Part 2 (Decision to outcomes) + [PFC] Legend
// Page 3: SOP Details Card + KPIs Table

export function getPages6to10() {
    return `

        <!-- ================= PAGE 15: STAGE 1 PART 1 (RAW MATERIAL RECEIVING & INSPECTION) ================= -->
        <section class="a4-page" id="page-15">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 1: Receiving & Sieve QC</strong>
                    <span>Section 5 — Raw Materials Management</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>5. المرحلة 1: استلام وتخزين الخامات (Receiving & Storage)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إغلاق فجوة الوزن ISS-001 والـ 3 سايلوهات</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> وصول شاحنة مورد بأمر شراء PO معتمد</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> كسر رخام، أسمنت (في الـ 3 سايلوهات)، كربونات، صبغات، ريزن</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> خامات مفحوصة ومخزنة برقم دفعة Lot ID بالسايلوهات والساحة</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> أمين المخزن الرئيسي + مسؤول البسكول</div>
                    </div>

                <!-- Process Flowchart Part 1 (Gate input to decision) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage01_Raw_Material_Receiving_and_Inspection_part1.png" class="flowchart-img" style="max-height: 155mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 1 – استلام وفحص وتخزين الخامات (الجزء 1 من 2)">
                    <div class="flowchart-caption">الشكل 1: المخطط الانسيابي للمرحلة 1 – استلام وفحص وتخزين الخامات (الجزء 1 من 2)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 1: Receiving & Sieve QC</span>
                <span>الصفحة 15 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 16: STAGE 1 PART 2 (RAW MATERIAL RECEIVING & INSPECTION CONT.) ================= -->
        <section class="a4-page" id="page-16">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 1: Receiving & Sieve QC (تابع)</strong>
                    <span>Section 5 — Raw Materials Management</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>5. المرحلة 1: استلام وتخزين الخامات (Receiving & Storage) (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">بوابات التحقق ومسارات القبول والرفض</span>
                </h2>

                <!-- Process Flowchart Part 2 (Decision to outcomes) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage01_Raw_Material_Receiving_and_Inspection_part2.png" class="flowchart-img" style="max-height: 185mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 1 – استلام وفحص وتخزين الخامات (الجزء 2 من 2)">
                    <div class="flowchart-caption">الشكل 1: المخطط الانسيابي للمرحلة 1 – استلام وفحص وتخزين الخامات (الجزء 2 من 2)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 1: Receiving & Sieve QC</span>
                <span>الصفحة 16 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 17: STAGE 1 SOP & KPIS (RAW MATERIAL RECEIVING & INSPECTION) ================= -->
        <section class="a4-page" id="page-17">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 1: Receiving & Sieve QC (SOP & KPIs)</strong>
                    <span>Section 5 — Raw Materials Management</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>5. المرحلة 1: استلام وتخزين الخامات (Receiving & Storage)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إجراء التشغيل القياسي ومؤشرات الأداء التشغيلية</span>
                </h2>

                <!-- SOP Details -->
                <div class="sop-card" style="margin-bottom:0.85rem;">
                    <div class="sop-card-header">
                        <div class="sop-title">
                            <span class="badge badge-sop">SOP-RM-01</span>
                            <span>إجراء استلام وفحص وتسكين الخامات وتفريغ الـ 3 سايلوهات [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: أمين المخزن</span>
                            <span>المشاركون: فني المختبر، وزن البسكول، المشتريات</span>
                            <span>نقطة التسجيل: سجل الاستلام المخزني GRN</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>التحقق الصارم من وجود أمر شراء مفتوح (PO) برقم مطابق في سجل المصنع قبل السماح بدخول بوابة المصنع.</li>
                            <li>وزن الشاحنة محملة على ميزان البسكول وإصدار تذكرة وزن أولى موثقة بالوقت والتاريخ ورقم اللوحة.</li>
                            <li>سحب عينة عشوائية ممثلة: 1 كجم لكل شاحنة كسر رخام، وعينة من كل تشغيلة أسمنت مع توثيق رقم دفعة المورد.</li>
                            <li>إجراء اختبار التدرج المنخلي ونسبة الرطوبة، ولا يتم التفريغ إلا بعد توقيع فني المختبر على إذن الفحص.</li>
                            <li>إعادة وزن الشاحنة فارغة، وحساب صافي الوزن الفعلي، وإصدار إذن استلام GRN وتسكين الخامة برقم الدفعة في أحد الـ 3 سايلوهات المعتمدة أو مستودع الخامات.</li>
                        </ol>
                    </div>
                </div>

                <!-- KPIs Table -->
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.8rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">كود المؤشر</th>
                                <th style="width: 32%;">اسم المؤشر وطريقة الحساب</th>
                                <th style="width: 16%;">المستهدف [Target]</th>
                                <th style="width: 14%;">دورية القياس</th>
                                <th style="width: 16%;">المسؤول</th>
                                <th style="width: 12%;">الوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>S1-01</strong></td>
                                <td>دقة وزن استلام الخامات (فرق البسكول عن بوليصة الشحن)</td>
                                <td><strong>فروقات &le; 0.2%</strong></td>
                                <td>لكل شحنة</td>
                                <td>مسؤول البسكول والمخزن</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S1-02</strong></td>
                                <td>نسبة الشحنات المقبولة من أول فحص (First-Time Acceptance Rate)</td>
                                <td><strong>&ge; 98.0%</strong></td>
                                <td>شهرياً</td>
                                <td>مدير الجودة والمشتريات</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S1-03</strong></td>
                                <td>زمن فحص وإفراج شحنة الخامات (QC Turnaround Time)</td>
                                <td><strong>&le; 120 دقيقة</strong></td>
                                <td>أسبوعياً</td>
                                <td>فني مختبر الجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S1-04</strong></td>
                                <td>نسبة الالتزام بأمر الشراء المسبق (PO Compliance Rate)</td>
                                <td><strong>100%</strong></td>
                                <td>شهرياً</td>
                                <td>أمين المخزن الرئيسي</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S1-05</strong></td>
                                <td>دقة مطابقة رصيد المخزن الفعلي للدفاتري والسايلوهات (Inventory Accuracy)</td>
                                <td><strong>&ge; 99.5%</strong></td>
                                <td>شهرياً</td>
                                <td>إدارة المخازن والحسابات</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 1: Receiving & Sieve QC</span>
                <span>الصفحة 17 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 18: STAGE 2 PART 1 (CRUSHING & SIZING) ================= -->
        <section class="a4-page" id="page-18">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 2: Crushing & Sizing (2 Crushers)</strong>
                    <span>Section 6 — Aggregate Preparation</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>6. المرحلة 2: التكسير والتجهيز (Crushing & Sizing) عبر 2 كسارة معتمدة</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">التصنيف الحجمي G1–G5 | 2 كسارة بالمصنع</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> أمر إنتاج تكسير لسد عجز فئات الخلط وتوزيع الأحمال على الـ 2 كسارة</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> كسر رخام خام غير مصنف + كسر معاد تدويره يغذي الـ 2 كسارة بالمصنع</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> كسر مصنف (G1-G5) عبر الـ 2 كسارة وشبكات المناخل بجونيات مكودة وموزونة</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشرف فترة تشغيل الـ 2 كسارة</div>
                    </div>

                <!-- Process Flowchart Part 1 (Gate input to decision) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage02_Crushing_and_Sizing_part1.png" class="flowchart-img" style="max-height: 155mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 2 – تكسير وفرز كسر الرخام (الجزء 1 من 2)">
                    <div class="flowchart-caption">الشكل 2: المخطط الانسيابي للمرحلة 2 – تكسير وفرز كسر الرخام (الجزء 1 من 2)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 2: Crushing & Sizing (2 Crushers)</span>
                <span>الصفحة 18 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 19: STAGE 2 PART 2 (CRUSHING & SIZING CONT.) ================= -->
        <section class="a4-page" id="page-19">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 2: Crushing & Sizing (2 Crushers) (تابع)</strong>
                    <span>Section 6 — Aggregate Preparation</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>6. المرحلة 2: التكسير والتجهيز (Crushing & Sizing) عبر 2 كسارة معتمدة (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">بوابات التحقق ومسارات القبول والرفض</span>
                </h2>

                <!-- Process Flowchart Part 2 (Decision to outcomes) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage02_Crushing_and_Sizing_part2.png" class="flowchart-img" style="max-height: 185mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 2 – تكسير وفرز كسر الرخام (الجزء 2 من 2)">
                    <div class="flowchart-caption">الشكل 2: المخطط الانسيابي للمرحلة 2 – تكسير وفرز كسر الرخام (الجزء 2 من 2)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 2: Crushing & Sizing (2 Crushers)</span>
                <span>الصفحة 19 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 20: STAGE 2 SOP & KPIS (CRUSHING & SIZING) ================= -->
        <section class="a4-page" id="page-20">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 2: Crushing & Sizing (2 Crushers) (SOP & KPIs)</strong>
                    <span>Section 6 — Aggregate Preparation</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>6. المرحلة 2: التكسير والتجهيز (Crushing & Sizing) عبر 2 كسارة معتمدة</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إجراء التشغيل القياسي ومؤشرات الأداء التشغيلية</span>
                </h2>

                <!-- SOP Details -->
                <div class="sop-card" style="margin-bottom:0.85rem;">
                    <div class="sop-card-header">
                        <div class="sop-title">
                            <span class="badge badge-sop">SOP-CR-01</span>
                            <span>إجراء تشغيل الـ 2 كسارة وتصنيف الرخام الحجمي والتنظيف عند تغيير الألوان [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشرف الـ 2 كسارة</span>
                            <span>المشاركون: المشغلون، فني الجودة، المخازن</span>
                            <span>نقطة التسجيل: أمر إنتاج التكسير وسجل تشغيل الـ 2 كسارة</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>إطلاق أمر تشغيل التكسير وتوزيع الأحمال على الـ 2 كسارة بالمصنع وفق خطة الإنتاج الأسبوعية لسد النقص في فئات الكسر (G1–G5).</li>
                            <li>تنظيف الـ 2 كسارة والسيور والمناخل تماما عند التبديل بين ألوان الرخام (أبيض، أسود، بيج) لمنع تلوث الألوان وتوقيع قائمة فحص التغيير.</li>
                            <li>صرف كسر الرخام الخام بالوزن الفعلي بمسح ملصق الدفعة وتغذية الـ 2 كسارة، مع ضبط فتحات التغذية ومناخل الفرز وسرعة التشغيل.</li>
                            <li>سحب عينة دورية (1 كجم لكل دفعة) لإجراء التحليل المنخلي والتأكد من بقاء الحبيبات الناتجة من الكسارتين ضمن الحدود المسموحة.</li>
                            <li>تعبئة كل فئة ناتجة في جونية مستقلة وتثبيت ملصق تفصيلي (الفئة الحجمية، اللون، الوزن الصافي، تاريخ التشغيل، كود الكسارة).</li>
                        </ol>
                    </div>
                </div>

                <!-- KPIs Table -->
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.8rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">كود المؤشر</th>
                                <th style="width: 32%;">اسم المؤشر وطريقة الحساب</th>
                                <th style="width: 16%;">المستهدف [Target]</th>
                                <th style="width: 14%;">دورية القياس</th>
                                <th style="width: 16%;">المسؤول</th>
                                <th style="width: 12%;">الوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>S2-01</strong></td>
                                <td>نسبة مطابقة التدرج المنخلي لكل فئة (Grading Compliance)</td>
                                <td><strong>&ge; 97.0%</strong></td>
                                <td>لكل دفعة تشغيل</td>
                                <td>فني مختبر الجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S2-02</strong></td>
                                <td>نسبة الهالك البودرة غير المرغوبة (Fines Scrap Rate)</td>
                                <td><strong>&le; 4.0%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مشرف الـ 2 كسارة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S2-03</strong></td>
                                <td>معدل إنتاجية الـ 2 كسارة الفعلي (Total Crushers Throughput Ton/Hour)</td>
                                <td><strong>&ge; 12 طن/ساعة</strong></td>
                                <td>يومياً</td>
                                <td>مشرف فترة تشغيل الكسارات</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S2-04</strong></td>
                                <td>زمن تجهيز وتنظيف الـ 2 كسارة عند تغيير اللون (Changeover Time)</td>
                                <td><strong>&le; 45 دقيقة</strong></td>
                                <td>عند كل تغيير</td>
                                <td>فريق تشغيل الـ 2 كسارة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S2-05</strong></td>
                                <td>دقة وزن وتكويد جونيات الكسر الجاهز (Bag Weight Accuracy)</td>
                                <td><strong>&ge; 99.5%</strong></td>
                                <td>شهرياً</td>
                                <td>أمين مخزن نصف المصنع</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 2: Crushing & Sizing (2 Crushers)</span>
                <span>الصفحة 20 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 21: STAGE 3 PART 1 (AUTOMATIC MIXING) ================= -->
        <section class="a4-page" id="page-21">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 3: Mixing & Formulation</strong>
                    <span>Section 7 — Formulation & Preparation</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>7. المرحلة 3: الخلط الآلي (Automatic Mixing)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إغلاق فجوة ميزان الميكسر ISS-002 وسحب الأسمنت من السايلوهات</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> أمر إنتاج بلوك ترازو مجدول بحسب BOM</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> كسر مصنف (من الـ 2 كسارة)، أسمنت (من الـ 3 سايلوهات)، كربونات، مياه، ملدنات، صبغة</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> خلطة ترازو متجانسة جاهزة للصب فورا</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشغل محطة الخلط الآلي</div>
                    </div>

                <!-- Process Flowchart Part 1 (Gate input to decision) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage03_Automatic_Mixing_part1.png" class="flowchart-img" style="max-height: 155mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 3 – الخلط الآلي وتجهيز الخلطة (الجزء 1 من 2)">
                    <div class="flowchart-caption">الشكل 3: المخطط الانسيابي للمرحلة 3 – الخلط الآلي وتجهيز الخلطة (الجزء 1 من 2)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 3: Mixing & Formulation</span>
                <span>الصفحة 21 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 22: STAGE 3 PART 2 (AUTOMATIC MIXING CONT.) ================= -->
        <section class="a4-page" id="page-22">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 3: Mixing & Formulation (تابع)</strong>
                    <span>Section 7 — Formulation & Preparation</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>7. المرحلة 3: الخلط الآلي (Automatic Mixing) (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">بوابات التحقق ومسارات القبول والرفض</span>
                </h2>

                <!-- Process Flowchart Part 2 (Decision to outcomes) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage03_Automatic_Mixing_part2.png" class="flowchart-img" style="max-height: 185mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 3 – الخلط الآلي وتجهيز الخلطة (الجزء 2 من 2)">
                    <div class="flowchart-caption">الشكل 3: المخطط الانسيابي للمرحلة 3 – الخلط الآلي وتجهيز الخلطة (الجزء 2 من 2)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 3: Mixing & Formulation</span>
                <span>الصفحة 22 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 23: STAGE 3 SOP & KPIS (AUTOMATIC MIXING) ================= -->
        <section class="a4-page" id="page-23">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 3: Mixing & Formulation (SOP & KPIs)</strong>
                    <span>Section 7 — Formulation & Preparation</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>7. المرحلة 3: الخلط الآلي (Automatic Mixing)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إجراء التشغيل القياسي ومؤشرات الأداء التشغيلية</span>
                </h2>

                <!-- SOP Details -->
                <div class="sop-card" style="margin-bottom:0.85rem;">
                    <div class="sop-card-header">
                        <div class="sop-title">
                            <span class="badge badge-sop">SOP-MX-01</span>
                            <span>إجراء وزن وتعبئة وخلط خلطة الترازو الآلية والسحب من السايلوهات [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشغل محطة الخلط</span>
                            <span>المشاركون: فني الجودة، مشرف فترة التشغيل</span>
                            <span>نقطة التسجيل: سجل تشغيل الخلاطة وأمر الإنتاج</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>اختيار كود الوصفة المعتمد BOM من لوحة التحكم الآلية، ومطابقة الكميات الإجمالية مع حجم القالب المستهدف.</li>
                            <li>سحب الأسمنت والمواد الرابطة من السايلو المخصص عبر الحلزون الناقل وتأكيد سلامة الوزن الرقمي بدقة &plusmn;0.5%.</li>
                            <li>وزن الحبيبات الصلبة (الناتجة من الـ 2 كسارة) عبر ميزان الميكسر الرقمي والتأكد من مطابقة نسب الوصفة.</li>
                            <li>بدء دورة الخلط الجاف أولا، ثم حقن المياه والمواد الملدنة آليا مع مراقبة مؤشر الحمل والتيار لمحرك الخلاط.</li>
                            <li>التأكد من التوزيع اللوني المتجانس وتناسق الخلطة، وتوثيق وقت انتهاء الخلطة والتفريغ خلال أقل من 15 دقيقة.</li>
                        </ol>
                    </div>
                </div>

                <!-- KPIs Table -->
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.8rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">كود المؤشر</th>
                                <th style="width: 32%;">اسم المؤشر وطريقة الحساب</th>
                                <th style="width: 16%;">المستهدف [Target]</th>
                                <th style="width: 14%;">دورية القياس</th>
                                <th style="width: 16%;">المسؤول</th>
                                <th style="width: 12%;">الوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>S3-01</strong></td>
                                <td>دقة وزن المكونات بميزان الميكسر والسايلو (BOM Weight Variance)</td>
                                <td><strong>انحراف &le; 0.5%</strong></td>
                                <td>لكل دفعة خلط</td>
                                <td>مشغل محطة الخلط</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S3-02</strong></td>
                                <td>نسبة تجانس لون وقوام الخلطة من أول خلطة (Color Uniformity)</td>
                                <td><strong>&ge; 98.5%</strong></td>
                                <td>يومياً</td>
                                <td>فني مختبر الجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S3-03</strong></td>
                                <td>زمن دورة الخلط للدورة الواحدة (Mixing Cycle Time)</td>
                                <td><strong>&le; 8 دقائق</strong></td>
                                <td>لكل دفعة</td>
                                <td>مشرف التشغيل</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S3-04</strong></td>
                                <td>نسبة الفاقد المتبقي بجدران الخلاطة (Mixer Wall Residue Loss)</td>
                                <td><strong>&le; 0.8%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مشغل الخلاطة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S3-05</strong></td>
                                <td>الالتزام بالمهلة القصوى بين الدفعتين للخلطة (Inter-batch Delay)</td>
                                <td><strong>&le; 10 دقائق</strong></td>
                                <td>لكل بلوك</td>
                                <td>مشغل الخلط والصب</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 3: Mixing & Formulation</span>
                <span>الصفحة 23 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 24: STAGE 4 PART 1 (BLOCK CASTING) ================= -->
        <section class="a4-page" id="page-24">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 4: Mould Preparation & Casting</strong>
                    <span>Section 8 — Casting & Pre-Vibration</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>8. المرحلة 4: الصب في القالب (Casting into Mould)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">ميلاد رقم البلوك Block ID</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> جاهزية القالب ووصول خلطة الترازو من الميكسر</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> قالب مدهون بالعازل + خلطة ترازو (دفعتان 5+5 طن)</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> بلوك مصبوب ومدموك أوليا يحمل Block ID</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشرف محطة الصب والقوالب</div>
                    </div>

                <!-- Process Flowchart Part 1 (Gate input to decision) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage04_Block_Casting_part1.png" class="flowchart-img" style="max-height: 155mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 4 – الصب في القالب وتكوين البلوك (الجزء 1 من 2)">
                    <div class="flowchart-caption">الشكل 4: المخطط الانسيابي للمرحلة 4 – الصب في القالب وتكوين البلوك (الجزء 1 من 2)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 4: Mould Preparation & Casting</span>
                <span>الصفحة 24 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 25: STAGE 4 PART 2 (BLOCK CASTING CONT.) ================= -->
        <section class="a4-page" id="page-25">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 4: Mould Preparation & Casting (تابع)</strong>
                    <span>Section 8 — Casting & Pre-Vibration</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>8. المرحلة 4: الصب في القالب (Casting into Mould) (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">بوابات التحقق ومسارات القبول والرفض</span>
                </h2>

                <!-- Process Flowchart Part 2 (Decision to outcomes) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage04_Block_Casting_part2.png" class="flowchart-img" style="max-height: 185mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 4 – الصب في القالب وتكوين البلوك (الجزء 2 من 2)">
                    <div class="flowchart-caption">الشكل 4: المخطط الانسيابي للمرحلة 4 – الصب في القالب وتكوين البلوك (الجزء 2 من 2)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 4: Mould Preparation & Casting</span>
                <span>الصفحة 25 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 26: STAGE 4 SOP & KPIS (BLOCK CASTING) ================= -->
        <section class="a4-page" id="page-26">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 4: Mould Preparation & Casting (SOP & KPIs)</strong>
                    <span>Section 8 — Casting & Pre-Vibration</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>8. المرحلة 4: الصب في القالب (Casting into Mould)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إجراء التشغيل القياسي ومؤشرات الأداء التشغيلية</span>
                </h2>

                <!-- SOP Details -->
                <div class="sop-card" style="margin-bottom:0.85rem;">
                    <div class="sop-card-header">
                        <div class="sop-title">
                            <span class="badge badge-sop">SOP-CS-01</span>
                            <span>إجراء تجهيز القالب، الصب المتوازن، وتوليد بطاقة البلوك [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشرف الصب</span>
                            <span>المشاركون: فني القوالب، مشغل الونش، فني الجودة</span>
                            <span>نقطة التسجيل: بطاقة البلوك وسجل الصب اليومي</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>فحص سلامة القالب ميكانيكيا ونظافته التامة ودهانه بطبقة رقيقة متجانسة من زيت عزل القوالب المعتمد.</li>
                            <li>توليد رقم البلوك المتسلسل Block ID وفق الترميز القياسي وتثبيت بطاقة التتبع المقاومة للحرارة على جدار القالب.</li>
                            <li>صب الدفعة الأولى (5 طن) مع تشغيل هزازات قاعدة القالب لتوزيع الخلطة وملء الزوايا السفلية.</li>
                            <li>صب الدفعة الثانية (5 طن) فورا خلال مهلة لا تتجاوز 10 دقائق لمنع تكون أي خط فاصل بارد (Cold Joint).</li>
                            <li>تسوية السطح العلوي للقالب آليا وتدوين وقت انتهاء الصب تمهيدا لإدخال القالب لمحطة الفاكيوم فورا.</li>
                        </ol>
                    </div>
                </div>

                <!-- KPIs Table -->
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.8rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">كود المؤشر</th>
                                <th style="width: 32%;">اسم المؤشر وطريقة الحساب</th>
                                <th style="width: 16%;">المستهدف [Target]</th>
                                <th style="width: 14%;">دورية القياس</th>
                                <th style="width: 16%;">المسؤول</th>
                                <th style="width: 12%;">الوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>S4-01</strong></td>
                                <td>الالتزام بالمهلة القصوى لصب الدفعتين (Inter-batch Delay)</td>
                                <td><strong>&le; 10 دقائق</strong></td>
                                <td>لكل بلوك</td>
                                <td>مشرف محطة الصب</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S4-02</strong></td>
                                <td>نسبة التزام وزن البلوك بالمستهدف (Block Weight Adherence)</td>
                                <td><strong>&plusmn; 1.0% (10 طن)</strong></td>
                                <td>لكل بلوك</td>
                                <td>مشغل الصب والونش</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S4-03</strong></td>
                                <td>نسبة البلوكات الخالية من الفواصل الباردة (Cold-Joint Free Rate)</td>
                                <td><strong>100%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مدير الجودة والإنتاج</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S4-04</strong></td>
                                <td>نسبة تثبيت بطاقة التتبع Block ID بنجاح (Tagging Adherence)</td>
                                <td><strong>100%</strong></td>
                                <td>يومياً</td>
                                <td>مشرف الصب والمخزن</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S4-05</strong></td>
                                <td>معدل تكرار استخدام القوالب دون تلف (Mould Turnaround Cycles)</td>
                                <td><strong>&ge; 250 دورة</strong></td>
                                <td>شهرياً</td>
                                <td>مسؤول صيانة القوالب</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 4: Mould Preparation & Casting</span>
                <span>الصفحة 26 من 53</span>
            </footer>
        </section>
    
        <!-- ================= PAGE 27: STAGE 5 PART 1 (VACUUM DE-AIRING) ================= -->
        <section class="a4-page" id="page-27">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 5: Vacuum De-airing & Press</strong>
                    <span>Section 9 — Compaction & De-airing</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>9. المرحلة 5: سحب الهواء والكبس (Vacuum De-airing)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">تحقيق كثافة الصخور الطبيعية</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> خروج قالب البلوك المصبوب من محطة الصب</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> قالب بلوك مصبوب + دورة تفريغ هوائي واهتزاز</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> بلوك ترازو عالي الكثافة خالي تماما من الجيوب الهوائية</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشغل محطة الفاكيوم والكبس الميكانيكي</div>
                    </div>

                <!-- Process Flowchart Part 1 (Gate input to decision) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage05_Vacuum_De-airing_part1.png" class="flowchart-img" style="max-height: 155mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 5 – سحب الهواء والكبس تحت الفاكيوم (الجزء 1 من 2)">
                    <div class="flowchart-caption">الشكل 5: المخطط الانسيابي للمرحلة 5 – سحب الهواء والكبس تحت الفاكيوم (الجزء 1 من 2)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 5: Vacuum De-airing & Press</span>
                <span>الصفحة 27 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 28: STAGE 5 PART 2 (VACUUM DE-AIRING CONT.) ================= -->
        <section class="a4-page" id="page-28">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 5: Vacuum De-airing & Press (تابع)</strong>
                    <span>Section 9 — Compaction & De-airing</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>9. المرحلة 5: سحب الهواء والكبس (Vacuum De-airing) (تابع)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">بوابات التحقق ومسارات القبول والرفض</span>
                </h2>

                <!-- Process Flowchart Part 2 (Decision to outcomes) -->
                <div class="flowchart-figure-box">
                    <img src="flowcharts_png/Stage05_Vacuum_De-airing_part2.png" class="flowchart-img" style="max-height: 185mm; width: auto; max-width: 100%;" alt="المخطط الانسيابي للمرحلة 5 – سحب الهواء والكبس تحت الفاكيوم (الجزء 2 من 2)">
                    <div class="flowchart-caption">الشكل 5: المخطط الانسيابي للمرحلة 5 – سحب الهواء والكبس تحت الفاكيوم (الجزء 2 من 2)</div>
                    <div class="flowchart-legend">[PFC] = Pending Factory Confirmation = [TBC] (قيد تأكيد المصنع)</div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 5: Vacuum De-airing & Press</span>
                <span>الصفحة 28 من 53</span>
            </footer>
        </section>

        <!-- ================= PAGE 29: STAGE 5 SOP & KPIS (VACUUM DE-AIRING) ================= -->
        <section class="a4-page" id="page-29">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Stage 5: Vacuum De-airing & Press (SOP & KPIs)</strong>
                    <span>Section 9 — Compaction & De-airing</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>9. المرحلة 5: سحب الهواء والكبس (Vacuum De-airing)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إجراء التشغيل القياسي ومؤشرات الأداء التشغيلية</span>
                </h2>

                <!-- SOP Details -->
                <div class="sop-card" style="margin-bottom:0.85rem;">
                    <div class="sop-card-header">
                        <div class="sop-title">
                            <span class="badge badge-sop">SOP-VC-01</span>
                            <span>إجراء تشغيل غرفة الفاكيوم، مراقبة أطوار الضغط، وفحص العوازل [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشغل الفاكيوم</span>
                            <span>المشاركون: فني الصيانة، مهندس الإنتاج، الجودة</span>
                            <span>نقطة التسجيل: بطاقة البلوك وقراءات لوحة التحكم PLC</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>فحص موانع التسرب المطاطية المحيطة بغرفة الفاكيوم ونظافة مجرى القالب قبل إدخال القالب وإغلاق الغرفة.</li>
                            <li>تشغيل دورة الفاكيوم الآلية وفق المنحنى المبرمج: خفض الضغط إلى 100 mbar مع اهتزاز متزامن لطرد الهواء.</li>
                            <li>تطبيق شوط الكبس الهيدروليكي العلوي لدمك الحبيبات وضمان التلامس الوثيق بين كسر الرخام والخلطة الرابطة.</li>
                            <li>مراقبة ثبات مؤشرات الضغط والتفريغ طوال مدة الدورة (8–12 دقيقة) وتوثيق أي تذبذب غير طبيعي.</li>
                            <li>تحرير الضغط الهيدروليكي والتفريغ تدريجيا، وسحب القالب، وتوقيع مشغل الفاكيوم على بطاقة البلوك.</li>
                        </ol>
                    </div>
                </div>

                <!-- KPIs Table -->
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.8rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">كود المؤشر</th>
                                <th style="width: 32%;">اسم المؤشر وطريقة الحساب</th>
                                <th style="width: 16%;">المستهدف [Target]</th>
                                <th style="width: 14%;">دورية القياس</th>
                                <th style="width: 16%;">المسؤول</th>
                                <th style="width: 12%;">الوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>S5-01</strong></td>
                                <td>تحقيق مستوى التفريغ المستهدف (Vacuum Level Attainment &le; 100 mbar)</td>
                                <td><strong>100% من البلوكات</strong></td>
                                <td>لكل دورة كبس</td>
                                <td>مشغل محطة الفاكيوم</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S5-02</strong></td>
                                <td>كثافة البلوك المكبوس المحققة (Block Density g/cm&sup3;)</td>
                                <td><strong>&ge; 2.45 جم/سم&sup3;</strong></td>
                                <td>عينة أسبوعية</td>
                                <td>فني مختبر الجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S5-03</strong></td>
                                <td>زمن دورة الفاكيوم والكبس الإجمالية (Cycle Time)</td>
                                <td><strong>&le; 12 دقيقة</strong></td>
                                <td>لكل بلوك</td>
                                <td>مشرف التشغيل</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S5-04</strong></td>
                                <td>جاهزية وموثوقية مضخات وعوازل الفاكيوم (Vacuum Uptime)</td>
                                <td><strong>&ge; 98.5%</strong></td>
                                <td>شهرياً</td>
                                <td>مسؤول الصيانة الميكانيكية</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S5-05</strong></td>
                                <td>نسبة البلوكات المعادة أو المتوقفة في الفاكيوم (Vacuum Abort Rate)</td>
                                <td><strong>&le; 0.5%</strong></td>
                                <td>شهرياً</td>
                                <td>مدير الإنتاج والجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 5: Vacuum De-airing & Press</span>
                <span>الصفحة 29 من 53</span>
            </footer>
        </section>
        `;
}
