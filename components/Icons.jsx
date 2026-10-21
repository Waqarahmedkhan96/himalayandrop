// Small line icons used in badges and stars.
const paths = {
  mountain: 'M3 19 9.5 8l3.5 6 2.5-4L21 19Z',
  jar: 'M7 4h10v3H7zM6 7h12v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z',
  sun: 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M2 12h2M20 12h2',
  leaf: 'M5 19C5 10 11 5 20 4c-1 9-6 15-15 15Zm0 0 8-8',
  berry: 'M12 8c4 0 6 3 5 7s-3 6-5 6-4-2-5-6 1-7 5-7ZM12 8V5M9 5h6',
  drop: 'M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z',
  cart: 'M5 8h14l-1 12H6L5 8ZM9 8V6a3 3 0 0 1 6 0v2M12 12v5M9.5 14.5h5',
  hand: 'M7 20c-1.5-2-3-4.5-3-7l1.5-1.5L8 14V5a1.3 1.3 0 0 1 2.6 0v6-7.5a1.3 1.3 0 0 1 2.6 0V11 4.5a1.3 1.3 0 0 1 2.6 0V12 7a1.3 1.3 0 0 1 2.6 0v7c0 3-1.5 6-3.5 6Z',
  filter: 'M4 4h16l-6 8v6l-4 2v-8Z',
  flask: 'M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10',
  shield: 'M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6ZM8.5 12l2.5 2.5 4.5-5',
  box: 'M3 7.5 12 3l9 4.5v9L12 21l-9-4.5ZM3 7.5l9 4.5 9-4.5M12 12v9',
  truck: 'M3 6h11v10H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-.01M17 19a2 2 0 1 0 0-.01',
  star: 'm12 3 2.7 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.5 19.7l1.2-6.1-4.5-4.2 6.1-.8Z',
  gift: 'M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-1.5-3-5-3.5-5-1.5S10 7 12 7Zm0 0c1.5-3 5-3.5 5-1.5S14 7 12 7Z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9Z',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l3 2',
  capsule: 'M9.5 4.5a4.95 4.95 0 0 1 7 7l-5 5a4.95 4.95 0 0 1-7-7ZM7 7l7 7',
  pin: 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21ZM12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
  crystal: 'M12 3 18 9 15 21H9L6 9ZM6 9h12M12 3l-2 6 2 12M12 3l2 6',
  scale: 'M5 20h14l-2-11H7ZM9 9a3 3 0 0 1 6 0M12 13v3',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2',
  user: 'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21c1.5-4 4.5-6 8-6s6.5 2 8 6',
};

export function Icon({ name, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name] || paths.mountain} />
    </svg>
  );
}

export function Stars({ rating = 5 }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8Z" fill={i <= rating ? '#cca25e' : 'rgba(204,162,94,0.25)'} />
        </svg>
      ))}
    </span>
  );
}
