import fs from 'fs';

let txt = fs.readFileSync('src_pages/pages1_5.js', 'utf8');

txt = txt.replace('تنظيف الكسارة ومؤشرات S2', 'تشغيل الـ 2 كسارة، تنظيف الكسارات ومؤشرات S2');
txt = txt.replace('الأسئلة OQ-01 إلى OQ-29', 'الأسئلة المفتوحة (28 سؤالاً بعد حسم الـ 2 كسارة)');
txt = txt.replace('<td>سعة سيلو الأسمنت</td>', '<td>عدد وسعة سيلوهات الأسمنت</td>');
txt = txt.replace('3 سيلوهات كمواقع تخزين مستقلة [As-Is]؛ السعة لم ترد بالوضع الحالي وتحدد بالمسح الميداني [TBC].', 'معتمد رسمياً وجود 3 سايلوهات (صوامع) كمواقع تخزين مستقلة ومكودة للأسمنت والمواد السائبة [As-Is محسوم]؛ والسعة تحدد بالمعايرة الميدانية.');

// Replace badge for A-01
const oldA01Row = `<tr>
                                <td><span class="badge badge-as-is">A-01</span></td>
                                <td>عدد وسعة سيلوهات الأسمنت</td>
                                <td>معتمد رسمياً وجود 3 سايلوهات (صوامع) كمواقع تخزين مستقلة ومكودة للأسمنت والمواد السائبة [As-Is محسوم]؛ والسعة تحدد بالمعايرة الميدانية.</td>
                                <td style="text-align:center;"><span class="badge badge-tbc">[TBC] يحتاج تأكيد</span></td>
                            </tr>`;

const newA01Row = `<tr>
                                <td><span class="badge badge-proposed">A-01</span></td>
                                <td>عدد وسعة سيلوهات الأسمنت</td>
                                <td>معتمد رسمياً وجود 3 سايلوهات (صوامع) كمواقع تخزين مستقلة ومكودة للأسمنت والمواد السائبة [As-Is محسوم]؛ والسعة تحدد بالمعايرة الميدانية.</td>
                                <td style="text-align:center;"><span class="badge badge-proposed">[Proposed] محسوم (3 سايلوهات)</span></td>
                            </tr>`;

txt = txt.replace(oldA01Row, newA01Row);

fs.writeFileSync('src_pages/pages1_5.js', txt, 'utf8');
console.log('Successfully updated src_pages/pages1_5.js');
