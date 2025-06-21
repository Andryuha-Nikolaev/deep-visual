import Link from "next/link";

import routesConstants from "$shared/constants/routes";

import s from "./HeaderLogo.module.scss";
import { DeepVisualLogo } from "$widgets/header/ui/logo/DeepVisualLogo";

const HeaderLogo = () => {
  return (
    <div className={s.block}>
      <Link
        aria-label={routesConstants.HOME.name}
        href={routesConstants.HOME.url}
        className={s.link}
      >
        <DeepVisualLogo />
      </Link>
    </div>
  );
};

export default HeaderLogo;
