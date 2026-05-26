# Heavy Metal Index Certified — Methodology (Stub)

**Status:** Draft v0.1 — written by CTO, pending Scientific Advisor review.
**Audience:** Internal, plus prospective Scientific Advisors evaluating whether to join HMI.
**Last updated:** 2026-05-26

> This is a stub. It defines what the "Heavy Metal Index Certified" mark means, how a brand earns it, and how it can be lost. Every numeric threshold, cadence, and statistical parameter below is flagged `TBD (Scientific Advisor)`. The structure should hold; the numbers will be set by domain experts.

---

## 1. What "Certified" claims

A product bearing the Heavy Metal Index Certified mark claims the following, and nothing more:

> Representative samples of this product, drawn from production lots over a defined surveillance window, were tested at an HMI-approved accredited laboratory and found to contain less than the HMI threshold concentration for each of the regulated metals listed below.

In plain terms: **"We tested this product, on a real schedule, at a real lab, and the results were below our published limits."**

The mark explicitly does **not** claim:

- That the product is "free of" heavy metals. Detection below threshold is not absence.
- That every individual unit shipped is below threshold — only that the lot, sampled per HMI's design, passes.
- Safety for any specific population (infants, pregnant people, immunocompromised) beyond what the threshold itself implies.
- Compliance with any regulatory regime (FDA, EU, Prop 65) unless explicitly cross-certified.

### 1.1 Regulated metals (default scope)

The "big four" — chosen because they are the metals with the most consistent regulatory attention and the largest body of toxicological literature:

- **Lead (Pb)**
- **Arsenic (As)** — speciated where the matrix warrants it; inorganic arsenic is the toxic form of regulatory interest
- **Cadmium (Cd)**
- **Mercury (Hg)** — speciated to methylmercury for fish/seafood products

Optional extended panel, selected per product category by the Scientific Advisor:

- Chromium (Cr) — hexavalent form is the toxicological concern
- Antimony (Sb)
- Nickel (Ni)
- Aluminum (Al)

`TBD (Scientific Advisor)`: Confirm the default panel, and define the product-category rules that trigger the extended panel (e.g., seafood → speciated Hg; root vegetables → Cd; cookware → Cr, Ni).

---

## 2. Detection thresholds

Thresholds are expressed as maximum allowable concentration in the as-consumed product, in µg/kg (ppb) unless otherwise noted. Thresholds are **per-metal**, not aggregate.

| Metal           | HMI threshold (placeholder) | Basis                                                              | Status                  |
| --------------- | --------------------------- | ------------------------------------------------------------------ | ----------------------- |
| Lead (Pb)       | `TBD` µg/kg                 | Below FDA "Closer to Zero" action levels; reference USP <232>/<233> and ICH Q3D PDEs | `TBD (Scientific Advisor)` |
| Inorganic As    | `TBD` µg/kg                 | Reference EU 2023/915 for rice/cereals; FDA action levels         | `TBD (Scientific Advisor)` |
| Cadmium (Cd)    | `TBD` µg/kg                 | Reference Codex GSCTFF; ICH Q3D PDE                                | `TBD (Scientific Advisor)` |
| Mercury (Hg)    | `TBD` µg/kg                 | Speciated to MeHg for seafood; reference FDA/EPA joint guidance    | `TBD (Scientific Advisor)` |

### 2.1 Threshold-setting principles (proposed)

These are the principles the methodology should hold, even before the numbers exist:

1. **Stricter than current regulation, weaker than detection limit.** HMI's value proposition is "above legal floor, below analytical floor." If we match FDA, brands have no reason to pay us. If we match the lab's LOQ, no one can pass.
2. **Product-category specific.** A threshold for chocolate is not a threshold for prenatal vitamins is not a threshold for baby food. Each category gets its own row in the threshold table.
3. **Anchored to a defensible exposure model.** Each threshold ties back to a published reference dose (RfD, PDE, BMDL, or equivalent) and an assumed serving size and consumption pattern. The model is published alongside the threshold.
4. **Versioned.** Thresholds change as science changes. Each certification is stamped with the threshold version it was issued under.

`TBD (Scientific Advisor)`: Choose the exposure-model framework (EPA RfD vs. ICH Q3D PDE vs. EFSA TWI vs. a hybrid), and define the per-category serving-size assumptions.

---

