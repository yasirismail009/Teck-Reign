# TerraSkyAI case study images

Product: **TerraSkyAI** — AI precision agriculture (drone flights → detections, counts, yield).  
Live: https://www.terraskyai.com/  
Case study: `/case-studies/35`

Drop PNG files here (suggested names):

| File | What to show | Size |
|------|----------------|------|
| `terraskyai (1).png` | **Main cover** (hero / SkySight portal) | 1600×900+ |
| `terraskyai (2).png` | Farms & fields map | 1600×900 |
| `terraskyai (3).png` | Detection pins / off-type or weed results | 1600×900 |
| `terraskyai (4).png` | Plant stand count or yield view | 1600×900 |
| `terraskyai (5).png` | QC review workflow | 1600×900 |
| `terraskyai (6).png` | Flight / imagery upload or reports | 1600×900 |

After adding files, update `src/app/data/caseStudies.js` id **35**:

```js
image: "/case-studies/terraskyai/terraskyai (1).png",
detail_images: [
  "/case-studies/terraskyai/terraskyai (1).png",
  "/case-studies/terraskyai/terraskyai (2).png",
  "/case-studies/terraskyai/terraskyai (3).png",
  "/case-studies/terraskyai/terraskyai (4).png",
  "/case-studies/terraskyai/terraskyai (5).png",
  "/case-studies/terraskyai/terraskyai (6).png",
],
```

Tell us which file is the main cover if you use different names (e.g. `(1)` vs another number).
