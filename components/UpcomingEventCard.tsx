'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { EVENTS_QUERY_RESULT } from "@/sanity.types";

export default function UpcomingEventCard({ event, priority = false }: { event: EVENTS_QUERY_RESULT["upcoming"][number]; priority?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const eventDate = new Date(event.date || 0);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
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
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <div className="bg-white shadow-xl rounded-[2.5rem] overflow-hidden border border-gray-200 flex flex-col md:flex-row min-h-[300px]">
        {event.image && (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative w-full md:w-1/3 h-64 md:h-auto bg-gray-50 cursor-pointer"
          >
            <Image
              src={urlFor(event.image).width(1000).url()}
              alt={event.name ?? "Event image"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain hover:scale-[1.02] transition-transform"
              priority={priority}
            />
          </button>
        )}

        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap justify-between items-start gap-3 -mb-1"> {/* Tightened spacing */}
              <h3 className="text-3xl font-bold text-gray-900 leading-tight flex-1 min-w-0">{event.name}</h3>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-center border border-green-200 shrink-0">
                <div className="text-sm">{eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
                <div className="text-xs font-normal">{eventDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</div>
              </div>
            </div>
            <p className="text-green-700 font-semibold text-lg mb-0 leading-tight">📍 {event.location}</p>
            <div className="prose prose-green text-gray-600 max-w-none prose-p:m-0 mt-4"> {/* Increased spacing */}
              <PortableText value={event.details || []} />
            </div>
          </div>
        </div>
      </div>

      {isOpen && event.image && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${event.name ?? "Event"} image`}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button onClick={() => setIsOpen(false)} aria-label="Close" className="absolute top-6 right-6 text-white text-3xl z-[110]">✕</button>
          <div className="relative w-full max-w-5xl h-full max-h-[85vh]">
            <Image src={urlFor(event.image).url()} alt={event.name ?? "Event image"} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}