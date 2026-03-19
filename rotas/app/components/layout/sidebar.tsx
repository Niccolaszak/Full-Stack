import { NavLink } from '../ui/nav-link';
import { Home, Package, Settings } from 'lucide-react'

export function SideBar(){
    return(
        <aside style={{width:'250px', backgroundColor:'#f8f8f8', padding:'1rem', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <h1 style={{fontSize:'1.5rem', fontWeight:'bold'}}>
                Saas Core
            </h1>
            <nav style={{display:'flex', flexDirection:'column', gap:'0.5rem', marginTop:'2rem'}}>
                <NavLink href="/" >
                    <Home size={20}/>DashBoard
                </NavLink>
                <NavLink href="/products">
                    <Package size={20}/>Produtos
                </NavLink>
            </nav>

            <div style={{marginTop:'2rem'}}>
                <NavLink href="/settings">
                    <Settings size={20}/>Configurações
                </NavLink>
            </div>
        </aside>
    )

}