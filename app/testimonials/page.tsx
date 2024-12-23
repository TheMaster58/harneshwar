import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RootLayout from '../layout';
import Head from "next/head";

export default function Testimonials() {
    const testimonials = [
      {
        name: 'John Doe',
        text: 'Exceptional care and attention from the medical staff.',
        department: 'Cardiology',
        rating: 5,
      },
      {
        name: 'Jane Doe',
        text: 'The nurses were very caring and made me feel comfortable.',
        department: 'Neurology',
        rating: 5,
      },
      {
        name: 'Bob Smith',
        text: 'The care I received was top-notch. The staff were very friendly and helpful.',
        department: 'Orthopedics',
        rating: 4,
      },
      {
        name: 'Alice Johnson',
        text: 'The doctor was very professional and took the time to explain everything to me.',
        department: 'General Surgery',
        rating: 5,
      },
      // Add more testimonials...
    ];
  
    return (
      <RootLayout>
        <Navbar/>
        <Head>
          <title>Patient Testimonials - HealthCare Plus</title>
        </Head>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-blue-800">Patient Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-blue-950">{testimonial.name}</p>
                <p className="text-blue-600">{testimonial.department} Department</p>
              </div>
            ))}
          </div>
        </div>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {/* <img className="mx-auto h-12" src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg" alt=""/> */}
            <figure className="mt-10">
              <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
              </blockquote>
              <figcaption className="mt-10">
                <img className="mx-auto size-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Judith Black</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <Footer/>
      </RootLayout>
    );
  }