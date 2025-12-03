import { Header } from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { CompanySections,products,support,legal } from "../../constants/config";
import { NAVITEMS } from "../../constants/config";
export function RouteLayout() {
    return (
        <>
            <Header nav_Items={NAVITEMS} />
            <Outlet/>
            <Footer CompanySections={CompanySections} products={products} support={support} legal={legal} />
        </>

    )
}