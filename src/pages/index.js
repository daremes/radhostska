import React from 'react';
import ImageGallery from '../components/ImageGallery';

export default () => (
  <div>
    <div className='cover' style={{ textAlign: 'center' }}>
      <div className='heading'>
        <div className='title'>
          BYT K PRONÁJMU
        </div>
        <div className='adress'>
          Radhoštská xx, Praha x...
        </div>
        <div className='phone'>
          +420 777 745 745
        </div>
      </div>
    </div>
    <div style={{ padding: '3rem 3rem 0 3rem' }}>
      <h2>Popis</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse potenti nullam ac tortor. 
      Magna eget est lorem ipsum dolor. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Bibendum at varius vel pharetra vel turpis. Eget nullam non nisi 
      </p>
      <p>
      est sit amet facilisis magna. Praesent tristique magna sit amet purus gravida. Et pharetra pharetra massa massa ultricies. Ultricies lacus sed turpis tincidunt id aliquet. 
      Nam at lectus urna duis convallis. Varius sit amet mattis vulputate enim nulla. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Pharetra pharetra massa massa 
      ultricies mi quis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
      </p>
    </div>
    <div style={{ padding: '3rem' }}>
      <h2>Galerie</h2>
      <ImageGallery />
    </div>
    <div style={{ padding: '3rem' }}>
      <h2>Mapa</h2>
    </div>
  </div>
)
