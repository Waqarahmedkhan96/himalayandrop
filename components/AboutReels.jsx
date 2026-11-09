'use client';
// Video carousel for the About page. SAMPLE clips (product photos): replace with real videos
// from nutrition experts and athletes, with their consent, before launch.
import VideoReels from './VideoReels';
import { useLang } from './LangProvider';
import { pdpText, mediaDir } from '@/lib/pdp';
import { RATING_COPY } from '@/lib/rating';

const DIRS = ['gold-resin', 'gummies', 'drops', 'capsules', 'silver-resin', 'gold-resin'];
const DUR = ['0:42', '1:05', '0:38', '0:51', '0:47', '0:56'];

export default function AboutReels() {
  const lang = useLang();
  const rv = pdpText(lang).reviews;
  const c = RATING_COPY[lang] || RATING_COPY.en;
  const clips = rv.caps.map((cap, i) => {
    const d = mediaDir(DIRS[i % DIRS.length]);
    return { cap, dur: DUR[i], src: `${d}/video-${i + 1}.mp4`, poster: `${d}/video-${i + 1}.webp` };
  });
  return <VideoReels items={clips} sample={c.sample} play={rv.play} />;
}
