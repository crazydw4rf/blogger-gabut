import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  CatLoaf,
  CatPlaying,
  CatRolling,
  CatSitting,
  CatSleeping,
  CatStretching,
  CatWalking,
  PawPrint,
  type CatProps,
} from "../components/Cats";
import styles from "./index.module.css";

interface CatWaypointItem {
  id: string;
  component: React.ComponentType<CatProps>;
  outline?: boolean;
  alignClass: "alignLeft" | "alignRight" | "alignCenter" | "alignCenterLeft" | "alignCenterRight";
  width: number;
  height: number;
  pawConfig?: {
    offsetX: number;
    offsetY: number;
    angle: number;
    count: number;
  };
}

const CAT_TRAIL: CatWaypointItem[] = [
  {
    id: "loaf-1",
    component: CatLoaf,
    outline: false,
    alignClass: "alignRight",
    width: 220,
    height: 170,
    pawConfig: { offsetX: -60, offsetY: 120, angle: 130, count: 3 },
  },
  {
    id: "walking-1",
    component: CatWalking,
    outline: true,
    alignClass: "alignLeft",
    width: 250,
    height: 180,
    pawConfig: { offsetX: 180, offsetY: 110, angle: 50, count: 3 },
  },
  {
    id: "playing-1",
    component: CatPlaying,
    outline: false,
    alignClass: "alignCenterRight",
    width: 210,
    height: 230,
    pawConfig: { offsetX: -70, offsetY: 150, angle: 160, count: 3 },
  },
  {
    id: "rolling-1",
    component: CatRolling,
    outline: true,
    alignClass: "alignLeft",
    width: 240,
    height: 170,
    pawConfig: { offsetX: 160, offsetY: 100, angle: 45, count: 3 },
  },
  {
    id: "stretching-1",
    component: CatStretching,
    outline: false,
    alignClass: "alignCenter",
    width: 270,
    height: 160,
    pawConfig: { offsetX: 120, offsetY: 110, angle: 115, count: 3 },
  },
  {
    id: "sitting-1",
    component: CatSitting,
    outline: true,
    alignClass: "alignRight",
    width: 210,
    height: 230,
    pawConfig: { offsetX: -90, offsetY: 140, angle: -140, count: 3 },
  },
  {
    id: "sleeping-1",
    component: CatSleeping,
    outline: false,
    alignClass: "alignCenterLeft",
    width: 230,
    height: 185,
    pawConfig: { offsetX: 140, offsetY: 120, angle: 75, count: 3 },
  },
  {
    id: "walking-2",
    component: CatWalking,
    outline: false,
    alignClass: "alignRight",
    width: 250,
    height: 180,
    pawConfig: { offsetX: -80, offsetY: 110, angle: 145, count: 3 },
  },
  {
    id: "loaf-2",
    component: CatLoaf,
    outline: true,
    alignClass: "alignLeft",
    width: 220,
    height: 170,
    pawConfig: { offsetX: 150, offsetY: 110, angle: 40, count: 3 },
  },
  {
    id: "rolling-2",
    component: CatRolling,
    outline: false,
    alignClass: "alignCenterRight",
    width: 240,
    height: 170,
    pawConfig: { offsetX: -60, offsetY: 110, angle: 130, count: 3 },
  },
  {
    id: "playing-2",
    component: CatPlaying,
    outline: true,
    alignClass: "alignLeft",
    width: 210,
    height: 230,
    pawConfig: { offsetX: 160, offsetY: 140, angle: 55, count: 3 },
  },
  {
    id: "sleeping-2",
    component: CatSleeping,
    outline: true,
    alignClass: "alignCenter",
    width: 230,
    height: 185,
    pawConfig: { offsetX: 0, offsetY: 130, angle: 90, count: 3 },
  },
];

function Waypoint({ item }: { item: CatWaypointItem }): JSX.Element {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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
        rootMargin: "150px 0px 150px 0px",
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const CatComponent = item.component;

  return (
    <div
      ref={elementRef}
      className={clsx(
        styles.catWaypoint,
        styles[item.alignClass],
        visible && styles.waypointVisible
      )}
    >
      <div className={styles.catWrapper}>
        <CatComponent
          outline={item.outline}
          width={item.width}
          height={item.height}
          className={styles.catItem}
        />

        {item.pawConfig && (
          <div
            className={styles.pawTrail}
            style={{
              transform: `translate(${item.pawConfig.offsetX}px, ${item.pawConfig.offsetY}px)`,
            }}
          >
            {Array.from({ length: item.pawConfig.count }).map((_, idx) => (
              <PawPrint
                key={idx}
                size={22}
                rotation={item.pawConfig!.angle + (idx % 2 === 0 ? -12 : 12)}
                opacity={0.25 + idx * 0.08}
                style={{
                  transform: `translateY(${idx * 16}px) rotate(${
                    item.pawConfig!.angle + (idx % 2 === 0 ? -12 : 12)
                  }deg)`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Homepage ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main className={styles.catsMain}>
        {CAT_TRAIL.map((item) => (
          <Waypoint key={item.id} item={item} />
        ))}
      </main>
    </Layout>
  );
}
