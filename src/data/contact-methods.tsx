import { SiProtonmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import type {IconType} from "react-icons";

type ContactMethod = {
    method: string;
    contact: string;
    link: string;
    icon: IconType;
}

export const contactMethods: ContactMethod[] = [
    {
        method: 'Email',
        contact: 'drabiksebastian@proton.me',
        link: 'mailto:drabiksebastian@proton.me',
        icon: SiProtonmail,
    },
    {
        method: 'GitHub',
        contact: 'SebastianDrabik',
        link: 'https://github.com/SebastianDrabik',
        icon: FaGithub,
    }
]

