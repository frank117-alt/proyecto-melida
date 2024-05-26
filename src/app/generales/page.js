import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/Footer'

export default function General(){

    return(
        <>
        <Navbar/>

        <div className='mx-4 shadow-lg bg-sky-100 py-6 '>
        <h1 className='font-semibold text-sky-400  text-2xl uppercase'>objetivo general</h1>
        <div  className='mx-4 font-mono my-6'>
         Es investigar y analizar la diversidad de semillas en la región del Tolima,como un enfoque específico en la comunidad
         de Coyaima.se busca comprender la variedad de semillas autóctonas y cultivadas presentes en la zona,así como 
         su importancia en la biodiversidad agrícola .Además se pretende identificar los desafíos y opotunudades relacionados
         con la conservación y el uso sostenible de esta semillas, con el fin de promover prásticas agrícolas que contribuyan a la seguridad alimentaria, la 
         resiliencia climática y la preservación de la herencia cultural agrícola en Coyaima y sus alrededores.
   
        </div>
     </div>
        <Footer/>
        </>
       
    )
}