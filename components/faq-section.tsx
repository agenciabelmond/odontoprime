"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos cartões de crédito e débito, PIX, boleto bancário e dinheiro. Parcelamos em até 12x sem juros no cartão e oferecemos condições especiais de financiamento.",
  },
  {
    question: "Preciso de encaminhamento para agendar uma consulta?",
    answer:
      "Não é necessário encaminhamento. Você pode agendar diretamente pelo nosso WhatsApp ou telefone. Na primeira consulta, faremos uma avaliação completa.",
  },
  {
    question: "Quais os benefícios dos implantes dentários?",
    answer:
      "Um sorriso natural e bonito, perfeitamente integrado ao osso e à gengiva, proporcionando harmonia estética. Além disso, há uma melhora significativa na mastigação e na digestão, contribuindo para a saúde geral do organismo. O tratamento também promove aumento da autoestima e da confiança, tanto na vida pessoal quanto profissional. A fala se torna mais clara e segura, com a restauração adequada da fonética. Tudo isso resulta em mais qualidade de vida, permitindo sorrir, comer e falar sem constrangimentos.",
  },
  {
    question: "Com que idade posso usar aparelho ortodôntico?",
    answer:
      "O aparelho pode ser usado em qualquer idade, desde crianças até adultos, desde que haja indicação após avaliação odontológica. O ideal é realizar uma consulta para identificar o melhor momento para iniciar o tratamento",
  },
]

export function FaqSection() {
  return (
    <section className="bg-[#5C0D1B] py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5C25C]">
            FAQ
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#F8F4EC] sm:text-4xl">
            Perguntas Frequentes
          </h2>

          <p className="mt-3 text-[#F8F4EC]/80">
            Tire suas dúvidas sobre nossos serviços e atendimentos.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-[#F5C25C]/20 bg-[#F8F4EC]/5 backdrop-blur-sm px-6 transition-all duration-300 data-[state=open]:border-[#F5C25C]/60 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-[#F8F4EC] hover:text-[#F5C25C] sm:text-base [&[data-state=open]]:text-[#F5C25C]">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-sm leading-relaxed text-[#F8F4EC]/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}