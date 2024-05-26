import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/Footer'

export default function Especificos(){

    return(
        <>
        <Navbar/>

        <div className='mx-4 shadow-lg  mb-8 bg-blue-100 py-6 '>

        <h1 className='font-sm  text-2xl uppercase '></h1>
        <div  className='mx-4 my-6'>
            <h3 className='text-4xl text-sky-400 font-semibold tracking-tight '>   Protocolo de cuidado o proceso de las semillas nativas </h3>
            <p className='my-4 ml-4  text-gray-800 font-sans text-2xl'> En las comunidades indígenas se conservan las semillas en basijas de barro,en totumos,bolsas hechas de tela,bolsas plasticas cada una seleccionada según su especie para llevar a cabo  una
             conservación, así evadiendo factores ambientales
            hasta que llegue su etapa de  cultivo y la estación de la luna  para realizar el manejo de la tierra (limpiar,arreglar el terreno) para la siembra.
            </p>
          

        </div>
        <div  className='mx-4   border-my-6'>
            <h3 className='text-4xl text-sky-400 shadow-sm font-semibold tracking-tight '>Realizar  un proceso de fertilización para el cultivo</h3>
            <p className='my-4 ml-4 font-sans  text-gray-800 text-2xl'>
                Se  lleva a cabo un abono 100% organico(<span className='italic'> Tomado:claudina Loaiza,representante pijao de las semillas nativas </span>)además un proceso de fertilizante a base de hierbas.

            </p>
            <div className='lex flex lg:flex-row items-start max-w-7xl w-full px-6 lg:px-8'>
                <div  className='flex-initial w-64 mx-auto py-4 '>

                   
                <h3 className='text-3xl  w-64 text-sky-400 font-serif tracking-tight'>ABONOS</h3>

                     <ul className='list-disc list-inside text-gray-800 text-2xl space-y-4'>
                        <li>Barredura de corral(se barren las cocheras en las cuales se encuentran excremento de gallina,hojas secas,residuos de alimentos).<br/><br/>
</li>
                        <li>Excremento(chivos,ganado).<br/></li>
                        <li>Residuos de Igua(ramas).<br/></li>
                       <li>Tierra de  peña.<br/> </li> 
                       <li>Noni(fruta medicinal).<br/></li> 
                        <li>Papayo macho(hojas,tallos picados y secos).<br/>  </li>
                        <li>Albaca canela.<br/> </li>
                        <li>
                        Residuos de cocina(cascaras de alimentos,cascaras tostadas).
                        </li>
                       
                    </ul>
                    

                </div>

            <div className='flex-initial w-32 my-6 max-w-md mx-auto bg-white shadow-lg rounded-lg '>
                    <video className="w-full max-w-xs md:max-w-md lg:max-w-lg"  width="300" height="440" controls>
                        <source src='/assets/video.mp4'/>

                     </video>
                </div>
                        
                    </div>
                    <div>
                            
                      <h3 className='text-3xl mt-6 mb-6 text-sky-400 font-serif tracking-tight'>FERTILIZANTES</h3>
                     <ul className='list-disc list-inside text-gray-800 text-2xl space-y-4'>

                        <li>Oregano,albahaca de castilla,tomillo cuesta.<br/></li> 
                        <li>Cebolla,ajo(fertilizante para la plaga).<br/> </li> 
                        <li>Yerbas aromaticas para espantar la plaga(aji pajarito en estado verde)fermentado y machacado dando resultado aun veneno natural.<br/>              </li> 
                        <li>Paico oregano,Hierbabuena es un abono natural.<br/> </li> 
                    </ul>      
                
            </div>
           
        </div>

        <div className='mt-4 ml-4  rounded-lg'>
                <h1 className='text-3xl mt-6 mb-6 uppercase text-sky-400 font-serif tracking-tigh'>saludo a la madre naturaleza</h1>
                <article className='my-4 ml-4 text-gray-800 mb-12 text-2xl'>
                    --Es importante saludar a las plantas para evitar energías bravas y pedir permiso.<br/>
                    -- Hablar con nuestro entorno de árboles y frutas(no tocar)saludar o señalar con el dedo meñique. <br/>
                    --Pedir y recibir con amor a las plantas.<br/>
                    <span className='italic text-sm'>  (tomado de la Señora Claudina Loaiza)</span>
                </article>
            </div>

        </div>
     
       
        </>
       
    )
}