import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    //Nơi chứa tất cả layout hien tai ( gồm Header + sideBar)
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default HeaderOnly;
