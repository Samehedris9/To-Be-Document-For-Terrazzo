// build_pages11_15.js - Generates Pages 12 through 18
// Stages 6 to 9 (Pages 12-15) + Supporting Operations (Pages 16-18)
import fs from 'fs';

const content = `// src_pages/pages11_15.js - Pages 12 through 18 of To-Be Document v0.3
// Stages 6 to 9 and Supporting Processes 14.1 to 14.6 with dedicated visual flowcharts and Accept/Reject branches.

export function getPages11to15() {
    return \`
        <!-- ================= PAGE 12: STAGE 6 (BLOCK CURING & MATURATION) ================= -->
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
                    <strong>Stage 6: Curing & Maturation</strong>
                    <span>Section 10 — Controlled Curing</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>10. المرحلة 6: الفك والمعالجة (Demoulding & Curing)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إغلاق فجوة إفراج النشر ISS-005</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> انقضاء 24 ساعة على كبس البلوك بالفاكيوم</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> قالب بلوك متصلب أوليا + برنامج رش مائي</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> بلوك ترازو ناضج بقوة تحمل &ge; 35 MPa جاهز للنشر</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشرف ساحة المعالجة وفني فحص الخرسانة</div>
                    </div>
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 6</span>
                            <span>مخطط تدفق المعالجة وبوابة الإفراج للنشر (Stage 6 Curing Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 6: Strength & Age Maturation]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. فك جوانب القالب بحذر بعد 24 ساعة ⬅ إجراء فحص بصري للزوايا والأسطح ⬅ نقل البلوك لموقع مرقم بالساحة
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. تطبيق برنامج المعالجة الرطبة (الرش المائي الدوري المنتظم مرتين يومياً لمدة لا تقل عن 14 يوماً)
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل أتم البلوك 14 يوماً وحقق اختبار الصلادة المعملي قوة تحمل &ge; 35 MPa؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار القبول والإفراج للنشر (Accept & Slab)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>توقيع مهندس الجودة على تصريح الإفراج للنشر (Slab Release Note).</li>
                                        <li>تحديث حالة البلوك في سجل المصنع من "تحت المعالجة" إلى "جاهز للنشر".</li>
                                        <li>تثبيت ملصق الإفراج الأخضر على البلوك وتوجيهه لخط المناشير BM1–BM4.</li>
                                        <li>ربط البلوك بأمر التشغيل المجدول في خطة النشر الأسبوعية.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار تمديد المعالجة أو الحجز (Extend or Hold)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا كانت الصلادة أقل من 35 MPa: تمديد المعالجة الرطبة 7 أيام إضافية.</li>
                                        <li>حظر نقل البلوك لخط المناشير نهائياً لمنع تكسر الألواح أثناء النشر.</li>
                                        <li>إذا استمر الضعف بعد 28 يوماً: تخفيض تصنيف البلوك لاستخدامات غير إنشائية.</li>
                                        <li>في حال وجود شروخ هيكلية غائرة: تحويل البلوك لمحطة التكسير ككسر معاد تدويره.</li>
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
                            <span class="badge badge-sop">SOP-CU-01</span>
                            <span>إجراء فك القالب، الرش المائي، وفحص صلادة البلوك [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشرف المعالجة</span>
                            <span>المشاركون: فني المختبر، مشغل الونش، مدير الإنتاج</span>
                            <span>نقطة التسجيل: بطاقة البلوك وتصريح إفراج النشر</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>التأكد من مرور 24 ساعة كاملة على الصب قبل فك براغي القالب الهيدروليكية بعناية لمنع تهشم الحواف.</li>
                            <li>نقل البلوك بواسطة ونش الساحة إلى الموقع المخصص والمكود بنظام الإحداثيات (Row / Bay / Tier).</li>
                            <li>تنفيذ جدول الرش المائي اليومي صباحاً ومساءً وتغطية البلوكات بالخيش الرطب للحفاظ على رطوبة التفاعل.</li>
                            <li>في اليوم الرابع عشر: إجراء اختبار الصلادة بالمطرقة الارتدادية (Schmidt Hammer) واختبار عينات الضغط المرافقة.</li>
                            <li>لا يجوز بأي حال من الأحوال رفع البلوك إلى عربة المنشار إلا بموجب إذن إفراج رسمي موقع من مهندس الجودة.</li>
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
                                <td><strong>S6-01</strong></td>
                                <td>الالتزام بفترة المعالجة الدنيا قبل النشر (Curing Days &ge; 14)</td>
                                <td><strong>100% من البلوكات</strong></td>
                                <td>لكل بلوك منشور</td>
                                <td>مدير الجودة والإنتاج</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S6-02</strong></td>
                                <td>مقاومة الضغط المحققة عند الإفراج (Compressive Strength MPa)</td>
                                <td><strong>&ge; 35 ميجاباسكال</strong></td>
                                <td>لكل بلوك</td>
                                <td>فني مختبر الجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S6-03</strong></td>
                                <td>نسبة البلوكات المفرجة خالية من الشروخ (Crack-Free Blocks)</td>
                                <td><strong>&ge; 98.5%</strong></td>
                                <td>شهرياً</td>
                                <td>مشرف ساحة المعالجة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S6-04</strong></td>
                                <td>الالتزام بجدول الرش المائي اليومي (Water Spray Adherence)</td>
                                <td><strong>100%</strong></td>
                                <td>يومياً</td>
                                <td>فريق ساحة المعالجة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S6-05</strong></td>
                                <td>دقة مواقع تخزين البلوكات بالساحة (Yard Location Accuracy)</td>
                                <td><strong>&ge; 99.5%</strong></td>
                                <td>أسبوعياً</td>
                                <td>أمين مخزن البلوكات</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 6: Curing & Maturation</span>
                <span>الصفحة 12 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 13: STAGE 7 (GANG SAW SLABBING BM1-BM4) ================= -->
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
                    <strong>Stage 7: Gang Saw Slabbing</strong>
                    <span>Section 11 — BM1 to BM4 Lines</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>11. المرحلة 7: التقطيع بالمناشير (Gang Saws BM1–BM4)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">ميلاد أكواد الألواح Slab IDs</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> تصريح إفراج البلوك وجدولة المنشار في خطة التشغيل</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> بلوك مفرج عنه + طقم شفرات منشار ماسية + مياه تبريد</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> 38–42 لوح ترازو خام مكودة بـ Slab IDs ومقاسة السمك</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشرف وملاحظ محطة مناشير النشر BM1–BM4</div>
                    </div>
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 7</span>
                            <span>مخطط تدفق نشر البلوكات وبوابة فحص الألواح (Stage 7 Slabbing Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 7: Slab Thickness & Integrity]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. تثبيت البلوك بإحكام على عربة المنشار ⬅ معايرة استواء الشفرات الماسية وتدفق مياه التبريد
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. تشغيل النشر المتعدد بسرعة هبوط مقننة ⬅ سحب الألواح بعد اكتمال النشر وغسيلها من الروبة
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل سمك الألواح مطابق للمواصفة (&plusmn;0.5 mm) ونسبة الهالك أقل من 3.5%؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار ترقيم وتمرير الألواح (Number & Polish)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>طباعة ولصق باركود اللوح الفردي Slab ID المرتبط بالبلوك الأصلي.</li>
                                        <li>تسجيل عدد الألواح التامة المنتجة ومساحتها الإجمالية (م²).</li>
                                        <li>رص الألواح على حوامل A-Frames ونقلها لخط الجلي والمعالجة السطحية.</li>
                                        <li>إغلاق أمر تشغيل المنشار واحتساب ساعات تشغيل الشفرات واستهلاك المياه.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار كسر الألواح والترميم (NCR & Re-crush)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا تجاوزت نسبة الكسر 3.5%: فتح تقرير عدم مطابقة NCR عاجل.</li>
                                        <li>فحص شد الشفرات وسرعة الهبوط ودرجة حرارة مياه التبريد.</li>
                                        <li>الألواح ذات الشروخ السطحية: تحويل لمسار الترميم براتنج الإيبوكسي.</li>
                                        <li>الألواح المكسورة تماماً: نقل لحاوية الهالك لإعادة تدويرها ككسر للمرحلة 2.</li>
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
                            <span class="badge badge-sop">SOP-GS-01</span>
                            <span>إجراء تشغيل المناشير المتعددة BM1–BM4، قياس السمك وترقيم الألواح [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشرف المناشير</span>
                            <span>المشاركون: مشغل المنشار، فني الشفرات، مهندس الجودة</span>
                            <span>نقطة التسجيل: أمر تشغيل المنشار وسجل الألواح المنتجة</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>التأكد من رقم البلوك وتصريح إفراج النشر المرفق وتثبيت البلوك بالجص والإسفين الخشبي على العربة.</li>
                            <li>ضبط المسافات بين الشفرات الماسية طبقا للسمك المطلوب (20 مم أو 30 مم) وضبط شدادات الشفرات الهيدروليكية.</li>
                            <li>تشغيل مضخات مياه التبريد المعالجة بمعدل تدفق كافٍ لمنع سخونة الشفرات وتشوه أسطح الألواح.</li>
                            <li>قياس سمك اللوح عند 5 نقاط مختلفة (الأركان والمركز) بمقياس Vernier Caliper وتوثيق أي انحراف.</li>
                            <li>توليد كود اللوح الرقمي Slab ID (مثال: BLK-24-001-SL-01) وطباعة ملصق الباركود المقاوم للماء فورا.</li>
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
                                <td><strong>S7-01</strong></td>
                                <td>معدل استخراج الألواح من البلوك (Slab Yield / Block)</td>
                                <td><strong>&ge; 38 لوح (سمك 2 سم)</strong></td>
                                <td>لكل بلوك</td>
                                <td>مشرف محطة المناشير</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S7-02</strong></td>
                                <td>نسبة كسر وهالك الألواح أثناء النشر (Slabbing Scrap Rate)</td>
                                <td><strong>&le; 3.5%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مشرف المناشير والجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S7-03</strong></td>
                                <td>دقة وانتظام سمك اللوح المنشور (Thickness Variance)</td>
                                <td><strong>انحراف &le; &plusmn;0.5 مم</strong></td>
                                <td>لكل تشغيلة</td>
                                <td>فني جودة المناشير</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S7-04</strong></td>
                                <td>سرعة هبوط المنشار في البلوك (Downfeed Speed cm/hr)</td>
                                <td><strong>&ge; 18 سم/ساعة</strong></td>
                                <td>يومياً</td>
                                <td>مشغل المنشار والصيانة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S7-05</strong></td>
                                <td>نسبة ترقيم وتكويد الألواح بالباركود (Slab Tagging Rate)</td>
                                <td><strong>100% من الألواح</strong></td>
                                <td>يومياً</td>
                                <td>ملاحظ خط المناشير</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 7: Gang Saw Slabbing</span>
                <span>الصفحة 13 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 14: STAGE 8 (SURFACE GRINDING & POLISHING) ================= -->
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
                    <strong>Stage 8: Grinding & Polishing</strong>
                    <span>Section 12 — Surface Treatment</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>12. المرحلة 8: الجلي والتلميع (Grinding & Polishing)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">المعالجة السطحية وإغلاق المسام</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> وصول الألواح المنشورة من خط المناشير برقم Slab ID</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> لوح ترازو منشور + راتنج إيبوكسي معالج + أحجار تلميع</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> لوح ترازو مصقول عالي اللمعان (GU &ge; 85) ومغلق المسام</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشرف خط الجلي والتلميع الآلي</div>
                    </div>
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 8</span>
                            <span>مخطط تدفق الجلي والتلميع وبوابة فحص اللمعان (Stage 8 Polishing Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 8: Surface Gloss & Porosity]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. تسوية السطح الخشن برؤوس الماس الخشنة ⬅ غسيل وتجفيف حراري للألواح
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. تطبيق طبقة راتنج الإيبوكسي الشفاف لسد المسام الدقيقة ⬅ الصقل النهائي برؤوس التلميع المتدرجة
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل درجة اللمعان (Gloss &ge; 85 GU) والسطح خالي تماماً من المسام والخدوش؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار إفراج النخب الأول (Grade A Release)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>ختم اللوح بختم الجودة الأخضر وتصنيفه رسميا "نخب أول Grade A".</li>
                                        <li>تسجيل قراءة اللمعان في بطاقة اللوح وفي سجل المصنع للتشغيل.</li>
                                        <li>نقل اللوح إما لمستودع الألواح التامة أو لمحطة القص المخصص CNC.</li>
                                        <li>تحديث رصيد الألواح التامة المصقولة الجاهزة للبيع الفوري.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار إعادة التلميع أو التخفيض (Re-polish/Grade B)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا كان اللمعان أقل من 85 GU: إعادة اللوح فورا لدورة تلميع تكميلية واحدة.</li>
                                        <li>في حال بقاء مسام مفتوحة: إعادة معالجة موضعية براتنج الإيبوكسي وتجفيفه.</li>
                                        <li>إذا استمر العيب بعد الإعادة: تخفيض تصنيف اللوح إلى "درجة ثانية Grade B".</li>
                                        <li>فحص تآكل أحجار التلميع وضغط الرؤوس الهيدروليكية ومعدل تدفق المياه.</li>
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
                            <span class="badge badge-sop">SOP-PL-01</span>
                            <span>إجراء المعالجة السطحية بالريزن، الجلي الآلي وقياس اللمعان بمقياس Glossmeter [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشرف خط الجلي</span>
                            <span>المشاركون: مشغل خط التلميع، فني الجودة، الكيميائي</span>
                            <span>نقطة التسجيل: تقرير فحص الجلي اليومي وسجل اللوح</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>فحص جاهزية رؤوس الجلي وتدرج الأحجار (من الحبيبات الخشنة 60 إلى التلميع الفائق 1500) وضغط كل رأس.</li>
                            <li>إجراء الجلي التمهيدي لتسوية السطح، يليه تجفيف اللوح بالأشعة تحت الحمراء لضمان التصاق الريزن.</li>
                            <li>خلط راتنج الإيبوكسي الشفاف مع المصلب بدقة وتوزيعه ميكانيكيا لسد كافة المسام الميكروسكوبية.</li>
                            <li>تمرير اللوح عبر رؤوس التلميع الدقيقة مع تدفق مياه نظيفة خالية من الرواسب لمنع خدش السطح.</li>
                            <li>قياس درجة اللمعان عند 5 نقاط مختلفة بجهاز Glossmeter الإلكتروني وتثبيت ملصق النتيجة على زاوية اللوح.</li>
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
                                <td><strong>S8-01</strong></td>
                                <td>درجة لمعان سطح اللوح المحققة (Surface Gloss Units)</td>
                                <td><strong>&ge; 85 GU (للمع)</strong></td>
                                <td>لكل لوح منتج</td>
                                <td>فني مختبر الجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S8-02</strong></td>
                                <td>نسبة الألواح المقبولة نخب أول من أول دورة (First-Pass Yield)</td>
                                <td><strong>&ge; 94.0%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مشرف خط الجلي</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S8-03</strong></td>
                                <td>معدل استهلاك راتنج الإيبوكسي السطحي (Resin Consumption g/m&sup2;)</td>
                                <td><strong>&le; 120 جم/م&sup2;</strong></td>
                                <td>شهرياً</td>
                                <td>مهندس الإنتاج والتكاليف</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S8-04</strong></td>
                                <td>معدل استهلاك أحجار الجلي والتلميع (Abrasive Life m&sup2;/set)</td>
                                <td><strong>&ge; 450 م&sup2;/طقم</strong></td>
                                <td>شهرياً</td>
                                <td>مشرف الصيانة والتلميع</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S8-05</strong></td>
                                <td>نسبة الألواح المعادة للتلميع الإضافي (Re-polish Rate)</td>
                                <td><strong>&le; 4.0%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مراقب جودة السطح</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 8: Grinding & Polishing</span>
                <span>الصفحة 14 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 15: STAGE 9 (CUSTOM CUTTING & PACKAGING) ================= -->
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
                    <strong>Stage 9: Custom Cutting & Packaging</strong>
                    <span>Section 13 — Finishing & Dispatch</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>13. المرحلة 9: القطع والتفصيل والتغليف (Custom Cutting & Packaging)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">مطابقة مواصفات العميل والمشروعات</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> أمر بيع معتمد أو أمر تشغيل قص نمطي للمخزن</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> لوح ملمع نخب أول + كروكي تنفيذي + مواد تغليف خشبية</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> طرود منتج تام مفحوصة ومغلفة بملصق باركود الطرد الشامل</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مشرف قسم القص CNC ومسؤول التغليف والشحن</div>
                    </div>
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 9</span>
                            <span>مخطط تدفق القص والتغليف وبوابة الفحص النهائي (Stage 9 Finishing Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate 9: Final Article Inspection]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. مراجعة أمر البيع والمخطط التنفيذي ⬅ قص الألواح بمنشار الجسر CNC وشطف الحواف وشطف الزوايا
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. فحص القطعة الأولى (First Article Inspection) ⬅ استكمال التشغيل والتنظيف النهائي للقطع
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل الأبعاد والزوايا القائمة وخلو الحواف من العيوب مطابقة تماماً للمخطط التنفيذي؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار التغليف والتحويل للمنتج التام (Pack & Store)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>رص القطع على منصات خشبية مع فواصل واقية بين الأسطح وتغليفها بالبلاستيك الحراري.</li>
                                        <li>طباعة ملصق الطرد الشامل (كود المشروع، كود اللوح، عدد القطع، الوزن الإجمالي).</li>
                                        <li>نقل الطرود إلى مستودع المنتج التام FG وتسجيلها كجاهزة للتسليم للعميل.</li>
                                        <li>إصدار إذن إضافة مخزنية وإشعار إدارة المبيعات بجاهزية الشحن.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار إعادة التشذيب أو الهدر (Re-trim or Scrap)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا وجد انحراف بالأبعاد > &plusmn;1 مم: دراسة إمكانية إعادة التشذيب لمقاس أصغر نمطي.</li>
                                        <li>إذا كان التلف في شطف الحواف كبيراً: استبعاد القطعة وفتح تقرير هدر تفصيل.</li>
                                        <li>تحويل القطع الهالكة إلى حاوية إعادة التدوير للتكسير واسترداد كسر الرخام.</li>
                                        <li>صرف لوح جديد فورا لاستكمال كمية أمر العميل دون تعطيل موعد التسليم.</li>
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
                            <span class="badge badge-sop">SOP-PK-01</span>
                            <span>إجراء القص بمنشار الجسر CNC، الفحص النهائي، والتغليف والتسليم للمخزن [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مشرف القص والتغليف</span>
                            <span>المشاركون: مشغل CNC، فني الجودة النهائي، أمين مستودع FG</span>
                            <span>نقطة التسجيل: أمر القص ومحضر الفحص وملصق الطرد</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>تحميل ملف القص المبرمج على ماكينة منشار الجسر CNC ومطابقة المقاسات مع أمر العمل المعتمد من العميل.</li>
                            <li>قص وتفصيل القطعة الأولى والتحقق من قياسات الطول والعرض وتعامد الزوايا (Squareness) بدقة &plusmn;1 مم.</li>
                            <li>استكمال قص باقي الدفعة مع تدفق مياه التبريد لمنع تكسر زوايا الرخام أثناء التفصيل.</li>
                            <li>التنظيف والتجفيف وفحص اللمعان السطحي وسلامة الحواف المشطوفة (Chamfering) قبل التغليف.</li>
                            <li>تثبيت القطع على طبالي خشبية معالجة وربطها بأحزمة بلاستيكية وتغليفها بالبلاستيك المطاطي وإلصاق بطاقة الطرد.</li>
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
                                <td><strong>S9-01</strong></td>
                                <td>دقة أبعاد وزوايا القص المخصص (Dimensional Tolerance)</td>
                                <td><strong>انحراف &le; &plusmn;1.0 مم</strong></td>
                                <td>لكل أمر قص</td>
                                <td>مشغل منشار CNC والجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S9-02</strong></td>
                                <td>نسبة الهالك في مرحلة القص والتفصيل (Cutting Scrap Rate)</td>
                                <td><strong>&le; 5.0%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مشرف القص والتفصيل</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S9-03</strong></td>
                                <td>سلامة وجودة التغليف ومنع تلف النقل (Packaging Integrity)</td>
                                <td><strong>&ge; 99.8%</strong></td>
                                <td>شهرياً</td>
                                <td>مسؤول التغليف والشحن</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S9-04</strong></td>
                                <td>الالتزام بمواعيد تسليم المشروعات (On-Time Delivery OTD)</td>
                                <td><strong>&ge; 98.0%</strong></td>
                                <td>شهرياً</td>
                                <td>مدير العمليات وسلاسل الإمداد</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>S9-05</strong></td>
                                <td>دقة جرد مستودع المنتج التام FG (Finished Goods Accuracy)</td>
                                <td><strong>&ge; 99.8%</strong></td>
                                <td>شهرياً</td>
                                <td>أمين مستودع المنتج التام</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Stage 9: Custom Cutting & Packaging</span>
                <span>الصفحة 15 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 16: SUPPORT PROCESSES 14.1 & 14.2 (PLANNING & WAREHOUSE) ================= -->
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
                    <strong>Supporting Processes: Planning & Inventory</strong>
                    <span>Section 14.1 & 14.2 — Operational Enablers</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>14.1 و 14.2: تخطيط الإنتاج وإدارة المخازن (Planning & Warehouse)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">تحقيق التدفق المتوازن ومنع الاختناقات</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> أوامر البيع المعتمدة وتوقعات الطلب الشهرية</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> أرصدة الخامات، طاقات المراكز، خطط الصيانة</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> جدول إنتاج أسبوعي مجدول + أذون صرف وتسليم مخزنية</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مدير تخطيط الإنتاج وأمين المخازن الرئيسي</div>
                    </div>
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 10</span>
                            <span>مخطط تدفق تخطيط الإنتاج وجدولة المخازن (Planning & Dispatch Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate: Material & Capacity Check]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. استلام أوامر البيع ومراجعة المواصفات الفنية ⬅ تشغيل حسابات تخطيط الاحتياجات من الخامات (MRP)
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. التحقق من توافر خامات الخلط والقوالب الشاغرة وطاقات المناشير وخط الجلي
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل الخامات كاملة ومفحوصة والطاقات الإنتاجية متاحة للجدولة دون تعارض؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار إطلاق أوامر التشغيل (Release & Dispatch)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>إصدار أوامر الإنتاج الرسمية في سجل المصنع برقم تسلسلي موحد.</li>
                                        <li>حجز وصرف الخامات المطلوبة من مستودع الخامات فورا برقم الدفعة.</li>
                                        <li>توزيع جدول الصب وجدول النشر وجدول التلميع على مشرفي فترات التشغيل.</li>
                                        <li>متابعة تحقيق مستهدفات الإنتاج اليومية وتحديث لوحة المتابعة التشغيلية.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار العجز وإعادة الجدولة (Shortage & Re-plan)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا كان هناك نقص في الخامات: إصدار طلب شراء عاجل (PR) لإدارة المشتريات.</li>
                                        <li>إعادة ترتيب أولويات أوامر التشغيل حسب تواريخ استحقاق تسليم العملاء.</li>
                                        <li>إخطار إدارة المبيعات فورا بأي تأخير متوقع لتحديث التزامات المشروعات.</li>
                                        <li>حظر إطلاق أمر التشغيل جزئياً إذا كان النقص في أحد المكونات الحرجة (BOM).</li>
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
                            <span class="badge badge-sop">SOP-PP-01 & SOP-WH-01</span>
                            <span>إجراءات تخطيط الإنتاج وإدارة المستودعات وحركات التخزين والصرف [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مدير التخطيط وأمين المخازن</span>
                            <span>المشاركون: مشرفو الإنتاج، المشتريات، المبيعات</span>
                            <span>نقطة التسجيل: جدول الإنتاج الأسبوعي وأذون الصرف المخزني</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>إعداد خطة الإنتاج الرئيسية (Master Production Schedule) أسبوعيا بناء على أولويات أوامر البيع وحالة المخزون.</li>
                            <li>التدقيق الصارم على أرصدة الخامات والمواد نصف المصنعة (جونيات كسر الرخام المفروزة) قبل إطلاق أي أمر خلط.</li>
                            <li>تسجيل حركة صرف المواد الخام لحظياً في نفس فترة التشغيل لمنع أي تراكم أو فروقات جردية بنهاية الشهر.</li>
                            <li>تطبيق نظام التخزين المكود (Bin Locations) لجميع مواقع ساحة البلوكات ومستودع الألواح والمنتج التام.</li>
                            <li>إجراء جرد دوري مستمر (Cycle Counting) شهرياً للتحقق من مطابقة الأرصدة الفعلية للسجلات بنسبة لا تقل عن 99.5%.</li>
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
                                <td><strong>SUP-01</strong></td>
                                <td>نسبة الالتزام بجدول الإنتاج الأسبوعي (Schedule Adherence)</td>
                                <td><strong>&ge; 95.0%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مدير تخطيط الإنتاج</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-02</strong></td>
                                <td>دقة التنبؤ بالاحتياجات من الخامات (MRP Forecasting Accuracy)</td>
                                <td><strong>&ge; 96.0%</strong></td>
                                <td>شهرياً</td>
                                <td>إدارة التخطيط والمشتريات</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-03</strong></td>
                                <td>معدل دوران مخزون الخامات الرئيسية (Raw Material Turnover)</td>
                                <td><strong>&ge; 8 دورات/سنة</strong></td>
                                <td>ربع سنوي</td>
                                <td>مدير المخازن والمالية</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-04</strong></td>
                                <td>نسبة البلوكات الراكدة في الساحة > 60 يوما (Slow-moving Blocks)</td>
                                <td><strong>&le; 3.0%</strong></td>
                                <td>شهرياً</td>
                                <td>مدير التخطيط والمبيعات</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-05</strong></td>
                                <td>زمن تجهيز وصرف طلبيات الشحن للعملاء (Dispatch Cycle Time)</td>
                                <td><strong>&le; 4 ساعات</strong></td>
                                <td>يومياً</td>
                                <td>مسؤول مستودع المنتج التام</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Supporting 14.1 & 14.2: Planning & Warehouse</span>
                <span>الصفحة 16 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 17: SUPPORT PROCESSES 14.3 & 14.4 (QC & MAINTENANCE) ================= -->
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
                    <strong>Supporting Processes: Quality & Maintenance</strong>
                    <span>Section 14.3 & 14.4 — Reliability & Standards</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>14.3 و 14.4: رقابة الجودة والمختبر والصيانة الوقائية (QC & Maintenance)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">إدارة حالات عدم المطابقة والجاهزية الفنية</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> بوابات الفحص المرحلية وخطط الصيانة الوقائية الدورية</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> عينات اختبار، قراءات حساسات، ساعات تشغيل الماكينات</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> تقارير فحص الجودة، أذون إفراج، أوامر صيانة وقائية منجزة</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مدير ضمان الجودة ومدير الصيانة العامة للمصنع</div>
                    </div>
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 11</span>
                            <span>مخطط تدفق ضبط الجودة والـ NCR والصيانة الوقائية (Quality & Reliability Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate: Quality Compliance & Asset Health]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. سحب عينات الفحص المرحلية ومراقبة مؤشرات أداء الماكينات (الحرارة، الاهتزاز، الضغط)
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. إجراء الاختبارات المعملية ومطابقتها مع حدود السيطرة الإحصائية للمواصفات
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-decision">
                            بوابة القرار: هل العينات مطابقة للمواصفة القياسية والمعدات تعمل ضمن الحدود التشغيلية الآمنة؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار الاعتماد والإفراج النظامي (Approve & Pass)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>إصدار شهادة الفحص المخبري واعتماد إفراج الدفعة للمرحلة التالية.</li>
                                        <li>توثيق نتائج الاختبارات وربطها برقم الدفعة في سجل الجودة بالمصنع.</li>
                                        <li>إغلاق أوامر الصيانة الوقائية المنجزة بنجاح وتحديث تاريخ الصيانة القادم.</li>
                                        <li>استمرار تشغيل خطوط الإنتاج بكفاءة واستقرار تشغيلي كامل.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار عدم المطابقة والإصلاح العاجل (NCR & Corrective Action)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>فتح محضر عدم مطابقة (NCR) فوري وتصنيف شدة العيب (حرج / رئيسي / ثانوي).</li>
                                        <li>عزل الدفعة المعيبة ماديا في منطقة الحجر بوضع بطاقة صفراء/حمراء.</li>
                                        <li>تحليل السبب الجذري (Root Cause Analysis - 5 Whys) مع فريق التشغيل.</li>
                                        <li>إصدار أمر صيانة طارئ إذا كان الانحراف ناتجا عن عطل أو خلل ميكانيكي بالماكينة.</li>
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
                            <span class="badge badge-sop">SOP-QC-01 & SOP-MT-01</span>
                            <span>إجراءات إدارة الجودة الشاملة، معالجة الـ NCR والصيانة الوقائية للقوالب والمعدات [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مديرا الجودة والصيانة</span>
                            <span>المشاركون: فنيو المختبر، مهندسو الصيانة الميكانيكية والكهربائية</span>
                            <span>نقطة التسجيل: سجل الـ NCR وسجل الصيانة الوقائية المجدولة</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>تطبيق خطة سحب العينات الصارمة عند كافة بوابات الجودة التسع دون أي استثناء، والالتزام بحدود التسامح.</li>
                            <li>أي انحراف عن المواصفة يستوجب فتح تقرير عدم مطابقة NCR خلال ساعتين كحد أقصى، ولا يغلق إلا باعتماد مدير الجودة.</li>
                            <li>تنفيذ الصيانة الوقائية لجميع المعدات الرئيسية (الـ 2 كسارة، الميكسر، الـ 3 سايلوهات، الفاكيوم، المناشير، الجلي) وفق ساعات التشغيل.</li>
                            <li>فحص سلامة واستواء قوالب الصب بعد كل 10 دورات تشغيل وتصحيح أي انحناء أو اعوجاج في الجدران والقواعد.</li>
                            <li>الاحتفاظ بمخزون أمان لقطع الغيار الحرجة (شفرات المناشير، أحجار الجلي، عوازل الفاكيوم، خلايا الحمل) لمنع توقف الخطوط.</li>
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
                                <td><strong>SUP-06</strong></td>
                                <td>معدل حالات عدم المطابقة المفتوحة (Open NCR Closure Rate)</td>
                                <td><strong>إغلاق &le; 5 أيام عمل</strong></td>
                                <td>شهرياً</td>
                                <td>مدير ضمان الجودة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-07</strong></td>
                                <td>نسبة إنجاز خطة الصيانة الوقائية (PM Compliance Rate)</td>
                                <td><strong>&ge; 95.0%</strong></td>
                                <td>شهرياً</td>
                                <td>مدير الصيانة العامة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-08</strong></td>
                                <td>معدل التوقفات غير المخططة للمعدات (Unplanned Downtime Rate)</td>
                                <td><strong>&le; 2.5% من الوقت المتاح</strong></td>
                                <td>شهرياً</td>
                                <td>مدير الصيانة والإنتاج</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-09</strong></td>
                                <td>المتوسط الزمني بين الأعطال (Mean Time Between Failures MTBF)</td>
                                <td><strong>&ge; 180 ساعة تشغيل</strong></td>
                                <td>ربع سنوي</td>
                                <td>فريق الهندسة والصيانة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-10</strong></td>
                                <td>نسبة الألواح المعتمدة من أول فحص دون إعادة جلي (First-Time Pass)</td>
                                <td><strong>&ge; 96.0%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مدير الجودة والإنتاج</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Supporting 14.3 & 14.4: QC & Maintenance</span>
                <span>الصفحة 17 من 27</span>
            </footer>
        </section>

        <!-- ================= PAGE 18: SUPPORT PROCESSES 14.5 & 14.6 (SCRAP & CALIBRATION) ================= -->
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
                    <strong>Supporting Processes: Scrap & Calibration</strong>
                    <span>Section 14.5 & 14.6 — Sustainability & Accuracy</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>14.5 و 14.6: إدارة الهالك والتدوير ومعايرة الموازين (Scrap & Calibration)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">الاقتصاد الدائري وضمان الدقة القياسية</span>
                </h2>

                <div class="callout-box info" style="margin:0 0 0.85rem 0; padding:0.65rem 1rem;">
                    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; font-size:0.82rem;">
                        <div><strong style="color:var(--primary); display:block;">المُطلق (Trigger):</strong> تجميع هالك النشر والقص والجدول الدوري لمعايرة الموازين</div>
                        <div><strong style="color:var(--primary); display:block;">المدخلات (Inputs):</strong> كسر ألواح وهوالك تقطيع + أوزان معيارية معتمدة</div>
                        <div><strong style="color:var(--primary); display:block;">المخرجات (Outputs):</strong> كسر رخام معاد تدويره + شهادات معايرة سارية وموازين دقيقة</div>
                        <div><strong style="color:var(--primary); display:block;">المالك (Owner):</strong> مسؤول إعادة التدوير ومهندس المعايرة وأجهزة القياس</div>
                    </div>
                </div>

                <!-- Process Flowchart with Accept/Reject -->
                <div class="process-flowchart-box">
                    <div class="pflow-header">
                        <div class="pflow-title">
                            <span class="badge badge-sop">Flowchart 12</span>
                            <span>مخطط تدفق فرز الهالك ومعايرة الموازين (Recycling & Calibration Flow)</span>
                        </div>
                        <span class="badge badge-proposed">[Gate: Purity & Weighing Accuracy]</span>
                    </div>

                    <div class="pflow-diagram">
                        <div class="pflow-step">
                            1. تجميع هالك كسر الألواح وفرزه حسب اللون ⬅ وفحص دقة الموازين بالأوزان المعيارية المعتمدة
                        </div>
                        <div class="pflow-arrow">▼</div>
                        <div class="pflow-step">
                            2. فحص نقاء الهالك من الشوائب ومقارنة قراءات الموازين مع حدود الخطأ المسموح القانونية
                        </div>
                        <div class="pflow-decision">
                            بوابة القرار: هل الهالك نقي وقابل لإعادة التكسير؟ وهل الموازين تعمل ضمن دقة &plusmn;0.1%؟
                        </div>
                        <div class="pflow-branches">
                            <div class="pflow-branch-accept">
                                <div class="pflow-branch-accept-title">
                                    <span>✔ مسار التدوير واعتماد الميزان (Recycle & Certify)</span>
                                </div>
                                <div class="pflow-branch-accept-desc">
                                    <ul>
                                        <li>تغذية الهالك النقي لـ الـ 2 كسارة بالمرحلة 2 كمدخل خام نصف مصنع مجاني.</li>
                                        <li>احتساب قيمة التوفير المالي واسترداد التكلفة في سجل المصنع المحاسبي.</li>
                                        <li>تثبيت ملصق المعايرة الأخضر الساري على شاشات الموازين المعتمدة.</li>
                                        <li>السماح باستخدام الموازين في وزن الخامات وتذاكر البسكول وأوامر الصب.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pflow-branch-reject">
                                <div class="pflow-branch-reject-title">
                                    <span>✖ مسار الاستبعاد والتوقف والمعايرة (Scrap & Re-calibrate)</span>
                                </div>
                                <div class="pflow-branch-reject-desc">
                                    <ul>
                                        <li>إذا كان الهالك ملوثا بالزيوت أو الأتربة: استبعاده تماما والتخلص منه بيئيا.</li>
                                        <li>حظر إدخال الهالك الملوث للـ 2 كسارة نهائياً لمنع إفساد دفعات الخلط.</li>
                                        <li>إذا تجاوز خطأ الميزان 0.1%: إيقاف الميزان ووضع علامة "خارج الخدمة" فورا.</li>
                                        <li>إعادة ضبط خلايا الحمل (Load Cells) واستدعاء جهة المعايرة المعتمدة.</li>
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
                            <span class="badge badge-sop">SOP-SC-01 & SOP-CA-01</span>
                            <span>إجراءات فرز وتدوير كسر الرخام، والمعايرة الدورية لكافة الموازين بالمصنع [Proposed]</span>
                        </div>
                        <div class="sop-meta-pills">
                            <span>المالك: مسؤول التدوير ومهندس المعايرة</span>
                            <span>المشاركون: عمال الساحة، فني الأجهزة الدقيقة، محاسب التكاليف</span>
                            <span>نقطة التسجيل: سجل التدوير اليومي وسجل شهادات معايرة الموازين</span>
                        </div>
                    </div>
                    <div class="sop-body">
                        <ol>
                            <li>فرز كسر الرخام الناتج من المناشير والقص حسب اللون وخلوه التام من أي مخلفات خرسانية أو أتربة أو مواد لاصقة.</li>
                            <li>وزن كميات الهالك المعاد تدويره وإصدار إذن إضافة خامات نصف مصنعة لخط التكسير (الـ 2 كسارة بالمرحلة 2).</li>
                            <li>معايرة ميزان البسكول أسبوعيا بالأوزان المعيارية المعتمدة (10 أطنان) وتوثيق أي انحراف في سجل المعايرة.</li>
                            <li>معايرة موازين محطة الخلط والميكسر والـ 3 سايلوهات شهريا للتأكد من دقة وزن الأسمنت وكربونات الكالسيوم والحبيبات.</li>
                            <li>المعايرة السنوية الإلزامية من قبل هيئة المواصفات والمقاييس المعتمدة وإصدار شهادات المعايرة الرسمية.</li>
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
                                <td><strong>SUP-11</strong></td>
                                <td>نسبة كسر الرخام المسترد والمعاد تدويره (Marble Scrap Recovery)</td>
                                <td><strong>&ge; 85.0% من الهالك</strong></td>
                                <td>شهرياً</td>
                                <td>مسؤول التدوير والإنتاج</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-12</strong></td>
                                <td>الالتزام بجدول معايرة الموازين الدوري (Calibration Adherence)</td>
                                <td><strong>100%</strong></td>
                                <td>شهرياً</td>
                                <td>مهندس الأجهزة الدقيقة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-13</strong></td>
                                <td>دقة ميزان البسكول والموازين الأرضية (Weighing Precision)</td>
                                <td><strong>خطأ &le; &plusmn;0.1%</strong></td>
                                <td>أسبوعياً</td>
                                <td>مسؤول البسكول والمعايرة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-14</strong></td>
                                <td>قيمة الوفر المالي من إعادة التدوير (Financial Savings from Scrap)</td>
                                <td><strong>&ge; 15,000 د.إ/شهرياً</strong></td>
                                <td>شهرياً</td>
                                <td>محاسب التكاليف والإنتاج</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td><strong>SUP-15</strong></td>
                                <td>نسبة الموازين المعتمدة بملصق ساري المفعول (Valid Calibration Tag)</td>
                                <td><strong>100%</strong></td>
                                <td>يومياً</td>
                                <td>مدير الجودة والسلامة</td>
                                <td><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Supporting 14.5 & 14.6: Scrap & Calibration</span>
                <span>الصفحة 18 من 27</span>
            </footer>
        </section>
    \`;
}
`;

fs.writeFileSync('./src_pages/pages11_15.js', content, 'utf-8');
console.log("Successfully written src_pages/pages11_15.js with Stages 6 to 9 and Supporting 14.1 to 14.6!");
