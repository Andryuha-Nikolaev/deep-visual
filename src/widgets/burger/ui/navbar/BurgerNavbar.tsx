import s from "./BurgerNavbar.module.scss";
import { menu } from "$shared/constants/menu";
import { RootLink } from "$shared/ui/links/root";

const BurgerNavbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {menu.map((item) => (
          <li key={item.name}>
            <RootLink href={item.url}>{item.name}</RootLink>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BurgerNavbar;
