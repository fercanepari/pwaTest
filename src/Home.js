import React, {useState} from 'react';

export default function Home() {

  const [mode, setMode]=useState('web')

  if (window.matchMedia('(display-mode: standalone)').matches) {
    setMode('standalone')
  }

    return (
      <div>
        <div>
            {
              mode==='web'?
              <div class="alert alert-warning" role="alert">
                Usando el navegador!
              </div>
              :
              null
            }
          </div>
        <div>
          <h1>Home component</h1>
        </div>
      </div>
      );
}
