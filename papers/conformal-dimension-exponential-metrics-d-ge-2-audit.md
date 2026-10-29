# Three-round adversarial audit

**Manuscript:** Conformal dimension of exponential metrics in d ≥ 2.

**Date:** 29 October 2026.

**Disposition:** The corrected argument survived three internal audit-and-rewrite passes: no unresolved gap was identified relative to its stated metric and Gaussian multiplicative-chaos inputs. The original published draft did not pass unchanged. This is neither independent expert review nor formal verification, and it does not guarantee an error-free proof.

## Frozen input and scope

The starting PDF was the file published at `papers/conformal-dimension-exponential-metrics-d-ge-2.pdf` in `leobon12/leobon12.github.io`, commit `5f56810096033dcdb74c2798c69986f554252709`. Its Git blob was `c555d3ae23705b54cabd08c7f3f83064203b5f1c`; the local audit copy matched that blob. Each pass produced a separate source and compiled PDF before the next pass began.

The target statement and parameter range were not weakened. The final manuscript treats all integers d ≥ 2 and each fixed 0 < γ < √(2d), ordinary conformal dimension, and the intrinsic two-dimensional γ-LQG sphere. It does not claim a quasisymmetry to Euclidean space, attainment of the infimum, Ahlfors regularity, critical-parameter results, or a simultaneous probability-one statement over uncountably many γ.

For d ≥ 3, the strong metric characterization in Bonanno's separate research manuscript remains an explicit input. Its entire existence/uniqueness proof was not independently re-audited here. The present audit checks how that input is used, not its ultimate correctness. Miller and Tian remain credited for the good-annulus and hyperbolic-filling strategy; the required deterministic arguments are included in the revised paper.

## Round 1: external inputs, versions, and quantifiers

The annular estimates were checked against Contreras Hip–Zhuang, Propositions 4.7, 4.10, and 4.11. Their around functional really is the supremum of internal distances between arbitrary continuous shell crossings. It has the required all-order estimates. Arbitrary internal diameters have only a restricted positive-moment range; the proof must not silently promote this to all orders.

The equivariant metric version, Proposition 2.1, was rewritten. Fixed-map covariance alone does not allow a field-dependent dilation. Fubini is now applied first in the dilation variable, on a countable dense family of endpoint pairs. Simultaneous Weyl scaling gives a single full-measure scale set for every continuous perturbation. The change of scale is then an algebraic identity of the essential-supremum construction. The passage to local metrics and inserted roots is stated explicitly.

Two literal errors were corrected. The graph comparison must exclude identical vertices: for u = v the graph distance is zero while the proposed comparison scale is positive. The measurability appendix had treated open filled hulls as compact sets. It now distinguishes open hulls, their compact closures and boundaries, and proves the decreasing compact-set formula for closed hulls, equation (77).

The capped-weight argument was corrected to refer to the relevant minimum over an edge neighborhood, not to the existence of any one capped neighbor. The actual conformal-covariance paper of Gwynne–Miller was added; the existence paper is not the appropriate citation for arbitrary coordinate changes.

Round 1 left the full path-reduction proof, the precise intrinsic layers, and the sphere's global weights for the next pass. It was not treated as a final acceptance.

## Round 2: deterministic geometry and one global target metric

Lemma 4.3 now proves the exact identity d_A(I,z) = D(o,z) − t in a genuine mixed band. The geodesic-tail argument distinguishes the exterior component of the inner ball from components swallowed by the outer filled ball. Filling the intrinsic neighborhoods then gives the corresponding intermediate global filled hulls, and the arrival coordinate is τ_o − t. Arrival is not confused with root distance inside swallowed components. The resulting ambient Lipschitz bound gives the required short-ball containment.

The reversed corridor convention in Lemma 10.1 was corrected at its terminal radius. The closed terminal component can be unbounded; the proof uses only the specified closed components below that radius and the open component at the endpoint. Chain trimming is carried out on a continuous path through the overlapping balls, with explicit first-exit and last-entry choices.

