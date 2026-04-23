"use client"
import { MapPin, Clock, Phone, Play, X } from "lucide-react"
import { useRef, useState } from "react"

export function LocationSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  const [openVideo, setOpenVideo] = useState(false)
  const [startedMobile, setStartedMobile] = useState(false)

  const videoSrc = "/estrutura.mp4"

  const handleMobilePlay = async () => {
    if (!videoRef.current) return

    try {
      setStartedMobile(true)
      await videoRef.current.play()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDesktopPlay = () => {
    setOpenVideo(true)
  }

  const closeVideo = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }

    setOpenVideo(false)
  }

  return (
    <>
      <section id="localizacao" className="bg-[#1a0a0d] py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-[#3a141a] via-[#4a1c22] to-[#2b0f14] border border-[#d4af37]/20 shadow-[0_0_40px_rgba(0,0,0,0.6)] px-6 py-12 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#d4af37]">
                Localização
              </span>

              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                Conheça a Odonto Prime
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              {/* MOBILE */}
              <div className="flex justify-center lg:hidden">
                <div className="relative w-full max-w-[340px] overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-black shadow-2xl">
                  <div className="relative aspect-[9/16]">
                    <video
                      ref={videoRef}
                      className="h-full w-full object-cover"
                      preload="metadata"
                      playsInline
                      controls={startedMobile}
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>

                    {!startedMobile && (
                      <button
                        onClick={handleMobilePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/20"
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37] text-[#2b0f14] shadow-[0_0_30px_rgba(212,175,55,0.7)]">
                          <Play className="ml-1 h-10 w-10 fill-current" />
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* DESKTOP */}
              <div className="hidden lg:flex justify-center">
                <button
                  type="button"
                  onClick={handleDesktopPlay}
                  className="group relative h-[360px] w-[360px] overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-black shadow-2xl"
                >
                  <video
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#d4af37] text-[#2b0f14] shadow-[0_0_35px_rgba(212,175,55,0.8)]">
                      <Play className="ml-1 h-12 w-12 fill-current" />
                    </div>
                  </div>
                </button>
              </div>

              {/* INFOS */}
              <div className="flex flex-col justify-center gap-8 lg:pr-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#d4af37]">
                      Endereço
                    </h3>

                    <p className="mt-1 leading-relaxed text-gray-300">
                      Estrada dos Bandeirantes, 5172
                      <br />
                      Curicica, Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                    <Clock className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#d4af37]">
                      Horário de Funcionamento
                    </h3>

                    <p className="mt-1 leading-relaxed text-gray-300">
                      Segunda à Sexta: 9h às 18h
                      <br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                    <Phone className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#d4af37]">
                      Contato
                    </h3>

                    <p className="mt-1 leading-relaxed text-gray-300">
                      WhatsApp: (21) 96641-6593
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/+5521966416593?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-base font-semibold text-[#2b0f14] shadow-lg shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] sm:text-lg"
                >
                  AGENDAR UM HORÁRIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
          <button
            type="button"
            onClick={closeVideo}
            className="absolute right-6 top-6 text-white hover:text-[#d4af37]"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="w-full max-w-[420px] overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative aspect-[9/16] bg-black">
              <video
                ref={modalVideoRef}
                className="h-full w-full object-cover"
                controls
                autoPlay
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}