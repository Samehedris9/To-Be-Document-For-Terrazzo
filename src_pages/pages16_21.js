// src_pages/pages16_21.js - Pages 19 through 27 of To-Be Document v0.3
// Metrics, Traceability, Risks, Roadmap, Sign-off & Complete Appendices A, B, C.

export function getPages16to21() {
    return `
<!-- ================= PAGE 45: PLANT KPIs (F-SERIES) & RECORDS DESTINY ================= -->
        <section class="a4-page" id="page-45">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (تيرازو)
                        </strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">(To-Be Document) —
                            إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Plant KPIs & Records Destiny</strong>
                    <span>Sections 15 & 16</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>15. مؤشرات المصنع الرئيسية (F-Series) وتوحيد المقاييس</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Unified Metrics
                        Strategy</span>
                </h2>
                <div class="callout-box info" style="margin-bottom:0.4rem; padding:0.4rem 0.65rem;">
                    <p style="font-size:0.72rem; margin:0; line-height:1.4;">
                        المجموعة الرئيسية الوحيدة لمؤشرات المصنع هي <strong>F-01 إلى F-15</strong> (الملحق ب). المجموعة
                        K1–K10 المعروضة في v0.2 كانت مكررة وقد أُلغيت رسميا [Proposed]. الجدول أدناه يبين المقابل الصريح
                        لكل منها لضمان مصدر موحد للحقيقة:
                    </p>
                </div>

                <div class="data-table-wrapper" style="margin-bottom:0.5rem;">
                    <table class="data-table" style="font-size:0.67rem;">
                        <thead>
                            <tr>
                                <th style="width: 15%;">الكود في v0.2</th>
                                <th style="width: 35%;">اسم المؤشر المكرر</th>
                                <th style="width: 25%;">المقابل في المجموعة الموحدة</th>
                                <th style="width: 25%;">موقع العرض المعتمد</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>K1</td>
                                <td>العائد الكلي من البلوك للمنتج التام</td>
                                <td><strong>F-02</strong></td>
                                <td>لوحة الإدارة العليا DB-00</td>
                            </tr>
                            <tr>
                                <td>K2</td>
                                <td>تكلفة المتر المربع التام</td>
                                <td><strong>F-09</strong></td>
                                <td>لوحة الإدارة العليا DB-00 والمالية</td>
                            </tr>
                            <tr>
                                <td>K3</td>
                                <td>OEE المرجح للمصنع</td>
                                <td><strong>F-08</strong></td>
                                <td>لوحة الإنتاج DB-01 والمناشير</td>
                            </tr>
                            <tr>
                                <td>K4</td>
                                <td>التسليم في الموعد OTIF</td>
                                <td><strong>F-05</strong></td>
                                <td>لوحة الإدارة العليا DB-00 و SCM</td>
                            </tr>
                            <tr>
                                <td>K5</td>
                                <td>الالتزام بخطة الإنتاج</td>
                                <td><strong>F-07</strong></td>
                                <td>لوحة التخطيط DB-02</td>
                            </tr>
                            <tr>
                                <td>K6</td>
                                <td>تكلفة عدم الجودة CoPQ</td>
                                <td><strong>F-10</strong></td>
                                <td>لوحة الجودة DB-05</td>
                            </tr>
                            <tr>
                                <td>K7</td>
                                <td>دقة مخزون الخامات</td>
                                <td><strong>S1-04</strong></td>
                                <td>لوحة المخازن DB-04</td>
                            </tr>
                            <tr>
                                <td>K8</td>
                                <td>انحراف استهلاك الخامات</td>
                                <td><strong>S3-02 و S3-03</strong></td>
                                <td>أوامر الإنتاج ولوحة الميكسر</td>
                            </tr>
                            <tr>
                                <td>K9</td>
                                <td>أيام المخزون تحت التشغيل WIP</td>
                                <td><strong>F-12</strong></td>
                                <td>لوحة الإدارة العليا DB-00 والمالية</td>
                            </tr>
                            <tr>
                                <td>K10</td>
                                <td>نسبة استرجاع وتدوير المياه</td>
                                <td><strong>WT-01</strong></td>
                                <td>لوحة محطة المياه DB-07</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="section-title">
                    <span>16. السجلات والنماذج الحالية: مصيرها في الوضع المستهدف</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">25 Form Fate Matrix</span>
                </h2>
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.66rem;">
                        <thead>
                            <tr>
                                <th style="width: 5%;">#</th>
                                <th style="width: 26%;">المستند / السجل في As-Is</th>
                                <th style="width: 14%;">المصير</th>
                                <th style="width: 43%;">الوضع المستهدف ومعاملته</th>
                                <th style="width: 12%; text-align:center;">الوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>طلب شراء PR</td>
                                <td>محفوظ</td>
                                <td>بنفس الحقول، مع اعتماد متدرج حسب القيمة المالية</td>
                                <td style="text-align:center;"><span class="badge badge-as-is">[As-Is]</span></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>طلب عرض أسعار RFQ</td>
                                <td>محفوظ</td>
                                <td>مقارنة 3 موردين على الأقل وجدول مقارنة فنية ومالية</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>أمر شراء للمورد PO</td>
                                <td>محفوظ</td>
                                <td>اعتماد 4 مستويات حسب القيمة وحدودها [TBC]</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[TBC]</span></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>إذن استلام GRN وتذكرة بسكول</td>
                                <td>محفوظ ومدموج</td>
                                <td>تذكرة الوزن الأول والثاني تدمج ضمن إذن الاستلام</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>تقرير فحص وارد الخامات</td>
                                <td>محفوظ</td>
                                <td>توحيد الحالات: مقبول، مرفوض، إعادة تشغيل، موقوف</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>تقرير فحص أثناء التشغيل</td>
                                <td>محفوظ</td>
                                <td>يدمج في سجل الجودة الموحد للدفعة والبلوك</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>محضر فحص واستلام (نموذج 202600598)</td>
                                <td>محفوظ</td>
                                <td>بنفس النموذج المعتمد في الوضع الحالي</td>
                                <td style="text-align:center;"><span class="badge badge-as-is">[As-Is]</span></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>تقرير حصر الإنتاج اليومي</td>
                                <td>محفوظ ومدموج</td>
                                <td>يدمج في تقرير فترة التشغيل وسجل المرحلة</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Cement Analysis.xlsx</td>
                                <td>محفوظ</td>
                                <td>بنفس الحقول (تاريخ، مورد، Blaine، قوام، شك، Slump)</td>
                                <td style="text-align:center;"><span class="badge badge-as-is">[As-Is]</span></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Sieve Analysis Marble</td>
                                <td>محفوظ</td>
                                <td>بنفس الحقول؛ شبكة المناخل [TBC] (السؤال OQ-14)</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[TBC]</span></td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Sieve Analysis Raw Materials</td>
                                <td>محفوظ</td>
                                <td>بنفس الحقول مع مراجعة تكرار التسمية مع سجل 10</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[TBC]</span></td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Block LAST UPDATE-4.xlsx</td>
                                <td>يُستبدل</td>
                                <td>يستبدل بسجل خلطة وسجل بلوك بعد التشغيل الموازي</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Vacuum Parameter-1.xlsx</td>
                                <td>محفوظ ومدموج</td>
                                <td>يتحول لسجل دورة فاكيوم لكل بلوك بنفس المعاملات</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Cutting block-1.xlsx</td>
                                <td>يُستبدل</td>
                                <td>يستبدل بأمر تقطيع وسجل ألواح لكل بلوك بعد الموازي</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Gangsaw M2-2.xlsx</td>
                                <td>يُدمج</td>
                                <td>يدمج في سجل المنشار اليومي وسجل الطاقة</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Block Status بملف التقطيع</td>
                                <td>يُدمج</td>
                                <td>يصبح حالة البلوك الرسمية في سجل البلوك</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>ملفات أرصدة المخازن Excel</td>
                                <td>يُستبدل</td>
                                <td>يستبدل بسجل أرصدة لحظي لكل موقع ودورة جرد دوري</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>طلب رصف مواد خام (طلب صرف)</td>
                                <td>محفوظ ومعدل</td>
                                <td>يصرف بالوزن الفعلي ويسجل بنفس فترة التشغيل فورا</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>أمر الشغل (Job Order)</td>
                                <td>محفوظ</td>
                                <td>أمر الإنتاج الموحد لكل مرحلة إنتاجية</td>
                                <td style="text-align:center;"><span class="badge badge-as-is">[As-Is]</span></td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>طلب وأمر عمل الصيانة</td>
                                <td>محفوظ</td>
                                <td>بنفس الحقول مع إلزامية كود سبب العطل والتوقف</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>بوليصة الشحن وقائمة Packing List</td>
                                <td>محفوظ</td>
                                <td>يرفق رقم الحاوية والقفل بسجل الاستلام المخزني</td>
                                <td style="text-align:center;"><span class="badge badge-as-is">[As-Is]</span></td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td>Quality Department File Share</td>
                                <td>[TBC]</td>
                                <td>يحدد موقع الأرشيف الرقمي الموحد (OQ-20)</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[TBC]</span></td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>سجل تغيير الـ 2 كسارة (Changeover)</td>
                                <td>جديد</td>
                                <td>قائمة فحص تغيير اللون وتنظيف الـ 2 كسارة</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>سجل حركة مواقع ساحة المعالجة</td>
                                <td>جديد</td>
                                <td>خريطة مواقع الساحة وتتبع البلوكات وحركتها</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td>سجل الجرد الدوري بالعينة Cycle</td>
                                <td>جديد</td>
                                <td>نموذج جرد دوري بالعينات لضمان دقة الأرصدة ≥98%</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>(To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Plant KPIs & Records Fate</span>
                <span>الصفحة 45 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 46: GAPS RESOLUTION & TRACEABILITY MATRIX ================= -->
        <section class="a4-page" id="page-46">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (تيرازو)
                        </strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">(To-Be Document) —
                            إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Gaps & Traceability Matrix</strong>
                    <span>Sections 17 & 18</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>17. معالجة المشكلات والمخاطر المرصودة في As-Is</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Closing Gaps &
                        Issues</span>
                </h2>

                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.68rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">الكود</th>
                                <th style="width: 25%;">المشكلة / الخطر في As-Is</th>
                                <th style="width: 37%;">المعالجة المستهدفة في To-Be</th>
                                <th style="width: 14%;">المرجع</th>
                                <th style="width: 14%; text-align:center;">مؤشر الإغلاق</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="badge badge-risk">ISS-001</span></td>
                                <td>وزن الجونيات تقديري [TBC]</td>
                                <td>ميزان أرضي + وزن كل جونية وملصق تعريف بالصافي</td>
                                <td>SOP-RM-01</td>
                                <td style="text-align:center; font-weight:700; color:#059669;">دقة مخزون ≥ 98%</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-risk">ISS-002</span></td>
                                <td>الميزان الوحيد عند الميكسر</td>
                                <td>مطابقة ثلاثية: نقل موزون + استهلاك ميزان + مرتجع موزون</td>
                                <td>SOP-WH-01</td>
                                <td style="text-align:center; font-weight:700; color:#059669;">تسويات جرد ≤ 0.5%</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-risk">RSK-001</span></td>
                                <td>تلف الخلطة بين الدفعتين</td>
                                <td>قائمة جاهزية ملزمة قبل الخلط + مهلة قصوى + قالب طوارئ</td>
                                <td>SOP-MX-01</td>
                                <td style="text-align:center; font-weight:700; color:#059669;">خلطات تالفة ≤ 0.5%</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-risk">RSK-002</span></td>
                                <td>إعادة استخدام الجونيات عشوائيا</td>
                                <td>جونية مكودة بعداد استخدام وفحص بصري وتخصيص لوني</td>
                                <td>SOP-RM-01</td>
                                <td style="text-align:center; font-weight:700; color:#059669;">تلوث لوني = صفر</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-as-is">فجوة</span></td>
                                <td>تأخير ترحيل الصرف لليوم التالي</td>
                                <td>ترحيل آلي من ميزان الماكينة في نفس فترة التشغيل</td>
                                <td>SOP-WH-01</td>
                                <td style="text-align:center; font-weight:700; color:#059669;">زمن الترحيل ≤ الفترة</td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-as-is">فجوة</span></td>
                                <td>غياب التكلفة المحاسبية للكيماويات</td>
                                <td>محطة المياه مركز تكلفة خدمي بأساس توزيع معتمد على م²</td>
                                <td>SOP-WT-01</td>
                                <td style="text-align:center; font-weight:700; color:#059669;">تكاليف غير موزعة ≤ 2%
                                </td>
                            </tr>
                            <tr>
                                <td><span class="badge badge-as-is">فجوة</span></td>
                                <td>غياب الربط بين المنصرف والفعلي</td>
                                <td>استهلاك فعلي على أمر الإنتاج + معايير + تقرير انحرافات</td>
                                <td>SOP-CA-01</td>
                                <td style="text-align:center; font-weight:700; color:#059669;">انحراف معياري ±5%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="section-title">
                    <span>18. مصفوفة التتبع: من الوضع الحالي إلى المستهدف (T1 إلى T20)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">As-Is to To-Be
                        Traceability</span>
                </h2>
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.65rem;">
                        <thead>
                            <tr>
                                <th style="width: 4%;">#</th>
                                <th style="width: 14%;">المجال</th>
                                <th style="width: 25%;">ملاحظة الوضع الحالي (As-Is)</th>
                                <th style="width: 32%;">التغيير في الوضع المستهدف (To-Be)</th>
                                <th style="width: 15%;">الفائدة المتوقعة</th>
                                <th style="width: 10%; text-align:center;">الوسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>T1</td>
                                <td>الاستلام والمخازن</td>
                                <td>الجونيات توزن بالتقدير ومعضلة الموازين (ص2)</td>
                                <td>وزن كل جونية بميزان أرضي وتسجيل الوزن على ملصق</td>
                                <td>دقة الأرصدة والتكاليف</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[As-Is] [TBC]</span></td>
                            </tr>
                            <tr>
                                <td>T2</td>
                                <td>المخازن</td>
                                <td>الصرف يخصم بعد الاستهلاك بيوم (ص12)</td>
                                <td>تسجيل الاستهلاك بالوزن الفعلي بنفس فترة التشغيل</td>
                                <td>رصيد صحيح لحظيا</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T3</td>
                                <td>المخازن</td>
                                <td>الوزن عند الميكسر فقط (ص12)</td>
                                <td>نقل موزون لموقع التغذية ومرتجع موزون (مطابقة ثلاثية)</td>
                                <td>تسويات جرد ≤ 0.5%</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T4</td>
                                <td>التكسير</td>
                                <td>2 كسارات مخصصة للاستخدام (محسوم بقرار الإدارة)</td>
                                <td>مسار تكسير مخصص لعائلة لون معتمد على الـ 2 كسارة بالمصنع</td>
                                <td>منع التلوث اللوني واستقرار تدرج الحبيبات</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[محسوم: 2 كسارة]</span></td>
                            </tr>
                            <tr>
                                <td>T5</td>
                                <td>الخلط</td>
                                <td>الوزن الآلي للميكسر 5 طن (ص9) بلا تسامح</td>
                                <td>تحديد حدود تسامح والدفعة خارجها توقف فورا</td>
                                <td>دقة الخلطة ومنع الهدر</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[As-Is] [TBC]</span></td>
                            </tr>
                            <tr>
                                <td>T6</td>
                                <td>الصب</td>
                                <td>الدفعتان 5+5 طن ولا مخزون وسيط (ص9)</td>
                                <td>مهلة قصوى بين الدفعتين وقائمة جاهزية وطوارئ</td>
                                <td>منع تصلب وهدر الخلطة</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[As-Is] [TBC]</span></td>
                            </tr>
                            <tr>
                                <td>T7</td>
                                <td>الفاكيوم</td>
                                <td>معاملات الفاكيوم في ملف مستقل (ص9-10)</td>
                                <td>سجل دورة فاكيوم لكل بلوك مربوط برقم Block ID</td>
                                <td>ربط المسامية بمسببها</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T8</td>
                                <td>المعالجة</td>
                                <td>فك بعد 24س ومعالجة 14-28 يوما (ص10)</td>
                                <td>إفراج بنتيجة اختبار الضغط بعد 14 يوما كحد أدنى</td>
                                <td>منع القطع المبكر تماما</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T9</td>
                                <td>التقطيع</td>
                                <td>4 مناشير، توثيق في ملفين Excel (ص11)</td>
                                <td>أمر تقطيع لكل بلوك يربط البلوك بالألواح وم²</td>
                                <td>حساب العائد لكل بلوك</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T10</td>
                                <td>التلميع</td>
                                <td>3 تشطيبات، ريزن وأحجار جلي (ص11)</td>
                                <td>تحميل الريزن والأحجار بالمتر المربع الفعلي الملمع</td>
                                <td>تكلفة دقيقة لكل لوح</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T11</td>
                                <td>الجودة</td>
                                <td>فحص الخامات والإنتاج بسحب عينات (ص11)</td>
                                <td>حالة المادة (بوابة تحكم) تمنع حركتها نظاميا</td>
                                <td>منع تمرير غير المطابق</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T12</td>
                                <td>الجودة</td>
                                <td>تحليل الأسمنت والكسر غير مرتبطين بالدفعة</td>
                                <td>النتائج تسجل على رقم الدفعة أو البلوك مباشرة</td>
                                <td>تتبع كامل حتى المورد</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T13</td>
                                <td>المشتريات</td>
                                <td>ست خطوات PR إلى التسليم (ص13)</td>
                                <td>عقود إطارية وتحديد زمن دورة الشراء ومتابعتها</td>
                                <td>تقليل زمن توقف المواد</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T14</td>
                                <td>الصيانة</td>
                                <td>أوامر عمل تحمل التكلفة على الماكينة (ص16)</td>
                                <td>تحميل الصيانة على الماكينة ثم المنتج بساعات العمل</td>
                                <td>تكلفة كاملة للمنتج</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T15</td>
                                <td>المياه</td>
                                <td>الكيماويات بلا تكلفة محاسبية (ص14)</td>
                                <td>محطة المياه مركز تكلفة خدمي يوزع على الأمتار</td>
                                <td>تكلفة معيارية دقيقة</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T16</td>
                                <td>التكاليف</td>
                                <td>معايير التوزيع غير محسومة (ص15)</td>
                                <td>أساس تحميل بالمتر المربع على مركز العمل (A-08)</td>
                                <td>تكلفة قابلة للمقارنة</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[As-Is] [TBC]</span></td>
                            </tr>
                            <tr>
                                <td>T17</td>
                                <td>الأدوار</td>
                                <td>10 أدوار موثقة وفصل الوظائف غير محسوم</td>
                                <td>مصفوفة RACI مع 4 قواعد فصل إلزامية</td>
                                <td>حوكمة ومنع تعارض</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T18</td>
                                <td>السجلات</td>
                                <td>12 مستندا مذكورا من أصل 17 (ص16 و19)</td>
                                <td>جدول المصير (القسم 16) لـ 25 سجلا ونموذجا</td>
                                <td>سجل واحد لكل معاملة</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[As-Is] [TBC]</span></td>
                            </tr>
                            <tr>
                                <td>T19</td>
                                <td>السلامة</td>
                                <td>لا يوجد وصف لإجراءات السلامة بالوضع الحالي</td>
                                <td>إجراء العزل والإقفال وتصاريح العمل (GEN-09)</td>
                                <td>حماية الأرواح والمعدات</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td>
                            </tr>
                            <tr>
                                <td>T20</td>
                                <td>فترات التشغيل</td>
                                <td>لا يوجد وصف لإجراءات تسليم فترات التشغيل</td>
                                <td>إجراء التسليم والاستلام بين الفترات (GEN-02)</td>
                                <td>استمرارية المعلومات</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[Proposed] [TBC]</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>(To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Gaps & Traceability Matrix</span>
                <span>الصفحة 46 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 47: IMPROVEMENT PRIORITIES & OPERATIONAL RISKS ================= -->
        <section class="a4-page" id="page-47">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (تيرازو)
                        </strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">(To-Be Document) —
                            إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Priorities & Operational Risks</strong>
                    <span>Sections 19 & 20</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>19. مصفوفة أولويات التحسين الصناعي (Improvement Priorities)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Priority Matrix</span>
                </h2>

                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.67rem;">
                        <thead>
                            <tr>
                                <th style="width: 14%;">المجال</th>
                                <th style="width: 20%;">الوضع الحالي</th>
                                <th style="width: 28%;">التحسين المستهدف المقترح</th>
                                <th style="width: 10%; text-align:center;">الأولوية</th>
                                <th style="width: 28%;">مبرر الأولوية والأثر المتوقع</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>الاستلام والمخازن</td>
                                <td>وزن تقديري ومطابقة ظاهرية</td>
                                <td>وزن موثق وتسجيل الصرف بالوزن الفعلي</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>يغذي كل التكاليف والتخطيط ومنع الفروقات</td>
                            </tr>
                            <tr>
                                <td>الخلط والصب</td>
                                <td>ميزان واحد والتسجيل متأخر غدا</td>
                                <td>تسجيل الاستهلاك بنفس فترة التشغيل فورا</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>مصدر الحقيقة للاستهلاك ودقة التكلفة</td>
                            </tr>
                            <tr>
                                <td>الصب والفاكيوم</td>
                                <td>معاملات بملف مستقل وخطر تصلب</td>
                                <td>مهلة قصوى ومعاملات مربوطة بالبلوك</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>يحدد جودة كل بلوك ويمنع الهدر والمسام</td>
                            </tr>
                            <tr>
                                <td>المعالجة والفك</td>
                                <td>إفراج زمني وقطع مبكر محتمل</td>
                                <td>إفراج بنتيجة اختبار الضغط بعد 14 يوما</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>خطر مباشر على تكسير الألواح وتلف الشفرات</td>
                            </tr>
                            <tr>
                                <td>التقطيع بالمناشير</td>
                                <td>4 مناشير، توثيق بملفات وتوقفات</td>
                                <td>خطة قطع لكل بلوك وقياس OEE للمنشار</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>المناشير عنق الزجاجة والأعلى تكلفة توقف</td>
                            </tr>
                            <tr>
                                <td>حساب التكاليف</td>
                                <td>توزيع تقديري وكيماويات بلا تكلفة</td>
                                <td>أسس توزيع معتمدة وتحميل مباشر للأسلحة</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>أساس التسعير العادل والربحية الحقيقية</td>
                            </tr>
                            <tr>
                                <td>إدارة الجودة</td>
                                <td>ملفات شير وأرشيف غير مرتبط</td>
                                <td>نتيجة فحص مرتبطة بالدفعة والبلوك</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>شرط أساسي للتتبع وأي استدعاء</td>
                            </tr>
                            <tr>
                                <td>إجراءات السلامة</td>
                                <td>لا إجراءات سلامة موصوفة</td>
                                <td>إجراء عزل الطاقة LOTO والتصاريح</td>
                                <td style="text-align:center;"><span class="badge badge-priority-high">عالية</span></td>
                                <td>حماية الأرواح في بيئة معدات بوزن 10 طن</td>
                            </tr>
                            <tr>
                                <td>الجلي والتلميع</td>
                                <td>3 تشطيبات وتوثيق يدوي</td>
                                <td>قياس FPY وتصنيف الدرجة واللمعان GU</td>
                                <td style="text-align:center;"><span class="badge badge-priority-med">متوسطة</span></td>
                                <td>يحدد إيراد الدرجة الأولى وهامش المساهمة</td>
                            </tr>
                            <tr>
                                <td>المشتريات</td>
                                <td>6 خطوات ودورة استيراد طويلة</td>
                                <td>عقود إطارية ومراجعة زمن الدورة</td>
                                <td style="text-align:center;"><span class="badge badge-priority-med">متوسطة</span></td>
                                <td>يخفف مخاطر توقف الخط لنقص خامات</td>
                            </tr>
                            <tr>
                                <td>الصيانة والمياه</td>
                                <td>أوامر بلا عدادات ودورة بلا تكلفة</td>
                                <td>صيانة بالعداد ومركز تكلفة خدمي للمياه</td>
                                <td style="text-align:center;"><span class="badge badge-priority-med">متوسطة</span></td>
                                <td>يدعم رفع OEE وضبط تكلفة الكيماويات</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="section-title">
                    <span>20. المخاطر التشغيلية والضوابط الوقائية (Operational Risk Register)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Risk & Control
                        Matrix</span>
                </h2>
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.66rem;">
                        <thead>
                            <tr>
                                <th style="width: 12%;">العملية</th>
                                <th style="width: 22%;">الخطر المرصود</th>
                                <th style="width: 22%;">الأثر المحتمل</th>
                                <th style="width: 30%;">الضابط المقترح في To-Be</th>
                                <th style="width: 14%;">الدور المسؤول</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>الاستلام</td>
                                <td>استلام خامة بلا أمر شراء PO</td>
                                <td>تكلفة غير مصرح بها وتخبط مخزني</td>
                                <td>لا تستلم أي شحنة دون رقم أمر شراء مفتوح</td>
                                <td>أمين المخزن</td>
                            </tr>
                            <tr>
                                <td>الاستلام</td>
                                <td>صرف خامة مرفوضة بالخطأ</td>
                                <td>خلل في اللون وقوة البلوك الخرساني</td>
                                <td>موقع معزول للمرفوض، والصرف منه ممنوع</td>
                                <td>أمين المخزن، الجودة</td>
                            </tr>
                            <tr>
                                <td>المخازن</td>
                                <td>فرق بين الدفتر الفعلي والمخزن</td>
                                <td>قرارات شراء خاطئة أو توقف مفاجئ</td>
                                <td>ترحيل الصرف بنفس فترة التشغيل وجرد دوري</td>
                                <td>أمين المخزن</td>
                            </tr>
                            <tr>
                                <td>الخلط الآلي</td>
                                <td>صب خلطة خارج حدود التسامح</td>
                                <td>عيب وتصدع في البلوك الخرساني</td>
                                <td>إيقاف الدفعة آليا قبل الصب إلا بتجاوز معتمد</td>
                                <td>مشرف فترة التشغيل</td>
                            </tr>
                            <tr>
                                <td>الخلط الآلي</td>
                                <td>تصلب الخلطة قبل الصب</td>
                                <td>هدر 5 طن خلطة بالكامل وتلف الميكسر</td>
                                <td>قائمة جاهزية ملزمة قبل الخلط وحد أقصى للفاصل</td>
                                <td>مشرف فترة التشغيل</td>
                            </tr>
                            <tr>
                                <td>الصب والفاكيوم</td>
                                <td>تشغيل الفاكيوم وهو غير جاهز</td>
                                <td>مسام وفجوات داخلية باللوح</td>
                                <td>قائمة فحص العزل واختبار التسريب اليومي</td>
                                <td>مشغل الفاكيوم</td>
                            </tr>
                            <tr>
                                <td>المعالجة</td>
                                <td>قطع مبكر للبلوك قبل نضجه</td>
                                <td>تفتت الحواف وتلف شفرات المنشار</td>
                                <td>إفراج بنتيجة اختبار الضغط المعملي حصرا</td>
                                <td>مهندس الجودة</td>
                            </tr>
                            <tr>
                                <td>التقطيع</td>
                                <td>نشر بلوك غير مفرج بالمناشير</td>
                                <td>خسارة بلوك وشفرات المنشار</td>
                                <td>فحص بطاقة إفراج البلوك قبل رفعه على المنشار</td>
                                <td>مشرف المناشير</td>
                            </tr>
                            <tr>
                                <td>التلميع</td>
                                <td>خلط ألواح بلون مختلف بالمشروع</td>
                                <td>شكوى عميل ورفض استلام بالموقع</td>
                                <td>تخصيص مشروعات وفق رمز درجة اللون Shade Code</td>
                                <td>مهندس الجودة، المخطط</td>
                            </tr>
                            <tr>
                                <td>محطة المياه</td>
                                <td>استهلاك كيماويات بلا تكلفة</td>
                                <td>تسعير خاطئ وتشوه تكاليف التلميع</td>
                                <td>تسجيل جرعات الكيماويات وتكلفتها لكل فترة</td>
                                <td>مشغل محطة المياه</td>
                            </tr>
                            <tr>
                                <td>الصيانة</td>
                                <td>عطل مفاجئ لمعدة عنق الزجاجة</td>
                                <td>توقف المصنع بالكامل وخسارة الطاقة</td>
                                <td>صيانة وقائية دورية وحد أدنى للقطع الحرجة</td>
                                <td>مخطط الصيانة</td>
                            </tr>
                            <tr>
                                <td>السلامة المهنية</td>
                                <td>دخول معدة دون عزل الطاقة</td>
                                <td>إصابة بليغة أو وفاة لا قدر الله</td>
                                <td>تطبيق إجراء العزل LOTO وتصريح العمل</td>
                                <td>مسؤول السلامة</td>
                            </tr>
                            <tr>
                                <td>التكاليف</td>
                                <td>تحميل التكلفة بتقدير عشوائي</td>
                                <td>تسعير مشوه وخسارة تنافسية</td>
                                <td>اعتماد أسس التوزيع وتحميل الأسلحة بالمتر المربع</td>
                                <td>محاسب التكاليف</td>
                            </tr>
                            <tr>
                                <td>سلسلة التتبع</td>
                                <td>تعذر تحديد البلوكات المتأثرة</td>
                                <td>استدعاء واسع ومكلف للمنتجات</td>
                                <td>تتبع أمامي وخلفي كامل برقم الدفعة بساعتين</td>
                                <td>مدير الجودة</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>(To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Priorities & Operational Risks</span>
                <span>الصفحة 47 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 48: ROADMAP, OPEN QUESTIONS (OQ) & SIGNOFF ================= -->
        <section class="a4-page" id="page-48">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Roadmap, Open Questions & Sign-off</strong>
                    <span>Sections 21 & 22</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>21. خارطة التطبيق المرحلية (Implementation Roadmap)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Phased Execution</span>
                </h2>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.67rem;">
                        <thead>
                            <tr>
                                <th style="width: 20%;">المرحلة</th>
                                <th style="width: 50%;">المحتوى التنفيذي</th>
                                <th style="width: 20%;">بوابة الاعتماد للانتقال</th>
                                <th style="width: 10%; text-align:center;">الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>1. حسم القرارات</strong></td><td>حسم الأسئلة المفتوحة (القسم 22)، تثبيت الأدوار (تم حسم الـ 2 كسارة والـ 3 سايلوهات بقرار الإدارة)</td><td>اعتماد الإدارة على الوثيقة v1.0</td><td style="text-align:center;"><span class="badge badge-tbc">[TBC]</span></td></tr>
                            <tr><td><strong>2. تثبيت السجلات</strong></td><td>اعتماد نماذج السجلات الـ 25، مصير السجلات من القسم 16، وتحديد أماكن الحفظ</td><td>اعتماد النماذج الرسمية</td><td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td></tr>
                            <tr><td><strong>3. تشغيل تجريبي</strong></td><td>تنفيذ الإجراءات لمراحل الاستلام والخلط والصب على خطوط محدودة، وتدريب المشغلين</td><td>نتيجة تجريبية مقبولة</td><td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td></tr>
                            <tr><td><strong>4. تشغيل كامل</strong></td><td>تطبيق الإجراءات على المراحل التسع بالكامل، وجمع بيانات خط الأساس لمدة 8 أسابيع</td><td>تثبيت المستهدفات بقرار الإدارة</td><td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td></tr>
                            <tr><td><strong>5. التحسين المستمر</strong></td><td>مراجعة ربع سنوية للمعايير ومعدلات الهدر وتحديث إجراءات التشغيل</td><td>مراجعة دورية للإدارة</td><td style="text-align:center;"><span class="badge badge-proposed">[Proposed]</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="section-title">
                    <span>22. نقاط مفتوحة وقرارات مطلوبة لحسم التصميم (28 سؤالاً بعد حسم الكسارات والسايلوهات)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Open Questions Register</span>
                </h2>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.64rem;">
                        <thead>
                            <tr>
                                <th style="width: 8%;">الرقم</th>
                                <th style="width: 44%;">البند والاستفسار المفتوح</th>
                                <th style="width: 26%;">الأثر على وثيقة الوضع المستهدف</th>
                                <th style="width: 22%;">المسؤول عن الحسم</th>
                            </tr>
                        </thead>
                        <tbody>
                                                        <tr><td><span class="badge badge-tbc">OQ-02</span></td><td>عدد الأدوار المعتمدة (10 في As-Is مقابل 6 مقترحة)</td><td>مصفوفة الصلاحيات والحوكمة</td><td>إدارة Trazoo</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-03</span></td><td>التسلسل الإداري والتبعية للأدوار المقترحة</td><td>الهيكل التنظيمي المعتمد</td><td>إدارة Trazoo</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-04</span></td><td>متوسط وزن الجونية والمعايرة الميدانية لسعة الـ 3 سايلوهات المعتمدة</td><td>مواقع التخزين والأرصدة للـ 3 سايلوهات</td><td>إدارة Trazoo (قياس ميداني)</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-05</span></td><td>حدود التسامح المقبولة لكل مكون خلطة</td><td>معايير إيقاف الدفعات آليا</td><td>مدير الجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-06</span></td><td>المهلة القصوى الفاصلة بين دفعتي صب البلوك</td><td>خطة طوارئ تصلب الخلطة</td><td>مدير الإنتاج والجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-07</span></td><td>خطة الطوارئ عند توقف الميكسر (قالب احتياطي/تخلص)</td><td>إجراء طوارئ الخلط MX-03</td><td>إدارة Trazoo</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-08</span></td><td>أسس التوزيع المحاسبي للأسلحة والأحجار والمرافق</td><td>محاسبة التكاليف الصناعية</td><td>الإدارة المالية</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-09</span></td><td>تكلفة كيماويات معالجة المياه وطريقة تحميلها</td><td>مركز تكلفة محطة المياه</td><td>الإدارة المالية</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-10</span></td><td>معدل تكلفة الساعة للمعدات والعمالة المباشرة</td><td>شجرة التكلفة المعيارية</td><td>الإدارة المالية</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-11</span></td><td>الحدود المالية لاعتماد طلبات وأوامر الشراء</td><td>مصفوفة اعتمادات الشراء PO</td><td>الإدارة المالية</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-12</span></td><td>مدة المعالجة المعتمدة حسب نوع الأسمنت والموسم</td><td>إجراء المعالجة والساحة CU-01</td><td>مهندس الجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-13</span></td><td>معيار الإفراج بالضغط المعتمد لكل موديل (MPa)</td><td>إجراء إفراج البلوك للتقطيع</td><td>مهندس الجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-14</span></td><td>شبكة المناخل المعتمدة لفحص الكسارات والخامات</td><td>سجلات التدرج المنخلي</td><td>مدير الجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-15</span></td><td>تكرار سحب عينات الاستلام (شحنة أم دفعة مورد)</td><td>إجراء الفحص الوارد RM-01</td><td>مدير الجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-16</span></td><td>مستندات الاختبار والمواصفات المعيارية المعتمدة</td><td>دليل إجراءات الفحص والمعمل</td><td>مدير الجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-17</span></td><td>صلاحيات اعتماد القبول بانحراف أو إعادة التشغيل</td><td>إجراء معالجة عدم المطابقة</td><td>مدير الجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-18</span></td><td>عدد فترات التشغيل اليومية وتوقيت كل منها</td><td>إجراء تسليم الفترات GEN-02</td><td>مدير المصنع</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-19</span></td><td>الممارسات الحالية للسلامة وعزل الطاقة</td><td>إجراء LOTO وتصاريح العمل</td><td>مسؤول السلامة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-20</span></td><td>الخمسة مستندات غير المحددة في قسم السجلات As-Is</td><td>جدول مصير السجلات (القسم 16)</td><td>إدارة Trazoo</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-21</span></td><td>العمر الافتراضي لأسلحة المناشير وأحجار الجلي</td><td>المعدل القياسي للمتر المربع</td><td>مدير الإنتاج والصيانة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-22</span></td><td>عدد شفرات المنشار وسرعة النشر القياسية</td><td>مستهدفات OEE وإنتاجية المناشير</td><td>مدير الإنتاج</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-23</span></td><td>نسب توزيع فواتير الكهرباء وإمكانية عدادات فرعية</td><td>توزيع تكلفة المرافق والطاقة</td><td>الإدارة المالية والمصنع</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-24</span></td><td>توصيات المصنعين الموردين لخطط الصيانة الوقائية</td><td>جداول الصيانة الوقائية بالعداد</td><td>مخطط الصيانة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-25</span></td><td>آلية اعتماد مستهدفات المؤشرات بعد خط الأساس</td><td>حوكمة مؤشرات الأداء</td><td>مدير المصنع</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-26</span></td><td>اعتماد نقطة المنتج التام وتفريع المرحلة 9أ و9ب</td><td>تعريف المنتج التام بالمستودع</td><td>إدارة Trazoo</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-27</span></td><td>تعريف درجات الفرز وفئات مقاس الكسر G1–G5</td><td>تصنيف الكسر والمنتج التام</td><td>مدير الإنتاج والجودة</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-28</span></td><td>الاسم التجاري والرسمي للمصنع (Trazoo / ترازو)</td><td>الوثيقة والمطبوعات الرسمية</td><td>إدارة Trazoo</td></tr>
                            <tr><td><span class="badge badge-tbc">OQ-29</span></td><td>تحديد أسئلة 3 و 5 و 11 المشار إليها في مسودة v0.2</td><td>ضبط مراجع الوثيقة بدقة</td><td>ABC Counsel مع Trazoo</td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Signoff Card -->
                <div class="signoff-grid" style="margin-top:0.25rem;">
                    <div class="signoff-card" style="padding:0.75rem;">
                        <div class="signoff-card-title">طرف العميل: مصنع Trazoo</div>
                        <div class="signoff-field"><span class="signoff-label">الاسم الكامل:</span><div class="signoff-line"></div></div>
                        <div class="signoff-field"><span class="signoff-label">المسمى والتوقيع:</span><div class="signoff-line" style="display:flex; align-items:flex-end; font-size:0.7rem; color:#64748b;">التاريخ: &nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp; / 2026 م</div></div>
                    </div>
                    <div class="signoff-card" style="padding:0.75rem;">
                        <div class="signoff-card-title">الاستشاري المنفذ: ABC Counsel</div>
                        <div class="signoff-field"><span class="signoff-label">الاسم الكامل:</span><div class="signoff-line"></div></div>
                        <div class="signoff-field"><span class="signoff-label">المسمى والتوقيع:</span><div class="signoff-line" style="display:flex; align-items:flex-end; font-size:0.7rem; color:#64748b;">التاريخ: &nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp; / 2026 م</div></div>
                    </div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Roadmap & Open Questions</span>
                <span>الصفحة 48 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 49: APPENDIX A - PART 1 (SOP ARCHITECTURE & CATALOG) ================= -->
        <section class="a4-page" id="page-49">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Appendix A: SOP Architecture</strong>
                    <span>General SOPs (SOP-GEN)</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>ملحق أ: معمارية وإجراءات التشغيل القياسية (SOP Architecture)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">منظومة الـ 51 إجراء</span>
                </h2>
                <p style="font-size:0.76rem; margin-bottom:0.35rem;">
                    تتكون منظومة إجراءات المصنع من <strong>51 إجراء تشغيليا</strong> موزعة على 3 طبقات: <strong>14 إجراء عاما (SOP-GEN)</strong> تحكم كل المراحل، <strong>31 إجراء تخصصيا للمراحل</strong>، و <strong>6 إجراءات للعمليات الداعمة</strong>.
                </p>

                <h3 class="subsection-title">كتالوج الإجراءات العامة (SOP-GEN Catalog — 14 إجراء)</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.68rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">الكود</th>
                                <th style="width: 25%;">اسم الإجراء القياسي</th>
                                <th style="width: 38%;">لماذا هو إلزامي وحيوي في مصنع ترازو</th>
                                <th style="width: 12%;">المالك</th>
                                <th style="width: 15%;">التكرار / الزناد</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><span class="badge badge-sop">GEN-01</span></td><td>ضبط الوثائق والسجلات</td><td>يمنع العمل بوصفات أو نماذج قديمة بعد أي تغيير تشغيلي</td><td>إدارة الجودة</td><td>مستمر + مراجعة سنوية</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-02</span></td><td>التسليم بين فترات التشغيل ★</td><td>البلوك يعبر أكثر من فترة (صب ← فاكيوم ← فك) وفقد المعلومة يفسد الإنتاج</td><td>مشرفو الفترات</td><td>نهاية كل فترة تشغيل</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-03</span></td><td>اجتماع البداية والتصعيد</td><td>يحول المؤشرات لقرار يومي ويحدد من يبلغ من وخلال كم دقيقة</td><td>مدير المصنع</td><td>يومي 15 دقيقة</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-04</span></td><td>تسجيل التوقفات وأكوادها</td><td>بدونه لا يمكن حساب OEE ولا معرفة أين تضيع طاقة المناشير</td><td>مشرفو الفترات</td><td>كل توقف > 5 دقائق</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-05</span></td><td>عدم المطابقة والتحسين NCR/CAPA ★</td><td>مسار موحد لأي مادة خارج المواصفة مع تحليل جذري (5 Whys)</td><td>إدارة الجودة</td><td>عند كل عيب أو انحراف</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-06</span></td><td>التتبع الشامل والاستدعاء ★</td><td>عند شكوى عميل يجب معرفة كل الألواح من نفس البلوك بساعتين</td><td>إدارة الجودة</td><td>عند شكوى + وهمي 6 شهور</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-07</span></td><td>التحكم في التغيير Change Control ★</td><td>تغيير مورد أسمنت أو نسبة ماء دون توثيق هو أكبر مسبب لتباين اللون</td><td>الجودة + المصنع</td><td>عند أي تغيير في وصفة أو خامة</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-08</span></td><td>إدارة البيانات الأساسية</td><td>منع كود مكرر أو وصفة خاطئة تفسد التكاليف والمخزون في التقارير</td><td>مسؤول الأصناف</td><td>[TBC] عند التغيير</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-09</span></td><td>عزل الطاقة والإقفال LOTO ★</td><td>مناشير ضخمة و 2 كسارة وميكسرات: أي تدخل بدون عزل طاقة مميت</td><td>مسؤول السلامة</td><td>كل صيانة أو تنظيف داخلي</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-10</span></td><td>رفع ونقل الأحمال الثقيلة</td><td>قواعد أمان نقل بلوكات 10 طن وقوالب الصب وحوامل الألواح</td><td>مسؤول السلامة</td><td>قبل كل رفعة غير روتينية</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-11</span></td><td>التدريب ومصفوفة المهارات</td><td>يضمن ألا يشغل ماكينة إلا من اجتاز تقييمها العملي ووقع على إجرائها</td><td>الموارد + المصنع</td><td>عند التعيين + سنوي</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-12</span></td><td>النظافة والتنظيم 5S</td><td>غبار الرخام وطين المعالجة يلوثان الألوان الحساسة ويخفيان الأعطال</td><td>مشرفو الفترات</td><td>يومي + تدقيق شهري</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-13</span></td><td>إدارة الهالك والبيئة</td><td>إعادة تكسير الكسر، وتوثيق التخلص البيئي النظامي من كعكة الطين الجاف</td><td>مدير المصنع</td><td>يومي + شهري</td></tr>
                            <tr><td><span class="badge badge-sop">GEN-14</span></td><td>تخصيص الألواح حسب تجانس اللون ★</td><td>بلوكان من نفس الوصفة قد يختلفان في الدرجة، ويجب حجز مشروع العميل بلون واحد</td><td>الجودة + المخطط</td><td>لكل أمر بيع مشروع</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">تفاصيل الإجراءات العامة الحرجة (Critical SOP-GEN Details)</h3>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.45rem;">
                    <div class="callout-box info" style="margin:0; font-size:0.71rem; line-height:1.4;">
                        <strong style="color:var(--primary); display:block; margin-bottom:0.15rem;">GEN-02: التسليم بين فترات التشغيل</strong>
                        ترحيل المعاملات قبل 30 دقيقة. إصدار تقرير التسليم R-02 (البلوكات بالفاكيوم، المستحقة للفك، الماكينات المتوقفة، وتصاريح LOTO السارية). جولة مشتركة وتوقيع إلكتروني يمنع إغلاق الفترة قبل حسم أي حركة معلقة.
                    </div>
                    <div class="callout-box danger" style="margin:0; font-size:0.71rem; line-height:1.4;">
                        <strong style="color:var(--primary); display:block; margin-bottom:0.15rem;">GEN-09: عزل الطاقة والإقفال (LOTO)</strong>
                        إلزامي على الـ 2 كسارة، الميكسر، الـ 3 سايلوهات، الناقلات، الفاكيوم، المناشير، ومكبس الفلتر. استخراج تصريح عمل، عزل كافة مصادر الطاقة (كهرباء، هيدروليك، هواء، ومياه)، قفل وبطاقة شخصية لكل فني، والتحقق بتشغيل وهمي قبل البدء.
                    </div>
                    <div class="callout-box warning" style="margin:0; font-size:0.71rem; line-height:1.4;">
                        <strong style="color:var(--primary); display:block; margin-bottom:0.15rem;">GEN-05: مصفوفة التصعيد لعدم المطابقة</strong>
                        خلطة خارج التسامح: تبلغ الجودة فورا قبل الصب · بلوك بدفعة واحدة: يبلغ مدير المصنع خلال 30 دقيقة · توقف ماكينة > ساعتين: يبلغ مدير المصنع والمخطط فورا · شكوى عميل: تبلغ الجودة و SCM خلال 24 ساعة.
                    </div>
                    <div class="callout-box success" style="margin:0; font-size:0.71rem; line-height:1.4;">
                        <strong style="color:var(--primary); display:block; margin-bottom:0.15rem;">GEN-14: تخصيص الألواح وتجانس اللون</strong>
                        تصنيف كل لوح برمز درجة اللون (Shade Code) تحت إضاءة D65. يخصص المخطط كمية المشروع + 5% احتياطي من نفس رمز الدرجة لمنع تباين الألوان في موقع العميل، وتحفظ عينة مرجعية في معمل الجودة لأي توريد إضافي.
                    </div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Appendix A: SOP Architecture</span>
                <span>الصفحة 49 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 50: APPENDIX A - PART 2 (STAGE SOPs & DETAILS) ================= -->
        <section class="a4-page" id="page-50">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Appendix A: Stage SOPs</strong>
                    <span>31 Procedures & Critical Controls</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>مجموعات الإجراءات لكل مرحلة إنتاج (31 إجراء تفصيليا)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Stage SOP Matrix</span>
                </h2>

                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.68rem;">
                        <thead>
                            <tr>
                                <th style="width: 15%;">المرحلة</th>
                                <th style="width: 22%;">التشغيل القياسي</th>
                                <th style="width: 21%;">البدء / التغيير / التنظيف</th>
                                <th style="width: 21%;">الفحص والمعايرة</th>
                                <th style="width: 21%;">الحالات الاستثنائية والطوارئ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>1. الاستلام</strong></td><td>RM-01 استلام وفحص وتخزين</td><td>RM-03 تفريغ الـ 3 سايلوهات للأسمنت</td><td>RM-02 إدارة الجونيات المتداولة</td><td>RM-04 الخامات المرفوضة والمرتجع</td></tr>
                            <tr><td><strong>2. التكسير</strong></td><td>CR-01 تكسير وتصنيف حجمي بالـ 2 كسارة</td><td>CR-02 تغيير اللون وتنظيف الـ 2 كسارة</td><td>CR-03 ضبط الخلوص وتبديل الأجزاء</td><td>(ضمن CR-01: إعادة الفرز)</td></tr>
                            <tr><td><strong>3. الخلط</strong></td><td>MX-01 تحضير وخلط الدفعة</td><td>MX-04 تنظيف الميكسر وتغيير اللون</td><td>MX-02 معايرة موازين الميكسر</td><td>MX-03 الجاهزية وطوارئ التصلب</td></tr>
                            <tr><td><strong>4. الصب</strong></td><td>CS-01 صب البلوك وتسجيله</td><td>CS-02 تجهيز وتزييت القوالب</td><td>(ضمن CS-02: فحص استقامة القالب)</td><td>CS-03 بلوك غير مكتمل أو معيب</td></tr>
                            <tr><td><strong>5. الفاكيوم</strong></td><td>VC-01 تشغيل دورة الفاكيوم</td><td>(ضمن VC-02: تنظيف الفلاتر)</td><td>VC-02 فحص العزل والحساسات</td><td>VC-03 فشل التفريغ أثناء الدورة</td></tr>
                            <tr><td><strong>6. المعالجة</strong></td><td>CU-01 الفك والمعالجة والإفراج</td><td>CU-02 إدارة مواقع ساحة المعالجة</td><td>CU-03 مكعبات واختبار الضغط</td><td>(ضمن CU-01: فشل اختبار الضغط)</td></tr>
                            <tr><td><strong>7. التقطيع</strong></td><td>GS-01 تقطيع البلوك لألواح</td><td>GS-02 تغيير وشد الشفرات</td><td>GS-03 جدولة المناشير اليومية</td><td>GS-04 انحراف الشفرة وكسر الألواح</td></tr>
                            <tr><td><strong>8. التلميع</strong></td><td>PL-01 جلي وتلميع الألواح</td><td>PL-02 تغيير الأحجار ومعايرة الرؤوس</td><td>PL-03 تصنيف الدرجة واللمعان</td><td>PL-04 إعادة التلميع وضوابطه</td></tr>
                            <tr><td><strong>9. التغليف</strong></td><td>FN-01 قطع خاص · FN-02 فحص وتغليف</td><td>(ضمن FN-01: تحميل برنامج CNC)</td><td>(ضمن FN-02: شهادة الفحص)</td><td>FN-03 التحميل والشحن وتلف النقل</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">الإجراءات التخصصية الحرجة ونقاط التحكم (Critical Stage Controls)</h3>
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.68rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">الكود</th>
                                <th style="width: 25%;">اسم الإجراء القياسي</th>
                                <th style="width: 40%;">الخطوات التشغيلية الحرجة</th>
                                <th style="width: 25%;">نقطة التحكم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><span class="badge badge-sop">RM-02</span></td><td>إدارة الجونيات المتداولة</td><td>ترقيم كل جونية، تخصيصها لعائلة لونية، وفحص الخياطة والعروات قبل كل تعبئة.</td><td>إعدام الجونية عند تلفها، ومنع نقلها بين عائلات الألوان (RSK-002).</td></tr>
                            <tr><td><span class="badge badge-sop">RM-03</span></td><td>تفريغ الـ 3 سايلوهات للأسمنت</td><td>التحقق من نوع الأسمنت (أبيض/رمادي) وربطه بالسايلو المخصص (سايلو 1، سايلو 2، سايلو 3) وقراءة الليفل قبل التفريغ وتوثيق الدفعة.</td><td>ممنوع التفريغ في سايلو مختلف، وممنوع الاستخدام قبل اعتماد الفحص.</td></tr>
                            <tr><td><span class="badge badge-sop">CR-02</span></td><td>تغيير اللون في الـ 2 كسارة</td><td>تفريغ الـ 2 كسارة، نفخ بالهواء، وتشغيل كمية غسيل من اللون الجديد تعزل كمردود.</td><td>توقيع قائمة فحص التغيير من المشرف والترتيب دائما من الفاتح للغامق.</td></tr>
                            <tr><td><span class="badge badge-sop">MX-02</span></td><td>معايرة موازين الميكسر</td><td>أوزان معيارية معتمدة، فحص يومي بنقطة واحدة، ومعايرة شهرية كاملة لكل صامعة.</td><td>انحراف ميزان الميكسر > 0.5% يوقف الخلط فورا لأنه مصدر تكلفة البلوك.</td></tr>
                            <tr><td><span class="badge badge-sop">MX-03</span></td><td>طوارئ تصلب الخلطة</td><td>قائمة جاهزية كاملة (قالب، فاكيوم، مواد، ديزل طوارئ). وعند التوقف: قالب احتياطي وغسيل.</td><td>لا تبدأ الدفعة الأولى قبل إتمام قائمة الجاهزية الإلكترونية بالنظام.</td></tr>
                            <tr><td><span class="badge badge-sop">CS-02</span></td><td>تجهيز وتزييت القوالب</td><td>تنظيف وفحص الاستقامة والمفاصل، ودهان مادة فصل معيارية، وتحديث حالة القالب "جاهز".</td><td>أي قالب بتشوه في الأبعاد يخرج للصيانة بأمر عمل لمنع اعوجاج البلوك.</td></tr>
                            <tr><td><span class="badge badge-sop">VC-02</span></td><td>فحص عزل غرفة الفاكيوم</td><td>اختبار تسريب يومي (الوصول لـ 100 mbar بزمن قياسي)، وتنظيف الفلاتر أسبوعيا.</td><td>زمن الوصول أطول بـ 20% من المعيار يفتح طلب صيانة فوري ويمنع الدورة.</td></tr>
                            <tr><td><span class="badge badge-sop">CU-03</span></td><td>أخذ المكعبات والضغط</td><td>صب مكعبات لكل بلوك برقمه وتخزينها بنفس ظروف البلوك، واختبارها في يوم الأهلية.</td><td>مكنة الضغط معايرة رسميا، والنتيجة تسجل على Block ID لفتح الإفراج.</td></tr>
                            <tr><td><span class="badge badge-sop">GS-02</span></td><td>شد وتغيير أسلحة المناشير</td><td>عزل LOTO، تركيب الطقم بالمسافات المطلوبة (2/3 سم)، وشد بعزم نيوتن قياسي.</td><td>قياس سمك واستقامة أول 3 ألواح قبل السماح باستكمال باقي نشر البلوك.</td></tr>
                            <tr><td><span class="badge badge-sop">PL-02</span></td><td>تغيير أحجار التلميع</td><td>تغيير الحجر عند حد التآكل أو م² المعياري، ومعايرة ضغط الرؤوس بداية الوردية.</td><td>لوح تجربة بقراءة لمعان مطابقة للمواصفة قبل تمرير إنتاج الوردية.</td></tr>
                            <tr><td><span class="badge badge-sop">FN-03</span></td><td>التحميل والشحن للعملاء</td><td>مسح باركود كل طرد عند التحميل مقابل أمر الشحن، والتثبيت الرأسي، والتصوير.</td><td>يرفض النظام خروج أي طرد بدرجة لون مختلفة عن المحجوزة للمشروع.</td></tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Appendix A: Stage Controls</span>
                <span>الصفحة 50 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 51: APPENDIX B - PART 1 (KPI DICTIONARY & L1/L3) ================= -->
        <section class="a4-page" id="page-51">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Appendix B: KPI Dictionary</strong>
                    <span>Plant (L1) & Stage (L3) Metrics</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>ملحق ب: القاموس المعتمد لمؤشرات الأداء (KPI Dictionary)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">منظومة الـ 105 مؤشرات</span>
                </h2>

                <h3 class="subsection-title">المؤشرات العامة للمصنع (Plant-Level L1: F-01 إلى F-15)</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.67rem;">
                        <thead>
                            <tr>
                                <th style="width: 7%;">الكود</th>
                                <th style="width: 22%;">المؤشر العام</th>
                                <th style="width: 28%;">الأهمية والقرار الإداري المرتبط</th>
                                <th style="width: 27%;">طريقة القياس ونقطة الالتقاط</th>
                                <th style="width: 6%; text-align:center;">الاتجاه</th>
                                <th style="width: 10%; text-align:center;">المستهدف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><span class="badge badge-kpi">F-01</span></td><td>معدل الإصابات LTIFR</td><td>السلامة الخطر الأول في بيئة بلوكات 10 طن ومناشير</td><td>عدد الإصابات المضيعة للوقت × 10⁶ ÷ ساعات العمل</td><td style="text-align:center; font-weight:800; color:#0284c7;">↓</td><td style="text-align:center;"><span class="badge badge-tbc">صفر [TBC]</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-02</span></td><td>العائد الكلي للمنتج التام</td><td>أهم مؤشر ربحية: كل 1% ضائع هو خامات وطاقة بلا بيع</td><td>م² FG درجة أولى ÷ م² النظري للبلوكات المقطوعة × 100</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-proposed">≥ 82% [Proposed]</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-03</span></td><td>العائد من أول مرة Rolled FPY</td><td>يكشف "المصنع الخفي" وإعادة التشغيل المستهلكة للطاقة</td><td>حاصل ضرب FPY لكل المراحل (S2 × S3 × … × S9)</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-proposed">≥ 85% [Proposed]</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-04</span></td><td>شكاوى ومرتجعات العملاء</td><td>المؤشر الذي يراه العميل، وتكلفة المرتجع أضعاف رفضه</td><td>م² مشكو منه أو مرتجع ÷ م² مسلم × 100</td><td style="text-align:center; font-weight:800; color:#0284c7;">↓</td><td style="text-align:center;"><span class="badge badge-proposed">≤ 0.5% [Proposed]</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-05</span></td><td>التسليم في الموعد OTIF</td><td>في نمط MTO هذا هو الوعد التعاقدي الذي يبيعه المصنع</td><td>سطور أوامر بيع مسلمة كاملة بموعدها ÷ المستحقة × 100</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-proposed">≥ 90% [Proposed]</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-06</span></td><td>زمن دورة الطلب Lead Time</td><td>المعالجة 14 يوما تقيد الوعد المباشر، وضبطه يسمح بالتسعير الصح</td><td>متوسط الأيام من تأكيد أمر البيع حتى الشحن الفعلي</td><td style="text-align:center; font-weight:800; color:#0284c7;">↓</td><td style="text-align:center;"><span class="badge badge-tbc">[TBC] خط الأساس</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-07</span></td><td>الالتزام بخطة الإنتاج</td><td>مؤشر سابق لـ OTIF: الخطة التي لا تنفذ اليوم تتأخر مبيعاتها لاحقا</td><td>أوامر منجزة بالكمية في أسبوعها ÷ المخططة × 100</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-proposed">≥ 90% [Proposed]</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-08</span></td><td>OEE للمناشير (العنق)</td><td>طاقة المصنع = طاقة المناشير، وكل ساعة ضائعة ضائعة على الكل</td><td>التوفر × الأداء × الجودة لـ BM1–BM4 مرجحا بالساعات</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-proposed">≥ 65% / 75%</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-09</span></td><td>تكلفة المتر المربع التام</td><td>أساس التسعير وهوية الربحية لكل موديل، وغيابه كان أكبر فجوة</td><td>إجمالي تكلفة أوامر الإنتاج المغلقة ÷ م² FG منتج</td><td style="text-align:center; font-weight:800; color:#0284c7;">↓</td><td style="text-align:center;">المعياري ±5% [Proposed]</td></tr>
                            <tr><td><span class="badge badge-kpi">F-10</span></td><td>تكلفة عدم الجودة CoPQ</td><td>يترجم الهدر والكسر والدرجة الثانية إلى أرقام مالية صريحة</td><td>(هالك + إعادة تشغيل + فرق درجة 2 + مرتجع) ÷ تكلفة الإنتاج</td><td style="text-align:center; font-weight:800; color:#0284c7;">↓</td><td style="text-align:center;"><span class="badge badge-proposed">≤ 3% [Proposed]</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-11</span></td><td>هامش المساهمة / م²</td><td>يحدد أي الموديلات والعملاء يستحق الأولوية في طاقة المناشير</td><td>(سعر البيع الصافي − التكلفة المتغيرة) ÷ م² للموديل</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-tbc">[TBC] مع المالية</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-12</span></td><td>أيام المخزون الكلي (Days)</td><td>المعالجة 14-28 يوما تحبس سيولة ضخمة، والمؤشر يوازن الجاهزية</td><td>قيمة المخزون بنهاية الشهر ÷ متوسط تكلفة الإنتاج اليومية</td><td style="text-align:center; font-weight:800; color:#0284c7;">↓</td><td style="text-align:center;"><span class="badge badge-tbc">[TBC] خط الأساس</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-13</span></td><td>استهلاك الطاقة / م²</td><td>المناشير والتلميع والفاكيوم كثيفة الاستهلاك، والكهرباء بند رئيسي</td><td>كيلووات ساعة المصنع الكلية ÷ م² FG منتج</td><td style="text-align:center; font-weight:800; color:#0284c7;">↓</td><td style="text-align:center;"><span class="badge badge-tbc">[TBC] خط الأساس</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-14</span></td><td>إنتاجية العمالة المباشرة</td><td>يقيس أثر التدريب وتحسين العمليات ويدعم قرارات التشغيل</td><td>م² FG منتج ÷ ساعات العمل المباشرة المسجلة</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-tbc">[TBC] خط الأساس</span></td></tr>
                            <tr><td><span class="badge badge-kpi">F-15</span></td><td>انضباط البيانات اللحظية</td><td>المؤشرات السابقة بلا قيمة إذا سجلت متأخرة؛ هو مؤشر الثقة</td><td>معاملات مرحلة بنفس فترة التشغيل ومكتملة ÷ الإجمالي × 100</td><td style="text-align:center; font-weight:800; color:#0284c7;">↑</td><td style="text-align:center;"><span class="badge badge-proposed">≥ 98% [Proposed]</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">ملخص عينة مؤشرات المراحل التشغيلية L3 (54 مؤشرا لـ S1 حتى S9)</h3>
                <div class="data-table-wrapper">
                    <table class="data-table" style="font-size:0.66rem;">
                        <thead>
                            <tr>
                                <th style="width: 8%;">المرحلة</th>
                                <th style="width: 15%;">المؤشر 1</th>
                                <th style="width: 15%;">المؤشر 2</th>
                                <th style="width: 15%;">المؤشر 3</th>
                                <th style="width: 15%;">المؤشر 4</th>
                                <th style="width: 16%;">المؤشر 5</th>
                                <th style="width: 16%;">المؤشر 6</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>1. الاستلام</strong></td><td>S1-01 انحراف الوزن</td><td>S1-02 رفض الوارد</td><td>S1-03 زمن الفحص</td><td>S1-04 دقة المخزون</td><td>S1-05 تغطية الخامات</td><td>S1-06 استلام بلا PO</td></tr>
                            <tr><td><strong>2. التكسير</strong></td><td>S2-01 عائد التكسير</td><td>S2-02 فاقد غير مبرر</td><td>S2-03 مطابقة التدرج</td><td>S2-04 إنتاجية الـ 2 كسارة</td><td>S2-05 توفر وجاهزية الـ 2 كسارة</td><td>S2-06 زمن تغيير اللون</td></tr>
                            <tr><td><strong>3. الخلط</strong></td><td>S3-01 دقة الخلطة</td><td>S3-02 انحراف الأسمنت</td><td>S3-03 انحراف الألوان</td><td>S3-04 فحص Slump</td><td>S3-05 خلطات تالفة</td><td>S3-06 زمن دورة الميكسر</td></tr>
                            <tr><td><strong>4. الصب</strong></td><td>S4-01 صب للخطة</td><td>S4-02 فاصل الدفعتين</td><td>S4-03 بلوك موقوف</td><td>S4-04 اكتمال التتبع</td><td>S4-05 استغلال القوالب</td><td>S4-06 انتظار الفاكيوم</td></tr>
                            <tr><td><strong>5. الفاكيوم</strong></td><td>S5-01 التزام الوصفة</td><td>S5-02 عيوب المسامية</td><td>S5-03 زمن 100 mbar</td><td>S5-04 زمن الدورة</td><td>S5-05 دورات ملغاة</td><td>S5-06 توفر الفاكيوم</td></tr>
                            <tr><td><strong>6. المعالجة</strong></td><td>S6-01 القطع المبكر</td><td>S6-02 إفراج أول فحص</td><td>S6-03 مدة المعالجة</td><td>S6-04 أعمار بالساحة</td><td>S6-05 مخزون WIP</td><td>S6-06 دقة مواقع الساحة</td></tr>
                            <tr><td><strong>7. التقطيع</strong></td><td>S7-01 عائد مساحي</td><td>S7-02 كسر التقطيع</td><td>S7-03 OEE المنشار</td><td>S7-04 دقة السماكة</td><td>S7-05 تكلفة الأسلحة</td><td>S7-06 انتظار بلوك مفرج</td></tr>
                            <tr><td><strong>8. التلميع</strong></td><td>S8-01 FPY تلميع</td><td>S8-02 نسبة درجة 2</td><td>S8-03 فحص اللمعان</td><td>S8-04 استهلاك الريزن</td><td>S8-05 تكلفة الأحجار</td><td>S8-06 إنتاجية الخط</td></tr>
                            <tr><td><strong>9. التغليف</strong></td><td>S9-01 استغلال CNC</td><td>S9-02 فحص أول قطعة</td><td>S9-03 زمن التغليف</td><td>S9-04 تلف المناولة</td><td>S9-05 تخصيص اللون</td><td>S9-06 اكتمال تتبع FG</td></tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Appendix B: Plant KPIs L1 & L3</span>
                <span>الصفحة 51 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 52: APPENDIX B - PART 2 (DEPT KPIs, OP METRICS & TREE) ================= -->
        <section class="a4-page" id="page-52">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Appendix B: Dept KPIs & Tree</strong>
                    <span>L2 Metrics, Operator Qualification & Energy</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>مؤشرات الإدارات الداعمة (L2) وتأهيل المشغلين (OP)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Departmental Enablers & Operators</span>
                </h2>

                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.67rem;">
                        <thead>
                            <tr>
                                <th style="width: 18%;">الإدارة</th>
                                <th style="width: 18%;">المؤشر 1 والمستهدف</th>
                                <th style="width: 18%;">المؤشر 2 والمستهدف</th>
                                <th style="width: 23%;">المؤشر 3 والمستهدف</th>
                                <th style="width: 23%;">المؤشر 4 والمستهدف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>التخطيط (D-PP)</strong></td><td>الالتزام بالخطة (≥90%)</td><td>دقة التوقع (≥80%)</td><td>تعديل الخطة المجمدة (≤10%)</td><td>استغلال طاقة العنق (≥85%)</td></tr>
                            <tr><td><strong>المشتريات (D-PR)</strong></td><td>تسليم الموردين (≥90%)</td><td>زمن دورة الشراء (≤5/10يوم)</td><td>وفورات الشراء التعاقدية</td><td>شراء خارج النظام Maverick (≤2%)</td></tr>
                            <tr><td><strong>المخازن (D-WH)</strong></td><td>دقة المخزون (≥98%)</td><td>تسويات الجرد (≤0.5%)</td><td>ترحيل بنفس الفترة (≥98%)</td><td>مخزون راكد >90 يوما (≤10%)</td></tr>
                            <tr><td><strong>الجودة (D-QC)</strong></td><td>تكلفة عدم الجودة (≤3%)</td><td>إغلاق NCR بالموعد (≥90%)</td><td>تنفيذ خطة العينات (100%)</td><td>عيوب متسربة للعميل (≤0.5%)</td></tr>
                            <tr><td><strong>الصيانة (D-MT)</strong></td><td>MTBF للمعدات الحرجة (↑)</td><td>MTTR زمن الإصلاح (≤4س)</td><td>إنجاز الوقائية (≥90%)</td><td>توفر القطع الحرجة (≥95%)</td></tr>
                            <tr><td><strong>معالجة المياه (D-WT)</strong></td><td>استرجاع المياه (≥90%)</td><td>مطابقة العكارة (≥95%)</td><td>تكلفة الكيماويات / م³ (±10%)</td><td>تخلص موثق من الطين (100%)</td></tr>
                            <tr><td><strong>المالية والتكاليف (D-FI)</strong></td><td>انحراف التكلفة (±5%)</td><td>إغلاق الأوامر في 3 أيام (≥95%)</td><td>تكاليف غير موزعة (≤2%)</td><td>أيام الإقفال الشهري (≤5 أيام)</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">مؤشرات تأهيل المشغلين التشغيلية (Operator Qualification [Proposed])</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.67rem;">
                        <thead>
                            <tr>
                                <th style="width: 10%;">الكود</th>
                                <th style="width: 25%;">اسم المؤشر التشغيلي</th>
                                <th style="width: 35%;">أهميته في تقليل الأخطاء التشغيلية</th>
                                <th style="width: 18%;">طريقة القياس</th>
                                <th style="width: 12%; text-align:center;">المستهدف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><span class="badge badge-proposed">OP-01</span></td><td>تغطية تأهيل المشغلين</td><td>ماكينة بلا مشغل مؤهل خطر تشغيلي وفقدان جودة</td><td>ماكينات لها مشغل مؤهل ÷ الإجمالي × 100</td><td style="text-align:center;"><span class="badge badge-tbc">100% [TBC]</span></td></tr>
                            <tr><td><span class="badge badge-proposed">OP-02</span></td><td>إنجاز التدريب على إجراء SOP</td><td>يمنع تشغيل أي ماكينة أو عملية بدون تدريب مسبق</td><td>مشغلون وقعوا على التدريب ÷ الإجمالي × 100</td><td style="text-align:center;"><span class="badge badge-tbc">100% [TBC]</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">شجرة المؤشرات وروابط التفصيل (KPI Drill-down Tree)</h3>
                <div class="callout-box info" style="margin-bottom:0.45rem; font-size:0.71rem; line-height:1.42;">
                    <strong>F-02 العائد الكلي ⬅</strong> S7-01 العائد المساحي للبلوك · S7-02 كسر المناشير · S7-04 دقة السماكة · S8-01 FPY التلميع · S8-02 الدرجة الثانية · S9-01 استغلال اللوح CNC · S5-02 عيوب المسامية · S4-02 فاصل الدفعتين · S6-01 القطع المبكر.<br>
                    <strong>F-09 تكلفة المتر المربع ⬅</strong> الخامات (S3-02 الأسمنت، S3-03 الألوان، S2-01 عائد الكسر) · المستلزمات (S7-05 الأسلحة، S8-04 الريزن، S8-05 الأحجار، WT-03 الكيماويات) · الطاقة وساعات التشغيل (F-13 الطاقة، S7-03 OEE).<br>
                    <strong>F-05 التسليم OTIF ⬅</strong> F-07 الخطة ⬅ S4-01 الصب ⬅ S6-02 الإفراج ⬅ S7-06 توقف المنشار ⬅ S1-05 تغطية الخامات ⬅ MT-01 موثوقية المعدات.
                </div>

                <h3 class="subsection-title">نموذج طاقة ساحة المعالجة والمناشير (Capacity Balance Model)</h3>
                <div class="callout-box success" style="margin:0; font-size:0.71rem; line-height:1.42;">
                    <strong>معادلة سعة الساحة:</strong> عدد البلوكات في الساحة = معدل الصب اليومي × (أيام المعالجة 14 + أيام الانتظار للتقطيع).<br>
                    <strong>معادلة الصب المستدام:</strong> معدل الصب اليومي ≤ (مجموع ساعات تشغيل المناشير BM1–BM4 يوميا × OEE) ÷ ساعات المنشار اللازمة لنشر البلوك الواحد.<br>
                    <span style="color:#b45309; font-weight:700;">القاعدة الذهبية:</span> أي معدل صب يتجاوز طاقة المناشير يسبب تراكم البلوكات في الساحة (S6-04)، وأي معدل أقل يوقف المناشير بعد 14 يوما (S7-06). لذلك يربط المخطط خطة الصب بطاقة المناشير بعد 14 يوما.
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Appendix B: Dept KPIs & Tree</span>
                <span>الصفحة 52 من 53</span>
            </footer>
        </section>

<!-- ================= PAGE 53: APPENDIX C (DATA CAPTURE, REPORTS & DASHBOARDS) ================= -->
        <section class="a4-page" id="page-53">
            <header class="page-header">
                <div class="page-header-logos">
                    <img src="abc_logo.png" alt="ABC Counsel" class="header-logo-abc">
                    <div style="border-right: 2px solid #cbd5e1; padding-right: 0.65rem;">
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">مصنع Trazoo (ترازو) لتصنيع الألواح والبلوكات</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</span>
                    </div>
                </div>
                <div class="doc-meta-header">
                    <strong>Appendix C: Dashboards & Reports</strong>
                    <span>Capture Points, 16 Reports & DB-00 to DB-S9</span>
                </div>
            </header>

            <main class="page-content">
                <h2 class="section-title">
                    <span>ملحق ج: كتالوج التقارير ولوحات المتابعة (Dashboards & Reports)</span>
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">Execution Intelligence</span>
                </h2>

                <h3 class="subsection-title">نقاط الالتقاط الإلزامية (C01 إلى C14) وكتالوج التقارير الـ 16</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.66rem;">
                        <thead>
                            <tr>
                                <th style="width: 8%;">الكود</th>
                                <th style="width: 22%;">اسم التقرير أو نقطة الالتقاط</th>
                                <th style="width: 18%;">الفئة والتوقيت</th>
                                <th style="width: 20%;">الجمهور المستهدف</th>
                                <th style="width: 32%;">السؤال التشغيلي ومحتوى التقرير</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><span class="badge badge-ccp">C01/R-04</span></td><td>فروقات الاستلام وتذكرة البسكول</td><td>رقابي / أسبوعي</td><td>المشتريات، المالية</td><td>هل استلمنا ما دفعنا ثمنه؟ (وزن المورد مقابل البسكول)</td></tr>
                            <tr><td><span class="badge badge-ccp">C03/R-05</span></td><td>المطابقة الثلاثية للصرف</td><td>رقابي / يومي وأسبوعي</td><td>المخازن، التكاليف</td><td>أين يذهب الفرق؟ (منقول للموقع − مستهلك − مرتجع)</td></tr>
                            <tr><td><span class="badge badge-sop">R-01</span></td><td>الإنتاج اليومي الشامل</td><td>تشغيلي / 7:00 ص</td><td>مدير المصنع، المشرفون</td><td>هل أنجزنا خطة أمس بكل مرحلة؟ (بلوكات، م²، وتوقفات)</td></tr>
                            <tr><td><span class="badge badge-sop">R-02</span></td><td>تسليم فترة التشغيل</td><td>تشغيلي / كل فترة</td><td>مشرفو الفترات</td><td>ماذا يستلم المشرف القادم؟ (فاكيوم، فك مستحق، موقوف، LOTO)</td></tr>
                            <tr><td><span class="badge badge-sop">R-03</span></td><td>التوقفات وأسبابها المكودة</td><td>تشغيلي / يومي وأسبوعي</td><td>مدير المصنع، الصيانة</td><td>أين ضاعت الساعات ولماذا؟ (مخطط باريتو لأعطال كل ماكينة)</td></tr>
                            <tr><td><span class="badge badge-sop">R-09</span></td><td>أعمار الساحة وأهلية التقطيع</td><td>تشغيلي / يومي</td><td>المخطط، مشرف المناشير</td><td>أي بلوكات تقطع غدا؟ (ترتيب البلوكات حسب العمر والإفراج)</td></tr>
                            <tr><td><span class="badge badge-sop">R-10</span></td><td>شجرة حياة البلوك Genealogy</td><td>تدقيق / عند الطلب</td><td>الجودة، التكاليف</td><td>كيف أدى البلوك من الخلطة للعميل؟ (مكونات، دورة، ألواح)</td></tr>
                            <tr><td><span class="badge badge-sop">R-15</span></td><td>استثناءات البيانات اللحظية</td><td>رقابي / يومي</td><td>مسؤول الأصناف، المشرفون</td><td>أي بيانات شاذة تفسد التقارير؟ (أوامر بلا مخرج، استهلاك >300%)</td></tr>
                            <tr><td><span class="badge badge-sop">R-16</span></td><td>تكلفة أوامر الإنتاج والانحراف</td><td>مالي / شهري (يوم 3)</td><td>المالية، مدير المصنع</td><td>أين اختلف الفعلي عن المعياري؟ (انحراف سعر، كمية، ساعات)</td></tr>
                            <tr><td><span class="badge badge-sop">R-17</span></td><td>ربحية م² لكل موديل</td><td>إداري / شهري</td><td>الإدارة العليا، المبيعات</td><td>ما الموديلات التي تربح فعلا؟ (تفكيك تكلفة م² والهامش)</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="subsection-title">لوحات الإدارات (DB-01 إلى DB-09) وشاشات أرضية المصنع (DB-S1 إلى DB-S9)</h3>
                <div class="data-table-wrapper" style="margin-bottom:0.45rem;">
                    <table class="data-table" style="font-size:0.66rem;">
                        <thead>
                            <tr>
                                <th style="width: 8%;">الكود</th>
                                <th style="width: 20%;">اللوحة وموقع العرض</th>
                                <th style="width: 25%;">بطاقات المؤشرات والرقم الكبير</th>
                                <th style="width: 27%;">الرسوم البيانية الرئيسية</th>
                                <th style="width: 20%;">التنبيه الفوري الحرج</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><span class="badge badge-sop">DB-00</span></td><td>لوحة المصنع التنفيذية / 6:00 ص</td><td>F-01، F-05، F-02، F-09، F-08، F-10</td><td>شلال العائد الفاقد، تكلفة 10 موديلات، والمخزون</td><td>مؤشر تحول للأحمر، حادث سلامة</td></tr>
                            <tr><td><span class="badge badge-sop">DB-01</span></td><td>لوحة الإنتاج / كل ساعة</td><td>F-07، F-08، F-02، F-03، F-14</td><td>المخطط مقابل الفعلي، خريطة حرارية للتوقفات</td><td>توقف منشار > 30 دقيقة</td></tr>
                            <tr><td><span class="badge badge-sop">DB-02</span></td><td>لوحة التخطيط / يومي</td><td>PP-01 إلى PP-04، F-05</td><td>حمل المناشير لأسبوعين، البلوكات المفرجة المتوقعة</td><td>خامة حرجة تحت حد الطلب</td></tr>
                            <tr><td><span class="badge badge-sop">DB-04</span></td><td>لوحة المخازن / فوري</td><td>WH-01 إلى WH-04، S1-05</td><td>أيام التغطية لكل خامة، المطابقة الثلاثية للصرف</td><td>فرق صرف غير مفسر > 2%</td></tr>
                            <tr><td><span class="badge badge-sop">DB-05</span></td><td>لوحة الجودة / فوري</td><td>QC-01 إلى QC-04، F-03</td><td>باريتو العيوب، مخطط ضبط SPC للضغط واللمعان</td><td>فحص خارج الحدود أو شكوى</td></tr>
                            <tr><td><span class="badge badge-sop">DB-06</span></td><td>لوحة الصيانة / فوري</td><td>MT-01 إلى MT-04</td><td>MTBF و MTTR، تكلفة الصيانة، عمر الأسلحة المتبقي</td><td>عطل بمعدة عنق الزجاجة</td></tr>
                            <tr><td><span class="badge badge-sop">DB-08</span></td><td>لوحة التكاليف / إقفال</td><td>F-09، F-10، F-11، FI-01..04</td><td>شلال الانحراف من المعياري للفعلي، هامش الموديل</td><td>انحراف أمر إنتاج > 10%</td></tr>
                            <tr><td><span class="badge badge-sop">DB-S3</span></td><td>الميكسر / شاشة التحكم</td><td>بلوكات فترة التشغيل (فعلي / مخطط)</td><td>انحراف كل مكون في آخر دفعة مقابل التسامح</td><td>عد تنازلي للمهلة بين الدفعتين</td></tr>
                            <tr><td><span class="badge badge-sop">DB-S6</span></td><td>المعالجة / مكتب الساحة</td><td>بلوكات مفرجة جاهزة للتقطيع</td><td>خريطة الساحة ملونة بحسب العمر (&lt;14، 14–28، &gt;28)</td><td>بلوك تجاوز 28 يوما بالساحة</td></tr>
                            <tr><td><span class="badge badge-sop">DB-S7</span></td><td>التقطيع / بين المناشير</td><td>م² مقطوع في فترة التشغيل</td><td>OEE لكل منشار مفككا (توفر، أداء، جودة)، تآكل الشفرات</td><td>كسر > 5% في بلوك واحد</td></tr>
                            <tr><td><span class="badge badge-sop">DB-S8</span></td><td>التلميع / نهاية الخط</td><td>عائد FPY لفترة التشغيل الحالية</td><td>باريتو العيوب اليومية، منحنى ضبط اللمعان GU</td><td>لمعان خارج المدى لـ 3 ألواح</td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Closing Corporate Details -->
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.75rem 1rem; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong style="color:var(--primary); font-size:0.82rem; display:block;">ABC Counsel — Specialized Consulting Company</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted); line-height:1.4; display:block;">
                            2May Building Elnasr Road, Naser City, Cairo<br>
                            Website: <a href="https://www.abccounsel.com" target="_blank" style="color:var(--secondary); text-decoration:none;">www.abccounsel.com</a> | Email: info@abccounsel.com
                        </span>
                    </div>
                    <div style="text-align:left; direction:ltr;">
                        <span style="font-size:0.68rem; color:#94a3b8; display:block;">Target Operating Model Designed for</span>
                        <strong style="font-size:0.8rem; color:var(--terrazzo-accent);">Trazoo Terrazzo Factory</strong>
                        <span style="font-size:0.66rem; color:#64748b; display:block;">Version v0.3 — Management Review Draft</span>
                    </div>
                </div>
            </main>

            <footer class="page-footer">
                <span>وثيقة الوضع المستهدف (To-Be) — مصنع Trazoo</span>
                <span class="status-tag">Dashboards & Reports</span>
                <span>الصفحة 53 من 53 (نهاية الوثيقة)</span>
            </footer>
        </section>
    `;
}
