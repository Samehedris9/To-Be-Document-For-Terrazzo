// src_pages/styles.js - Executive consulting design system for Trazoo To-Be Document v0.3
// Features: Large typography, wide generous spacing, dedicated flowcharts with Accept/Reject branches, print-ready A4.

export function getHead() {
    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>وثيقة الوضع المستهدف (To-Be Document) — مصنع ترازو Trazoo | ABC Counsel — إصدار v0.3</title>

    <!-- Google Fonts: Alexandria & Cairo -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800;900&family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">

    <style>
        ${getCSS()}
    </style>
</head>
<body>
    <!-- Floating Top Toolbar with Print, TOC & Interactive Filters -->
    <header class="toolbar">
        <div class="toolbar-brand">
            <div class="brand-pill">
                <img src="abc_logo.png" alt="ABC Counsel" style="height: 28px; width: auto; display: block; object-fit: contain;">
            </div>
            <div>
                <h1>وثيقة الوضع المستهدف (To-Be Document) — إصدار v0.3</h1>
                <span style="font-size:0.75rem; color:#64748b; font-weight:600;">مشروع إعادة هندسة العمليات التشغيلية — مصنع Trazoo</span>
            </div>
            <span class="status-pill-head">مسودة لمراجعة الإدارة</span>
        </div>

        <div class="toolbar-actions">
            <!-- Filter Pills -->
            <div class="filter-group">
                <button class="filter-btn active" onclick="filterType('all', this)">الكل</button>
                <button class="filter-btn" onclick="filterType('as-is', this)">[As-Is] وضع حالي</button>
                <button class="filter-btn" onclick="filterType('proposed', this)">[Proposed] مقترح</button>
                <button class="filter-btn" onclick="filterType('tbc', this)">[TBC] يحتاج تأكيد</button>
                <button class="filter-btn" onclick="filterType('sop', this)">📋 إجراءات (SOPs)</button>
                <button class="filter-btn" onclick="filterType('kpi', this)">📊 مؤشرات أداء (KPIs)</button>
                <button class="filter-btn" onclick="filterType('oq', this)">❓ أسئلة مفتوحة (OQ)</button>
            </div>

            <!-- Action Buttons -->
            <button class="btn btn-outline" onclick="scrollToTOC()">
                📋 جدول المحتويات
            </button>
            <button class="btn btn-primary" onclick="window.print()">
                🖨️ طباعة / تصدير PDF
            </button>
        </div>
    </header>

    <div class="doc-wrapper">`;
}

export function getCSS() {
    return `
        :root {
            --primary: #0f172a;
            --primary-accent: #1e293b;
            --secondary: #0284c7;
            --secondary-hover: #0369a1;
            --secondary-light: #e0f2fe;
            --terrazzo-accent: #b45309;
            --accent-green: #059669;
            --accent-amber: #d97706;
            --accent-rose: #e11d48;
            --accent-purple: #7c3aed;
            --accent-cyan: #0891b2;
            --text-dark: #1e293b;
            --text-muted: #64748b;
            --bg-paper: #ffffff;
            --bg-light: #f8fafc;
            --border-color: #cbd5e1;
            --border-light: #e2e8f0;
            --shadow-paper: 0 16px 36px -8px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.04);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Alexandria', 'Cairo', sans-serif;
            background-color: #e2e8f0;
            color: var(--text-dark);
            line-height: 1.72;
            font-size: 15.5px;
            -webkit-font-smoothing: antialiased;
        }

        /* Top Interactive Toolbar */
        .toolbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.98);
            border-bottom: 1px solid var(--border-color);
            padding: 0.85rem 2.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 18px rgba(15, 23, 42, 0.08);
            backdrop-filter: blur(12px);
        }

        .toolbar-brand {
            display: flex;
            align-items: center;
            gap: 1.15rem;
        }

        .brand-pill {
            background: #ffffff;
            border: 1px solid var(--border-color);
            padding: 6px 14px;
            display: inline-flex;
            align-items: center;
            border-radius: 10px;
        }

        .toolbar-brand h1 {
            font-size: 1.12rem;
            font-weight: 800;
            color: var(--primary);
            line-height: 1.25;
        }

        .status-pill-head {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--terrazzo-accent);
            background: #fffbeb;
            padding: 0.25rem 0.75rem;
            border-radius: 6px;
            border: 1px solid #fde68a;
        }

        .toolbar-actions {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
        }

        .filter-group {
            display: flex;
            gap: 0.35rem;
            background: #f1f5f9;
            padding: 0.3rem;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }

        .filter-btn {
            padding: 0.38rem 0.75rem;
            border: none;
            background: transparent;
            font-family: inherit;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-muted);
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.18s ease-in-out;
        }

        .filter-btn.active,
        .filter-btn:hover {
            background: white;
            color: var(--primary);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12);
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.55rem;
            padding: 0.5rem 1.15rem;
            font-family: inherit;
            font-size: 0.86rem;
            font-weight: 700;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            border: none;
        }

        .btn-primary {
            background-color: var(--secondary);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--secondary-hover);
            box-shadow: 0 4px 16px rgba(2, 132, 199, 0.32);
        }

        .btn-outline {
            background: white;
            border: 1.5px solid var(--border-color);
            color: var(--text-dark);
        }

        .btn-outline:hover {
            background-color: #f8fafc;
        }

        /* Document Wrapper */
        .doc-wrapper {
            max-width: 1160px;
            margin: 2.25rem auto;
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        /* A4 Page Styling with Luxurious Margins & Clear Separation */
        .a4-page {
            background: var(--bg-paper);
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            padding: 16mm 20mm 16mm 20mm;
            box-shadow: var(--shadow-paper);
            position: relative;
            box-sizing: border-box;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: visible;
        }

        /* Page Headers & Footers */
        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2.5px solid var(--primary);
            padding-bottom: 0.65rem;
            margin-bottom: 1.15rem;
            flex-shrink: 0;
        }

        .page-header-logos {
            display: flex;
            align-items: center;
            gap: 1.25rem;
        }

        .header-logo-abc {
            height: 38px;
            width: auto;
            object-fit: contain;
            display: block;
        }

        .doc-meta-header {
            text-align: left;
            direction: ltr;
        }

        .doc-meta-header strong {
            display: block;
            font-size: 0.88rem;
            color: var(--primary);
            font-weight: 800;
        }

        .doc-meta-header span {
            font-size: 0.78rem;
            color: var(--text-muted);
        }

        .page-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1.5px solid var(--border-color);
            padding-top: 0.65rem;
            margin-top: auto;
            font-size: 0.8rem;
            color: var(--text-muted);
            flex-shrink: 0;
        }

        .page-footer .status-tag {
            background: #fffbeb;
            color: #b45309;
            padding: 0.2rem 0.65rem;
            border-radius: 5px;
            font-weight: 700;
            font-size: 0.75rem;
            border: 1px solid #fde68a;
        }

        .page-content {
            flex: 1 0 auto;
        }

        /* Headings & Section Styling */
        h2.section-title {
            font-size: 1.35rem;
            font-weight: 800;
            color: var(--primary);
            border-right: 6px solid var(--secondary);
            padding-right: 0.85rem;
            margin-bottom: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        h3.subsection-title {
            font-size: 1.12rem;
            font-weight: 800;
            color: #1e293b;
            margin: 1.15rem 0 0.6rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        h3.subsection-title::before {
            content: "■";
            color: var(--secondary);
            font-size: 0.9rem;
        }

        p, li {
            font-size: 0.92rem;
            color: #334155;
            line-height: 1.72;
        }

        ul, ol {
            padding-right: 1.5rem;
            margin-bottom: 0.85rem;
        }

        li {
            margin-bottom: 0.4rem;
        }

        /* High Visibility Badges & Official Tags */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
            padding: 0.2rem 0.6rem;
            border-radius: 5px;
            font-size: 0.78rem;
            font-weight: 700;
            line-height: 1.3;
            vertical-align: middle;
        }

        .badge-as-is {
            background-color: #f1f5f9;
            color: #334155;
            border: 1px solid #cbd5e1;
        }

        .badge-proposed {
            background-color: #d1fae5;
            color: #065f46;
            border: 1px solid #6ee7b7;
        }

        .badge-tbc {
            background-color: #fffbeb;
            color: #b45309;
            border: 1px solid #fde68a;
        }

        .badge-sop {
            background-color: #e0f2fe;
            color: #0369a1;
            border: 1px solid #7dd3fc;
        }

        .badge-kpi {
            background-color: #f3e8ff;
            color: #7e22ce;
            border: 1px solid #d8b4fe;
        }

        .badge-ccp {
            background-color: #fef3c7;
            color: #92400e;
            border: 1px solid #f59e0b;
        }

        .badge-risk {
            background-color: #fee2e2;
            color: #991b1b;
            border: 1px solid #fca5a5;
        }

        .badge-priority-high {
            background-color: #fee2e2;
            color: #991b1b;
            border: 1px solid #f87171;
            font-weight: 800;
        }

        .badge-priority-med {
            background-color: #fef3c7;
            color: #92400e;
            border: 1px solid #fbbf24;
            font-weight: 800;
        }

        .badge-priority-low {
            background-color: #f1f5f9;
            color: #475569;
            border: 1px solid #cbd5e1;
        }

        /* Content Boxes with Generous Padding */
        .callout-box {
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-right: 5px solid var(--secondary);
            border-radius: 10px;
            padding: 0.95rem 1.35rem;
            margin-bottom: 1rem;
            box-shadow: 0 2px 7px rgba(0, 0, 0, 0.03);
        }

        .callout-box.warning { border-right-color: #f59e0b; background: #fffdf5; }
        .callout-box.danger { border-right-color: var(--accent-rose); background: #fff8f8; }
        .callout-box.success { border-right-color: var(--accent-green); background: #f8fdfa; }
        .callout-box.info { border-right-color: var(--secondary); background: #f0f9ff; }
        .callout-box.purple { border-right-color: var(--accent-purple); background: #faf5ff; }

        .callout-title {
            font-weight: 800;
            font-size: 1.02rem;
            margin-bottom: 0.45rem;
            display: flex;
            align-items: center;
            gap: 0.55rem;
        }

        /* Tables Styling with Readable Row Height and Padding */
        .data-table-wrapper {
            margin: 0.85rem 0 1.25rem 0;
            border-radius: 10px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.86rem;
            text-align: right;
        }

        .data-table thead th {
            background: #0f172a;
            color: #ffffff;
            padding: 0.65rem 0.95rem;
            font-weight: 700;
            border-bottom: 2px solid var(--border-color);
            font-size: 0.85rem;
            line-height: 1.45;
        }

        .data-table tbody tr {
            border-bottom: 1px solid #e2e8f0;
            transition: background 0.15s;
        }

        .data-table tbody tr:nth-child(even) { background-color: #f8fafc; }
        .data-table tbody tr:hover { background-color: #f1f5f9; }

        .data-table td {
            padding: 0.6rem 0.95rem;
            vertical-align: middle;
            color: #334155;
            line-height: 1.55;
        }

        .data-table td strong { color: var(--primary); }

        /* The 5 Core Shifts Large Executive Cards */
        .shift-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 0.85rem;
            margin: 1rem 0 1.35rem 0;
        }

        .shift-card {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-top: 5px solid var(--secondary);
            border-radius: 10px;
            padding: 0.95rem 0.85rem;
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
            box-shadow: 0 3px 8px rgba(0,0,0,0.04);
        }

        .shift-card:nth-child(1) { border-top-color: #0284c7; }
        .shift-card:nth-child(2) { border-top-color: #7c3aed; }
        .shift-card:nth-child(3) { border-top-color: #059669; }
        .shift-card:nth-child(4) { border-top-color: #d97706; }
        .shift-card:nth-child(5) { border-top-color: #e11d48; }

        .shift-card-title {
            font-size: 0.92rem;
            font-weight: 800;
            color: var(--primary);
        }

        .shift-from {
            font-size: 0.78rem;
            color: #991b1b;
            background: #fee2e2;
            padding: 0.25rem 0.5rem;
            border-radius: 5px;
            font-weight: 600;
        }

        .shift-arrow {
            font-size: 0.9rem;
            color: var(--secondary);
            text-align: center;
            font-weight: 900;
        }

        .shift-to {
            font-size: 0.78rem;
            color: #065f46;
            background: #d1fae5;
            padding: 0.25rem 0.5rem;
            border-radius: 5px;
            font-weight: 700;
        }

        .shift-desc {
            font-size: 0.78rem;
            color: #475569;
            line-height: 1.5;
        }

        /* ================= PRO DEDICATED PROCESS FLOWCHARTS ================= */
        .process-flowchart-box {
            background: #ffffff;
            border: 1.5px solid var(--border-color);
            border-radius: 12px;
            padding: 1.25rem 1.5rem;
            margin: 1.15rem 0 1.45rem 0;
            box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
            border-top: 5px solid var(--secondary);
        }

        .pflow-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.15rem;
            padding-bottom: 0.65rem;
            border-bottom: 1px solid var(--border-light);
        }

        .pflow-title {
            font-size: 1.05rem;
            font-weight: 800;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 0.65rem;
        }

        .pflow-diagram {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.65rem;
            padding: 0.5rem 0;
        }

        .pflow-step {
            width: 100%;
            max-width: 480px;
            background: #f8fafc;
            border: 1.5px solid #cbd5e1;
            border-radius: 8px;
            padding: 0.55rem 1rem;
            text-align: center;
            font-size: 0.88rem;
            font-weight: 700;
            color: #1e293b;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
            position: relative;
        }

        .pflow-arrow {
            font-size: 0.95rem;
            color: var(--secondary);
            font-weight: 900;
            line-height: 1;
        }

        .pflow-decision {
            width: 100%;
            max-width: 520px;
            background: #fffbeb;
            border: 2px solid #f59e0b;
            border-radius: 10px;
            padding: 0.65rem 1.15rem;
            text-align: center;
            font-size: 0.9rem;
            font-weight: 800;
            color: #92400e;
            box-shadow: 0 2px 6px rgba(245, 158, 11, 0.12);
        }

        .pflow-branches {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
            width: 100%;
            max-width: 650px;
            margin-top: 0.45rem;
        }

        .pflow-branch-accept {
            background: #ecfdf5;
            border: 2px solid #10b981;
            border-radius: 8px;
            padding: 0.75rem 0.95rem;
            text-align: center;
            box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);
        }

        .pflow-branch-accept-title {
            color: #065f46;
            font-size: 0.85rem;
            font-weight: 800;
            margin-bottom: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
        }

        .pflow-branch-accept-desc {
            font-size: 0.82rem;
            color: #047857;
            font-weight: 600;
            line-height: 1.45;
        }

        .pflow-branch-reject {
            background: #fff1f2;
            border: 2px solid #f43f5e;
            border-radius: 8px;
            padding: 0.75rem 0.95rem;
            text-align: center;
            box-shadow: 0 2px 6px rgba(244, 63, 94, 0.08);
        }

        .pflow-branch-reject-title {
            color: #9f1239;
            font-size: 0.85rem;
            font-weight: 800;
            margin-bottom: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
        }

        .pflow-branch-reject-desc {
            font-size: 0.82rem;
            color: #be123c;
            font-weight: 600;
            line-height: 1.45;
        }

        /* SOP Card with Generous Margins */
        .sop-card {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            padding: 1rem 1.4rem;
            margin-bottom: 1.15rem;
            border-right: 5px solid var(--accent-cyan);
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .sop-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.65rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e2e8f0;
        }

        .sop-title {
            font-size: 1.02rem;
            font-weight: 800;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 0.55rem;
        }

        .sop-meta-pills {
            display: flex;
            gap: 0.5rem;
            font-size: 0.78rem;
            color: #475569;
        }

        .sop-meta-pills span {
            background: #f1f5f9;
            padding: 0.2rem 0.55rem;
            border-radius: 5px;
            border: 1px solid #e2e8f0;
            font-weight: 600;
        }

        .sop-body ol {
            padding-right: 1.5rem;
            margin-bottom: 0.65rem;
        }

        .sop-body li {
            font-size: 0.9rem;
            margin-bottom: 0.35rem;
            line-height: 1.62;
        }

        .sop-footer {
            font-size: 0.82rem;
            color: #475569;
            background: #f8fafc;
            padding: 0.5rem 0.85rem;
            border-radius: 6px;
            margin-top: 0.6rem;
            border: 1px solid #e2e8f0;
            line-height: 1.55;
        }

        /* Cover Page Specific Styles */
        .cover-page {
            position: relative;
            padding: 3rem 3.5rem !important;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: #ffffff;
            border-top: 10px solid var(--secondary);
            text-align: center;
            box-sizing: border-box;
        }

        .cover-bg-tech {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }

        .cover-hero-center {
            position: relative;
            z-index: 2;
            margin: auto 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .cover-badge-top {
            display: inline-block;
            background: #e0f2fe;
            color: var(--secondary);
            padding: 0.5rem 1.85rem;
            border-radius: 9999px;
            font-weight: 800;
            font-size: 0.96rem;
            letter-spacing: 0.5px;
            margin-bottom: 1.75rem;
            border: 1px solid #bae6fd;
        }

        .cover-main-title {
            font-size: 2.65rem;
            font-weight: 900;
            color: var(--primary);
            line-height: 1.3;
            margin-bottom: 0.85rem;
        }

        .cover-main-subtitle {
            font-size: 1.35rem;
            font-weight: 700;
            color: var(--terrazzo-accent);
            margin-bottom: 2.25rem;
        }

        .cover-details-card {
            position: relative;
            z-index: 2;
            background: rgba(248, 250, 252, 0.98);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 1.65rem 2.25rem;
            margin-bottom: 1.65rem;
            direction: rtl;
            text-align: right;
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
            backdrop-filter: blur(6px);
        }

        .cover-details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem 2.25rem;
        }

        .cover-detail-item {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .cover-detail-label {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .cover-detail-value {
            font-size: 0.98rem;
            font-weight: 800;
            color: var(--primary);
        }

        .cover-logos-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.85rem;
            position: relative;
            z-index: 2;
        }

        .cover-partner-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.65rem;
            text-align: center;
        }

        .cover-logo-abc {
            height: 76px;
            width: auto;
            max-width: 360px;
            object-fit: contain;
            display: block;
        }

        .cover-brand-sub {
            font-size: 0.88rem;
            color: var(--text-muted);
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        /* Sign-off Sheet Box */
        .signoff-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.65rem;
            margin-top: 1.25rem;
        }

        .signoff-card {
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            box-shadow: 0 3px 8px rgba(0,0,0,0.03);
        }

        .signoff-card-title {
            font-weight: 800;
            font-size: 1.05rem;
            color: var(--primary);
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.55rem;
        }

        .signoff-field {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .signoff-label {
            font-size: 0.82rem;
            color: var(--text-muted);
            font-weight: 700;
        }

        .signoff-line {
            height: 42px;
            border-bottom: 1.5px dashed #cbd5e1;
        }

        /* Interactive Table of Contents */
        .toc-row {
            transition: all 0.15s ease-in-out;
            cursor: pointer;
        }

        .toc-row:hover {
            background-color: #f0f9ff !important;
            transform: translateX(-3px);
        }

        .toc-link {
            color: var(--primary);
            text-decoration: none;
            display: block;
            font-weight: 700;
        }

        .toc-row:hover .toc-link {
            color: var(--secondary);
        }

        .toc-page-pill {
            display: inline-block;
            padding: 0.22rem 0.65rem;
            background: #e2e8f0;
            color: #0f172a;
            border-radius: 6px;
            font-weight: 800;
            font-size: 0.82rem;
            transition: all 0.15s;
        }

        .toc-row:hover .toc-page-pill {
            background: var(--secondary);
            color: #ffffff;
        }

        /* Perfect Print Rules */
        @media print {
            html, body {
                width: 210mm !important;
                height: auto !important;
                margin: 0 !important;
                padding: 0 !important;
                background: #ffffff !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            .toolbar { display: none !important; }

            .doc-wrapper {
                width: 210mm !important;
                max-width: 210mm !important;
                margin: 0 !important;
                padding: 0 !important;
                display: block !important;
            }

            .a4-page {
                width: 210mm !important;
                min-height: 297mm !important;
                height: auto !important;
                max-height: none !important;
                margin: 0 !important;
                padding: 14mm 16mm 14mm 16mm !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
                box-sizing: border-box !important;
                page-break-after: always !important;
                break-after: page !important;
                page-break-inside: auto !important;
                break-inside: auto !important;
                overflow: visible !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: space-between !important;
            }

            .a4-page:first-child { break-before: avoid !important; }
            .a4-page:last-child { break-after: avoid !important; }

            .page-header { flex-shrink: 0 !important; margin-bottom: 0.65rem !important; }
            .page-footer { flex-shrink: 0 !important; margin-top: auto !important; padding-top: 0.5rem !important; }
            .page-content { flex: 1 0 auto !important; }

            .data-table-wrapper, .callout-box, .cover-details-card, .signoff-card, .sop-card, .shift-card, .process-flowchart-box {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
            }

            @page {
                size: 210mm 297mm;
                margin: 0;
            }
        }
    `;
}

export function getScripts() {
    return `
    <!-- Interactive Script for Filters and TOC Scroll -->
    <script>
        function filterType(type, btnElement) {
            document.querySelectorAll('.filter-btn').forEach(function (b) {
                b.classList.remove('active');
            });
            if (btnElement) btnElement.classList.add('active');

            var elements = document.querySelectorAll('.data-table tbody tr, .sop-card, .callout-box, .shift-card, .process-flowchart-box');

            if (type === 'all') {
                elements.forEach(function (el) { el.style.display = ""; });
                return;
            }

            elements.forEach(function (el) {
                var text = el.textContent || el.innerText;
                var show = false;

                if (type === 'as-is' && (text.indexOf('[As-Is]') > -1 || text.indexOf('As-Is') > -1)) {
                    show = true;
                } else if (type === 'proposed' && (text.indexOf('[Proposed]') > -1 || text.indexOf('Proposed') > -1)) {
                    show = true;
                } else if (type === 'tbc' && (text.indexOf('[TBC]') > -1 || text.indexOf('TBC') > -1)) {
                    show = true;
                } else if (type === 'sop' && (text.indexOf('SOP-') > -1 || text.indexOf('إجراء') > -1)) {
                    show = true;
                } else if (type === 'kpi' && (text.indexOf('مؤشر') > -1 || text.indexOf('F-') > -1 || text.indexOf('S1-') > -1 || text.indexOf('S2-') > -1 || text.indexOf('S3-') > -1 || text.indexOf('S4-') > -1 || text.indexOf('S5-') > -1 || text.indexOf('S6-') > -1 || text.indexOf('S7-') > -1 || text.indexOf('S8-') > -1 || text.indexOf('S9-') > -1 || text.indexOf('OP-') > -1)) {
                    show = true;
                } else if (type === 'oq' && (text.indexOf('OQ-') > -1 || text.indexOf('سؤال مفتوح') > -1 || text.indexOf('نقاط مفتوحة') > -1)) {
                    show = true;
                }

                el.style.display = show ? "" : "none";
            });
        }

        function scrollToPage(id) {
            var el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function scrollToTOC() {
            var toc = document.getElementById('page-3');
            if (toc) {
                toc.scrollIntoView({ behavior: 'smooth' });
            }
        }
    </script>
</body>
</html>`;
}
