# KAMPALO case study images

Drop these PNG files into `public/case-studies/kampalo/` (exact names):

| File | What to show | Size |
|------|----------------|------|
| `kampalo-cover.png` | Hero / product cover | 1600×900+ |
| `kampalo-dashboard.png` | Main analytics dashboard | 1600×900 |
| `kampalo-campaigns.png` | Campaigns / channel performance | 1600×900 |
| `kampalo-insights.png` | AI insights / ROAS–CPA metrics | 1600×900 |
| `kampalo-integrations.png` | Google Ads / Meta integrations | 1600×900 |

After adding files, update `src/app/data/caseStudies.js` id **32**:

```js
image: "/case-studies/kampalo/kampalo-cover.png",
detail_images: [
  "/case-studies/kampalo/kampalo-cover.png",
  "/case-studies/kampalo/kampalo-dashboard.png",
  "/case-studies/kampalo/kampalo-campaigns.png",
  "/case-studies/kampalo/kampalo-insights.png",
  "/case-studies/kampalo/kampalo-integrations.png",
],
```

Page: `/case-studies/32`
