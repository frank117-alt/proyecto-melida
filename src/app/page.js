import Footer from "./components/Footer.jsx"
import Navbar from "./components/navbar.jsx"
import './apps.css';


const links = [


  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [


  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Home(){
  return(
    <div className="relative isolat   bg-center from-slate-400 bg-current mt-4 ml-2 ">

        <Navbar/>
        
        <div className="bg-cover-custom  relative isolate overflow-hidden bg-white py-24 sm:py-32">
     
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-8xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        
      </div>
      <div className="mx-auto max-w-7xl flex px-6 lg:px-8">
  <div className="lg:ml-auto max-w-2xl lg:mr-0 flex-1 w-32">
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
      Semillas del Tolima:una mirada a la biodiversidad agrícola en Coyaima
    </h2>
    <p className="mt-6 text-2xl font-bold font-sans leading-8 text-gray-100">
      Las especies de semillas nativas son aquellas que se originaron en el territorio como producto de la evolución biológica, hacen parte de nuestros ecosistemas y biodiversidad, como la papa, el maíz, la quinua y el amaranto, entre otros.
    </p>
  </div>
</div>

    </div>
        <Footer/>
    </div>
  )
}
