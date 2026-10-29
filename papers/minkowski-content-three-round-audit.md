# Minkowski content of exponential metrics: three-pass audit

Revised October 29, 2026.

## Scope and conclusion

Three sequential audit-and-rewrite passes were performed by the same assistant. These are not independent referee reports and do not constitute formal verification. No unresolved failure was identified in the abstract proof under the stated strong metric axioms and one internal-diameter moment above gamma/xi. The construction and uniqueness of the intended higher-dimensional metric were not independently audited.

The final theorem preserves convergence in probability on random compact continuity sets and deterministic bounded Borel continuity sets, with a regularly varying normalization comparable to epsilon^(-gamma/xi). It does not assert a pure-power normalization or almost sure convergence along all radii in dimensions at least two. The one-dimensional result is pathwise and stated separately.

The editorial guidance used was the public Armstrong-Loher `math-paper-skills` repository, specifically the mathematics-writing rules, house style, artisan-writing guidance, and campaign controls. External independent review recommended by that guidance was not performed.

## Revisions

# Round 1: mathematical assumptions and dependency audit

Input: original/minkowski_content_all_dimensions.tex, SHA-256 7674d367b1813a1774bafef3587cdd4c256be990f9518717dec50eceadda4465.
Review type: one-assistant adversarial review; not an independent external referee report.

1. R1-01 (assumption precision). The main theorem referred forward to an imported all-moments lemma while the argument only needed one moment. The introductory discussion also compressed the passage from strong axioms to the weak-metric tightness framework. Resolution: assume a single explicit normalized-field moment q0>Delta in the theorem; state precisely the class covered by CZ Theorem 1.4(1)/Proposition 4.11; do not claim their result supplies exact similarities.
2. R1-02 (moment transfer). The Gaussian correction used to move to the stationary field need not be independent of the normalized LGF. Resolution: give the Holder calculation with q<q0, a>1, aq<q0. This confirms that one normalized-field moment strictly above Delta suffices.
3. R1-03 (tail comparison). The full-tree first moment used an unspecified stochastic upper envelope. Resolution: write the Pareto tail explicitly and check integrability at Delta. There is no coupling or independence claim across cubes.
4. R1-04 (random-set measurability). The dyadic inner approximation used containment in a random interior without justification. Resolution: give its countable compact-neighborhood characterization; separate the empty set.
5. R1-05 (source and scope). Exact similarity covariance, higher-dimensional existence, and uniqueness are external. Resolution: state this in the introduction and retain the Bonanno citation; the main theorem is an implication from explicit metric assumptions, not a proof of the construction.

Rechecked without a counterexample: Gaussian potential identity and drift, full-tree finite-range recursion and m-independent contraction coefficient, antichain packing and saddle identity, internal localization and boundary strips. No planar theorem is used as a proof input.

The theorem's conclusion and parameter range are unchanged. The normalized-field moment assumption is made explicit rather than silently replaced by a stronger all-moments assumption.


# Round 2: adversarial probability and limiting-argument audit

Input: the compiled round-1 source. Review type: a second sequential review by the same assistant, not an independent referee.

R2-01. Brownian motion in general dimension: checked that it is the one-point white-noise scale process, not the spherical-average process. Added the covariance/independent-increment justification explicitly.
R2-02. Uniformity in the full-tree recursion: checked the color count is independent of the subdivision factor, the diagonal coefficient is uniform, and only the additive term may depend on that factor. The first-moment input holds at every positive radius, including random coarse-field radius multipliers. Added the dependency distinction to the proof.
R2-03. Helly profiles and random shifts: checked the frozen one-point Gaussian avoids the countable exceptional set. Retained freezing rather than assuming extrema are atomless. Added the fixed-mesh root error and the order in which it is discarded. Added dominated-convergence justification when the freezing error tends to zero.
R2-04. Sharp conditional-mean oscillation estimate: expanded the argument into a uniform exponential-square bound for S_i/delta, the exact Gaussian tilt, the O(delta^2) deterministic mean shift, and a displayed O(delta) estimate. This avoids an invalid Holder substitution that would lose a power of r.
R2-05. Order of limits: explicitly separated epsilon, r, and delta, and kept the potentially diverging color constant C_delta. Added the triangle inequality against the limiting chaos.
R2-06. Arbitrary dependent perturbations/random sets: specified the meaning of the quantifiers (one convergence-in-probability statement for each joint law), and explained how the white-noise coupling preserves that joint law through disintegration.

