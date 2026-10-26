/**
 * Helpers for page copy stored in src/content/*.json
 *
 * Editor conventions (used in Pages CMS text fields):
 *   *word*   → accent-styled emphasis
 *   **word** → accent-styled strong
 *   __word__ → plain strong
 *   |        → line break (for headlines)
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Format editor markup into safe HTML for set:html. */
export function rich(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong class="accent-word">$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em class="accent-word">$1</em>');
  out = out.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  out = out.replace(/\|/g, '<br />');
  return out;
}

/** Same as rich(), but | becomes a responsive hero break. */
export function richHeadline(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong class="accent-word">$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em class="accent-word">$1</em>');
  out = out.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  out = out.replace(/\|/g, '<br class="break" />');
  return out;
}