## 3. Sampling design

### 3.1 Lot vs. batch

Sampling is **lot-based**, where a *lot* is the smallest unit of production that shares a single set of raw-material inputs and a single processing run. Batch ≠ lot for our purposes; a single batch may contain multiple lots, and a single lot may span multiple batches. The brand's QMS lot definition is accepted if it satisfies this constraint; otherwise HMI's lot definition controls.

`TBD (Scientific Advisor)`: Edge cases — continuous-process products (e.g., bottled water, bulk oils) where "lot" is a time window. Define the maximum time window that constitutes one lot.

### 3.2 Sample size per lot

Default: **`TBD` units per lot**, drawn at random across the production window.

The sample size must satisfy:

- Statistical power to detect a true exceedance of the threshold with `TBD`% confidence, given an assumed within-lot CV of `TBD`%.
- A per-unit composite or per-unit individual analysis decision (composite is cheaper, individual gives unit-level confidence).

`TBD (Scientific Advisor)`: Power calculation, default within-lot CV by product category, and the composite-vs-individual decision rule.

### 3.3 Randomization

Sampling units are selected by HMI (or HMI's designated sampling agent), not by the brand. The brand must provide:

- Production schedule and lot manifest with enough lead time for HMI to draw a randomized schedule (target: `TBD` business days).
- Physical access to the production facility or to a designated holding warehouse before product reaches retail.

Self-sampling by the brand is **not accepted** for initial certification or surprise audit. It may be accepted for renewal cadence under chain-of-custody controls — `TBD (Scientific Advisor)`.

---

## 4. Sampling cadence

| Event                | Trigger                                          | Sampling scope                                                       |
| -------------------- | ------------------------------------------------ | -------------------------------------------------------------------- |
| Initial certification | Brand applies for the mark                       | `TBD` lots across `TBD` production days, full panel                  |
| Renewal              | Every `TBD` months from initial issue date       | `TBD` lots, full panel                                               |
| Surprise audit       | Randomly triggered, no advance notice            | `TBD`% of certified SKUs per year, single lot per SKU, full panel   |
| For-cause audit      | Triggered by complaint, recall, or HMI signal    | Targeted lots, panel scoped to the complaint                         |

`TBD (Scientific Advisor)`: Annual surprise-audit rate, renewal interval (most labels in adjacent industries use 12 months — confirm), and the for-cause triggering thresholds (e.g., does a single consumer complaint trigger, or do we need N complaints in a window?).

---

## 5. Lab requirements

### 5.1 Accreditation

Required, no exceptions:

- **ISO/IEC 17025** accreditation for the specific test methods used (not just for the lab as a whole — scope matters).
- Accreditation body must be a signatory to the ILAC Mutual Recognition Arrangement.

### 5.2 Methods

Accepted analytical methods, in preference order:

1. **ICP-MS** (inductively coupled plasma mass spectrometry) — default for Pb, Cd, total As, total Hg.
2. **ICP-MS with HG (hydride generation)** — for low-level As and Hg.
3. **LC-ICP-MS** — required for arsenic and mercury speciation.
4. **AAS (graphite furnace)** — accepted as a backup or for specific metals where ICP-MS is not validated for the matrix.

Each method must have a documented LOD/LOQ for the matrix, validated against a certified reference material (CRM) appropriate to the product category.

`TBD (Scientific Advisor)`: The default CRM panel per product category, and whether we require duplicate analysis at two independent labs for initial certification (more rigor, much higher cost).

### 5.3 Lab approval process

HMI maintains a list of approved labs. A lab is approved when:

- It holds the accreditations above.
- It has passed an HMI proficiency challenge (blind spiked samples) within the last `TBD` months.
- It has signed HMI's data-sharing agreement (results go to HMI directly, not through the brand).

---

## 6. Failure modes

### 6.1 Single-result exceedance (non-conformance)

One sample over threshold, others below, within a single lot.

- **Action:** Re-test from retained sample or fresh draw of the same lot, in duplicate, at the same lab.
- **If re-test confirms exceedance:** the lot fails. The brand's certification status is moved to **Under Review** publicly. The lot must not ship under the mark; if already shipped, see §6.4.
- **If re-test does not confirm:** the original result is recorded but the lot passes. Pattern detection runs across lots (§6.3).

### 6.2 Multi-result exceedance

Multiple samples over threshold within a single lot, or a single very high result (≥`TBD`× threshold).

- **Action:** Immediate suspension of certification across all SKUs from that production facility. Public status moved to **Suspended**.
- **Reinstatement:** Requires the brand to demonstrate root cause and corrective action, plus a fresh round of initial-certification sampling.

### 6.3 Pattern-based revocation

Across rolling-window surveillance, the brand exceeds `TBD`% of samples with detectable (above LOD, below threshold) levels of a regulated metal, or `TBD` non-conformances in `TBD` months.

- **Action:** Revocation of the mark. Public status moved to **Revoked**.
- **Reinstatement:** Treated as a new applicant after a cooling-off period of `TBD` months.

### 6.4 Public alert triggers

A public alert (not just a status change) is issued when:

- Any single result exceeds `TBD`× the threshold (acute exposure concern), **or**
- A revocation is issued for a product currently in commerce, **or**
- The Scientific Advisor or HMI's standing review committee determines an alert is warranted on toxicological grounds.

Public alerts include: the brand, the SKU, the lot, the metal, the result, the threshold, the lab, and the date. They do **not** include speculation about health effects.

`TBD (Scientific Advisor)`: The acute-exposure multiplier (3×? 5×? metal-specific?), and the standing review committee composition and quorum.

---

## 7. Disclosure

Everything material to a certification's validity is public. Specifically:

### 7.1 On certification

The public Index entry for a certified product shows:

- Brand, product name, SKU, UPC where available
- Certification issue date and renewal due date
- Threshold version in effect at certification
- For each regulated metal: the **per-result** values (not just pass/fail), the lab, the lot identifier (or anonymized lot key if the brand has a legitimate trade-secret concern), and the sampling date
- The mark version and effective dates
- Any open non-conformances or under-review status

### 7.2 On revocation or suspension

- The reason (which §6 clause triggered it)
- The exceeding result(s) with full numeric detail
- The brand's stated corrective action, if any
- The date the brand was notified

### 7.3 What is **not** published

- Brand QMS internal documents
- Lab pricing or HMI fee structure for that brand
- Personal identifying information of brand or lab staff

`TBD (Scientific Advisor)`: Whether negative results (e.g., a brand that applied and failed initial certification) are disclosed, and the disclosure rules for products that lapse without ever being revoked.

---

## 8. Versioning and governance

- This methodology is versioned. Each certification carries the methodology version under which it was issued.
- Methodology revisions require sign-off from the Scientific Advisor and the Index Editorial Board (TBD body — see open questions).
- Brands certified under an older version retain their mark until renewal, at which point they are re-certified under the current version. Material weakenings of the methodology never apply retroactively to favor brands.

---

## Open questions for the CEO (for Scientific Advisor recruitment)

These are the questions whose answers most shape the value and defensibility of the mark. They are the questions a strong Scientific Advisor will want to drive:

1. **Where do we anchor thresholds?** EPA RfD, ICH Q3D PDE, EFSA TWI, or a defensible hybrid? This single choice sets the entire numeric backbone of the program and signals our scientific posture.
2. **Speciation requirements by category.** Total arsenic and total mercury are cheap; inorganic As and methyl Hg are the toxicologically relevant species. Which product categories must we speciate, and where can we accept total-metal screening with speciation only on positives?
3. **Statistical power per lot.** What's the minimum sample size — and the within-lot variance assumption — we'll defend in print? This is what a critic will attack first.
4. **Surprise-audit rate and renewal cadence.** Too lax and the mark means nothing; too strict and no brand will pay. We need a defensible point on that curve.
5. **Acute-exposure alert multiplier.** When does a single high result become a public alert versus a private investigation? This is the rule that, when invoked, defines the public reputation of HMI for the next decade.
6. **Independent confirmation.** Do we require duplicate analysis at two independent labs for initial certification, or is single-lab analysis with a CRM control sufficient? Cost vs. credibility.
7. **Index Editorial Board.** Who, structurally, signs off on methodology revisions? A single Scientific Advisor is a single point of failure and a single point of capture. A standing board of 3–5 is more defensible, harder to recruit, and slower.

Recommended posture for the CEO when talking to advisor candidates: **the methodology is theirs to shape, not ours to defend.** This stub is the scaffolding; the numbers and the toxicological judgment calls are the advisor's contribution to the company.
