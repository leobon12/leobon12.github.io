// Reveal a linked paper when its topic starts collapsed.
function revealResearchTarget() {
  let id;
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  if (!target) return;
  const topic = target.closest("details.research-topic");
  if (!topic) return;
  topic.open = true;
  target.scrollIntoView();
}

window.addEventListener("hashchange", revealResearchTarget);
revealResearchTarget();
