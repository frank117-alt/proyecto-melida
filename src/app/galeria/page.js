import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/Footer';
import Image from 'next/image';

const datos = [
  {
    nombre: 'Aguacate común',
    nombre_cientifico:'(persea americana)',
    href: '/assets/aguacate.jpg',
    description: 'Es una fruta exquisita ya que contine potacio y es vital para el cabello.',
  },
  {
    nombre: ' Limon pajarito:',
    nombre_cientifico:'(citrus reticulata)',

    href: '/assets/limon.jpg',
    description: 'Es efectivo para síntomas de gripa o dolores de estomago (frios).',
  },
  {
    nombre: 'Mata de cachaco:',
    nombre_cientifico:'(musa spp)',

    href: '/assets/plateno.jpg',
    description: 'Es un delicioso alimento, su uso son las hojas que sirve como envoltura del tamal.',
  },
  {
    nombre: 'Maíz guacamayo:',
    nombre_cientifico:'(zea mays)',

    href: '/assets/maiz.jpg',
    description: 'Con estos granos se hace la bebida mas tradicional de los indígenas la llamada chicha su uso es medicinal y ancestral.',
  },{
  nombre: 'Orégano',
  nombre_cientifico:'(origanum vulgare)',

  href: '/assets/oregano.jpg',
  description: 'Planta medicinal para aliviar dolores como la tensión, su uso como condimentación de variedades de platos como es la rellena.',
}
,{
  nombre: 'Suelda con suelda',
  nombre_cientifico:'(commelina erecta)',

  href: '/assets/ace.jpg',
  description: 'Su uso medicinal para cataratas en los ojos y ardores de los ojos.',
},{
  nombre: 'Acetaminofén',
  nombre_cientifico:'(plectranthus ornatus codd)',

  href: '/assets/a.jpg',
  description: ' Alivia dolores.',
},{
  nombre: 'Albahaca de castilla',
  nombre_cientifico:'(ocinum basilicum)',

  href: '/assets/jem.jpg',
  description: 'uso medicinal como tambien sus semillas ayuda a la limpieza de las vistas.',
},{
  nombre: 'Genjibre',
  nombre_cientifico:'(zingiber officinale)',

  href: '/assets/len.jpg',
  description: 'Uso medicinal como nauseas, colon, dolores de estomago y dolores musculares.',
},{
  nombre: 'Lengua de suegra',
  nombre_cientifico:'(kalanchoe gastonis-bonnieri)',

  href: '/assets/mari.jpg',
  description: ' sirve para el cáncer y livia 70 enfermedades.',
},{
  nombre: 'Marihuana',
  nombre_cientifico:'(cannabaceae)',

  href: '/assets/mar.jpg',
  description: ' uso medicinal como en pomadas para dolores muscular o golpes.',
},{
  nombre: 'Limoncillo',
  nombre_cientifico:'(cymbopogon citratus)',

  href: '/assets/limoc.jpg',
  description: 'Uso medicinal y aromáticas',
},{
  nombre: 'Penicilina',
  nombre_cientifico:'(prnicillium chrysogenum)',

  href: '/assets/pen.jpg',
  description: 'Para las heridas o cortes ',
},{
  nombre: 'Caña agria',
  nombre_cientifico:'(zingiber zerumbet)',

  href: '/assets/cana.jpg',
  description: 'Para la tos.',
},{
  nombre: 'Insulina',
  nombre_cientifico:'(anredera cordofolia)',

  href: '/assets/insu.jpg',
  description: 'Sirve para la diabetes .',
},{
  nombre: 'Mata sagu',
  nombre_cientifico:'(maranta arundinacea)',

  href: '/assets/mata.jpg',
  description: 'Consumo de coladas.',
},{
  nombre: 'Barbasco',
  nombre_cientifico:'(tephrosia vogeii)',

  href: '/assets/barba.jpg',
  description: 'Se usa para pescar y para hacer fertilizantes.',
},{
  nombre: 'Matarraton',
  nombre_cientifico:'(gliricida septiu)',

  href: '/assets/matar.jpg',
  description: 'Baños de calor. ',
},{
  nombre: 'Yopal',
  nombre_cientifico:'(opuntia cochenillifera)',
  href: '/assets/y.jpg',
  description: 'Se consume en ensaladas.',
},{
  nombre: 'Pela',
  nombre_cientifico:'(vachellia tortillis)',
  href: '/assets/pe.jpg',
  description: 'Uso medicinal para dengue.',
},{
  nombre: 'Romero',
  nombre_cientifico:'(salvia rosmarinus)',
  href: '/assets/rom.jpg',
  description: 'Uso condimentos y medicinal.',
},{
  nombre: 'Hierbabuena criolla',
  nombre_cientifico:'(mentha spicata)',
  href: '/assets/hi.jpg',
  description: 'Planta aromatica alivia dolores estomacales y cólicos y adornos',
},{
  nombre: 'Escobita rial',
  nombre_cientifico:'(orchorus orinocensis)',
  href: '/assets/esco.jpg',
  description: 'para cualquier dolor.',
},{
  nombre: 'Savila',
  nombre_cientifico:'(aloe vera)',
  href: '/assets/sav.jpg',
  description: ' Sirve para la gripa.',
},{
  nombre: 'Cilandro mocho',
  nombre_cientifico:'(eryngim foetidum)',
  href: '/assets/cil.jpg',
  description: 'Para el aliento y preparacion de alimentos.',
},{
  nombre: 'Coca',
  nombre_cientifico:'(erythroxylum coca)',
  href: '/assets/coca.jpg',
  description: 'medicina ancestral “enfermedad del coco” y dolores de muela.',
},{
  nombre: 'Limón mandarino:',
  nombre_cientifico:'(citrus reticulata)',
  href: '/assets/limos.jpg',
  description: 'En bebidas y hervido para medicina.',
},{
  nombre: 'Noni:',
  nombre_cientifico:'(morinda citrifolia)',
  href: '/assets/noni.jpg',
  description: 'Es adecuado para el dolor de espalda.',
},
];
const datos_semillas=[
  {
    nombre: 'Palmicha',
    nombre_cientifico:'(carludovia-palmata)',
    href: '/assets/palma.jpg',
    description: 'Es una planta muy curiosa por sus hoja abanicadas   utilidad: se hacen sombreros, tejidos para el uso domesticos, cestas y en techos de casa, las hojas mas tiernas cerca de los cogollos se comen en ensaladas o con huevos.',
  },{
    nombre: 'Mata de fique criollo',
    nombre_cientifico:'(furcraea bedinghausii)',
    href: '/assets/fico.jpg',
    description: 'Esta es un planta que utiliza para cuerdas o lazos, hamacas, dorotes para los bebes, alfonbras base a este, canastos.',
  },{
    nombre: 'Anon',
    nombre_cientifico:'(annona squamosa)',
    href: '/assets/anox.jpg',
    description: 'Fruta ancestral y su hojas sirven para la tension.',
  },{
    nombre: 'Tomate perla',
    nombre_cientifico:'(solanum lycopersycum)',
    href: '/assets/toma.jpg',
    description: 'Alimento para ensaladas y comidas.',
  },
  {
    nombre: 'Patilla criolla:',
    nombre_cientifico:'(citrullus lanatus)',
    href: '/assets/anon.jpg',
    description: 'Fruto fugoso.',
  },{
    nombre: 'Frijol bagabundo :',
    nombre_cientifico:'(phaseolus vulgaris)',
    href: '/assets/frijol.jpg',
    description: 'Delicioso con huevo o al gusto.',
  },,{
    nombre: 'Algodón pajarito: ',
    nombre_cientifico:'(gossypium herbaceum)',
    href: '/assets/algo.jpg',
    description: 'Limpieza de heridas. ',
  },{
    nombre: 'Melón',
    nombre_cientifico:'(cucumis melo)',
    href: '/assets/melo.jpg',
    description: 'Fruta un poco desabrido.',
  },{
    nombre: 'Cacao',
    nombre_cientifico:'(theobroma cacao)',
    href: '/assets/caca.jpg',
    description: 'Se realiza el chocolate.',
  },{
    nombre: 'Papayo criollo:',
    nombre_cientifico:'(solanum phureja)',
    href: '/assets/papa.jpg',
    description: 'Es bueno para la digestión.',
  },{
    nombre: 'Mamoncillo',
    nombre_cientifico:'(melicoccus bijugatus)',
    href: '/assets/mamon.jpg',
    description: 'Su consumo sirve para la gripa y alivia el dolor de garganta.',
  }
  ,{
    nombre: 'Guanabana',
    nombre_cientifico:'(annona muricata)',
    href: '/assets/gua.jpg',
    description: 'Sus hojas alivia la diabetes e hipertensión y para el cáncer.  ',
  }
     
    
]

