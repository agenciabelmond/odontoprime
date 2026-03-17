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
      "O implante imita a raiz do dente e recebe uma coroa que parece um dente real. O resultado fica muito semelhante aos dentes naturais.",
  },
    {
    question: "Qual o valor da consulta?",
    answer:
      "O valor da nossa consulta é totalmente gratuito. Aqui, você recebe um atendimento personalizado e humanizado, onde analisamos seu caso com cuidado e atenção, entendendo exatamente suas necessidades e expectativas.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-gradient-to-br from-[#111315] via-[#16181c] to-[#0f1113] py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#e0b76a]">
            FAQ
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Perguntas Frequentes
          </h2>

          <p className="mt-3 text-white/60">
            Tire suas dúvidas sobre nossos serviços e atendimento.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 transition-all duration-300 data-[state=open]:border-[#e0b76a]/40 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-white hover:text-[#e0b76a] sm:text-base [&[data-state=open]]:text-[#e0b76a]">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-sm leading-relaxed text-white/80">
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