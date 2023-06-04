import Logo from '@/assets/Logo-2.png';
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>

    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img src={Logo} alt="Logo" width={200}/>
            <p className='my-5'>
                Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique. 
            </p>
            <p>© Made In Havan All Rights Reserved.</p>
        </div>

        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <AnchorLink 
                className='hover:text-secondary-500 cursor-pointer'
                onClick={() => setSelectedPage(SelectedPage.Pujas)}
                href={`#${SelectedPage.Pujas}`}
            >
                <p className='my-5'>Pujas</p>
            </AnchorLink>
            <AnchorLink 
                className='hover:text-secondary-500 cursor-pointer'
                onClick={() => setSelectedPage(SelectedPage.Samskaras)}
                href={`#${SelectedPage.Samskaras}`}
            >
                <p className='my-5'>Samskaras</p>
            </AnchorLink>
            <AnchorLink 
                className='hover:text-secondary-500 cursor-pointer'
                onClick={() => setSelectedPage(SelectedPage.Outreach)}
                href={`#${SelectedPage.Outreach}`}
            >
                <p>Outreach</p>
            </AnchorLink>
        </div>

        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>Mass orci senectus</p>
            <p>(852) 99999999</p>
        </div>
    </div>

    </footer>
  )
}

export default Footer;