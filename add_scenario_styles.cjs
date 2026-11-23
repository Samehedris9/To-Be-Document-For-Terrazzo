const fs = require('fs');

let styles = fs.readFileSync('src_pages/styles.js', 'utf8');

const scenarioStyles = `
        /* Flowchart Scenarios Box */
        .flowchart-scenarios {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
            width: 100%;
            margin-top: 0.35rem;
            text-align: right;
            direction: rtl;
            box-sizing: border-box;
        }

        .scenario-card {
            padding: 0.35rem 0.55rem;
            border-radius: 5px;
            font-size: 0.69rem;
            line-height: 1.4;
            box-sizing: border-box;
        }

        .scenario-card.accept {
            background: #f0fdf4;
            border: 1px solid #86efac;
            border-right: 3.5px solid #16a34a;
        }

        .scenario-card.reject {
            background: #fef2f2;
            border: 1px solid #fca5a5;
            border-right: 3.5px solid #dc2626;
        }

        .scenario-title {
            font-weight: 700;
            font-size: 0.73rem;
            margin-bottom: 0.2rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .scenario-title.accept {
            color: #15803d;
        }

        .scenario-title.reject {
            color: #b91c1c;
        }

        .scenario-text {
            color: #1e293b;
            margin: 0;
            font-size: 0.68rem;
        }
`;

if (!styles.includes('flowchart-scenarios')) {
  styles = styles.replace('.flowchart-legend {', scenarioStyles + '\n        .flowchart-legend {');
  fs.writeFileSync('src_pages/styles.js', styles, 'utf8');
  console.log('Added scenario styles to styles.js');
} else {
  console.log('Styles already exist in styles.js');
}
