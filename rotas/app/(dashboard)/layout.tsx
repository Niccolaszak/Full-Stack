import { SideBar } from '../components/layout/sidebar'

export default function DashboardLayout({children} : {children: React.ReactNode}){
    return(
        <div style={{display:'flex', minHeight:'100vh'}}>
            <SideBar/>
                <main style={{flex:1, padding:'2rem'}}>
                    {children}
                </main>
        </div>
    )


}