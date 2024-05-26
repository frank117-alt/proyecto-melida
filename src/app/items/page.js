import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/Footer'

export default function Items(){

    return(
        <>
        <Navbar/>

        <div className='mx-4 shadow-lg   bg-sky-100 py-6   '>

        <h1 className='text-sky-400 font-serif   text-4xl' >Historia de semillas nativas</h1>
        <div  className='mx-4 my-6  '>
            <p className='mt-6 text-lg font-mono tracking-tigth  hover:text-gray-800'> La identidad arraigada del pueblo pijao, descendiente de una nación con una rica cultura adaptada al territorio del centro de Colombia, especialmente en el Tolima. A lo largo de la historia, han mantenido su esencia altiva y arraigada a su territorio, buscando mejorar sus condiciones de vida.

La esencia de este pueblo se encuentra en sus tradiciones y en el vínculo con la tierra y el maíz, especialmente a través de la chicha, una bebida fundamental en su cultura. Las mujeres, custodias de la milenaria receta de la chicha, son piezas clave en la preservación de las variedades tradicionales de maíz. Sin embargo, estas semillas están amenazadas por diversas razones, como la sequía, la falta de tierras y agua, y la introducción de maíces transgénicos.

Ante esta situación, se hace un llamado a la protección y preservación de los maíces nativos y de la identidad asociada a ellos. Se propone una red de productores de semillas, así como prácticas agrícolas tradicionales y respetuosas con el medio ambiente, como el uso de abonos naturales y métodos de control de plagas no químicos.

Además, se promueve el intercambio y la difusión de semillas entre agricultores, junto con el compromiso de devolver el doble de maíz al término de la cosecha para continuar fortaleciendo la comunidad agrícola. Es de resalta la importancia de proteger la herencia cultural y agrícola del pueblo pijao, basada en el respeto a la tierra y sus tradiciones.</p>
  <span>autor:ACIT Orlando Pamo</span>
        </div>

        </div>
     
        <Footer/>
        </>
       
    )
}