export default function Galeria() {
  return (
    <>
      <Navbar />

      <div className="mx-4 shadow-lg bg-sky-100 py-6">
        <h1 className="text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
          Plantas Medicinales
        </h1>
        <div className="mx-4 my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-12 border-inherit">
            {datos.map((item) => (
              <div
                key={item.nombre}
                className="transition duration-800 ease-in-out bg-gray-50 hover:bg-100-600 transform hover:-translate-y-1 hover:scale-105 rounded-lg p-4 border border-gray-100"
              >
                
                <Image
                  src={item.href}
                  height={600}
                  width={600}
                  alt={item.nombre}
                  className="w-full h-auto border border-sky-400 rounded-full mx-auto mt-4"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">
                    {item.nombre}</div>
                    <span className='text-semibold text-blue-500 italic'>{item.nombre_cientifico}</span>

                  <p className="text-gray-700 text-base text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
                    
           
          </div>

        </div>
        <div className='mb-16' >
           <div>
            <h1 className='text-4xl text-bold text-sky-500 font-bold'> Frutos y semillas</h1>
            <div className="mx-4 my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-12 border-inherit">
            {datos_semillas.map((item) => (
              <div
                key={item.nombre}
                className="transition duration-800 ease-in-out bg-gray-50 hover:bg-100-600 transform hover:-translate-y-1 hover:scale-105 rounded-lg p-4 border border-gray-100"
              >
                <Image
                  src={item.href}
                  height={600}
                  width={600}
                  alt={item.nombre}
                  className="w-full h-auto border border-sky-400 rounded-full mx-auto mt-4"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">{item.nombre}</div>
                  <span className='text-semibold text-blue-500 italic'>{item.nombre_cientifico}</span>
                  <p className="text-gray-700 text-base text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
                    
           
          </div>

        </div>
           </div>
        
        </div>
      </div>

      <Footer />
    </>
    
  );
}
