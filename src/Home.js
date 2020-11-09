import React from 'react';

export default function Home() {

  //const [mode, setMode]=useState('web')
  const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');

    return (
      <div>
        <div>
            {
              !isInStandaloneMode()?
              <div class="alert alert-warning" role="alert">
                Usando el navegador!
              </div>
              :
              <div class="alert alert-warning" role="alert">
                App instalada
              </div>
            }
        </div>
        <div>
          <h1>Home component</h1>
        </div>
      </div>
      );
}
