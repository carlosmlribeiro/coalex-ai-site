import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Coalex helped us move from endless AI pilots to production-ready systems. The human-in-the-loop workflows gave our executives the confidence they needed to finally deploy.",
      author: "Design Partner",
      role: "VP of Engineering, Enterprise Software",
      company: "Confidential"
    },
    {
      quote: "We were stuck in compliance hell with our AI agents. Coalex provided the audit trails and governance framework we needed to satisfy our regulators.",
      author: "Design Partner",
      role: "Chief Compliance Officer, Financial Services",
      company: "Confidential"
    },
    {
      quote: "The integration was remarkably simple. One line of code and we were up and running. Our domain experts love the approval workflows—they're finally part of the AI process.",
      author: "Design Partner",
      role: "CTO, Healthcare Technology",
      company: "Confidential"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from teams who escaped the AI Pilot Purgatory
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Quote className="h-12 w-12 text-primary-500" />
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white p-12 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're working hands-on with early customers to perfect the product. Your opportunity to get in early as a design partner and shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                Become a Design Partner
              </a>
              <a
                href="#waitlist"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-800 transition-colors text-lg border-2 border-white"
              >
                Join the Waiting List
              </a>
            </div>
            <p className="text-sm mt-6 text-primary-100">
              We're only accepting 5 design partners in 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
