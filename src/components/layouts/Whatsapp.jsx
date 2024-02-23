import logoWhatsapp from '../../assets/logoWhatsapp.png'
const Whatsapp = () => {
    return (
        <div className='logo-whatsapp'>
            <a href="https://api.whatsapp.com/send/?phone=543815633407&text=Hola%21+Quisiera+saber+m%C3%A1s+informaci%C3%B3n+de+&type=phone_number&app_absent=0" target='_blank'>
                <img src={logoWhatsapp} alt="logo whatsapp" className='img-fluid ' />
            </a>
        </div>
    );
};

export default Whatsapp;