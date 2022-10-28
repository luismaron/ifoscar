import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import { useRouter } from 'next/router';

export function SidebarNav() {
  const router = useRouter();

  const activeRoute = router.pathname;

  return (
    <aside className="bg-gray-950 flex flex-col py-8 px-14">
      <div className="flex flex-col gap-9">
        <NavSection title="VideoClips">
          <NavLink
            title="Criar videoclipe"
            icon={<svg width="18" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M9.463 16.072a2.3 2.3 0 0 0-2.177-1.563 2.313 2.313 0 0 0-2.315 2.332v1.295H1.714A1.72 1.72 0 0 1 0 16.41v-3.282h1.286A2.313 2.313 0 0 0 3.6 10.795a2.313 2.313 0 0 0-2.314-2.331H0V5.182c0-.95.771-1.727 1.714-1.727h3.429V2.159C5.143.967 6.103 0 7.286 0c1.183 0 2.143.967 2.143 2.16v1.295h3.428a1.72 1.72 0 0 1 1.714 1.727v3.454h1.286a2.152 2.152 0 0 1 1.997 2.928 5.112 5.112 0 0 0-3.283-1.2c-2.837 0-5.142 2.323-5.142 5.181 0 .173 0 .354.034.527Zm4.251-3.981v2.59h-2.571v1.728h2.571V19h1.715v-2.59H18v-1.728h-2.571V12.09h-1.715Z" /></svg>}
            link="/videoclips/create"
            isActive={activeRoute === "/videoclips/create"}
          />
          <NavLink
            title="Listar videoclipe"
            icon={<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.857 8.571h-1.286V5.143c0-.952-.771-1.714-1.714-1.714H9.43V2.143a2.143 2.143 0 1 0-4.286 0v1.286H1.714A1.714 1.714 0 0 0 0 5.143V8.4h1.286A2.305 2.305 0 0 1 3.6 10.714a2.305 2.305 0 0 1-2.314 2.315H0v3.257A1.714 1.714 0 0 0 1.714 18h3.257v-1.286A2.305 2.305 0 0 1 7.286 14.4 2.305 2.305 0 0 1 9.6 16.714V18h3.257a1.714 1.714 0 0 0 1.714-1.714v-3.429h1.286a2.143 2.143 0 1 0 0-4.286Z" /></svg>}
            link="/videoclips"
            isActive={activeRoute === "/videoclips"}
          />
        </NavSection>
      </div>

      <div className="flex flex-col mt-9 gap-9 ">
        <NavSection title="Estudantes">
          <NavLink
            title="Criar estudante"
            icon={<svg width="18" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M9.463 16.072a2.3 2.3 0 0 0-2.177-1.563 2.313 2.313 0 0 0-2.315 2.332v1.295H1.714A1.72 1.72 0 0 1 0 16.41v-3.282h1.286A2.313 2.313 0 0 0 3.6 10.795a2.313 2.313 0 0 0-2.314-2.331H0V5.182c0-.95.771-1.727 1.714-1.727h3.429V2.159C5.143.967 6.103 0 7.286 0c1.183 0 2.143.967 2.143 2.16v1.295h3.428a1.72 1.72 0 0 1 1.714 1.727v3.454h1.286a2.152 2.152 0 0 1 1.997 2.928 5.112 5.112 0 0 0-3.283-1.2c-2.837 0-5.142 2.323-5.142 5.181 0 .173 0 .354.034.527Zm4.251-3.981v2.59h-2.571v1.728h2.571V19h1.715v-2.59H18v-1.728h-2.571V12.09h-1.715Z" /></svg>}
            link="/students/create"
            isActive={activeRoute === "/students/create"}
          />
          <NavLink
            title="Listar Estudantes"
            icon={<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.857 8.571h-1.286V5.143c0-.952-.771-1.714-1.714-1.714H9.43V2.143a2.143 2.143 0 1 0-4.286 0v1.286H1.714A1.714 1.714 0 0 0 0 5.143V8.4h1.286A2.305 2.305 0 0 1 3.6 10.714a2.305 2.305 0 0 1-2.314 2.315H0v3.257A1.714 1.714 0 0 0 1.714 18h3.257v-1.286A2.305 2.305 0 0 1 7.286 14.4 2.305 2.305 0 0 1 9.6 16.714V18h3.257a1.714 1.714 0 0 0 1.714-1.714v-3.429h1.286a2.143 2.143 0 1 0 0-4.286Z" /></svg>}
            link="/students"
            isActive={activeRoute === "/students"}
          />
        </NavSection>
      </div>
      <div className="flex flex-col mt-9 gap-9 ">
        <NavSection title="Vencedores">
          <NavLink
            title="Listar vencedores"
            icon={<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.857 8.571h-1.286V5.143c0-.952-.771-1.714-1.714-1.714H9.43V2.143a2.143 2.143 0 1 0-4.286 0v1.286H1.714A1.714 1.714 0 0 0 0 5.143V8.4h1.286A2.305 2.305 0 0 1 3.6 10.714a2.305 2.305 0 0 1-2.314 2.315H0v3.257A1.714 1.714 0 0 0 1.714 18h3.257v-1.286A2.305 2.305 0 0 1 7.286 14.4 2.305 2.305 0 0 1 9.6 16.714V18h3.257a1.714 1.714 0 0 0 1.714-1.714v-3.429h1.286a2.143 2.143 0 1 0 0-4.286Z" /></svg>}
            link="/winners"
            isActive={activeRoute === "/winners"}
          />
        </NavSection>
      </div>
    </aside>

  )
}