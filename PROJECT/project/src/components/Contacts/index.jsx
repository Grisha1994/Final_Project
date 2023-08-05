import React from 'react'
import Container from '../UI/Container'
import s from './style.module.css'
import {SlSocialInstagram} from 'react-icons/sl'
import {PiWhatsappLogoLight} from 'react-icons/pi'

export default function Contacts() {
  return (
    <footer>
        <Container className={s.container}>
            <div className={s.footer}>
                <div className={s.footer_contact}>
                    <h2>Contact</h2>
                    <p>+49 999 999 99 99</p>
                    <div className={s.icon}>
                        <a href="https://www.instagram.com/leroymerlinpolska/">
                            <p><SlSocialInstagram/></p>
                            <p>instagram</p>
                        </a>
                        <a href="https://www.leroymerlin.es/venta-whatsapp/">
                            <p><PiWhatsappLogoLight/></p>
                            <p>WhatsApp</p>
                        </a>
                    </div>
                </div>
                <div className={s.footer_address}>
                    <h2>Address</h2>
                    <a href="https://www.leroymerlin.pl/sklepy/warszawa-gigamarket,dh17.html?&&&&ds_rl=1282481&ds_rl=1269260&ds_rl=1282481&ds_rl=1269260&gclid=CjwKCAjw-7OlBhB8EiwAnoOEk3OzDbVYH7l16pTuzfrq5fyDhChbMdNUzvAvi92iHZ1T6h7y1obSIhoCBdsQAvD_BwE&gclsrc=aw.ds">
                        Leroy Merlin Warszawa, al. Jerozolimskie 244, 02-495
                    </a>
                    <div>
                        <p>Working Hours:</p>
                        <p>24 hours a day</p>
                    </div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39118.46065807409!2d20.902520304743074!3d52.20879583149709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471934ec784761b3%3A0x81dc9be77b4f17c7!2sLeroy%20Merlin%20Warszawa%20GIGAmarket!5e0!3m2!1sru!2spl!4v1689006508704!5m2!1sru!2spl" title='Leroy Merlin' loading="lazy"></iframe>
        </Container>
    </footer>
  )
}