The smoothing inequalities are proved algebraically, including the upper bound on a vertical ratio by neighboring preliminary weights. This upper bound is essential for the later product estimate. Lemma 10.3 no longer hides its main step in an abbreviated path-reduction paragraph. It proves four finite reductions: an annular crossing pays a parent weight; a one-level excursion can be removed with one end edge unused; fine excursions and unequal endpoint levels can be removed; and separated parents can replace both endpoints. The final residual crossing and its payment are checked explicitly. Every reduction stops at a finite level, so no lowest root vertex is required.

The sphere proof now defines one global weight using a fixed round distance and a coherent exterior component of each sufficiently small ball. A finite conformal atlas has quantitative bilipschitz constants. In these charts the same global weights are dominated by the already-estimated local majorants; the required coefficient is at most 32 and is dominated by 128 in the existing majorant. Thus the proof constructs one metric on the whole sphere, rather than asserting that separately chosen local metrics can be glued.

The local-transfer lemma and the precise three-insertion sphere density were added. The density is finite and strictly positive and is proportional to total mass raised to the power 4/γ² − 2; this exponent need not itself be positive. Its integrability conditions were checked. Area normalization is handled only at the end as a global metric similarity.

## Round 3: adversarial regression of the revised argument

Every newly introduced geometric claim was checked against its actual rewritten statement. A root-variable mismatch and the closed-layer convention were corrected. Lemma 4.1 was added to justify the inserted-root completion, properness, and geodesicity using one permitted positive annular-diameter moment and an inverse crossing moment. The inward sums converge because Q − γ > 0; outward barriers exclude a finite-distance point at infinity.

The Brownian-circle covariance, the full-environment Palm time change, its stationary Gamma law, the Feynman–Kac ground state, and the threshold identity were re-derived. Symbolic checks verified the stationary probability current, the ground-state equation, and Q² − (Q − γ)² = 2d. No independence between the Brownian coordinate and the remaining field is assumed.

The exceptional-scale estimates were attacked at their random choices: bounded field-dependent perturbations, the random logarithmic normalization, the deterministic physical-horizon cutoff, and the selected set of good indices. The proof uses common base-field obstructions, deterministic scale bins, and a sum over deterministic good-index sets. It does not condition the spectral estimate on a field-dependent good set. The parameter choices absorb all fixed multipliers and the 2^n subset count for each p > d.

The mass estimate was checked for all centers, not just a mass-typical root. Its path chain uses the mass of the same cube and only the moment estimates it has. The GMC-rooting argument was checked for additive normalization, localization, the Palm density, random metric-scale bins, and the agreement of internal and ambient observables. No independence of the normalizing constant and the centered field is used. The integral-to-packing conversion is pathwise for every separated set on one probability-one event.

The rewritten graph reductions, the 26-to-27 majorant comparison, and the sphere construction were then checked again as downstream consumers of these estimates. The final covering uses one global target metric on all compact sets. The three sphere insertions are added only after the compact-exhaustion estimate, and contribute zero p-dimensional Hausdorff measure.

## Artifact checks and remaining limitations

The final source compiled three times with no undefined references, missing citations, duplicate labels, overfull or underfull boxes, or TeX warnings. The source was scanned for unexpected control bytes. All 28 PDF pages were rendered and inspected in contact sheets; the rewritten graph and sphere passages were also inspected at readable resolution. These are artifact checks, not substitutes for proof verification.

The three passes were performed internally by the same assistant, with different audit targets and a fresh regression of each rewritten dependency. They were not three independent referees. The exact invariant-law and spectral checks do not certify every topological or measure-theoretic step by computer. The separate higher-dimensional metric characterization remains an external research input. An independent expert review is still warranted.

## Exact final artifacts

- Source SHA-256: `4245105bd701874fabc69b55b26cf9cb99f0240aeb4928382df4f9c36014341c`.
- Locally rendered PDF SHA-256: `29572c4b81b5e84d34d293069c4204cce35caeff925ec83c4021f8752fa1860e`.
- Original PDF SHA-256: `cd1c8bb5daad47e0ceef1e9df099927443b060181b28746442bc4d680875d0a9`.

A separately rebuilt PDF may have different embedded metadata or font-object ordering. Publication must use either the checked PDF or a rebuild from the identical checked source that is compared before replacing the website file.
