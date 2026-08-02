import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 300;

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    const loadedStatus: boolean[] = new Array(TOTAL_FRAMES).fill(false);
    let totalLoadedCount = 0;
    let currentFrame = 0;
    let targetFrame = 0;
    let lastRenderedIndex = -1;
    let animFrameId: number;

    const getFrameFilename = (index1Based: number) => {
      const paddedIndex = String(index1Based).padStart(3, '0');
      return `/frames/ezgif-frame-${paddedIndex}.png`;
    };

    const drawFrame = (frameIdx: number) => {
      if (frameIdx < 0 || frameIdx >= TOTAL_FRAMES) return;
      const img = images[frameIdx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawWidth = canvasHeight * imgRatio;
        drawHeight = canvasHeight;
        offsetY = 0;

        // Mobile responsive shift (< 768px): shift 3D face slightly so face profile is clearly visible on mobile!
        if (window.innerWidth < 768) {
          offsetX = (canvasWidth - drawWidth) * 0.65;
        } else {
          offsetX = (canvasWidth - drawWidth) / 2;
        }
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      lastRenderedIndex = frameIdx;
    };

    const getBestAvailableFrameIndex = (targetIdx: number) => {
      const rounded = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(targetIdx)));
      if (loadedStatus[rounded]) return rounded;

      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const left = rounded - offset;
        const right = rounded + offset;
        if (left >= 0 && loadedStatus[left]) return left;
        if (right < TOTAL_FRAMES && loadedStatus[right]) return right;
      }
      return -1;
    };

    const updateCutoutOpacity = (frameIdx: number) => {
      const w = window.innerWidth;
      
      // Dynamic SVG Mask Geometry tracking 3D face profile across screen sizes
      let cx = 520;
      let rx = 230;
      let ry = 180;

      if (w >= 1440) {
        cx = 535;
        rx = 240;
        ry = 185;
      } else if (w >= 1024) {
        cx = 520;
        rx = 230;
        ry = 180;
      } else if (w >= 768) {
        cx = 505;
        rx = 220;
        ry = 175;
      }

      document.documentElement.style.setProperty('--mask-cx', String(cx));
      document.documentElement.style.setProperty('--mask-rx', String(rx));
      document.documentElement.style.setProperty('--mask-ry', String(ry));

      // Solid PORTFOLIO text ONLY on mobile view (< 768px)
      if (w < 768) {
        document.documentElement.style.setProperty('--mask-cutout-opacity', '0');
        return;
      }

      const shatterPercent = frameIdx / TOTAL_FRAMES;
      // Below 50% shattered: mask cutout opacity = 1.0 (text behind head hidden)
      // Between 50% and 70% shattered: mask cutout opacity smoothly fades 1.0 -> 0.0 (text behind head smoothly appears!)
      let cutoutOpacity = 1.0;
      if (shatterPercent > 0.50) {
        const fadeProgress = Math.min(1.0, (shatterPercent - 0.50) / 0.20);
        cutoutOpacity = 1.0 - fadeProgress;
      }
      document.documentElement.style.setProperty('--mask-cutout-opacity', String(cutoutOpacity));
    };

    const renderCurrentState = () => {
      const bestIdx = getBestAvailableFrameIndex(currentFrame);
      if (bestIdx !== -1) {
        drawFrame(bestIdx);
        updateCutoutOpacity(bestIdx);
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      renderCurrentState();
    };

    let shatterProgress = 0; // 0.0 to 1.0 (maps to Frame 0 to 210)
    const SHATTER_70_FRAME = Math.floor(TOTAL_FRAMES * 0.70); // Frame 210 (70% shattered)

    // Wheel listener: holds initial hero content sticky at top while shattering background to 70%
    const handleWheel = (e: WheelEvent) => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      
      if (scrollTop <= 10) {
        if (e.deltaY > 0 && shatterProgress < 1) {
          // Scrolling down at top: lock page scroll and shatter background face up to 70%
          e.preventDefault();
          shatterProgress = Math.min(1, shatterProgress + Math.abs(e.deltaY) * 0.0025);
          targetFrame = shatterProgress * SHATTER_70_FRAME;
        } else if (e.deltaY < 0 && shatterProgress > 0) {
          // Scrolling up at top: un-shatter background face back to intact state
          e.preventDefault();
          shatterProgress = Math.max(0, shatterProgress - Math.abs(e.deltaY) * 0.0025);
          targetFrame = shatterProgress * SHATTER_70_FRAME;
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrollTop <= 10) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;

        if (deltaY > 0 && shatterProgress < 1) {
          e.preventDefault();
          shatterProgress = Math.min(1, shatterProgress + deltaY * 0.005);
          touchStartY = touchY;
          targetFrame = shatterProgress * SHATTER_70_FRAME;
        } else if (deltaY < 0 && shatterProgress > 0) {
          e.preventDefault();
          shatterProgress = Math.max(0, shatterProgress + deltaY * 0.005);
          touchStartY = touchY;
          targetFrame = shatterProgress * SHATTER_70_FRAME;
        }
      }
    };

    const updateTargetFromScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const totalScrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;

      if (scrollTop > 10) {
        shatterProgress = 1.0;
        const remainingScroll = scrollTop;
        const remainingMax = Math.max(1, totalScrollHeight);
        const remainingFraction = Math.max(0, Math.min(1, remainingScroll / remainingMax));
        targetFrame = SHATTER_70_FRAME + (remainingFraction * (TOTAL_FRAMES - 1 - SHATTER_70_FRAME));
      } else if (shatterProgress === 0) {
        targetFrame = 0;
      }
    };

    const loadSingleFrame = (index0Based: number, onDone?: () => void) => {
      if (images[index0Based]) {
        if (onDone) onDone();
        return;
      }

      const img = new Image();
      img.src = getFrameFilename(index0Based + 1);

      const handleDone = (success: boolean) => {
        if (success) {
          loadedStatus[index0Based] = true;
          totalLoadedCount++;
          const percent = Math.floor((totalLoadedCount / TOTAL_FRAMES) * 100);
          setLoadPercent(percent);

          if (totalLoadedCount >= 10) {
            setIsLoading(false);
          }
        }

        if (onDone) onDone();
      };

      img.onload = () => handleDone(true);
      img.onerror = () => handleDone(false);
      images[index0Based] = img;
    };

    const startSmartPreload = () => {
      const keyframeIndices: number[] = [];
      const remainingIndices: number[] = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (i % 3 === 0 || i === TOTAL_FRAMES - 1) {
          keyframeIndices.push(i);
        } else {
          remainingIndices.push(i);
        }
      }

      const queue = [...keyframeIndices, ...remainingIndices];
      let activeRequests = 0;
      const MAX_CONCURRENT = 6;

      const processQueue = () => {
        while (activeRequests < MAX_CONCURRENT && queue.length > 0) {
          const nextIndex = queue.shift();
          if (nextIndex !== undefined) {
            activeRequests++;
            loadSingleFrame(nextIndex, () => {
              activeRequests--;
              processQueue();
            });
          }
        }
      };

      processQueue();
    };

    const animate = () => {
      const delta = targetFrame - currentFrame;
      if (Math.abs(delta) > 0.001) {
        currentFrame += delta * 0.15;
        renderCurrentState();
      } else if (lastRenderedIndex !== getBestAvailableFrameIndex(currentFrame)) {
        renderCurrentState();
      }

      animFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', updateTargetFromScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    resizeCanvas();
    updateTargetFromScroll();
    startSmartPreload();
    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateTargetFromScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin mb-4" />
          <div className="text-xs uppercase tracking-widest text-white/80 font-medium font-body">
            Loading Background {loadPercent}%
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0 block object-cover"
      />
    </>
  );
};
