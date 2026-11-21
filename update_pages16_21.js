import fs from 'fs';

let txt = fs.readFileSync('src_pages/pages16_21.js', 'utf8');

// 1. Section 16 (Page 19)
txt = txt.replace('<td>سجل تغيير الكسارة (Changeover)</td>', '<td>سجل تغيير الـ 2 كسارة (Changeover)</td>');
txt = txt.replace('<td>قائمة فحص تغيير اللون وتنظيف الكسارات</td>', '<td>قائمة فحص تغيير اللون وتنظيف الـ 2 كسارة</td>');

// 2. Section 18 (Page 20) Traceability T4
const oldT4 = `<tr>
                                <td>T4</td>
                                <td>التكسير</td>
                                <td>2 كسارات مخصصة للاستخدام (ص8 متعارض مع ص13)</td>
                                <td>مسار تكسير مخصص لعائلة لون والعدد [TBC]</td>
                                <td>منع التلوث اللوني</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[As-Is] [TBC]</span></td>
                            </tr>`;

const newT4 = `<tr>
                                <td>T4</td>
                                <td>التكسير</td>
                                <td>2 كسارات مخصصة للاستخدام (محسوم بقرار الإدارة)</td>
                                <td>مسار تكسير مخصص لعائلة لون معتمد على الـ 2 كسارة بالمصنع</td>
                                <td>منع التلوث اللوني واستقرار تدرج الحبيبات</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[محسوم: 2 كسارة]</span></td>
                            </tr>`;

txt = txt.replace(oldT4, newT4);

// 3. Section 21 Implementation Roadmap (Page 22)
txt = txt.replace(
    'حسم الأسئلة المفتوحة (القسم 22)، تثبيت الأدوار، وعدد الكسارات وسعة السيلو',
    'حسم الأسئلة المفتوحة (القسم 22)، تثبيت الأدوار (تم حسم الـ 2 كسارة والـ 3 سايلوهات بقرار الإدارة)'
);

// 4. Section 22 Open Questions (Page 22)
txt = txt.replace(
    '<span>22. نقاط مفتوحة وقرارات مطلوبة لحسم التصميم (OQ-01 إلى OQ-29)</span>',
    '<span>22. نقاط مفتوحة وقرارات مطلوبة لحسم التصميم (28 سؤالاً بعد حسم الكسارات والسايلوهات)</span>'
);

// Remove OQ-01 row
const oq01Row = `<tr><td><span class="badge badge-tbc">OQ-01</span></td><td>عدد الكسارات وطاقتها التشغيلية الفعلية</td><td>مسار التكسير وتخطيط الصيانة</td><td>إدارة Trazoo</td></tr>`;
txt = txt.replace(oq01Row + '\n', '');
txt = txt.replace(oq01Row, '');

// Update OQ-04 row
const oldOQ04 = `<tr><td><span class="badge badge-tbc">OQ-04</span></td><td>متوسط وزن الجونية وسعة سيلوهات الأسمنت</td><td>مواقع التخزين والأرصدة</td><td>إدارة Trazoo (قياس ميداني)</td></tr>`;
const newOQ04 = `<tr><td><span class="badge badge-tbc">OQ-04</span></td><td>متوسط وزن الجونية والمعايرة الميدانية لسعة الـ 3 سايلوهات المعتمدة</td><td>مواقع التخزين والأرصدة للـ 3 سايلوهات</td><td>إدارة Trazoo (قياس ميداني)</td></tr>`;
txt = txt.replace(oldOQ04, newOQ04);

// 5. Appendix A (Page 23)
txt = txt.replace(
    'مناشير ضخمة وكسارات وميكسرات: أي تدخل بدون عزل طاقة مميت',
    'مناشير ضخمة و 2 كسارة وميكسرات: أي تدخل بدون عزل طاقة مميت'
);
txt = txt.replace(
    'إلزامي على الكسارات، الميكسر، الناقلات، الفاكيوم، المناشير، ومكبس الفلتر.',
    'إلزامي على الـ 2 كسارة، الميكسر، الـ 3 سايلوهات، الناقلات، الفاكيوم، المناشير، ومكبس الفلتر.'
);
txt = txt.replace(
    '<td>RM-03 تفريغ سيلوهات الأسمنت</td>',
    '<td>RM-03 تفريغ الـ 3 سايلوهات للأسمنت</td>'
);
txt = txt.replace(
    '<td>CR-01 تكسير وتصنيف حجمي</td><td>CR-02 تغيير اللون وتنظيف الكسارة</td>',
    '<td>CR-01 تكسير وتصنيف حجمي بالـ 2 كسارة</td><td>CR-02 تغيير اللون وتنظيف الـ 2 كسارة</td>'
);

// 6. Appendix A (Page 24)
txt = txt.replace(
    '<tr><td><span class="badge badge-sop">RM-03</span></td><td>تفريغ سيلوهات الأسمنت</td><td>التحقق من نوع الأسمنت (أبيض/رمادي) وقراءة الليفل قبل التفريغ وتوثيق الدفعة.</td><td>ممنوع التفريغ في سيلو مختلف، وممنوع الاستخدام قبل اعتماد الفحص.</td></tr>',
    '<tr><td><span class="badge badge-sop">RM-03</span></td><td>تفريغ الـ 3 سايلوهات للأسمنت</td><td>التحقق من نوع الأسمنت (أبيض/رمادي) وربطه بالسايلو المخصص (سايلو 1، سايلو 2، سايلو 3) وقراءة الليفل قبل التفريغ وتوثيق الدفعة.</td><td>ممنوع التفريغ في سايلو مختلف، وممنوع الاستخدام قبل اعتماد الفحص.</td></tr>'
);
txt = txt.replace(
    '<tr><td><span class="badge badge-sop">CR-02</span></td><td>تغيير اللون في الكسارة</td><td>تفريغ الكسارة، نفخ بالهواء، وتشغيل كمية غسيل من اللون الجديد تعزل كمردود.</td><td>توقيع قائمة فحص التغيير من المشرف والترتيب دائما من الفاتح للغامق.</td></tr>',
    '<tr><td><span class="badge badge-sop">CR-02</span></td><td>تغيير اللون في الـ 2 كسارة</td><td>تفريغ الـ 2 كسارة، نفخ بالهواء، وتشغيل كمية غسيل من اللون الجديد تعزل كمردود.</td><td>توقيع قائمة فحص التغيير من المشرف والترتيب دائما من الفاتح للغامق.</td></tr>'
);

// 7. Appendix B (Page 25)
txt = txt.replace('<td>S2-04 إنتاجية الكسارة</td><td>S2-05 توفر الكسارات</td>', '<td>S2-04 إنتاجية الـ 2 كسارة</td><td>S2-05 توفر وجاهزية الـ 2 كسارة</td>');

fs.writeFileSync('src_pages/pages16_21.js', txt, 'utf8');
console.log('Successfully updated src_pages/pages16_21.js');
