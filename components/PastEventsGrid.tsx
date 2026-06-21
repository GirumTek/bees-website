'use client';

import { useState, useRef, useEffect } from 'react';
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { EVENTS_QUERY_RESULT } from "@/sanity.types";
import { formatEventDate } from "@/lib/formatDate";

type EventItem = EVENTS_QUERY_RESULT["past"][number];

export default function PastEventsGrid({ events }: { events: EventItem[] }) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedEvent) return;

    const previouslyFocused = triggerRef.current;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedEvent(null);
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    modalRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [selectedEvent]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <button
            key={event._id}
            type="button"
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setSelectedEvent(event);
            }}
            className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-200 bg-white aspect-[3/4] w-full text-left"
          >
            {event.image && (
              <Image
                src={urlFor(event.image).width(600).url()}
                alt={event.name ?? "BEES event"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-6">
              <h3 className="text-white font-bold text-xl">{event.name}</h3>
              <p className="text-green-400 text-sm">{formatEventDate(event.date ?? "")}</p>
            </div>
          </button>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedEvent.name ?? "Event"} details`}
            tabIndex={-1}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedEvent(null)} aria-label="Close" className="absolute top-4 right-4 z-50 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center">✕</button>
            <div className="overflow-y-auto">
              {selectedEvent.image && (
                <div className="relative w-full h-[50vh] bg-gray-100">
                  <Image src={urlFor(selectedEvent.image).url()} alt={selectedEvent.name ?? "BEES event"} fill sizes="100vw" className="object-contain" />
                </div>
              )}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedEvent.name}</h2>
                <p className="text-green-700 font-semibold mb-6">📍 {selectedEvent.location}</p>
                <div className="prose prose-green text-gray-600 max-w-none">
                  <PortableText value={selectedEvent.details ?? []} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}