Rechecked: ancestor bridge conditional means and variances, the antichain separation, number of saddle-window levels, internal-vs-global balls without assuming properness, positivity and continuity of the regular-variation profiles, and the one-dimensional compact-set sandwich. No unproved crossing tail estimate is needed in the lower bound.

Outcome: no counterexample or unresolved failure was found in these steps. This is a review result, not a guarantee of proof correctness. The strong metric inputs remain external assumptions, and pure-power normalization/all-radii almost sure convergence are not claimed.


# Round 3: complete mathematical regression and manuscript review

Input: the compiled round-2 source. Review type: a third sequential review by the same assistant, not an independent referee.

R3-01. Read the complete proof again in its dependency order. Rechecked the strict inequalities Delta<q<min(q0,q+) and 1<p<min(2,q/Delta,2d/gamma^2), and that every later use fits these choices. The single normalized-field moment is sufficient after Holder transfer; no crossing moment or planar topology theorem has been inserted.
R3-02. Rechecked arbitrary dependent random shifts through finite deterministic radius meshes, fixed-partition localization, and the finite-family argument for random dyadic unions. The boundary condition is retained for both types of sets in the theorem. In dimension one the stronger simultaneous pathwise compact-set statement remains separate.
R3-03. Reorganized the exposition using the public Armstrong-Loher guidance. Added mechanism-first section openings, moved the comparison with Gwynne-Sung next to the theorem, separated proof steps in the packing and GMC arguments, and removed the duplicated comparison after the final proof. A local Sobolev exponent was renamed to avoid confusion with the fixed diameter exponent.
R3-04. Preserved all 84 original labels and all five bibliography entries; there are 86 labels in the final source. No missing or duplicate labels, unresolved references/citations, control characters, or overfull boxes were detected. Five central Gaussian/exponent identities were separately checked symbolically; these checks do not verify the probabilistic proof.
R3-05. Compiled the 23-page PDF, rendered all pages, inspected all six contact sheets covering pages 1-23, and checked text bounding boxes. No clipping, overlaps, broken symbols, or out-of-page text were found. The title page, statement, long estimates, section transitions, and bibliography were inspected.

Outcome: no unresolved mathematical failure was identified in the abstract implication under its stated hypotheses. This conclusion is limited to these three self-review passes. Construction, uniqueness, and exact similarities for the intended higher-dimensional metric have not been independently audited here. There is no formal verification or external referee endorsement. The publication must keep these inputs explicit and belong in the website's Unformalized section.


## Source versions

- Original: SHA-256 `7674d367b1813a1774bafef3587cdd4c256be990f9518717dec50eceadda4465`.
- Round 1: SHA-256 `990640f38ac7e76f22623f273ca32630556151cf2d5b473f312095ea903725fb`.
- Round 2: SHA-256 `ab4c3fe2ca8fb2b058e055fee884dd631b4be46532d3a55e275e33be0561b514`.
- Round 3: SHA-256 `63d20c0e2a48dcf3724e44396708ff8eb4b34b87d0cd4f3d4c5fba0e02de8994`.

## Primary references and writing guidance

- Gwynne and Sung, *The Minkowski content measure for the Liouville quantum gravity metric*, arXiv:2211.04701, Theorem 1.1 and Proposition 1.3.
- Contreras Hip and Zhuang, *Weak exponential metrics for high-dimensional log-correlated Gaussian fields*, arXiv:2512.06292, Theorem 1.4(1) and Proposition 4.11. Their moment result is not a source for exact similarity covariance.
- Robert and Vargas, *Gaussian multiplicative chaos revisited*, Annals of Probability 38(2), 605-631 (2010).
- Shamov, *On Gaussian multiplicative chaos*, Journal of Functional Analysis 270(9), 3224-3261 (2016).
- Writing guidance: https://github.com/amelieloher/math-paper-skills .

The paper also cites Bonanno's higher-dimensional metric manuscript as the intended construction supplying its external metric inputs.
