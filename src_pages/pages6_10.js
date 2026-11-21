// src_pages/pages6_10.js - Pages 7 through 11 of To-Be Document v0.3
// Stages 1 to 5: Dedicated full-page executive layout with prominent Process Flowcharts & Decision Gates.

export function getPages6to10() {
    return `
        <!-- ================= PAGE 7: STAGE 1 (RAW MATERIALS RECEIVING & STORAGE) ================= -->
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
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 1</span>
                            <span>مخطط تدفق عملية الاستلام وبوابة فحص الجودة (Stage 1 Decision Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 1: Receiving QC]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. وصول الشاحنة للبوابة ⬅ التحقق من أمر الشراء المعتمد PO ⬅ الوزن الإجمالي على ميزان البسكول
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. سحب عينة ممثلة من الشحنة ⬅ إجراء التحليل المنخلي لكسر الرخام، واختبار الرطوبة ونقاء الأسمنت
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل نتائج الفحص المخبري مطابقة للمواصفة وشهادة التحليل الفنية؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار القبول والتسكين (Accept & Store)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>توجيه الشاحنة لموقع التفريغ المحدد (تفريغ الأسمنت في أحد الـ 3 سايلوهات المخصصة، أو ساحة الكسر).</li>
                                        <li>وزن ثانٍ للشاحنة فارغة لحساب الوزن الصافي الدقيق.</li>
                                        <li>توليد وطباعة ملصق الدفعة Lot ID وتثبيته على السايلو/الموقع/الجونية.</li>
                                        <li>إصدار إذن استلام مخزني (GRN) وتحديث رصيد المخزن المتاح للصرف فورا في سجل المصنع.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار الرفض والعزل (Reject & Quarantine)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إيقاف عملية التفريغ فورا ومنع اختلاط الشحنة بالخامات القائمة في السايلوهات أو الساحة.</li>
                                        <li>تحرير محضر عدم مطابقة (NCR) موثق بالصور ونسب الانحراف.</li>
                                        <li>إخطار إدارة المشتريات والمورد وإرجاع الشاحنة بكامل حمولتها.</li>
                                        <li>في حالات النزاع: حجز الشحنة في ساحة العزل المعلمة بالأحمر دون أي صرف.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                <span>الصفحة 07 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 8: STAGE 2 (CRUSHING, SCREENING & SIZING - 2 CRUSHERS) ================= -->
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
                    <strong>Stage 2: Crushing & Sizing</strong>
                    <span>Section 6 — Aggregate Preparation (2 Crushers)</span>
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
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 2</span>
                            <span>مخطط تدفق التكسير عبر الـ 2 كسارة وبوابة التحليل المنخلي (Stage 2 Sizing Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 2: Aggregate Sizing - 2 Crushers]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. صرف دفعة كسر الرخام الخام بالوزن الفعلي ⬅ تغذية الـ 2 كسارة بالمصنع (الكسارة الأولى والكسارة الثانية)
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. فرز الحبيبات الناتجة من الـ 2 كسارة عبر شبكة المناخل الاهتزازية متعددة الطبقات (G1, G2, G3, G4, G5)
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل منحنى التدرج الحبيبي ونظافة الحبيبات الناتجة من الـ 2 كسارة مطابقة لمواصفة الخلطة القياسية؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار القبول والتعبئة (Accept & Bag)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>تعبئة كل فئة ناتجة في جونيات منفصلة مكودة بلون وحجم الحبيبة ومصدر الكسارة.</li>
                                        <li>وزن كل جونية بدقة على الميزان الأرضي وطباعة ملصق الدفعة.</li>
                                        <li>نقل الجونيات إلى صوامع/مستودع الخامات نصف المصنعة الجاهزة للخلط.</li>
                                        <li>تسجيل كميات الإنتاج الفعلي ونسبة المردود في سجل تشغيل الـ 2 كسارة.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار إعادة التكسير والضبط (Re-crush & Adjust)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إعادة الحبيبات الخشنة المتجاوزة للمقاس عبر سير الإرجاع للكسارة الثانية (الثانوية) لإعادة التكسير Re-crush.</li>
                                        <li>إيقاف خط التكسير فورا في حال تمزق أو انسداد المناخل الاهتزازية في أي من الكسارتين.</li>
                                        <li>تعديل خلوص فكوك الـ 2 كسارة وسرعة التغذية وضبط زوايا الاهتزاز.</li>
                                        <li>عزل أي دفعة ملوثة بالأتربة وإعادة غسيلها أو غربلتها قبل الإفراج.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                <span>الصفحة 08 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 9: STAGE 3 (AUTOMATIC MIXING & FORMULATION) ================= -->
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
                    <strong>Stage 3: Batch Mixing</strong>
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
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 3</span>
                            <span>مخطط تدفق الخلط الآلي وبوابة فحص القوام واللون (Stage 3 Mixing Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 3: Mix Consistency & Color]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. استدعاء وصفة الخلطة القياسية BOM ⬅ سحب الأسمنت آلياً من الـ 3 سايلوهات ووزن المكونات في ميزان الميكسر
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. خلط جاف (Dry Mix) لمدة دقيقتين ⬅ حقن المياه المعايرة والمواد الكيميائية والصبغات السائلة آلياً
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل قوام الخلطة وتجانس اللون وزمن الدورة الكلي مطابق لمعايير الوصفة؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار القبول وتفريغ الصب (Accept & Discharge)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>تفريغ الخلطة فورا في قمع الصب ونقلها لقالب البلوك المجهز.</li>
                                        <li>توليد كود الدفعة وتسجيل توقيت التفريغ لبدء احتساب المهلة القصوى.</li>
                                        <li>صرف كميات المواد الخام المستهلكة فعليا من رصيد السايلوهات والمخزن في سجل المصنع.</li>
                                        <li>البدء الفوري في تحضير الدفعة الثانية لتفادي تكون فواصل صب باردة.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار رفض الخلطة والإيقاف (Reject & Stop)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>حظر صب الخلطة نهائيا في القالب لمنع تصنيع بلوك معيب عالي التكلفة.</li>
                                        <li>تفريغ الخلطة المعيبة في قوالب صب كتل خرسانية ثانوية أو تخريدها.</li>
                                        <li>تحرير محضر هدر خلطة وفحص حساسات الوزن وتدفق المياه وحاقن الصبغة وخطوط السايلوهات.</li>
                                        <li>إعادة معايرة خلايا الحمل (Load Cells) قبل السماح بإطلاق أي دفعة جديدة.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                <span class="status-tag">Stage 3: Automatic Mixing</span>
                <span>الصفحة 09 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 10: STAGE 4 (BLOCK CASTING & COMPACTION) ================= -->
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
                    <strong>Stage 4: Block Casting</strong>
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
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 4</span>
                            <span>مخطط تدفق صب البلوك وبوابة فحص التوزيع والدمك (Stage 4 Casting Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 4: Mold Filling & Leveling]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. تجهيز القالب، دهان مادة العزل، وتثبيت بطاقة التتبع الرقمية (RFID/باركود) برقم البلوك Block ID
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. صب الدفعة الأولى (5 طن) ثم الاهتزاز الأولي ⬅ صب الدفعة الثانية (5 طن) وتسوية السطح ميكانيكياً
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل اكتمل صب الدفعتين بنجاح دون تأخير زمني وتجانست الخلطة دون فواصل باردة؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار القبول والنقل للفاكيوم (Accept & Move)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>نقل القالب عبر خط السير الرولر الآلي مباشرة لمحطة الفاكيوم.</li>
                                        <li>توثيق رقم القالب ورقم البلوك وتوقيت انتهاء الصب في سجل المصنع.</li>
                                        <li>ربط أرقام دفعات الخامات المستخدمة في الدفعتين برقم البلوك مباشرة.</li>
                                        <li>دخول القالب لغرفة الفاكيوم خلال أقل من 10 دقائق من انتهاء الصب.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار حجز القالب ومعالجة العيوب (Reject & Hold)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا تأخرت الدفعة الثانية > 25 دقيقة: إيقاف الصب فورا لمنع فاصل بارد.</li>
                                        <li>وسم البلوك ببطاقة صفراء (موقوف للجودة - QC Hold) وفتح تقرير NCR.</li>
                                        <li>فحص أسباب تعطل الميكسر أو تأخر الصب وإعادة تقييم جدوى الكبس.</li>
                                        <li>في حال التصلب الجزئي غير المتجانس: تخريد الكتلة وإعادة تدويرها ككسر للـ 2 كسارة.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                <span class="status-tag">Stage 4: Block Casting</span>
                <span>الصفحة 10 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 11: STAGE 5 (VACUUM DE-AIRING & COMPACTION) ================= -->
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
                    <strong>Stage 5: Vacuum De-airing</strong>
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
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 5</span>
                            <span>مخطط تدفق الفاكيوم والكبس وبوابة التحقق من التفريغ (Stage 5 Vacuum Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 5: Vacuum Level & Compaction]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. إدخال القالب لغرفة الفاكيوم ⬅ إحكام إغلاق العوازل المطاطية ⬅ بدء تشغيل مضخات التفريغ
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. تطبيق أطوار سحب الهواء التدريجي المتزامن مع اهتزاز عالي التردد ⬅ تطبيق الكبس الهيدروليكي
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل تم تحقيق مستوى التفريغ المستهدف (100 mbar) وزمن الكبس المحدد في الوصفة؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار القبول والتحرير (Accept & Release)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>كسر التفريغ تدريجيا وفتح الغرفة وسحب القالب على خط السير.</li>
                                        <li>توثيق قيم التفريغ وأطوار الاهتزاز والضغط في بطاقة البلوك وسجل المصنع.</li>
                                        <li>نقل القالب فورا إلى ساحة المعالجة الأولية لتمضية فترة التصلب (24 ساعة).</li>
                                        <li>إفراج القالب للمرحلة التالية في سجل متابعة الإنتاج والتكاليف.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار العطل والإنذار (Alarm & Investigate)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا حدث تسريب تفريغ: إطلاق إنذار فوري ووقف الدورة ومراجعة العوازل.</li>
                                        <li>إذا كان البلوك لا يزال لدنا: تصحيح العازل وإعادة تشغيل دورة الفاكيوم فورا.</li>
                                        <li>إذا تصلب البلوك مع تفريغ ناقص: وسم البلوك بعلامة حمراء (معيب مساميا).</li>
                                        <li>فتح محضر صيانة عاجل لمضخات التفريغ وتحويل البلوك لاختبار كثافة معملي.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                <span class="status-tag">Stage 5: Vacuum De-airing</span>
                <span>الصفحة 11 من 27</span>
            </footer>
        </section>
    `;
}
