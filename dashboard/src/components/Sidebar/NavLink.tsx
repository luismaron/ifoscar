import Link from "next/link";

interface NavLink {
  isActive?: boolean;
  title: string;
  icon: JSX.Element;
  link: string;
}

export function NavLink({ isActive = false, title, icon, link }: NavLink) {
  return (
    <Link href={link}>
      <a className={`flex gap-2 ${isActive ? 'text-yellow-500 fill-yellow-500' : 'text-white fill-white'}`}>
        {icon}
        <span className="text-sm">
          {title}
        </span>
      </a>
    </Link>
  )
}