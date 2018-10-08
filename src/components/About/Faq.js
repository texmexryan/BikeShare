import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'





export default function Policy () {
  return (

  <main className = 'about-container'>
    <div className='banner'>
    <h1 className='about-head' >FAQ</h1>
    </div>
  <div className='faq-div'>
    
    <p className='about-head-faq'> 
    <h2 className='faq-question'>Question Here:</h2>
    <br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nulla pretium arcu nec enim blandit, sit amet feugiat felis faucibus. 
In et leo hendrerit, finibus turpis ac, finibus leo. Fusce libero dolor, ornare non mi ac, scelerisque suscipit ipsum. Mauris a turpis justo. Nulla id leo non nisi commodo pulvinar quis sit amet leo. 
In dolor lorem, cursus consequat pretium vitae, rutrum quis enim. Vivamus a accumsan neque. 
Nulla facilisi. Maecenas ultricies libero non erat bibendum maximus.

    </p>
    <p className='about-head-faq'> 
    <h2 className='faq-question'>Damage to your bike? Need to file a claim?</h2>
    <br/>
    Please file any damage, theft, or loss claims by filling out this <Link className='claim-link' to ='./claim'>form.</Link>
     If you have any further questions please contact us at support@bikeshare.com

    </p>
    <p className='about-head-faq'> 
    <h2 className='faq-question'>Question Here:</h2>
    <br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nulla pretium arcu nec enim blandit, sit amet feugiat felis faucibus. 
In et leo hendrerit, finibus turpis ac, finibus leo. Fusce libero dolor, ornare non mi ac, scelerisque suscipit ipsum. Mauris a turpis justo. Nulla id leo non nisi commodo pulvinar quis sit amet leo. 
In dolor lorem, cursus consequat pretium vitae, rutrum quis enim. Vivamus a accumsan neque. 
Nulla facilisi. Maecenas ultricies libero non erat bibendum maximus.

    </p>
    <p className='about-head-faq'> 
    <h2 className='faq-question'>Question Here:</h2>
    <br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nulla pretium arcu nec enim blandit, sit amet feugiat felis faucibus. 
In et leo hendrerit, finibus turpis ac, finibus leo. Fusce libero dolor, ornare non mi ac, scelerisque suscipit ipsum. Mauris a turpis justo. Nulla id leo non nisi commodo pulvinar quis sit amet leo. 
In dolor lorem, cursus consequat pretium vitae, rutrum quis enim. Vivamus a accumsan neque. 
Nulla facilisi. Maecenas ultricies libero non erat bibendum maximus.

    </p>
    

    

    </div>
  </main>
  )
}