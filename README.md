[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Hendr1010/news-image-20261118-entry/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Hendr1010/news-image-20261118-entry/reward.svg)](https://make.fun/bounty/news-image-20261118)

# The World in One Day — Wednesday 18 November 2026

A front-page image summing up Wednesday 18 November 2026's world news, for the
[make.fun](https://make.fun/bounty/news-image-20261118) news-image competition.

The day's four biggest stories, drawn from real reporting of 18 November 2026:

1. **Shenzhen** — Xi Jinping and Vladimir Putin meet at the APEC summit, and
   Donald Trump arrives in Shenzhen for Thursday's first three-way summit.
2. **Crimea** — A section of the Crimean Bridge collapses into the Kerch Strait
   after two days of Ukrainian missile and drone strikes.
3. **Kirishi** — Ukrainian drones hit Russia's second-largest oil refinery,
   after Russian strikes on bridges and infrastructure in Kyiv.
4. **Gulf** — The US strikes a missile site on Qeshm Island as regional air
   defences intercept drones near Bahrain and Kuwait.

Also: the EU unveils a €45 billion support loan for Ukraine, Modi attends the
ASEAN-India summit in Manila, and Nvidia posts record earnings.

## How it works

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it to
`/output/entry.png` — deterministic, no network, the same bytes on every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
