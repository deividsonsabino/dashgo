import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExatchHref?: boolean;
}
export function ActiveLink({ children, shouldMatchExatchHref = false, ...rest }: ActiveLinkProps) {
    let { pathname  } = useRouter()
    pathname = pathname.replace('/', "")
    
    let isActive = false

    if (shouldMatchExatchHref && (pathname  === rest.href || pathname  === rest.as)) {
        isActive = true
    }

    if (!shouldMatchExatchHref && (pathname .startsWith(String(rest.href)) ||
    pathname .startsWith(String(rest.as)))) {
        isActive = true
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}