"use client";
import React, { useEffect, useRef } from 'react';

const Timeline: React.FC = () => {
  const lineRef = useRef<HTMLSpanElement>(null);
  const timelineEventsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const timelineEvents = document.querySelectorAll<HTMLLIElement>('.timeline ul li');
    const line = lineRef.current;

    let i = 0;
    let i2 = 1;

    const showTime = (e: HTMLLIElement) => {
      e.setAttribute('done', 'true');
      (e.querySelector('.timeline-point') as HTMLElement)!.style.background = 'rgb(192 132 252)';
      (e.querySelector('.date') as HTMLElement)!.style.opacity = '100%';
      (e.querySelector('.date') as HTMLElement)!.style.color = 'white'; // Adjust text color
      (e.querySelector('p') as HTMLElement)!.style.opacity = '100%';
      (e.querySelector('p') as HTMLElement)!.style.color = 'white'; // Adjust text color
      (e.querySelector('p') as HTMLElement)!.style.transform = 'translateY(0px)';
    };

    const hideTime = (e: HTMLElement) => {
      e.removeAttribute('done');
      (e.querySelector('.timeline-point') as HTMLElement)!.style.background = 'rgb(228, 228, 228)';
      (e.querySelector('.date') as HTMLElement)!.style.opacity = '0%';
      (e.querySelector('.date') as HTMLElement)!.style.color = 'transparent'; // Hide text
      (e.querySelector('p') as HTMLElement)!.style.opacity = '0%';
      (e.querySelector('p') as HTMLElement)!.style.color = 'transparent'; // Hide text
      (e.querySelector('p') as HTMLElement)!.style.transform = 'translateY(-10px)';
    };

    const slowLoop = () => {
      setTimeout(() => {
        showTime(timelineEvents[i]);
        timelineProgress(i + 1);
        i++;
        if (i < timelineEvents.length) {
          slowLoop();
        }
      }, 500);
    };

    const timelineProgress = (value: number) => {
      const progress = `${(value / timelineEvents.length) * 100}%`;
      if (window.matchMedia('(min-width: 728px)').matches) {
        if (line) {
          line.style.width = progress;
          line.style.height = '4px';
        }
      } else {
        if (line) {
          line.style.height = progress;
          line.style.width = '4px';
        }
      }
    };

    const handleEventClick = (index: number) => {
      timelineEvents.forEach((ev, idx) => {
        if (idx <= index) {
          showTime(ev);
        } else {
          hideTime(ev);
        }
      });
      timelineProgress(index + 1); // Update the line progress to match the clicked event
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.9) {
            if (window.matchMedia('(min-width: 728px)').matches) {
              slowLoop();
            } else {
              showTime(entry.target as HTMLLIElement);
              timelineProgress(i2);
              i2++;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1, rootMargin: '0px 0px -50px 0px' }
    );

    if (window.matchMedia('(min-width: 728px)').matches) {
      if (timelineEventsRef.current) {
        observer.observe(timelineEventsRef.current);
      }
    } else {
      timelineEvents.forEach((t) => {
        observer.observe(t);
      });
    }

    timelineEvents.forEach((li, index) => {
      li.addEventListener('click', () => {
        handleEventClick(index);
      });
    });

    let doit: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(doit);
      doit = setTimeout(resizeEnd, 1200);
    };

    const resizeEnd = () => {
      i = 0;
      slowLoop();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-6 relative">
      <div className="text-5xl min-w-24 justify-center items-center text-center">
        <span className="font-bold p-2 text-center border-4 border-purple-400 Dispose rounded-lg mx-20">Timeline</span>
      </div>
      <section className="timeline py-32 relative">
        <div className="timeline-line relative bg-gray-200 w-1 md:w-full h-full md:h-1 rounded-md">
          <span ref={lineRef} className="timeline-innerline absolute bg-purple-400 w-1 md:w-0 h-0 md:h-1 transition-all duration-1000 ease-linear"></span>
        </div>

        <ul ref={timelineEventsRef} className="flex flex-col md:flex-row justify-center items-center mt-12 md:mt-0 relative">
          {['2000', '2005', '2010', '2015', '2020'].map((year, index) => (
            <li key={index} className="relative p-6 m-4">
              <span className="timeline-point absolute bg-gray-200 w-2 h-2 md:w-4 md:h-4 rounded-full top-6 md:top-0 md:left-1/2 transition-all duration-1500 ease-in-out"></span>
              <span className="date absolute text-sm transition-all duration-1500 ease-in-out Dispose" style={{ top: '-50px', left: '50%', transform: 'translateX(-50%)' }}>{year}</span>
              <p className=" text-white text-lg transform translate-y-[-10px] transition-all duration-1500 ease-in-out Dispose">Lorem, ipsum dolor sit amet</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Timeline;
