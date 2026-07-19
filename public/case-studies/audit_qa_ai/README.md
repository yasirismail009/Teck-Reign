# AuditQA case study images

Product: **AuditQA** — AI financial statement quality review (tools-first + Ollama LLM).

Drop these PNG files into `public/case-studies/audit_qa_ai/` (exact names):

| File | What to show | Size |
|------|----------------|------|
| `audit-qa-cover.png` | Hero / product cover | 1600×900+ |
| `audit-qa-dashboard.png` | Quality Review findings dashboard (~32 checks) | 1600×900 |
| `audit-qa-document-review.png` | .docx upload / extracted FS review UI | 1600×900 |
| `audit-qa-rag-chat.png` | Auditor chat (`/auditor`) scoped Q&A | 1600×900 |
| `audit-qa-findings.png` | Bilingual cross-check or scored findings + summary | 1600×900 |

After adding files, update `src/app/data/caseStudies.js` id **33**:

```js
image: "/case-studies/audit_qa_ai/audit-qa-cover.png",
detail_images: [
  "/case-studies/audit_qa_ai/audit-qa-cover.png",
  "/case-studies/audit_qa_ai/audit-qa-dashboard.png",
  "/case-studies/audit_qa_ai/audit-qa-document-review.png",
  "/case-studies/audit_qa_ai/audit-qa-rag-chat.png",
  "/case-studies/audit_qa_ai/audit-qa-findings.png",
],
```

Page: `/case-studies/33`
