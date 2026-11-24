import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  CatLaptop,
  CatLoaf,
  CatPlaying,
  CatRolling,
  CatSitting,
  CatSleeping,
  CatStretching,
  CatWalking,
  CatYarn,
  PawPrint,
  type CatProps,
} from "../components/Cats";
import styles from "./index.module.css";

interface CatWaypointItem {
  id: string;
  name: string;
  purrText: string;
  component: React.ComponentType<CatProps>;
  outline?: boolean;
  alignClass: "alignLeft" | "alignRight" | "alignCenter" | "alignCenterLeft" | "alignCenterRight";
  enterFrom: "enterLeft" | "enterRight" | "enterUp";
  width: number;
  height: number;
  pawDirection: "toRight" | "toLeft" | "toCenter";
}

const CAT_TRAIL: CatWaypointItem[] = [
  {
    id: "loaf-1",
    name: "Cozy Loaf",
    purrText: "prrrr~ so warm ♥",
    component: CatLoaf,
    outline: false,
    alignClass: "alignRight",
    enterFrom: "enterRight",
    width: 240,
    height: 186,
    pawDirection: "toLeft",
  },
  {
    id: "laptop-1",
    name: "Busy Kitty",
    purrText: "head pats please~ ✦",
    component: CatLaptop,
    outline: false,
    alignClass: "alignLeft",
    enterFrom: "enterLeft",
    width: 270,
    height: 202,
    pawDirection: "toRight",
  },
  {
    id: "walking-1",
    name: "Night Patrol",
    purrText: "tap tap meow ♪",
    component: CatWalking,
    outline: false,
    alignClass: "alignCenterRight",
    enterFrom: "enterRight",
    width: 270,
    height: 196,
    pawDirection: "toLeft",
  },
  {
    id: "playing-1",
    name: "Butterfly Chaser",
    purrText: "pounce! almost got it~",
    component: CatPlaying,
    outline: false,
    alignClass: "alignLeft",
    enterFrom: "enterLeft",
    width: 225,
    height: 250,
    pawDirection: "toRight",
  },
  {
    id: "stretching-1",
    name: "Big Stretch",
    purrText: "*biiig stretch* ~",
    component: CatStretching,
    outline: false,
    alignClass: "alignCenter",
    enterFrom: "enterUp",
    width: 290,
    height: 175,
    pawDirection: "toLeft",
  },
  {
    id: "yarn-1",
    name: "Tangled Yarn",
    purrText: "nyan! keep rolling ♪",
    component: CatYarn,
    outline: false,
    alignClass: "alignRight",
    enterFrom: "enterRight",
    width: 270,
    height: 190,
    pawDirection: "toLeft",
  },
  {
    id: "rolling-1",
    name: "Belly Roll",
    purrText: "hehe that tickles~ ♥",
    component: CatRolling,
    outline: false,
    alignClass: "alignCenterLeft",
    enterFrom: "enterLeft",
    width: 260,
    height: 186,
    pawDirection: "toRight",
  },
  {
    id: "sitting-1",
    name: "Curious Kitty",
    purrText: "meow? need a hand?",
    component: CatSitting,
    outline: false,
    alignClass: "alignRight",
    enterFrom: "enterRight",
    width: 225,
    height: 250,
    pawDirection: "toCenter",
  },
  {
    id: "sleeping-1",
    name: "Sleepy Kitty",
    purrText: "zzz... dreaming of fish ✦",
    component: CatSleeping,
    outline: false,
    alignClass: "alignCenter",
    enterFrom: "enterUp",
    width: 260,
    height: 208,
    pawDirection: "toCenter",
  },
];

interface WaypointProps {
  item: CatWaypointItem;
  isLast: boolean;
}

function Waypoint({ item, isLast }: WaypointProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [petBurstKey, setPetBurstKey] = useState(0);
  const [showPurr, setShowPurr] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const purrTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.12,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (purrTimerRef.current !== null) {
        window.clearTimeout(purrTimerRef.current);
      }
    };
  }, []);

  const handlePet = () => {
    setPetBurstKey((prev) => prev + 1);
    setShowPurr(true);
    if (purrTimerRef.current !== null) {
      window.clearTimeout(purrTimerRef.current);
    }
    purrTimerRef.current = window.setTimeout(() => {
      setShowPurr(false);
    }, 1500);
  };

  const CatComponent = item.component;

  return (
    <section
      id={`cat-${item.id}`}
      ref={elementRef}
      className={clsx(styles.catWaypoint, styles[item.alignClass], visible && styles.waypointVisible)}
    >
      <div className={clsx(styles.catStage, styles[item.enterFrom])}>
        <button
          type="button"
          onClick={handlePet}
          className={clsx(styles.catInteractiveBtn, petBurstKey > 0 && showPurr && styles.catPetBounce)}
          aria-label={`Pet ${item.name}`}
        >
          {showPurr && (
            <span key={petBurstKey} className={styles.purrBubble} role="status">
              {item.purrText}
            </span>
          )}
          <span className={styles.catSpotlight} aria-hidden="true" />
          <CatComponent outline={item.outline} width={item.width} height={item.height} className={styles.catItem} />
          <span className={styles.groundShadow} aria-hidden="true" />
        </button>
      </div>

      {!isLast && (
        <div className={clsx(styles.pawConnector, styles[item.pawDirection])} aria-hidden="true">
          {[0, 1, 2, 3].map((step) => {
            const baseAngle = item.pawDirection === "toRight" ? 145 : item.pawDirection === "toLeft" ? 215 : 180;
            const wiggle = step % 2 === 0 ? -12 : 12;
            const swayX =
              item.pawDirection === "toRight"
                ? step * 28
                : item.pawDirection === "toLeft"
                  ? -step * 28
                  : step % 2 === 0
                    ? -10
                    : 10;

            return (
              <span
                key={step}
                className={styles.pawStep}
                style={{
                  transitionDelay: `${0.18 + step * 0.12}s`,
                  transform: `translate(${swayX}px, ${step * 24}px)`,
                }}
              >
                <PawPrint size={20} rotation={baseAngle + wiggle} opacity={0.32 + step * 0.08} />
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
}

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroInner)}>
        <h1 className={clsx("hero__title", styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Homepage ${siteConfig.title}`} description={siteConfig.tagline}>
      <HomepageHeader />

      <main className={styles.catsMain}>
        {CAT_TRAIL.map((item, idx) => (
          <Waypoint key={item.id} item={item} isLast={idx === CAT_TRAIL.length - 1} />
        ))}
      </main>
    </Layout>
  );
}
