import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
type Props = {
  children: React.ReactNode;
  items: number;
};

export default function Carousel({ children, items }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    wrapperRef.current?.addEventListener("scroll", (e) => {
      const container = e.target as HTMLDivElement;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      const activeIndicator = Math.round(
        (scrollPercentage * (items - 1)) / 100
      );
      setActive(activeIndicator);
    });
  }, [wrapperRef, items]);

  function scrollLeft() {
    const container = document.querySelector(`.${styles.itemWrapper}`);
    if (container) {
      container.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    const container = document.querySelector(`.${styles.itemWrapper}`);
    if (container) {
      container.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  }

  function goToIndicator(index: number) {
    const container = document.querySelector(`.${styles.itemWrapper}`);
    if (container) {
      container.scrollTo({
        left: (container.scrollWidth / items) * index,
        behavior: "smooth",
      });
    }
  }
  useEffect(() => {
    wrapperRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [children]);

  return (
    <div className={styles.container}>
      <div ref={wrapperRef} className={styles.itemWrapper}>
        {children}
      </div>
      <div className={styles.indicator}>
        {Array.from({ length: items }, (_, i) => (
          <button
            key={i}
            onClick={() => goToIndicator(i)}
            className={styles.dot}
            style={{
              backgroundColor:
                (i === active && "hsl(0, 0%, 10%)") || "hsl(0, 0%, 70%)",
            }}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonPrev} onClick={() => scrollLeft()}>
          <Image
            src="/icons/chevron-circled.svg"
            alt="arrow left"
            width={40}
            height={40}
          />
        </button>
        <button className={styles.buttonNext} onClick={() => scrollRight()}>
          <Image
            src="/icons/chevron-circled.svg"
            alt="arrow left"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}
