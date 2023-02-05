import Link from 'next/link'
import React from 'react'

function FAQ() {
  return (
      <div className='text-justify mx-10 mb-10'>
        <h1 className='text-4xl mt-16 text-indigo-500'>Preguntas Frecuentes 🤔</h1>
          <p className='mt-2'><em>Algunas de estas preguntas no son muy frecuentes, pero conviene conocerlas.</em></p>
          
          <h3 className='text-lg font-bold mt-2'>¿Quién puede postear en Devktters?✍️</h3>
          <p className='mt-2'><em>Cualquiera. Sí, tienes permiso para hacer un nuevo post de cualquier tipo, siempre y cuando cumpla con nuestras directrices de la comunidad y pase los filtros de spam de sentido común. Su mensaje podrá ser eliminado a discreción de los moderadores si consideran que no cumple los requisitos de nuestro código de conducta.</em></p>
          
          <h3 className='text-lg font-bold mt-2'>¿Cómo puedo publicar un artículo en Devktters?✍️</h3>
          {/* //Todo */}
          <p className='mt-2'><em>En construcción 🛠️</em></p>
          
          <h3 className='text-lg font-bold mt-2'>¿Puedo publicar algo que ya he escrito en mi propio blog?✍️</h3>
          <p className='mt-2'><em>Por supuesto, siempre que tengas los derechos necesarios para hacerlo. Y si es de calidad, lo publicaremos.</em></p>
          
          <h3 className='text-lg font-bold mt-2'>He encontrado un error (no una vulnerabilidad de seguridad). ¿Cómo lo comunico?✍️</h3>
          <p className='mt-2'><em>Contacta con nosotros a través del <Link className="underline text-indigo-400" href="/contact">formulario de contacto.</Link></em></p>
          
          <h3 className='text-lg font-bold mt-2'>He encontrado una vulnerabilidad de seguridad. ¿Cómo lo comunico?✍️</h3>
          <p className='mt-2'><em>Envíe un correo electrónico a <Link className='underline text-indigo-400' href='mailto:thethreedevsketters@gmail.com'>thethreedevsketters@gmail.com</Link></em></p>
          
          <h3 className='text-lg font-bold mt-2'>¿Soy propietario de los artículos que publico?✍️</h3>
          <p className='mt-2'><em>Sí, usted posee los derechos sobre el contenido que crea y publica en dev.to y tiene plena autoridad para publicar, editar y eliminar su contenido como considere oportuno.
          Al publicar contenidos en dev.to, nos concede una licencia no exclusiva para publicarlos, incluyendo todo lo que esté razonablemente relacionado con su publicación (como almacenarlos, mostrarlos, reformatearlos y distribuirlos).</em></p>

          <h3 className='text-lg font-bold mt-2'>¿Pondrán anuncios en las páginas de mis entradas?✍️</h3>
          <p className='mt-2'><em>Nunca se colocará un anuncio junto a la entrada de un usuario sin su consentimiento.</em></p>
          
          <h3 className='text-lg font-bold mt-2'>¿Puedo registrarme con correo electrónico y contraseña?✍️</h3>
          <p className='mt-2'><em>Como parte de nuestra defensa contra el spam, actualmente no ofrecemos a los usuarios la opción de registrarse por correo electrónico.
          Ahora mismo sólo ofrecemos la opción de registrarse mediante GitHub.El registro por correo electrónico está en fase de desarrollo.⚙️</em></p>
      </div>
  )
}

export default FAQ