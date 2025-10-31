import { Star } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    id: 1,
    name: "James W.",
    rating: 5,
    comment: "The best IPTV service I've ever used. The quality is amazing and the channel selection is huge. Highly recommended!"
  }, {
    id: 2,
    name: "Robert J.",
    rating: 4,
    comment: "Great service overall. The video quality is excellent and I love the VOD selection. Customer support is responsive too."
  }, {
    id: 3,
    name: "Michael B.",
    rating: 5,
    comment: "Switched from cable to this IPTV service and couldn't be happier. Saving money while getting more channels in better quality."
  }, {
    id: 4,
    name: "William D.",
    rating: 5,
    comment: "Incredible value for the price. The 4K channels are stunning and the service has been very reliable so far."
  }, {
    id: 5,
    name: "David M.",
    rating: 5,
    comment: "Easy to set up and works perfectly on all my devices. The EPG is well organized and the streams are stable."
  }, {
    id: 6,
    name: "Richard G.",
    rating: 5,
    comment: "Outstanding service! The picture quality is crystal clear and I've had zero buffering issues. Best IPTV provider by far!"
  }];
  return <section className="py-20 bg-gradient-to-b from-[hsl(220,23%,5%)] to-[hsl(220,23%,8%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-lg border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />)}
              </div>
              
              <p className="text-primary-foreground/90 mb-4 italic">"{testimonial.comment}"</p>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold mr-3 border border-primary/30">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">Verified Customer</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;