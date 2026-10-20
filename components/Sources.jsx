// Numbered list of sources with outbound links (opens in a new tab).
export default function Sources({ items, title = 'Sources', id = 'sources' }) {
  if (!items?.length) return null;
  return (
    <section className="sources" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{title}</h2>
      <ol>
        {items.map((r) => (
          <li key={r.id || r.url}>
            {r.cite}{' '}
            {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer">{r.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>}
          </li>
        ))}
      </ol>
    </section>
  );
}
