import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    //const[valorAtualEstado, FunçaoQueAtualizaEsseValor] = useState(valorQueOEstadoComeçaTendo)
    const storageTheme = //busco o valor salvo no navegador
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark'; //o valor retornado do localStorage será do tipo AvaliableThemes, senão define como padrão o dark
    return storageTheme;
  });

  const nextThemeIcon = {
    //objeto
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange( //função para trocar de tema
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //não seguirá o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    // document.documentElement.setAttribute('data-theme', theme);
  }

  // useEffect(() => {
  //   console.log('useEffect sem dependências', Date.now());
  // }); // Executado todas vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array deps vazio', Date.now());
  // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    //atualiza os componentes quando ocorre uma ação
    document.documentElement.setAttribute('data-theme', theme); //mudo o data-theme do html para o valor de theme atual.
    localStorage.setItem('theme', theme); //mudo o valor no navegador para que fique salvo, para quando recarregar a página.
  }, [theme]); // Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href='/'
        aria-label='Ver Ir para home'
        title='Ir para home'
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        href='history'
        className={styles.menuLink}
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        href='settings'
        className={styles.menuLink}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>

      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
