import NavSubMenu from "@/app/components/NavSubMenu";


export default function MenuLayout({
    children
} : {
    children: React.ReactNode;
}){


    return(
        <>
        <NavSubMenu/>
        {children}
        </>
    )
}