"use client"

import { Play, X } from "lucide-react"
import { useState } from "react"

const videos = [
  {
    src: "/ortodontia.mp4",
    alt: "Ortodontia Odonto Prime",
  },
  {
    src: "/procedimentos.mp4",
    alt: "Odonto Prime",
  },
  {
    src: "/implante.mp4",
    alt: "Implante Odonto Prime",
  },
]

export function GallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const openVideo = (src: string) => {
    setSelectedVideo(src)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <section className="bg-[#5C0D1B] py-16 sm:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#F8F4EC] sm:text-4xl lg:text-5xl">
              Excelência em Cada Detalhe
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#F8F4EC]/85">
              Na{" "}
              <span className="font-semibold text-[#F5C25C] drop-shadow-[0_0_10px_rgba(245,194,92,0.7)]">
                Odonto Prime
              </span>
              , unimos tecnologia de ponta, conforto absoluto e um atendimento
              humanizado para transformar sua experiência odontológica.
            </p>
          </div>

          {/* Grid de vídeos */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openVideo(video.src)}
                className="group relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(245,194,92,0.15)]"
              >
                <div className="relative aspect-square bg-black">
                  <video
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#5C0D1B]/35 transition duration-500 group-hover:bg-[#5C0D1B]/20" />

                  {/* Play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F5C25C] text-[#5C0D1B] shadow-[0_0_30px_rgba(245,194,92,0.5)] transition duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-10 w-10 fill-current" />
                    </div>
                  </div>

                  {/* Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-500 group-hover:ring-[#F5C25C]/50" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal vídeo */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
          <button
            type="button"
            onClick={closeVideo}
            className="absolute right-6 top-6 text-white transition hover:text-[#F5C25C]"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="w-full max-w-[420px] overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative aspect-[9/16] bg-black">
              <video
                className="h-full w-full object-cover"
                controls
                autoPlay
                playsInline
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}