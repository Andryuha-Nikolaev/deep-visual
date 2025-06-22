import { menu } from "$shared/constants/menu";
import { RootLink } from "$shared/ui/links/root";
import s from "./HeaderNavbar.module.scss";

const HeaderNavbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {menu.map((item) => (
          <li key={item.name}>
            <RootLink href={item.url}>{item.name}</RootLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
