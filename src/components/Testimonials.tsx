import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James W.",
      rating: 5,
      comment: "The best IPTV service I've ever used. The quality is amazing and the channel selection is huge. Highly recommended!"
    },
    {
      id: 2,
      name: "Robert J.",
      rating: 4,
      comment: "Great service overall. The video quality is excellent and I love the VOD selection. Customer support is responsive too."
    },
    {
      id: 3,
      name: "Michael B.",
      rating: 5,
      comment: "Switched from cable to this IPTV service and couldn't be happier. Saving money while getting more channels in better quality."
    },
    {
      id: 4,
      name: "William D.",
      rating: 5,
      comment: "Incredible value for the price. The 4K channels are stunning and the service has been very reliable so far."
    },
    {
      id: 5,
      name: "David M.",
      rating: 5,
      comment: "Easy to set up and works perfectly on all my devices. The EPG is well organized and the streams are stable."
    },
    {
      id: 6,
      name: "Richard G.",
      rating: 5,
      comment: "Outstanding service! The picture quality is crystal clear and I've had zero buffering issues. Best IPTV provider by far!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
