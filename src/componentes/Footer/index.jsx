import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/pablo.brague/?locale=es_LA'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/pablo_brague/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
    </footer>
}

export default Footer