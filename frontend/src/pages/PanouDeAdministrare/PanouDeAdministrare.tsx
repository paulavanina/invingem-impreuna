import { Blogs } from "../../components/Blogs/Blogs";
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu"
import { Users } from "../../components/Users/Users"

const PanouDeAdministrare = () => {
    return (
        <div>
            <HeaderMegaMenu />
            <Users />
            <Blogs />
        </div>
    )
}
export default PanouDeAdministrare;