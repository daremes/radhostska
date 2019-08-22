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
          Radhošťská 2278/1, Praha 3 = Vinohrady
        </div>
        <div className='phone'>
          <a href="tel:+420777555444">+420 724 905 627</a>
          <div><a href="mailto:katka_trnkova@centrum.cz">katka_trnkova@centrum.cz</a></div>
        </div>
      </div>
    </div>
    <div className='padding'>
      <h2>Popis</h2>
      <p><b> Pronájem bytu 3+1,89 m2 Praha - Vinohrady</b></p>
      <p>Nabízím k dlouhodobému pronájmu pěkný světlý byt 3+1 na Vinohradech o celkové výměře
        89,7m2, roh ulic Vinohradská a Radhošťská (prvorepublikový palác Žáček), 4.NP s výtahem.
      </p> 
      <p>Byt se skládá ze tří samostatných, neprůchozích pokojů, kuchyně, haly, WC, koupelny a komory. K
        bytu náleží sklep o výměře cca 5m.
      <b> Byt je po kompletní rekonstrukci z roku 2018</b>, částečně vybavený (koupelna, WC, kuchyně).
        V pokojích a hale je zrenovovaná parketová podlaha, v ostatních místnostech nová dlažba. Kuchyň
        je vybavena kuchyňskou linkou s veškerými spotřebiči (kombinovaný sporák, myčka, lednice s
        mrazákem, digestoř), koupelna s vanou, ústřední topení.
      </p>
      <p><b>Nájemné činí 30.000,- měsičně + poplatky.</b></p>
      
      <p>
        V ceně nájemného jsou zahrnuty úhrady za užívání bytu
        (teplo, ohřev teplé vody, studená voda, odvoz odpadu, společná elektřina, výtah, fond oprav,
        odměna za správu, úklid domu a SV pro TV), elektřina a plyn nejsou zahrnuty v ceně a budou
        přepsány na nového uživatele bytu. Při podpisu nájemní smlouvy bude složena vratná kauce ve výši dvou měsíčních nájmů.</p>
      <p>
        V okolí se nachází veškerá občanská vybavenost, tramvajová zastávka je téměř před domem, metro
        A pět minut pěšky. Stanice metra <b>Flora</b>.
        </p>
        <p>
        Vhodné i pro spolubydlení, např.studenty VŠ.
        K dispozici od poloviny září 2019.
        </p>
    </div>
    <div className='padding'>
      <h2>Galerie</h2>
      <ImageGallery />
    </div>
    <div className='padding'>
      <h2>Mapa</h2>
      <img src='https://i.imgur.com/l0W95Ha.jpg' alt='mapa'/>
    </div>
  </div>
)
