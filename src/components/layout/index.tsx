import { MenuApp } from './menu'

interface LayoutMenuProps {
    titulo?: string;
    children?: ReactNode;
}

export const LayoutMenu: React.FC<LayoutMenuProps> = (props: LayoutMenuProps) => {
    return (
        <div className='app' >
            <section className='main-content columns is-fullheight'>
                <MenuApp/>
                <div className='container column is-8'>
                    <h1>Layout</h1>
                    <section className='section'>
                        <div className='card'>
                            <div className="card-header">
                                <p className='card-header-title'>
                                    {props.titulo}
                                </p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    )
}
