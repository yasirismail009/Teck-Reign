# AI Financial Analysis case study images

Drop these PNG files into `public/case-studies/financial_analysis_ai/` (exact names):

| File | What to show | Size |
|------|----------------|------|
| `financial-analysis-cover.png` | Hero cover | 1600×900+ |
| `financial-analysis-dashboard.png` | Finance KPI dashboard | 1600×900 |
| `financial-analysis-statements.png` | Statements / ledger analysis | 1600×900 |
| `financial-analysis-forecast.png` | Trends / forecast / anomalies | 1600×900 |
| `financial-analysis-reports.png` | AI narrative report | 1600×900 |

After adding files, update `src/app/data/caseStudies.js` id **34**:

```js
image: "/case-studies/financial_analysis_ai/financial-analysis-cover.png",
detail_images: [
  "/case-studies/financial_analysis_ai/financial-analysis-cover.png",
  "/case-studies/financial_analysis_ai/financial-analysis-dashboard.png",
  "/case-studies/financial_analysis_ai/financial-analysis-statements.png",
  "/case-studies/financial_analysis_ai/financial-analysis-forecast.png",
  "/case-studies/financial_analysis_ai/financial-analysis-reports.png",
],
```

Page: `/case-studies/34`
