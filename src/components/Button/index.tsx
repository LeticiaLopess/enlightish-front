import { ButtonDefault } from "./subcomponents/ButtonDefault";
import { ButtonLink } from "./subcomponents/ButtonLink";
import { ButtonOutlined } from "./subcomponents/ButtonOutlined";
import { ButtonSecondary } from "./subcomponents/ButtonSecondary";

const Button = {
    Default: ButtonDefault,
    Secondary: ButtonSecondary,
    Outlined: ButtonOutlined,
    Link: ButtonLink,
};

export default Button.Default;
export { Button };
