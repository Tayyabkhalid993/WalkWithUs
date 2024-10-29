'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CategoryHeader(){
    const links =[
        {name:'Home',href:'/'},
        {name:'Men',href:'/Men'},
        {name:'Women',href:'/Women'},
        {name:'Teens',href:'/Teens'}
    ]
    const pathname = usePathname();
    return(
        <section className="flex gap-12 lg:flex 2xl:ml-16">
            {links.map((link,idx)=>(
                <div key={idx}>
                     {pathname === link.href ? (
                        <Link className="text-lg font-semibold text-primary" href={link.href}>
                            {link.name}
                        </Link>
                     ):(
                        <Link className="text-lg font-semibold text-gray-600 transition duration-200 hover:text-primary" href={link.href}>
                            {link.name}
                        </Link>
                     )}
                </div>
            ))}
        </section>
    )
}
