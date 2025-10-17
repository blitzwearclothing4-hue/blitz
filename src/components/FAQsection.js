"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What products do you manufacture?",
      answer:
        "We specialize in custom manufacturing of sportswear, fitness wear, casual wear, sublimation wear, martial arts uniforms, and gloves.",
    },
    {
      question: "Do you offer custom designs and private labeling?",
      answer:
        "Yes, we offer complete OEM and private label services, including custom logos, tags, packaging, and designs tailored to your brand.",
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "Our minimum order quantity varies by product type, but generally starts from 50 to 100 pieces per design.",
    },
    {
      question: "How do I place an order?",
      answer:
        "You can place an inquiry through the website by clicking the Add to cart button or visiting the Contact Us page. Our team will respond promptly.",
    },
    {
      question: "Can I order a sample before bulk production?",
      answer:
        "Yes, we can create a sample for approval before starting bulk production. Sample charges may apply and are often refundable on bulk orders.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We typically require 50% advance payment and the remaining before shipment. We accept bank transfers, Western Union, and other secure methods.",
    },
    {
      question: "How long does production take?",
      answer:
        "Production time depends on the order size and customization but usually takes 3 to 4 weeks after sample approval.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer global shipping via air cargo, sea freight, and express couriers like DHL, FedEx, and UPS.",
    },
    {
      question: "What if I want changes to my design after ordering?",
      answer:
        "Minor changes can be made during the sampling stage. After confirmation and production start, changes may not be possible.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "All products go through a strict quality control process, from fabric inspection to stitching, finishing, and final packing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl  mb-3">
          <span className="text-blue-700">Frequently</span> Asked Questions
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Everything you need to know about our manufacturing process, orders,
          and services.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-xl bg-zinc-900 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-zinc-800 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-base md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-700" size={22} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 pb-5 text-gray-400 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
