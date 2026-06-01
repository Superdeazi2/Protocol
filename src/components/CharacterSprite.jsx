import { useEffect, useMemo, useState } from 'react'

const idleFrames = import.meta.glob('../assets/character/idle/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

const blinkFrames = import.meta.glob('../assets/character/idle-blink/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

const SPRITE_ANIMATION = {
  fps: 10,
  timeline: [
    { name: 'idle', frames: idleFrames, repeat: 2 },
    { name: 'idle-blink', frames: blinkFrames, repeat: 1 },
  ],
}

function getSortedFrames(frameMap) {
  return Object.entries(frameMap)
    .sort(([a], [b]) => {
      const aFrame = Number(a.match(/(\d+)\.png$/)?.[1] ?? 0)
      const bFrame = Number(b.match(/(\d+)\.png$/)?.[1] ?? 0)

      return aFrame - bFrame
    })
    .map(([, src]) => src)
}

function buildTimeline(animationConfig) {
  return animationConfig.timeline.flatMap((sequence) => {
    const frames = getSortedFrames(sequence.frames)

    return Array.from({ length: sequence.repeat }, () => frames).flat()
  })
}

function CharacterSprite() {
  const timeline = useMemo(() => buildTimeline(SPRITE_ANIMATION), [])
  const hasFrames = timeline.length > 0
  const [timelineIndex, setTimelineIndex] = useState(0)

  useEffect(() => {
    if (!hasFrames) {
      return undefined
    }

    const frameDuration = 1000 / SPRITE_ANIMATION.fps
    const timer = window.setInterval(() => {
      setTimelineIndex((currentFrame) => (currentFrame + 1) % timeline.length)
    }, frameDuration)

    return () => window.clearInterval(timer)
  }, [hasFrames, timeline])

  if (!hasFrames) {
    return (
      <div className="character-stage" aria-label="Персонаж Protocol">
        <div className="panel panel-glow font-display text-placeholder relative z-10 grid h-[260px] w-[210px] place-items-center text-[18px] uppercase max-sm:h-[190px] max-sm:w-[150px] max-sm:text-[14px]">Protocol</div>
      </div>
    )
  }

  const currentFrame = timeline[timelineIndex]

  return (
    <div className="character-stage" aria-label="Персонаж Protocol">
      <img
        className="character-sprite"
        src={currentFrame}
        alt=""
        draggable="false"
      />
    </div>
  )
}

export default CharacterSprite
