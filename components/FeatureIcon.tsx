const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Hand-drawn feature illustrations, with a dedicated diary transformation asset. */
export default function FeatureIcon({ index, size = 'regular' }: { index: number; size?: 'regular' | 'small' }) {
  return (
    <span
      className={`diary-feature-icon diary-feature-icon--${size}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url(${BASE}/images/${index === 7 ? 'diary-transform-icon.png' : 'diary-feature-icons.png'})`,
        backgroundSize: index === 7 ? 'contain' : undefined,
        backgroundPosition: index === 7 ? 'center' : `${(index % 4) * 100 / 3}% ${Math.floor(index / 4) * 100 / 3}%`,
        // Hide the lock illustration bleeding into the top of the chat sprite cell.
        clipPath: index === 6 ? 'inset(20% 0 0 0)' : undefined,
      }}
    />
  )
}
